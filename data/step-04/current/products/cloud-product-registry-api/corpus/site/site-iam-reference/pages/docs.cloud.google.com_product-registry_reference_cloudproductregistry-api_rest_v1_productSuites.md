---
title: "REST Resource: productSuites \_|\_ Cloud Product Registry API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/productSuites
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/overview
source_metadata:
  url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/productSuites
  title: "REST Resource: productSuites \_|\_ Cloud Product Registry API \_|\_ Google\
    \ Cloud Documentation"
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
REST Resource: productSuites
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ProductSuite
JSON representation
Methods
Resource: ProductSuite
Represents a unified grouping of products sharing a common brand and market positioning.
JSON representation
{
"name" : string ,
"title" : string ,
"logicalProducts" : [
string
] ,
"replaced" : boolean ,
"replacement" : string
}
Fields
name
string
Identifier. The resource name of the ProductSuite. Format: productSuites/{productSuite}
title
string
Title of the ProductSuite.
logicalProducts[]
string
Output only. LogicalProducts under this suite. Format: logicalProducts/{logicalProduct}
replaced
boolean
Output only. Indicates whether the product suite has been replaced. If false , the product suite is active. If true , the product suite has been replaced by another type, and the replacement field contains the resource name of that replacement.
replacement
string
Output only. The resource name of the Logical Entity that the product suite is replaced by. This field is only populated when this product suite is replaced by some other type. Eg: logicalProducts/{logicalProduct}, logicalProducts/{logicalProduct}/variants/{variant}, etc.
Methods
get
Get details of a ProductSuite.
list
Lists ProductSuites.
lookupEntity
Look up entities.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-27 UTC."],[],[]]
