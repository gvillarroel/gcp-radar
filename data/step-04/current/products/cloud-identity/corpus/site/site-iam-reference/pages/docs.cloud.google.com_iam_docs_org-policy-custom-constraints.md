---
title: "Use custom organization policies for allow policies \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/org-policy-custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/org-policy-custom-constraints
  title: "Use custom organization policies for allow policies \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use custom organization policies for allow policies | Identity and Access Management (IAM) | Google Cloud Documentation
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
About organization policies and constraints Policy inheritance
Benefits
Limitations
Before you begin Required roles
Set up a custom constraint
Enforce a custom organization policy
Test the custom organization policy Create the constraint
Create the policy
Test the policy
Example custom organization policies for common use cases Conditional organization policies
Identity and Access Management supported resources Supported functions
Macros to evaluate lists
Supported principal types for MemberTypeMatches
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Use custom organization policies for allow policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
About organization policies and constraints Policy inheritance
Benefits
Limitations
Before you begin Required roles
Set up a custom constraint
Enforce a custom organization policy
Test the custom organization policy Create the constraint
Create the policy
Test the policy
Example custom organization policies for common use cases Conditional organization policies
Identity and Access Management supported resources Supported functions
Macros to evaluate lists
Supported principal types for MemberTypeMatches
What's next
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
iam.googleapis.com/AllowPolicy
To learn more about Organization Policy, see
Custom organization policies .
About organization policies and constraints
The Google Cloud Organization Policy Service gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization
policy, which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization
policies at the organization, folder, or project level.
Organization Policy provides built-in managed constraints
for various Google Cloud services. However, if you want more granular,
customizable control over the specific fields that are restricted in your
organization policies, you can also create custom constraints and use those
custom constraints in an organization policy.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Benefits
You can use custom organization policies that reference IAM
attributes to control how your allow policies can be modified. Specifically,
you can control the following:
Who can be granted roles
Who can have their roles revoked
Which roles can be granted
Which roles can be revoked
For example, you can prevent roles that contain the word admin from being
granted to principals whose email addresses end in @gmail.com .
Limitations
Custom organization policies in dry-run
mode that
reference
IAM attributes have some limitations. Namely, audit logs for
violations that involve the setIamPolicy method might be missing the
following fields:
resourceName
serviceName
methodName
Audit logs aren't generated for all IAM-related custom
organization policy violations. Namely, if a custom organization policy causes
a setIamPolicy operation on the organization resource to fail, then
Google Cloud doesn't generate an audit log for that event.
Custom organization policies that reference IAM attributes
don't affect the following:
Default grants by Cloud Storage
ACLs .
Automatic role grants for Cloud Storage convenience
values and
BigQuery default dataset
access .
Roles granted by default allow
policies —for example, a project creator
automatically being granted the Owner role ( roles/owner ) on the project.
Users can be sent invitations to become owners, even if you have a
custom organization policy that prevents the Owner role ( roles/owner ) from
being granted. However, while the custom organization policy doesn't prevent
an invitation from being sent, it does prevent invited users from being
granted the Owner role. If invited users try to accept the invitation, they'll
encounter an error and won't be granted the Owner role.
Some actions in Google Cloud, such as creating resources or enabling
APIs, involve automatically granting a role to a service
agent or default service
account . If an action involves
automatically granting a role and an organization policy prevents that role
from being granted, then the entire operation might fail.
If you encounter this issue, you can use
tags
to temporarily disable the constraint that prevents the role grant. Then,
perform the action. After the action finishes, re-enable the constraint.
Before you begin
If you want to test out custom organization policies that reference
IAM resources, create a new project. Testing these
organization policies in an existing project could disrupt security
workflows.
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
following IAM roles:
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
on the organization
Test the organization policies described on this page:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage organization policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies:
orgpolicy.*
on the organization
Test the organization policies described on this page:
resourcemanager.projects.setIamPolicy
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Set up a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
Console gcloud
More
To create a custom constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the organization
policy for.
Click add Custom constraint .
In the Display name box, enter a human-readable name for the constraint. This name is
used in error messages and can be used for identification and debugging. Don't use
personally identifiable information (PII) or sensitive data in display names because this
name could be exposed in error messages. This field can contain up to 200 characters.
In the Constraint ID box, enter the ID that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase) or
numbers, for example custom.denyProjectIAMAdmin . This field can contain up to
70 characters, not counting the prefix ( custom. ), for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
In the Description box, enter a human-readable description of the constraint. This
description is used as an error message when the policy is violated. Include details about
why the policy violation occurred and how to resolve the policy violation. Don't include
PII or sensitive data in your description, because it could be exposed in error messages.
This field can contain up to 2000 characters.
In the Resource type box, select the name of the Google Cloud REST resource
containing the object and field that you want to restrict—for example,
container.googleapis.com/NodePool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
Under Enforcement method , select whether to enforce the
constraint on a REST CREATE method or both CREATE and
UPDATE methods. If you enforce the constraint with the UPDATE
method on a resource that violates the constraint, changes to that resource are blocked by
the organization policy unless the change resolves the violation.
To see supported methods for each service, find the service in
Services that support custom constraints .
To define a condition, click edit Edit condition .
In the Add condition panel, create a CEL condition that refers to a supported
service resource, for example, resource.management.autoUpgrade == false . This
field can contain up to 1000 characters. For details about CEL usage, see
Common Expression Language .
For more information about the service resources you can use in your custom constraints,
see
Custom constraint supported services .
Click Save .
Under Action , select whether to allow or deny the evaluated method if the condition
is met.
The deny action means that the operation to create or update the resource is blocked if the
condition evaluates to true.
The allow action means that the operation to create or update the resource is permitted only
if the condition evaluates to true. Every other case except those explicitly listed in the
condition is blocked.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML configuration for this
custom constraint appears on the right.
To create a custom constraint, create a YAML file using the following format:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes : RESOURCE_NAME
methodTypes :
- CREATE - UPDATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.denyProjectIAMAdmin . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
iam.googleapis.com/AllowPolicy . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can be CREATE or both CREATE and
UPDATE . If you enforce the constraint with the UPDATE method on
a resource that violates the constraint, changes to that resource are blocked by the
organization policy unless the change resolves the violation.
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
resource.bindings.exists(binding, RoleNameMatches(binding.role, ['roles/resourcemanager.projectIamAdmin'])) .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Possible values are ALLOW and
DENY .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
The deny action means that if the condition evaluates to true, the operation to create or
update the resource is blocked.
DISPLAY_NAME : a human-readable name for the constraint. This name
is used in error messages and can be used for identification and debugging. Don't use PII
or sensitive data in display names because this name could be exposed in error messages.
This field can contain up to 200 characters.
DESCRIPTION : a human-friendly description of the constraint to
display as an error message when the policy is violated. This field can contain up to
2000 characters.
After you have created the YAML file for a new custom constraint, you must set it up to make
it available for organization policies in your organization. To set up a custom constraint,
use the
gcloud org-policies set-custom-constraint command:
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the full path to your custom constraint
file. For example, /home/user/customconstraint.yaml .
After this operation is complete, your custom constraints are available as organization
policies in your list of Google Cloud organization policies.
To verify that the custom constraint exists, use the
gcloud org-policies list-custom-constraints command:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the ID of your organization resource.
For more information, see
Viewing organization policies .
Enforce a custom organization policy
You can enforce a constraint by creating an organization policy that references it, and then
applying that organization policy to a Google Cloud resource.
Console gcloud
More
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the
organization policy for.
From the list on the Organization policies page, select your constraint to view
the Policy details page for that constraint.
To configure the organization policy for this resource, click Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In the Enforcement section, select whether this organization policy is enforced or
not.
Optional: To make the organization policy conditional on a tag, click
Add condition . Note that if you add a conditional rule to an organization
policy, you must add at least one unconditional rule or the policy cannot be saved. For more
information, see
Scope organization policies with tags .
To enforce the organization policy in dry-run mode, click Set dry run policy . For
more information, see
Test organization policies .
After you verify that the organization policy in dry-run mode works as intended, set the
live policy by clicking Set policy .
To create an organization policy with boolean rules, create a policy YAML file that
references the constraint:
name : projects/ PROJECT_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : true
dryRunSpec :
rules :
- enforce : true
Replace the following:
PROJECT_ID : the project that you want to enforce your constraint
on.
CONSTRAINT_NAME : the name you defined for your custom constraint. For
example, custom.denyProjectIAMAdmin .
To enforce the organization policy in
dry-run mode , run
the following command with the dryRunSpec flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
After you verify that the organization policy in dry-run mode works as intended, set the
live policy with the org-policies set-policy command and the spec
flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = spec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
Test the custom organization policy
Optionally, you can test the organization policy by setting the policy and then
trying to take an action that the policy should prevent.
Create the constraint
Save the following file as constraint-deny-project-iam-admin .
name : organizations/ ORG_ID /customConstraints/custom.denyProjectIAMAdmin
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
RoleNameMatches(binding.role, ['roles/resourcemanager.projectIamAdmin']) &&
binding.members.exists(member,
MemberSubjectMatches(member, ['user: EMAIL_ADDRESS '])
)
)"
actionType : DENY
displayName : Do not allow EMAIL_ADDRESS to be granted the Project IAM Admin role.
Replace the following values:
ORG_ID : the numeric ID of your
Google Cloud organization.
MEMBER_EMAIL_ADDRESS : the email address of the
principal that you want to use to test the custom constraint. While the
constraint is active, this principal won't be able to be granted the
Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ) on the
project that you enforce the constraint for.
Apply the constraint:
gcloud org-policies set-custom-constraint ~/constraint-deny-project-iam-admin.yaml
Verify that the constraint exists:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Create the policy
Save the following file as policy-deny-project-iam-admin.yaml :
name : projects/ PROJECT_ID /policies/custom.denyProjectIamAdmin
spec :
rules :
- enforce : true
Replace PROJECT_ID with your project ID.
Apply the policy:
gcloud org-policies set-policy ~/policy-deny-project-iam-admin.yaml
Verify that the policy exists:
gcloud org-policies list --project = PROJECT_ID
After you apply the policy, wait for about two minutes for Google Cloud to
start enforcing the policy.
Test the policy
Try to grant the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to the principal whose email address
you included in the custom constraint. Before running the command, replace the
following values:
PROJECT_ID : The ID of the Google Cloud
project where you enforced the constraint
EMAIL_ADDRESS : The email address of the principal
that you specified when you created the organization policy constraint.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = user: EMAIL_ADDRESS --role = roles/resourcemanager.projectIamAdmin
The output is the following:
Operation denied by custom org policies: ["customConstraints/custom.denyProjectIAMAdmin": " EMAIL_ADDRESS can't be granted the Project IAM Admin role."]
Example custom organization policies for common use cases
The following table provides the syntax of some custom constraints for common
use cases.
The following examples use the CEL macros all and exists . For more
information about these macros, see
Macros to evaluate lists .
Description
Constraint syntax
Block the ability to grant a specific role.
name : organizations/ ORG_ID /customConstraints/custom.denyRole
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
RoleNameMatches(binding.role, [' ROLE '])
)"
actionType : DENY
displayName : Do not allow the ROLE role to be granted
Only allow specific roles to be granted.
name : organizations/ ORG_ID /customConstraints/custom.specificRolesOnly
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.all(
binding,
RoleNameMatches(binding.role, [' ROLE_1 ', ' ROLE_2 '])
)"
actionType : ALLOW
displayName : Only allow the ROLE_1 role and ROLE_2 role to be granted
Prevent any roles that start with roles/storage. from being
granted.
name : organizations/ ORG_ID /customConstraints/custom.dontgrantStorageRoles
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
RoleNameStartsWith(binding.role, ['roles/storage.'])
)"
actionType : DENY
displayName : Prevent roles that start with "roles/storage." from being granted
Prevent any roles with admin in the name from being
revoked.
name : organizations/ ORG_ID /customConstraints/custom.dontRevokeAdminRoles
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- REMOVE_GRANT
condition :
"resource.bindings.exists(
binding,
RoleNameContains(binding.role, ['admin'])
)"
actionType : DENY
displayName : Prevent roles with "admin" in their names from being revoked
Only allow specific principals to be granted roles.
name : organizations/ ORG_ID /customConstraints/custom.allowSpecificPrincipals
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.all(
binding,
binding.members.all(member,
MemberSubjectMatches(member, ['user: USER ','serviceAccount: SERVICE_ACCOUNT '])
)
)"
actionType : ALLOW
displayName : Only allow roles to be granted to USER and SERVICE_ACCOUNT
Prevent any roles from being revoked from specific principals.
name : organizations/ ORG_ID /customConstraints/custom.denyRemovalOfSpecificPrincipals
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- REMOVE_GRANT
condition :
"resource.bindings.exists(
binding,
binding.members.exists(member,
MemberSubjectMatches(member, ['user: USER_1 ','user: USER_2 '])
)
)"
actionType : DENY
displayName : Do not allow roles to be revoked from USER_1 or USER_2
Prevent principals with email addresses ending in
@gmail.com from being granted roles.
name : organizations/ ORG_ID /customConstraints/custom.dontGrantToGmail
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
binding.members.exists(member,
MemberSubjectEndsWith(member, ['@gmail.com'])
)
)"
actionType : DENY
displayName : Do not allow members whose email addresses end with "@gmail.com" to be granted roles
Only allow specific roles to be granted, and only to specific principals.
name : organizations/ ORG_ID /customConstraints/custom.allowSpecificRolesAndPrincipals
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.all(
binding,
RoleNameMatches(binding.role, [' ROLE_1 ', ' ROLE_2 ']) &&
binding.members.all(member,
MemberSubjectMatches(member, ['serviceAccount: SERVICE_ACCOUNT ', 'group: GROUP '])
)
)"
actionType : ALLOW
displayName : Only allow ROLE_1 and ROLE_2 to be granted to SERVICE_ACCOUNT and GROUP
Prevent Cloud Storage roles from being granted to
allUsers and allAuthenticatedUsers .
name : organizations/ ORG_ID /customConstraints/custom.denyStorageRolesForPrincipalAllUsers
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
RoleNameStartsWith(binding.role, ['roles/storage.']) &&
binding.members.exists(member,
MemberSubjectMatches(member, ['allUsers', 'allAuthenticatedUsers'])
)
)"
actionType : DENY
displayName : Do not allow storage roles to be granted to allUsers or allAuthenticatedUsers
Prevent any identities outside of your organization from being granted
roles.
name : organizations/ ORG_ID /customConstraints/custom.allowInternaldentitiesOnly
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.all(
binding,
binding.members.all(member,
MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/ ORG_ID '])
)
)"
actionType : ALLOW
displayName : Only allow organization members to be granted roles
Only allow service accounts to be granted roles.
name : organizations/ ORG_ID /customConstraints/custom.allowServiceAccountsOnly
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.all(
binding,
binding.members.all(member,
MemberTypeMatches(member, ['iam.googleapis.com/ServiceAccount'])
)
)"
actionType : ALLOW
displayName : Only allow service accounts to be granted roles
Prevent removal of Google-managed service agents from role bindings.
name : organizations/ ORG_ID /customConstraints/custom.denyRemovalOfGoogleManagedServiceAgents
resource_types : iam.googleapis.com/AllowPolicy
method_types :
- REMOVE_GRANT
condition : |-
resource.bindings.all(
binding,
binding.members.all(member,
MemberTypeMatches(member, ['iam.googleapis.com/ServiceAgent'])
)
)
action_type : DENY
display_name : Deny Removal Of Google-Managed Service Agents
description : Restricts the removal of Google-managed service agents from role bindings. Please reach out to your organization admins for if you have any questions.
Conditional organization policies
You can make a custom organization policy conditional using
tags .
For example, imagine that you wrote the following custom constraint to prevent
any roles that start with roles/storage. from being granted:
name : organizations/ORG_ID/customConstraints/custom.dontgrantStorageRoles
resourceTypes : iam.googleapis.com/AllowPolicy
methodTypes :
- CREATE
- UPDATE
condition :
"resource.bindings.exists(
binding,
RoleNameStartsWith(binding.role, ['roles/storage.'])
)"
actionType : DENY
displayName : Prevent roles that start with "roles/storage." from being granted
To enforce the constraint conditionally, you could create an organization policy
like the following:
name : organizations/ORG_ID/policies/custom.dontgrantStorageRoles
spec :
rules :
- condition :
expression : "resource.matchTag('ORG_ID/environment', 'dev')"
enforce : true
- enforce : false
This organization policy prevents roles that start with roles/storage. from
being granted on any resource that also has the tag environment=dev .
Identity and Access Management supported resources
IAM supports the AllowPolicy resource. This resource has
the attribute resources.bindings attribute, which is returned for all methods
that modify a resource's allow policy. All of the methods that modify a
resource's allow policy end with setIamPolicy .
The resource.bindings attribute has the following structure, where
BINDINGS is an array of role bindings that were modified
during a change to an allow policy:
{
"bindings" : {
BINDINGS
}
}
Each binding in resource.bindings has the following structure, where
ROLE is the name of the role in the role binding and
MEMBERS is a list of identifiers for all principals that
were added to or removed from the role binding:
{
"role" : " ROLE "
"members" : {
MEMBERS
}
}
To see the formats that principal identifiers can have, see Principal
identifiers .
You can only evaluate the resource.bindings attribute and its fields using the
supported functions . Other operators and
functions—like == , != , in , contains , startsWith , and
endsWith —are not supported.
Supported functions
You can use the following CEL functions to evaluate individual roles and members
in a binding.
To evaluate all bindings in the bindings array or all members in the members
array, use the all and exists macros. For more information, see Macros
to evaluate lists on this page.
You can also use the logical operators && ( and ) and || ( or ) to write
multipart conditions.
Function
Description
RoleNameMatches( role, roleNames: list )
trending_flat bool
Returns true if the role role fully matches
at least one of the roles listed in roleNames .
Parameters
role : the role to evaluate.
roleNames : a list of role names to match against.
Example
Returns true if the role in the specified
binding is roles/storage.admin or
roles/compute.admin :
RoleNameMatches(binding.role, ['roles/storage.admin', 'roles/compute.admin'])
RoleNameStartsWith( role, rolePrefixes: list )
trending_flat bool
Returns true if the role role starts with
at least one of the strings listed in rolePrefixes .
Parameters
role : the role to evaluate.
rolePrefixes : a list of strings to match the start of
the role against.
Example
Returns true if the role in the
specified binding starts with
roles/storage :
RoleNameStartsWith(binding.role, ['roles/storage'])
RoleNameEndsWith( role, roleSuffixes: list )
trending_flat bool
Returns true if the role role ends with
at least one of the strings listed in roleSuffixes .
Parameters
role : the role to evaluate.
roleSuffixes : a list of strings to match the end of the
role against.
Example
Returns true if the role in the
specified binding ends with .admin :
RoleNameEndsWith(binding.role, ['.admin'])
RoleNameContains( role, roleSubstrings: list )
trending_flat bool
Returns true if the role role contains
at least one of the strings listed in roleSubstrings .
Parameters
role : the role to evaluate.
roleSubstrings : a list of strings to match any part of
the role to.
Example
Returns true if the role in the
specified binding contains the string
admin :
RoleNameContains(binding.role, ['admin'])
MemberSubjectMatches( member, memberNames: list )
trending_flat bool
Returns true if the member member fully
matches at least one of the members listed in
memberNames .
If the identifier for member is an email address, this
function evaluates the email address as well as any aliases
for that email address.
Parameters
member : the member to evaluate.
memberNames : a list of member names to match against.
Example
Returns true if the member member is
rosario@example.com :
MemberSubjectMatches(member, ['user:rosario@example.com'])
MemberSubjectStartsWith( member, memberPrefixes: list )
trending_flat bool
Returns true if the member member starts
with at least one of the strings listed in
memberPrefixes .
If the identifier for member is an email address, this
function evaluates the email address as well as any aliases
for that email address.
Parameters
member : the member to evaluate.
memberPrefixes : a list of strings to match the
beginning of the member name against.
Example
Returns true if the member member begins
with user:prod- :
MemberSubjectStartsWith(member, ['user:prod-'])
MemberSubjectEndsWith( member, memberSuffixes: list )
trending_flat bool
Returns true if the member member ends with
at least one of the strings listed in memberSuffixes .
If the identifier for member is an email address, this
function evaluates the email address as well as any aliases
for that email address.
Parameters
member : the member to evaluate.
memberSuffixes : a list of strings to match the end of
the member name against.
Example
Returns true if the member member ends
with @example.com :
MemberSubjectEndsWith(member, ['@example.com'])
MemberInPrincipalSet( member, principalSets: list )
trending_flat bool
Returns true if the member belongs to at least one of the
listed principal sets.
Parameters
member : the member to evaluate.
principalSets : a list of principal sets. For the
function to evaluate to true , the member must be in at
least one of these principal sets.
The only principal set that is supported is the organization
principal set, which has the format
//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION_ID .
When used in the MemberInPrincipalSet function, this
principal set includes the following principals:
All identities in all domains associated with your
Google Workspace customer ID
All workforce identity pools in your organization
All service accounts and workload identity pools in any project
in the organization
All service
agents associated with resources in your organization.
Example
Returns true if the member member
belongs to the @example.com organization, which has
the ID 123456789012 :
MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/123456789012'])
MemberTypeMatches( member, principalType: list )
trending_flat bool
Returns true if the member is one of the
listed principal types.
Parameters
member : the member to evaluate.
principalType : a list of principal types. For the
function to evaluate to true , the member must be one of
the listed principal types. To learn which principal types are
supported, see Supported
principal types for MemberTypeMatches .
Example
Returns true if the member member
has the principal type
iam.googleapis.com/WorkspacePrincipal or
iam.googleapis.com/WorkspaceGroup :
MemberTypeMatches(member, ['iam.googleapis.com/WorkspacePrincipal', 'iam.googleapis.com/WorkspaceGroup'])
Macros to evaluate lists
Use the all and exists macros to evaluate a condition expression for a
list of items.
Macro
Description
list. all( item, conditionExpression )
trending_flat bool
Returns true if conditionExpression
evaluates to true for every item in
list .
This macro is typically used for custom organization policies with
the actionType ALLOW . For example, you
can use this macro to ensure that an action is only allowed if
all modified principals meet the condition.
Parameters
list : the list of items to evaluate.
item : the list item to evaluate. For example, if you
call this method on the list resource.bindings , then
use the value binding .
conditionExpression : the condition expression to
evaluate each item against.
Example
Returns true if all of the bindings in
resource.bindings have roles that start with
roles/storage. . Returns false if any of
the bindings have roles that don't start with
roles/storage. :
resource.bindings.all(binding, RoleNameStartsWith(binding.role, ['roles/storage.']))
list. exists( item, conditionExpression )
trending_flat bool
Returns true if conditionExpression
evaluates to true for any item in
list .
This macro is typically used for custom organization policies with the
actionType DENY . For example, you can use
this macro to ensure that an action is denied if any of the
modified principals meet the condition.
Parameters
list : the list of items to evaluate.
item : the list item to evaluate. For example, if you
call this method on the list resource.bindings , then
use the value binding .
conditionExpression : the condition expression to
evaluate each item against.
Example
Returns true if any of the bindings in
resource.bindings have roles that start with
roles/storage. . Returns false if none of
the bindings have roles that start with
roles/storage. :
resource.bindings.exists(binding, RoleNameStartsWith(binding.role, ['roles/storage.']))
Conditions with nested lists
In general, if your condition includes nested lists, you should use the same
macro for all lists in the condition.
Consider the following examples:
If your policy has the actionType ALLOW , then use the all macro for both
the members list and the bindings list to ensure that policy modifications
are only allowed if all members in all modified bindings satisfy the
condition.
If your policy has the actionType DENY , then use the exists macro for
both the members list and the bindings list to ensure that policy
modifications aren't allowed if any member in any modified binding
satisfies the condition.
Mixing macros in a single condition might result in a condition that doesn't
behave how you intended.
For example, imagine that you want to prevent roles from being granted to
members outside of the example.com organization. The example.com
organization has the ID 123456789012 .
To accomplish this goal, you write the following condition:
Not recommended — misconfigured condition
"resource.bindings. all (
binding,
binding.members. exists (member,
MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/123456789012'])
)
)"
This condition appears to prevent roles from being granted to members outside of
the example.com organization. However, the condition evaluates to true if
any member in each of the modified role bindings is in the example.com
organization. As a result, you can still grant roles to members outside of the
example.com organization if you also grant the same role to a member in the
example.com organization.
For example, the condition evaluates to true for the following set of
bindings, even though one of the members isn't in the example.com
organization:
"bindings" : [
{
"members" : [
" user:raha@altostrat.com " ,
"user:jie@example.com"
],
"role" : "roles/resourcemanager.projectCreator"
}
],
Instead, you should write a condition like the following:
Recommended — correctly configured condition
"resource.bindings. all (
binding,
binding.members. all (member,
MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/123456789012'])
)
)"
Using the all macro for both the members.bindings array and the
resource.bindings array ensures that the condition evaluates to true only
if all members in all bindings are in the example.com principal set.
Supported principal types for MemberTypeMatches
The MemberTypeMatches function requires you to specify which principal type
the specified member must match.
The following table lists the principal types that you can enter and a
description of what the principal type represents. It also lists the principal
identifiers that correspond with each principal type. These identifiers are the
values that are used in IAM policies.
Principal type
Description
Principal identifiers
iam.googleapis.com/ ConsumerPrincipal
A consumer
Google Account . The email addresses for these accounts typically end
in gmail.com .
user: USER_EMAIL_ADDRESS
iam.googleapis.com/ WorkspacePrincipal
A Google Account that is part of a Cloud Identity or Google Workspace
account. These accounts are also called
managed user accounts .
user: USER_EMAIL_ADDRESS
iam.googleapis.com/ ConsumerGroup
A
Google group created by a consumer Google Account. These groups aren't
owned by a Cloud Identity or Google Workspace account. The email
addresses for these groups typically end in googlegroups.com .
group: GROUP_EMAIL_ADDRESS
iam.googleapis.com/ WorkspaceGroup
A
Google group that's owned by a Cloud Identity or
Google Workspace account.
group: GROUP_EMAIL_ADDRESS
iam.googleapis.com/ Domain
A Cloud Identity or Google Workspace account.
domain: DOMAIN
iam.googleapis.com/ WorkforcePoolPrincipal
A single principal in a workforce
identity pool .
principal://iam.googleapis.com/ locations/ global/ workforcePools/ POOL_ID / subject/ SUBJECT_ATTRIBUTE_VALUE
iam.googleapis.com/ WorkforcePoolPrincipalSet
A principal set that contains a set of identities in a workforce
identity pool . For example, a principal set containing all principals
in a workforce identity pool.
principalSet://iam.googleapis.com/ locations/ global/ workforcePools/ POOL_ID / group/ GROUP_ID
principalSet://iam.googleapis.com/ locations/ global/ workforcePools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
principalSet://iam.googleapis.com/ locations/ global/ workforcePools/ POOL_ID /*
iam.googleapis.com/ WorkloadPoolPrincipal
A single identity in a workload identity
pool
principal://iam.googleapis.com/projects/ PROJECT_NUMBER / locations/ global/ workloadIdentityPools/ POOL_ID / subject/ SUBJECT_ATTRIBUTE_VALUE
iam.googleapis.com/ WorkloadPoolPrincipalSet
A principal set that contains a set of identities in a workload
identity pool . For example, a principal set containing all principals
in a workload identity pool.
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER / locations/ global/ workloadIdentityPools/ POOL_ID / group/ GROUP_ID
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER / locations/ global/ workloadIdentityPools/ POOL_ID / attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
principalSet://iam.googleapis.com/ projects/ PROJECT_NUMBER / locations/ global/ workloadIdentityPools/ POOL_ID /*
iam.googleapis.com/ ServiceAccount
Any service account . A
service account is a special type of account that represents a workload
rather than a human user.
In the context of the MemberTypeMatches function, this
principal type doesn't include service
agents .
serviceAccount: SERVICE_ACCOUNT_EMAIL_ADDRESS
iam.googleapis.com/ ServiceAgent
Any service
agent . A service agent is a special type of service account that
Google Cloud creates and
manages. When granted roles in your projects, service agents let
Google Cloud services perform actions on your behalf.
serviceAccount: SERVICE_AGENT_EMAIL_ADDRESS
iam.googleapis.com/ PublicPrincipals
The principals allUsers and
allAuthenticatedUsers .
allUsers
allAuthenticatedUsers
iam.googleapis.com/ ProjectRoleReference
Principals that are defined based on the role granted to them. These
principals are also called convenience
values .
projectOwner: PROJECT_ID
projectEditor: PROJECT_ID
projectViewer: PROJECT_ID
iam.googleapis.com/ ResourcePrincipal
A resource with a built-in identity .
Any of the principal identifiers listed in Principal
identifiers for single resources .
iam.googleapis.com/ ResourcePrincipalSet
Resources with built-in
identities that share certain characteristics, such as type or
ancestor.
Any of the identifiers listed in Principal
identifiers for sets of resources .
iam.googleapis.com/AgentIdentity
A single agent identity .
principal://agents.global.org- ORG_ID .system.id.goog/ SUBJECT_ATTRIBUTE_VALUE
principal://agents.global.proj- PROJECT_NUMBER .system.id.goog/ SUBJECT_ATTRIBUTE_VALUE
principal://agents-nonprod.global.org- ORG_ID .system.id.goog/ SUBJECT_ATTRIBUTE_VALUE
principal://agents-nonprod.global.proj- PROJECT_NUMBER .system.id.goog/ SUBJECT_ATTRIBUTE_VALUE
iam.googleapis.com/AgentIdentitySet
A principal set that contains a set of agent identities .
principalSet://agents.global.org- ORG_ID .system.id.goog/*
principalSet://agents.global.proj- PROJECT_NUMBER .system.id.goog/*
principalSet://agents-nonprod.global.org- ORG_ID .system.id.goog/*
principalSet://agents-nonprod.global.proj- PROJECT_NUMBER .system.id.goog/*
principalSet://agents.global.org- ORG_ID .system.id.goog/ attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
principalSet://agents.global.proj- PROJECT_NUMBER .system.id.goog/ attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
principalSet://agents-nonprod.global.org- ORG_ID .system.id.goog/ attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
principalSet://agents-nonprod.global.proj- PROJECT_NUMBER .system.id.goog/ attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
Example: principalSet://agents.global.org-123456789012.system.id.goog/*
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
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
