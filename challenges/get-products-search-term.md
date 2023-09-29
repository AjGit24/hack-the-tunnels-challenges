---
title: "Get Products Search Term"
points: 3
difficulty: medium
tags: 
- backend
- express
dependencies:
---

## Description:

Modify the `GET /products` endpoint to optionally take a query parameter called `searchTerm`. 

Ex: `GET /products?searchTerm=example`.

Modify the `getProducts` function on `service/src/infrastructure/api/routes/products.ts` to account for this new query parameter.

Additionally, add a new function to `service/src/services/Product.ts` called `search` that will be invoked if the `searchTerm` query parameter is present.

To implement the `search` function, read the [following guide](https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search#enabling-full-text-search) that details how query prisma using a search string.

## Acceptance Criteria:

If a searchTerm is present in the query parameters, the `GET /products` endpoint returns products relevant to the searchTerm.

Ex: `GET /products?searchTerm=example` could potentially return products with the title `example`.