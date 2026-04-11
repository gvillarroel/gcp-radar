---
title: "Method: organizations.locations.organizationImpacts.list \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationImpacts/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationImpacts/list
  title: "Method: organizations.locations.organizationImpacts.list \_|\_ Personalized\
    \ Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
Method: organizations.locations.organizationImpacts.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Lists assets impacted by organization events under a given organization and location.
HTTP request
GET https://servicehealth.googleapis.com/v1/{parent=organizations/*/locations/*}/organizationImpacts
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value using the form organizations/{organization_id}/locations/{location}/organizationImpacts .
organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID .
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of events that should be returned. Acceptable values are 1 to 100 , inclusive. The default value is 10 .
If more results are available, the service returns a nextPageToken that can be used to get the next page of results in subsequent list requests. The service may return fewer impacts than the requested pageSize .
pageToken
string
Optional. A token identifying a page of results the server should return.
Provide pageToken returned by a previous organizationImpacts.list call to retrieve the next page of results.
When paginating, all other parameters provided to organizationImpacts.list must match the call that provided the page token.
filter
string
Optional. A filter expression that filters resources listed in the response. The expression is in the form of field:value for checking if a repeated field contains a value.
Example: events:organizations%2F{organization_id}%2Flocations%2Fglobal%2ForganizationEvents%2Fevent-id
To get your {organization_id} , see Getting your organization resource ID .
Multiple filter queries are separated by spaces.
By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. Filter is supported for the following fields: events .
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"organizationImpacts" : [
{
object ( OrganizationImpact )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
organizationImpacts[]
object ( OrganizationImpact )
Output only. List of impacts for an organization affected by service health events.
nextPageToken
string
Output only. The continuation token, used to page through large result sets. Provide this value in a subsequent request as pageToken to retrieve the next page.
If this field is not present, there are no subsequent results.
unreachable[]
string
Output only. Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
servicehealth.organizationImpacts.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
