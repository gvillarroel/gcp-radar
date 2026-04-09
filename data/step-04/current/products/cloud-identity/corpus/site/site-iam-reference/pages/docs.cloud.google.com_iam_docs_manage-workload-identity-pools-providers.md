---
title: "Manage workload identity pools and providers \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/manage-workload-identity-pools-providers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/manage-workload-identity-pools-providers
  title: "Manage workload identity pools and providers \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage workload identity pools and providers | Identity and Access Management (IAM) | Google Cloud Documentation
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
Manage workload identity pools Create pools
List pools
Get a pool
Update a pool
Delete a pool
Undelete a pool
Manage workload identity pool providers Create a provider
List providers
Get a provider
Update a provider
Delete a provider
Undelete a provider
Manage constraints for Workload Identity Federation Restrict identity provider configuration
Restrict service account key creation
Monitor Workload Identity Federation
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Manage workload identity pools and providers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Manage workload identity pools Create pools
List pools
Get a pool
Update a pool
Delete a pool
Undelete a pool
Manage workload identity pool providers Create a provider
List providers
Get a provider
Update a provider
Delete a provider
Undelete a provider
Manage constraints for Workload Identity Federation Restrict identity provider configuration
Restrict service account key creation
Monitor Workload Identity Federation
What's next
This page explains how to manage your existing
workload identity pools and their identity
providers.
You can manage pools and providers using the Google Cloud console, the
Google Cloud CLI , or the REST API .
Before you begin
Create a workload identity pool. See one of the following pages to learn how:
Access resources from AWS
Access resources from Microsoft Azure
Access resources from an OIDC identity provider
Access resources from a SAML 2.0 identity provider
Required roles
To get the permissions that
you need to manage workload identity pools and providers,
ask your administrator to grant you the
following IAM roles on the project:
To view pools and providers:
IAM Workload Identity Pool Viewer ( roles/iam.workloadIdentityPoolViewer )
To view, create, update, and delete pools and providers:
IAM Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage workload identity pools and providers. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage workload identity pools and providers:
To view workload identity pools and providers:
iam.googleapis.com/workloadIdentityPoolProviders.get
iam.googleapis.com/workloadIdentityPoolProviders.list
iam.googleapis.com/workloadIdentityPools.get
iam.googleapis.com/workloadIdentityPools.list
To create, update, and delete pools and providers:
iam.googleapis.com/workloadIdentityPoolProviders.create
iam.googleapis.com/workloadIdentityPoolProviders.delete
iam.googleapis.com/workloadIdentityPoolProviders.undelete
iam.googleapis.com/workloadIdentityPoolProviders.update
iam.googleapis.com/workloadIdentityPools.create
iam.googleapis.com/workloadIdentityPools.delete
iam.googleapis.com/workloadIdentityPools.undelete
iam.googleapis.com/workloadIdentityPools.update
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Manage workload identity pools
This section shows you how to manage workload identity pools.
Create pools
To create workload identity pools in a project, do the following:
Note: The prefix gcp- is reserved and can't be used in a pool or provider ID.
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Execute the gcloud iam workload-identity-pools create
command.
Call projects.locations.workloadIdentityPools.create() .
List pools
To list all the workload identity pools in a project, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Execute the gcloud iam workload-identity-pools list
command.
Call projects.locations.workloadIdentityPools.list() .
Get a pool
To get details for a specific workload identity pool, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that you want to view, then click its
edit Edit icon. The
Google Cloud console shows details about the workload identity pool.
Execute the
gcloud iam workload-identity-pools describe command.
Call projects.locations.workloadIdentityPools.get() .
Update a pool
You can enable or disable a workload identity pool. You can also change its
display name or description.
To update an existing workload identity pool, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that you want to edit.
Click the workload identity pool's Display name .
To edit the workload identity pool's display name, do the following:
In the Pool details page, next to the display name, click the
edit Edit icon.
In the Edit pool display name dialog that appears, update the
display name.
Click Save .
To disable or enable the workload identity pool, click the Status
toggle, then click Disable or Enable .
To edit the description, do the following:
In Description , next to your description text, click
edit Edit .
Update the description.
Click Save .
Execute the gcloud iam workload-identity-pools update
command.
Call projects.locations.workloadIdentityPools.patch() .
Delete a pool
When you delete a workload identity pool, you also delete its workload identity
pool providers. As a result, the identities in the pool lose access to
Google Cloud resources.
Caution: Before you delete a workload identity pool, consider
disabling the pool or
disabling its identity providers . If one of your workloads
loses access to Google Cloud resources as a result, you can re-enable the
pool and its providers at any time. If your workloads don't lose access, then
it is safe to delete the pool.
You can undelete a pool for up to
30 days after deletion. After
30 days, deletion is permanent. Until a pool
is permanently deleted, you cannot reuse its name when creating a new workload
identity pool.
To delete a workload identity pool and its identity providers, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that you want to delete, then click its
edit Edit icon.
Click delete Delete pool , then click
Delete . The workload identity pool and its identity providers are
deleted.
Execute the gcloud iam workload-identity-pools delete
command.
Call projects.locations.workloadIdentityPools.delete() .
Undelete a pool
You can recover a deleted workload identity pool for up to 30 days after
deletion.
To undelete a pool, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Click the Show deleted pools and providers toggle.
Find the workload identity pool that you want to undelete, then click its
undo Restore icon.
Click Restore . The pool and its providers are restored.
Execute the
gcloud iam workload-identity-pools undelete command.
Call projects.locations.workloadIdentityPools.undelete() .
Manage workload identity pool providers
This section shows you how to manage workload identity pool providers.
Create a provider
To create a workload identity pool provider in an existing workload identity
pool, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that you want to add a provider to, then
click its edit Edit icon.
Click add_box Add provider .
Select the type of provider to create:
AWS : An Amazon Web Services (AWS) identity provider.
OpenID Connect (OIDC) : An OIDC-compatible identity provider. This
includes Microsoft Azure.
Enter a name for the provider.
The Google Cloud console uses the name to create a provider ID. To change
the provider ID, click Edit . You cannot change the provider ID later.
Complete the remaining fields for your provider:
AWS : Enter your AWS account ID.
OIDC : Enter the issuer URL. For Azure, the issuer URL uses the format
https://sts.windows.net/ AZURE_TENANT_ID . For other
providers, consult the provider's documentation.
When you are done, click Continue .
To configure the attribute mapping, click Edit mapping . Attribute
mapping lets you use information about external identities to grant access
to a subset of those identities.
AWS : This step is optional; you can use the default mapping.
For details, see Identity provider settings for AWS .
OIDC : We recommend mapping google.subject to assertion.sub . Other
mappings are optional.
For details, see Identity provider settings for Azure or
Identity provider settings for OIDC .
Optional: To provide an attribute condition, which specifies the identities
that can authenticate, click Add condition and enter a valid Common
Expression Language (CEL) expression. For details, see
Attribute conditions .
Click Save . The workload identity pool provider is created.
Execute the
gcloud iam workload-identity-pools providers create-aws
command to create an AWS provider.
Execute the
gcloud iam workload-identity-pools providers create-oidc
command to create an OIDC provider. This includes Microsoft Azure.
Call projects.locations.workloadIdentityPools.providers.create() .
List providers
To list the workload identity pool providers in a project, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
To view the providers for a workload identity pool, click the
arrow_right Expand node icon for the
pool.
Execute the
gcloud iam workload-identity-pools providers list
command.
Call projects.locations.workloadIdentityPools.providers.list() .
Get a provider
To get details for a specific workload identity pool provider, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that contains the provider, then click the
arrow_right Expand node icon for the
pool.
Find the workload identity pool provider that you want to view, then click
its edit Edit icon. The
Google Cloud console shows detailed information about the provider.
Execute the
gcloud iam workload-identity-pools providers describe
command.
Call projects.locations.workloadIdentityPools.providers.get() .
Update a provider
You can enable or disable a workload identity pool provider. You can also update
its account information and its attribute mapping, as well as its display name
and description.
To update an existing workload identity pool provider, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that contains the provider, then click the
arrow_right Expand node icon for the
pool.
Find the workload identity pool provider that you want to edit, then click
its edit Edit icon.
Edit the provider's information, then click Save .
Execute the
gcloud iam workload-identity-pools providers update-aws
command to update an AWS provider.
Execute the
gcloud iam workload-identity-pools providers update-oidc
command to update an OIDC provider. This includes Microsoft Azure.
Call projects.locations.workloadIdentityPools.providers.patch() .
Delete a provider
When you delete a workload identity pool provider, the provider's identities
lose access to Google Cloud resources.
Caution: Before you delete a workload identity pool provider, consider
disabling the provider . If one of your workloads loses
access to Google Cloud resources as a result, you can re-enable the
provider at any time. If your workloads don't lose access, then it is safe to
delete the provider.
You can undelete a provider for up to
30 days after deletion. After
30 days, deletion is permanent. Until a
provider is permanently deleted, you cannot reuse its name when creating a new
provider.
To delete a workload identity pool provider, do the following:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Find the workload identity pool that contains the provider, then click its
edit Edit icon.
In the Providers pane, find the provider that you want to delete, then
click its delete Delete icon.
Click Delete to delete the provider.
Execute the
gcloud iam workload-identity-pools providers delete
command.
Call projects.locations.workloadIdentityPools.providers.delete() .
Undelete a provider
You can recover a deleted workload identity pool provider for up to 30 days
after deletion. To undelete a provider:
Console gcloud REST
More
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
Click the Show deleted pools and providers toggle.
Find the workload identity pool that contains the provider, then click the
arrow_right Expand node icon for the
pool.
Find the provider that you want to undelete, then click its
undo Restore icon.
Click Restore . The provider is restored.
Execute the
gcloud iam workload-identity-pools providers undelete
command.
Call projects.locations.workloadIdentityPools.providers.undelete() .
Manage constraints for Workload Identity Federation
You can use organization policy constraints to
restrict how resources in your Google Cloud organization can be used.
This section describes constraints that are recommended when you use
Workload Identity Federation.
Restrict identity provider configuration
As an organization administrator, you can decide which identity providers your
organization is allowed to federate with.
To manage which identity providers are allowed, enable the
constraints/iam.workloadIdentityPoolProviders list constraint in the
organization policy for your organization. This constraint specifies the issuer
URIs of the allowed providers. You can use the
Google Cloud console or the
Google Cloud CLI to enable this constraint.
Note: This constraint only limits creating and updating identity providers. If
an identity provider was configured before you enabled the constraint, that
provider can still be used.
To only allow federation from AWS, create a single constraint with the URI
https://sts.amazonaws.com . The following example shows how to create this
constraint using the gcloud CLI:
gcloud resource-manager org-policies allow constraints/iam.workloadIdentityPoolProviders \
https://sts.amazonaws.com --organization = ORGANIZATION_NUMBER
You can also specify which AWS account IDs have access to your
Google Cloud resources. To specify the account IDs, use the
constraints/iam.workloadIdentityPoolAwsAccounts list constraint:
gcloud resource-manager org-policies allow constraints/iam.workloadIdentityPoolAwsAccounts \
ACCOUNT_ID --organization = ORGANIZATION_NUMBER
To only allow federation from one OIDC provider, create a single constraint with
the issuer_uri of the allowed provider. For example, the following only allows
federation from a specific Azure tenant:
gcloud resource-manager org-policies allow constraints/iam.workloadIdentityPoolProviders \
https://sts.windows.net/ AZURE_TENANT_ID --organization = ORGANIZATION_NUMBER
Federation from a SAML identity provider is a special case because the
public keys used to validate the assertion are provided at configuration time
instead of fetched directly from the identity provider. It is therefore
conceivable that a malicious user could try to upload a SAML metadata document
with your organization's identity provider's entity ID but a public key for
which they have access to the private key. Restricting federation by the entity
ID in this scenario gives only an illusion of security. For this reason we
strongly advise that you only allow the creation of a workload identity pool
allowing SAML federation in a Google Cloud project that your organization
centrally manages. You can then grant external identities in that workload
identity pool access to resources across your organization.
To allow federation from from SAML identity providers, create a constraint
allowing the special keyword KEY_UPLOAD .
gcloud resource-manager org-policies allow constraints/iam.workloadIdentityPoolProviders \
KEY_UPLOAD --organization = ORGANIZATION_NUMBER
You can repeat these commands to allow federation from additional providers.
To block federation from all providers:
Create a YAML file containing the following:
constraint : constraints/iam.workloadIdentityPoolProviders
listPolicy :
allValues : DENY
Pass the file to the gcloud resource-manager org-policies set-policy
command:
gcloud resource-manager org-policies set-policy FILE_NAME .yaml \
--organization = ORGANIZATION_NUMBER
Restrict service account key creation
Workload Identity Federation lets you access Google Cloud resources from
outside of Google Cloud without using a service account key. If you never
use service account keys to authenticate, you can help reduce risk by disabling
key creation.
To disable the creation of service account keys, enforce the
iam.disableServiceAccountKeyCreation boolean constraint in the organization
policy for your organization. You can also enforce the
iam.disableServiceAccountKeyUpload boolean constraint, which disables
uploading of public keys for service accounts.
Note : If your organization was created on or after May 3, 2024, these
constraints are enforced by default.
You can use the
Google Cloud console or the
gcloud CLI to enable these
constraints. For example, the following gcloud CLI commands enable
both constraints:
gcloud resource-manager org-policies enable-enforce \
constraints/iam.disableServiceAccountKeyCreation \
--organization = ORGANIZATION_NUMBER
gcloud resource-manager org-policies enable-enforce \
constraints/iam.disableServiceAccountKeyUpload \
--organization = ORGANIZATION_NUMBER
Monitor Workload Identity Federation
You can use Cloud Monitoring metrics to monitor authentication
events for your workload identity pools and providers. For a list of available
metrics, see IAM metrics .
What's next
Learn more about Workload Identity Federation .
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
