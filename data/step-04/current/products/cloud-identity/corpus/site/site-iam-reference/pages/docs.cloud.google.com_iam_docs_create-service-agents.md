---
title: "Create and grant roles to service agents \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/create-service-agents
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/create-service-agents
  title: "Create and grant roles to service agents \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and grant roles to service agents | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Required roles
Identify service agents to create
Trigger service agent creation
Grant roles to service agents Find the service agent's email address
Grant a role to the service agent
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Create and grant roles to service agents
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Identify service agents to create
Trigger service agent creation
Grant roles to service agents Find the service agent's email address
Grant a role to the service agent
What's next
Preview
— triggering service agent creation
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In Google Cloud, project-level, folder-level, and organization-level service
agents are created automatically as you enable and use
Google Cloud services. Sometimes, these service agents are also
automatically granted roles that allow them to create and access resources on
your behalf.
If necessary, you can also ask Google Cloud to create project-level,
folder-level, and organization-level service agents for a service before you use
the service. Asking Google Cloud to create service agents lets you grant
roles to service agents before you use a service. If a service agent hasn't
been created yet, then you can't grant roles to the service agent.
This option is useful if you use one of the following strategies to manage your
allow policies:
A declarative framework like Terraform .
If your Terraform configuration doesn't include the service agents' roles,
then those roles are revoked when you apply your configuration. By
creating service agents and granting them roles in your Terraform
configuration, you ensure that these roles aren't revoked.
A policies-as-code-system that stores copies of your current allow
policies in a code repository. If you let Google Cloud grant roles to
service agents automatically, those roles appear in your actual allow policy,
but not in your stored copy of the allow policy. To resolve this
inconsistency, you might incorrectly revoke these roles. By creating service
agents and granting them roles proactively, you can help prevent drift between
your code repository and your actual allow policies.
After you trigger service agent creation, you must grant the service agents the
roles that they are typically granted automatically. If you don't, some services
might not function properly. This is because service agents that are created at
a user's request aren't automatically granted roles.
Note: To create and grant roles to service agents for service-specific
resources, refer to the service's documentation.
Before you begin
Enable the Resource Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Understand service agents .
Required roles
Triggering service agent creation doesn't require any IAM
permissions. However, you need specific IAM permissions for other
tasks on this page:
To get the permission that
you need to list available services and their endpoints,
ask your administrator to grant you the
Service Usage Viewer ( roles/serviceusage.serviceUsageViewer )
IAM role on the project, folder, or organization that you want to list
available services for.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
serviceusage.services.list
permission,
which is required to
list available services and their endpoints.
You might also be able to get
this permission
with custom roles or
other predefined roles .
To get the permissions that
you need to grant the service agents access,
ask your administrator to grant you the
following IAM roles on the project, folder, or organization that you're granting
access to:
Grant service agents access to a project:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Grant service agents access to a folder:
Folder Admin ( roles/resourcemanager.folderAdmin )
Grant service agents access to projects, folders, and organizations:
Organization Admin ( roles/resourcemanager.organizationAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to grant the service agents access. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to grant the service agents access:
Grant service agents access to a project:
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
Grant service agents access to a folder:
resourcemanager.folders.getIamPolicy
resourcemanager.folders.setIamPolicy
Grant service agents access to an organization:
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Identify service agents to create
To identify the project-level, folder-level, and organization-level service
agents that you need to ask Google Cloud to create, do the following:
Make a list of the services that you use and their API endpoints. To view
all available services and their endpoints, use one of the following methods:
Console gcloud REST
More
Go to the API Library page in the Google Cloud console.
Go to API Library
The API endpoint is the Service name listed in the Additional
details section.
The
gcloud services list
command lists all available services for a project.
Before using any of the command data below,
make the following replacements:
EXPRESSION : Optional. An expression to filter
the results. For example, the following expression filters for all services
whose names contain googleapis.com but don't contain
sandbox :
name ~ googleapis.com AND name !~ sandbox
For a list of filter expressions, see gcloud topic
filters .
LIMIT : Optional. The maximum number of results to list. The
default is unlimited .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud services list --available --filter = ' EXPRESSION ' --limit = LIMIT
Windows (PowerShell)
gcloud services list --available --filter = ' EXPRESSION ' --limit = LIMIT
Windows (cmd.exe)
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud services list --available --filter = ' EXPRESSION ' --limit = LIMIT
The response contains the names and titles of all available services. The API
endpoint is the value in the NAME field.
The Service Usage API's
services.list
method lists all available services for a project.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type of resource that you want to
list available services for. Use projects , folders ,
or organizations .
RESOURCE_ID : The ID of the Google Cloud
project, folder, or organization that you want to list available services
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like 123456789012 .
PAGE_SIZE : Optional. The number of services to include in the
response. The default value is 50, and the maximum value is 200. If the number of services
is greater than the page size, the response contains a pagination token that you can use to
retrieve the next page of results.
NEXT_PAGE_TOKEN : Optional. The pagination token returned in an earlier
response from this method. If specified, the list of services will start where the previous
request ended.
HTTP method and URL:
GET https://serviceusage.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /services?pageSize= PAGE_SIZE &pageToken= NEXT_PAGE_TOKEN
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://serviceusage.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /services?pageSize= PAGE_SIZE &pageToken= NEXT_PAGE_TOKEN "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://serviceusage.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /services?pageSize= PAGE_SIZE &pageToken= NEXT_PAGE_TOKEN " | Select-Object -Expand Content
The response contains the names and titles of all available services for the
resource. If the number of available services is greater than the page size,
the response also contains a pagination token.
The API endpoint is the value in the name field.
On the service agent reference page, search for each
API endpoint.
If the endpoint is listed in the table, find all service agents for that
endpoint. Ignore any service agents whose email address contains the
IDENTIFIER placeholder—those service agents are
for service-specific resources, not projects, folders, or organizations.
For each project-level, folder-level, and organization-level service agent,
record the following:
The format of the service agent's email address.
The role that the service agent is granted, if any.
Trigger service agent creation
After you know which service agents you need to create, you can ask
Google Cloud to create them.
When you ask Google Cloud to create service agents, you provide it with
a service and a resource. Then, Google Cloud creates all service agents
for that service and that resource.
gcloud Terraform REST
More
For each service that you need to create service agents for, do the following:
Review the service agent email addresses for the service. Use the
placeholders in the email addresses to determine which resources you need to
create service agents for:
Placeholder
Where to create service agents
PROJECT_NUMBER
Each project where you will use the service
FOLDER_NUMBER
Each folder where you will use the service
ORGANIZATION_NUMBER
Each organization where you will use the service
Create service agents for each resource.
The
gcloud beta services identity create
command creates all service agents for the specified API and resource.
Before using any of the command data below,
make the following replacements:
ENDPOINT : The endpoint of the API that you want to create
a service agent for—for example, aiplatform.googleapis.com .
RESOURCE_TYPE : The type of resource that you want
to create a service agent for. Use project ,
folder , or organization .
RESOURCE_ID : The ID of the Google Cloud
project, folder, or organization that you want to create a service agent
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like 123456789012 .
You can create service agents for one resource at a time. If you need to create
service agents for multiple resources, run the command once for each
resource.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud beta services identity create --service = ENDPOINT \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud beta services identity create --service = ENDPOINT `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud beta services identity create --service = ENDPOINT ^
-- RESOURCE_TYPE = RESOURCE_ID
The response contains the email address of the service's primary service
agent. This email address includes the numeric ID of the project, folder, or
organization that you created service agents for.
If the service doesn't have a primary service agent, the response doesn't
contain an email address.
The following is an example of a response for a service that has a primary service agent.
Service identity created: service-232332569935@gcp-sa-aiplatform.iam.gserviceaccount.com
Optional: Record the service agent email address in the response, if any.
This email address identifies the service's primary service
agent . You can use this identifier to grant roles to
the primary service agent.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
For each service that you need to create service agents for, do the following:
Review the service agent email addresses for the service. Use the
placeholders in the email addresses to determine which resources you need to
create service agents for:
Placeholder
Where to create service agents
PROJECT_NUMBER
Each project where you will use the service
FOLDER_NUMBER
Each folder where you will use the service
ORGANIZATION_NUMBER
Each organization where you will use the service
Create service agents for each resource. For example, the following code
creates all project-level service agents for AI Platform:
Note: Terraform only supports triggering the creation of project-level
service agents. To trigger the creation of folder-level and
organization-level service agents, use the Google Cloud CLI or REST API.
data "google_project" "default" {
}
# Create all project-level aiplatform.googleapis.com service agents
resource "google_project_service_identity" "default" {
provider = google-beta
project = data.google_project.default.project_id
service = "aiplatform.googleapis.com"
}
For each service that you need to create service agents for, do the following:
Review the service agent email addresses for the service. Use the
placeholders in the email addresses to determine which resources you need to
create service agents for:
Placeholder
Where to create service agents
PROJECT_NUMBER
Each project where you will use the service
FOLDER_NUMBER
Each folder where you will use the service
ORGANIZATION_NUMBER
Each organization where you will use the service
Create service agents for each resource.
The Service Usage API's
services.generateServiceIdentity
method creates all service agents for the specified API and resource.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type of resource that you want to
create a service agent for. Use projects , folders ,
or organizations .
RESOURCE_ID : The ID of the Google Cloud
project, folder, or organization that you want to create service agents
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like 123456789012 .
You can create service agents for one resource at a time. If you need to
create service agents for multiple resources, send one request for each
resource.
ENDPOINT : The endpoint of the API that you want to create
a service agent for—for example, aiplatform.googleapis.com .
HTTP method and URL:
POST https://serviceusage.googleapis.com/v1beta1/ RESOURCE_TYPE / RESOURCE_ID /services/ ENDPOINT :generateServiceIdentity
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://serviceusage.googleapis.com/v1beta1/ RESOURCE_TYPE / RESOURCE_ID /services/ ENDPOINT :generateServiceIdentity"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://serviceusage.googleapis.com/v1beta1/ RESOURCE_TYPE / RESOURCE_ID /services/ ENDPOINT :generateServiceIdentity" | Select-Object -Expand Content
The response contains an Operation
indicting the status of your request. To check the status of the operation,
use the operations.get
method.
Finished operations contain the email address of the service's primary service
agent. This email address includes the numeric ID of the project, folder, or
organization that you created service agents for.
If the service doesn't have a primary service agent, the response doesn't
contain an email address.
The following is an example of a finished operation for a service that has a primary service
agent.
{
"name": "operations/finished.DONE_OPERATION",
"done": true,
"response": {
"@type": "type.googleapis.com/google.api.serviceusage.v1beta1.ServiceIdentity",
"email": "service-232332569935@gcp-sa-aiplatform.iam.gserviceaccount.com",
"uniqueId": "112245693826560101651"
}
}
Optional: Record the service agent email address in the response, if any.
This email address identifies the service's primary service
agent . You can use this identifier to grant roles to
the primary service agent.
Grant roles to service agents
After Google Cloud creates the necessary service agents for your projects,
folders, and organizations, you use the service agents' email addresses to
grant them roles.
If you asked Google Cloud to create service agents, you must grant those
service agents the roles that they are typically granted automatically. If you
don't, some services might not function properly. This is because service agents
that are created at a user's request aren't automatically granted roles.
To learn how to identify automatically granted roles, see Identify service
agents to create .
Find the service agent's email address
To find a service agent's email address, do the following:
gcloud Terraform REST
More
If you have not already, find the service agent's email address format. This
format is documented in the service agent reference .
Replace any placeholders in the email address with the corresponding project,
folder, or organization number.
Alternatively, if the service agent is a primary service
agent , you can get its email address by triggering
service agent creation for the service. The command to trigger service
agent creation returns the primary service agent's email address.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
If you have not already, find the service agent's email address format. This
format is documented in the service agent reference .
Replace any placeholders in the email address with expressions that reference
the appropriate project, folder, or organization number.
For example, consider the following situation:
The email address format is service- PROJECT_NUMBER @gcp-sa-aiplatform-cc.iam.gserviceaccount.com
The service agent is for a project labeled default
In this case, the service agent's email address is as follows:
service-${data.google_project.default.number}@gcp-sa-aiplatform-cc.iam.gserviceaccount.com
Alternatively, if a service agent is the primary service agent for a service,
you can get its email address from the email attribute of the
google_project_service_identity resource.
For example, if you have a google_project_service_identity block labeled
default , you can get the email address of the service's primary service agent
by using the following expression:
${google_project_service_identity.default.email}
If you have not already, find the service agent's email address format. This
format is documented in the service agent reference .
Replace any placeholders in the email address with the corresponding project,
folder, or organization number.
Alternatively, if the service agent is a primary service
agent , you can get its email address by triggering
service agent creation for the service. The command to trigger service
agent creation returns the primary service agent's email address.
Grant a role to the service agent
After you find the service agent's email address, you can grant it a role just
like you would grant a role to any other principal.
Console gcloud Terraform REST
More
In the Google Cloud console, go to the IAM page.
Go
to IAM
Select a project, folder, or organization.
Click person_add Grant Access , then
enter the service agent's email address.
Click Select a role , then search for a role to grant based on the following:
The role name
The Google Cloud product that you want to grant access to
The permission that you want to give
The job function to perform
To follow the principle of least privilege, choose a
role that includes only the permissions that your principal needs.
Optional: Add a condition to the role.
Click Save . The service agent is granted the role on the resource.
The
add-iam-policy-binding
command lets you quickly grant a role to a principal.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The resource type that you want to
manage access to. Use projects , resource-manager folders , or
organizations .
RESOURCE_ID : Your Google Cloud project, folder,
or organization ID. Project IDs are alphanumeric, like my-project .
Folder and organization IDs are numeric, like 123456789012 .
PRINCIPAL : An identifier for the principal, or member,
which usually has the following form:
PRINCIPAL_TYPE : ID .
For example, user:my-user@example.com or
principalSet://iam.googleapis.com/locations/global/workforcePools/example-pool/group/example-group@example.com .
For a full list of the values that PRINCIPAL can have, see Principal identifiers .
For the principal type user , the domain name in the identifier must be
a Google Workspace domain or a Cloud Identity domain. To learn how to set
up a Cloud Identity domain, see the
overview of Cloud Identity .
ROLE_NAME : The name of the role that you want
to grant. Use one of the following formats:
Predefined roles: roles/ SERVICE . IDENTIFIER
Project-level custom roles: projects/ PROJECT_ID /roles/ IDENTIFIER
Organization-level custom roles: organizations/ ORG_ID /roles/ IDENTIFIER
For a list of predefined roles, see Understanding roles .
CONDITION : The condition to add to the role
binding. If you don't want to add a condition, use the value None . For
more information about conditions, see the conditions overview .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member = PRINCIPAL --role = ROLE_NAME \
--condition = CONDITION
Windows (PowerShell)
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID `
--member = PRINCIPAL --role = ROLE_NAME `
--condition = CONDITION
Windows (cmd.exe)
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID ^
--member = PRINCIPAL --role = ROLE_NAME ^
--condition = CONDITION
The response contains the updated IAM allow policy.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
# Grant the AI Platform Custom Code Service Account the Vertex AI Custom
# Code Service Agent role (roles/aiplatform.customCodeServiceAgent)
resource "google_project_iam_member" "custom_code" {
project = data.google_project.default.project_id
role = "roles/aiplatform.customCodeServiceAgent"
member = "serviceAccount:service-${data.google_project.default.number}@gcp-sa-aiplatform-cc.iam.gserviceaccount.com"
}
# Grant the primary aiplatform.googleapis.com service agent (AI Platform
# Service Agent) the Vertex AI Service Agent role
# (roles/aiplatform.serviceAgent)
resource "google_project_iam_member" "primary" {
project = data.google_project.default.project_id
role = "roles/aiplatform.serviceAgent"
member = "serviceAccount:${google_project_service_identity.default.email}"
}
To grant a role with the REST API, use the read-modify-write pattern:
Read the current allow policy by calling getIamPolicy() .
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
Edit the resource's allow policy, either by using a text editor or
programmatically, to add or remove any principals or role bindings. For
example, you could add a new role binding, remove an existing role binding,
or add or remove principals from an existing role binding.
Write the updated allow policy by calling setIamPolicy() .
The Resource Manager API's
setIamPolicy
method sets the policy in the request as the new allow policy for the project, folder, or organization.
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
View a list of all service agents .
Explore other ways that you can grant roles to principals .
Learn how to create user-managed service accounts ,
which can act as identities for your workloads.
Learn more about best practices for using Terraform on
Google Cloud .
Explore all Google Cloud Terraform samples .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
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
