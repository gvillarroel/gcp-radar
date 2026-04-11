---
title: "Method: projects.groupStats.list \_|\_ Error Reporting \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.groupStats/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.groupStats/list
  title: "Method: projects.groupStats.list \_|\_ Error Reporting \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
Method: projects.groupStats.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Lists the specified groups.
HTTP request
GET https://clouderrorreporting.googleapis.com/v1beta1/{projectName=projects/*}/groupStats
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectName
string
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber} , where {projectID} and {projectNumber} can be found in the Google Cloud console . It may also include a location, such as projects/{projectID}/locations/{location} where {location} is a cloud region.
Examples: projects/my-project-123 , projects/5551234 , projects/my-project-123/locations/us-central1 , projects/5551234/locations/us-central1 .
For a list of supported locations, see Supported Regions . global is the default when unspecified. Use - as a wildcard to request group stats from all regions.
Query parameters
Parameters
groupId[]
string
Optional. List all ErrorGroupStats with these IDs. The groupId is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice .
serviceFilter
object ( ServiceContextFilter )
Optional. List only ErrorGroupStats which belong to a service context that matches the filter. Data for all service contexts is returned if this field is not specified.
timeRange
object ( QueryTimeRange )
Optional. List data for the given time range. If not set, a default time range is used. The field timeRangeBegin in the response will specify the beginning of this time range. Only ErrorGroupStats with a non-zero count in the given time range are returned, unless the request contains an explicit groupId list. If a groupId list is given, also ErrorGroupStats with zero occurrences are returned.
timedCountDuration
string ( Duration format)
Optional. The preferred duration for a single returned TimedCount . If not set, no timed counts are returned.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
alignment
enum ( TimedCountAlignment )
Optional. The alignment of the timed counts to be returned. Default is ALIGNMENT_EQUAL_AT_END .
alignmentTime
string ( Timestamp format)
Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
order
enum ( ErrorGroupOrder )
Optional. The sort order in which the results are returned. Default is COUNT_DESC .
pageSize
integer
Optional. The maximum number of results to return per response. Default is 20.
pageToken
string
Optional. A nextPageToken provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListGroupStatsResponse .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/stackdriver-integration
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
