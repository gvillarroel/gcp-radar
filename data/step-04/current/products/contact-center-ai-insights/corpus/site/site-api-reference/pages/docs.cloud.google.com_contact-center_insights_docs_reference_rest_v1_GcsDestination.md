---
title: "GcsDestination \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/GcsDestination
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/GcsDestination
  title: "GcsDestination \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
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
GcsDestination
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Format
Google Cloud Storage Object details to write the feedback labels to.
JSON representation
{
"format" : enum ( Format ) ,
"objectUri" : string ,
"addWhitespace" : boolean ,
"alwaysPrintEmptyFields" : boolean ,
"recordsPerFileCount" : string
}
Fields
format
enum ( Format )
Required. File format in which the labels will be exported.
objectUri
string
Required. The Google Cloud Storage URI to write the feedback labels to. The file name will be used as a prefix for the files written to the bucket if the output needs to be split across multiple files, otherwise it will be used as is. The file extension will be appended to the file name based on the format selected. E.g. gs://bucket_name/object_uri_prefix
addWhitespace
boolean
Optional. Add whitespace to the JSON file. Makes easier to read, but increases file size. Only applicable for JSON format.
alwaysPrintEmptyFields
boolean
Optional. Always print fields with no presence. This is useful for printing fields that are not set, like implicit 0 value or empty lists/maps. Only applicable for JSON format.
recordsPerFileCount
string ( int64 format)
Optional. The number of records per file. Applicable for either format.
Format
All permissible file formats. See recordsPerFileCount to override the default number of records per file.
Enums
FORMAT_UNSPECIFIED
Unspecified format.
CSV
CSV format. 1,000 labels are stored per CSV file by default.
JSON
JSON format. 1 label stored per JSON file by default.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
