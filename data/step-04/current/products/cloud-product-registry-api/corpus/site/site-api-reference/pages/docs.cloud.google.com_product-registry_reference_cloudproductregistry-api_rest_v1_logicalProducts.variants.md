---
title: "REST Resource: logicalProducts.variants \_|\_ Cloud Product Registry API \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts.variants
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest
source_metadata:
  url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts.variants
  title: "REST Resource: logicalProducts.variants \_|\_ Cloud Product Registry API\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: logicalProducts.variants
Stay organized with collections
Save and categorize content based on your preferences.
Resource: LogicalProductVariant
JSON representation
Methods
Resource: LogicalProductVariant
Represents a distinct offering derived from a primary product that retains core functionalities but offers specialized features for a specific market segment.
JSON representation
{
"name" : string ,
"title" : string ,
"lifecycleState" : enum ( LifecycleState ) ,
"replaced" : boolean ,
"replacement" : string
}
Fields
name
string
Identifier. The resource name of the LogicalProductVariant. Format: logicalProducts/{logicalProduct}/variants/{variant}
title
string
Display name of the LogicalProductVariant.
lifecycleState
enum ( LifecycleState )
Output only. Current Lifecycle state of the logical product variant.
replaced
boolean
Output only. Indicates whether the logical product variant has been replaced. If false , the variant is active. If true , the variant has been replaced by another type, and the replacement field contains the resource name of that replacement.
replacement
string
Output only. The resource name of the Logical Entity that the logical product variant is replaced by. This field is only populated when this logical product variant is replaced by some other type. Eg: logicalProducts/{logicalProduct}, productSuites/{productSuite}, etc.
Methods
get
Get details of a LogicalProductVariant.
list
Lists LogicalProductVariants matching given criteria.
lookupEntity
Look up entities.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-27 UTC."],[],[]]
