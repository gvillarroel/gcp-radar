---
title: "Using resource hierarchy for access control \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control
  title: "Using resource hierarchy for access control \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Using resource hierarchy for access control | Identity and Access Management (IAM) | Google Cloud Documentation
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
Prerequisites
Background Example: Pub/Sub
Example: Cloud Storage
Example: Compute Engine
Permissions for viewing inherited policies
Best practices
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Using resource hierarchy for access control
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Prerequisites
Background Example: Pub/Sub
Example: Cloud Storage
Example: Compute Engine
Permissions for viewing inherited policies
Best practices
Note: You can now use deny policies to prevent
principals from using some permissions. Using deny policies might cause the features described on
this page to work differently.
Google Cloud resources are organized hierarchically, where
the organization node is the root node in the hierarchy, the projects are the
children of the organization, and the other resources are descendants of
projects. You can set allow policies at different levels of the resource
hierarchy. Resources inherit the allow policies of the parent resource. The
effective allow policy for a resource is the union of the allow policy set at
that resource and the allow policy inherited from its parent.
This page describes some examples of how allow policy inheritance works and
explains the best practices that you must take into consideration when you
create resources during Identity and Access Management (IAM) deployment.
Prerequisites
Understand the
basic concepts
of IAM, in particular the
Google Cloud resource hierarchy .
Background
The following diagram shows an example of a Google Cloud resource
hierarchy.
IAM lets you set allow policies at the following levels of the
resource hierarchy:
Organization level . The organization resource represents your company.
IAM roles granted at this level are inherited by all resources
under the organization. For more information, see
Access control for organizations using IAM .
Folder level . Folders can contain projects, other folders, or a
combination of both. Roles granted at the highest folder level will be
inherited by projects or other folders that are contained in that parent
folder. For more information, see
Access control for folders using IAM .
Project level . Projects represent a trust boundary within your company.
Services within the same project have a default level of trust.
IAM roles granted at the project level are inherited by
resources within that project. For more information, see Access control for
projects using
IAM .
Resource level . In addition to the existing Cloud Storage and
BigQuery ACL systems, additional resources such as Pub/Sub
topics and Compute Engine instances support lower-level
roles so that you can grant certain users permission to a single resource
within a project.
Allow policies are hierarchical and propagate down the structure. The effective
allow policy for a resource is the union of the allow policy set at that
resource and the allow policy inherited from its parent.
The following examples explain how allow policy inheritance works in practice.
Example: Pub/Sub
In Pub/Sub, topics and subscriptions are resources that live under
a project. Assume that project_1 has a topic topic_a under it. If you set an
allow policy on project_1 that grants the Editor role to Kalani, and set an
allow policy on topic_a that grants the Publisher role to Nur, you effectively
grant the Editor role to Kalani and the Publisher role to Nur for topic_a .
The following diagram illustrates the preceding example.
If an inherited role already gives a principal all of the permissions that they
need, then you don't need to grant them additional roles on the resource itself.
Granting another role that contains the same or fewer permissions is redundant,
and doesn't have any effect.
For example, consider the basic roles Owner, Editor, and Viewer. These roles are
concentric; that is, the Owner role includes the permissions in the Editor role,
and the Editor role includes the permissions of the Viewer role. As a result, if
you grant Kalani the Editor role at the project level, then granting them the
Viewer role on topic_a is redundant. This is because Kalani already has all of
the permissions in the Viewer role through the Editor role, which is inherited
from the project's allow policy.
The following diagram illustrates the preceding example.
Example: Cloud Storage
In Cloud Storage, buckets and objects are resources, and objects are
located in buckets. An example of using IAM with
Cloud Storage is to allow read access to files that are uploaded.
Consider a scenario where many users upload files to a bucket, but they
shouldn't be able to read or delete any of the files uploaded by other users.
Your data processing expert should be able to read and delete uploaded files,
but they shouldn't be able to delete buckets because others are using the bucket
location to upload their files. In this scenario, you would set allow policies
on the project as follows:
Grant the Storage Object Admin
role
( roles/storage.objectAdmin ) to your data processing expert, Nur. This role
lets Nur read, add, and delete any object in any bucket in the project.
Grant the Storage Object Creator
role
( roles/storage.objectCreator ) to the data-uploaders group. This role
lets group members upload files to the bucket, but doesn't let them read or
delete any files that other users upload.
The following diagram illustrates the preceding example.
Example: Compute Engine
In larger companies, the management of network and security resources such as
firewalls are typically managed by a dedicated team, which is different from the
development team. The development teams might want the flexibility to launch
instances and carry out other actions related to instances in their projects.
In a situation like this, you could configure your allow policies as follows:
Grant the Compute Network Admin
role
( roles/compute.networkAdmin ) to your network and security administrator,
Kalani, at the organization level. This role lets Kalani make changes to the
network resources in the organization and in any projects under that
organization.
Grant the Compute Instance Admin
role
( roles/compute.instanceAdmin ) to a development team lead, Nur, on their
project project_2 . This role lets Nur carry out any actions on their
instances while preventing them from making any changes to the network
resources associated with their project. However, it doesn't let them make
changes to network resources in other projects.
Permissions for viewing inherited policies
To view IAM policies that are inherited from a parent resource,
you need permission to view the parent resource's IAM policy. For
example, to view all inherited IAM policies for a project, you
need permission to view the IAM policy of the project's parent
organization and to view the IAM policies of any parent folders.
To get the permissions that
you need to view IAM policies that are inherited from
parent resources,
ask your administrator to grant you the
following IAM roles:
View an IAM policy that is inherited from an organization:
Organization Administrator ( roles/resourcemanager.organizationAdmin )
on the organization
View an IAM policy that is inherited from a folder:
Folder Admin ( roles/resourcemanager.folderAdmin )
on the folder
View an IAM policy that is inherited from a project:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to view IAM policies that are inherited from
parent resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view IAM policies that are inherited from
parent resources:
View an IAM policy that is inherited from an organization:
resourcemanager.organizations.getIamPolicy
on the organization
View an IAM policy that is inherited from a folder:
resourcemanager.folders.getIamPolicy
on the folder
View an IAM policy that is inherited from a project:
resourcemanager.projects.getIamPolicy
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Note: In the Google Cloud console, a resource's IAM page only
shows inherited roles if the roles are grantable on the
resource .
Best practices
Mirror your Google Cloud resource hierarchy structure to your
organization structure. The Google Cloud resource hierarchy should
reflect how your company is organized, whether it's a startup, a SME, or a
large corporation. A startup may start out with a flat resource hierarchy with
no organization resource. When more people start collaborating on projects and
the number of projects increase, getting an organization resource might make
sense. An organization resource is recommended for larger companies with
multiple departments and teams where each team is responsible for their own
set of applications and services.
Use projects to group resources that share the same trust boundary. For
example, resources for the same product or microservice can belong to the same
project.
Grant roles to a group instead of to individual users when possible. It
is easier to manage members in a group than to update an allow policy.
Make sure to control the ownership of the group used in allow policies.
For more information about how to manage Google groups, see
Google Groups help .
Use the security principle of
least privilege
to grant IAM roles; that is, only give the least amount of
access necessary to your resources.
To find the appropriate predefined role,
see the predefined roles reference . If there are no
appropriate predefined roles, you can also create your own
custom roles .
Grant roles at the smallest scope needed. For example, if a user only needs
access to publish messages to a Pub/Sub topic, grant the
Publisher
role to the user for that topic.
Remember that the allow policies for child resources inherit from the allow
policies for their parent resources. For example, if the allow policy for a
project grants a user the ability to administer Compute Engine virtual
machine (VM) instances, then the user can administer any
Compute Engine VM in that project, regardless of the allow policy you
set on each VM.
On every project, ensure that at least two principals have the Owner role
( roles/owner ). Alternatively, grant the Owner role to a group that
contains at least two principals.
This practice helps ensure that if one of the principals leaves your
company, you still have a way to manage your project.
If you need to grant a role to a user or group that spans across multiple
projects, set that role at the folder level instead of setting it at the
project level.
Use labels to annotate, group, and filter resources.
Audit your allow policies to ensure compliance.
Audit logs contain all setIamPolicy() calls, so you
can trace when an allow policy has been created or modified.
Audit the ownership and the membership of the groups used in
allow policies.
If you want to limit project creation in your organization, change the
organization access policy
to grant the
Project Creator role
to a group that you manage.
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
