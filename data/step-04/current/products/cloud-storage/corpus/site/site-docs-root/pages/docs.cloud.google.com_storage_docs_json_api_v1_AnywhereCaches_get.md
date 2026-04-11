---
title: "AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get
  title: "AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
AnywhereCaches: get
Stay organized with collections
Save and categorize content based on your preferences.
Retrieves a cache instance
for a specified bucket.
Required permissions
The authenticated user must have the storage.anywhereCaches.get
IAM permission on the bucket to use this method.
Request
HTTP request
GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID
In addition to standard query parameters , the following parameters apply to this method.
Parameters
Parameter name
Value
Description
Path parameters
bucket
string
Name of a bucket.
anywhereCacheID
string
A value that, along with the bucket's name, uniquely identifies the
cache.
To see an example of how to include parameters in a request, see the
JSON API Overview page.
Request body
Do not supply a request body with this method.
Response
If successful, this method returns an AnywhereCache resource in the response body.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
