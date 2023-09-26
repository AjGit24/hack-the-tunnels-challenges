---
title: "Delete Product Endpoint"
points: 3
tags: 
- backend
- express
- authorization
dependencies:
- add-deleted-column-to-products
---

## Description:

Create an admin only accesible endpoint for *soft* deleting a product. (`DELETE /products/:id`)

You will need to edit the following files:
- `service/src/infrastructure/api/routes/products.ts`
- `service/src/services/Product.ts`

Add a new `DELETE /products/:id` route on `service/src/infrastructure/api/routes/products.ts`

You will need to create a new `delete` function on `service/src/services/Product.ts` which your new route on `products.ts` will call.

This `delete` function should instead update the `deleted` column on desired product to `true`.

You will also need to stop non admins from using this endpoint. Checkout the `createProduct` function on `service/src/infrastructure/api/routes/products.ts` for an example of how to verify a user has authorization to products.

"Deleted" products should also not be accessible from `GET /products` and `GET products/:id`. 

Update the associated code so that deleted products are not returned from `GET /products` and an error message is returned from `GET products/:id` if a deleted product is accessed.

## Acceptance Criteria:

There is a new endpoint that can soft delete a product under `DELETE /api/v1/products/:id` that is only accesible when the `Authorization` header is properly set.

Additionally deleted products should not be returned from `GET /products` and an error message should be returned from `GET products/:id` if a deleted product is accessed.