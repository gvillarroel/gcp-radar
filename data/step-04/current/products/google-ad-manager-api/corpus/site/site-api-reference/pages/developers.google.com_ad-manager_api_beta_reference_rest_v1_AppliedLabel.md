---
title: "AppliedLabel \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/AppliedLabel
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/AppliedLabel
  title: "AppliedLabel \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
AppliedLabel
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Applied Labels are used to represent a label that can be applied to an entity.
Applied Labels have two main fields: label (a string representing the label) and negated (a boolean to negate the label's effects).
The label field is required and has a specific format.
JSON representation
Represents a Label that can be applied to an entity.
JSON representation
{
"label" : string ,
"negated" : boolean
}
Fields
label
string
Required. The label to be applied. Format: "networks/{networkCode}/labels/{labelId}"
negated
boolean
Specifies whether or not to negate the effects of the label.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-20 UTC."],[],["A Label is represented in JSON as an object with two fields. The `label` field, a required string, indicates the label to be applied using the format \"networks/{networkCode}/labels/{labelId}\". The `negated` field, a boolean, determines if the label's effects should be reversed. This structure defines how a label and its application status are conveyed.\n"]]
