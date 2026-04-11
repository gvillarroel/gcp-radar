---
title: "AnywhereCaches: update \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update
  title: "AnywhereCaches: update \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
AnywhereCaches: update
Stay organized with collections
Save and categorize content based on your preferences.
Updates a cache instance
in a specified bucket. Only caches in a RUNNING state can be updated.
Required permissions
The authenticated user must have the storage.anywhereCaches.update IAM permission on the bucket to use this method.
Request
HTTP request
PATCH https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID
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
A value that, along with the bucket's name, uniquely identifies the cache.
To see an example of how to include parameters in a request, see the
JSON API Overview page.
Request body
In the request body, supply an AnywhereCache resource with the following properties:
Property name
Value
Description
Notes
Required Properties
ttl
string
The time to live (TTL) of data in the cache, in seconds. Values can be expressed in
seconds. For example: 70000s for 70,000 seconds. If not specified, defaults
to 86400s , which equates to 1 day.
writable
ingestOnWrite
boolean
Whether or not the cache ingests data as the data is written to the bucket.
writable
Response
If successful, this method returns a google.longrunning.Operation in the response body.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
