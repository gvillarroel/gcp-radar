---
title: "Method: projects.locations.jobs.list \_|\_ Cloud Scheduler \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/list
  title: "Method: projects.locations.jobs.list \_|\_ Cloud Scheduler \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Reference
Send feedback
Method: projects.locations.jobs.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists jobs.
HTTP request
GET https://cloudscheduler.googleapis.com/v1/{parent=projects/*/locations/*}/jobs
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The location name. For example: projects/PROJECT_ID/locations/LOCATION_ID .
Authorization requires the following IAM permission on the specified resource parent :
cloudscheduler.jobs.list
Query parameters
Parameters
pageSize
integer
Requested page size.
The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use nextPageToken to determine if more jobs exist.
pageToken
string
A token identifying a page of results the server will return. To request the first page results, pageToken must be empty. To request the next page of results, pageToken must be the value of nextPageToken returned from the previous call to jobs.list .
Request body
The request body must be empty.
Response body
Response message for listing jobs using jobs.list .
If successful, the response body contains data with the following structure:
JSON representation
{
"jobs" : [
{
object ( Job )
}
] ,
"nextPageToken" : string
}
Fields
jobs[]
object ( Job )
The list of jobs.
nextPageToken
string
A token to retrieve next page of results. Pass this value in the pageToken field in the subsequent call to jobs.list to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate.
The page token is valid for only 2 hours.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-scheduler
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-16 UTC."],[],[]]
