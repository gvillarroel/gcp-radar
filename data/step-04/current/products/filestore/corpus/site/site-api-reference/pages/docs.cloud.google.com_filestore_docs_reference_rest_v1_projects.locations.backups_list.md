---
title: "Method: projects.locations.backups.list \_|\_ Filestore \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups/list
  title: "Method: projects.locations.backups.list \_|\_ Filestore \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Reference
Send feedback
Method: projects.locations.backups.list
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
Lists all backups in a project for either a specified location or for all locations.
HTTP request
GET https://file.googleapis.com/v1/{parent=projects/*/locations/*}/backups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project and location for which to retrieve backup information, in the format projects/{projectNumber}/locations/{location} . In Filestore, backup locations map to Google Cloud regions, for example us-west1 . To retrieve backup information for all locations, use "-" for the {location} value.
Query parameters
Parameters
pageSize
integer
The maximum number of items to return.
pageToken
string
The nextPageToken value to use if there are additional results to retrieve for this list request.
orderBy
string
Sort results. Supported values are "name", "name desc" or "" (unsorted).
filter
string
List filter.
Request body
The request body must be empty.
Response body
ListBackupsResponse is the result of ListBackupsRequest.
If successful, the response body contains data with the following structure:
JSON representation
{
"backups" : [
{
object ( Backup )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
backups[]
object ( Backup )
A list of backups in the project for the specified location.
If the {location} value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.
nextPageToken
string
The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
unreachable[]
string
Unordered list. Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],[]]
