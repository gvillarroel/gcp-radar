---
title: "BigQuery Connection API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest
  title: "BigQuery Connection API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
BigQuery Connection API
Stay organized with collections
Save and categorize content based on your preferences.
Allows users to manage BigQuery connections to external data sources.
REST Resource: v1beta1.projects.locations.connections
REST Resource: v1.projects.locations.connections
Service: bigqueryconnection.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1
https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://bigqueryconnection.googleapis.com
REST Resource: v1beta1.projects.locations.connections
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/connections
Creates a new connection.
delete
DELETE /v1beta1/{name=projects/*/locations/*/connections/*}
Deletes connection and associated credential.
get
GET /v1beta1/{name=projects/*/locations/*/connections/*}
Returns specified connection.
getIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/connections/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/*}/connections
Returns a list of connections in the given project.
patch
PATCH /v1beta1/{name=projects/*/locations/*/connections/*}
Updates the specified connection.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/connections/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/connections/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
updateCredential
PATCH /v1beta1/{name=projects/*/locations/*/connections/*/credential}
Sets the credential for the specified connection.
REST Resource: v1.projects.locations.connections
Methods
create
POST /v1/{parent=projects/*/locations/*}/connections
Creates a new connection.
delete
DELETE /v1/{name=projects/*/locations/*/connections/*}
Deletes connection and associated credential.
get
GET /v1/{name=projects/*/locations/*/connections/*}
Returns specified connection.
getIamPolicy
POST /v1/{resource=projects/*/locations/*/connections/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/connections
Returns a list of connections in the given project.
patch
PATCH /v1/{name=projects/*/locations/*/connections/*}
Updates the specified connection.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/connections/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/connections/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-02 UTC."],[],[]]
