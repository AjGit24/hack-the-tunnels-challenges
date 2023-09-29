---
title: "Push To Webhook On Order Create"
points: 8
difficulty: complex
tags: 
- backend
- webhooks
dependencies:
---

## Description:

When an Order is create, we should send a message to a [webhook](https://www.redhat.com/en/topics/automation/what-is-a-webhook) endpoint of your choosing.

Add a new `webhooks` folder within the `service/src/infrastructure` folder that contains any code you write relating to pushing information to webhooks.

Read the [following guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to learn how to get the webhook endpoint of a Discord channel.

POST-ing to this Discord channel webhook endpoint will create a message in the desired channel. 

To complete this challenge, provide proof that you have succesfully sent an "order created" related message to your desired webhook endpoint.

## Acceptance Criteria:

When an order is created, a webhook is succesfully notified of the event. The participant should include some information on what their choosen webhook was.