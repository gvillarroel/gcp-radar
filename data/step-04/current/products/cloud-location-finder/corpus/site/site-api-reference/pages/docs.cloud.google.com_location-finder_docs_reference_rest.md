---
title: "Cloud Location Finder API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest
  title: "Cloud Location Finder API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Send feedback
Cloud Location Finder API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.cloudLocations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.cloudLocations
Service: cloudlocationfinder.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1
https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudlocationfinder.googleapis.com
REST Resource: v1alpha.projects.locations
Methods
get
GET /v1alpha/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha.projects.locations.cloudLocations
Methods
get
GET /v1alpha/{name=projects/*/locations/*/cloudLocations/*}
Retrieves a resource containing information about a cloud location.
list
GET /v1alpha/{parent=projects/*/locations/*}/cloudLocations
Lists cloud locations under a given project and location.
search
GET /v1alpha/{parent=projects/*/locations/*}/cloudLocations:search
Searches for cloud locations from a given source location.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.cloudLocations
Methods
get
GET /v1/{name=projects/*/locations/*/cloudLocations/*}
Retrieves a resource containing information about a cloud location.
list
GET /v1/{parent=projects/*/locations/*}/cloudLocations
Lists cloud locations under a given project and location.
search
GET /v1/{parent=projects/*/locations/*}/cloudLocations:search
Searches for cloud locations from a given source location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-06 UTC."],[],[]]
