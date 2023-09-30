---
title: "Scheduled Orders Report"
points: 13
difficulty: complex
tags:
  - backend
  - cron-job
dependencies:
unlocks:
---

## Description:

Setup a scheduled cron job that runs each hour that outputs a pdf with the information of all orders that have been created within that past hour.

Read the following [article](https://www.digitalocean.com/community/tutorials/nodejs-cron-jobs-by-examples) for more information on how you can setup cron jobs with Node.js.

To generate the pdf, we recommend trying the [`pdf-creator-node` package](https://www.npmjs.com/package/pdf-creator-node)

## Acceptance Criteria:

A scheduled cron job runs each hour outputting a pdf that displays each order which has occured in the past hour.
