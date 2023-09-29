---
title: "Add Reviews To Product Endpoint"
points: 2
difficulty: medium
tags: 
- backend
- express
- prisma
- databses
dependencies:
- add-reviews-table
unlocks:
- cache-product-data
- display-product-reviews
---

## Description:

Modify the `GET /products/:id` endpoint also return the reviews associated with the product.

You will need to modify the `find` function on `service/src/services/Product.ts` to additionally load the product's associated reviews. [This guide](https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries) details how you can do this.

## Acceptance Criteria:

The `GET /products/:id` endpoint also returns associated product reviews.

The response body should appear similar to the following:

```
{
    data: {
        product: {
            ...,
            reviews: []
        }
    error: ...
}
`