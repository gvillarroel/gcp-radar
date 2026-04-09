---
title: "Create entitlements in Privileged Access Manager \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-create-entitlements
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-create-entitlements
  title: "Create entitlements in Privileged Access Manager \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create entitlements in Privileged Access Manager | Identity and Access Management (IAM) | Google Cloud Documentation
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
Create entitlements
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Create entitlements in Privileged Access Manager
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create entitlements
What's next
You can create entitlements to allow temporary privilege elevation for a select
set of principals. Keep the following in mind when creating entitlements:
You can create entitlements at the organization, folder, or project level.
Roles granted by an entitlement at each level follow the Google Cloud
resource hierarchy . For
example, roles granted by an entitlement at the organization level are
inherited at the folder and project levels.
If Security Command Center Premium or Enterprise tier is activated, then you can mandate
more than one approval level per entitlement, allowing up to two levels of
sequential approvals for each entitlement. You can mandate up to five
approvals per level.
After the required number of first-level approvals are received, email
notifications are sent to second-level approvers. After the required number of
second-level approvals are received, the grant moves to the active
state. If any approver denies the grant, then the grant moves to the denied
state and is not sent to any additional approvers.
This feature is available in preview .
If service accounts are allowed to approve grants for this resource, then you
can add service accounts and workload pool identities as approvers. To learn how to enable this
setting, see Configure Privileged Access Manager settings .
This feature is available in preview .
If you add a group as a requester to an entitlement, all individual accounts
in that group can request a grant of that entitlement. However, only the
individual account requesting the grant can receive elevated privileges.
If you add a group as an approver to an entitlement, all individual accounts
in that group can approve or deny a grant request.
Basic roles (Admin, Writer, and Reader) are
supported, but legacy basic roles
(Owner, Editor, and Viewer) are not supported.
Don't include service agent roles in entitlements.
Some service agent roles contain very powerful permissions, and the permissions within these roles
can change without notice. Instead, choose a different
predefined role , or create a
custom role with the permissions you need.
Caution: Be careful when including the following types of
roles in an entitlement:
Roles with permissions to grant and revoke IAM roles (that
is, roles with permission names that end in setIamPolicy ).
Roles with the iam.roles.update permission, which lets
users modify custom roles.
These types of roles contain permissions that can let a user modify their
own IAM permissions. As a result, requesting principals can
use these roles to increase their own access to resources, or give
themselves additional access to resources.
For example, imagine a user that has a custom role with very limited
permissions. If this user successfully requests a grant against an
entitlement with the Role Administrator role
( roles/iam.roleAdmin ), then they can use the permissions in
that role to add the resourcemanager.projects.setIamPolicy
permission to their custom role. This permission would let them grant and
revoke all IAM roles for the project, even after the grant expires.
Before you begin
To get the permissions that
you need to create entitlements,
ask your administrator to grant you the
following IAM roles on the organization, folder, or project that you want to create entitlements for:
Create entitlements for an organization:
Privileged Access Manager Admin ( roles/privilegedaccessmanager.admin )
Security Admin ( roles/iam.securityAdmin )
Create for a folder:
Privileged Access Manager Admin ( roles/privilegedaccessmanager.admin )
Folder IAM Admin ( roles/resourcemanager.folderAdmin )
Create entitlements for a project:
Privileged Access Manager Admin ( roles/privilegedaccessmanager.admin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
To view audit logs:
Logs Viewer ( roles/logs.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create entitlements. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create entitlements:
To create entitlements and grants for an organization:
resourcemanager.organizations.get
resourcemanager.organizations.setIamPolicy
privilegedaccessmanager.entitlements.create
To create entitlements and grants for a folder:
resourcemanager.folders.get
resourcemanager.folders.setIamPolicy
privilegedaccessmanager.entitlements.create
To create entitlements and grants for a project:
resourcemanager.projects.get
resourcemanager.projects.setIamPolicy
privilegedaccessmanager.entitlements.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create entitlements
Console gcloud REST Terraform Config Connector
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project you want the entitlement to
apply to.
Click the Entitlements tab.
Click Create .
In the Entitlement details section, enter the following entitlement details:
An entitlement name.
An entitlement name can have 4 to 63 characters. It must start
with a lowercase letter and can only contain
lowercase letters, numbers, and hyphens.
Up to 30 roles to be granted on the organization, folder, or project.
You can also add IAM
conditions to these roles in the same way
that you add conditions to allow policy role bindings.
The maximum duration for a grant. The maximum duration you
can set for an entitlement is 7 days.
Click Next .
In the Add requesters section, enter up to 20 valid requesting principals
for the entitlement.
All principal types are supported
except allUsers and allAuthenticatedUsers . You can add more than 20
identities by adding them to a group and listing the group in the
entitlement.
Choose whether the principals need to provide a justification for the
grant request.
Enter additional email addresses of users to be notified when the entitlement
is eligible to request.
Google identities associated with the entitlement, like approvers and
requesters, are automatically notified. However, if you want to notify
additional people, then you can add their email addresses. This is
especially useful if you're using workforce identities
instead of Google Accounts.
Click Next .
In the Add approvers section, do one of the following:
To allow role grants without approval, select Activate access without approvals .
To mandate approvals, do the following:
Note: Adding second-level approvers and configuring the number of approvals
required are available only if the
Security Command Center Premium or Enterprise tier
is activated.
Optional: To require approvers to enter justifications for approving requests,
select Justification required from approvers .
Enter first-level approver details:
A list of approvers for the entitlement
You can add any of the following principal types as approvers:
Google accounts
Google groups
Google Workspace domains
Workforce pool identifiers
Workload pool identifiers
Service accounts
Service accounts and workload pool identifiers are available only
if service accounts are allowed to approve
grants for this resource. For details, see Configure Privileged Access Manager settings .
Number of approvals required
If you added a group as an approver, ensure that the number of required
approvals is less than or equal to the number of principals in the group.
Otherwise, grants will remain perpetually stuck in the approval awaited
state.
Approvers' email addresses for notification
Optional: Add second-level approver details:
A list of approvers for the entitlement
You can add any of the following principal types as approvers:
Google accounts
Google groups
Google Workspace domains
Workforce pool identifiers
Workload pool identifiers
Service accounts
Service accounts and workload pool identifiers are available only
if service accounts are allowed to approve
grants for this resource. For details, see Configure Privileged Access Manager settings .
Number of approvals required
If you added a group as an approver, ensure that the number of required
approvals is less than or equal to the number of principals in the group.
Otherwise, grants will remain perpetually stuck in the approval awaited
state.
Approvers' email addresses for notification
You can add up to 20 approving principals (identities or groups) per approval.
If you want to add more than 20 approvers, you can do so by adding them to a
group and listing the group as an approver for the entitlement.
Click Next .
Click Create Entitlement .
Newly created entitlements might take a few minutes to propagate
and become ready for use.
The
gcloud alpha pam entitlements create
command creates an entitlement at the organization, folder,
or project level.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The entitlement ID to create. An
ID must be 4-63 characters in length, and use the following characters:
[a-z0-9-] . The first character must
be a letter.
RESOURCE_TYPE : Optional. The resource type that
the entitlement belongs to. Use the value organization ,
folder , or project .
SCOPE : The organization, folder, or project to
create the entitlement in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
RESOURCE_MANAGER_RESOURCE_TYPE : Either
Organization , Folder , or Project ,
depending on the scope.
ROLE : The
roles to assign when an
entitlement is granted.
MAXIMUM_GRANT_DURATION : The maximum duration a grant can be requested for, in seconds, ending with an s suffix. For example, to specify 30 minutes, use 1800s . The supported range is between 30 minutes ( 1800s ) and 168 hours ( 604800s ).
REQUESTING_MEMBER : Principals that can
request that the entitlement be granted. All
principal types are supported except allUsers
and allAuthenticatedUsers .
APPROVING_MEMBER : Principals that can
approve the entitlement request. The valid
principal types are as
follows:
User
Group
Domain
Workforce pool identifiers
Workload pool identifiers
This is available only if service accounts are allowed to approve entitlement requests for this resource. For details, see Configure Privileged Access Manager settings .
Service accounts
This is available only if service accounts are allowed to approve entitlement requests for this resource. For details, see Configure Privileged Access Manager settings .
APPROVALS_NEEDED : The number of approvers required to approve the entitlement request.
If you added a group as an approver, ensure that the number of required
approvals is less than or equal to the number of principals in the group.
Otherwise, grants will remain perpetually stuck in the approval awaited state.
APPROVER_EMAIL_ADDRESSES : Optional. Additional email
addresses to notify when a grant has been requested. Google identities
associated with grant approvers are automatically notified. However, you
might want to notify a different set of email addresses, especially if
you're using
Workforce Identity Federation .
ADMIN_EMAIL_ADDRESS : Optional. Additional email
addresses to notify when a requester is granted access. Google identities
associated with grant approvers are automatically notified. However, you
might want to notify a different set of email addresses, especially if
you're using
Workforce Identity Federation .
REQUESTER_EMAIL_ADDRESS : Optional. Additional
email addresses to notify when this entitlement is available to request.
Google identities associated with grant requesters are automatically
notified. However, you might want to notify a different set of email
addresses, especially if you're using
Workforce Identity Federation .
CONDITION_EXPRESSION : Optional. The condition expression that specifies when the principal can use the permissions in the role. This condition only applies when the grant is active.
Note: Privileged Access Manager doesn't support using access level attributes in an entitlement's IAM condition.
Save the following content in a file called entitlement.yaml :
privilegedAccess :
gcpIamAccess :
resourceType : cloudresourcema na ger.googleapis.com/ RESOURCE_MANAGER_RESOURCE_TYPE
resource : //cloudresourcemanager.googleapis.com/ SCOPE
roleBi n di n gs :
- role : ROLE_1
co n di t io n Expressio n : CONDITION_EXPRESSION_1
- role : ROLE_2
co n di t io n Expressio n : CONDITION_EXPRESSION_2
maxReques t Dura t io n : MAXIMUM_GRANT_DURATION
eligibleUsers :
- pri n cipals :
- REQUESTING_MEMBER_1
- REQUESTING_MEMBER_2
approvalWork fl ow :
ma nual Approvals :
requireApproverJus t i f ica t io n : true
s te ps :
- approvalsNeeded : APPROVALS_NEEDED_1
approverEmailRecipie nts :
- APPROVER_EMAIL_ADDRESSES_1
- APPROVER_EMAIL_ADDRESSES_2
approvers :
- pri n cipals :
- APPROVING_MEMBER_1
- APPROVING_MEMBER_2
- approvalsNeeded : APPROVALS_NEEDED_2
approverEmailRecipie nts :
- APPROVER_EMAIL_ADDRESSES_3
- APPROVER_EMAIL_ADDRESSES_4
approvers :
- pri n cipals :
- APPROVING_MEMBER_3
- APPROVING_MEMBER_4
reques ter Jus t i f ica t io n Co nf ig :
u nstru c ture d : {}
addi t io nal No t i f ica t io n Targe ts :
admi n EmailRecipie nts :
- ADMIN_EMAIL_ADDRESS_1
- ADMIN_EMAIL_ADDRESS_2
reques ter EmailRecipie nts :
- REQUESTER_EMAIL_ADDRESS_1
- REQUESTER_EMAIL_ADDRESS_2
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam entitlements create \
ENTITLEMENT_ID \
--entitlement-file = entitlement.yaml \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam entitlements create `
ENTITLEMENT_ID `
--entitlement-file = entitlement.yaml `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam entitlements create ^
ENTITLEMENT_ID ^
--entitlement-file = entitlement.yaml ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
Create request issued for: [ ENTITLEMENT_ID ]
Waiting for operation [projects/ PROJECT_ID /locations/global/operations/ OPERATION_ID ] to complete...done.
Created entitlement [ ENTITLEMENT_ID ].
additionalNotificationTargets: {}
approvalWorkflow:
manualApprovals:
requireApproverJustification: true
steps:
- id: step-1
approvalsNeeded: 3
approvers:
- principals:
- user:alex@example.com
- group:dev-team@example.com
- id: step-2
approvalsNeeded: 1
approvers:
- principals:
- user:alex@example.com
createTime: '2024-04-09T02:39:37.011866832Z'
eligibleUsers:
- principals:
- user:bola@example.com
etag: 00000000000000000000000000000000000000000000000000000000000=
maxRequestDuration: 7200s
name: projects/my-project/locations/global/entitlements/ ENTITLEMENT_ID
privilegedAccess:
gcpIamAccess:
resource: //cloudresourcemanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID
resourceType: cloudresourcemanager.googleapis.com/Project
roleBindings:
- role: roles/storage.admin
id: hwarq_1
conditionExpression: "request.time.getHours() >= 8"
requesterJustificationConfig:
unstructured: {}
state: AVAILABLE
Newly created entitlements might take a few minutes to propagate
and become ready for use.
The Privileged Access Manager API's
createEntitlement
method creates an entitlement at the organization, folder,
or project level.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project to
create the entitlement in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The entitlement ID to create. An
ID must be 4-63 characters in length, and use the following characters:
[a-z0-9-] . The first character must
be a letter.
RESOURCE_MANAGER_RESOURCE_TYPE : Either
Organization , Folder , or Project ,
depending on the scope.
ROLE : The
roles to assign when an
entitlement is granted.
MAXIMUM_GRANT_DURATION : The maximum duration a grant can be requested for, in seconds, ending with an s suffix. For example, to specify 30 minutes, use 1800s . The supported range is between 30 minutes ( 1800s ) and 168 hours ( 604800s ).
REQUESTING_MEMBER : Principals that can
request the entitlement be granted. All
principal types are supported except allUsers
and allAuthenticatedUsers .
APPROVING_MEMBER : Principals that can
approve the entitlement request. The valid
principal types are as
follows:
User
Group
Domain
Workforce pool identifiers
Workload pool identifiers
This is available only if service accounts are allowed to approve entitlement requests for this resource. For details, see Configure Privileged Access Manager settings .
Service accounts
This is available only if service accounts are allowed to approve entitlement requests for this resource. For details, see Configure Privileged Access Manager settings .
APPROVALS_NEEDED : The number of approvers required to approve the entitlement request.
If you added a group as an approver, ensure that the number of required
approvals is less than or equal to the number of principals in the group.
Otherwise, grants will remain perpetually stuck in the approval awaited state.
APPROVER_EMAIL_ADDRESSES : Optional. Additional email
addresses to notify when a grant has been requested. Google identities
associated with grant approvers are automatically notified. However, you
might want to notify a different set of email addresses, especially if
you're using
Workforce Identity Federation .
ADMIN_EMAIL_ADDRESS : Optional. Additional email
addresses to notify when a requester is granted access. Google identities
associated with grant approvers are automatically notified. However, you
might want to notify a different set of email addresses, especially if
you're using
Workforce Identity Federation .
REQUESTER_EMAIL_ADDRESS : Optional. Additional
email addresses to notify when this entitlement is available to request.
Google identities associated with grant requesters are automatically
notified. However, you might want to notify a different set of email
addresses, especially if you're using
Workforce Identity Federation .
CONDITION_EXPRESSION : Optional. The condition expression that specifies when the principal can use the permissions in the role. This condition only applies when the grant is active.
Note: Privileged Access Manager doesn't support using access level attributes in an entitlement's IAM condition.
HTTP method and URL:
POST https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements?entitlementId= ENTITLEMENT_ID
Request JSON body:
{
"privilegedAccess": {
"gcpIamAccess": {
"resourceType": "cloudresourcemanager.googleapis.com/ RESOURCE_MANAGER_RESOURCE_TYPE ",
"resource": "//cloudresourcemanager.googleapis.com/ SCOPE ",
"roleBindings": [
{
"role": " ROLE_1 ",
"conditionExpression": " CONDITION_EXPRESSION_1 ",
},
{
"role": " ROLE_2 ",
"conditionExpression": " CONDITION_EXPRESSION_2 ",
},
]
}
},
"maxRequestDuration": " MAXIMUM_GRANT_DURATION ",
"eligibleUsers": [
{
"principals": [
" REQUESTING_MEMBER_1 ",
" REQUESTING_MEMBER_2 ",
...
]
}
],
"approvalWorkflow": {
"manualApprovals": {
"requireApproverJustification": true,
"steps": [
{
"approvers": [
{
"principals": [
" APPROVING_MEMBER_1 ",
" APPROVING_MEMBER_2 ",
]
}
],
"approvalsNeeded": APPROVALS_NEEDED_1 ,
"approverEmailRecipients": [
" APPROVER_EMAIL_ADDRESSES_1 ",
" APPROVER_EMAIL_ADDRESSES_2 ",
]
},
{
"approvers": [
{
"principals": [
" APPROVING_MEMBER_3 ",
" APPROVING_MEMBER_4 ",
]
}
],
"approvalsNeeded": APPROVALS_NEEDED_2 ,
"approverEmailRecipients": [
" APPROVER_EMAIL_ADDRESSES_3 ",
" APPROVER_EMAIL_ADDRESSES_4 ",
]
}
]
}
},
"requesterJustificationConfig": {
"unstructured": {
}
},
"additionalNotificationTargets": {
"adminEmailRecipients": [
" ADMIN_EMAIL_ADDRESS_1 ",
" ADMIN_EMAIL_ADDRESS_2 ",
],
"requesterEmailRecipients": [
" REQUESTER_EMAIL_ADDRESS_1 ",
" REQUESTER_EMAIL_ADDRESS_2 ",
]
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements?entitlementId= ENTITLEMENT_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements?entitlementId= ENTITLEMENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1beta.OperationMetadata",
"createTime": "2024-03-05T03:35:14.596739353Z",
"target": "projects/ PROJECT_ID /locations/global/entitlements/ ENTITLEMENT_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1beta"
},
"done": false
}
To check on the progress of a create operation, you can send a
GET request to the following endpoint:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations/ OPERATION_ID
Send a GET request to the following endpoint to list all
operations:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations
Newly created entitlements might take a few minutes to propagate
and become ready for use.
You can use Terraform to create entitlements. For more information, see google_privileged_access_manager_entitlement in the Terraform documentation.
Newly created entitlements might take a few minutes to propagate
and become ready for use.
You can use Kubernetes Config Connector to create entitlements. For more information, see PrivilegedAccessManagerEntitlement in the Config Connector documentation.
Newly created entitlements might take a few minutes to propagate
and become ready for use.
What's next
View, update, and delete entitlements
Configure Privileged Access Manager settings
Audit entitlement events
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
