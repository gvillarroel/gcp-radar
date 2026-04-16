---
title: "HybridContentItem \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/HybridContentItem
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/HybridContentItem
  title: "HybridContentItem \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
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
HybridContentItem
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
HybridFindingDetails
JSON representation
An individual hybrid item to inspect. Will be stored temporarily during processing.
JSON representation
{
"item" : {
object ( ContentItem )
} ,
"findingDetails" : {
object ( HybridFindingDetails )
}
}
Fields
item
object ( ContentItem )
The item to inspect.
findingDetails
object ( HybridFindingDetails )
Supplementary information that will be added to each finding.
HybridFindingDetails
Populate to associate additional data with each finding.
JSON representation
{
"containerDetails" : {
object ( Container )
} ,
"fileOffset" : string ,
"rowOffset" : string ,
"tableOptions" : {
object ( TableOptions )
} ,
"labels" : {
string : string ,
...
}
}
Fields
containerDetails
object ( Container )
Details about the container where the content being inspected is from.
fileOffset
string ( int64 format)
Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding.
rowOffset
string ( int64 format)
Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position.
tableOptions
object ( TableOptions )
If the container is a table, additional information to make findings meaningful such as the columns that are primary keys. If not known ahead of time, can also be set within each inspect hybrid call and the two will be merged. Note that identifyingFields will only be stored to BigQuery, and only if the BigQuery action has been included.
labels
map (key: string, value: string)
Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with Finding 's produced by hybrid inspection.
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? .
Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)? .
No more than 10 labels can be associated with a given finding.
Examples:
"environment" : "production"
"pipeline" : "etl"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
