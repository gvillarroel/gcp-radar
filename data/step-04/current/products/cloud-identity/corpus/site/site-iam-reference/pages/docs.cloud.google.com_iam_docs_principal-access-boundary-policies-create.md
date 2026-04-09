---
title: "Create and apply principal access boundary policies \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/principal-access-boundary-policies-create
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/principal-access-boundary-policies-create
  title: "Create and apply principal access boundary policies \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and apply principal access boundary policies | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Roles required to create principal access boundary policies
Roles required to apply principal access boundary policies
Create a principal access boundary policy
Apply a principal access boundary policy to a principal set
Check the status of a long-running operation
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Create and apply principal access boundary policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Roles required to create principal access boundary policies
Roles required to apply principal access boundary policies
Create a principal access boundary policy
Apply a principal access boundary policy to a principal set
Check the status of a long-running operation
What's next
Principal access boundary (PAB) policies let you limit the resources that a set
of principals are eligible to access. This page explains how to create and apply
principal access boundary policies.
Before you begin
Set up authentication.
Select the tab for how you plan to use the samples on this page:
Console gcloud REST
More
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Read the overview of principal access boundary policies .
Roles required to create principal access boundary policies
To get the permission that
you need to create principal access boundary policies,
ask your administrator to grant you the
Principal Access Boundary Admin ( roles/iam.principalAccessBoundaryAdmin )
IAM role on your organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
iam.principalaccessboundarypolicies.create
permission,
which is required to
create principal access boundary policies.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Roles required to apply principal access boundary policies
The permissions that you need in order to apply a principal access boundary policy
depend on the principal set that you want to apply the policy to.
To get the permissions that
you need to apply principal access boundary policies,
ask your administrator to grant you the
following IAM roles:
Principal Access Boundary User ( roles/iam.principalAccessBoundaryUser )
on the organization
Apply principal access boundary policies to workforce identity pools:
IAM Workforce Pool Admin ( roles/iam.workforcePoolAdmin )
on the target workforce identity pool
Apply principal access boundary policies to workload identity pools:
IAM Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
on the project that owns the target workload identity pool
Get the status of a long-running operation for applying a principal access boundary policy to a workload identity pool:
IAM Operation Viewer ( roles/iam.operationViewer )
on the project that owns the target workload identity pool
Apply principal access boundary policies to a Google Workspace domain:
Workspace Pool IAM Admin ( roles/iam.workspacePoolAdmin )
on the organization
Apply principal access boundary policies to a project's principal set:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on the project
Get the status of a long-running operation for applying a principal access boundary policy to a project's principal set:
IAM Operation Viewer ( roles/iam.operationViewer )
on the project
Apply principal access boundary policies to a folder's principal set:
Folder IAM Admin ( roles/resourcemanager.folderIamAdmin )
on the folder
Apply principal access boundary policies to an organization's principal set:
Organization Administrator ( roles/resourcemanager.organizationAdmin )
on the organization
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to apply principal access boundary policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to apply principal access boundary policies:
iam.principalaccessboundarypolicies.bind
on the organization
Apply principal access boundary policies to Workforce Identity Federation pools:
iam.workforcePools.createPolicyBinding
on the target Workforce Identity Federation pool
Apply principal access boundary policies to Workload Identity Federation pools:
iam.workloadIdentityPools.createPolicyBinding
on the project that owns the target Workforce Identity Federation pool
Get the status of a long-running operation for applying a principal access boundary policy to a workload identity pool:
iam.operations.get
on the project that owns the target workload identity pool
Apply principal access boundary policies to a Google Workspace domain:
iam.workspacePools.createPolicyBinding
on the organization
Apply principal access boundary policies to a project's principal set:
resourcemanager.projects.createPolicyBinding
on the project
Get the status of a long-running operation for applying a principal access boundary policy to a project's principal set:
iam.operations.get
on the project
Apply principal access boundary policies to a folder's principal set:
resourcemanager.folders.createPolicyBinding
on the folder
Apply principal access boundary policies to an organization's principal set:
resourcemanager.organizations.createPolicyBinding
on the organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create a principal access boundary policy
You can create a principal access boundary policy using the Google Cloud console,
the gcloud CLI, or the IAM REST API.
Console gcloud REST
More
In the Google Cloud console, go to the Principal Access Boundary
policies page.
Go to Principal Access Boundary
policies
Select the organization that you want to create principal access boundary policies
for.
Click add_box Create policy .
Add principal access boundary rules to the policy:
Click add_box Add boundary rule .
In the Description field, add a description of the principal access boundary
policy rule. The description can be a maximum of 256 characters.
In the Resources section, enter all of the Resource Manager
resources (projects, folders, and organizations) that you want principals
to be eligible to access. Any principal that is subject to this policy is
eligible to access these resources.
Each principal access boundary policy can reference a maximum of
500 resources across all rules in the
policy.
Click Done .
To add additional policy rules, repeat these steps. Each
principal access boundary policy can have up to
500 rules.
In the Policy name section, enter a name for the policy. The name can be
a maximum of 63 characters.
In the Enforcement version list, select the enforcement version for the
policy. The principal access boundary policy version determines which permissions
IAM enforces the principal access boundary policy for.
For more information about enforcement versions, see Principal access boundary
enforcement versions .
Click Create .
The
gcloud iam principal-access-boundary-policies create
command creates a principal access boundary policy.
Before using any of the command data below,
make the following replacements:
ORG_ID : The ID of the organization that you want to
create the principal access boundary policy in. Organization IDs are numeric, like 123456789012 .
PAB_POLICY_ID : A unique ID for the principal access boundary policy—for example,
example-policy .
:
DISPLAY_NAME : Optional. A human-readable
description of the principal access boundary policy—for example, Example policy . The display
name can be a maximum of 63 characters.
FILE_PATH : The path to a JSON file containing the principal access boundary policy
rule details. This file should have the following format:
{
"description": DESCRIPTION ,
"resources": [
RESOURCES
],
"effect": ALLOW
}
Replace the following values:
DESCRIPTION : Optional. The description of the principal access boundary
policy rule. The description can be a maximum of 256 characters.
RESOURCES : A list of Resource Manager resources (projects,
folders, and organizations) that you want principals to be eligible to access. Any
principal that is subject to this policy is eligible to access these resources.
Each principal access boundary policy can reference a maximum of 500
resources across all rules in the policy.
ENFORCEMENT_VERSION : The version of principal access boundary policies that IAM
uses when enforcing the policy. The enforcement version determines which permissions IAM enforces
the principal access boundary policy for.
Accepted values are 1 , 2 , 3 , and latest .
For more information about enforcement versions, see Principal access boundary enforcement
versions .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam principal-access-boundary-policies create PAB_POLICY_ID \
--organization = ORG_ID --location = global \
--display-name = DISPLAY_NAME --details-rules = FILE_PATH .json \
--details-enforcement-version = ENFORCEMENT_VERSION
Windows (PowerShell)
gcloud iam principal-access-boundary-policies create PAB_POLICY_ID `
--organization = ORG_ID --location = global `
--display-name = DISPLAY_NAME --details-rules = FILE_PATH .json `
--details-enforcement-version = ENFORCEMENT_VERSION
Windows (cmd.exe)
gcloud iam principal-access-boundary-policies create PAB_POLICY_ID ^
--organization = ORG_ID --location = global ^
--display-name = DISPLAY_NAME --details-rules = FILE_PATH .json ^
--details-enforcement-version = ENFORCEMENT_VERSION
The response contains a long-running operation representing your request. To learn how to get
the status of a long-running operation, see Check the status of a
long-running operation on this page.
Create request issued for: [example-policy]
Waiting for operation [organizations/123456789012/locations/global/operations/operation-1715373988044-6181fa136df85-3b06a30a-4816d25b] to complete...done.
Created principalAccessBoundaryPolicy [example-policy].
The
principalAccessBoundaryPolicies.create
method creates a principal access boundary policy.
Before using any of the request data,
make the following replacements:
ORG_ID : The ID of the organization that you want to
create the principal access boundary policy in. Organization IDs are numeric, like 123456789012 .
PAB_POLICY_ID : A unique ID for the principal access boundary policy—for example,
example-policy .
DISPLAY_NAME : Optional. A human-readable
description of the principal access boundary policy—for example, Example policy . The display
name can be a maximum of 63 characters.
PAB_RULES : A list of principal access boundary rules, which define the resources that
affected principals are eligible to access. A principal access boundary policy can have up to
500 rules. Each rule has the following format:
{
"description" : " DESCRIPTION " ,
"resources" : [
RESOURCES
],
"effect" : ALLOW
}
Replace the following values:
DESCRIPTION : Optional. The description of the principal access boundary
policy rule. The description can be a maximum of 256 characters.
RESOURCES : A list of Resource Manager resources (projects, folders,
and organizations) that you want principals to be eligible to access. Any principal that is
subject to this policy is eligible to access these resources.
Each principal access boundary policy can reference a maximum of 500
resources across all rules in the policy.
ENFORCEMENT_VERSION : The version of principal access boundary policies that IAM
uses when enforcing the policy. The enforcement version determines which permissions IAM enforces
the principal access boundary policy for.
Accepted values are 1 , 2 , 3 , and latest .
For more information about enforcement versions, see Principal access boundary enforcement
versions .
HTTP method and URL:
POST https://iam.googleapis.com/v3/organizations/ ORG_ID /locations/global?principalAccessBoundaryPolicyId= PAB_POLICY_ID
Request JSON body:
{
"displayName": DISPLAY_NAME ,
"details": {
"rules": [
PAB_RULES
],
"effect": ALLOW
}
],
"enforcementVersion": " ENFORCEMENT_VERSION "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v3/organizations/ ORG_ID /locations/global?principalAccessBoundaryPolicyId= PAB_POLICY_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v3/organizations/ ORG_ID /locations/global?principalAccessBoundaryPolicyId= PAB_POLICY_ID " | Select-Object -Expand Content
The response contains a long-running operation representing your request. To learn how to get
the status of a long-running operation, see Check the status of a
long-running operation on this page.
{
"name": "organizations/123456789012/locations/global/operations/operation-1715373120647-6181f6d8371d2-83309b71-2b8a7532",
"metadata": {
"@type": "type.googleapis.com/google.iam.v3.OperationMetadata",
"createTime": "2024-05-10T20:32:00.898809495Z",
"target": "organizations/123456789012/locations/global/policyBindings/example-policy",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v3"
},
"done": false
}
Apply a principal access boundary policy to a principal set
To apply a principal access boundary policy to a principal set, create a policy binding
resource that binds the policy to the principal set. After you create a policy
binding, the principal access boundary policy in the binding is enforced for the
principals in the binding.
You can create a policy binding using the Google Cloud console, the
gcloud CLI, or the IAM REST API.
Console gcloud REST
More
In the Google Cloud console, go to the Principal Access Boundary
policies page.
Go to Principal Access Boundary
policies
Select the organization that owns the principal access boundary policy that you want
to create a binding for.
Click the policy ID of the principal access boundary policy that you want to create
a binding for.
Click the Bindings tab, then click add_box Add binding .
Enter the binding details:
Optional: In the Display name field, enter a display name for
the binding. The display name can be a maximum of 63 characters.
In the Binding ID field, enter a unique name for the
binding—for example, example-binding .
In the Target principal set section, enter the type and ID of the
principal set that you want to bind the policy to. You can't change
this value after you create the policy binding.
To learn more about the principals included in each principal set,
see Supported principal sets .
Optional: To specify which principals in the principal set the
principal access boundary policy is enforced for, add a condition to the binding:
Click add Add condition .
In the Title field, enter a brief summary of the purpose of the
condition.
Optional: In the Description field, enter a longer description of
the condition.
In the Expression field, enter condition expression that uses the
Common Expression Language (CEL) syntax . The
expression must reference the principal.type or principal.subject
attributes . Other attributes are not supported.
Click Save .
Optional: To test your changes to the principal access boundary policy with Policy Simulator, click Test
changes . Review the simulation results and
update the policy if necessary.
To learn more about testing principal access boundary policies with Policy Simulator, see Policy Simulator for principal access boundary
policies .
To create the binding, click Add .
The
gcloud iam policy-bindings create
command creates a policy binding.
Before using any of the command data below,
make the following replacements:
BINDING_ID : A unique name for the policy binding—for example,
example-binding .
RESOURCE_TYPE : The type of the Resource Manager resource (project, folder,
or organization) that the policy binding is a child of. Use the value
project , folder , or organization
The resource type depends on the principal set in the policy binding. To see which resource
type to use, see Supported principal
types .
RESOURCE_ID : The ID of the project,
folder, or organization that the policy binding is a child of. Project IDs are alphanumeric strings,
like my-project . Folder and organization IDs are numeric, like
123456789012 .
ORG_ID : The ID of the organization that owns the principal access boundary policy
that you want to bind to the principal set. Organization IDs are numeric, like
123456789012 .
PAB_POLICY_ID : The ID of the principal access boundary policy that you want to bind
to the principal set—for example, example-pab-policy . You can't change this
value after you create the policy binding.
PRINCIPAL_SET : The principal set that you want to bind the policy to.
For a list of valid principal types, see Supported principal sets .
You can't change this value after you create the policy binding.
DISPLAY_NAME : Optional. A
human-readable description of the binding—for example, Example binding . The
display name can be a maximum of 63 characters.
CONDITION_DETAILS : Optional. A condition expression that specifies which principals
in the principal set the principal access boundary policy is enforced for. Contains the following fields:
expression : A condition expression that uses
Common
Expression Language (CEL) syntax . The expression must reference the
principal.type or
principal.subject attributes . Other attributes are not supported.
The expression can contain up to 10 logical
operators ( && , || , ! ), and can be up to 250 characters
long.
title : Optional. A brief summary of the purpose of the condition.
description : Optional. A longer description of the condition.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam policy-bindings create BINDING_ID \
-- RESOURCE_TYPE = RESOURCE_ID --location = global \
--policy = "organizations/ ORG_ID /locations/global/principalAccessBoundaryPolicies/ PAB_POLICY_ID " \
--target-principal-set = PRINCIPAL_SET_ID \
--display-name = DISPLAY_NAME \
CONDITION_DETAILS
Windows (PowerShell)
gcloud iam policy-bindings create BINDING_ID `
-- RESOURCE_TYPE = RESOURCE_ID --location = global `
--policy = "organizations/ ORG_ID /locations/global/principalAccessBoundaryPolicies/ PAB_POLICY_ID " `
--target-principal-set = PRINCIPAL_SET_ID `
--display-name = DISPLAY_NAME `
CONDITION_DETAILS
Windows (cmd.exe)
gcloud iam policy-bindings create BINDING_ID ^
-- RESOURCE_TYPE = RESOURCE_ID --location = global ^
--policy = "organizations/ ORG_ID /locations/global/principalAccessBoundaryPolicies/ PAB_POLICY_ID " ^
--target-principal-set = PRINCIPAL_SET_ID ^
--display-name = DISPLAY_NAME ^
CONDITION_DETAILS
The response contains a long-running operation representing your request. To learn how to get
the status of a long-running operation, see Check the status of a
long-running operation on this page.
Create request issued for: [example-binding]
Waiting for operation [organizations/123456789012/locations/global/operations/operation-1715374545618-6181fc272c6f9-55ff07f4-97d0ac76] to complete...done.
Created policyBinding [example-binding].
The
policyBindings.create
method creates a policy binding.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type of the Resource Manager resource (project, folder,
or organization) that the policy binding is a child of. Use the value
projects , folders , or organizations
The resource type depends on the principal set in the policy binding. To see which resource
type to use, see Supported principal
types .
RESOURCE_ID : The ID of the project,
folder, or organization that the policy binding is a child of. Project IDs are alphanumeric strings,
like my-project . Folder and organization IDs are numeric, like
123456789012 .
BINDING_ID : A unique name for the policy binding—for example,
example-binding .
DISPLAY_NAME : Optional. A
human-readable description of the binding—for example, Example binding . The
display name can be a maximum of 63 characters.
PRINCIPAL_SET : The principal set that you want to bind the policy to.
For a list of valid principal types, see Supported principal sets .
You can't change this value after you create the policy binding.
ORG_ID : The ID of the organization that owns the principal access boundary policy
that you want to bind to the principal set. Organization IDs are numeric, like
123456789012 .
PAB_POLICY_ID : The ID of the principal access boundary policy that you want to bind
to the principal set—for example, example-pab-policy . You can't change this
value after you create the policy binding.
CONDITION_DETAILS : Optional. A condition expression that specifies which principals
in the principal set the principal access boundary policy is enforced for. Contains the following fields:
expression : A condition expression that uses
Common
Expression Language (CEL) syntax . The expression must reference the
principal.type or
principal.subject attributes . Other attributes are not supported.
The expression can contain up to 10 logical
operators ( && , || , ! ), and can be up to 250 characters
long.
title : Optional. A brief summary of the purpose of the condition.
description : Optional. A longer description of the condition.
HTTP method and URL:
POST https://iam.googleapis.com/v3/ RESOURCE_TYPE / RESOURCE_ID /locations/global/policyBindings?policyBindingId= BINDING_ID
Request JSON body:
{
"displayName": DISPLAY_NAME ,
"target": {
"principalSet": PRINCIPAL_SET
},
"policyKind": "PRINCIPAL_ACCESS_BOUNDARY",
"policy": "organizations/ ORG_ID /locations/global/principalAccessBoundaryPolicies/ PAB_POLICY_ID ",
"condition": {
CONDITION_DETAILS
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v3/ RESOURCE_TYPE / RESOURCE_ID /locations/global/policyBindings?policyBindingId= BINDING_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v3/ RESOURCE_TYPE / RESOURCE_ID /locations/global/policyBindings?policyBindingId= BINDING_ID " | Select-Object -Expand Content
The response contains a long-running operation representing your request. To learn how to get
the status of a long-running operation, see Check the status of a
long-running operation on this page.
{
"name": "organizations/123456789012/locations/global/operations/operation-1715373120647-6181f6d8371d2-83309b71-2b8a7532",
"metadata": {
"@type": "type.googleapis.com/google.iam.v3.OperationMetadata",
"createTime": "2024-05-10T20:32:00.898809495Z",
"target": "organizations/123456789012/locations/global/policyBindings/example-binding",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v3"
},
"done": false
}
Check the status of a long-running operation
When you use the REST API or the client libraries, any method that changes a principal access boundary
policy or binding returns a long-running operation (LRO). The long-running operation tracks the
status of the request and indicates whether the change to the policy or binding is complete.
Note : When you modify a principal access boundary policy or binding using the gcloud CLI,
the gcloud CLI shows a message saying that it's waiting for an operation to complete.
However, you must use the REST API or the client libraries to get the operation's status.
REST
More
The
operations.get
method returns the status of a long-running operation.
Before using any of the request data,
make the following replacements:
OPERATION_NAME : The full name of the operation. You receive this
name in the response to your original request.
The operation name has the following format:
RESOURCE_TYPE / RESOURCE_ID /locations/global/operations/ OPERATION_ID
HTTP method and URL:
GET https://iam.googleapis.com/v3/ OPERATION_NAME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v3/ OPERATION_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://iam.googleapis.com/v3/ OPERATION_NAME " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"name": "organizations/314340013352/locations/global/operations/operation-1732752311821-627edd607a3df-9a62cdea-2a7d9f07",
"metadata": {
"@type": "type.googleapis.com/google.iam.v3.OperationMetadata",
"createTime": "2024-11-28T00:05:12.006289686Z",
"endTime": "2024-11-28T00:05:12.192141801Z",
"target": "organizations/314340013352/locations/global/principalAccessBoundaryPolicies/example-policy",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v3"
},
"done": true,
"response": {
PAB_POLICY
}
}
If the operation's done field is not present, continue to monitor its status by
getting the operation repeatedly. Use truncated
exponential backoff to introduce a delay between each request. When the done
field is set to true , the operation is complete, and you can stop getting the
operation.
What's next
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
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
