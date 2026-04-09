---
title: "Revoke grants in Privileged Access Manager \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-revoke-grants
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-revoke-grants
  title: "Revoke grants in Privileged Access Manager \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Revoke grants in Privileged Access Manager | Identity and Access Management (IAM) | Google Cloud Documentation
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
Revoke grants using the Google Cloud console
Revoke grants programmatically
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Revoke grants in Privileged Access Manager
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Revoke grants using the Google Cloud console
Revoke grants programmatically
After a principal has successfully requested a grant
against an entitlement and it is active, principals with the
privilegedaccessmanager.grants.revoke permission
can revoke the grant. Grants that don't have an active status can't be revoked.
Before you begin
Make sure you have enabled Privileged Access Manager and set up permissions for it .
Revoke grants using the Google Cloud console
To revoke a specific grant made against an entitlement, complete the following
instructions:
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project you want to revoke grants in.
Click the Grants tab, followed by the Grants for all users tab.
This contains all grants across all requesters, the grant statuses, and
their associated entitlement details.
In the table, click more_vert
More options in the same row as a grant you want to revoke.
To revoke an active grant, click Revoke grant .
To revoke all active grants made against an entitlement, complete the following
instructions:
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Click the Entitlements tab, followed by the
Entitlements for all users tab. Here you can find the available
entitlements, the roles they grant, and their valid requesters and
approvers.
In the table, click more_vert
More options in the same row as an entitlement you want to revoke the
grants for.
Click Revoke all grants .
Revoke grants programmatically
gcloud REST
More
The
gcloud pam grants revoke
command revokes an active grant.
Before using any of the command data below,
make the following replacements:
GRANT_ID : The ID of the grant you want to revoke.
You can retrieve the ID by
viewing grants .
ENTITLEMENT_ID : The ID of the entitlement that
the grant belongs to.
REVOKE_REASON : Why the grant has been revoked.
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
gcloud pam grants revoke \
GRANT_ID \
--entitlement = ENTITLEMENT_ID \
--reason = " REVOKE_REASON " \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud pam grants revoke `
GRANT_ID `
--entitlement = ENTITLEMENT_ID `
--reason = " REVOKE_REASON " `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud pam grants revoke ^
GRANT_ID ^
--entitlement = ENTITLEMENT_ID ^
--reason = " REVOKE_REASON " ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
auditTrail:
accessGrantTime: '2024-04-05T00:29:16.703069535Z'
accessRemoveTime: '2024-04-05T00:29:55.815041079Z'
createTime: '2024-04-05T00:27:43.822053968Z'
justification:
unstructuredJustification: Renaming a file to mitigate issue #312
name: projects/my-project/locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/projects/my-project
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
requestedDuration: 2700s
requester: cruz@example.com
state: REVOKED
timeline:
events:
- eventTime: '2024-04-05T00:27:44.014277946Z'
requested:
expireTime: '2024-04-06T00:27:44.014277946Z'
- approved:
actor: alex@example.com
reason: Access allowed under existing policy
eventTime: '2024-04-05T00:29:14.921828714Z'
- eventTime: '2024-04-05T00:29:14.921763008Z'
scheduled:
scheduledActivationTime: '2024-04-05T00:29:14.921763008Z'
- activated: {}
eventTime: '2024-04-05T00:29:16.703069535Z'
- eventTime: '2024-04-05T00:29:55.815041079Z'
revoked:
actor: alex@example.com
reason: Revoking due to new access policy
The Privileged Access Manager API's
revokeGrant
method revokes an active grant.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The ID of the entitlement that
the grant belongs to.
GRANT_ID : The ID of the grant you want to revoke.
You can retrieve the ID by
viewing grants .
REVOKE_REASON : The reason the grant was revoked.
HTTP method and URL:
POST https://privilegedaccessmanager.googleapis.com/v1/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :revoke
Request JSON body:
{
"reason": " REVOKE_REASON "
}
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
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :revoke"
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
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :revoke" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/my-project/locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1.OperationMetadata",
"createTime": "2024-03-06T23:07:48.716396505Z",
"target": "projects/my-project/locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
To check on the progress of a revoke operation, you can send a
GET request to the following endpoint:
https://privilegedaccessmanager.googleapis.com/v1/ SCOPE /locations/global/operations/ OPERATION_ID
Send a GET request to the following endpoint to list all
operations:
https://privilegedaccessmanager.googleapis.com/v1/ SCOPE /locations/global/operations
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
