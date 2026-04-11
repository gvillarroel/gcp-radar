---
title: "Method: projects.getMetrics \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics
  title: "Method: projects.getMetrics \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Method: projects.getMetrics
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page describes how to get metrics data for scripts, such as number of executions and active users.
Metrics data is retrieved using a GET request to the provided URL, specifying the script ID in the path parameters.
Query parameters allow for specifying the granularity of metrics and applying filters.
The response body contains usage stats, including the number of active users, total executions, and failed executions, represented as a JSON object.
Authorization requires the https://www.googleapis.com/auth/script.metrics OAuth scope.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
MetricsGranularity
MetricsFilter
JSON representation
MetricsValue
JSON representation
Try it!
Get metrics data for scripts, such as number of executions and active users.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/metrics
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
Required field indicating the script to get metrics for.
Query parameters
Parameters
metricsGranularity
enum ( MetricsGranularity )
Required field indicating what granularity of metrics are returned.
metricsFilter
object ( MetricsFilter )
Optional field containing filters to apply to the request. This limits the scope of the metrics returned to those specified in the filter.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
JSON representation
{
"activeUsers" : [
{
object ( MetricsValue )
}
] ,
"totalExecutions" : [
{
object ( MetricsValue )
}
] ,
"failedExecutions" : [
{
object ( MetricsValue )
}
]
}
Fields
activeUsers[]
object ( MetricsValue )
Number of active users.
totalExecutions[]
object ( MetricsValue )
Number of total executions.
failedExecutions[]
object ( MetricsValue )
Number of failed executions.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.metrics
For more information, see the OAuth 2.0 Overview .
MetricsGranularity
The granularity of metric to return data for.
Enums
UNSPECIFIED_GRANULARITY
Default metric granularity used to query no metrics.
WEEKLY
Represents weekly metrics.
DAILY
Represents daily metrics over a period of 7 days.
MetricsFilter
Filter used to reduce the scope of the request.
JSON representation
{
"deploymentId" : string
}
Fields
deploymentId
string
Optional field indicating a specific deployment to retrieve metrics from.
MetricsValue
Metrics value that holds number of executions counted.
JSON representation
{
"value" : string ,
"startTime" : string ,
"endTime" : string
}
Fields
value
string
Indicates the number of executions counted.
startTime
string ( Timestamp format)
Required field indicating the start time of the interval.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
Required field indicating the end time of the interval.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
