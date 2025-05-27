const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() 
{
  // List all todos (should be empty at first)
  const all = await prisma.todos.findMany();
  console.log('Todos:', all);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
