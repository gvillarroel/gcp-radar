---
title: "Address Validation API client libraries \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/client_libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/client_libraries
  title: "Address Validation API client libraries \_|\_ Google for Developers"
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
Resources
Send feedback
Address Validation API client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides instructions for getting started with the Address Validation API client libraries, focusing on C# implementation.
You'll learn how to install the necessary C# client library using the Install-Package command.
The guide details the authentication process using Application Default Credentials (ADC) and provides links for further setup information.
It includes a C# code snippet demonstrating how to use the client library to validate an address.
Links to additional resources like source code, issue tracker, and Stack Overflow are provided for further assistance.
This page shows how to get started with the client libraries for
Address Validation API.
Read more about the client libraries in Client Libraries
Explained .
Install the client library
Java
For more information, see
Setting Up a Java Development Environment
and Using Cloud Client Libraries .
For the complete installation instructions, see Google Address Validation API Client for Java .
Go
go get cloud.google.com/go/maps
For more information, see
Setting Up a Go Development Environment .
For the complete installation instructions, see Google Address Validation API Client for Go .
NodeJS
npm install @googlemaps/addressvalidation
For more information, see
Setting Up a Node.js Development Environment .
For the complete installation instructions, see Google Address Validation API Client for NodeJS .
Python
pip install google-maps-addressvalidation
For more information, see
Setting Up a Python Development Environment .
For the complete installation instructions, see Google Address Validation API Client for Python .
.NET
Install-Package Google.Maps.AddressValidation.V1 -Pre
For more information, see
Setting Up a C# Development Environment
and
Google Address Validation API Client for .NET .
Set up authentication
When you use client libraries, you use
Application Default Credentials (ADC)
to authenticate. For information about setting up ADC, see
Provide credentials for Application Default Credentials .
For information about using ADC with client libraries, see
Authenticate using client libraries .
Use the client library
See
Client library examples
for examples of how to send API requests using the client libraries.
Additional resources
Java
Source Code
GitHub Issue Tracker
Stack Overflow
Go
Source Code
Package Documentation
GitHub Issue Tracker
Stack Overflow
NodeJS
Source Code
GitHub Issue Tracker
Stack Overflow
Python
Source Code
GitHub Issue Tracker
Stack Overflow
.NET
Source Code
GitHub Issue Tracker
Stack Overflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To start using the Address Validation API client library in C#, install the `Google.Maps.AddressValidation.V1` package. Authenticate via Application Default Credentials (ADC). Utilize the `AddressValidationClient` to validate an address, creating a `ValidateAddressRequest` with properties like `PostalAddress`, `PreviousResponseId`, `EnableUspsCass`, and `SessionToken`. Send the request to the client and obtain a `ValidateAddressResponse`. Refer to linked resources for further assistance.\n"]]
