---
title: "Cloud Shell API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/reference/rest
  title: "Cloud Shell API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Reference
Send feedback
Cloud Shell API
Stay organized with collections
Save and categorize content based on your preferences.
Allows users to start, configure, and connect to interactive shell sessions running in the cloud.
REST Resource: v1.operations
REST Resource: v1.users.environments
Service: cloudshell.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudshell.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudshell.googleapis.com
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.users.environments
Methods
addPublicKey
POST /v1/{environment=users/*/environments/*}:addPublicKey
Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH.
authorize
POST /v1/{name=users/*/environments/*}:authorize
Sends OAuth credentials to a running environment on behalf of a user.
get
GET /v1/{name=users/*/environments/*}
Gets an environment.
removePublicKey
POST /v1/{environment=users/*/environments/*}:removePublicKey
Removes a public SSH key from an environment.
start
POST /v1/{name=users/*/environments/*}:start
Starts an existing environment, allowing clients to connect to it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-09 UTC."],[],[]]
