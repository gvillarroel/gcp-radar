---
title: "ConditionBoostSpec \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConditionBoostSpec
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConditionBoostSpec
  title: "ConditionBoostSpec \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\
    \ Documentation"
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
ConditionBoostSpec
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Boost applies to products which match a condition.
JSON representation
{
"condition" : string ,
"boost" : number
}
Fields
condition
string
An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations.
Examples:
To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue":
(id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue"))
boost
number
Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0.
Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items.
Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely.
Setting to 0.0 means no boost applied. The boosting condition is ignored.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
