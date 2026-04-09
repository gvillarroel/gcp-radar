---
title: "Download credential configuration and grant access \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-download-cred-and-grant-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-download-cred-and-grant-access
  title: "Download credential configuration and grant access \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Download credential configuration and grant access | Identity and Access Management (IAM) | Google Cloud Documentation
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
Allow your external workload to access Google Cloud resources
Download the configuration
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Download credential configuration and grant access
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Allow your external workload to access Google Cloud resources
Download the configuration
This page describes how to configure your workloads to access Google Cloud
resources by using Workload Identity Federation and either direct resource
access or service account impersonation .
You can find end-to-end, use case-specific instructions in configuration guides
for AWS and Azure ,
Active Directory ,
GitHub, GitLab, and other deployment pipelines ,
and Kubernetes .
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
Download the configuration
To let your workload access client libraries, you must first download and
configure application default credentials (ADC)
by doing the following:
In the Google Cloud console, go to the Workload Identity Pools page.
Go to Workload Identity Pools
In the table, select your pool to go the pool's detail page.
Click Grant access .
Select Grant access using federated identities (Recommended) .
To download the Application Default Credential (ADC) so that
your workload can access client libraries, do the following:
Click Download config .
In the Configure your application dialog, do the following:
In the Provider drop-down list, select your
provider.
In OIDC token path or SAML assertion
path , enter the path where the token or assertion is
located.
In the Format type drop-down list, select the
format.
Click Download configuration , and note the path
where you saved the file.
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
