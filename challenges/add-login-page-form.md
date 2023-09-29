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
---

## Description:

Checkout: ```client/src/pages/Login/Login.tsx```

Right now the login page does not have anyway to input the desired email and password of the the user logging in.

Create an input box for email and and [input](https://www.w3schools.com/tags/tag_input.asp) box for password. 

Create a login button that when clicked fires the `attemptLogin` function.

When this button is clicked, it should attempt to login using the email and password from the input boxes.

If the user enters invalid crendials, you should set "message" using the `setMessage` function.

## Acceptance Criteria:

There are boxes to input email and password. When you click the login button with valid credentials, you're able to login. With invalid credentials, you see an error message.
