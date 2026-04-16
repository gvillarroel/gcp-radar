---
title: "DataProfileBigQueryRowSchema \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileBigQueryRowSchema
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileBigQueryRowSchema
  title: "DataProfileBigQueryRowSchema \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
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
DataProfileBigQueryRowSchema
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The schema of data to be saved to the BigQuery table when the DataProfileAction is enabled.
JSON representation
{
// Union field data_profile can be only one of the following:
"tableProfile" : {
object ( TableDataProfile )
} ,
"columnProfile" : {
object ( ColumnDataProfile )
} ,
"fileStoreProfile" : {
object ( FileStoreDataProfile )
}
// End of list of possible types for union field data_profile .
}
Fields
Union field data_profile . Data profile type. data_profile can be only one of the following:
tableProfile
object ( TableDataProfile )
Table data profile column
columnProfile
object ( ColumnDataProfile )
Column data profile column
fileStoreProfile
object ( FileStoreDataProfile )
File store data profile column.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
