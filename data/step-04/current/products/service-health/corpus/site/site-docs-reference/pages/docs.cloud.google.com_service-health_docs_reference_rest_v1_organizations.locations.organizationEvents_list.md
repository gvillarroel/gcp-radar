---
title: "Method: organizations.locations.organizationEvents.list \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents/list
  title: "Method: organizations.locations.organizationEvents.list \_|\_ Personalized\
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
Method: organizations.locations.organizationEvents.list
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
OrganizationEventView
Lists organization events under a given organization and location.
HTTP request
GET https://servicehealth.googleapis.com/v1/{parent=organizations/*/locations/*}/organizationEvents
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value using the form organizations/{organization_id}/locations/{location}/organizationEvents .
organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID . location - The location to get the service health events from. To retrieve service health events of category = INCIDENT, use location = global .
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of events that should be returned. Acceptable values are 1 to 100 , inclusive. (The default value is 10 .) If more results are available, the service returns a nextPageToken that you can use to get the next page of results in subsequent list requests. The service may return fewer events than the requested pageSize .
pageToken
string
Optional. A token identifying a page of results the server should return.
Provide Page token returned by a previous organizationEvents.list call to retrieve the next page of results.
When paginating, all other parameters provided to organizationEvents.list must match the call that provided the page token.
filter
string
Optional. A filter expression that filters resources listed in the response. The expression takes the following forms:
field=value for category and state
field <, >, <=, or >= value for update_time
Examples: category=INCIDENT , update_time>=2000-01-01T11:30:00-04:00
Multiple filter queries are space-separated. Example: category=INCIDENT state=ACTIVE .
By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
Filter is supported for the following fields: category , state , update_time
view
enum ( OrganizationEventView )
Optional. OrganizationEvent fields to include in response.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"organizationEvents" : [
{
object ( OrganizationEvent )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
organizationEvents[]
object ( OrganizationEvent )
Output only. List of organization events affecting an organization.
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
servicehealth.organizationEvents.list
For more information, see the IAM documentation .
OrganizationEventView
The organization event fields to include in organizationEvents.list API response. This enum lists all possible organization event views.
Enums
ORGANIZATION_EVENT_VIEW_UNSPECIFIED
Unspecified event view. Default to ORGANIZATION_EVENT_VIEW_BASIC .
ORGANIZATION_EVENT_VIEW_BASIC
Includes all organization event fields except updates . This view is the default for organizationEvents.list API.
ORGANIZATION_EVENT_VIEW_FULL
Includes all organization event fields.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
