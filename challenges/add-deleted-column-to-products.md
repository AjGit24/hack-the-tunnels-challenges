---
title: "Add Deleted Column To Products"
points: 2
difficulty: beginner-friendly
tags:
  - backend
  - databases
  - prisma
dependencies:
unlocks:
  - delete-product-endpoint
---

## Description:

Add a new boolean column named `deleted` on the products table.

This column will be used to build a ["Soft Delete"](https://www.jmix.io/blog/to-delete-or-to-soft-delete-that-is-the-question/) mechanism for products.

We need this soft delete mechanism because if we attempted to delete a product
being referenced in other table entries, it would require us to delete those
associated entries. Otherwise, it would cause a foreign key violation.

Create and run a migration that adds the `deleted` column to products. It should have a default value of `false`.

You can create a new migration by running `npx prisma migrate dev --name {your-migration-name-here}`. See [this guide](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate).

## Acceptance Criteria:

The prisma schema should now include a `deleted` column on the products table with a default value of `false`.

There should also be a new migration that applies this column to the database.
