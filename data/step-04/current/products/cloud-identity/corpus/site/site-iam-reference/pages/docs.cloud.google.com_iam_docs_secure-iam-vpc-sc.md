---
title: "Help secure IAM with VPC Service Controls \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/secure-iam-vpc-sc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/secure-iam-vpc-sc
  title: "Help secure IAM with VPC Service Controls \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Help secure IAM with VPC Service Controls | Identity and Access Management (IAM) | Google Cloud Documentation
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
Help secure the Identity and Access Management API How VPC Service Controls works with IAM
Help secure the Security Token Service API
Help secure the Privileged Access Manager API
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Help secure IAM with VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Help secure the Identity and Access Management API How VPC Service Controls works with IAM
Help secure the Security Token Service API
Help secure the Privileged Access Manager API
What's next
With VPC Service Controls, you can create perimeters , which are boundaries
around your Google Cloud resources. You can then define security policies
that help prevent access to supported services from outside of the perimeter.
For more information about VPC Service Controls, see the VPC Service Controls
overview .
You can use VPC Service Controls to help secure the following
IAM-related APIs:
Identity and Access Management API
Security Token Service API
Privileged Access Manager API
Help secure the Identity and Access Management API
Beta
— Using VPC Service Controls with IAM
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can help secure the following Identity and Access Management (IAM) resources by using
VPC Service Controls:
Custom roles
Service account keys
Service accounts
Workload identity pools
Deny policies
Policy bindings for principal access boundary policies
How VPC Service Controls works with IAM
When you restrict IAM with a perimeter, only actions
that use the IAM API are restricted. These actions
include the following:
Managing custom IAM roles
Managing workload identity pools
Managing service accounts and keys
Managing deny policies
Managing policy bindings for principal access boundary policies
The perimeter doesn't restrict actions related to workforce
pools and principal access boundary policies because those resources
are created at the organization level.
The perimeter also doesn't restrict allow policy management for resources
owned by other services, like Resource Manager projects, folders, and organizations
or Compute Engine virtual machine instances. To restrict allow policy
management for these resources, create a perimeter that restricts the service
that owns the resources. For a list of resources that accept allow policies and
the services that own them, see Resource types that accept allow
policies .
Additionally, the perimeter doesn't restrict actions that use other APIs,
including the following:
IAM Policy Simulator API
IAM Policy Troubleshooter API
Security Token Service API
Service Account Credentials API (including the legacy signBlob and
signJwt methods in the IAM API)
For more details about how VPC Service Controls works with
IAM, see the IAM entry in the
VPC Service Controls supported products table .
Help secure the Security Token Service API
You can help secure token exchanges by using VPC Service Controls.
Note: VPC Service Controls only restricts token exchanges if the
audience in the request is a project-level resource. For
example, it does not restrict requests for downscoped tokens , because
those requests have no audience.
When you restrict the Security Token Service API with a perimeter, only the
following entities can exchange tokens:
Resources within the same perimeter as the workload identity pool you're using
to exchange the token
Principals with the attributes defined in the service perimeter
When you create an ingress
or egress rule to allow token exchanges, you must set the identity type to
ANY_IDENTITY because the token
method has no authorization.
For more details about how VPC Service Controls works with
IAM, see the Security Token Service entry in the
VPC Service Controls supported products table .
Help secure the Privileged Access Manager API
Preview
— Using VPC Service Controls with Privileged Access Manager
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can help secure your Privileged Access Manager resources by using
VPC Service Controls. Privileged Access Manager resources include the following:
Entitlements
Grants
VPC Service Controls doesn't support adding folder-level or organization-level
resources into a service perimeter. You can't use a perimeter to protect
folder-level or organization-level Privileged Access Manager resources. VPC Service Controls
protects project-level Privileged Access Manager resources.
For more details about how VPC Service Controls works with
Privileged Access Manager, see the Privileged Access Manager entry in the
VPC Service Controls supported products table .
What's next
Learn how to create a service perimeter .
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
