---
title: "GcsSource \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/GcsSource
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/GcsSource
  title: "GcsSource \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Reference
Send feedback
GcsSource
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Format
Google Cloud Storage Object details to get the feedback label file from.
JSON representation
{
"format" : enum ( Format ) ,
"objectUri" : string
}
Fields
format
enum ( Format )
Required. File format which will be ingested.
objectUri
string
Required. The Google Cloud Storage URI of the file to import. Format: gs://bucket_name/object_name
Format
All permissible file formats.
Enums
FORMAT_UNSPECIFIED
Unspecified format.
CSV
CSV format.
JSON
JSON format.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
