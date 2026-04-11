---
title: "Places API (New) \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest
  title: "Places API (New) \_|\_ Google for Developers"
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
Reference
Send feedback
Places API (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places API gives developers access to search and retrieval endpoints for places data.
The API offers functionalities such as place autocomplete, details retrieval, nearby search, and text-based search.
Developers can retrieve photos associated with places using the places.photos resource.
The service endpoint for the Places API is https://places.googleapis.com .
Google-provided client libraries are recommended for interacting with the API.
The Places API allows developers to access a variety of search and retrieval endpoints for a Place.
REST Resource: v1.places
REST Resource: v1.places.photos
Service: places.googleapis.com
To call this service, we recommend that you load the Places library using the Maps JavaScript API or use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://places.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://places.googleapis.com
REST Resource: v1.places
Methods
autocomplete
POST /v1/places:autocomplete
Returns predictions for the given input.
get
GET /v1/{name=places/*}
Get the details of a place based on its resource name, which is a string in the places/{place_id} format.
searchNearby
POST /v1/places:searchNearby
Search for places near locations.
searchText
POST /v1/places:searchText
Text query based place search.
REST Resource: v1.places.photos
Methods
getMedia
GET /v1/{name=places/*/photos/*/media}
Get a photo media with a photo reference string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-09 UTC."],[],["The Places API offers `v1.places` and `v1.places.photos` resources via the `places.googleapis.com` service. Developers can utilize Google-provided client libraries or their own to make API requests. The `v1.places` resource supports methods for place-related actions such as `autocomplete`, `get` (details), `searchNearby`, and `searchText`. The `v1.places.photos` resource's `getMedia` method retrieves photo media using a photo reference string. The service's base URL is `https://places.googleapis.com`.\n"]]
