---
title: "Get started with Places API (New) client libraries \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/client-libraries
  title: "Get started with Places API (New) client libraries \_|\_ Google for Developers"
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
Places API
Guides
Send feedback
Get started with Places API (New) client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This documentation provides instructions for installing and utilizing the Google Places API client libraries across various programming languages including Java, Go, Node.js, Python, and .Net.
Authentication is handled through Application Default Credentials (ADC), streamlining the process of accessing the API securely.
Client libraries offer key functionalities such as retrieving place details, conducting place searches (nearby, text-based, and autocomplete), and fetching place photos.
Comprehensive code examples and further details are available through provided GitHub links for each supported language, allowing for deeper exploration and practical implementation.
Users are encouraged to modify provided code templates and refer to linked resources for complete code examples to fully leverage the Google Places API client libraries' capabilities.
This page shows how to get started with the client libraries for
Places API (New).
Read more about the client libraries in Client Libraries
Explained .
Install the client library
Maps JavaScript API
For more information, see
Load the Places Library .
Java
For more information, see
Setting Up a Java Development Environment
and Using Cloud Client Libraries .
For the complete installation instructions, see
Google Places API Client for Java .
Go
go get cloud.google.com/go/maps
For more information, see
Setting Up a Go Development Environment .
For the complete installation instructions, see
Google Places API Client for Go .
NodeJS
npm install @googlemaps/places
For more information, see
Setting Up a Node.js Development Environment .
For the complete installation instructions, see Google Places API Client for NodeJS .
Python
pip install --upgrade google-maps-places
For more information, see
Setting Up a Python Development Environment .
For the complete installation instructions, see
Python Client for Google Places .
.NET
Install-Package Google.Maps.Places.V1 -Pre
For more information, see
Setting Up a .NET Development Environment
and
.NET for Google Places .
Set up authentication
When you use client libraries, you use
Application Default Credentials (ADC)
to authenticate. For information about setting up ADC, see
Provide credentials for Application Default Credentials .
For information about using ADC with client libraries, see
Authenticate using client libraries .
Use the client library
See Client library
examples for
usage information.
Additional resources
Maps JavaScript API
Load the Maps JavaScript API
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To get started with Google Places API client libraries, first, install the library for your language (Java, Go, Node.js, Python, or .Net) using the provided commands or links to installation instructions. Next, set up Application Default Credentials (ADC) for authentication. Finally, use the client library by creating a client instance and calling the methods like `getPlace` or `SearchText` using example requests that require specific parameter modifications.\n"]]
