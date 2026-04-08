---
title: "Access Approval API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
  title: "Access Approval API \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access Approval API | Google Cloud Documentation
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
Service: accessapproval.googleapis.com Discovery document
Service endpoint
REST Resource: v1.folders
REST Resource: v1.folders.approvalRequests
REST Resource: v1.organizations
REST Resource: v1.organizations.approvalRequests
REST Resource: v1.projects
REST Resource: v1.projects.approvalRequests
Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Was this helpful?
Send feedback
Access Approval API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service: accessapproval.googleapis.com Discovery document
Service endpoint
REST Resource: v1.folders
REST Resource: v1.folders.approvalRequests
REST Resource: v1.organizations
REST Resource: v1.organizations.approvalRequests
REST Resource: v1.projects
REST Resource: v1.projects.approvalRequests
An API for controlling access to data by Google personnel.
REST Resource: v1.folders
REST Resource: v1.folders.approvalRequests
REST Resource: v1.organizations
REST Resource: v1.organizations.approvalRequests
REST Resource: v1.projects
REST Resource: v1.projects.approvalRequests
Service: accessapproval. googleapis. com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://accessapproval.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://accessapproval.googleapis.com
REST Resource: v1. folders
Methods
delete Access Approval Settings
DELETE / v1/ {name=folders/ */ access Approval Settings}
Deletes the settings associated with a project, folder, or organization.
get Access Approval Settings
GET / v1/ {name=folders/ */ access Approval Settings}
Gets the Access Approval settings associated with a project, folder, or organization.
get Service Account
GET / v1/ {name=folders/ */ service Account}
Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
update Access Approval Settings
PATCH / v1/ {settings. name=folders/ */ access Approval Settings}
Updates the settings associated with a project, folder, or organization.
REST Resource: v1. folders. approval Requests
Methods
approve
POST / v1/ {name=folders/ */ approval Requests/ *}:approve
Approves a request and returns the updated ApprovalRequest.
dismiss
POST / v1/ {name=folders/ */ approval Requests/ *}:dismiss
Dismisses a request.
get
GET / v1/ {name=folders/ */ approval Requests/ *}
Gets an approval request.
invalidate
POST / v1/ {name=folders/ */ approval Requests/ *}:invalidate
Invalidates an existing ApprovalRequest.
list
GET / v1/ {parent=folders/ *}/ approval Requests
Lists approval requests associated with a project, folder, or organization.
REST Resource: v1. organizations
Methods
delete Access Approval Settings
DELETE / v1/ {name=organizations/ */ access Approval Settings}
Deletes the settings associated with a project, folder, or organization.
get Access Approval Settings
GET / v1/ {name=organizations/ */ access Approval Settings}
Gets the Access Approval settings associated with a project, folder, or organization.
get Service Account
GET / v1/ {name=organizations/ */ service Account}
Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
update Access Approval Settings
PATCH / v1/ {settings. name=organizations/ */ access Approval Settings}
Updates the settings associated with a project, folder, or organization.
REST Resource: v1. organizations. approval Requests
Methods
approve
POST / v1/ {name=organizations/ */ approval Requests/ *}:approve
Approves a request and returns the updated ApprovalRequest.
dismiss
POST / v1/ {name=organizations/ */ approval Requests/ *}:dismiss
Dismisses a request.
get
GET / v1/ {name=organizations/ */ approval Requests/ *}
Gets an approval request.
invalidate
POST / v1/ {name=organizations/ */ approval Requests/ *}:invalidate
Invalidates an existing ApprovalRequest.
list
GET / v1/ {parent=organizations/ *}/ approval Requests
Lists approval requests associated with a project, folder, or organization.
REST Resource: v1. projects
Methods
deleteAccessApprovalSettings
DELETE /v1/{name=projects/*/accessApprovalSettings}
Deletes the settings associated with a project, folder, or organization.
getAccessApprovalSettings
GET /v1/{name=projects/*/accessApprovalSettings}
Gets the Access Approval settings associated with a project, folder, or organization.
getServiceAccount
GET /v1/{name=projects/*/serviceAccount}
Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
updateAccessApprovalSettings
PATCH /v1/{settings.name=projects/*/accessApprovalSettings}
Updates the settings associated with a project, folder, or organization.
REST Resource: v1.projects.approvalRequests
Methods
approve
POST /v1/{name=projects/*/approvalRequests/*}:approve
Approves a request and returns the updated ApprovalRequest.
dismiss
POST /v1/{name=projects/*/approvalRequests/*}:dismiss
Dismisses a request.
get
GET /v1/{name=projects/*/approvalRequests/*}
Gets an approval request.
invalidate
POST /v1/{name=projects/*/approvalRequests/*}:invalidate
Invalidates an existing ApprovalRequest.
list
GET /v1/{parent=projects/*}/approvalRequests
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
