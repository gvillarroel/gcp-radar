---
title: "Review IAM allow policy history \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/review-iam-policy-history
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/review-iam-policy-history
  title: "Review IAM allow policy history \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Review IAM allow policy history | Identity and Access Management (IAM) | Google Cloud Documentation
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
View allow policy changes with SetIamPolicy
View allow policy changes with Cloud Asset Inventory
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Review IAM allow policy history
Stay organized with collections
Save and categorize content based on your preferences.
On this page
View allow policy changes with SetIamPolicy
View allow policy changes with Cloud Asset Inventory
This page explains how to review the history of changes to your
IAM allow policies.
You can review changes to your resource's allow policies by searching your audit
logs for entries containing the SetIamPolicy method.
You can also review allow policy changes with Cloud Asset Inventory.
View allow policy changes with Set Iam Policy
You can view allow policy changes by reviewing your audit logs for entries that
contain the SetIamPolicy method. You can review your audit logs using the
Google Cloud console or the gcloud CLI.
Console gcloud
More
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
In the query editor, enter one of the following queries. These queries
search your audit logs for entries that have SetIamPolicy in the
methodName field of the protoPayload :
To get the logs of all allow policy changes made on a resource, use the
following query:
logName=" RESOURCE_TYPE / RESOURCE_ID /logs/cloudaudit.googleapis.com%2Factivity"
protoPayload.methodName:SetIamPolicy
To get the logs of allow policy changes that involve a specific user or
service account, use the following query:
logName=" RESOURCE_TYPE / RESOURCE_ID /logs/cloudaudit.googleapis.com%2Factivity"
protoPayload.methodName:SetIamPolicy
protoPayload.serviceData.policyDelta.bindingDeltas.member:" EMAIL_ADDRESS "
Provide the following values:
RESOURCE_TYPE : The resource type that you are
listing audit logs for. Use one of these values: projects ,
folders , or organizations .
RESOURCE_ID : Your Google Cloud project,
folder, or organization ID. Project IDs are alphanumeric, like
my-project . Folder and organization IDs are numeric, like
123456789012 .
EMAIL_ADDRESS : The email address of the user
or service account. For example,
example-service-account@example-project.iam.gserviceaccount.com .
To run the query, click Run query .
Use the Timeline selector to specify the appropriate time range for
the query. Alternatively, you can add a timestamp expression directly to
the query editor. For more information, see View logs by time
range .
The
gcloud logging read
command reads log entries.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The resource type that you are
listing audit logs for. Use the value projects ,
folders , or organizations .
RESOURCE_ID : Your Google Cloud
project, organization, or folder ID. Project IDs are alphanumeric strings, like
my-project . Folder and organization IDs are numeric, like 123456789012 .
TIME_PERIOD : The time period that you are listing audit logs for.
The entries returned are not older than this value. If left unspecified, the default value is
1d . For
information about time formats, see gcloud topic datetimes .
RESOURCE_TYPE_SINGULAR : The resource type that you are
listing audit logs for. Use the value project ,
folder , or organization .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud logging read \
'logName: RESOURCE_TYPE / RESOURCE_ID /logs/cloudaudit.googleapis.com%2Factivity
AND protoPayload.methodName=SetIamPolicy' \
--freshness = TIME_PERIOD \
-- RESOURCE_TYPE_SINGULAR = RESOURCE_ID
Windows (PowerShell)
gcloud logging read `
'logName: RESOURCE_TYPE / RESOURCE_ID /logs/cloudaudit.googleapis.com%2Factivity
AND protoPayload.methodName=SetIamPolicy' `
--freshness = TIME_PERIOD `
-- RESOURCE_TYPE_SINGULAR = RESOURCE_ID
Windows (cmd.exe)
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud logging read ^
'logName: RESOURCE_TYPE / RESOURCE_ID /logs/cloudaudit.googleapis.com%2Factivity
AND protoPayload.methodName=SetIamPolicy' ^
--freshness = TIME_PERIOD ^
-- RESOURCE_TYPE_SINGULAR = RESOURCE_ID
View allow policy changes with Cloud Asset Inventory
You can also view allow policy changes using
Cloud Asset Inventory in the Google Cloud console or the
gcloud CLI.
Console gcloud
More
In the Google Cloud console, go to the Asset Inventory page.
Go to Asset Inventory
Click the IAM Policy tab.
Run the following query in the Filter field:
Resource : RESOURCE_ID
Replace RESOURCE_ID with your Google Cloud
project, folder, or organization ID. Project IDs are alphanumeric, like
my-project . Folder and organization IDs are numeric, like
123456789012 .
To view the change history of the resource's allow policy, click the
resource's name, then select the Change History tab.
To compare any changes to the allow policy for the resource, select two
different timestamped records from the Select a record to compare menu.
The
gcloud asset get-history
command gets the updated history of allow policies on an asset that overlaps a
time window.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The resource type that you are
listing audit logs for. Use the value project ,
folder , or organization .
RESOURCE_ID : Your Google Cloud
project, organization, or folder ID. Project IDs are alphanumeric strings, like
my-project . Folder and organization IDs are numeric, like 123456789012 .
ASSET_NAME : A comma-separated list of formatted resource names for the resources
whose allow policy histories you want to view. For example,
//cloudresourcemanager.googleapis.com/projects/my-project . These resources can be
any of the resource types that accept allow
policies .
START_TIME : The beginning of the time range. The maximum time range is 7
days. The value must be the current time or a time no more than 35 days in the past. For
information about time formats, see gcloud topic datetimes .
END_TIME : Optional. The finishing point of the time range. The maximum
time range is 7 days. The value must be the current time or a time no more than 35 days in the
past. When not provided, the end time is assumed to be the current time. For information about time
formats, see gcloud
topic datetimes .
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud asset get-history \
-- RESOURCE_TYPE = RESOURCE_ID \
--asset-names = ASSET_NAME_1 , ASSET_NAME_2 ,... \
--content-type = iam-policy \
--start-time = START_TIME \
--end-time = END_TIME
Windows (PowerShell)
gcloud asset get-history `
-- RESOURCE_TYPE = RESOURCE_ID `
--asset-names = ASSET_NAME_1 , ASSET_NAME_2 ,... `
--content-type = iam-policy `
--start-time = START_TIME `
--end-time = END_TIME
Windows (cmd.exe)
gcloud asset get-history ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--asset-names = ASSET_NAME_1 , ASSET_NAME_2 ,... ^
--content-type = iam-policy ^
--start-time = START_TIME ^
--end-time = END_TIME
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
