---
title: "ImageRedactionConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ImageRedactionConfig
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ImageRedactionConfig
  title: "ImageRedactionConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
ImageRedactionConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Configuration for determining how redaction of images should occur.
JSON representation
{
"redactionColor" : {
object ( Color )
} ,
// Union field target can be only one of the following:
"infoType" : {
object ( InfoType )
} ,
"redactAllText" : boolean
// End of list of possible types for union field target .
}
Fields
redactionColor
object ( Color )
The color to use when redacting content from an image. If not specified, the default is black.
Union field target . Type of information to redact from images. target can be only one of the following:
infoType
object ( InfoType )
Only one per infoType should be provided per request. If not specified, and redactAllText is false, the DLP API will redact all text that it matches against all infoTypes that are found, but not specified in another ImageRedactionConfig.
redactAllText
boolean
If true, all text found in the image, regardless whether it matches an infoType, is redacted. Only one should be provided.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
