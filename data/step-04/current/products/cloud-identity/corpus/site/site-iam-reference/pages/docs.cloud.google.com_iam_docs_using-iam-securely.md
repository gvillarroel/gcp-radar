---
title: "Use IAM securely \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/using-iam-securely
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/using-iam-securely
  title: "Use IAM securely \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use IAM securely | Identity and Access Management (IAM) | Google Cloud Documentation
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
Least privilege
Service accounts
Service account keys
Auditing
Policy management
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Use IAM securely
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Least privilege
Service accounts
Service account keys
Auditing
Policy management
This page recommends security best practices that you should keep in mind when
using IAM.
This page is designed for users who are proficient with IAM.
If you are just starting out with IAM, these instructions
will not teach you how to use it; instead, new users should start with the
IAM Quickstart .
Least privilege
❑
Basic roles include thousands of permissions across all Google Cloud services. In production
environments, do not grant basic roles unless there is no alternative. Instead, grant the most
limited predefined roles or
custom roles that meet your needs.
If you need to replace a basic role, you can use
role recommendations
to determine which roles to grant instead. You can also use the
Policy Simulator to ensure
that changing the role won't affect the principal's access.
It might be appropriate to grant basic roles when you want to grant broader
permissions for a project. For example, you can grant basic roles for use in
test or development environments.
❑
Treat each component of your application as a separate trust boundary. If you
have multiple services that require different permissions, create a separate service account
for each of the services, then grant only the required permissions to each
service account.
❑
Remember that the allow policies for child resources inherit from the allow
policies for their parent resources. For example, if the allow policy for a
project grants a user the ability to administer Compute Engine virtual machine
(VM) instances, then the user can administer any Compute Engine VM in
that project, regardless of the allow policy you set on each VM.
❑
Grant roles at the smallest scope needed. For example, if a user only needs
access to publish Pub/Sub topics, grant the Publisher role to the user for that
topic.
❑
Specify which principals can
act as service accounts .
Users who are granted the Service Account User role for a service account can
access all the resources to which the service account has access. Therefore, be
cautious when granting the Service Account User role to a user.
❑
Specify who has access to create and manage service accounts in your project.
❑
Granting the
Project IAM
Admin and Folder IAM Admin predefined roles will allow access to modify
allow policies without also allowing direct read, write, and administrative
access to all resources.
Granting the
Owner
( roles/owner ) role to a principal will allow them to access and
modify almost all resources, including modifying allow policies. This amount
of privilege is potentially risky. Grant the Owner role only when (nearly)
universal access is required.
❑
Use conditional role
bindings to let access expire automatically, and consider granting temporary elevated access.
Service accounts
❑
Adopt best practices for
working with service accounts . Ensure that service accounts have limited
privileges, and protect against potential security threats.
❑
Do not delete service accounts that are in use by running instances. This could
result in all or parts of your application to fail if you have not transitioned
to using an alternative service account first.
❑
Use the display name of a service account to keep track of what the service
account is used for and what permissions it needs.
Service account keys
❑
Avoid using service account keys if another option is
available.
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
❑
Rotate your service account keys using the
IAM service account API .
You can rotate a key by creating a new key, switching
applications to use the new key, disabling the old key, and then deleting the
old key when you are sure that it is no longer needed.
❑
Implement
processes to manage user-managed service account keys.
❑
Be careful not to confuse encryption keys with service account keys. Encryption
keys are typically used to encrypt data and service account keys are used for
secure access to Google Cloud APIs.
❑
Don't check in the service account keys into the source code or leave them in
the Downloads directory.
Auditing
❑
Use logs from Cloud Audit Logs to
regularly audit changes to your allow policy.
❑
Export audit logs to Cloud Storage
to store your logs for long periods of time.
❑
Audit who has the ability to change your allow policies on your projects.
❑
Manage access to logs using
Logging roles .
❑
Apply the same access policies to the Google Cloud resource that you use
to route logs as applied to the Logs Explorer.
❑
Use logs from Cloud Audit Logs to regularly audit access to service
account keys.
Policy management
❑
If a principal needs access to all projects in your organization, grant roles to
the principal at the
organization level .
❑
Grant roles to groups instead of individual users when possible. It
is easier to update the members of a group than to update the principals
in your allow policies.
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
