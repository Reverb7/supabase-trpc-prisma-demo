// src/index.js
const express = require('express');
const { createExpressMiddleware } = require('@trpc/server/adapters/express');
const { appRouter } = require('./trpc');
const { PrismaClient } = require('../generated/prisma');
const { initTRPC } = require('@trpc/server');         // (needed only if you create context with initTRPC)

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

// mount tRPC
app.use(
  '/trpc',
  createExpressMiddleware({
   router: appRouter,
   createContext: () => ({}),
 })
);

app.listen(port, () => {
  console.log(`🚀 tRPC server listening at http://localhost:${port}/trpc`);
});
