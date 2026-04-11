---
title: "Method: projects.locations.assets.patch \_|\_ Migration Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/patch
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/patch
  title: "Method: projects.locations.assets.patch \_|\_ Migration Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
Method: projects.locations.assets.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Updates the parameters of an asset.
HTTP request
PATCH https://migrationcenter.googleapis.com/v1/{asset.name=projects/*/locations/*/assets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
asset. name
string
Output only. The full name of the asset.
Query parameters
Parameters
update Mask
string ( FieldMask format)
Required. Field mask is used to specify the fields to be overwritten in the Asset resource by the update. The values specified in the updateMask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
request Id
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Request body
The request body contains an instance of Asset .
Response body
If successful, the response body contains an instance of Asset .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
