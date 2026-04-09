---
title: "View grants in Privileged Access Manager \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-view-grants
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-view-grants
  title: "View grants in Privileged Access Manager \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View grants in Privileged Access Manager | Identity and Access Management (IAM) | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
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
Before you begin
View grants using the Google Cloud console
View grants programmatically Search grants
List grants
Get grants
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
View grants in Privileged Access Manager
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
View grants using the Google Cloud console
View grants programmatically Search grants
List grants
Get grants
You can view a grant's status and history, or revoke a grant for other
principals if it's active. Grant history is available for 30 days after a grant
has ended.
Before you begin
Make sure you have enabled Privileged Access Manager and set up permissions for it .
View grants using the Google Cloud console
To view a grant, complete the following instructions:
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project you want to view grants in.
Click the Grants tab, followed by the Grants for all users tab. This
tab contains all grants, the requesters for those grants, and the grant
status. Grants can have the following statuses:
Status
Description
Activating
The grant is in the process of being activated.
Activation failed
Privileged Access Manager couldn't grant the roles due to a
non-retriable error.
Active
The grant is active and the principal has access to the
resources permitted by the roles.
Approval awaited
The grant request is waiting on a decision from an
approver.
Denied
The grant request has been denied by an approver.
Ended
The grant has ended and the roles have been removed from the
principal.
Expired
The grant request has expired, as approval wasn't given within
24 hours.
Revoked
The grant is revoked, and the principal no longer has access
to the resources permitted by the roles.
Revoking
The grant is in the process of being revoked.
Withdrawing
The grant is in the process of being withdrawn.
Withdrawn
The grant is withdrawn, and the principal no longer has access
to the resources permitted by the roles.
Status Labels
In addition to these statuses, grants can have the following status
labels displayed next to their status, which indicate special conditions:
Modified through IAM
The IAM policy bindings associated with this grant have been
modified directly through IAM. For details on modified
bindings, see the IAM page in the
Google Cloud console. When a modified grant is revoked or ends,
Privileged Access Manager only removes the bindings it has created that haven't
been modified through IAM.
Modifying the IAM condition title or expression, or removing
the requester's access to the granted role is treated as an external
modification. Adding or modifying the IAM condition
description is not considered an external modification.
Privileged Access Manager checks for external modifications to grants every 5
minutes. It can take up to 5 minutes to reflect these changes. Transient
changes made and reverted within this 5-minute window might not be detected
by Privileged Access Manager.
Note: Each binding created by Privileged Access Manager has a time-based condition
that expires with the grant duration. As long as the time condition is not
altered, the requester's privileged access will end when the grant expires.
In the table, click more_vert
More options in the same row as an entitlement you want to inspect.
To view the grant details including its history, click View details .
You can also revoke a grant from this panel.
To revoke an active grant, click Revoke grant .
You can also view temporarily granted roles on the IAM page
in the Google Cloud console. On the View by principals tab, temporarily
granted roles have a condition of Created by: PAM .
View grants programmatically
To view grants programmatically, you can search, list, and get them.
Search grants
gcloud REST
More
The
gcloud alpha pam grants search
command searches for a grant you have created, can approve or
deny, or have already approved or denied. This method doesn't require specific
Privileged Access Manager permissions to use.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to. You can retrieve the ID by
viewing entitlements .
CALLER_RELATIONSHIP_TYPE : Use one of the
following values:
had-created : Returns grants the caller has
created.
had-approved : Returns grants the caller has
approved or denied.
can-approve : Returns grants the caller can
approve or deny.
RESOURCE_TYPE : Optional. The resource type that
the entitlement belongs to. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam grants search \
--entitlement = ENTITLEMENT_ID \
--caller-relationship = CALLER_RELATIONSHIP_TYPE \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants search `
--entitlement = ENTITLEMENT_ID `
--caller-relationship = CALLER_RELATIONSHIP_TYPE `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants search ^
--entitlement = ENTITLEMENT_ID ^
--caller-relationship = CALLER_RELATIONSHIP_TYPE ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
additionalEmailRecipients:
- bola@example.com
createTime: '2024-03-07T00:34:32.557017289Z'
justification:
unstructuredJustification: Renaming a file to mitigate issue #312
name: projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
id: hwqrt_1
requestedDuration: 3600s
requestedPrivilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
entitlementRoleBindingId: hwqrt_1
requester: cruz@example.com
state: DENIED
timeline:
events:
- eventTime: '2024-03-07T00:34:32.793769042Z'
requested:
expireTime: '2024-03-08T00:34:32.793769042Z'
- denied:
actor: alex@example.com
reason: Issue has already been resolved
eventTime: '2024-03-07T00:36:08.309116203Z'
updateTime: '2024-03-07T00:34:32.926967128Z'
The Privileged Access Manager API's
searchGrants
method searches for a grant you have created, can approve or
deny, or have already approved or denied. This method doesn't require specific
Privileged Access Manager permissions to use.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to. You can retrieve the ID by
viewing entitlements .
RELATIONSHIP_TYPE : Valid values are:
HAD_CREATED : Returns grants the caller has
created.
HAD_APPROVED : Returns grants the caller has
previously approved or denied.
CAN_APPROVE : Returns grants the caller can
approve or deny.
FILTER : Optional. Returns grants whose field
values match an
AIP-160 expression .
PAGE_SIZE : Optional. The number of items to
return in a response.
PAGE_TOKEN : Optional. Which page to start
the response from, using a page token returned in a previous response.
HTTP method and URL:
GET https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship= RELATIONSHIP_TYPE &filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship= RELATIONSHIP_TYPE &filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship= RELATIONSHIP_TYPE &filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"grants": [
{
"name": "projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
"createTime": "2024-03-06T03:08:49.330577625Z",
"updateTime": "2024-03-06T03:08:49.625874598Z",
"requester": "alex@example.com",
"requestedDuration": "3600s",
"justification": {
"unstructuredJustification": "Emergency service for outage"
},
"state": "APPROVAL_AWAITED",
"timeline": {
"events": [
{
"eventTime": "2024-03-06T03:08:49.462765846Z",
"requested": {
"expireTime": "2024-03-07T03:08:49.462765846Z"
}
}
]
},
"privilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin"
"id": "hwqrt_1"
}
]
}
},
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin",
"entitlementRoleBindingId": "hwqrt_1"
}
]
}
},
"additionalEmailRecipients": [
"bola@google.com"
]
}
]
}
List grants
gcloud REST
More
The
gcloud alpha pam grants list
command lists grants that belong to a specific
entitlement.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to. You can retrieve the ID by
viewing entitlements .
RESOURCE_TYPE : Optional. The resource type that
the entitlement belongs to. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam grants list \
--entitlement = ENTITLEMENT_ID \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants list `
--entitlement = ENTITLEMENT_ID `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants list ^
--entitlement = ENTITLEMENT_ID ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
additionalEmailRecipients:
- bola@example.com
createTime: '2024-03-07T00:34:32.557017289Z'
justification:
unstructuredJustification: Renaming a file to mitigate issue #312
name: projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
id: hwqrt_1
requestedDuration: 3600s
requestedPrivilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
entitlementRoleBindingId: hwqrt_1
requester: cruz@example.com
state: DENIED
timeline:
events:
- eventTime: '2024-03-07T00:34:32.793769042Z'
requested:
expireTime: '2024-03-08T00:34:32.793769042Z'
- denied:
actor: alex@example.com
reason: Issue has already been resolved
eventTime: '2024-03-07T00:36:08.309116203Z'
updateTime: '2024-03-07T00:34:32.926967128Z'
The Privileged Access Manager API's
listGrants
method lists grants that belong to a specific
entitlement.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to. You can retrieve the ID by
viewing entitlements .
FILTER : Optional. Returns grants whose field
values match an
AIP-160 expression .
PAGE_SIZE : Optional. The number of items to
return in a response.
PAGE_TOKEN : Optional. Which page to start
the response from, using a page token returned in a previous response.
HTTP method and URL:
GET https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"grants": [
{
"name": "projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
"createTime": "2024-03-06T03:08:49.330577625Z",
"updateTime": "2024-03-06T03:08:49.625874598Z",
"requester": "alex@example.com",
"requestedDuration": "3600s",
"justification": {
"unstructuredJustification": "Emergency service for outage"
},
"state": "APPROVAL_AWAITED",
"timeline": {
"events": [
{
"eventTime": "2024-03-06T03:08:49.462765846Z",
"requested": {
"expireTime": "2024-03-07T03:08:49.462765846Z"
}
}
]
},
"privilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin",
"id": "hwqrt_1"
}
]
}
},
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin",
"entitlementRoleBindingId": "hwqrt_1"
}
]
}
},
"additionalEmailRecipients": [
"bola@google.com"
]
}
]
}
Get grants
gcloud REST
More
The
gcloud alpha pam grants describe
command retrieves a specific grant.
Before using any of the command data below,
make the following replacements:
GRANT_ID : The ID of the grant you want the
details for.
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to.
RESOURCE_TYPE : Optional. The resource type that
the entitlement belongs to. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam grants describe \
GRANT_ID \
--entitlement = ENTITLEMENT_ID \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants describe `
GRANT_ID `
--entitlement = ENTITLEMENT_ID `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants describe ^
GRANT_ID ^
--entitlement = ENTITLEMENT_ID ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
additionalEmailRecipients:
- bola@example.com
createTime: '2024-03-07T00:34:32.557017289Z'
justification:
unstructuredJustification: Renaming a file to mitigate issue #312
name: projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
id: hwqrt_1
requestedDuration: 3600s
requestedPrivilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
entitlementRoleBindingId: hwqrt_1
requester: cruz@example.com
state: DENIED
timeline:
events:
- eventTime: '2024-03-07T00:34:32.793769042Z'
requested:
expireTime: '2024-03-08T00:34:32.793769042Z'
- denied:
actor: alex@example.com
reason: Issue has already been resolved
eventTime: '2024-03-07T00:36:08.309116203Z'
updateTime: '2024-03-07T00:34:32.926967128Z'
The Privileged Access Manager API's
getGrant
method retrieves a specific grant.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The ID of the entitlement
that the grant belongs to.
GRANT_ID : The ID of the
grant you want the details for.
HTTP method and URL:
GET https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ,
"createTime": "2024-03-06T03:08:49.330577625Z",
"updateTime": "2024-03-06T03:08:49.625874598Z",
"requester": "alex@example.com",
"requestedDuration": "3600s",
"justification": {
"unstructuredJustification": "Emergency service for outage"
},
"state": "APPROVAL_AWAITED",
"timeline": {
"events": [
{
"eventTime": "2024-03-06T03:08:49.462765846Z",
"requested": {
"expireTime": "2024-03-07T03:08:49.462765846Z"
}
}
]
},
"privilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin"
"id": "hwqrt_1"
}
]
}
},
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID ",
"roleBindings": [
{
"role": "roles/storage.admin",
"entitlementRoleBindingId": "hwqrt_1"
}
]
}
},
"additionalEmailRecipients": [
"bola@google.com"
]
}
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
