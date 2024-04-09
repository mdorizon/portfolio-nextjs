import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  Skills,
} from './definitions';

export async function fetchSkills() {
  try {
    const data = await sql<Skills>`
    SELECT 
      c.id, 
      c.category, 
      json_agg(json_build_object('skill', s.skill)) AS skills
    FROM 
      skillcategories c
    JOIN 
      skills s ON c.id = s.category_id
    GROUP BY 
      c.id, c.category;
    `;

    const skill = data.rows;
    return skill;
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch skills data.');
  }
}