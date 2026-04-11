---
title: "Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest
  title: "Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
Route Optimization API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Route Optimization API provides methods for optimizing vehicle routes, minimizing overall cost, and managing operations.
The service endpoint for the API is https://routeoptimization.googleapis.com .
You can interact with the API using Google-provided client libraries or by making requests to the REST resources documented.
The API supports both individual ( optimizeTours ) and batch ( batchOptimizeTours ) optimization requests.
Operations can be monitored and managed via the v1.operations and v1.projects.locations.operations REST resources.
The Route Optimization API.
REST Resource: v1.operations
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
Service: routeoptimization.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://routeoptimization.googleapis.com
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.projects
Methods
batchOptimizeTours
POST /v1/{parent=projects/*}:batchOptimizeTours
Optimizes vehicle tours for one or more OptimizeToursRequest messages as a batch.
optimizeTours
POST /v1/{parent=projects/*}:optimizeTours
Sends an OptimizeToursRequest containing a ShipmentModel and returns an OptimizeToursResponse containing ShipmentRoute s, which are a set of routes to be performed by vehicles minimizing the overall cost.
optimizeToursLongRunning
POST /v1/{parent=projects/*}:optimizeToursLongRunning
This is a variant of the OptimizeTours method designed for optimizations with large timeout values.
optimizeToursUri
POST /v1/{parent=projects/*}:OptimizeToursUri
This is a variant of the OptimizeToursLongRunning method designed for optimizations with large timeout values and large input/output sizes.
REST Resource: v1.projects.locations
Methods
batchOptimizeTours
POST /v1/{parent=projects/*/locations/*}:batchOptimizeTours
Optimizes vehicle tours for one or more OptimizeToursRequest messages as a batch.
optimizeTours
POST /v1/{parent=projects/*/locations/*}:optimizeTours
Sends an OptimizeToursRequest containing a ShipmentModel and returns an OptimizeToursResponse containing ShipmentRoute s, which are a set of routes to be performed by vehicles minimizing the overall cost.
optimizeToursLongRunning
POST /v1/{parent=projects/*/locations/*}:optimizeToursLongRunning
This is a variant of the OptimizeTours method designed for optimizations with large timeout values.
optimizeToursUri
POST /v1/{parent=projects/*/locations/*}:OptimizeToursUri
This is a variant of the OptimizeToursLongRunning method designed for optimizations with large timeout values and large input/output sizes.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-19 UTC."],[],["The Route Optimization API provides four REST resources: `v1.operations`, `v1.projects`, `v1.projects.locations`, and `v1.projects.locations.operations`. Key actions include canceling, deleting, and listing operations; batch optimizing tours; and optimizing tours by sending `OptimizeToursRequest` and receiving `OptimizeToursResponse`. The API also allows retrieval of the latest status of long-running operations. All requests use a `POST` or `GET` method against a specific URI.\n"]]
