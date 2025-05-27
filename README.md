# Supabase + Prisma + tRPC Todos API

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
[![Node.js CI](https://img.shields.io/github/actions/workflow/status/your-username/supabase-trpc-prisma-demo/node.js.yml?branch=main)](https://github.com/your-username/supabase-trpc-prisma-demo/actions)

> A minimal proof-of-concept demonstrating how to build a fully-typed, end-to-end **Todos** service with Supabase (Postgres), Prisma ORM, and tRPC.

## 🚀 Features

- **Managed Postgres** via Supabase  
- **Type-safe ORM** with Prisma  
- **End-to-end typing** via tRPC  
- **Zero boilerplate**: Spin up a CRUD API in under 30 minutes

## 🖥️ Demo Endpoints

| Path               | Method | Body                             | Description          |
|--------------------|:------:|----------------------------------|----------------------|
| `/trpc/listTodos`  | GET    |                                  | List all todos       |
| `/trpc/addTodo`    | POST   | `{ "text": "My task" }`          | Create a new todo    |

## 🔧 Prerequisites

- **Node.js** ≥ 16  
- **npm** ≥ 8  
- A free [Supabase account](https://supabase.com/)

## 📦 Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone git@github.com:your-username/supabase-trpc-prisma-demo.git
   cd supabase-trpc-prisma-demo
   ```

2. **Configure your database schema**  
   In your Supabase project’s SQL editor, run:

   ```sql
   create extension if not exists "pgcrypto";

   create table todos (
     id         uuid       primary key default gen_random_uuid(),
     text       text       not null,
     created_at timestamptz default now()
   );
   ```

3. **Grab your connection string**  
   In Supabase: **Settings → Database → Connection string**  

4. **Set environment variables**  
   ```bash
   cp .env.example .env
   # Edit .env to set:
   # DATABASE_URL="postgresql://...supabase.co:5432/postgres?sslmode=require"
   ```

5. **Install dependencies & generate client**  
   ```bash
   npm install
   npx prisma generate
   ```

## ▶️ Running Locally

```bash
npm run start
```

By default this starts on port 4000:

```
🚀 tRPC server listening at http://localhost:4000/trpc
```

## 📡 Testing with curl or Postman

- **List todos**  
  ```bash
  curl -X GET http://localhost:4000/trpc/listTodos \
    -H "Content-Type: application/json" \
  ```

- **Add a todo**  
  ```bash
  curl -X POST http://localhost:4000/trpc/addTodo \
    -H "Content-Type: application/json" \
    -d '{"text":"Finish README"}'
  ```

## 📖 Learn More

- [Supabase Docs](https://supabase.com/docs)  
- [Prisma Docs](https://www.prisma.io/docs)  
- [tRPC Guide](https://trpc.io/docs)

## 📝 License

MIT © Louis Optimism (https://github.com/reverb7)
