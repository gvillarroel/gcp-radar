---
title: "LookupEntityResponse \_|\_ Cloud Product Registry API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/LookupEntityResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest
source_metadata:
  url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/LookupEntityResponse
  title: "LookupEntityResponse \_|\_ Cloud Product Registry API \_|\_ Google Cloud\
    \ Documentation"
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
LookupEntityResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for LookupEntity.
JSON representation
{
// Union field entity can be only one of the following:
"logicalProduct" : {
object ( LogicalProduct )
} ,
"logicalProductVariant" : {
object ( LogicalProductVariant )
} ,
"productSuite" : {
object ( ProductSuite )
}
// End of list of possible types for union field entity .
}
Fields
Union field entity . Matched entity. entity can be only one of the following:
logicalProduct
object ( LogicalProduct )
Matched LogicalProduct.
logicalProductVariant
object ( LogicalProductVariant )
Matched LogicalProductVariant.
productSuite
object ( ProductSuite )
Matched ProductSuite.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-27 UTC."],[],[]]
