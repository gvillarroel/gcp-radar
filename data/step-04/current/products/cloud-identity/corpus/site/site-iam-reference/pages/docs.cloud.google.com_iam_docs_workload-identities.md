---
title: "Identities for workloads \_|\_ Identity and Access Management (IAM) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-identities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-identities
  title: "Identities for workloads \_|\_ Identity and Access Management (IAM) \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Identities for workloads | Identity and Access Management (IAM) | Google Cloud Documentation
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
Configure workloads on Google Cloud Attached service accounts
Workload Identity Federation for GKE
Managed workload identities
Agent identities
Configure external workloads Workload Identity Federation
Service account keys
Local development
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Identities for workloads
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Configure workloads on Google Cloud Attached service accounts
Workload Identity Federation for GKE
Managed workload identities
Agent identities
Configure external workloads Workload Identity Federation
Service account keys
Local development
What's next
This page describes the identity types that you can use to configure
your workloads' access to Google Cloud resources.
Google Cloud provides the following types of identities for workloads:
Workload Identity Federation and
Workload Identity Federation for GKE let your workloads access
most Google Cloud services by using federated identities that are
authenticated through an external identity provider (IdP). After
Google Cloud authenticates the identity as a principal, the principal
can access resources by using IAM roles that you grant.
Google Cloud service accounts can act as
identities for workloads in production environments. Instead of granting access
to a workload directly, you grant access to a service account, then have the
workload use the service account as its identity.
Managed workload identities
let you bind strongly attested identities to your Compute Engine and
GKE workloads.
Agent identities (Preview)
are Google-managed identities for agentic workloads. Agent identities are
attested and tied to the lifecycle of the agents.
This provides a more secure way to manage agent access to Google Cloud
resources than using service accounts.
The types of identities that you can use for workloads and the way that you
configure them depends on where your workloads are running.
Configure workloads on Google Cloud
If you're running workloads on Google Cloud, you can use the following
methods to configure identities for your workloads:
Attached service accounts
Workload Identity Federation for GKE (for workloads running on Google Kubernetes Engine only)
Managed workload identities (for workloads that run on Compute Engine
and GKE only)
Service account keys
Attached service accounts
For some Google Cloud resources, you can specify a user-managed service account that the
resource uses as its default identity. This process is known as attaching the service
account to the resource, or associating the service account with the resource.
When code running on the resource accesses Google Cloud services and resources, it uses the
service account attached to the resource as its identity. For example, if you attach a
service account to a Compute Engine instance , and the applications on the instance use a client library to call Google Cloud APIs,
those applications automatically use the attached service account for authentication and
authorization.
In most cases, you must attach a service account to a resource when you create
that resource. After the resource is created, you cannot change which service
account is attached to the resource. Compute Engine instances are an
exception to this rule; you can change which service account is attached to an
instance as needed.
To learn more, see Attach a service account to a resource .
Workload Identity Federation for GKE
For workloads that run on GKE, Workload Identity Federation for GKE lets you
grant IAM roles to distinct, fine-grained sets of principals, for
each application in your cluster. Workload Identity Federation for GKE lets Kubernetes
service accounts in your GKE cluster access Google Cloud
resources directly, by using Workload Identity Federation, or indirectly,
by using IAM service account impersonation.
By using direct resource access, you can grant IAM roles to the
Kubernetes service account identity directly on the Google Cloud service's
resources. Most Google Cloud APIs support direct resource access. However,
when using identity federation, certain API methods might have limitations. For
a list of these limitations, see Supported products and limitations .
As an alternative, workloads can also use service account impersonation, where
the configured Kubernetes ServiceAccount is bound to an IAM
service account, which serves as the identity when accessing Google Cloud
APIs.
To learn more about GKE Workload Identity Federation for GKE, see
Workload Identity Federation for GKE .
Managed workload identities
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the
General Service Terms section of the
Service Specific Terms .
Pre-GA features are available "as is" and might have limited support. For more
information, see the
launch stage descriptions .
Managed workload identities let you bind strongly attested identities to your
Compute Engine and GKE workloads. You can use managed
workload identities to authenticate your workloads to other workloads using
mTLS .
To learn more about managed workload identities, see Managed workload identities overview .
Agent identities
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
An agent identity is a Google-managed identity for agentic workloads. An agent
identity is attested and tied to the lifecycle of the agent, which provides
a more secure way to manage agent access to Google Cloud resources than
using service accounts.
Existing access management controls through IAM support agent
identity to enable strong governance.
To learn more about agent identities and how to use them, see Use agent identity with Vertex AI Agent Engine .
Configure external workloads
If you're running workloads outside of Google Cloud, you can use the
following methods to configure identities for your workloads:
Workload Identity Federation
Service account keys
Workload Identity Federation
You can use Workload Identity Federation with workloads on
Google Cloud or external workloads that run on platforms such as AWS,
Azure, GitHub, and GitLab.
Workload Identity Federation lets you use credentials from external identity
providers like AWS, Azure , and Active Directory
to generate short-lived credentials, which workloads can use to temporarily
impersonate service accounts. Workloads can then access Google Cloud
resources, using the service account as their identity.
Workload Identity Federation is the preferred way to configure identities for
external workloads.
To learn more about Workload Identity Federation, see
Workload Identity Federation .
Service account keys
A service account key lets a workload authenticate as a service account, then
use the service account's identity for authorization.
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
Local development
If you're developing in a local environment, you can configure workloads to use
either your user credentials or a service account for authentication and
authorization. For more information, see
Local development environment in the authentication documentation.
What's next
Learn how to set up authentication by using service accounts .
Learn how to set up authentication for a local development environment .
Learn how to grant service accounts access to resources .
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
