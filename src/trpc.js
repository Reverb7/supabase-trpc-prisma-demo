// src/trpc.js
const { initTRPC } = require('@trpc/server');
const { z } = require('zod');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();
const t = initTRPC.create();

// Define your procedures
const appRouter = t.router({
  listTodos: t.procedure
    .query(() => prisma.todos.findMany({ orderBy: { created_at: 'desc' } })),
  addTodo: t.procedure
    .input(z.object({ text: z.string().min(1) }))
    .mutation(({ input }) =>
      prisma.todos.create({ data: { text: input.text } })
    ),
});

module.exports = { appRouter };
