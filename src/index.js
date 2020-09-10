const { PrismaClient } = require('@prisma/client')
const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.send('Hi There');
});

const port = 3000;

app.listen(port, function () {
  console.log('Listening on port 3000!')
})

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'Juan',
        email: 'Juan@prisma.ir',
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })