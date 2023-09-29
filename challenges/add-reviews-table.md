---
title: "Add Reviews Table"
points: 3
difficulty: beginner-friendly
tags: 
- backend
- prisma
- databases
dependencies:
---

## Description:

Create a new `reviews` table. The `reviews` table will store product reviews and therefore should have a `belongs to` association with the `products` table.

This table should have two columns, `text` and `rating` where rating is an integer.

Create this new table via a migration. You can create a new migration by running `npx prisma migrate dev --name {your-migration-name-here}`. See [this guide](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate).

## Acceptance Criteria:

The prisma schema should now include a `reviews` table and is associated with the products table.

There should also be a new migration that applies this change to the database.
