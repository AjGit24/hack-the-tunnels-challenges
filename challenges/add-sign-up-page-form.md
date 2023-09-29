---
title: "Add Sign Up Page Form"
points: 5
difficulty: medium
tags:
  - frontend
  - react
  - css
dependencies:
unlocks:
---

## Description:

Checkout: `client/src/pages/SignUp/SignUp.tsx`

Right now the Sign Up page does not have anyway to input the desired email and password of the the user signing up.

Create an input box for email and and [input](https://www.w3schools.com/tags/tag_input.asp) box for password.

Create a sign up button that when clicked calls `ServiceAPI` and to send a request to create a new account.

If the inputted email is already used by an existing account, an appropriate error message should be displayed.

## Acceptance Criteria:

There are boxes to input email and password. When you click the sign up button with an unsued email, you're able to create an account. If the email is already in use, you should see an appropriate error message.
