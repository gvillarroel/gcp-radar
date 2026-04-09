---
title: "Method: keys.lookupKey \_|\_ API Keys API Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/keys/lookupKey
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/keys/lookupKey
  title: "Method: keys.lookupKey \_|\_ API Keys API Documentation \_|\_ Google Cloud\
    \ Documentation"
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
Method: keys.lookupKey
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the apikeys.keys.lookup permission on the parent project.
HTTP request
GET https://apikeys.googleapis.com/v2/keys:lookupKey
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
keyString
string
Required. Finds the project that owns the key string value.
Request body
The request body must be empty.
Response body
Response message for keys.lookupKey method.
If successful, the response body contains data with the following structure:
JSON representation
{
"parent" : string ,
"name" : string
}
Fields
parent
string
The project that owns the key with the value specified in the request.
name
string
The resource name of the API key. If the API key has been purged, resource name is empty.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
