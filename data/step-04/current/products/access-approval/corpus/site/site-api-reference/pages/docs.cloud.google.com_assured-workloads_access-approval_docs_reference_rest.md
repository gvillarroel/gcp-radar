---
title: "Access Approval API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
  title: "Access Approval API \_|\_ Google Cloud Documentation"
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
Access Approval API
Stay organized with collections
Save and categorize content based on your preferences.
An API for controlling access to data by Google personnel.
REST Resource: v1.folders
REST Resource: v1.folders.approvalRequests
REST Resource: v1.organizations
REST Resource: v1.organizations.approvalRequests
REST Resource: v1.projects
REST Resource: v1.projects.approvalRequests
Service: accessapproval.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://accessapproval.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://accessapproval.googleapis.com
REST Resource: v1.folders
Methods
deleteAccessApprovalSettings
DELETE /v1/{name=folders/*/accessApprovalSettings}
Deletes the settings associated with a project, folder, or organization.
getAccessApprovalSettings
GET /v1/{name=folders/*/accessApprovalSettings}
Gets the Access Approval settings associated with a project, folder, or organization.
getServiceAccount
GET /v1/{name=folders/*/serviceAccount}
Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
updateAccessApprovalSettings
PATCH /v1/{settings.name=folders/*/accessApprovalSettings}
Updates the settings associated with a project, folder, or organization.
REST Resource: v1.folders.approvalRequests
Methods
approve
POST /v1/{name=folders/*/approvalRequests/*}:approve
Approves a request and returns the updated ApprovalRequest.
dismiss
POST /v1/{name=folders/*/approvalRequests/*}:dismiss
Dismisses a request.
get
GET /v1/{name=folders/*/approvalRequests/*}
Gets an approval request.
invalidate
POST /v1/{name=folders/*/approvalRequests/*}:invalidate
Invalidates an existing ApprovalRequest.
list
GET /v1/{parent=folders/*}/approvalRequests
Lists approval requests associated with a project, folder, or organization.
REST Resource: v1.organizations
Methods
deleteAccessApprovalSettings
DELETE /v1/{name=organizations/*/accessApprovalSettings}
Deletes the settings associated with a project, folder, or organization.
getAccessApprovalSettings
GET /v1/{name=organizations/*/accessApprovalSettings}
Gets the Access Approval settings associated with a project, folder, or organization.
getServiceAccount
GET /v1/{name=organizations/*/serviceAccount}
Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
updateAccessApprovalSettings
PATCH /v1/{settings.name=organizations/*/accessApprovalSettings}
Updates the settings associated with a project, folder, or organization.
REST Resource: v1.organizations.approvalRequests
Methods
approve
POST /v1/{name=organizations/*/approvalRequests/*}:approve
Approves a request and returns the updated ApprovalRequest.
dismiss
POST /v1/{name=organizations/*/approvalRequests/*}:dismiss
Dismisses a request.
get
GET /v1/{name=organizations/*/approvalRequests/*}
Gets an approval request.
invalidate
POST /v1/{name=organizations/*/approvalRequests/*}:invalidate
Invalidates an existing ApprovalRequest.
list
GET /v1/{parent=organizations/*}/approvalRequests
Lists approval requests associated with a project, folder, or organization.
REST Resource: v1.projects
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
