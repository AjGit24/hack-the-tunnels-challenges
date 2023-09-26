---
title: "Recently Viewed Products Feature"
points: 8
tags: 
- frontend
- cookies
- react
dependencies:
---

## Description:

On the home page, the customer should be able to see a list of their most recently viewed products. Similar to the following section taken from Amazon:

![example](https://i.imgur.com/nGYToY7.png)

To create this feature, save the data from each product you in cookies to later surface on the home page.

When the user navigates to a product page, utilize the `useCookies` hook from the [`react-cookie`](https://www.npmjs.com/package/react-cookie) library to access the `setCookie`, `updateCookies`, and `removeCookie` functions and set the desired product information in cookies.

On `client/src/pages/Home/Home.tsx`, utilize the stored product information stored in cookies to populate a new section called "Recently Viewed Products". 

## Acceptance Criteria:

On the home page, a section appears showcasing the most recently viewed products.
