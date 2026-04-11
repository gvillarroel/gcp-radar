---
title: "CreateAssignedTargetingOptionsRequest \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/CreateAssignedTargetingOptionsRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/CreateAssignedTargetingOptionsRequest
  title: "CreateAssignedTargetingOptionsRequest \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
CreateAssignedTargetingOptionsRequest
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The CreateAssignedTargetingOptionsRequest is used to specify which assigned targeting options of a given targeting type should be created and added.
The request requires both a targetingType enum and a list of assignedTargetingOptions objects.
JSON representation
A request listing which assigned targeting options of a given targeting type should be created and added.
JSON representation
{
"targetingType" : enum ( TargetingType ) ,
"assignedTargetingOptions" : [
{
object ( AssignedTargetingOption )
}
]
}
Fields
targetingType
enum ( TargetingType )
Required. Identifies the type of this assigned targeting option.
assignedTargetingOptions[]
object ( AssignedTargetingOption )
Required. The assigned targeting options to create and add.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-27 UTC."],[],[]]
