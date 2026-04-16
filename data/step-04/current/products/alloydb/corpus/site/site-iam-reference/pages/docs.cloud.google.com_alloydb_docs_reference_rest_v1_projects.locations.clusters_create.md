---
title: "Method: projects.locations.clusters.create \_|\_ AlloyDB for PostgreSQL \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters/create
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters/create
  title: "Method: projects.locations.clusters.create \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Method: projects.locations.clusters.create
Stay organized with collections
Save and categorize content based on your preferences.
Creates a new Cluster in a given project and location.
HTTP request
POST https://alloydb.googleapis.com/v1/{parent=projects/*/locations/*}/clusters
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
Authorization requires the following IAM permission on the specified resource parent :
alloydb.clusters.create
Query parameters
Parameters
clusterId
string
Required. ID of the requesting object.
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
validateOnly
boolean
Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
Request body
The request body contains an instance of Cluster .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-15 UTC."],[],[]]
