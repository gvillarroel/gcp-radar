---
title: "API Keys API Documentation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest
  title: "API Keys API Documentation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Reference
Send feedback
API Keys API
Stay organized with collections
Save and categorize content based on your preferences.
Manages the API keys associated with developer projects.
REST Resource: v2.keys
REST Resource: v2.operations
REST Resource: v2.projects.locations.keys
Service: apikeys.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://apikeys.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apikeys.googleapis.com
REST Resource: v2.keys
Methods
lookupKey
GET /v2/keys:lookupKey
Find the parent project and resource name of the API key that matches the key string in the request.
REST Resource: v2.operations
Methods
get
GET /v2/{name=operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2.projects.locations.keys
Methods
create
POST /v2/{parent=projects/*/locations/*}/keys
Creates a new API key.
delete
DELETE /v2/{name=projects/*/locations/*/keys/*}
Deletes an API key.
get
GET /v2/{name=projects/*/locations/*/keys/*}
Gets the metadata for an API key.
getKeyString
GET /v2/{name=projects/*/locations/*/keys/*}/keyString
Get the key string for an API key.
list
GET /v2/{parent=projects/*/locations/*}/keys
Lists the API keys owned by a project.
patch
PATCH /v2/{key.name=projects/*/locations/*/keys/*}
Patches the modifiable fields of an API key.
undelete
POST /v2/{name=projects/*/locations/*/keys/*}:undelete
Undeletes an API key which was deleted within 30 days.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
