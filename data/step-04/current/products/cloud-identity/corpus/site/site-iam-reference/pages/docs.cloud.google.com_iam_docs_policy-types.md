---
title: "IAM policy types \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/policy-types
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/policy-types
  title: "IAM policy types \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

IAM policy types | Identity and Access Management (IAM) | Google Cloud Documentation
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
Types of IAM policies in Google Cloud
Policies to grant access to principals
Policies to deny access to principals
Policies to restrict the resources a principal can access
Policy evaluation
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
IAM policy types
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Types of IAM policies in Google Cloud
Policies to grant access to principals
Policies to deny access to principals
Policies to restrict the resources a principal can access
Policy evaluation
What's next
Identity and Access Management (IAM) offers several types of policies to help you
control which resources principals can access. This page helps you
understand the differences between how you use and manage these policy types.
Types of IAM policies in Google Cloud
IAM offers the following types of policies:
Allow policies
Deny policies
Principal access boundary (PAB) policies
Access policies
The following table summarizes the differences between these policy types:
Policy
Policy function
API used to manage the policy
Relationship between policies and targets
Method of attaching policies to target
Policy's parent resource
Allow policies
Grant principals access to resources
The API for the resource that you want to manage allow policies for
One-to-one relationship
Each allow policy is attached to one resource; each resource can only have one allow policy
Specify resource when creating the policy
Same as the resource that the allow policy is attached to
Deny policies
Ensure that principals can't use specific permissions
The IAM v2
API
One-to-many relationship
Each deny policy is attached to one resource; each resource can have up to
500 deny policies
Specify resource when creating the deny policy
Same as the resource that the deny policy is attached to
PAB policies
Restrict the resources a principal is eligible to access
The IAM
v3 API
Many-to-many relationship
Each PAB policy can be attached to an unlimited number of
principal sets; each principal set can have up to
10 PAB policies bound to it
Create a policy binding that attaches the PAB policy to a
principal set
The organization
Access policies
Grant or deny principals access to resources for supported services
The IAM
v3 API
Many-to-many relationship
Each access policy can be attached to up to
5 resources; each resource can have up to
5 access policies bound to
it
Create an access policy binding that attaches the access policy to the
resource
The project, folder, or organization where the access policy is created
The following sections provide details about each policy type.
Policies to grant access to principals
To grant principals access to resources, use one of the following policies:
Use allow policies to grant access to any resource type.
Use access policies to grant access to Eventarc resources.
Allow policies let you grant access to resources in Google Cloud. Allow
policies are made up of role bindings and metadata. Role bindings specify which
principals should have a certain role on the resource.
Allow policies are always attached to a single resource. After you attach an
allow policy to a resource, the policy is inherited by that
resource's descendants.
To create and apply an allow policy, you identify a resource that accepts allow
policies , then use that resource's
setIamPolicy method to create the allow policy. All principals in the allow
policy are granted the specified roles on the resource and all of the resource's
descendants. Each resource can have only one allow policy attached to it.
For more information about allow policies, see Understanding allow
policies .
Access policies let you control access to Eventarc resources. Access
policies can both allow and deny access to resources. To create and apply an
access policy, you create an access policy, and then create a policy binding to
connect that policy to a project with Eventarc resources.
Each policy binding binds one access policy to one resource. An access policy
can be bound to up to 5 resources. Each resource
can have up to 5 access policies
bound to it. When an access policy is deleted, all of the policy bindings
related to that policy are also deleted.
To learn more about using access policies to control access to Eventarc
resources, see the Eventarc documentation .
Policies to deny access to principals
To deny principals access to resources, use one of the following:
Use deny policies to deny access for any resource type.
Use access policies to deny access for Eventarc resources.
Deny policies , like allow policies, are always attached to a single resource.
You can attach a deny policy to a project, folder, or organization. This
project, folder, or organization also acts as the policy's parent in the
resource hierarchy. After you attach a deny policy to a resource, the policy
is inherited by that resource's descendants.
To create and apply deny policies, you use the IAM v2 API. When
you create a deny policy, you specify the resource that the deny policy is
attached to. All principals in the deny policy are prevented from using the
specified permissions to access that resource and any of that resource's
descendants. Each resource can have up to
500 deny policies attached to it.
For more information about deny policies, see Deny policies .
Access policies let you control access to Eventarc resources. Access
policies can both allow and deny access to resources. To create and apply an
access policy, you create an access policy, and then create a policy binding to
connect that policy to a project with Eventarc resources.
Each policy binding binds one access policy to one resource. An access policy
can be bound to up to 5 resources. Each resource
can have up to 5 access policies
bound to it. When an access policy is deleted, all of the policy bindings
related to that policy are also deleted.
To learn more about using access policies to control access to Eventarc
resources, see the Eventarc documentation .
Policies to restrict the resources a principal can access
To restrict the resources that a principal is eligible to access, use a
principal access boundary policy. Principal access boundary policies are available in the
IAM v3 API .
To create and apply a principal access boundary policy, you create a principal access boundary
policy, and then create a policy binding to connect that policy to a principal
set.
Principal access boundary policies are always children of your organization.
Policy bindings for principal access boundary policies are children of the project,
folder, or organization that is closest to the principal set referenced in the
policy binding.
Each policy binding binds one principal access boundary policy to one principal set. A
principal access boundary policy can be bound to any number of principal sets. Each
principal set can have up to 10 principal access boundary
policies bound to it. When a principal access boundary policy is deleted, all of the
policy bindings related to that policy are also deleted.
For more information about principal access boundary policies, see Principal access boundary
policies .
Policy evaluation
When a principal tries to access a resource, IAM evaluates all
relevant allow, deny, and principal access boundary policies to see if the principal is
allowed to access the resource. If any of these policies indicates that the
principal shouldn't be able to access the resource, then IAM
prevents access.
In reality, IAM evaluates all policy types simultaneously, then
compiles the results to determine whether the principal can access the resource.
However, it can be helpful to think of this policy evaluation taking place in
the following stages:
IAM checks all relevant principal access boundary policies to see
if the principal is eligible to access the resource. A principal access boundary
policy is relevant if the following are true:
The policy is bound to a principal set that includes the principal
The principal access boundary policy blocks the permission that the principal
is trying to use. The permissions that a principal access boundary policy
blocks depends on the principal access boundary policy version. You specify the
policy version when you create the principal access boundary policy. For more
information, see Principal access boundary
policy versions .
After checking the relevant principal access boundary policies,
IAM does one of the following:
If the relevant principal access boundary policies don't include the resource
that the principal is trying to access, or if IAM can't
evaluate the relevant principal access boundary policies, then
IAM prevents them from accessing the resource.
If the relevant principal access boundary policies include the resource that
the principal is trying to access, then IAM continues to
the next step.
If there are no relevant principal access boundary policies, then
IAM continues to the next step.
IAM checks all relevant deny policies to see if the
principal has been denied the permission. Relevant deny policies are the
deny policies attached to the resource, as well as any inherited deny policies .
For Eventarc resources, IAM also evaluates
any access policies with the DENY action. If
IAM fails to evaluate access policies, then it ignores them
and continues with the evaluation.
If any of these deny policies prevent the principal from using
a required permission, then IAM prevents them from
accessing the resource.
If no deny policies prevent the principal from using a required
permission, then IAM continues to the next step.
IAM checks all relevant allow policies to see if the principal
has the required permissions. Relevant allow policies are the allow
policies attached to the resource, as well as any inherited allow
policies .
For Eventarc resources, IAM also evaluates
any access policies with the ALLOW action. If
IAM fails to evaluate access policies, then it ignores them
and continues with the evaluation.
If the principal does not have the required permissions, then
IAM prevents them from accessing the resource.
If the principal has the required permissions, then IAM
lets them access the resource.
The following diagram shows this policy evaluation flow:
What's next
Learn more about allow policies .
Learn more about deny policies .
Learn more about principal access boundary policies .
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
