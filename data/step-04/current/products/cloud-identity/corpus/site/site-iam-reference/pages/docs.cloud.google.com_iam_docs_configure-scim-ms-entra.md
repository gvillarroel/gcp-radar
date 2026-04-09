---
title: "Configure SCIM in Microsoft Entra ID \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra
  title: "Configure SCIM in Microsoft Entra ID \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure SCIM in Microsoft Entra ID | Identity and Access Management (IAM) | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
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
OIDC or SAML 2. 0
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
Configure a SCIM tenant and token in Google Cloud
Configure SCIM in Microsoft Entra ID
Update the provider to enable SCIM
Map token and SCIM attributes
Force delete a SCIM tenant
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure SCIM in Microsoft Entra ID
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Configure a SCIM tenant and token in Google Cloud
Configure SCIM in Microsoft Entra ID
Update the provider to enable SCIM
Map token and SCIM attributes
Force delete a SCIM tenant
What's next
Important: SCIM is available only for Gemini Enterprise.
This document describes how to configure a SCIM tenant in a workforce identity pool. To learn more about SCIM, see SCIM provisioning for Workforce Identity Federation .
Each workforce identity pool supports only one SCIM tenant. To configure a new SCIM tenant in a pool that already has one, you must first hard-delete the existing tenant .
The --claim-mapping flag for a SCIM tenant can contain only specific Common Expression Language (CEL) expressions. To learn which expressions are supported, see Map token and SCIM attributes .
Important: Make sure that your IdP provides unique values for the attributes that you map to google.subject and google.group using SCIM. To learn more, see SCIM support .
To configure System for Cross-domain Identity Management (SCIM) , do the following:
Configure a SCIM tenant and token in Google Cloud
Configure SCIM in Microsoft Entra ID
Configure a SCIM tenant and token in Google Cloud
To configure a SCIM tenant in Google Cloud, do the following:
Create a SCIM tenant.
gcloud iam workforce-pools providers scim-tenants create SCIM_TENANT_ID \
--workforce-pool=" WORKFORCE_POOL_ID " \
--provider=" PROVIDER_ID " \
--display-name=" SCIM_TENANT_DISPLAY_NAME " \
--description=" SCIM_TENANT_DESCRIPTION " \
--claim-mapping=" CLAIM_MAPPING " \
--location="global"
Replace the following:
SCIM_TENANT_ID : an ID for your SCIM tenant.
WORKFORCE_POOL_ID : the ID of the workforce pool that you created earlier in this document.
PROVIDER_ID : the ID of the workforce identity pool provider that you created earlier in this document.
SCIM_TENANT_DISPLAY_NAME : a display name for your SCIM tenant.
SCIM_TENANT_DESCRIPTION : a description for your SCIM tenant.
CLAIM_MAPPING : a comma-separated list of attribute mappings. For the extended list of mapping attributes, see Map token and SCIM attributes . The following mapping is recommended for Gemini Enterprise:
google.subject=user.emails[0].value.lowerAscii(),google.group=group.externalId
The google.subject attribute that you map in the SCIM tenant must uniquely refer to the same identities that are mapped in the google.subject attribute in the workforce identity pool provider by using the --attribute-mapping flag.
After the SCIM tenant is created, you can't update the claim mapping. To replace it, you can hard-delete the SCIM tenant and immediately create a new one. To learn more about considerations for using SCIM, see SCIM support .
When the command completes, do the following:
In the baseUri field in the output, save the entire URI, which is formatted as https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID . You need to provide this URI to your IdP.
Additionally, from the URI, save only the SCIM_TENANT_UID .
You need this UID to set an IAM allow policy on the SCIM tenant later in this document.
Create a SCIM token:
gcloud iam workforce-pools providers scim-tenants tokens create SCIM_TOKEN_ID \
--display-name DISPLAY_NAME \
--scim-tenant SCIM_TENANT_ID \
--workforce-pool WORKFORCE_POOL_ID \
--provider PROVIDER_ID \
--location global
Replace the following:
SCIM_TOKEN_ID : an ID for the SCIM token
DISPLAY_NAME : the display name of the SCIM token
WORKFORCE_POOL_ID : the ID of the workforce pool
SCIM_TENANT_ID : the ID of the SCIM tenant
PROVIDER_ID : the ID of the workforce identity pool provider
When the gcloud iam workforce-pools providers scim-tenants tokens create command completes, do the following:
In the output, save the value of SCIM_TOKEN in the
securityToken field. You need to provide this security
token to your IdP. The security token is displayed only in this output,
and if it's lost, you must create a new SCIM token.
To check if SCIM_TOKEN is rejected by your
organization policy, run the following command:
curl -v -H "Authorization: Bearer SCIM_TOKEN " https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID /Users
If the command fails with a permissions-related error, run gcloud organizations add-iam-policy-binding , described in a later step. If the command succeeds, you can skip that step.
Set an IAM allow policy on the SCIM tenant and token. If the curl command in a previous step failed with a permissions-related error, you must run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member=serviceAccount: SERVICE_AGENT_EMAIL \
--role roles/iam.scimSyncer
Replace the following:
ORGANIZATION_ID : the ID of the organization.
SERVICE_AGENT_EMAIL : the email address of the service agent. The email address is in the following format: o- ORGANIZATION_ID - SCIM_TENANT_UID @gcp-sa-iamscim.iam.gserviceaccount.com . SCIM_TENANT_UID is returned when you create the SCIM tenant.
When you provision groups in your IdP, make sure that each group's display name, as provided in
the displayName field, is unique within a SCIM tenant. To learn more about groups and
SCIM in Microsoft Entra ID, see
Groups .
Configure SCIM in Microsoft Entra ID
To configure SCIM in Microsoft Entra ID, do the following:
Open the Azure portal and sign in as a user that has global administrator privileges.
Select Microsoft Entra ID > Enterprise Apps .
Click New application .
In Browse Microsoft Entra App gallery , click Create your own application .
In the Create your own application panel that appears, do the following:
For What's the name of your app , enter the name of your app.
Select Integrate any other application you don't find in gallery (Non-gallery) .
To create the app, click Create .
In your application, do the following:
In the Manage section, click Provisioning .
In the right pane that appears, click New Configuration .
Under the Admin Credentials , in the Tenant URL , enter the SCIM URL that you obtained when you created the SCIM tenant, appended with ?aadOptscim062020 .
You must append ?aadOptscim062020 to the end of the base URI.
This query parameter is required by Microsoft Entra ID to ensure that SCIM PATCH
requests are compliant with SCIM RFC standards. For more details, see
Microsoft's documentation .
The final Tenant URL in Microsoft Entra ID should be in the following format:
https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID ?aadOptscim062020
Replace SCIM_TENANT_UID with the SCIM tenant UID.
In Secret token , enter the secret token that you obtained when you created the SCIM tenant.
To test the SCIM configuration with Workforce Identity Federation,
click Test connection .
To save the configuration, click Create .
In the Manage section, do the following:
Click Attribute mapping .
Click Provision Microsoft Entra ID Users .
In the Attribute Mapping page, do the following:
In the Attribute mappings table, find the row for externalId and click Edit in that row.
In the Edit attributes page, do the following:
In the Source attribute drop-down list, select objectId .
Click Ok .
To save the attribute mapping, click Save .
Update the provider to enable SCIM
To enable SCIM for a provider, do the following:
OIDC SAML
More
gcloud iam workforce-pools providers update-oidc PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= LOCATION \
--scim-usage=enabled-for-groups
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
LOCATION : the location of the workforce pool
gcloud iam workforce-pools providers update-saml PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= LOCATION \
--scim-usage=enabled-for-groups
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
LOCATION : the location of the workforce pool
Map token and SCIM attributes
You must consistently map attributes, both in the workforce identity pool provider and in the SCIM tenant that's configured for the provider. For the workforce identity pool provider, you use the
--attribute-mapping flag, and for the SCIM tenant, you use the --claim-mapping flag. The IdP attribute that is mapped to google.subject for users must uniquely refer to the same identity, whether defined in a token or SCIM mapping. To learn more about mapping attributes when you use SCIM, see the
SCIM support section.
The following table shows you how to map attributes in token claims and SCIM attributes:
Google attribute
Workforce identity pool provider mapping
SCIM tenant mapping
google.subject
assertion.oid
user.externalId
google.subject
assertion.attributes['http://schemas.microsoft.com/identity/claims/objectidentifier'][0]
user.externalId
google.subject
assertion.email
user.emails[0].value
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0]
user.emails[0].value
google.subject
assertion.email.lowerAscii()
user.emails[0].value.lowerAscii()
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii()
user.emails[0].value.lowerAscii()
google.subject
assertion.preferred_username
user.userName
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0]
user.userName
google.subject
assertion.preferred_username.lowerAscii()
user.userName.lowerAscii()
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0].lowerAscii()
user.userName.lowerAscii()
google.group make sure you update your provider with --scim-usage=enabled-for-groups
N/A
group.externalId
Force delete a SCIM tenant
To force delete a SCIM tenant, do the following:
If --scim-usage=enabled-for-groups is set for your provider, disable it from the provider configuration:
gcloud iam workforce-pools providers update-oidc
--provider= PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= global
--scim-usage=SCIM_USAGE_UNSPECIFIED
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
Delete the SCIM tenant:
gcloud iam workforce-pools providers scim-tenants delete SCIM_TENANT_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--provider= PROVIDER_ID \
--hard-delete \
--location=global
Replace the following:
SCIM_TENANT_ID : the ID of the SCIM tenant to delete
WORKFORCE_POOL_ID : the ID of the workforce pool
PROVIDER_ID : the ID of the workforce identity pool provider
To learn more about SCIM, including deleting SCIM tenants, see SCIM support .
What's next
Delete Workforce Identity Federation users and their data
Learn which Google Cloud products support Workforce Identity Federation
Set up user access to console (federated)
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
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
