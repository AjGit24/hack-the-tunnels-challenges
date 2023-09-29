---
title: "Send Email On Order Create"
points: 8
difficulty: complex
tags: 
- backend
- email
- smtp
dependencies:
unlocks:
---

## Description:

When an Order is create, we should send a email with order information to the customer's email.

Add a new `email` folder within the `service/src/infrastructure` folder that contains any code you write relating to sending emails.

You are permitted to achieve this goal using any libraries you'd like. If your not sure where to get started, check out this [guide](https://miracleio.me/snippets/use-gmail-with-nodemailer) that showcases how you can use `nodemailer` with gmail to send emails 100% free.

## Acceptance Criteria:

When an order is created, an email containing order information is sent to the customer's email.