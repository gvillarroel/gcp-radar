---
title: "Creating and managing tags for custom roles \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/custom-roles-tags
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/custom-roles-tags
  title: "Creating and managing tags for custom roles \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Creating and managing tags for custom roles | Identity and Access Management (IAM) | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
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
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Creating and managing tags for custom roles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
This guide describes how to create and manage tags for custom roles.
About tags
A tag is a key-value pair that can attach to a resource within
Google Cloud. You can use tags to conditionally allow or deny policies based on
whether a resource has a specific tag. For example, you can conditionally grant
Identity and Access Management (IAM) roles based on whether a resource has a specific tag.
For more information about tags, see Tags overview .
Tags are attached to resources by creating a tag binding resource that links the
value to the Google Cloud resource.
Required permissions
To get the permissions that
you need to manage tags,
ask your administrator to grant you the
following IAM roles:
Tag Viewer ( roles/resourcemanager.tagViewer )
on the resources the tags are attached to
View and manage tags at the organization level:
Organization Viewer ( roles/resourcemanager.organizationViewer )
on the organization
Create, update, and delete tag definitions:
Tag Administrator ( roles/resourcemanager.tagAdmin )
on the resource you're creating, updating, or deleting tags for
Attach and remove tags from resources:
Tag User ( roles/resourcemanager.tagUser )
on the tag value and the resources that you are attaching or removing the tag value to
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To get the permissions that
you need to attach tags to custom roles,
ask your administrator to grant you the
Role Administrator ( roles/iam.roleAdmin )
IAM role on the project or organization where the roles are located.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create tag keys and values
Before you can attach a tag, you need to create a tag and configure its value.
To create tag keys and tag values, see Creating a tag and
Adding a tag value .
Add tags to existing resources
To add a tag to existing custom roles, follow these steps:
gcloud
More
To attach a tag to a custom role, you must create a
tag binding resource by using the
gcloud resource-manager tags bindings create command:
gcloud resource-manager tags bindings create \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID : the full role name, including the
projects or organizations prefix and the API
domain name ( //iam.googleapis.com/ ). For example, the resource
ID of a project-level custom role example-role in the project
example-project is
//iam.googleapis.com/projects/example-project/roles/example-role .
List tags attached to resources
You can view a list of tag bindings directly attached to or inherited by the
custom role.
gcloud
More
To get a list of tag bindings attached to a resource, use the
gcloud resource-manager tags bindings list command:
gcloud resource-manager tags bindings list \
--parent= RESOURCE_ID
Replace the following:
RESOURCE_ID : the full role name, including the
projects or organizations prefix and the API
domain name ( //iam.googleapis.com/ ). For example, the resource
ID of a project-level custom role example-role in the project
example-project is
//iam.googleapis.com/projects/example-project/roles/example-role .
You should get a response similar to the following:
name: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F7890123456/tagValues/567890123456
tagValue: tagValues/567890123456
resource: //iam.googleapis.com/projects/example-project/roles/example-role
Detach tags from resources
You can detach tags that have been directly attached to
a custom role. Inherited tags can be overridden by attaching
a tag with the same key and a different value, but they can't be detached.
gcloud
More
To delete a tag binding, use the
gcloud resource-manager tags bindings delete command:
gcloud resource-manager tags bindings delete \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID : the full role name, including the
projects or organizations prefix and the API
domain name ( //iam.googleapis.com/ ). For example, the resource
ID of a project-level custom role example-role in the project
example-project is
//iam.googleapis.com/projects/example-project/roles/example-role .
Delete tag keys and values
When removing a tag key or value definition, ensure that the tag is detached from the
custom role. You must delete existing tag attachments, called tag
bindings, before deleting the tag definition itself. To delete tag keys and tag
values, see Deleting tags .
Identity and Access Management conditions and tags
You can use tags and IAM conditions to conditionally
grant role bindings to users in your hierarchy. Changing or deleting the tag
attached to a resource can remove user access to that resource if an
IAM policy with conditional role bindings has been applied. For
more information, see Identity and Access Management conditions and tags .
What's next
See the other services that support tags .
See Tags and access control to learn how to use tags with
IAM.
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
Español – América Latina
Français
Indonesia
Italiano
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
