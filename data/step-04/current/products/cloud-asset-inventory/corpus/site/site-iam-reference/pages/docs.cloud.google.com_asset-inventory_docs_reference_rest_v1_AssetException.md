---
title: "AssetException \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AssetException
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AssetException
  title: "AssetException \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
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
AssetException
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ExceptionType
An exception of an asset.
JSON representation
{
"exceptionType" : enum ( ExceptionType ) ,
"details" : string
}
Fields
exceptionType
enum ( ExceptionType )
The type of exception.
details
string
The details of the exception.
ExceptionType
The type of exception.
Enums
EXCEPTION_TYPE_UNSPECIFIED
exceptionType is not applicable for the current asset.
TRUNCATION
The asset content is truncated.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-12 UTC."],[],[]]
