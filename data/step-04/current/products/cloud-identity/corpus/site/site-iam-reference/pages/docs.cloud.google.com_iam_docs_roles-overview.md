---
title: "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-overview
  title: "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin
Role types
Role components
Basic roles Legacy basic roles
Predefined roles
Custom roles Supported permissions
Permission dependencies
Custom roles lifecycle
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Role types
Role components
Basic roles Legacy basic roles
Predefined roles
Custom roles Supported permissions
Permission dependencies
Custom roles lifecycle
What's next
This page describes Identity and Access Management (IAM) roles, which are collections of
IAM permissions.
A role contains a set of permissions that allows you to perform specific actions on
Google Cloud resources.
To make permissions available to principals, including
users, groups, and service accounts, you grant roles to the principals.
Before you begin
Understand the basic concepts of IAM.
Role types
There are three types of roles in IAM:
Basic roles , which provide broad access to Google Cloud resources.
Predefined roles , which provide granular access for a specific service and
are managed by Google Cloud.
Custom roles , which provide granular access according to a user-specified
list of permissions.
To determine if a permission is included in a basic, predefined, or custom role,
you can use one of the following methods:
View the role in the Google Cloud console.
Go to Roles
Run the gcloud iam roles describe
command.
Get the role using the appropriate REST API method:
For predefined roles, use roles.get() .
For project-level custom roles, use
projects.roles.get() .
For organization-level custom roles, use
organizations.roles.get() .
For basic and predefined roles only: Search the permissions
reference to see if the permission is granted by the role.
For predefined roles only: Search the predefined role
descriptions to see which
permissions the role includes.
For guidance on when to use specific role types, see Choose which type of role
to use .
Role components
Each role has the following components:
Title : A human-readable name for the role. The role
title is used to identify the role in the Google Cloud console.
Name : An identifier for the role in one of the following
formats:
Predefined roles: roles/ SERVICE . IDENTIFIER
Project-level custom roles: projects/ PROJECT_ID /roles/ IDENTIFIER
Organization-level custom roles: organizations/ ORG_ID /roles/ IDENTIFIER
The role name is used to identify the role in allow policies .
ID : A unique identifier for the role. For basic and
predefined roles, the ID is the same as the role name. For custom roles, the
ID is everything after roles/ in the role name.
Description : A human-readable description of the role.
Stage : The stage of the role in the launch lifecycle, such as
ALPHA , BETA , or GA . To learn more about launch stages, see
Testing and deploying .
Permissions : The permissions included in the role. Permissions allow
principals to perform specific actions on Google Cloud resources. When you
grant a role to a principal, the principal gets all of the permissions in the
role.
Permissions have the following format:
SERVICE . RESOURCE . VERB
For example, the compute.instances.list permission allows a user to list
the Compute Engine instances they own, and compute.instances.stop allows
a user to stop a VM.
Permissions usually, but not always, correspond 1:1 with REST methods. That
is, each Google Cloud service has an associated permission for each
REST method that it has. To call a method, the caller needs the associated
permission. For example, to call the Pub/Sub API's
projects.topics.publish method, you need the pubsub.topics.publish
permission.
ETag : An identifier for the version of the role to help
prevent concurrent updates from overwriting each other. Basic and predefined
roles always have the ETag AA== . ETags for custom roles change each time you
modify the roles.
Basic roles
Preview
— the Reader, Writer, and Admin basic roles
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Basic roles are highly permissive roles that give broad access to
Google Cloud resources.
Caution:
Basic roles include thousands of permissions across all Google Cloud services. In production
environments, do not grant basic roles unless there is no alternative. Instead, grant the most
limited predefined roles or
custom roles that meet your needs.
The basic roles in IAM are Admin ( roles/admin ), Writer
( roles/writer ), and Reader ( roles/reader ). IAM also has three
legacy basic roles that existed prior to the introduction of IAM:
Owner ( roles/owner ), Editor ( roles/editor ), and Viewer
( roles/viewer ). To learn more about these roles, see Legacy basic
roles on this page.
The following table summarizes the permissions that the Admin, Writer, and
Reader give principals across all Google Cloud services:
Note: Cloud Storage
convenience values and
BigQuery special group
membership don't give permissions to
principals with the Admin, Writer, or Reader roles.
Basic role
Permissions
Reader ( roles/reader )
Permissions for read-only actions that don't affect state, such as
viewing (but not modifying) existing resources or data.
For a list of permissions in the Reader role, see the role details in
the Google Cloud console:
Go to Reader
role
Writer ( roles/writer )
All of the permissions in the Reader role, plus permissions
for actions that modify state, such as changing existing resources.
The permissions in the Writer role let you create and delete resources
for most Google Cloud services. However, the Writer role doesn't
contain permissions to perform all actions for all services. For more
information about how to check whether a role has the permissions that
you need, see Role types on this page.
For a list of permissions in the Writer role, see the role details in
the Google Cloud console:
Go to Writer
role
Admin ( roles/admin )
All of the permissions in the Writer role, plus permissions
for actions like the following:
Completing sensitive tasks, like managing tag bindings for
Compute Engine resources
Managing roles and permissions for a project and all resources
within the project
Setting up billing for a project
The Admin role doesn't contain all permissions for all
Google Cloud resources. For example, it doesn't contain
permissions to modify your Cloud Billing payment information or
create IAM deny policies.
For a list of permissions in the Admin role, see the role details in
the Google Cloud console:
Go to Admin
role
You can't use the Google Cloud console to grant the Reader, Writer, or Admin
roles. Instead, use the API or the gcloud CLI. You can also create
entitlements for these roles using Privileged Access Manager .
For instructions, see Granting, changing, and revoking
access .
Legacy basic roles
Legacy basic roles existed prior to the introduction of IAM.
They were originally known as primitive roles . Unlike with other basic
roles, you can't add conditions to role bindings for legacy
basic roles.
The legacy basic roles are Owner ( roles/owner ), Editor ( roles/editor ), and
Viewer ( roles/viewer ).
When you grant a legacy basic role to a principal, the principal gets all of the
permissions in the role. The principal also gets any permissions that
services provide to principals with legacy basic roles—for example,
permissions gained through Cloud Storage
convenience values and BigQuery special
group membership .
The following table summarizes the permissions that the legacy basic roles give
principals across all Google Cloud services:
Legacy basic role
Permissions
Viewer ( roles/viewer )
Permissions for read-only actions that don't affect state, such as
viewing (but not modifying) existing resources or data.
For a list of permissions in the Viewer role, see the role details in
the Google Cloud console:
Go to Viewer
role
Editor ( roles/editor )
All viewer permissions, plus permissions for actions that
modify state, such as changing existing resources.
The permissions in the Editor role let you create and delete resources
for most Google Cloud services. However, the Editor role doesn't
contain permissions to perform all actions for all services. For more
information about how to check whether a role has the permissions that
you need, see Role types on this page.
For a list of permissions in the Editor role, see the role details in
the Google Cloud console:
Go to Editor
role
Owner ( roles/owner )
All Editor permissions, plus permissions for actions like the
following:
Completing sensitive tasks, like managing tag bindings for
Compute Engine resources
Managing roles and permissions for a project and all resources
within the project
Setting up billing for a project
The Owner role doesn't contain all permissions for all
Google Cloud resources. For example, it doesn't contain
permissions to modify your Cloud Billing payment information or
create IAM deny policies.
For a list of permissions in
the Owner role, see the role details in the Google Cloud console:
Go to Owner
role
Generally, you can grant legacy basic roles using the Google Cloud console,
the API, or the gcloud CLI. However, you must use the
Google Cloud console to grant the Owner role in the following situations:
The user that you're granting the Owner role to isn't part of your
organization.
The project that you're granting the Owner role on isn't part of any
organization.
Additionally, you can only grant the Owner role to the following types of
principals:
Google Accounts
Service accounts in your organization
Google groups in your organization
To learn how to grant roles, see Granting, changing, and revoking
access .
Predefined roles
In addition to the basic roles, IAM provides additional
predefined roles that give granular access to specific Google Cloud
resources. These roles are created and maintained by Google. Google
automatically updates their permissions as necessary, such as when
Google Cloud adds new features or services.
You can grant multiple roles to the same user, at any level of the resource
hierarchy. For example, the same user can have the Compute Network Admin and
Logs Viewer roles on a project, and also have the Pub/Sub Publisher role on a
Pub/Sub topic within that project. To list the permissions contained in
a role, see
Getting the role metadata .
For help choosing the most appropriate predefined roles, see
Find the right predefined roles .
For a list of predefined roles, see the roles
reference .
Custom roles
IAM also lets you create custom IAM roles .
Custom roles help you enforce the principle of least privilege, because they
help to ensure that the principals in your organization have only the
permissions that they need.
Custom roles are user-defined, and allow you to bundle one or more supported
permissions to meet your specific needs. When you create a custom role, you must
choose an organization or project to create it in. You can then grant the custom
role on the organization or project, as well as any resources within that
organization or project. You can only create 300
per organization and 300 per project.
You can only grant a custom role within the project or organization in which you
created it. You cannot grant custom roles on other projects or organizations,
or on resources within other projects or organizations.
Note: You cannot define custom roles at the folder level. If you need to use a
custom role within a folder, define the custom role at the organization level.
You create a custom role by combining one or more of the supported
IAM permissions. To learn how to create a custom role,
see Create and manage custom roles .
Caution: You should only allow a small number of highly trusted principals to
edit custom roles. If a principal can edit custom roles in a project or
organization, they can add any permission to any custom role in that project or
organization. As a result, if you grant any custom role to the principal, they
can use the custom role to get unlimited access.
Supported permissions
You can include many, but not all, IAM permissions in custom roles. Each permission
has one of the following support levels for use in custom roles:
Support level
Description
SUPPORTED
The permission is fully supported in custom roles.
TESTING
Google is testing the permission to check its compatibility with custom roles. You can
include the permission in custom roles, but you might see unexpected behavior. Not
recommended for production use.
NOT_SUPPORTED
The permission is not supported in custom roles.
To see a full list of the permissions that are supported in custom roles, see
Support levels for permissions in custom
roles .
An organization-level custom role can include any of the IAM
permissions that are supported in custom roles. A project-level custom role can
contain any supported permission except for permissions that can only be used
at the organization or folder level.
The reason that you can't include folder-specific and organization-specific
permissions in project-level roles is that they don't do anything when granted
at the project level. This is because resources in Google Cloud are
organized hierarchically. Permissions are inherited through the resource
hierarchy, meaning that they are effective for the resource and all of that
resource's descendants. However, organizations and folders are always above
projects in the
Google Cloud resource hierarchy. As a result, you'll never be able to use
a permission that you were given at the project level to access folders or
organizations. As a result, folder-specific and organization-specific
permissions—for example, resourcemanager.folders.list —are
ineffective for project-level custom roles.
Permission dependencies
Some permissions are effective only when given together. For example, to
update an allow policy, you must read the policy before you can modify
and write it. As a result, to update an allow policy, you almost always need the
getIamPolicy permission for that service and resource type, in addition to the
setIamPolicy permission.
To make sure your custom roles are effective, you can create custom roles based
on predefined roles with similar permissions. Predefined roles are designed with
specific tasks in mind and contain all of the permissions you need to accomplish
those tasks. Reviewing these roles can help you see which permissions are
usually granted together. Then, you can use that information to design effective
custom roles.
To learn how to create a custom role based on a predefined role, see
Creating and managing custom roles .
Custom roles lifecycle
The following sections describe key considerations at each phase of a custom
role's lifecycle. You can use this information to inform how you create and
manage your custom roles.
Creation
When you're creating a custom role, choose an ID, title, and description that
help you identify the role:
Role ID : The role ID is a unique identifier for the role. It can be up to
64 bytes long and can contain uppercase and
lowercase alphanumeric characters, underscores, and periods. You can't reuse a
role ID within an organization or project.
You can't change role IDs, so choose them carefully. You can delete a custom
role, but you can't create a new custom role with the same ID in the same
organization or project until after the 44-day
deletion process has completed. For more information about the deletion
process, see Deleting a custom role .
Role title : The role title appears in the list of roles in the
Google Cloud console. The title doesn't have to be unique, but we recommend
using unique and descriptive titles to better distinguish your roles. Also,
consider indicating in the role title if the role was created at the
organization level or the project level.
Role titles can be up to 100 bytes long and
can contain uppercase and lowercase alphanumeric characters and symbols. You
can change role titles at any time.
Role description : The role description is an optional field where you can
provide additional information about a role. For example, you could include
the role's intended purpose, the date a role was created or modified, and any
predefined roles that the custom role is based on. Descriptions can be up to
300 bytes long and can contain
uppercase and lowercase alphanumeric characters and symbols.
Also keep permission dependencies in
mind when creating custom roles.
To learn how to create a custom role based on a predefined role, see Creating
and managing custom roles .
Launch
Custom roles include a launch stage as part of the role's metadata. The most
common launch stages for custom roles are ALPHA , BETA , and GA . These
launch stages are informational; they help you keep track of whether each role
is ready for widespread use. Another common launch stage is DISABLED . This
launch stage lets you disable a custom role .
We recommend that you use launch stages to convey the following information
about the role:
EAP or ALPHA : The role is still being developed or tested, or it includes
permissions for Google Cloud services or features that are not yet
public. It is not ready for widespread use.
BETA : The role has been tested on a limited basis, or it includes
permissions for Google Cloud services or features that are not generally
available.
GA : The role has been widely tested, and all of its permissions are for
Google Cloud services or features that are generally available.
DEPRECATED : The role is no longer in use.
To learn how to change a role's launch stage, see
Editing an existing custom role .
Maintenance
You are responsible for maintaining custom roles. This includes updating roles
as your users' responsibilities change, as well as updating roles to let users
access new features that require additional permissions.
If you base your custom role on predefined roles, we recommend routinely
checking those predefined roles for permission changes. Tracking these changes
can help you decide when and how to update your custom role. For example, you
might notice that a predefined role was updated with permissions to use a new
Preview feature, and might decide to add those permissions to your custom role
as well.
To make it easier to see which predefined roles to monitor, we recommend listing
any predefined roles that your custom role is based on in the custom role's
description field. The Google Cloud console does this automatically when you
use the Google Cloud console to create a custom role based on predefined
roles.
To learn how to update a custom role's permissions and description, see Editing
an existing custom role .
Refer to the permissions change log to
determine what roles and permissions have changed recently.
Disabling
If you no longer want any principals in your organization to use a custom role,
you can disable the role. To disable the role, change its launch stage to
DISABLED .
Disabled roles still appear in your IAM policies and can be
granted to principals, but they don't have any effect.
To learn how to disable a custom role, see
disabling a custom role .
What's next
Learn how to grant IAM roles
to principals.
Find out how to
choose the most appropriate predefined roles .
Learn how to create custom roles .
Learn about the use cases for specific role types .
Use the Policy Troubleshooter to understand why a user does
or doesn't have access to a resource or have permission to call an API.
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
