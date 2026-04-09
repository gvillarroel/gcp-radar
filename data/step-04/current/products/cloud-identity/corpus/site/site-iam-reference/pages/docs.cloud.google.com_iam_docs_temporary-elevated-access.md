---
title: "Temporary elevated access overview \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/temporary-elevated-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/temporary-elevated-access
  title: "Temporary elevated access overview \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Temporary elevated access overview | Identity and Access Management (IAM) | Google Cloud Documentation
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
Privileged Access Manager
Google groups
IAM Conditions
Just-in-time privileged access
Service account impersonation
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Temporary elevated access overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Privileged Access Manager
Google groups
IAM Conditions
Just-in-time privileged access
Service account impersonation
What's next
One way to protect sensitive resources is to limit access to them. However,
limiting access to sensitive resources also creates friction for anyone who
occasionally needs to access those resources. For example, a user might need
break-glass, or emergency, access to sensitive resources to resolve an incident.
In these situations, we recommend giving the user permission to access the
resource temporarily. We also recommend that, to improve auditing, you record
the user's justification for accessing the resource.
In Google Cloud, there are several ways that you can manage this kind of
temporary elevated access.
Privileged Access Manager
You can use Privileged Access Manager (PAM) to manage just-in-time temporary privilege
elevation for select principals, and to view audit logs afterwards to find out
who had access to what and when.
You might want to provide temporary privilege elevation through
Privileged Access Manager in the following situations:
Grant emergency access : Allow select emergency responders to perform critical
tasks without having to wait for approval. You can mandate justifications for
additional context on why the emergency access is needed.
Control access to sensitive resources : Tightly control access to sensitive
resources, requiring approvals and business justifications. Privileged Access Manager
can also be used to audit how this access was used—for example, when
granted roles were active for a user, which resources were accessible during
that time, the justification for access, and who approved it.
For example, you can use Privileged Access Manager to do the following:
Give developers temporary access to production environments for
troubleshooting or deployments.
Give support engineers access to sensitive customer data for specific
tasks.
Give database administrators elevated privileges for maintenance or
configuration changes.
Implement granular least privilege : Assigning administrative roles or
broad access to all users can increase the attack surface. To prevent this,
administrators can assign least privilege permanent roles and use
Privileged Access Manager to provide temporary, time-bound elevated access for
specific tasks when needed. Administrators can create
entitlements with tag-based conditions and enforce requesters to create grant
requests with customized scope and withdraw
grants after the task is completed. This significantly reduces opportunities
for misuse and reinforces the principle of "just-in-time" access.
Automate privileged access approvals : To enhance efficiency, you can
configure service accounts as approvers within
your DevOps pipelines. These accounts can automate programmatic approvals by
validating tickets directly from ITSM systems, thereby eliminating slow manual
checks.
Help secure service accounts : Instead of permanently granting roles to
service accounts, allow service accounts to self-elevate and assume roles only
when needed for automated tasks.
Mitigate insider threats and accidental misuse : With multi-party approvals,
you can add two levels of approvals in decision making. This reduces the
risk associated with a single administrator or a compromised approver account
approving a malicious access request.
Manage access for contractors and extended workforce : Grant contractors or
members of the extended workforce temporary, time-bound access to resources,
with approvals and justifications required.
For more information on setting up Privileged Access Manager, see
Privileged Access Manager overview .
For more information on requesting temporary elevation, see
Request temporary elevated access .
Google groups
One way to manage temporary elevated access is to grant a Google group access
to sensitive resources, then add and remove users from that group to control
their access.
To set up a Google group for temporary elevated access, first create a
group , then grant it the roles that you want to temporarily give
to users. If you use deny policies , also consider making the
group exempt from any relevant deny rules to
avoid unexpected denials.
After you set up your group, you can add and remove users to modify their
access. If you use the Google Groups API, you can temporarily add users to a
group by using membership expiration .
If you want to record the user's justifications for accessing sensitive
resources, you must define your own operational processes and tooling.
For example, to manage emergency access to Compute Engine resources, you could
create a group, emergency-compute-access@example.com , and grant it the Compute
Admin role ( roles/compute.admin ). If a user needs emergency administrative
access to compute resources, you can add them to the
emergency-compute-access@example.com group. After the emergency is resolved,
you can remove them from the group.
IAM Conditions
You can use IAM Conditions to grant users expiring access to
Google Cloud resources. For more information, see Configure temporary
access .
If you want to record the user's justifications for accessing sensitive
resources, you must define your own operational processes and tooling.
Expired role bindings aren't automatically removed from your allow policies.
To ensure that your allow policies don't exceed the maximum size for allow
policies, we recommend periodically removing expired role bindings.
Deny policies don't support time-based conditions. As a result, you can't use
conditions in deny policies to temporarily exempt a user from a deny rule.
Just-in-time privileged access
Just-In-Time Access is an open source application that uses IAM
Conditions to grant users just-in-time privileged access to Google Cloud
resources. This application is designed to run on
App Engine or Cloud Run.
This application has the following benefits over manually adding conditional
role bindings:
Users can search for roles that they can activate with Just-In-Time Access.
Users are required to provide justifications before getting access.
The application replaces the existing conditional binding instead of creating
new bindings, which helps maintain your IAM allow policy size.
For more information about Just-In-Time Access, see Manage just-in-time
privileged access to projects .
Note: The Just-In-Time Access application can't give a user access if they've
been explicitly denied .
Service account impersonation
When an authenticated principal, such as a user or another service account, authenticates as a
service account to gain the service account's permissions, it's called impersonating the
service account. Impersonating a service account lets an authenticated principal access whatever
the service account can access. Only authenticated principals with the appropriate permissions can
impersonate service accounts.
To set up a service account for temporary elevated access, create the service
account , then grant it the roles that you want to
temporarily give to a user. If you use deny policies , also
consider adding the service account exempt from any relevant deny
rules to avoid unexpected denials.
After you set up the service account, you can give users temporary elevated
access by letting them impersonate the service
account . There are several ways you can let users
impersonate service accounts:
Grant users a role that lets them create short-lived credentials
for the service account. Users can then use the short-lived
credentials to impersonate the service account.
Grant the Service Account OpenID Connect Identity Token Creator
role
( roles/iam.serviceAccountOpenIdTokenCreator ) to let the user create
short-lived OpenID Connect (OIDC) ID tokens for the service account.
Grant the Service Account Token Creator
role
( roles/iam.serviceAccountTokenCreator ) to let the user create the
following types of service account credentials:
OAuth 2.0 access tokens, which you can use to authenticate with Google
APIs
OIDC ID tokens
Signed JSON Web Tokens (JWTs) and binary blobs
If you grant a user one of these roles, they can impersonate the service
account at any time to elevate their own access. However, they're less
likely to access or modify sensitive resources unintentionally.
To learn how to impersonate service accounts, see Use service account
impersonation .
Create a token broker service that gives users short-lived
credentials for the service account after they
authenticate and provide a justification. Users can then use the short-lived
credentials to impersonate the service account.
With this method, you can decide when to let users impersonate the service
account.
To learn how to generate short-lived credentials, see Create short-lived
credentials for a service account .
To learn more about service account impersonation, see Service account
impersonation .
What's next
Set up Privileged Access Manager for temporary elevated access .
Use IAM Conditions to grant temporary access
to a principal.
Deploy the Just-In-Time Access application .
Manually create short-lived credentials to
impersonate a service account.
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
