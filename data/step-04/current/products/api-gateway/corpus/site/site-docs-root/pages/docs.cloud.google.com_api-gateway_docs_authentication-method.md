---
title: "Choosing an Authentication Method \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/authentication-method
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/authentication-method
  title: "Choosing an Authentication Method \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Choosing an Authentication Method
API Gateway supports multiple authentication methods that are suited to different applications and use cases. API Gateway uses the authentication method that you specify in your service configuration to validate incoming requests before passing them to your API backend. This page provides an overview for each supported authentication method in API Gateway.
API keys
An API key is a simple string that identifies a
Google Cloud project for quota, billing, and monitoring purposes. A
developer generates an API key in a project in the Google Cloud console and
embeds that key in every call to your API as a query parameter or in a request header.
Use case
To use API Gateway features such as
quotas , you can pass in an API
key so that API Gateway can identify the Google Cloud project
that the client application is associated with. For more information, see
Using API Keys .
Service accounts
To identify a service that sends requests to your API, you use a
service account . The calling service
uses the service account's private key to sign a secure
JSON Web Token (JWT)
and sends the signed JWT in the request to your API.
Use case
JWTs and service accounts are well suited for microservices. For more
information, see
Authentication between services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
