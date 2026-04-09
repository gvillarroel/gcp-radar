---
title: "Request temporary elevated access with Privileged Access Manager \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-request-temporary-elevated-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-request-temporary-elevated-access
  title: "Request temporary elevated access with Privileged Access Manager \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Request temporary elevated access with Privileged Access Manager | Identity and Access Management (IAM) | Google Cloud Documentation
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
Request a grant
Check your grant request status
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Request temporary elevated access with Privileged Access Manager
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Request a grant
Check your grant request status
To temporarily elevate your privileges, you can request a grant against an
entitlement in Privileged Access Manager (PAM) for a fixed
duration.
An entitlement contains roles that are granted
to you after your grant request is successful. These roles are removed by
Privileged Access Manager when the grant ends.
Keep the following in mind when you want to request a grant against an
entitlement:
You can only request grants against entitlements that you have been added to.
To be added to an entitlement, contact the principal administering the
entitlement.
One user can have a maximum of 10 open grants per entitlement at a time;
these grants can be in either the Active or Approval awaited state.
You can't request a grant with the same scope as an existing grant in the
Active or Approval awaited state.
Depending on how it's set up, a grant request might require approval to be
granted.
If a grant request requires approval and isn't approved or denied in 24 hours,
the grant status is changed to Expired . After this, you must make a new
grant request if you still need elevated privileges.
Successful grant requests might take a few minutes to take effect.
Request a grant
Console gcloud REST
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project where you want to request a grant.
In the My entitlements tab, find the entitlement to request against, and
then click Request grant in the same row.
For entitlements that are inherited from a parent folder or organization,
the scope of the grant is automatically adjusted to the selected organization,
folder, or project. You can request a grant against
the inherited entitlement at the child resource level.
This feature is available in preview .
If the Security Command Center Premium or Enterprise tier is activated, then
you can customize the scope of your grant request to include only some
specific roles and resources. This feature is available in preview .
Turn on the Customize scope toggle.
Add the required resource filters.
You can add up to five resource filters.
Select the required roles.
Provide the following details:
The duration required for the grant, up to the maximum duration set on the
entitlement.
If required, a justification for the grant.
Optional: Email addresses for notifications.
Google identities associated with the entitlement, like approvers and
requesters, are automatically notified. However, if you want to notify
additional people, then you can add their email addresses. This is
especially useful if you're using workforce identities
instead of Google Accounts.
Click Request grant .
You can request a grant by using one of the following options:
Request a grant against an entitlement
Request a grant on a child resource of an entitlement
Request a grant with fine-grained scope
Request a grant against an entitlement
The
gcloud alpha pam grants create
command requests a grant.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The entitlement ID to create the
grant against.
GRANT_DURATION : The requested duration of the
grant, in seconds.
JUSTIFICATION : The justification for
requesting the grant.
EMAIL_ADDRESS : Optional. Additional email
addresses to notify of the grant request. Google identities associated
with approvers are automatically notified. However, you might want to
notify a different set of email addresses, especially if you're using
Workforce Identity Federation .
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
gcloud alpha pam grants create \
--entitlement = ENTITLEMENT_ID \
--requested-duration = " GRANT_DURATION s" \
--justification = " JUSTIFICATION " \
--location = global \
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants create `
--entitlement = ENTITLEMENT_ID `
--requested-duration = " GRANT_DURATION s" `
--justification = " JUSTIFICATION " `
--location = global `
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants create ^
--entitlement = ENTITLEMENT_ID ^
--requested-duration = " GRANT_DURATION s" ^
--justification = " JUSTIFICATION " ^
--location = global ^
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
Created [ GRANT_ID ].
Request a grant on a child resource of an entitlement
The
gcloud alpha pam grants create
command requests a grant.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The entitlement ID to create the
grant against.
GRANT_DURATION : The requested duration of the
grant, in seconds.
JUSTIFICATION : The justification for
requesting the grant.
EMAIL_ADDRESS : Optional. Additional email
addresses to notify of the grant request. Google identities associated
with approvers are automatically notified. However, you might want to
notify a different set of email addresses, especially if you're using
Workforce Identity Federation .
RESOURCE_TYPE : Optional. The type of the Google Cloud resources to be granted access to. This is used to customize the scope of the grant to a child resource.
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
REQUESTED_RESOURCE : Optional. The Google Cloud resources that you want to be granted access to. This is used to customize the scope of the grant to a child resource. Format: RESOURCE_TYPE / RESOURCE_ID . Example: projects/ PROJECT_ID , folders/ FOLDER_ID , or organizations/ ORGANIZATION_ID .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam grants create \
--entitlement = ENTITLEMENT_ID \
--requested-duration = " GRANT_DURATION s" \
--justification = " JUSTIFICATION " \
--location = global \
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] \
-- RESOURCE_TYPE = RESOURCE_ID \
--requested-resources = REQUESTED_RESOURCE
Windows (PowerShell)
gcloud alpha pam grants create `
--entitlement = ENTITLEMENT_ID `
--requested-duration = " GRANT_DURATION s" `
--justification = " JUSTIFICATION " `
--location = global `
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] `
-- RESOURCE_TYPE = RESOURCE_ID `
--requested-resources = REQUESTED_RESOURCE
Windows (cmd.exe)
gcloud alpha pam grants create ^
--entitlement = ENTITLEMENT_ID ^
--requested-duration = " GRANT_DURATION s" ^
--justification = " JUSTIFICATION " ^
--location = global ^
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--requested-resources = REQUESTED_RESOURCE
You should receive a response similar to the following:
Created [ GRANT_ID ].
Request a grant with fine-grained scope
The
gcloud alpha pam grants create
command requests a grant.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ROLE_BINDING_ID : Optional.The role binding ID of the role to be granted from the entitlement.
ACCESS_RESTRICTION_NAME : Optional. The resource names to restrict the access to. For information about the format, see Resource name format .
ACCESS_RESTRICTION_PREFIX : Optional. The resource name prefixes to restrict the access to. For information about the format, see Resource name format .
RESOURCE_TYPE : Optional. The resource type that
the entitlement belongs to. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
REQUESTED_RESOURCE_TYPE . Optional. The type of the Google Cloud resources to be granted access to. This is used to customize the scope of the grant to a child resource.
REQUESTED_RESOURCE : Optional. The Google Cloud resources that you want to be granted access to. This is used to customize the scope of the grant to a child resource. Format: RESOURCE_TYPE / RESOURCE_ID . Example: projects/ PROJECT_ID , folders/ FOLDER_ID , or organizations/ ORGANIZATION_ID .
Save the following content in a file called requested-scope.yaml
:
- gcpIamAccess :
resource : REQUESTED_RESOURCE
resourceType : REQUESTED_RESOURCE_TYPE
roleBi n di n gs :
- e nt i tle me nt RoleBi n di n gId : ENTITLEMENT_ROLE_BINDING_ID_1
accessRes tr ic t io ns :
resourceNames :
- ACCESS_RESTRICTION_NAME_1
- ACCESS_RESTRICTION_NAME_2
- e nt i tle me nt RoleBi n di n gId : ENTITLEMENT_ROLE_BINDING_ID_2
accessRes tr ic t io ns :
resourceNamePre f ixes :
- ACCESS_RESTRICTION_PREFIX_1
- ACCESS_RESTRICTION_PREFIX_2
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam grants create \
--entitlement = ENTITLEMENT_ID \
--requested-duration = " GRANT_DURATION s" \
--justification = " JUSTIFICATION " \
--location = global \
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] \
-- RESOURCE_TYPE = RESOURCE_ID \
--requested-access-from-file = requested-scope.yaml
Windows (PowerShell)
gcloud alpha pam grants create `
--entitlement = ENTITLEMENT_ID `
--requested-duration = " GRANT_DURATION s" `
--justification = " JUSTIFICATION " `
--location = global `
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] `
-- RESOURCE_TYPE = RESOURCE_ID `
--requested-access-from-file = requested-scope.yaml
Windows (cmd.exe)
gcloud alpha pam grants create ^
--entitlement = ENTITLEMENT_ID ^
--requested-duration = " GRANT_DURATION s" ^
--justification = " JUSTIFICATION " ^
--location = global ^
[ --additional-email-recipients = EMAIL_ADDRESS_1 , EMAIL_ADDRESS_2 ] ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--requested-access-from-file = requested-scope.yaml
You should receive a response similar to the following:
Created [ GRANT_ID ].
Search for entitlements you're eligible to request.
The Privileged Access Manager API's
searchEntitlements
method with the GRANT_REQUESTER caller access
type searches for entitlements you can request a grant against.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
FILTER : Optional. Returns entitlements whose
field values match an
AIP-160 expression .
PAGE_SIZE : Optional. The number of items to
return in a response.
PAGE_TOKEN : Optional. Which page to start
the response from, using a page token returned in a previous response.
HTTP method and URL:
GET https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements:search?callerAccessType=GRANT_REQUESTER&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements:search?callerAccessType=GRANT_REQUESTER&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements:search?callerAccessType=GRANT_REQUESTER&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"name": " SCOPE /locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1beta.OperationMetadata",
"createTime": "2024-03-05T03:35:14.596739353Z",
"target": " SCOPE /locations/global/entitlements/ ENTITLEMENT_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1beta"
},
"done": false
}
Request a grant against an entitlement.
The Privileged Access Manager API's
createGrant
method requests a grant.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The entitlement ID to create the
grant against.
REQUEST_ID : Optional. Must be a non-zero UUID.
If the server receives a request with a request ID, it checks if another
request with that ID has already been completed within the last 60
minutes. If so, the new request is ignored.
GRANT_DURATION : The requested duration of the
grant, in seconds.
JUSTIFICATION : The justification for
requesting the grant.
EMAIL_ADDRESS : Optional. Additional email
addresses to notify of the grant request. Google identities associated
with approvers are automatically notified. However, you might want to notify
a different set of email addresses, especially if you're using
Workforce Identity Federation .
ENTITLEMENT_ROLE_BINDING_ID : Optional. The role binding ID of the role to be granted from the entitlement.
ACCESS_RESTRICTION_NAME : Optional. The resource names to restrict the access to. For information about the format, see Resource name format .
ACCESS_RESTRICTION_PREFIX : Optional. The resource name prefixes to restrict the access to. For information about the format, see Resource name format .
HTTP method and URL:
POST https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?requestId= REQUEST_ID
Request JSON body:
{
"requestedDuration": " GRANT_DURATION s",
"justification": {
"unstructuredJustification": " JUSTIFICATION "
},
"additionalEmailRecipients": [
" EMAIL_ADDRESS_1 ",
" EMAIL_ADDRESS_2 ",
],
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": " REQUESTED_RESOURCE_TYPE ",
"resource": " REQUESTED_RESOURCE ",
"roleBindings": [
{
"entitlementRoleBindingId": " ENTITLEMENT_ROLE_BINDING_ID ",
"accessRestrictions": {
"resourceNames": [
" ACCESS_RESTRICTION_NAME "
],
"resourceNamePrefixes": [
" ACCESS_RESTRICTION_PREFIX "
],
},
}
],
}
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?requestId= REQUEST_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants?requestId= REQUEST_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"name": " SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
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
"resource": "//cloudresourcemanager.googleapis.com/ SCOPE ",
"roleBindings": [
{
"role": "roles/storage.admin",
"id": "hwqrt_1",
"conditionExpression": "resource.name == \"//cloudresourcemanager.googleapis.com/ SCOPE /buckets/bucket-1\" && resource.name.startsWith(\"//cloudresourcemanager.googleapis.com/ SCOPE /compute/vms\")"
}
]
}
},
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/ SCOPE ",
"roleBindings": [
{
"role": "roles/storage.admin",
"entitlementRoleBindingId": "hwqrt_1",
"accessRestrictions": {
"resourceNames": [
"//cloudresourcemanager.googleapis.com/ SCOPE /buckets/bucket-1"
],
"resourceNamePrefixes": [ "//cloudresourcemanager.googleapis.com/ SCOPE /compute/vms"
]
}
}
]
}
},
"additionalEmailRecipients": [
"bola@google.com"
]
}
Check your grant request status
Console gcloud REST
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project that you want to view grants in.
In the Grants tab, click My grants .
Your grant can have one of the following statuses:
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
The
gcloud alpha pam grants search
command used with the had-created caller
relationship searches for grants you have created. To check their status,
look for the state field in the response.
Before using any of the command data below,
make the following replacements:
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
gcloud alpha pam grants search \
--entitlement = ENTITLEMENT_ID \
--caller-relationship = had-created \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants search `
--entitlement = ENTITLEMENT_ID `
--caller-relationship = had-created `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants search ^
--entitlement = ENTITLEMENT_ID ^
--caller-relationship = had-created ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
additionalEmailRecipients:
- bola@example.com
createTime: '2024-03-07T00:34:32.557017289Z'
justification:
unstructuredJustification: Renaming a file to mitigate issue #312
name: SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
id: hwqrt_1
conditionExpression: resource.name == "//cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /buckets/bucket-1" && resource.name.startsWith("//cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /compute/vms")
requestedPrivilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
entitlementRoleBindingId: hwqrt_1
accessRestrictions:
resourceNames:
- //cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /buckets/bucket-1
resourceNamePrefixes:
- //cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /compute/vms
requestedDuration: 3600s
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
Grants can have the following statuses:
Status
Description
ACTIVATING
The grant is in the process of being activated.
ACTIVATION_FAILED
Privileged Access Manager couldn't grant the roles due to a
non-retriable error.
ACTIVE
The grant is active and the principal has access to the
resources permitted by the roles.
APPROVAL_AWAITED
The grant request is waiting on a decision from an
approver.
DENIED
The grant request has been denied by an approver.
ENDED
The grant has ended and the roles have been removed from the
principal.
EXPIRED
The grant request has expired, as approval wasn't given within
24 hours.
REVOKED
The grant is revoked, and the principal no longer has access
to the resources permitted by the roles.
REVOKING
The grant is in the process of being revoked.
WITHDRAWING
The grant is in the process of being withdrawn.
WITHDRAWN
The grant is withdrawn, and the principal no longer has access
to the resources permitted by the roles.
The Privileged Access Manager API's
searchGrants
method used with the HAD_CREATED caller
relationship searches for grants you have created. To check their status,
look for the state field in the response.
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
FILTER : Optional. Returns grants whose field
values match an
AIP-160 expression .
PAGE_SIZE : Optional. The number of items to
return in a response.
PAGE_TOKEN : Optional. Which page to start
the response from, using a page token returned in a previous response.
HTTP method and URL:
GET https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship=HAD_CREATED&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship=HAD_CREATED&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants:search?callerRelationship=HAD_CREATED&filter= FILTER &pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"grants": [
{
"name": " SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
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
"resource": "//cloudresourcemanager.googleapis.com/ SCOPE ",
"roleBindings": [
{
"role": "roles/storage.admin",
"id": "hwqrt_1",
"conditionExpression": "resource.name == \"//cloudresourcemanager.googleapis.com/ SCOPE /buckets/bucket-1\" && resource.name.startsWith(\"//cloudresourcemanager.googleapis.com/ SCOPE /compute/vms\")"
"conditionExpression": "resource.name == \"//cloudresourcemanager.googleapis.com/ SCOPE /buckets/bucket-1\" && resource.name.startsWith(\"//cloudresourcemanager.googleapis.com/ SCOPE /compute/vms\")"
}
]
}
},
"requestedPrivilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/Project",
"resource": "//cloudresourcemanager.googleapis.com/ SCOPE ",
"roleBindings": [
{
"role": "roles/storage.admin",
"entitlementRoleBindingId": "hwqrt_1",
"accessRestrictions": {
"resourceNames": ["//cloudresourcemanager.googleapis.com/ SCOPE /buckets/bucket-1"
],
"resourceNamePrefixes": ["//cloudresourcemanager.googleapis.com/ SCOPE /compute/vms"
]
}
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
Grant statuses are detailed in the following table.
Status
Description
ACTIVATING
The grant is in the process of being activated.
ACTIVATION_FAILED
Privileged Access Manager couldn't grant the roles due to a
non-retriable error.
ACTIVE
The grant is active and the principal has access to the
resources permitted by the roles.
APPROVAL_AWAITED
The grant request is waiting on a decision from an
approver.
DENIED
The grant request has been denied by an approver.
ENDED
The grant has ended and the roles have been removed from the
principal.
EXPIRED
The grant request has expired, as approval wasn't given within
24 hours.
REVOKED
The grant is revoked, and the principal no longer has access
to the resources permitted by the roles.
REVOKING
The grant is in the process of being revoked.
WITHDRAWING
The grant is in the process of being withdrawn.
WITHDRAWN
The grant is withdrawn, and the principal no longer has access
to the resources permitted by the roles.
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
