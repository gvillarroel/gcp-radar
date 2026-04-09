---
title: "Withdraw grants \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-withdraw-grants
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-withdraw-grants
  title: "Withdraw grants \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Withdraw grants | Identity and Access Management (IAM) | Google Cloud Documentation
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
Withdraw your grants
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Withdraw grants
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Withdraw your grants
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Requesters can withdraw their grant requests that are pending approval, or end
their active grants when their privileged task is complete or when the access is
no longer required.
Withdraw your grants
Console gcloud REST
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project that you want to withdraw grants
from.
Click the Grants tab, followed by the My grants tab.
This lists your grants with grant statuses and
their associated entitlement details.
In the table, click more_vert
More options for the grant that you want to withdraw, and
click Withdraw .
To confirm, click Withdraw again.
The
gcloud alpha pam grants withdraw
command withdraws a grant.
Before using any of the command data below,
make the following replacements:
ENTITLEMENT_ID : The ID of the entitlement that
the grant belongs to.
GRANT_ID : The ID of the grant you want to withdraw.
You can retrieve the ID by
viewing grants .
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
gcloud alpha pam grants withdraw \
GRANT_ID \
--entitlement = ENTITLEMENT_ID \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID
Windows (PowerShell)
gcloud alpha pam grants withdraw `
GRANT_ID `
--entitlement = ENTITLEMENT_ID `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID
Windows (cmd.exe)
gcloud alpha pam grants withdraw ^
GRANT_ID ^
--entitlement = ENTITLEMENT_ID ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID
You should receive a response similar to the following:
Parsed [grant] resource: RESOURCE_TYPE / RESOURCE_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
Grant withdrawal initiated. The operation will complete in some time.
To track its status, run:
`gcloud alpha pam operations wait RESOURCE_TYPE / RESOURCE_ID /locations/global/operations/ OPERATION_ID `
Note that the wait command requires you to have the `privilegedaccessmanager.operations.get` permission on the resource.
metadata:
apiVersion: v1
createTime: '2024-08-20T10:10:10.101010101Z'
target: RESOURCE_TYPE / RESOURCE_ID /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID
name: RESOURCE_TYPE / RESOURCE_ID /locations/global/operations/ OPERATION_ID
The Privileged Access Manager API's
withdrawGrant
method withdraws a grant.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that
the entitlement is in, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
ENTITLEMENT_ID : The ID of the entitlement that
the grant belongs to.
GRANT_ID : The ID of the grant you want to withdraw.
You can retrieve the ID by
viewing grants .
HTTP method and URL:
POST https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :withdraw
Request JSON body:
{
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :withdraw"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID :withdraw" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": " SCOPE /locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1beta.OperationMetadata",
"createTime": "2024-03-06T23:07:48.716396505Z",
"target": " SCOPE /locations/global/entitlements/ ENTITLEMENT_ID /grants/ GRANT_ID ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1beta"
},
"done": false
}
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
