---
title: "Method: projects.locations.activityTypes.activities.query \_|\_ Policy Intelligence\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest/v1/projects.locations.activityTypes.activities/query
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest/v1/projects.locations.activityTypes.activities/query
  title: "Method: projects.locations.activityTypes.activities.query \_|\_ Policy Intelligence\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Reference
Send feedback
Method: projects.locations.activityTypes.activities.query
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
IAM Permissions
Activity
JSON representation
ObservationPeriod
JSON representation
Queries policy activities on Google Cloud resources.
HTTP request
GET https://policyanalyzer.googleapis.com/v1/{parent=projects/*/locations/*/activityTypes/*}/activities:query
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The container resource on which to execute the request. Acceptable formats: projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]
LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/
Query parameters
Parameters
filter
string
Optional. Filter expression to restrict the activities returned.
For serviceAccountLastAuthentication activities, supported filters are:
activities.full_resource_name {=} [STRING]
activities.fullResourceName {=} [STRING]
where [STRING] is the full resource name of the service account.
For serviceAccountKeyLastAuthentication activities, supported filters are:
activities.full_resource_name {=} [STRING]
activities.fullResourceName {=} [STRING] where [STRING] is the full resource name of the service account key.
pageSize
integer
Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
pageToken
string
Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response to the activities.query method.
JSON representation
{
"activities" : [
{
object ( Activity )
}
] ,
"nextPageToken" : string
}
Fields
activities[]
object ( Activity )
The set of activities that match the filter included in the request.
nextPageToken
string
If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permissions on the parent resource:
policyanalyzer.serviceAccountKeyLastAuthenticationActivities.query
policyanalyzer.serviceAccountLastAuthenticationActivities.query
For more information, see the IAM documentation .
Activity
JSON representation
{
"fullResourceName" : string ,
"activityType" : string ,
"observationPeriod" : {
object ( ObservationPeriod )
} ,
"activity" : {
object
}
}
Fields
fullResourceName
string
The full resource name that identifies the resource.
For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names .
activityType
string
The type of the activity.
observationPeriod
object ( ObservationPeriod )
The data observation period to build the activity.
activity
object ( Struct format)
A struct of custom fields to explain the activity.
ObservationPeriod
Represents data observation period.
JSON representation
{
"startTime" : string ,
"endTime" : string
}
Fields
startTime
string ( Timestamp format)
The observation start time. The time in this timestamp is always 07:00:00Z .
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
The observation end time. The time in this timestamp is always 07:00:00Z .
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
