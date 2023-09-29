---
title: "Add Carts Feature"
points: 21
difficulty: complex
tags: 
- carts
- multiple-solution
- end-to-end
dependencies:
---

## Description:

Ecommerce sites often feature some kind of cart system, where as our current project only allows you to checkout with a single product.

There are several ways you could implement this feature such as creating new cart related database tables, storing items in your cart in cookies, storing the products within a cache, etc. 

Regardless of your strategy, you should utilize the `POST /orders` endpoint to create your final order. This endpoint is already built to take a list of line items and their desired quantities.

Your goal is to implement carts however you think is best.

## Acceptance Criteria:

The customer can add many products to their cart and create an order with all of the products stored within the cart.

