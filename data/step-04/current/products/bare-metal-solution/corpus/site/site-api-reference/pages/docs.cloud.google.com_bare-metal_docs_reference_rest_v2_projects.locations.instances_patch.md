---
title: "Method: projects.locations.instances.patch \_|\_ Bare Metal Solution \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/patch
  title: "Method: projects.locations.instances.patch \_|\_ Bare Metal Solution \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Reference
Send feedback
Method: projects.locations.instances.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Update details of a single server.
HTTP request
PATCH https://baremetalsolution.googleapis.com/v2/{instance.name=projects/*/locations/*/instances/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
instance.name
string
Immutable. The resource name of this Instance . Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . Format: projects/{project}/locations/{location}/instances/{instance}
Query parameters
Parameters
updateMask
string ( FieldMask format)
The list of fields to update. The currently supported fields are: labels hyperthreadingEnabled osImage
Request body
The request body contains an instance of Instance .
Response body
If successful, the response body contains an instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
