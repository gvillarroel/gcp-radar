---
title: "Method: projects.events.list \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/list
  title: "Method: projects.events.list \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
Method: projects.events.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Lists the specified events.
HTTP request
GET https://clouderrorreporting.googleapis.com/v1beta1/{projectName=projects/*}/events
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectName
string
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectID}/locations/{location} , where {projectID} is the Google Cloud Platform project ID and {location} is a Cloud region.
Examples: projects/my-project-123 , projects/my-project-123/locations/global .
For a list of supported locations, see Supported Regions . global is the default when unspecified.
Query parameters
Parameters
groupId
string
Required. The group for which events shall be returned. The groupId is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice .
serviceFilter
object ( ServiceContextFilter )
Optional. List only ErrorGroups which belong to a service context that matches the filter. Data for all service contexts is returned if this field is not specified.
timeRange
object ( QueryTimeRange )
Optional. List only data for the given time range. If not set a default time range is used. The field timeRangeBegin in the response will specify the beginning of this time range.
pageSize
integer
Optional. The maximum number of results to return per response.
pageToken
string
Optional. A nextPageToken provided by a previous response.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListEventsResponse .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/stackdriver-integration
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
