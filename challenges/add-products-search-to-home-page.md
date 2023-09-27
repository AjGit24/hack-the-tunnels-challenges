---
title: "Add Products Search To Home Page"
points: 5
tags: 
- frontend
- css
- react
dependencies:
- add-search-bar-component
- get-products-search-term.md
---

## Description:

Checkout `client/src/pages/Home/Home.tsx` to get started,

Add the ability for users to search for products on the home page.

Use the `SearchBar` component to populate the `searchTerm` query parameter on the `GET /products?searchTerm=` endpoint.

After the ServiceAPI responds back with search results, set the products being displayed on the home page using `setProducts`.

## Acceptance Criteria:

When the user types in the `SearchBar` component's input, the products displayed on the home page update to match the user's desired search term.

