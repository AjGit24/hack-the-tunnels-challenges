---
title: "Get Orders Endpoint"
points: 3
difficulty: medium
tags:
  - backend
  - express
  - authorization
dependencies:
unlocks:
  - add-orders-admin-page
---

## Description:

Create an admin only accesible endpoint for requesting multiple orders. (`GET /orders`)

You will need to edit the following files:

- `service/src/infrastructure/api/routes/orders.ts`
- `service/src/services/Order.ts`

Add a new `GET /orders` route on `service/src/infrastructure/api/routes/orders.ts`

You will need to create a new `all` function on `service/src/services/Order.ts` which your new route on `orders.ts` will call.

You will also need to stop non admins from using this endpoint. Checkout the `createProduct` function on `service/src/infrastructure/api/routes/products.ts` for an example of how to verify a user has authorization to orders.

Hint: If you are confused, checkout how this is implemented for products on `service/src/services/Product.ts` and `service/src/infrastructure/api/routes/products.ts`.

## Acceptance Criteria:

There is a new endpoint that exposes orders under `GET /api/v1/orders` that is only accesible when the `Authorization` header is properly set.
