---
title: "Add GraphQL API"
points: 13
tags: 
- backend
- graphql
dependencies:
---

## Description:

Create the beginnings of a [GraphQL](https://graphql.org/) API for the service. This GraphQL API will be exposed on the route `POST /api/graphql`.

To satisfy this challenge create atleast one GraphQL query and one GraphQL mutation.

Add a new `graphql` folder within the `service/src/infrastructure` that contains your GraphQL schema, resolvers, and mutations.

Be sure to reuse the existing services code within the `service/src/services` folder.

## Acceptance Criteria:

A new endpoint `POST /api/graphql` is exposed with atleast one query and one mutation accessible. 