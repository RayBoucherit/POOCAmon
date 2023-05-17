import jsonFile from "../src/domain/res.json"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    jsonFile.forEach(async (value) =>{
        return await prisma.card.create({
            data: {
                name: value.name,
                img: value.img,
            },
        });
    })
    
  }
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      
    })