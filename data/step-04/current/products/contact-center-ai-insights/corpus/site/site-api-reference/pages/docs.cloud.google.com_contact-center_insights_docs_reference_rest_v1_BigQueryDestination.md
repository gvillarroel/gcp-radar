---
title: "BigQueryDestination \_|\_ Customer Experience Insights \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/BigQueryDestination
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/BigQueryDestination
  title: "BigQueryDestination \_|\_ Customer Experience Insights \_|\_ Google Cloud\
    \ Documentation"
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
BigQueryDestination
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A BigQuery Table Reference.
JSON representation
{
"projectId" : string ,
"dataset" : string ,
"table" : string
}
Fields
projectId
string
A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.
dataset
string
Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
table
string
The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
