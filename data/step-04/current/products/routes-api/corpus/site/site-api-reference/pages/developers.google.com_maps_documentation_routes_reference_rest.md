---
title: "Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest
  title: "Routes API \_|\_ Google for Developers"
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
Routes API
Reference
Send feedback
Routes API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API provides access to functionalities for calculating distances and routes using the Google Maps platform.
Developers can interact with the API using Google-provided client libraries or by directly making RESTful API requests.
Two core methods offered are computeRouteMatrix for calculating distances between multiple origins and destinations, and computeRoutes for generating detailed route information.
The API utilizes a RESTful architecture and documentation is available through a discovery document.
The service endpoint for the Routes API is https://routes.googleapis.com .
routes.googleapis.com API.
REST Resource: v2
Service: routes.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://routes.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://routes.googleapis.com
REST Resource: v2
Methods
computeRouteMatrix
POST /distanceMatrix/v2:computeRouteMatrix
Takes in a list of origins and destinations and returns a stream containing route information for each combination of origin and destination.
computeRoutes
POST /directions/v2:computeRoutes
Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The routes.googleapis.com API offers two primary methods: `computeRouteMatrix` and `computeRoutes`. `computeRouteMatrix` takes a list of origins and destinations, outputting route data for each combination. `computeRoutes` calculates the primary route and optional alternatives between specified waypoints. The service endpoint is `https://routes.googleapis.com`, and a discovery document is available at `https://routes.googleapis.com/$discovery/rest?version=v2` to facilitate building client tools. Google-provided client libraries are recommended.\n"]]
