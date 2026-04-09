---
title: "Configure Workload Identity Federation with deployment pipelines \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines
  title: "Configure Workload Identity Federation with deployment pipelines \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure Workload Identity Federation with deployment pipelines | Identity and Access Management (IAM) | Google Cloud Documentation
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
Identity and Access Management (IAM)
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
Workloads with X. 509 certificates
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
Before you begin Set up authentication
Required roles
Prepare your external IdP
Configure Workload Identity Federation Define an attribute mapping
Define an attribute condition
Create the workload identity pool and provider
Update attribute condition on a workload identity provider
Authenticate a deployment pipeline Allow your external workload to access Google Cloud resources
Configure the deployment pipeline
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure Workload Identity Federation with deployment pipelines
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Set up authentication
Required roles
Prepare your external IdP
Configure Workload Identity Federation Define an attribute mapping
Define an attribute condition
Create the workload identity pool and provider
Update attribute condition on a workload identity provider
Authenticate a deployment pipeline Allow your external workload to access Google Cloud resources
Configure the deployment pipeline
What's next
This guide describes how to use Workload Identity Federation to let deployment
pipelines authenticate to Google Cloud.
Depending on the CI/CD system you're using, your deployment pipelines might have
access to ambient, environment-specific credentials. For example:
Azure DevOps pipelines can use a Microsoft Entra workload identity federation service connection to obtain an ID token that uniquely identifies the Azure DevOps project.
GitHub Actions workflows can obtain a GitHub OIDC token
that uniquely identifies the workflow and its repository.
GitLab SaaS lets CI/CD jobs access an
ID token
that uniquely identifies the job and its project, environment, and repository.
HCP Terraform can provide an OIDC token
to your Terraform configuration that uniquely identifies the workspace and
environment.
You can configure your deployment pipelines to use these credentials to authenticate to
Google Cloud by using Workload Identity Federation. This approach
eliminates the maintenance and security burden associated with
service account keys .
Before you begin
Set up authentication
Select the tab for how you plan to use the samples on this page:
Console gcloud Python
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
To use the Python samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
Required roles
To get the permissions that
you need to configure Workload Identity Federation,
ask your administrator to grant you the
Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Alternatively, the IAM Owner ( roles/owner ) basic role also
includes permissions to configure identity federation.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Prepare your external Id P
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
To let an Azure DevOps pipeline authenticate to Google Cloud, you first
configure a service connection for Azure Resource Manager. This connection
lets the pipeline obtain an ID token, which it can then exchange for
Google Cloud credentials.
To create a service connection for Azure Resource Manager, do the following:
In Azure DevOps, open your project and go to Project Settings .
Go to Pipelines > Service connections .
Click Create service connection .
Select Azure Resource Manager .
Click Next .
Configure the following settings:
Identity type : App registration (automatic)
Credential : Workload identity federation
Scope level : Subscription .
You must select a subscription even if you're not planning to use
the service connection to access Azure resources.
Service connection name : Enter a name such as google-cloud .
Click Save .
In Workload Identity federation details , find the following identifiers:
Issuer : uniquely identifies your Azure DevOps organization
Subject identifier : uniquely identifies the service connection
Save these identifiers for one of the next steps.
Azure DevOps automatically grants the service connection's service principal
access to the Azure subscription that you selected. We recommend that you
reduce this access by doing the following:
Click Manage service connection roles .
Click Role assignments .
Find the role assignment for the service connection and remove it or
replace it with a role assignment that uses a less-privileged role.
You don't need to make any configuration changes in your GitHub account.
After you configure a workload identity pool to trust your
GitHub repository, you can let workflows in that repository use their
GitHub OIDC token to obtain short-lived Google Cloud credentials.
You don't need to make any configuration changes in your GitLab account.
After you configure a workload identity pool to trust
your GitLab group, you can enable Workload Identity Federation for individual
CI/CD jobs.
You don't need to make any configuration changes in your HCP Terraform
account.
After you configure a workload identity pool to trust HCP
Terraform, you can enable Workload Identity Federation for individual
workspaces.
Configure Workload Identity Federation
Perform these steps for each Azure DevOps project, GitHub organization,
GitLab group, or HCP Terraform organization.
To start configuring Workload Identity Federation, do the following:
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
It's best to
use a dedicated project to manage workload identity pools and providers .
Verify that billing is enabled for your Google Cloud project .
Enable the IAM, Resource Manager, Service Account Credentials, and Security Token Service APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Define an attribute mapping
The environment-specific credentials of your deployment pipeline can contain multiple attributes,
and you must decide which attribute you want to use as subject identifier
( google.subject ) in Google Cloud.
Optionally, you can map additional attributes .
You can then refer to these additional attributes when you grant access to
resources.
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
The Azure DevOps ID token includes a sub claim that contains the subject
identifier of your service connection. The subject identifier follows this format:
PREFIX /sc/ SERVICE_CONNECTION
The length of this subject identifier exceeds 127 characters, which is the
maximum permitted length for google.subject . To work around this limitation,
use the following attribute mapping:
google.subject=assertion.sub.extract('/sc/{service_connection}')
This mapping uses the part of the sub claim following /sc/
as subject, which uniquely identifies the service connection within the
Entra tenant.
Your attribute mappings can use any of the claims in the GitHub Actions
OIDC token . These token claim keys and their values are controlled by
GitHub. At minimum, you should map google.subject to assertion.sub ,
which corresponds to the GitHub Actions OIDC token subject:
google.subject=assertion.sub
The value for the GitHub Actions OIDC token subject can vary depending on the
source
event . Other claim attributes can include:
repository : Contains the owner and repository name–for example
"google/guava" .
repository_id : Contains the unique repository ID–for example
"20300177" .
repository_owner : Contains the owner, which can be a username or the
name of a GitHub organization–for example "google" .
repository_owner_id : Contains the unique owner ID–for example
"1342004" .
This list is a subset of the possible claims–see the GitHub
documentation on example
claims for a complete list. Be sure to map any claims that you
plan to use as attribute conditions or as part of a future principalSet
condition.
Important: Using "name" fields like repository and repository_owner
increases the chances of cybersquatting
and typosquatting
attacks. If you delete your GitHub repository or GitHub organization,
someone may be able to claim that same name and establish an
identity. To protect against this situation, use the numeric *_id fields
instead, which are unique and can't be reused.
Your attribute mappings can use the claims embedded in the GitLab ID token
as source attributes, including the following:
sub : the project name and Git reference—for example,
project_path:groupname/projectname:ref_type:branch:ref:main .
namespace_id : the unique group ID.
project_id : the unique project ID.
user_id : the unique user ID.
environment : the environment that the job applies to.
ref_path : the Git reference—for example refs/heads/main .
The following attribute mapping sets google.subject to the sub claim
from the GitLab ID token. Because the sub claim contains
both the project name and Git reference, this mapping lets you control access
by repository and branch:
google.subject=assertion.sub
Controlling access by repository and branch can be useful if certain branches
(for example, main ) need different access to resources than other
branches (for example, feature branches).
In some cases, it might be sufficient to only differentiate access by project
or group. The following mapping therefore includes two additional attributes
that contain the GitLab project_id and namespace_id :
google.subject=assertion.sub
attribute.project_id=assertion.project_id
attribute.namespace_id=assertion.namespace_id
Your attribute mappings can use the claims embedded in the HCP Terraform
OIDC token, including the following
terraform_organization_id : Contains the unique ID of the organization—for
example org-xxxxxxxxxxxxxxxx .
terraform_workspace_id : Contains the unique ID of the workspace —for
example ws-xxxxxxxxxxxxxxxx .
terraform_workspace_name : Contains the display name of the workspace .
sub : Contains the display name of the organization, workspace, and phase—for
example organization:example-org:workspace:example-workspace:run_phase:apply .
The following attribute mapping sets google.subject to the
terraform_workspace_id claim from the HCP Terraform OIDC token:
google.subject=assertion.terraform_workspace_id
This mapping lets you control access to Google Cloud resources by workspace.
Define an attribute condition
Attribute conditions are
CEL expressions that can check assertion attributes and target attributes. If
the attribute condition evaluates to true for a given credential, the
credential is accepted. Otherwise, the credential is rejected. You must have an
attribute mapping for all attribute condition fields.
Warning: GitHub, GitLab SaaS, and HCP Terraform use a single issuer URL across
all organizations and some of the claims embedded in OIDC tokens might not
be unique to your organization. To help protect against spoofing threats ,
you must use an attribute condition that restricts access to tokens issued by your
GitHub organization, GitLab group, or HCP Terraform organization.
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
You don't need to configure an attribute condition because Azure DevOps
uses a tenant-specific issuer URL.
Use the following attribute condition to restrict access to tokens issued by your
GitHub organization:
assertion.repository_owner==' ORGANIZATION '
Replace ORGANIZATION with the name of your GitHub
organization.
Optionally, extend the attribute condition to restrict access to a subset of workflows
or branches. For example, the following condition limits access
to workflows that use the Git branch main :
assertion.repository_owner==' ORGANIZATION ' && assertion.ref=='refs/heads/main'
Use the following attribute condition to restrict access to tokens issued by your
GitLab group
assertion.namespace_id==' GROUP_ID '
Replace GROUP_ID with the group ID that's shown on
your GitLab group's home page.
Optionally, extend the attribute condition to restrict access to a subset of
projects, branches, or environments. For example, the following condition limits access
to jobs that use the environment production :
assertion.namespace_id==' GROUP_ID ' && assertion.environment=='production'
Use the following attribute condition to restrict access to tokens issued by
your HCP Terraform organization:
assertion.terraform_organization_id==' ORGANIZATION_ID '
Replace ORGANIZATION_ID with the unique ID of your
organization—for example org-xxxxxxxxxxxxxxxx .
Optionally, extend the attribute condition to restrict access to a subset of workflows
or branches. For example, the following attribute condition limits access
to a specific workspace:
assertion.terraform_organization_id==' ORGANIZATION_ID ' && assertion.terraform_workspace_id==' WORKSPACE_ID '
Create the workload identity pool and provider
You've now collected all the information you need to create a workload identity
pool and provider:
Console gcloud
More
In the Google Cloud console, go to the New workload provider and pool
page.
Go to New workload provider and pool
Under Create an identity pool , enter the following:
Name : Name for the pool. The name is also used as the pool ID.
You can't change the pool ID later.
Description : Text that describes the purpose of the pool.
Click Continue .
Configure provider settings:
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
Select a provider : OpenID Connect (OIDC) .
Provider name : the name of the Azure DevOps project, or a
custom name.
Provider ID : the name of the Azure DevOps project, or a
custom ID. You cannot change the provider ID later.
Issuer URL : the service connection issuer that
you've looked up previously .
Audiences : Select Allowed audiences and enter the following value:
fb60f99c-7a34-4190-8149-302f77469936
This ID is the application ID of the Azure Token Exchange Endpoint.
Select a provider : OpenID Connect (OIDC) .
Provider name : Name for the provider.
Provider ID : ID for the provider. You cannot change the provider ID later.
Issuer URL : https://token.actions.githubusercontent.com/
Audiences : Default audience
Select a provider : OpenID Connect (OIDC) .
Provider name : Name for the provider.
Provider ID : ID for the provider. You cannot change the provider ID later.
Issuer URL : https://gitlab.com
Audiences : Default audience
Select a provider : OpenID Connect (OIDC) .
Provider name : Name for the provider.
Provider ID : ID for the provider. You cannot change the provider ID later.
Issuer URL : https://app.terraform.io
Audiences : Default audience
Click Continue .
Under Configure provider attributes , add
the attribute mappings that you've identified previously .
Under Attribute conditions , enter the attribute condition that you've identified previously .
Click Save to create the workload identity pool and provider.
Create a new workload identity pool:
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following values:
POOL_ID : the unique ID for the pool
DISPLAY_NAME : the name of the pool
DESCRIPTION : the description of the pool. This description
appears when granting access to pool identities
Add a workload identity pool provider:
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
gcloud iam workload-identity-pools providers create-oidc PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri=" ISSUER " \
--allowed-audiences="api://AzureADTokenExchange" \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following values:
PROVIDER_ID : the name of the Azure DevOps
project, or a custom ID for the provider.
POOL_ID : the ID of the pool
ISSUER : the service connection issuer that
you've looked up previously .
MAPPINGS : a comma-separated list of
attribute mappings that you've identified previously
CONDITIONS : the attribute condition that you identified previously
gcloud iam workload-identity-pools providers create-oidc PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri="https://token.actions.githubusercontent.com/" \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following values:
PROVIDER_ID : the unique ID for the provider
POOL_ID : the ID of the pool
MAPPINGS : a comma-separated list of
attribute mappings that you've identified previously
CONDITIONS : the attribute condition that you identified previously
gcloud iam workload-identity-pools providers create-oidc PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri="https://gitlab.com" \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following values:
PROVIDER_ID : the unique ID for the provider
POOL_ID : the ID of the pool
MAPPINGS : a comma-separated list of
attribute mappings that you've identified previously
CONDITIONS : the attribute condition that you identified previously
gcloud iam workload-identity-pools providers create-oidc PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri="https://app.terraform.io" \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following values:
PROVIDER_ID : the unique ID for the provider.
POOL_ID : the ID of the pool.
MAPPINGS : a comma-separated list of
attribute mappings that you've identified previously .
CONDITIONS : the attribute condition that you've identified previously .
Note: The prefix gcp- is reserved and can't be used in a pool or provider ID.
Update attribute condition on a workload identity provider
This section describes how you can update the attribute condition on an existing
workload identity pool provider to restrict access to tokens issued by your
GitHub organization, GitLab group, or HCP Terraform organization.
To find the recommended attribute condition for your pipeline, see Define an attribute condition .
Console gcloud
More
In the Google Cloud console, go to the Workload Identity Pools
page.
Go to Workload Identity Pools
Find the workload identity pool that contains the provider, and then click the
arrow_right Expand node icon for the
pool.
Find the workload identity pool provider that you want to edit and click
edit Edit .
In Attribute conditions , enter the attribute condition that you've identified previously .
To update the workload identity pool and provider, click Save .
To update the workload identity pool provider, run the following command:
gcloud iam workload-identity-pools providers update-oidc PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--attribute-condition=" CONDITIONS "
Replace the following values:
PROVIDER_ID : the unique ID for the provider
POOL_ID : the ID of the pool
CONDITIONS : the attribute condition that you've identified previously
Authenticate a deployment pipeline
You must perform these steps for each GitHub Actions workflow or Terraform
Cloud workspace.
Allow your external workload to access Google Cloud resources
To provide your workload with access to Google Cloud resources, we
recommend that you grant direct resource access to the principal. In this case,
the principal is the federated user. Some Google Cloud products have
Google Cloud API limitations .
If your workload calls an API endpoint that has a limitation, you can instead
use service account impersonation. In this case, the principal is the
Google Cloud service account, which acts as the identity. You grant access
to the service account on the resource.
Direct resource access Service account impersonation
More
You can grant access to a federated identity directly on resources by using
the Google Cloud console or the gcloud CLI.
Console gcloud
More
To use the Google Cloud console to grant IAM roles
directly on a resource, you must go to the resource's page, and then
grant the role. The following example shows you how to go
to the Cloud Storage page and grant the role Storage Object Viewer
( roles/storage.objectViewer ) to a federated identity directly on a
Cloud Storage bucket.
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket for which you
want to grant the role.
Select the Permissions tab near the top of the page.
Click the add_box
Grant access button.
The Add principals dialog appears.
In the New principals field, enter one or more identities
that need access to your bucket.
By subject By group By attribute
More
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT
Replace the following:
PROJECT_NUMBER : the project
number
POOL_ID : the workload
pool ID
SUBJECT : the individual
subject mapped from your IdP—for example,
administrator@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
GROUP : the group
mapped from your IdP—for example:
administrator-group@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
ATTRIBUTE_NAME : one of the
attributes that was mapped from your IdP
ATTRIBUTE_VALUE : the value
of the attribute
Select a role (or roles) from the Select a role drop-down menu.
The roles you select appear in the pane with a short description of
the permissions they grant.
Click Save .
To use the gcloud CLI to grant IAM roles on a
resource in a project, do the following:
Obtain the project number of the project in which the resource
is defined.
gcloud projects describe $(gcloud config get-value core/project) --format=value\(projectNumber\)
Grant access to the resource.
To use the gcloud CLI to grant the role Storage Object Viewer
( roles/storage.objectViewer ) to external identities that meet certain criteria,
run the following command.
By subject By group By attribute
More
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT "
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP "
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE "
Replace the following:
BUCKET_ID :
the bucket on which to grant access
PROJECT_NUMBER : the project number .
of the project that contains the workload identity pool
POOL_ID : the pool ID of the workload identity pool
SUBJECT : the expected value for the attribute that
you've mapped
to google.subject
GROUP : the expected value for the attribute that
you've mapped
to google.groups
ATTRIBUTE_NAME : the name of a custom attribute in
your attribute mapping
ATTRIBUTE_VALUE : the value of the custom attribute in your attribute mapping
You can grant roles on any Google Cloud resource that supports
IAM allow policies.
Note: You must use the project number, not the project ID, in the
member identifier.
To create a service account for the external workload, do the following:
Enable the IAM, Security Token Service, and Service Account Credentials APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account
that represents the workload. We recommend that you use a dedicated service account for each workload .
The service account doesn't need to be in the same project as the
workload identity pool, but you must refer to the project that
contains the service account.
Grant the service account access
to resources that you want external identities to access.
To let the federated identity impersonate the service account, do the
following:
Console gcloud
More
To use the Google Cloud console to grant IAM roles
to a federated identity with service account, do the following:
Service Account in the same project Service account in a different project
More
To grant access using service account impersonation for a
service account in the same project, do the following:
Go to the Workload Identity Pools page.
Go to Workload Identity Pools
Select Grant access .
In the Grant access to service account dialog, select
Grant access using Service Account impersonation .
In the Service accounts list, select the
service account for the external identities to impersonate,
and do the following:
To choose which identities in the pool can impersonate the
service account, perform one of the following actions:
To allow only specific identities of the workload
identity pool to impersonate the service account, select
Only identities matching the filter .
In the Attribute name list, select the attribute
that you want to filter on.
In the Attribute value field, enter the expected
value of the attribute; for example, if you use an
attribute mapping google.subject=assertion.sub , set
Attribute name to subject and Attribute value
to the value of the sub claim in tokens that are
issued by your external identity provider.
To save the configuration, click Save and then
Dismiss .
Note: Service accounts from different projects won't appear in the
"CONNECTED SERVICE ACCOUNTS" section of your Workload Identity Pool .
To grant access using service account impersonation for a
service account in a different project, do the following:
Go to the Service Accounts page.
Go to Service Accounts
Select the service account that you want to impersonate.
Click Manage access .
Click Add principal .
In the New principal field, enter one of the following
principal identifiers
for the identities in your pool that will impersonate the
service account.
By subject By group By attribute By pool
More
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT
Replace the following:
PROJECT_NUMBER : the project
number
POOL_ID : the workload
pool ID
SUBJECT : the individual
subject mapped from your IdP—for example,
administrator@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
GROUP : the group
mapped from your IdP—for example:
administrator-group@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
ATTRIBUTE_NAME : one of the
attributes that was mapped from your IdP
ATTRIBUTE_VALUE : the value
of the attribute
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
In Select a role , select the Workload Identity User
role ( roles/iam.workloadIdentityUser ).
To save the configuration, click Save .
To grant the Workload Identity User role ( roles/iam.workloadIdentityUser )
to a federated principal or principal set, run the following
command. To learn more about Workload Identity Federation principal
identifiers, see Principal types .
By subject By group By attribute
More
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT "
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP "
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE "
Replace the following:
SERVICE_ACCOUNT_EMAIL :
the email address of the service account
PROJECT_NUMBER : the project number .
of the project that contains the workload identity pool
POOL_ID : the pool ID of the workload identity pool
SUBJECT : the expected value for the attribute that
you've mapped
to google.subject
GROUP : the expected value for the attribute that
you've mapped
to google.groups
ATTRIBUTE_NAME : the name of a custom attribute in
your attribute mapping
ATTRIBUTE_VALUE : the value of the custom attribute in your attribute mapping
Note: You must use the project number, not the project ID, in the
member identifier.
Note: Direct resource access isn't supported for HCP Terraform. If you use HCP
Terraform, you must use service account impersonation.
Configure the deployment pipeline
This section describes how to use Workload Identity Federation in your
deployment pipeline. The instructions in this section assume that your workloads
use service account impersonation to access Google Cloud
resources.
Azure DevOps GitHub Actions GitLab SaaS HCP Terraform
More
Edit your azure-pipelines.yml file and add the following to your
job configuration:
variables:
- name: Azure.WorkloadIdentity.Connection
value: CONNECTION
- name: GoogleCloud.WorkloadIdentity.ProjectNumber
value: PROJECT_NUMBER
- name: GoogleCloud.WorkloadIdentity.Pool
value: POOL_ID
- name: GoogleCloud.WorkloadIdentity.Provider
value: PROVIDER_ID
- name: GoogleCloud.WorkloadIdentity.ServiceAccount
value: SERVICE_ACCOUNT_EMAIL
- name: GOOGLE_APPLICATION_CREDENTIALS
value: $(Pipeline.Workspace)/.workload_identity.wlconfig
steps:
- task: AzureCLI@2
inputs:
connectedServiceNameARM: $(Azure.WorkloadIdentity.Connection)
addSpnToEnvironment: true
scriptType: 'bash'
scriptLocation: 'inlineScript'
inlineScript: |
echo $idToken > $(Pipeline.Workspace)/.workload_identity.jwt
cat << EOF > $GOOGLE_APPLICATION_CREDENTIALS
{
"type": "external_account",
"audience": "//iam.googleapis.com/projects/$(GoogleCloud.WorkloadIdentity.ProjectNumber)/locations/global/workloadIdentityPools/$(GoogleCloud.WorkloadIdentity.Pool)/providers/$(GoogleCloud.WorkloadIdentity.Provider)",
"subject_token_type": "urn:ietf:params:oauth:token-type:jwt",
"token_url": "https://sts. REGION .rep.googleapis.com/v1/token",
"credential_source": {
"file": "$(Pipeline.Workspace)/.workload_identity.jwt"
},
"service_account_impersonation_url": "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/$(GoogleCloud.WorkloadIdentity.ServiceAccount):generateAccessToken"
}
EOF
Replace the following values:
CONNECTION : The name of your service connection.
PROJECT_NUMBER : The project number of the project
that contains the workload identity pool.
POOL_ID : The ID of the workload identity pool.
PROVIDER_ID : The ID of the workload identity
pool provider.
SERVICE_ACCOUNT_EMAIL : The email address of the
service account, if you use service account impersonation. If you use
direct resource access, omit
GoogleCloud.WorkloadIdentity.ServiceAccount and
service_account_impersonation_url .
REGION : A region for
regional STS endpoints ,
if they are available. If regional endpoints aren't available, you can
use https://sts.googleapis.com/v1/token.
The configuration does the following:
Uses the AzureCLI task
to obtain an ID token for the service connection, and makes it available
in a variable named idToken .
Saves the ID token to a temporary file named .workload_identity.jwt .
Creates a credential configuration file that instructs client libraries
to read the ID token from .workload_identity.jwt and uses it to impersonate
a service account.
Sets the environment variable GOOGLE_APPLICATION_CREDENTIALS to point
to the credential configuration file.
The google-github-actions/auth
action lets you automatically generate a credential configuration file
during workflow execution. Client libraries and tools such as terraform
can then use this credential configuration file to automatically obtain
Google credentials.
Edit your GitHub Actions YAML file and add the following:
Allow the job to fetch a GitHub ID token by adding the following
configuration:
permissions:
id-token: write
contents: read
Add a step to create a credentials configuration file:
- id: 'auth'
name: 'Authenticate to Google Cloud'
uses: 'google-github-actions/auth@v1'
with:
create_credentials_file: true
workload_identity_provider: 'projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID '
service_account: ' SERVICE_ACCOUNT_EMAIL '
Replace the following:
PROJECT_NUMBER : The project number of the
project that contains the workload identity pool.
POOL_ID : The ID of the workload identity pool.
PROVIDER_ID : The ID of the workload identity
pool provider.
SERVICE_ACCOUNT_EMAIL : The email address of
the service account, if you use service account impersonation. If you
use direct resource access, omit service_account .
The following example configures the GitHub Action:
jobs:
build:
# Allow the job to fetch a GitHub ID token
permissions:
id-token: write
contents: read
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v3
- id: 'auth'
name: 'Authenticate to Google Cloud'
uses: 'google-github-actions/auth@v1'
with:
create_credentials_file: true
workload_identity_provider: 'projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID '
service_account: ' SERVICE_ACCOUNT_EMAIL '
For further details on using the google-github-actions/auth action,
see Setting up Workload Identity Federation .
Edit your .gitlab-ci.yml file and add the following to the job
configuration:
job:
variables:
WORKLOAD_IDENTITY_PROJECT_NUMBER: PROJECT_NUMBER
WORKLOAD_IDENTITY_POOL: POOL_ID
WORKLOAD_IDENTITY_PROVIDER: PROVIDER_ID
SERVICE_ACCOUNT: SERVICE_ACCOUNT_EMAIL
GOOGLE_APPLICATION_CREDENTIALS: $CI_BUILDS_DIR/.workload_identity.wlconfig
id_tokens:
WORKLOAD_IDENTITY_TOKEN:
aud: https://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID
script:
- |-
echo $WORKLOAD_IDENTITY_TOKEN > $CI_BUILDS_DIR/.workload_identity.jwt
cat << EOF > $GOOGLE_APPLICATION_CREDENTIALS
{
"type": "external_account",
"audience": "//iam.googleapis.com/projects/$WORKLOAD_IDENTITY_PROJECT_NUMBER/locations/global/workloadIdentityPools/$WORKLOAD_IDENTITY_POOL/providers/$WORKLOAD_IDENTITY_PROVIDER",
"subject_token_type": "urn:ietf:params:oauth:token-type:jwt",
"token_url": "https://sts. REGION .rep.googleapis.com/v1/token",
"credential_source": {
"file": "$CI_BUILDS_DIR/.workload_identity.jwt"
},
"service_account_impersonation_url": "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/$SERVICE_ACCOUNT:generateAccessToken"
}
EOF
Replace the following values:
PROJECT_NUMBER : The project number of the
project that contains the workload identity pool.
POOL_ID : The ID of the workload identity pool.
PROVIDER_ID : The ID of the workload identity
pool provider.
SERVICE_ACCOUNT_EMAIL : The email address of the
service account, if you use service account impersonation. If you
use direct resource access, omit SERVICE_ACCOUNT
and service_account_impersonation_url .
REGION : A region for
regional STS endpoints ,
if they are available. If regional endpoints aren't available, you can
use https://sts.googleapis.com/v1/token.
The configuration does the following:
Instructs GitLab to issue an ID token, and makes it available in the
environment variable named WORKLOAD_IDENTITY_TOKEN . The ID token
uses your workload identity pool provider as audience.
Saves the ID token to a temporary file named .workload_identity.jwt .
Creates a credential configuration file that instructs client libraries
to read the ID token from .workload_identity.jwt and uses it to
impersonate a service account.
Sets the environment variable GOOGLE_APPLICATION_CREDENTIALS to point
to the credential configuration file.
Configure your HCP Terraform workspace so that it uses
Workload Identity Federation to authenticate to Google Cloud using
service account impersonation:
In HCP Terraform, open your workspace and go to Variables .
Add the following variables:
Variable category
Key
Value
Environment variable
TFC_GCP_PROVIDER_AUTH
true
Environment variable
TFC_GCP_RUN_SERVICE_ACCOUNT_EMAIL
The email address of the service account, if you use service
account impersonation—for example,
terraform@my-project-123.iam.gserviceaccount.com .
Environment variable
TFC_GCP_PROJECT_NUMBER
The project number of the project that contains the workload identity pool
Environment variable
TFC_GCP_WORKLOAD_POOL_ID
The ID of the workload identity pool
Environment variable
TFC_GCP_WORKLOAD_PROVIDER_ID
The ID of the workload identity pool provider
Optionally, you can add additional environment variables to let HCP
Terraform use different service accounts for the plan and apply
phases. For more information about using environment variables in
Terraform configurations, see
Optional Environment Variables .
In the list of variables, verify that Category is set to env for
the five variables that you added in the previous step.
Verify that your Terraform configuration uses version 4.48.0 or newer
of the Google Cloud provider, and update it if necessary, as follows:
terraform {
required_providers {
google = {
source = "hashicorp/google"
version = "~> 4.48.0"
}
}
}
Submit the changes to your source code repository.
What's next
Read more about Workload Identity Federation .
Learn about best practices for using Workload Identity Federation in deployment pipelines .
See how you can manage workload identity pools and providers .
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
