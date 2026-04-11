---
title: "LoggingQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LoggingQuery
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LoggingQuery
  title: "LoggingQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
LoggingQuery
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
SummaryField
JSON representation
Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.
In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results.
JSON representation
{
"filter" : string ,
"summaryFields" : [
{
object ( SummaryField )
}
] ,
// Union field summary_field_width can be only one of the following:
"summaryFieldStart" : integer ,
"summaryFieldEnd" : integer
// End of list of possible types for union field summary_field_width .
}
Fields
filter
string
Required. An advanced query using the Logging Query Language . The maximum length of the filter is 20000 characters.
summaryFields[]
object ( SummaryField )
Optional. The set of summary fields to display for this saved query.
Union field summary_field_width . The user's setting for number of characters to display for each summary field. In the Logs Explorer page of Google Cloud console, negative values are ignored and the default (0) means there is no truncation. summary_field_width can be only one of the following:
summaryFieldStart
integer
Characters will be counted from the start of the string.
summaryFieldEnd
integer
Characters will be counted from the end of the string.
SummaryField
A field from the LogEntry that is added to the summary line for a query in the Logs Explorer.
JSON representation
{
"field" : string
}
Fields
field
string
Optional. The field from the LogEntry to include in the summary line, for example resource.type or jsonPayload.name .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-27 UTC."],[],[]]
