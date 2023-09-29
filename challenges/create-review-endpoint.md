---
title: "Create Review Endpoint"
points: 3
difficulty: medium
tags: 
- backend
- express
dependencies:
- add-reviews-table
unlocks:
- review-creation-ui
---

## Description:

Create an endpoint for creating a product review. (`POST /reviews`)

You will need to add the following files:
- `service/src/infrastructure/api/routes/reviews.ts`
- `service/src/services/Reviews.ts`

You will need to create a `create` function on `service/src/services/Reviews.ts` which your new route on `reviews.ts` will call.

This endpoint should take the following input through the request body:

```
{
    "text": {string},
    "rating: {number},
    "productId": {productId}
}
```

If a `text` or `rating` are not provided in the request body, then you should return an error message.

If the `productId` in the request body cannot be found in the database, then you should return an error message.

## Acceptance Criteria:

There is a new endpoint that can create a product review `POST /api/v1/reviews`.

If `text` or `rating` are missing, an appropriate error message is returned.

If `productId` is not found, an appropriate error message is returned.

Otherwise, the created product should be returned.

