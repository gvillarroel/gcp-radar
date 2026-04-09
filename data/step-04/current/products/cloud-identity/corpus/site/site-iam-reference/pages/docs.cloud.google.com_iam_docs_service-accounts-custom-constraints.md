---
title: "Use custom organization policies for service accounts and service account\
  \ keys \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-accounts-custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-accounts-custom-constraints
  title: "Use custom organization policies for service accounts and service account\
    \ keys \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use custom organization policies for service accounts and service account keys | Identity and Access Management (IAM) | Google Cloud Documentation
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
Benefits
Policy inheritance
Before you begin Required roles
Create a custom constraint
Set up a custom constraint
Enforce a custom organization policy
Test the custom organization policy
Identity and Access Management supported resources and operations
Example custom organization policies for common use cases
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Use custom organization policies for service accounts and service account keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Benefits
Policy inheritance
Before you begin Required roles
Create a custom constraint
Set up a custom constraint
Enforce a custom organization policy
Test the custom organization policy
Identity and Access Management supported resources and operations
Example custom organization policies for common use cases
What's next
Google Cloud Organization Policy gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization policy,
which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization policies at
the organization, folder, or project level.
Organization Policy provides predefined constraints for various
Google Cloud services. However, if you want more granular, customizable
control over the specific fields that are restricted in your organization
policies, you can also create custom organization policies.
Benefits
You can use custom organization policies to allow or deny specific operations on
service accounts and service account keys. For example, you can set a policy to
deny the creation of a key with a certain origin, causing any requests to create a key
with that origin to fail and return an error to the user.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Before you begin
Ensure that you know your organization
ID .
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
Organization policy administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage organization policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
To create a YAML file for a custom constraint:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes :
- iam.googleapis.com/ RESOURCE_TYPE
methodTypes :
- CREATE
- UPDATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers, for
example, custom.denyServiceAccountCreation. The maximum length of this field is 70
characters, not counting the prefix, for example,
organizations/123456789/customConstraints/custom .
RESOURCE_TYPE : the name (not the URI) of the
Identity and Access Management API REST resource containing the object and field
you want to restrict. For example, iam.googleapis.com/ServiceAccount.
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This
field has a maximum length of 1000 characters. See
Supported resources for more information about the
resources available to write conditions against. For example,
"resource.description.contains(' INVALID_DESCRIPTION ')" .
ACTION : the action to take if the condition is
met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
DESCRIPTION : a human-friendly description of the
constraint to display as an error message when the policy is violated. This
field has a maximum length of 2000 characters.
For more information about how to create a custom constraint, see
Defining custom constraints .
Set up a custom constraint
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
numbers, for example custom.denyServiceAccountCreation . This field can contain up to
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
This constraint
can only be enforced on the REST CREATE method.
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
- CREATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.denyServiceAccountCreation . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
iam.googleapis.com/ServiceAccount . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can only be
CREATE .
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.description.contains(' INVALID_DESCRIPTION ')" .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Can only be ALLOW .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
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
Click Test changes to simulate the effect of the organization policy. For more
information, see
Test organization policy changes with Policy Simulator .
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
example, custom.denyServiceAccountCreation .
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
This section describes how to test the following organization policy constraint:
name : organizations/ ORG_ID /customConstraints/custom.denyServiceAccountCreation
resourceTypes : iam.googleapis.com/ServiceAccount
methodTypes :
- CREATE
- UPDATE
condition :
"resource.description.contains(' INVALID_DESCRIPTION ')"
actionType : DENY
displayName : Do not allow service account with INVALID_DESCRIPTION to be created.
If you want to test this custom constraint, do the following:
Copy the constraint into a YAML file and replace the following values:
ORG_ID : the numeric ID of your
Google Cloud organization.
INVALID_DESCRIPTION : the description that you want to use to test the custom constraint. While the
constraint is active, service accounts with a description containing this string won't be created on the
project that you enforce the constraint for.
Set up the custom constraint and
enforce it for the project that you created
to test the custom organization policy constraint.
Ensure that you have the Create Service Accounts role
( roles/iam.serviceAccountCreator ) .
Try to create a service account with the description you included in the custom constraint. Before running the command, replace the
following values:
SERVICE_ACCOUNT_NAME : The name of the service account
INVALID_DESCRIPTION : The invalid string that will be checked for in the description of the service account
DISPLAY_NAME : The service account name to display in the Google Cloud console
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
--description = " INVALID_DESCRIPTION " --display-name = " DISPLAY_NAME "
The output is the following:
Operation denied by custom org policy: ["customConstraints/custom.denyServiceAccountCreation": "Do not allow service account with INVALID_DESCRIPTION to be created."]
Identity and Access Management supported resources and operations
The following service account and service account key custom constraint fields are available to use when you create or update an account or key.
Service accounts
resource.description
resource.displayName
resource.name
Format: projects/ PROJECT_ID /serviceAccounts/ UNIQUE_ID
Service account keys
resource.keyOrigin
resource.keyType
resource.name
Format: projects/ PROJECT_ID /serviceAccounts/ UNIQUE_ID /keys/ KEY_ID
Example custom organization policies for common use cases
The following table provides the syntax of some custom constraints for common use cases:
For more information about CEL macros available for use in custom constraint conditions, see
Common Expression Language .
Description
Constraint syntax
Disable service account creation.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableServiceAccountCreation
resourceTypes :
- iam.googleapis.com/ServiceAccount
methodTypes :
- CREATE
condition : "True"
actionType : DENY
displayName : Deny all service account creation.
Disable service account key creation.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableServiceAccountKeyCreation
resourceTypes :
- iam.googleapis.com/ServiceAccountKey
methodTypes :
- CREATE
condition : "resource.keyType == USER_MANAGED && resource.keyOrigin == GOOGLE_PROVIDED"
actionType : DENY
displayName : Deny all service account key creation.
Disable service account key upload.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableServiceAccountKeyUpload
resourceTypes :
- iam.googleapis.com/ServiceAccountKey
methodTypes :
- CREATE
condition : "resource.keyType == USER_MANAGED && resource.keyOrigin == USER_PROVIDED"
actionType : DENY
displayName : Deny all service account key uploads.
What's next
See Introduction to the Organization Policy Service to learn more about organization policies.
Learn more about how to create and manage organization policies .
See the full list of predefined organization policy constraints .
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
