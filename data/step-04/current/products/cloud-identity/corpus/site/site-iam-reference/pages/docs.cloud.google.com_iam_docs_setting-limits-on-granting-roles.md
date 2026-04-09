---
title: "Set limits on granting roles \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/setting-limits-on-granting-roles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/setting-limits-on-granting-roles
  title: "Set limits on granting roles \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set limits on granting roles | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Required permissions
Common use cases Create limited IAM admins
Allow users to manage limited IAM admins
Limit role granting Write a condition expression to limit role granting
Limit role granting with conditional role bindings
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Set limits on granting roles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required permissions
Common use cases Create limited IAM admins
Allow users to manage limited IAM admins
Limit role granting Write a condition expression to limit role granting
Limit role granting with conditional role bindings
What's next
In large organizations, it can be helpful to let teams independently manage the
allow policies for their resources. However, letting a principal grant or revoke
all IAM roles can greatly increase your security risk.
You can set limits on the roles that a principal can grant and revoke with
Identity and Access Management (IAM) Conditions and the
iam.googleapis.com/modifiedGrantsByRole API attribute. These limits let you
create limited IAM admins who can manage their own team's allow
policies, but only within the boundaries that you have set.
Before you begin
Enable the Resource Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Be familiar with the structure of allow policies .
Understand IAM Conditions .
Required permissions
To get the permissions that
you need to create limited IAM admins for a project,
folder, or organization,
ask your administrator to grant you the
following IAM roles on the resource that you want to create a limited
IAM admin for (project, folder, or organization):
To create a limited IAM admin for a project:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
To create a limited IAM admin for a folder:
Folder Admin ( roles/resourcemanager.folderAdmin )
To create a limited IAM admin for a project, folder, or organization:
Organization Admin ( roles/resourcemanager.organizationAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create limited IAM admins for a project,
folder, or organization. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create limited IAM admins for a project,
folder, or organization:
To create a limited IAM admin for a project:
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To create a limited IAM admin for a folder:
resourcemanager.folders.getIamPolicy
resourcemanager.folders.setIamPolicy
To create a limited IAM admin for an organization:
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Common use cases
The following sections describe how you can use limited role granting to
enable self-service management of allow policies.
Create limited IAM admins
Consider a scenario where you want to let a user, Noam, act
as a limited IAM admin for your project. You want Noam to be able
to grant and revoke only the App Engine Admin ( roles/appengine.appAdmin ) and
App Engine Viewer ( roles/appengine.appViewer ) roles for your project.
To grant this limited ability, you conditionally grant Noam the Project IAM
Admin role ( roles/resourcemanager.projectIamAdmin ). The Project IAM Admin role
allows Noam to grant and revoke IAM roles, and the condition
limits which roles Noam can grant and revoke:
{
"version" : 3 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"members" : [
"user:owner@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"user:noam@example.com"
],
"role" : "roles/resourcemanager.projectIamAdmin" ,
"condition" : {
"title" : "only_appengine_admin_viewer_roles" ,
"description" : "Only allows changes to role bindings with the App Engine Admin or Viewer roles" ,
"expression" :
"api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly(['roles/appengine.appAdmin', 'roles/appengine.appViewer'])"
}
}
]
}
This conditional role binding lets Noam do the following:
Grant the App Engine Admin and App Engine Viewer roles for the project.
Revoke the App Engine Admin and App Engine Viewer roles for the project.
Add, remove, or modify conditions for project-level role bindings that grant
the App Engine Admin and App Engine Viewer roles.
Perform other actions allowed by the Project IAM Admin role that don't
modify the project's allow policy. For example, Noam could use the
projects.getIamPolicy method to get the project's allow
policy.
This conditional role binding does not let Noam do any of the following:
Modify allow policies for resources other than the project.
Grant roles other than the App Engine Admin or App Engine Viewer roles.
Revoke roles other than the App Engine Admin or App Engine Viewer roles.
Add, remove, or modify conditions for role bindings that don't grant
the App Engine Admin or App Engine Viewer roles.
Allow users to manage limited IAM admins
Consider a scenario where you want to make a user, Lila, a limited
IAM admin for her team. You want Lila to be able to grant and
revoke only the Compute Admin role ( roles/compute.admin ) for her project.
However, you also want to let Lila select other users to act as limited
IAM admins. In other words, you want to let Lila allow other
users to grant and revoke only the Compute Admin role.
You might think that the solution is to grant Lila the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ), and then give her the ability to
grant or revoke that role for others. However, if you grant Lila the Project IAM
Admin role, she could remove the condition from her own role and give herself
the ability to grant or revoke any IAM role.
To help prevent this privilege escalation, you instead
create a Google group , iam-compute-admins , for
the project's limited IAM admins. Then, you
add Lila to the group and
make her a group manager .
After you create the group, you conditionally grant the group the Project IAM
Admin role ( roles/resourcemanager.projectIamAdmin ). The Project IAM Admin role
allows group members to grant and revoke IAM roles, and the
condition limits which roles they can grant and revoke:
{
"version" : 3 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"members" : [
"user:owner@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"group:iam-compute-admins@example.com"
],
"role" : "roles/resourcemanager.projectIamAdmin" ,
"condition" : {
"title" : "only_compute_admin_role" ,
"description" : "Only allows changes to role bindings for the Compute Admin role" ,
"expression" :
"api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly(['roles/compute.admin'])"
}
}
]
}
As a member of the iam-compute-admins group, Lila can do the
following:
Grant the Compute Admin role for the project by adding a new
binding for the role, or by adding a principal to an existing binding for the
role.
Revoke the Compute Admin role by removing an existing binding
for the role, or by removing a principal from an existing binding for the
role.
Modify grants for the Compute Admin role by adding, removing,
or modifying conditions attached to bindings for the role.
Perform other actions allowed by the Project IAM Admin role that don't modify
the project's allow policy. For example, she could use the
projects.getIamPolicy method to get the project's allow
policy.
As a manager of the iam-compute-admins group, Lila can allow
other users to grant or revoke the Compute Admin role by adding them to the
iam-compute-admins group.
Lila cannot do the following:
Give herself the ability to grant or revoke other roles.
Modify allow policies for resources other than the project.
Grant roles other than the Compute Admin role.
Revoke roles other than the Compute Admin role.
Add, remove, or modify conditions for role bindings that don't grant
the Compute Admin role.
Limit role granting
The following sections explain how to let principals grant or revoke only
certain roles.
Caution: Some Google Cloud services don't recognize
limits on role granting. If a limited IAM admin tries to
grant a role on a resource, and the resource's service does not recognize
limits on role granting, then the request fails. For a list of services
that recognize limits on role granting, see
IAM API attributes .
The exception to this behavior is BigQuery
datasets . Datasets don't recognize the
modifiedGrantsByRole attribute, but limited IAM
admins can still grant or revoke roles on datasets. Specifically, if a
limited IAM admin's role includes permissions to grant roles
on datasets, they can do so , regardless of any limits placed on their
role granting.
Write a condition expression to limit role granting
To limit a principal's ability to grant roles, write a condition expression that
specifies the roles a principal can grant or revoke.
Use the following format for your condition expression:
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly( roles )
This expression does the following:
Gets the API attribute iam.googleapis.com/modifiedGrantsByRole using the
api.getAttribute() function.
For a request to set the allow policy of a resource, this attribute contains
the role names from the bindings that the request modifies. For other types of
requests, the attribute is not defined. In these cases, the function returns
the default value ( [] ).
Note: Not all services recognize the iam.googleapis.com/modifiedGrantsByRole
attribute. If a service does not recognize this attribute, you cannot use this
attribute to limit role granting for that service. For a list of services that
recognize this attribute, see
IAM API attributes .
Uses the hasOnly() Common Expression Language (CEL) function to
define and enforce the roles that the principal is allowed to grant or revoke.
The input for the hasOnly() function is a list of the roles that the
principal is allowed to grant or revoke. If the roles in the
iam.googleapis.com/modifiedGrantsByRole attribute are included in this
list, the function returns true . If they are not, the function returns
false .
If the iam.googleapis.com/modifiedGrantsByRole attribute
contains the default value ( [] ), the function returns true , because []
does not contain any roles not included in the list.
To customize this expression, replace roles with a list
of the roles that the principal is allowed to grant or revoke. For example, to
let the principal grant or revoke only the Pub/Sub Editor
( roles/pubsub.editor ) and Pub/Sub Publisher ( roles/pubsub.publisher ) roles,
use the value ['roles/pubsub.editor', 'roles/pubsub.publisher'] .
You can include up to 10 values in the list of allowed
roles. All of these values must be string constants.
Note: You cannot customize the default value for api.getAttribute functions
involving iam.googleapis.com/modifiedGrantsByRole . It must be an empty list.
Warning: Don't include the following types of roles in
the list of allowed roles:
Roles with permissions to grant and revoke IAM roles (that
is, roles with permission names that end in setIamPolicy ).
Custom roles that the limited IAM admin can modify. For
example, if the limited IAM admin also has the Role
Administrator role ( roles/iam.roleAdmin ) on a project, don't
allow them to grant or revoke project-level custom roles.
Both of these types of roles contain, or could contain, permission to modify
allow policies. As a result, limited IAM admins who can grant
and revoke these types of roles can give themselves permission to grant and
revoke all IAM roles.
For example, if a user is a limited IAM admin for a project,
and you let them grant or revoke a custom role that they can modify, they
could add the resourcemanager.projects.setIamPolicy permission
to the custom role, then grant themselves that role unconditionally. They
would then be able to grant and revoke all IAM roles for the
project.
Logical operators for hasOnly() statements
Don't use the && or || operators to join multiple hasOnly() statements in
a single condition. If you do, then requests that grant or revoke multiple roles
might fail, even if the principal can grant or revoke those roles individually.
For example, consider the following condition:
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', [])
.hasOnly(['roles/pubsub.editor']) ||
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', [])
.hasOnly(['roles/pubsub.publisher'])
This condition evaluates to true if a request grants either the
roles/pubsub.editor role or the roles/pubsub.publisher role, but it
evaluates to false if a request grants both the roles/pubsub.editor role
and the roles/pubsub.publisher role.
Limit role granting with conditional role bindings
To allow a principal to grant or revoke only certain roles, use the condition
expression from the preceding section to create a conditional role binding.
Then, add the conditional role binding to a resource's allow policy.
Note: Conditional role bindings do not override role bindings with no conditions. If a
principal is bound to a role, and the role binding does not have a condition, then the principal
always has that role. Adding the principal to a conditional binding for the same role has no
effect.
Select a resource that represents the scope that you want to let a principal
grant and revoke roles for:
If you want to let a principal grant and revoke certain roles for all
resources within an organization , select an organization.
If you want to let a principal grant and revoke certain roles for all
resources within an folder , select a folder.
If you want to let a principal grant and revoke certain roles for all
resources within a project , select a project.
Note: While other resource types recognize limits on role
granting , only projects, folders, and organizations
accept conditions to limit role granting in their allow policies.
Select a role that allows a principal to set the allow policy for the
resource type you selected (project, folder, or organization). To follow the
principle of least privilege, choose one of the following predefined roles:
Projects : Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Folders : Folder IAM Admin ( roles/resourcemanager.folderIamAdmin )
Organizations : Organization Admin
( roles/resourcemanager.organizationAdmin ).
Note: This role also allows principals to set the allow policy for
projects and folders.
Alternatively, choose a custom role that includes the
resourcemanager. resource-type .setIamPolicy and
resourcemanager. resource-type .getIamPolicy
permissions, where resource-type is project ,
folder , or organization .
Note: You can also select a role that allows a principal to set the allow
policy for specific resources within a project, folder, or organization. For
example, you could select the Storage Admin role, which includes permissions
to set allow policies for buckets and objects. However, if you do so, the
principal will also be able to use the other permissions included in the role.
Conditionally grant a principal your chosen role on the project, folder, or
organization you selected.
The new allow policy is applied, and your principal can modify bindings for
only the roles you have allowed.
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
Make sure the name of your project, folder, or organization appears in
the resource selector at the top of the page. The resource selector tells
you what project, folder, or organization you are currently working in.
If you don't see the name of your resource, click the resource selector,
then select your resource.
In the list of principals, locate the principal that will grant and
revoke roles, and click the
edit button.
In the Edit permissions panel, select the role you chose
previously. Then under IAM condition (optional) , click Add IAM
condition .
In the Edit condition panel, enter a title and optional description
for the condition.
Click the Condition editor tab and enter the expression you wrote in
Writing a condition expression to limit role granting .
This expression limits which roles the principal can grant or revoke.
For example, the following condition expression limits the principal to
granting and revoking the Pub/Sub Editor ( roles/pubsub.editor ) and
Pub/Sub Publisher ( roles/pubsub.publisher ) roles:
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly(['roles/pubsub.editor', 'roles/pubsub.publisher'])
Warning: Don't include the following types of roles in
the list of allowed roles:
Roles with permissions to grant and revoke IAM roles (that
is, roles with permission names that end in setIamPolicy ).
Custom roles that the limited IAM admin can modify. For
example, if the limited IAM admin also has the Role
Administrator role ( roles/iam.roleAdmin ) on a project, don't
allow them to grant or revoke project-level custom roles.
Limited IAM admins who can grant and revoke these types of
roles can give themselves permission to grant and revoke all
IAM roles. See Writing a
condition expression to limit role granting for more information.
Click Save to apply the condition.
After the Edit condition panel is closed, click Save in the
Edit permissions panel to update your allow policy.
Allow policies are set using the
read-modify-write
pattern.
First, read the allow policy for the resource:
Execute the
get-iam-policy command.
This command gets the current allow policy for the resource.
Command:
gcloud resource-type get-iam-policy resource-id --format = json > path
Replace the following values:
resource-type : The resource type that you want to
let a principal grant or revoke roles for. Use one of the following:
projects , resource-manager folders , or organizations .
resource-id : Your Google Cloud project,
folder, or organization ID.
path : The path of the file to download the allow
policy to.
The allow policy is saved in JSON format, for example:
{
"bindings" : [
{
"members" : [
"user:project-owner@example.com"
],
"role" : "roles/owner"
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 1
}
Next, modify the allow policy.
To let a principal only modify bindings for certain roles, add the
highlighted conditional role binding:
{
"bindings" : [
{
"members" : [
"user:owner@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
" principal "
],
"role" : " role " ,
"condition" : {
"title" : " title " ,
"description" : " description " ,
"expression" :
" expression "
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Replace the following values:
principal : The principal that will grant or revoke
certain roles. For example, user:my-user@example.com . To see the formats of each
principal type, see Principal identifiers .
role : The role you chose in the preceding steps.
This role must include the setIamPolicy permission for the resource type
you chose.
title : A string briefly describing the condition.
For example, only_pubsub_roles .
description : Optional. An additional description
for the condition. For example, Only allows granting/revoking the Pub/Sub
editor and publisher roles .
expression : The expression you wrote in
Writing a condition expression to limit role granting .
This expression limits which roles that the principal can grant or revoke.
For example, the following condition expression limits the principal to
granting and revoking the Pub/Sub Editor ( roles/pubsub.editor ) and
Pub/Sub Publisher ( roles/pubsub.publisher ) roles:
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly(['roles/pubsub.editor', 'roles/pubsub.publisher'])
Warning: Don't include the following types of roles in
the list of allowed roles:
Roles with permissions to grant and revoke IAM roles (that
is, roles with permission names that end in setIamPolicy ).
Custom roles that the limited IAM admin can modify. For
example, if the limited IAM admin also has the Role
Administrator role ( roles/iam.roleAdmin ) on a project, don't
allow them to grant or revoke project-level custom roles.
Limited IAM admins who can grant and revoke these types of
roles can give themselves permission to grant and revoke all
IAM roles. See Writing a
condition expression to limit role granting for more information.
Finally, write the updated allow policy:
Set the new allow policy by executing the
set-iam-policy command for
the resource:
gcloud resource-type set-iam-policy resource-id path
Replace the following values:
resource-type : The resource type that you want to
let a principal grant or revoke roles for. Use one of the following:
projects , resource-manager folders , or organizations .
resource-id : Your Google Cloud project,
folder, or organization ID.
path : A path to the file containing the updated
allow policy.
The new allow policy is applied, and the principal will be able to modify
bindings for only the roles you have allowed.
Allow policies are set using the
read-modify-write
pattern.
First, read the allow policy for the resource:
The Resource Manager API's
getIamPolicy
method gets a project's, folder's, or organization's allow policy.
Before using any of the request data,
make the following replacements:
API_VERSION : The API version to use. For
projects and organizations, use v1 . For folders, use v2 .
RESOURCE_TYPE : The resource type whose
policy you want to manage. Use the value projects , folders , or
organizations .
RESOURCE_ID : Your Google Cloud
project, organization, or folder ID. Project IDs are alphanumeric strings, like
my-project . Folder and organization IDs are numeric, like 123456789012 .
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :getIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the resource's allow policy. For example:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/owner",
"members": [
"user:my-user@example.com"
]
}
]
}
Next, modify the allow policy.
Add a conditional role binding that lets a principal grant and revoke only
certain roles. Make sure to change the version field to the value
3 :
{
"version" : 3 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"members" : [
"user:owner@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
" PRINCIPAL "
],
"role" : " ROLE " ,
"condition" : {
"title" : " TITLE " ,
"description" : " DESCRIPTION " ,
"expression" :
" EXPRESSION "
}
}
]
}
PRINCIPAL : The principal that will grant or revoke
certain roles. For example, user:my-user@example.com . To see the formats of each
principal type, see Principal identifiers .
ROLE : The role you chose in the preceding steps.
This role must include the setIamPolicy permission for the resource type
you chose.
TITLE : A string briefly describing the condition.
For example, only_pubsub_roles .
DESCRIPTION : Optional. An additional description
for the condition. For example, Only allows granting/revoking the Pub/Sub
editor and publisher roles .
EXPRESSION : The expression you wrote in
Writing a condition expression to limit role granting .
This expression limits which roles that the principal can grant or revoke.
For example, the following condition expression limits the principal to
granting and revoking the Pub/Sub Editor ( roles/pubsub.editor ) and
Pub/Sub Publisher ( roles/pubsub.publisher ) roles:
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly(['roles/pubsub.editor', 'roles/pubsub.publisher'])
Warning: Don't include the following types of roles in
the list of allowed roles:
Roles with permissions to grant and revoke IAM roles (that
is, roles with permission names that end in setIamPolicy ).
Custom roles that the limited IAM admin can modify. For
example, if the limited IAM admin also has the Role
Administrator role ( roles/iam.roleAdmin ) on a project, don't
allow them to grant or revoke project-level custom roles.
Limited IAM admins who can grant and revoke these types of
roles can give themselves permission to grant and revoke all
IAM roles. See Writing a
condition expression to limit role granting for more information.
Finally, write the updated allow policy:
The Resource Manager API's
setIamPolicy
method sets the allow policy in the request as the new allow policy for the project, folder, or organization.
Before using any of the request data,
make the following replacements:
API_VERSION : The API version to use. For
projects and organizations, use v1 . For folders, use v2 .
RESOURCE_TYPE : The resource type whose
policy you want to manage. Use the value projects , folders , or
organizations .
RESOURCE_ID : Your Google Cloud
project, organization, or folder ID. Project IDs are alphanumeric strings, like
my-project . Folder and organization IDs are numeric, like 123456789012 .
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the policy shown in the previous step, replace
POLICY with the following:
{
"version" : 3 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"members" : [
"user:owner@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
" principal "
],
"role" : " role " ,
"condition" : {
"title" : " title " ,
"description" : " description " ,
"expression" :
" expression "
}
}
]
}
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :setIamPolicy
Request JSON body:
{
"policy": POLICY
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :setIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/ API_VERSION / RESOURCE_TYPE / RESOURCE_ID :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
What's next
Enforce the principle of least privilege with role
recommendations .
Learn how to use IAM Conditions to
configure temporary access and
configure resource-based access .
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
