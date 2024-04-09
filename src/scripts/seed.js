const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedSkillCategory(client) {
  try {
    // Create the "skillsCategories" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS skillcategory (
      id SERIAL PRIMARY KEY,
      category VARCHAR(255) NOT NULL
    );
    `;
    console.log(`Created "skillsCategories" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding skillsCategories:', error);
    throw error;
  }
}

async function seedSkills(client) {
  try {
    // Create the "skills" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,
      skill VARCHAR(255) NOT NULL,
      category INTEGER,
      FOREIGN KEY (category) REFERENCES skillcategory(id)
    );
    `;
    console.log(`Created "skills" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding skills:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedSkillCategory(client);
  await seedSkills(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
