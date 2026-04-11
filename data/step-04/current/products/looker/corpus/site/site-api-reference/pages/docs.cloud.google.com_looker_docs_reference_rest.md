---
title: "Looker (Google Cloud core) API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/rest
  title: "Looker (Google Cloud core) API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
API Reference
Send feedback
Looker (Google Cloud core) API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.instances
REST Resource: v1.projects.locations.instances.backups
REST Resource: v1.projects.locations.operations
Service: looker.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://looker.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://looker.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.instances
Methods
create
POST /v1/{parent=projects/*/locations/*}/instances
Creates a new Instance in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*}
Delete instance.
export
POST /v1/{name=projects/*/locations/*/instances/*}:export
Export instance.
get
GET /v1/{name=projects/*/locations/*/instances/*}
Gets details of a single Instance.
import
POST /v1/{name=projects/*/locations/*/instances/*}:import
Import instance.
list
GET /v1/{parent=projects/*/locations/*}/instances
Lists Instances in a given project and location.
patch
PATCH /v1/{instance.name=projects/*/locations/*/instances/*}
Update Instance.
restart
POST /v1/{name=projects/*/locations/*/instances/*}:restart
Restart instance.
restore
POST /v1/{name=projects/*/locations/*/instances/*}:restore
Restore Looker instance.
REST Resource: v1.projects.locations.instances.backups
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/backups
Backup Looker instance.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/backups/*}
Delete backup.
get
GET /v1/{name=projects/*/locations/*/instances/*/backups/*}
list
GET /v1/{parent=projects/*/locations/*/instances/*}/backups
List backups of Looker instance.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-18 UTC."],[],[]]
