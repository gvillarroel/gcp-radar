---
title: "Uri \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/Uri
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/Uri
  title: "Uri \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
Uri
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Universal Resource Identifier that points to a resource that can be read and written by the Route Optimization API.
JSON representation
{
"uri" : string
}
Fields
uri
string
The URI of the resource. The resource may not yet exist.
The contents of the resource are encoded as either JSON or textproto. Only Google Cloud Storage resources are supported. If the resource is encoded as JSON, the resource name must be suffixed with .json . If the resource is encoded as textproto, the resource name must be suffixed with .txtpb . For example, a Google Cloud Storage URI to a JSON encoded file might look like: gs://bucket/path/input/object.json .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
