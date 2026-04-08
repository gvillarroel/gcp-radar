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
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: organizations.approvalRequests | Access Approval | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud provider access management
Access Approval
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Access Approval
Authenticate to Access Approval
REST reference
Access Approval APIs
REST Resources
folders
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
folders. approval Requests
Overview
approve
dismiss
get
invalidate
list
organizations
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
organizations. approval Requests
Overview
approve
dismiss
get
invalidate
list
projects
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
projects. approval Requests
Overview
approve
dismiss
get
invalidate
list
Types
Access Approval Service Account
Access Approval Settings
Crypto Key Version
List Approval Requests Response
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Resource: ApprovalRequest
Methods approve
dismiss
get
invalidate
list
Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Was this helpful?
Send feedback
REST Resource: organizations. approval Requests
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: ApprovalRequest
Methods approve
dismiss
get
invalidate
list
Resource: ApprovalRequest
JSON representation
Methods
Resource: Approval Request
A request for the customer to approve access to a resource.
JSON representation
See more code actions.
Light code theme
Dark code theme
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
requested Resource Name
string
The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names . The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
requested Augmented Info
object ( AugmentedInfo )
This field contains the augmented information of the request.
requested Resource Properties
object ( ResourceProperties )
Properties related to the resource represented by requestedResourceName.
requested Reason
object ( AccessReason )
The access reason for which approval is being requested.
requested Locations
object ( AccessLocations )
The locations for which approval is being requested.
request Time
string ( Timestamp format)
The time at which approval was requested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requested Expiration
string ( Timestamp format)
The original requested expiration for the approval. Calculated by adding the requestedDuration to the requestTime.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requested Duration
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
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
