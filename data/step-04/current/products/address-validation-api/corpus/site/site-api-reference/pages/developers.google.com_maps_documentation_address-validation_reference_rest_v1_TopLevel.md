---
title: "Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel
  title: "Address Validation API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Address Validation API
Reference
Send feedback
Address Validation API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API verifies the accuracy of addresses and provides information about their deliverability.
It returns details on the correctness of address components, geocodes, and an overall deliverability verdict.
Developers can interact with the API using Google-provided client libraries or by directly making API requests.
The API offers two main methods: validateAddress for validating an address and provideValidationFeedback for providing feedback on validation outcomes.
The Address Validation API allows developers to verify the accuracy of addresses. Given an address, it returns information about the correctness of the components of the parsed address, a geocode, and a verdict on the deliverability of the parsed address.
REST Resource: v1
Service: addressvalidation.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://addressvalidation.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://addressvalidation.googleapis.com
REST Resource: v1
Methods
provideValidationFeedback
POST /v1:provideValidationFeedback
Feedback about the outcome of the sequence of validation attempts.
validateAddress
POST /v1:validateAddress
Validates an address.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
