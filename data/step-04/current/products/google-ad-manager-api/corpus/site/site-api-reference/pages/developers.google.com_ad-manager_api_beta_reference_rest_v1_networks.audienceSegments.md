---
title: "REST Resource: networks.audienceSegments \_|\_ Ad Manager API (Beta) \_|\_\
  \ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments
  title: "REST Resource: networks.audienceSegments \_|\_ Ad Manager API (Beta) \_\
    |\_ Google for Developers"
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
REST Resource: networks.audienceSegments
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The AudienceSegment resource represents a specific audience segment.
The AudienceSegment resource has name and displayName fields.
You can retrieve a specific AudienceSegment object using the get method or a list of them using the list method.
Resource: AudienceSegment
JSON representation
Methods
Resource: AudienceSegment
The AudienceSegment resource.
JSON representation
{
"name" : string ,
"displayName" : string
}
Fields
name
string
Identifier. The resource name of the AudienceSegment . Format: networks/{networkCode}/audienceSegments/{audienceSegmentId} The audienceSegmentId may have up to 1 of the following suffixes: - ~direct for directly licensed third-party segments - ~global for globally licensed third-party segments
displayName
string
Required. Display name of the AudienceSegment . The attribute has a maximum length of 255 characters.
Methods
get
API to retrieve an AudienceSegment object.
list
API to retrieve a list of AudienceSegment objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-05 UTC."],[],[]]
