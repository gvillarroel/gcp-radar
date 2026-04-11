---
title: "ListLocationsRequest \_|\_ Memorystore for Memcached \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/reference/rest/Shared.Types/ListLocationsRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/reference/rest/Shared.Types/ListLocationsRequest
  title: "ListLocationsRequest \_|\_ Memorystore for Memcached \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Reference
Send feedback
ListLocationsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Locations.ListLocations .
JSON representation
{
"name" : string ,
"filter" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"extraLocationTypes" : [
string
]
}
Fields
name
string
The resource that owns the locations collection, if applicable.
filter
string
A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo" , and is documented in more detail in AIP-160 .
pageSize
integer
The maximum number of results to return. If not set, the service selects a default.
pageToken
string
A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
extraLocationTypes[]
string
Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
