import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchSkills() {
  const skillsDatas = await prisma.skillcategories.findMany({
    orderBy: [
      {
        id: 'desc',
      }
    ],
    select: {
      id: true,
      category: true,
      skills: {
        select: {
          skill: true,
        }
      }
    }
  })
  return skillsDatas;
}

fetchSkills()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })