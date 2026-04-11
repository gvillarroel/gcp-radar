---
title: "Method: logicalProducts.variants.list \_|\_ Cloud Product Registry API \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts.variants/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest
source_metadata:
  url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts.variants/list
  title: "Method: logicalProducts.variants.list \_|\_ Cloud Product Registry API \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Product Registry API
APIs & Reference
Send feedback
Method: logicalProducts.variants.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists LogicalProductVariants matching given criteria.
HTTP request
GET https://cloudproductregistry.googleapis.com/v1/{parent=logicalProducts/*}/variants
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent logical product id. Format: logicalProducts/{logicalProduct}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of logical product variants to return. The service may return fewer than this value. If unspecified, at most 100 logical product variants will be returned. The maximum value is 500; values above 500 will be coerced to 500.
pageToken
string
Optional. A page token, received from a previous variants.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to variants.list must match the call that provided the page token.
Request body
The request body must be empty.
Response body
Response message for variants.list.
If successful, the response body contains data with the following structure:
JSON representation
{
"logicalProductVariants" : [
{
object ( LogicalProductVariant )
}
] ,
"nextPageToken" : string
}
Fields
logicalProductVariants[]
object ( LogicalProductVariant )
Matched LogicalProductVariants
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],[]]
