---
title: "Deny policies \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/deny-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/deny-overview
  title: "Deny policies \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Deny policies | Identity and Access Management (IAM) | Google Cloud Documentation
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
How deny policies work Attachment point
Deny policy inheritance
Denial conditions
Permission groups
Structure of a deny policy Metadata
Deny rules
Common use cases Centralizing administrative privileges
Creating exceptions to access grants
Blocking access based on tags
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Deny policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How deny policies work Attachment point
Deny policy inheritance
Denial conditions
Permission groups
Structure of a deny policy Metadata
Deny rules
Common use cases Centralizing administrative privileges
Creating exceptions to access grants
Blocking access based on tags
What's next
Identity and Access Management (IAM) deny policies let you set guardrails on access to
Google Cloud resources. With deny policies, you can define
deny rules that prevent certain principals from using certain permissions,
regardless of the roles they're granted.
This page provides an overview of deny policies and deny rules. To learn how to
create and update deny policies, see Deny access to resources .
How deny policies work
Deny policies are made up of deny rules. Each deny rule specifies the following:
A set of principals that are denied permissions
The permissions that the principals are denied , or unable to use
Optional: The condition that must be true for the
permission to be denied
When a principal is denied a permission, they can't do anything that requires
that permission, regardless of the IAM roles they've been
granted. This is because IAM always checks relevant deny policies
before checking relevant allow policies. For details, see policy
evaluation .
To specify where you want a deny policy to apply, you attach it to a project,
folder, or organization. When a deny policy is attached to one of these
resources, the principals in the policy can't use the specified permissions to
access the resource, or any of the resource's descendants . To
learn more about where you can attach a deny policy, see Attachment
point on this page.
You can attach multiple deny policies to a single resource. This lets you
create separate deny policies for different types of deny rules. For example,
you could put compliance-related deny rules in one policy, then use another
policy for other deny rules. Each deny policy is evaluated independently of all
other deny policies.
Each resource can have up to 500 deny policies.
Together, these deny policies can contain a total of
500 deny rules.
Note:
Changes to a principal's access are eventually consistent . This means that it takes time for access changes to
propagate through the system. To learn how long it takes, on average, for access changes to
propagate, see Access change propagation .
Attachment point
Each deny policy is attached to an organization, folder, or project. When
attached to one of these resources, deny policies are inherited by all
lower-level resources in that project, folder, or organization. To work with
deny policies, you need an identifier for the resource that the deny policy is
attached to, which is called the attachment point . This identifier uses one of
the formats in the following table:
Attachment point format
Organization
cloudresourcemanager.googleapis.com/organizations/ ORG_ID
Replace ORG_ID with the numeric organization
ID. For the REST API, URL-encode the entire value.
Example for the gcloud CLI:
cloudresourcemanager.googleapis.com/organizations/123456789012
Example for the REST API:
cloudresourcemanager.googleapis.com%2Forganizations%2F123456789012
Folder
cloudresourcemanager.googleapis.com/folders/ FOLDER_ID
Replace FOLDER_ID with the numeric folder ID.
For the REST API, URL-encode the entire value.
Example for the gcloud CLI:
cloudresourcemanager.googleapis.com/folders/987654321098
Example for the REST API:
cloudresourcemanager.googleapis.com%2Ffolders%2F987654321098
Project
cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
Replace PROJECT_ID with the alphanumeric or
numeric project ID. For the REST API, URL-encode the entire value.
Example for the gcloud CLI:
cloudresourcemanager.googleapis.com/projects/my-project
Example for the REST API:
cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project
Deny policy inheritance
Deny policies, like allow policies, are inherited through the resource
hierarchy . When you attach a deny policy to a project,
folder, or organization, the policy is also effective for all resources inside
that project, folder, or organization.
For example, if a deny policy for an organization says that a principal cannot
use a specific permission, then the principal cannot use that permission for
any resource within the organization. This rule applies even if the folders
and projects within that organization have more permissive deny policies.
Similarly, if a deny policy for a project says that a principal cannot use a
specific permission, then the principal cannot use that permission for any
resource within the project. This rule applies even if the parent organization
and folders have more permissive deny policies.
Denial conditions
Denial conditions specify the conditions that must be met in order for a deny
rule to apply. If the condition evaluates to true or cannot be evaluated, the
deny rule applies and the principals are unable to use the specified
permissions. If the condition evaluates to false , the deny rule does not apply
and the principals can use the specified permissions if they have them.
Denial conditions have the same structure as IAM
Conditions. However, denial conditions only recognize resource tag
functions .
To learn how to write conditions, see overview of IAM
Conditions .
Permission groups
Some services let you deny permission groups . Permission groups are sets of
permissions that match a specified pattern. You can use a permission group
to deny sets of related permissions—for example, you can deny all
permissions for a single service or resource.
Supported permission groups are listed in Permissions supported in deny
policies . The identifiers for the supported permission
groups replace one or more sections of a permission name with a wildcard
character ( * ). The permissions that each group includes depend on the position
of the wildcard:
SERVICE_FQDN / RESOURCE .* : Denies all
permissions for the specified given resource.
SERVICE_FQDN /*.* : Denies all permissions for the
specified service.
SERVICE_FQDN /*. VERB : Denies all permissions
for a service that end in the specified verb.
Permission groups include all current and future permissions that match the
specified pattern. For example, imagine that you use the permission group
example.googleapis.com/exampleResource.* to deny a user all permissions for
the exampleResource resource type. If example.googleapis.com adds a new
permission for the exampleResource resource type, such as
example.googleapis.com/exampleResource.newPermission , the user will
automatically be denied the new permission.
You can only use wildcards in supported permission groups. Using wildcards in
other permission names is not supported.
Structure of a deny policy
A deny policy is a collection of metadata and deny rules . A deny rule
associates a set of principals with a set of permissions that the principals are
denied, or unable to use. Each rule can also specify a condition that determines
when the permission is denied.
For example, the following deny policy blocks all principals from deleting
projects, unless the principal is a member of the project-admins group or the
project being deleted has a tag with the value test .
{
"name" : "policies/cloudresourcemanager.googleapis.com%2Fprojects%2F253519172624/denypolicies/limit-project-deletion" ,
"uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" ,
"kind" : "DenyPolicy" ,
"displayName" : "Only project admins can delete projects." ,
"etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" ,
"createTime" : "2021-09-07T23:15:35.258319Z" ,
"updateTime" : "2021-09-07T23:15:35.258319Z" ,
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"exceptionPrincipals" : [
"principalSet://goog/group/project-admins@example.com"
],
"deniedPermissions" : [
"cloudresourcemanager.googleapis.com/projects.delete" ,
"cloudresourcemanager.googleapis.com/folders.*"
],
"exceptionPermissions" : [
"cloudresourcemanager.googleapis.com/folders.list" ,
"cloudresourcemanager.googelapis.com/folders.get"
],
"denialCondition" : {
"title" : "Only for non-test projects" ,
"expression" : "!resource.matchTag('12345678/env', 'test')"
}
}
}
]
}
The following sections describe the fields in a deny policy's metadata and deny
rules.
Metadata
Deny policies contain the following metadata:
name : The name of the deny policy. This name has the format
policies/ ATTACHMENT_POINT /denypolicies/ POLICY_ID ,
where ATTACHMENT_POINT is the project, folder, or
organization that the deny policy is attached to and
POLICY_ID is the deny policy's alphanumeric ID.
uid : A unique ID assigned to the deny policy by Google.
kind : The type of policy. The kind for a deny policy is always
DenyPolicy .
displayName : Optional. A human-readable name for the deny policy.
etag : An identifier for a version of the policy. To prevent conflicting
updates, the etag value must match the value that is stored in
IAM. If the etag values do not match, the request fails.
createTime : The time when the deny policy was created.
updateTime : The last time that the deny policy was updated.
Deny rules
Each deny rule can have the following fields:
deniedPrincipals : The principals that are denied permissions. You can list
individual principals and sets of principals. Individual principal types
include user accounts, service accounts, and single identities in a workforce
or workload identity pool. Sets of principals include Google groups,
Cloud Identity domains, sets of workforce or workload identities, and all
users on the internet.
For a list of valid principal types and identifiers, see
Principal identifiers for deny policies .
exceptionPrincipals : Optional. The principals that are exempt from the deny
rule. These principals are not denied the specified permissions even if they
are listed in deniedPrincipals , or are part of a group listed in
deniedPrincipals .
You can list individual principals and sets of principals. Individual
principal types include user accounts, service accounts, and single
identities in a workforce or workload identity pool. Sets of principals
include Google groups, Cloud Identity domains, sets of workforce or
workload identities, and all users on the internet.
For a list of valid principal types and identifiers, see
Principal identifiers for deny policies .
deniedPermissions : The permissions that the specified principals are unable
to use, or denied. These permissions use the IAM v2
permission format, which uses fully qualified domain names (FQDNs) to identify
the service. The format is
SERVICE_FQDN / RESOURCE . ACTION .
Google APIs use the domain *.googleapis.com . For example,
iam.googleapis.com/roles.delete .
Only some permissions can be denied. For a full list of permissions that can
be denied, see Permissions supported in deny
policies .
In some cases, you can also use permission groups to deny sets of
permissions. For more information, see Permission
groups .
exceptionPermissions : Optional. A list of permissions that the specified
principals can use, even if those permissions are included in
deniedPermissions . For example, you can use this field to make exceptions
for specific permissions in a permission group.
denialConditions : Optional. A logic expression that affects when the deny
rule applies. If the condition evaluates to true or cannot be evaluated,
the permission is denied. If the condition evaluates to false , the
permission is not denied. For more information, see Denial
conditions on this page.
Common use cases
The following are common situations where you might want to use deny policies,
and examples of the deny rules you might create in each situation. To learn how
to create and update deny policies, see Deny access to resources .
Centralizing administrative privileges
You can use deny policies to restrict certain types of administrative activities
to a specific set of principals.
For example, imagine you want to limit custom role management for your
organization to a single central team. To do so, you create a deny rule that
denies the permissions required for custom role management to all users, except
users in the administrative group ( custom-role-admins ):
{
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"exceptionPrincipals" : [
"principalSet://goog/group/custom-role-admins@example.com"
],
"deniedPermissions" : [
"iam.googleapis.com/roles.create" ,
"iam.googleapis.com/roles.delete" ,
"iam.googleapis.com/roles.update" ,
]
}
Then, you attach the deny policy to your organization.
Now, only members of the custom-role-admins group are able to
manage custom roles, even if other users have the required permissions.
For example, imagine that both Yuri and Tal have the Organization Role
Administrator role ( roles/iam.organizationRoleAdmin ). However, Yuri is a
member of custom-role-admins , and Tal is not. With this deny policy, only Yuri
is able to create, delete, and update roles.
Creating exceptions to access grants
You can use deny policies to deny inherited permissions. This capability gives
you the option to grant a role at a high level in the resource hierarchy, and
then deny the role's permissions on individual lower-level resources if
necessary.
For example, imagine that you have a folder, Engineering , that contains
multiple projects. You want to give a group, eng , the permissions
in the Service Account Key Admin role ( roles/iam.serviceAccountKeyAdmin ) on
almost all of the projects in the folder. However, you don't want the group to
gain the ability to create and delete service account keys in one specific
project in the folder, example-prod .
Instead of granting the Service Account Key Admin role on each individual
project, you create the following deny rule, which denies create and delete
permissions in the Service Account Key Admin role to the principals in the
eng group:
{
"deniedPrincipals" : [
"principalSet://goog/group/eng@example.com"
],
"deniedPermissions" : [
"iam.googleapis.com/serviceAccountKeys.create" ,
"iam.googleapis.com/serviceAccountKeys.delete"
]
}
Then, you add this deny rule to a deny policy and attach the policy to the
project example-prod .
After you attach the deny policy to the project, you can grant the Service
Account Key Admin role to the eng group on the Engineering folder without
letting the group create or delete service account keys in example-prod .
Members of the eng group are then able to create and delete service account
keys in all projects except example-prod . For example, if Izumi is a member of
the eng group, they can create and delete keys for service accounts in
example-dev and example-test , but not in example-prod .
However, imagine that you actually want a subset of the eng group to be able
to create and delete service account keys in example-prod . This subset is
represented by the group eng-prod . To allow the members of the eng-prod
group to create and delete service account keys in example-prod , you can make
the group exempt from the deny rule:
{
"deniedPrincipals" : [
"principalSet://goog/group/eng@example.com"
],
"exceptionPrincipals" : [
"principalSet://goog/group/eng-prod@example.com"
],
"deniedPermissions" : [
"iam.googleapis.com/serviceAccountKeys.create" ,
"iam.googleapis.com/serviceAccountKeys.delete"
]
}
With this revised deny policy, members of the eng-prod group can create and
delete service account keys in all projects, including example-prod . For
example, if Charlie is a member of the eng-prod group, they can create and
delete keys in example-dev , example-test , and example-prod , even if they
are also a member of the eng group.
Blocking access based on tags
A tag is a key-value pair that can be attached to an organization, folder, or
project. You can use deny policies to deny permissions based on tags without
adding an IAM Condition to every role grant.
For example, imagine that you tag all of your projects as dev , test , or
prod . You want only members of the project-admins group to be able to
delete projects that are tagged prod .
To solve this problem, you create a deny rule that denies the
cloudresourcemanager.googleapis.com/projects.delete permission to everyone
except the project-admins group for resources that are tagged prod :
{
"displayName" : "Only project admins can delete production projects." ,
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"exceptionPrincipals" : [
"principalSet://goog/group/project-admins@example.com"
],
"deniedPermissions" : [
"cloudresourcemanager.googleapis.com/projects.delete"
],
"denialCondition" : {
"title" : "Only for prod projects" ,
"expression" : "resource.matchTag('12345678/env', 'prod')"
}
}
}
]
}
Then, you add this deny rule to a deny policy and attach the policy to your
organization.
Because of this deny rule, you can limit principals' access without adding a
condition to their role grants. Instead, you can grant principals roles that
contain the cloudresourcemanager.googleapis.com/projects.delete permission,
and rely on the deny rule to prevent principals outside of the
project-admins group from deleting any projects tagged prod .
For example, consider two users, Bola and Kiran. Both users have the Project
Deleter role ( roles/resourcemanager.projectDeleter ). Additionally, Kiran is a
member of the project-admins group. With this deny policy, Bola can only
delete projects that have the tag dev or test . Kiran can delete all
projects, regardless of their tags.
What's next
Learn how to create, update, and delete deny policies .
Find out how to
troubleshoot access issues with deny policies .
Review the permissions that can be denied .
See the types of principals that you can include
in deny policies.
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
