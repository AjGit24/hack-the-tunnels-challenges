---
title: "Get Products Elastic Search"
points: 13
difficulty: complex
tags: 
- backend
- elastic-search
- lucene
dependencies:
- get-products-search-term
---

## Description:

Modify the `search` function on `service/src/services/Product.ts` to utilize ElasticSearch or some other search / "Lucene" type store.

Add a new `search` folder within the `service/src/infrastructure` that contains your created index and or anything else you need to create a weighted search for products.

On the GitHub issue, describe the index for the issue reviever.

## Acceptance Criteria:

The `GET /products?searchTerm=` endpoint returns search returns that are weighted differently. The service now utilizes ElasticSearch or another Lucene / search store.