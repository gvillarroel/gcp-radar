---
title: "Privileged Access Manager permissions and setup \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-permissions-and-setup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-permissions-and-setup
  title: "Privileged Access Manager permissions and setup \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Privileged Access Manager permissions and setup | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Enable Privileged Access Manager
Allow the Privileged Access Manager email address
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Privileged Access Manager permissions and setup
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Enable Privileged Access Manager
Allow the Privileged Access Manager email address
What's next
Before you can start creating, modifying, or managing Privileged Access Manager
entitlements and grants, your principals must have the appropriate permissions.
The service must also be set up at the organization, folder, or project level.
Principals requesting grants
and approving or denying the grants don't
require any Privileged Access Manager-specific permissions.
Before you begin
Ensure that you have the required Identity and Access Management (IAM) permissions to
set up and manage Privileged Access Manager permissions.
To get the permissions that
you need to work with entitlements and grants,
ask your administrator to grant you the
following IAM roles on the organization, folder, or project:
To create, update, and delete entitlements for an organization:
Privileged Access Manager Admin ( roles/privilegedaccessmanager.admin ) and Security Admin ( roles/iam.securityAdmin )
To create, update, and delete entitlements for a folder:
Privileged Access Manager Admin and Folder IAM Admin ( roles/resourcemanager.folderAdmin )
To create, update, and delete entitlements for a project:
Privileged Access Manager Admin and Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
To view entitlements and grants:
Privileged Access Manager Viewer ( roles/privilegedaccessmanager.viewer )
To view audit logs:
Logs Viewer ( roles/logs.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to work with entitlements and grants. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to work with entitlements and grants:
To enable Privileged Access Manager at an organization level:
privilegedaccessmanager.locations.checkOnboardingStatus
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
serviceusage.services.enable
To manage entitlements and grants for an organization:
resourcemanager.organizations.get
resourcemanager.organizations.setIamPolicy
privilegedaccessmanager.entitlements.create
privilegedaccessmanager.entitlements.delete
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.entitlements.setIamPolicy
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.grants.revoke
privilegedaccessmanager.operations.delete
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To view entitlements and grants for an organization:
resourcemanager.organizations.get
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To enable Privileged Access Manager at a folder level:
privilegedaccessmanager.locations.checkOnboardingStatus
resourcemanager.folders.get
resourcemanager.folders.getIamPolicy
resourcemanager.folders.setIamPolicy
serviceusage.services.enable
To manage entitlements and grants for a folder:
resourcemanager.folders.get
resourcemanager.folders.setIamPolicy
privilegedaccessmanager.entitlements.create
privilegedaccessmanager.entitlements.delete
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.entitlements.setIamPolicy
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.grants.revoke
privilegedaccessmanager.operations.delete
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To view entitlements and grants for a folder:
resourcemanager.folders.get
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To enable Privileged Access Manager at a project level:
privilegedaccessmanager.locations.checkOnboardingStatus
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
serviceusage.services.enable
To manage entitlements and grants for a project:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
privilegedaccessmanager.entitlements.create
privilegedaccessmanager.entitlements.delete
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.entitlements.setIamPolicy
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.grants.revoke
privilegedaccessmanager.operations.delete
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To view entitlements and grants for a project:
resourcemanager.projects.get
privilegedaccessmanager.entitlements.get
privilegedaccessmanager.entitlements.list
privilegedaccessmanager.grants.get
privilegedaccessmanager.grants.list
privilegedaccessmanager.operations.get
privilegedaccessmanager.operations.list
To view audit logs:
logging.logEntries.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Enable Privileged Access Manager
To enable Privileged Access Manager, you need to
grant the Privileged Access Manager Service Agent role to the
Privileged Access Manager Service Agent for your organization, folder, or project.
To grant this role to the service agent, do the following:
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project that you want to enable
Privileged Access Manager for.
Click Set up PAM to start the setup process.
To grant access to the Privileged Access Manager Service Agent role to
the Privileged Access Manager service agent
to manage privilege escalations, click Grant role .
Note: When you grant the role to the service agent for an organization or folder,
the role is granted to all the folders and projects below them in the
resource hierarchy .
Make sure the Privileged Access Manager service agent is added to the
following security controls:
Deny policies : Add the Privileged Access Manager
service agent to the
exceptionPrincipals
field of your policies.
VPC Service Controls : Add the
Privileged Access Manager service agent to the appropriate
access levels ,
or add an ingress rule
to the perimeter to allow the service agent.
Click Complete setup .
Allow the Privileged Access Manager email address
For email accounts and groups who receive Privileged Access Manager email
notifications, add pam-noreply@google.com to your allow lists so the email
isn't blocked.
What's next
Create entitlements
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
