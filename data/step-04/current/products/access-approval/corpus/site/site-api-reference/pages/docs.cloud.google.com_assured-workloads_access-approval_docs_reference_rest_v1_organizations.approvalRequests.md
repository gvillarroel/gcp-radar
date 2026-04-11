---
title: "REST Resource: organizations.approvalRequests \_|\_ Access Approval \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests
  title: "REST Resource: organizations.approvalRequests \_|\_ Access Approval \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Send feedback
REST Resource: organizations.approvalRequests
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ApprovalRequest
JSON representation
Methods
Resource: ApprovalRequest
A request for the customer to approve access to a resource.
JSON representation
{
"name" : string ,
"requestedResourceName" : string ,
"requestedAugmentedInfo" : {
object ( AugmentedInfo )
} ,
"requestedResourceProperties" : {
object ( ResourceProperties )
} ,
"requestedReason" : {
object ( AccessReason )
} ,
"requestedLocations" : {
object ( AccessLocations )
} ,
"requestTime" : string ,
"requestedExpiration" : string ,
"requestedDuration" : string ,
// Union field decision can be only one of the following:
"approve" : {
object ( ApproveDecision )
} ,
"dismiss" : {
object ( DismissDecision )
}
// End of list of possible types for union field decision .
}
Fields
name
string
The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}".
requestedResourceName
string
The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names . The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
requestedAugmentedInfo
object ( AugmentedInfo )
This field contains the augmented information of the request.
requestedResourceProperties
object ( ResourceProperties )
Properties related to the resource represented by requestedResourceName.
requestedReason
object ( AccessReason )
The access reason for which approval is being requested.
requestedLocations
object ( AccessLocations )
The locations for which approval is being requested.
requestTime
string ( Timestamp format)
The time at which approval was requested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestedExpiration
string ( Timestamp format)
The original requested expiration for the approval. Calculated by adding the requestedDuration to the requestTime.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestedDuration
string ( Duration format)
The requested access duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field decision . The current decision on the approval request. decision can be only one of the following:
approve
object ( ApproveDecision )
Access was approved.
dismiss
object ( DismissDecision )
The request was dismissed.
Methods
approve
Approves a request and returns the updated ApprovalRequest.
dismiss
Dismisses a request.
get
Gets an approval request.
invalidate
Invalidates an existing ApprovalRequest.
list
Lists approval requests associated with a project, folder, or organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
