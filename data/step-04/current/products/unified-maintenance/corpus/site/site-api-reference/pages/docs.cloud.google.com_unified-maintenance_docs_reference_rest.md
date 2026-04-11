---
title: "Maintenance API \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest
  title: "Maintenance API \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Reference
Send feedback
Maintenance API
Stay organized with collections
Save and categorize content based on your preferences.
The Maintenance API provides a centralized view of planned disruptive maintenance events across supported Google Cloud products. It offers users visibility into upcoming, ongoing, and completed maintenance, along with controls to manage certain maintenance activities, such as mainteance windows, rescheduling, and on-demand updates.
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.resourceMaintenances
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.resourceMaintenances
Service: maintenance.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://maintenance.googleapis.com/$discovery/rest?version=v1
https://maintenance.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://maintenance.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.resourceMaintenances
Methods
get
GET /v1beta/{name=projects/*/locations/*/resourceMaintenances/*}
Retrieve a single resource maintenance.
list
GET /v1beta/{parent=projects/*/locations/*}/resourceMaintenances
Retrieve a collection of resource maintenances.
summarize
GET /v1beta/{parent=projects/*/locations/*}/resourceMaintenances:summarize
Retrieves the statistics of a specific maintenance.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.resourceMaintenances
Methods
get
GET /v1/{name=projects/*/locations/*/resourceMaintenances/*}
Retrieve a single resource maintenance.
list
GET /v1/{parent=projects/*/locations/*}/resourceMaintenances
Retrieve a collection of resource maintenances.
summarize
GET /v1/{parent=projects/*/locations/*}/resourceMaintenances:summarize
Retrieves the statistics of a specific maintenance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
