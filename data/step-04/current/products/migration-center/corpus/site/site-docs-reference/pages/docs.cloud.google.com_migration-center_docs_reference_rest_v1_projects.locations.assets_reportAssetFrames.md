---
title: "Method: projects.locations.assets.reportAssetFrames \_|\_ Migration Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/reportAssetFrames
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/reportAssetFrames
  title: "Method: projects.locations.assets.reportAssetFrames \_|\_ Migration Center\
    \ \_|\_ Google Cloud Documentation"
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
Method: projects.locations.assets.reportAssetFrames
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Frames
JSON representation
Reports a set of frames.
HTTP request
POST https://migrationcenter.googleapis.com/v1/{parent=projects/*/locations/*}/assets:reportAssetFrames
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent of the resource.
Query parameters
Parameters
source
string
Required. Reference to a source.
Request body
The request body contains an instance of Frames .
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Frames
Collection of frame data.
JSON representation
{
"framesData" : [
{
object ( AssetFrame )
}
]
}
Fields
frames Data[]
object ( AssetFrame )
A repeated field of asset data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
