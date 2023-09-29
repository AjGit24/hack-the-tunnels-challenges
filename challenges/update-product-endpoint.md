---
title: "Update Product Endpoint"
points: 3
difficulty: beginner-friendly
tags:
  - backend
  - express
  - authorization
dependencies:
unlocks:
---

## Description:

Create an admin only accesible endpoint for updating one or many attributes of a product. (`PUT /products/:id`)

You will need to edit the following files:

- `service/src/infrastructure/api/routes/products.ts`
- `service/src/services/Product.ts`

Add a new `PUT /products/:id` route on `service/src/infrastructure/api/routes/products.ts`

You will need to create a new `update` function on `service/src/services/Product.ts` which your new route on `products.ts` will call.

You will also need to stop non admins from using this endpoint. Checkout the `createProduct` function on `service/src/infrastructure/api/routes/products.ts` for an example of how to verify a user has authorization to products.

## Acceptance Criteria:

There is a new endpoint that allows you to update a product under `PUT /api/v1/products/:id` that is only accesible when the `Authorization` header is properly set.

The endpoint should update all the attributes present in the request body.

Ex: Will just update the product's title

```
{
	"title": "test",
}
```

Ex: Will update both the product's description and price

```
{
	"description": "test",
	"price": 1.99
}
```
