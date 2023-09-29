---
title: "Cache Product Data"
points: 8
difficulty: complex
tags:
  - backend
  - express
  - cache
  - redis
  - key-value
dependencies:
  - add-reviews-to-product-endpoint
unlocks:
---

## Description:

Each time the `GET /products/:id` endpoint is used, we have to re-query for a product and all it's associated reviews. To avoid having duplicate database queries and to improve the response time of our API, we should cache the product and it's reviews together as a document in a key-value store.

Some popular key-value stores include [Redis](https://redis.io/) and [Memcached](https://memcached.org/). You will need to install and setup one of these to complete this challenge.

You should add a new folder to `service/src/infrastructure` called `cache` that stores any code needed to communicate to your key-value store.

You should modify the `find` function on `service/src/services/Product.ts` to first check if the desired product is stored in the key-value store before asking the database to lookup the product and it's reviews.

If the product is not in the key-value store, complete the lookup via the database, then add it to the key-value store so the next user who requests this product will not need to put this work on the database.

## Acceptance Criteria:

The user has added setup a connection with the cache of their choice and has modfied the product service to cache products and their reviews together.
