---
title: "Google Workspace Marketplace API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/marketplace/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/marketplace/reference/rest
  title: "Google Workspace Marketplace API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Reference
Send feedback
Google Workspace Marketplace API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Enables Google Workspace Marketplace apps to integrate with Google's licensing and billing services.
Offers REST resources to manage customer and user licenses, including checking license status.
Provides a discovery document for building client libraries and tools interacting with the API.
Uses https://appsmarket.googleapis.com as the service endpoint for API requests.
Includes a deprecated method for tracking user-initiated installs, recommending Google Analytics instead.
Lets your Google Workspace Marketplace applications integrate with Google's installtion and licensing services.
Service: appsmarket.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://appsmarket.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://appsmarket.googleapis.com
REST Resource: v2.customerLicense
Methods
get
GET /appsmarket/v2/customerLicense/{applicationId}/{customerId}
Gets the customer's licensing status to determine if they have access to a given app.
REST Resource: v2.userLicense
Methods
get
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
Gets the user's licensing status to determine if they have permission to use a given app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],["The `appsmarket.googleapis.com` service enables Google Workspace Marketplace apps to integrate with licensing and billing. Use client libraries or direct API requests with the provided discovery document and service endpoint (`https://appsmarket.googleapis.com`). Key actions include: retrieving a customer's license status via `GET /appsmarket/v2/customerLicense/{applicationId}/{customerId}`, and retrieving a user's license status using `GET /appsmarket/v2/userLicense/{applicationId}/{userId}`. There is a deprecated action to list notifications via `GET /appsmarket/v2/licenseNotification/{applicationId}`.\n"]]
