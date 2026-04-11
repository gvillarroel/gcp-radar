---
title: "EffectiveTagDetails \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/EffectiveTagDetails
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/EffectiveTagDetails
  title: "EffectiveTagDetails \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
EffectiveTagDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The effective tags and the ancestor resources from which they were inherited.
JSON representation
{
"effectiveTags" : [
{
object ( Tag )
}
] ,
"attachedResource" : string
}
Fields
effectiveTags[]
object ( Tag )
The effective tags inherited from the attachedResource . Note that tags with the same key but different values may attach to resources at a different hierarchy levels. The lower hierarchy tag value will overwrite the higher hierarchy tag value of the same tag key. In this case, the tag value at the higher hierarchy level will be removed. For more information, see tag inheritance .
attachedResource
string
The full resource name of the ancestor from which effectiveTags are inherited, according to tag inheritance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
