---
title: "Add Login Page Form"
points: 3
difficulty: beginner-friendly
tags:
  - frontend
  - react
  - css
  - start-here
dependencies:
unlocks:
  - add-sign-up-page-form
  - add-google-sso
---

## Description:

Checkout: `client/src/pages/Login/Login.tsx`

The login page you see right now doesn't have the spaces where you can type in your email and password.

Create an input box for email and and [input](https://www.w3schools.com/tags/tag_input.asp) box for password.

Create a login button that when clicked fires the `attemptLogin` function.

When this button is clicked, it should attempt to login using the email and password from the input boxes.

If the user enters invalid credentials, you should set "message" using the `setMessage` function.

## Acceptance Criteria:

There are boxes to input email and password. When you click the login button with valid credentials, you're able to login. With invalid credentials, you see an error message.
