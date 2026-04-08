---
title: "Method: organizations.approvalRequests.dismiss \_|\_ Access Approval \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss
  title: "Method: organizations.approvalRequests.dismiss \_|\_ Access Approval \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: organizations.approvalRequests.dismiss | Access Approval | Google Cloud Documentation
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
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Was this helpful?
Send feedback
Method: organizations. approval Requests. dismiss
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Request body
Response body
Authorization scopes
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Dismisses a request. Returns the updated ApprovalRequest.
NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests.
Returns NOT_FOUND if the request does not exist.
Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
HTTP request
POST https://accessapproval.googleapis.com/v1/{name=organizations/*/approvalRequests/*}:dismiss
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the ApprovalRequest to dismiss.
Authorization requires the following IAM permission on the specified resource name :
accessapproval.requests.dismiss
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ApprovalRequest .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
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
