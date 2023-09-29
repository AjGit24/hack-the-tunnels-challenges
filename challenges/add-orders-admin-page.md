---
title: "Add Orders Admin Page"
points: 3
difficulty: medium
tags:
  - frontend
  - react
  - css
  - integration
dependencies:
  - get-orders-endpoint
unlocks:
---

## Description:

Create a new page under `/admin/orders` that allows admins to view all orders. See `client/src/main.tsx` for an example of how to do page routing.

If a user who isn't logged in attempts to go to this page, they should be redirected to the home page. See `client/src/pages/Login/Login.tsx` for an example of how to redirect.

You will need to create a new ServiceAPI function on `client/src/infrastructure/ServiceAPI/Orders.ts` called `fetchOrders`.

This function will need to take `jwt` as a parameter so that the request will have proper authorization. For an example of a request that needs authorization see `createProduct`on `client/src/infrastructure/ServiceAPI/Products.ts`.

Your page should utilize the `fetchOrders` function to request the order data. For an example of this see `client/src/pages/Product/Product.tsx`.

## Acceptance Criteria:

When navigating to `/admin/orders` those who logged in can view all orders.

If not logged in, you will get redirected to `/`.
