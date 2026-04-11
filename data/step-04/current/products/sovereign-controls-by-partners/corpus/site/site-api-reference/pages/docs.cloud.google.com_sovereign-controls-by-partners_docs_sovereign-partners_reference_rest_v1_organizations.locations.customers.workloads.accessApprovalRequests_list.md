---
title: "Method: organizations.locations.customers.workloads.accessApprovalRequests.list\
  \ \_|\_ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.accessApprovalRequests/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.accessApprovalRequests/list
  title: "Method: organizations.locations.customers.workloads.accessApprovalRequests.list\
    \ \_|\_ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Sovereign Controls by Partners
Sovereign Partners
Reference
Send feedback
Method: organizations.locations.customers.workloads.accessApprovalRequests.list
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
AccessApprovalRequest
JSON representation
AccessReason
JSON representation
Type
Lists access requests associated with a workload
HTTP request
GET https://cloudcontrolspartner.googleapis.com/v1/{parent=organizations/*/locations/*/customers/*/workloads/*}/accessApprovalRequests
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent resource Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned.
pageToken
string
Optional. A page token, received from a previous accessApprovalRequests.list call. Provide this to retrieve the subsequent page.
filter
string
Optional. Filtering results.
orderBy
string
Optional. Hint for how to order the results.
Request body
The request body must be empty.
Response body
Response message for list access requests.
If successful, the response body contains data with the following structure:
JSON representation
{
"accessApprovalRequests" : [
{
object ( AccessApprovalRequest )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
accessApprovalRequests[]
object ( AccessApprovalRequest )
List of access approval requests
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudcontrolspartner.accessapprovalrequests.list
For more information, see the IAM documentation .
AccessApprovalRequest
Details about the Access request.
JSON representation
{
"name" : string ,
"requestTime" : string ,
"requestedReason" : {
object ( AccessReason )
} ,
"requestedExpirationTime" : string
}
Fields
name
string
Identifier. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/accessApprovalRequests/{access_approval_request}.
requestTime
string ( Timestamp format)
The time at which approval was requested.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
requestedReason
object ( AccessReason )
The justification for which approval is being requested.
requestedExpirationTime
string ( Timestamp format)
The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
AccessReason
Reason for the access.
JSON representation
{
"type" : enum ( Type ) ,
"detail" : string
}
Fields
type
enum ( Type )
Type of access justification.
detail
string
More detail about certain reason types. See comments for each type above.
Type
Type of access justification.
Enums
TYPE_UNSPECIFIED
Default value for proto, shouldn't be used.
CUSTOMER_INITIATED_SUPPORT
Customer made a request or raised an issue that required the principal to access customer data. detail is of the form ("#####" is the issue ID):
"Feedback Report: #####"
"Case Number: #####"
"Case ID: #####"
"E-PIN Reference: #####"
"Google-#####"
"T-#####"
GOOGLE_INITIATED_SERVICE
The principal accessed customer data in order to diagnose or resolve a suspected issue in services. Often this access is used to confirm that customers are not affected by a suspected service issue or to remediate a reversible system issue.
GOOGLE_INITIATED_REVIEW
Google initiated service for security, fraud, abuse, or compliance purposes.
THIRD_PARTY_DATA_REQUEST
The principal was compelled to access customer data in order to respond to a legal third party data request or process, including legal processes from customers themselves.
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
The principal accessed customer data in order to diagnose or resolve a suspected issue in services or a known outage.
CLOUD_INITIATED_ACCESS
Similar to 'GOOGLE_INITIATED_SERVICE' or 'GOOGLE_INITIATED_REVIEW', but with universe agnostic naming. The principal accessed customer data in order to diagnose or resolve a suspected issue in services or a known outage, or for security, fraud, abuse, or compliance review purposes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
