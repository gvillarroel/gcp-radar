---
title: "Troubleshoot policies \_|\_ Identity and Access Management (IAM) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/troubleshoot-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/troubleshoot-policies
  title: "Troubleshoot policies \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot policies | Identity and Access Management (IAM) | Google Cloud Documentation
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
Use Policy Troubleshooter
Required roles
View all allow and deny policies that apply to a resource
Search allow policies
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Troubleshoot policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Use Policy Troubleshooter
Required roles
View all allow and deny policies that apply to a resource
Search allow policies
This page describes how to troubleshoot
Identity and Access Management (IAM) allow, deny, and principal access boundary policies.
Use Policy Troubleshooter
If you need to troubleshoot access for a specific principal, use
Policy Troubleshooter for IAM.
Policy Troubleshooter helps you understand whether a principal
can access a resource. Given a principal, a resource, and a permission,
Policy Troubleshooter examines the allow policies, deny policies,
and principal access boundary (PAB) policies that impact the principal's access.
Then, it tells you whether, based on those policies, the principal can use
the specified permission to access the resource. It also lists the relevant
policies and explains how they affect the principal's access.
To learn how to use Policy Troubleshooter to troubleshoot allow
policies, deny policies, and principal access boundary policies, see Troubleshoot
IAM permissions .
Required roles
To get the permissions that
you need to view all allow and deny policies,
ask your administrator to grant you the
Security Reviewer ( roles/iam.securityReviewer )
IAM role on the organization that contains the resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
View all allow and deny policies that apply to a resource
In Google Cloud, the following allow and deny policies affect access
to a resource:
The resource's allow policy
The resource's deny policies, if any
The allow policies of the resource's parent project, folder, and
organization, if any
The deny policies of the resource's parent project, folder, and organization,
if any
The allow and deny policies of parent projects, folders, and organizations
affect access to a resource
because of policy inheritance .
When you attach an allow or deny policy to a project, folder, or organization,
that policy also applies for all resources inside that project, folder, or
organization.
For example, if a deny policy for an organization says that a principal can't
use a specific permission, then the principal can't use that permission for any
resource within the organization. This rule applies even if the folders and
projects within that organization have more permissive deny policies, or allow
policies that give the principal the permission.
Similarly, if an allow policy for a project gives a principal a specific
permission, then the principal has that permission for any resource within the
project, provided that they aren't denied that permission.
The union of all of these policies is called the applicable policy or
effective policy for the resource.
In Google Cloud, you can get a list of all of the allow and deny policies
that affect access to a project by using the gcloud beta projects
get-ancestors-iam-policy command with the --include-deny flag. Together,
these policies make up the applicable policy for the project. You can
investigate each policy to see how it affects the principal's access.
gcloud
More
Before using any of the command data below,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
Execute the
gcloud beta projects get-ancestors-iam-policy
command:
Linux, macOS, or Cloud Shell
gcloud beta projects get-ancestors-iam-policy PROJECT_ID --include-deny --format = json
Windows (PowerShell)
gcloud beta projects get-ancestors-iam-policy PROJECT_ID --include-deny --format = json
Windows (cmd.exe)
gcloud beta projects get-ancestors-iam-policy PROJECT_ID --include-deny --format = json
The response contains the allow and deny policies for the project; any folders that are ancestors
of the project; and the organization. The following example shows allow policies for the
organization 1234567890123 and the project my-project , as well as a deny
policy for the project my-project :
[
{
"id": "1234567890123",
"policy": {
"bindings": [
{
"members": [
"group:cloud-admins@example.com"
],
"role": "roles/iam.denyAdmin"
},
{
"members": [
"user:raha@example.com"
],
"role": "roles/iam.serviceAccountAdmin"
}
],
"etag": "BwXW6Eab7TI=",
"version": 1
},
"type": "organization"
},
{
"id": "my-project",
"policy": {
"bindings": [
{
"members": [
"group:cloud-admins@example.com"
],
"role": "roles/owner"
}
],
"etag": "BwXXjOM7L6M=",
"type": "project"
}
},
{
"id": "my-project",
"policy": {
"createTime": "2022-02-14T21:46:35.865279Z",
"displayName": "My deny policy",
"etag": "MTgyMzg2ODcwNTEyMjMxMTM3Mjg=",
"kind": "DenyPolicy",
"name": "policies/cloudresourcemanager.googleapis.com%2Fprojects%2F123456789012/denypolicies/my-deny-policy",
"rules": [
{
"denyRule": {
"deniedPermissions": [
"iam.googleapis.com/serviceAccounts.create"
],
"deniedPrincipals": [
"user:raha@example.com"
]
},
"description": "Prevent service account creation"
}
],
"uid": "c83e3dc3-d8a6-6f51-4018-814e9f200b05",
"updateTime": "2022-02-14T21:46:35.865279Z"
},
"type": "project"
}
]
In this example, Raha is granted the Service Account
Admin role ( roles/iam.serviceAccountAdmin ) on the organization, but the
project has a deny policy that prevents Raha from using the
permission iam.googleapis.com/serviceAccounts.create . As a result, if
Raha tries to create a service account in the project
my-project , the request will be denied.
In some cases, you might only need to view the effective allow policy for a
resource—for example, if your organization doesn't use deny policies. In
these cases, you can use the following methods to view the effective allow
policy:
View the resource's IAM allow policy in the
Google Cloud console. The Google Cloud console automatically shows each
resource's effective policy.
To learn how to view a resource's IAM allow policy in the
Google Cloud console, see View current access .
Use the Cloud Asset API to get the resource's effective allow policy. To learn
more, see Viewing effective IAM policies .
Search allow policies
If you need to locate a specific role binding in an allow policy, you can
search the allow policy.
Cloud Asset Inventory lets you search allow policies for role bindings
that match the specified parameters. You can use a variety of search parameters,
including the following:
Resource type
Principal type
Role
Project
Folder
Organization
For more information, see Searching IAM allow policies .
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
