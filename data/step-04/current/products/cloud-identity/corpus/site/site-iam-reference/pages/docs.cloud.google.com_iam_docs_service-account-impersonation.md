---
title: "Service account impersonation \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-account-impersonation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-account-impersonation
  title: "Service account impersonation \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Service account impersonation | Identity and Access Management (IAM) | Google Cloud Documentation
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
How service account impersonation works Authentication without impersonation
Required permissions
Use cases for service account impersonation Grant temporary elevated access
Test permissions
Develop applications locally
Authenticate external applications
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Service account impersonation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How service account impersonation works Authentication without impersonation
Required permissions
Use cases for service account impersonation Grant temporary elevated access
Test permissions
Develop applications locally
Authenticate external applications
What's next
When an authenticated principal, such as a user or another service account, authenticates as a
service account to gain the service account's permissions, it's called impersonating the
service account. Impersonating a service account lets an authenticated principal access whatever
the service account can access. Only authenticated principals with the appropriate permissions can
impersonate service accounts.
Impersonation is useful when you want to change a user's permissions without changing your
Identity and Access Management (IAM) policies. For example, you can use impersonation to temporarily grant a
user elevated access, or to test whether a specific set of permissions is sufficient for a task.
You can also use impersonation to locally develop applications that can only run as a service
account, or to authenticate applications that run outside of Google Cloud.
Google Cloud service account impersonation is similar to Amazon Web Services
(AWS) Security Token Service API methods like AssumeRole .
How service account impersonation works
Service account impersonation always involves two identities: an authenticated
principal, and the service account that the principal impersonates. To
impersonate the service account, the authenticated principal gets a token for
the service account, then uses that token to authenticate as the service
account.
There are multiple ways to impersonate a service account:
Set the --impersonate-service-account flag or the
impersonate-service-account property when running a
Google Cloud CLI command. When you run a gcloud CLI command with
this setting, gcloud CLI creates short-lived
credentials for the service account, then runs the command with those
credentials.
You can also use the --impersonate-service-account flag when setting up
your Application Default Credentials file . This setup
enables client libraries that support impersonation to automatically
impersonate the service account.
Create short-lived credentials using the
Service Account Credentials API, then use those credentials to
authenticate an API request.
Short-lived credentials have a limited lifetime, with durations of just a
few hours or shorter, and are not automatically refreshed. They create less
risk than long-lived credentials, such as service account keys.
Use a credential configuration file to configure an
external application to impersonate a service account. This option is only
available for applications that use Workload Identity Federation .
When an application uses a credential configuration file to access
Google Cloud, it first uses its environment-specific credentials to
get a short-lived credential for a designated service account. Then, it
uses that short-lived credential to authenticate to Google Cloud.
If a principal accesses resources while impersonating a service account, most
audit logs include both their identity and the identity of the service account
they're impersonating. For more information, see Interpreting audit
logs .
When you use the Google Cloud console, you always authenticate with your user
credentials; you can't impersonate a service account to access resources in the
Google Cloud console.
Authentication without impersonation
There are several ways for a workload or user to authenticate as a service
account without impersonating the service account:
A workload uses an attached service account to
authenticate to Google APIs. In this case, the attached service account acts
as the workload's identity, and is the only authenticated identity involved in
the request.
To learn about how workloads authenticate to Google Cloud, see Identities
for workloads .
A principal uses a service account key to authenticate as a service account.
Using a service account key to authenticate as a service account only involves
one authenticated identity: the service account's. Because there is only one
identity involved, using a key isn't service account impersonation.
Note:
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
In these cases, the audit logs record only the identity of the service account.
They don't record any other identities—for example, the identities of the
users who executed code on the workload, or the identities of the people who
used the service account key to authenticate. As a result, using service account
keys or giving developers permission to execute code on privileged
resources—for example, an SSH session to a VM instance—can
create privilege-escalation and non-repudiation risks.
Required permissions
To impersonate a service account, you need the
iam.serviceAccounts.getAccessToken permission. This permission is in roles
like the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
For more information about roles required for impersonation, see
Roles for service account authentication .
Use cases for service account impersonation
Service account impersonation is useful when you need to do tasks like the
following:
Grant a user temporary elevated access
Test whether a specific set of permissions is sufficient for a task
Locally develop applications that can only run as a service account
Authenticate external applications
Grant temporary elevated access
In some cases, you might want to let a user access specific resources
temporarily. For example, you might want to give someone additional access
so that they can resolve an incident, or let someone access sensitive
data for a limited time after they've logged a justification.
Service account impersonation is one of the ways that you can give users this
temporary elevated access. To use a service account for temporary elevated
access, you first grant it the IAM roles that you want to
temporarily give to users. Then, you let users impersonate the service account,
either by giving them permission to impersonate the service account or by using
a token broker to issue a short-lived credential for the service account.
To learn more about methods for giving users temporary elevated access, see
Temporary elevated access overview .
Test permissions
In some cases, you might want to check whether a specific set of permissions is
sufficient for a task. For example, you might want to confirm that a service
account can still run an application if you remove certain excess permissions.
Or, you might be helping a user to troubleshoot a task and want to verify that
they can run a certain command with their current IAM roles.
You can use service account impersonation to test a specific set of permissions.
First, create a service account and grant it one or more IAM
roles with the permissions that you want to test. Then, impersonate the service
account and attempt the task. This method lets you test permissions without
needing to create test user accounts or modify your own IAM
permissions.
To learn how to impersonate service accounts, see Use service account
impersonation .
Develop applications locally
When developing applications locally, you can typically authenticate using your
user credentials . However, in some situations, that
might not be possible—for example, if you want to authenticate to a
service that requires a token with a custom audience, which users typically
can't configure. In these cases, you need to authenticate as a service account
instead of authenticating with your user credentials.
For these situations, we recommend using service account impersonation. Using
service account impersonation lets you avoid using service account
keys , which create additional security risk.
To learn how to impersonate service accounts to develop applications, see
Service account impersonation .
Authenticate external applications
To access Google Cloud resources, applications running outside of
Google Cloud need to authenticate to Google Cloud. One way to
authenticate these applications is to use service account impersonation.
To let your application impersonate a service account, you first need to set up
Workload Identity Federation , which provides an
authenticated identity for your application. Then, you can use a credential
configuration file to configure your application to
impersonate a service account.
Although it's possible to use service account keys to authenticate external
applications, we strongly recommend against it. Service account keys
create additional security risk, and should be avoided when possible.
What's next
Find out how to use service account impersonation .
Learn more about temporary elevated access .
Create short-lived credentials to impersonate
a service account.
Get best practices for working with service accounts .
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
