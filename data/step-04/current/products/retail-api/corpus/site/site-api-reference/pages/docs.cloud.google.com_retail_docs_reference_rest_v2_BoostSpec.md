---
title: "BoostSpec \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/BoostSpec
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/BoostSpec
  title: "BoostSpec \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Reference
Send feedback
BoostSpec
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Boost specification to boost certain items.
JSON representation
{
"conditionBoostSpecs" : [
{
object ( ConditionBoostSpec )
}
] ,
"skipBoostSpecValidation" : boolean
}
Fields
conditionBoostSpecs[]
object ( ConditionBoostSpec )
Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.
skipBoostSpecValidation
boolean
Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-24 UTC."],[],[]]
