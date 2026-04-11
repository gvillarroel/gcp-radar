---
title: "CloudAIDocumentOption \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption
  title: "CloudAIDocumentOption \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
CloudAIDocumentOption
Stay organized with collections
Save and categorize content based on your preferences.
Request Option for processing Cloud AI Document in CW Document.
JSON representation
{
"enableEntitiesConversions" : boolean ,
"customizedEntitiesPropertiesConversions" : {
string : string ,
...
}
}
Fields
enableEntitiesConversions
boolean
Whether to convert all the entities to properties.
customizedEntitiesPropertiesConversions
map (key: string, value: string)
If set, only selected entities will be converted to properties.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
