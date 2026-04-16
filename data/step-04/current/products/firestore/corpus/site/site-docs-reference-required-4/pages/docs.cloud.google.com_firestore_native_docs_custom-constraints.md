---
title: "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\
  \ mode \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/native/docs/custom-constraints
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/native/docs/custom-constraints
  title: "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\
    \ mode \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore in Native mode
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage Firestore resources using custom constraints
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
firestore.googleapis.com/Database
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
Security, compliance, and governance : you can use custom organization
policies as follows:
To enforce disaster recovery requirements, you can require specific
disaster recovery settings on databases like delete protection, and
point in time recovery.
You can restrict database creation to only certain locations.
You can require CMEK (Customer Managed Encryption Key) for databases.
Auditing : Custom org policy constraints are audit logged. Any operation including constraint modifications and constraint checks will generate corresponding Cloud Audit Logs.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage custom organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
Console
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
numbers, for example custom.deleteProtectionRequired . This field can contain up to
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
gcloud
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
or numbers, for example, custom.deleteProtectionRequired . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
firestore.googleapis.com/Database . Most resource types support up to 20 custom
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
"resource.deleteProtectionState == \"DELETE_PROTECTION_ENABLED\"" .
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
Console
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
gcloud
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
example, custom.deleteProtectionRequired .
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
Before you begin, you must know the following:
Your organization ID
Create the deleteProtectionRequired.yaml file as follows:
name : organizations/ ORGANIZATION_ID /customConstraints/custom.deleteProtectionRequired
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.deleteProtectionState == \"DELETE_PROTECTION_ENABLED\""
actionType : ALLOW
displayName : Firestore Delete Protection Required
description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
This ensures that all CREATE and UPDATE methods on a Firestore
database meet the constraint of deleteProtectionState being
DELETE_PROTECTION_ENABLED . As a result, any databases
create/update/restore/clone operations without explicitly enabling
Delete Protection are rejected.
Set up the custom constraint at the organization level:
gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml
Test the policy
Try to create a database without setting the --delete-protection flag in a
project in the organization:
gcloud firestore database create \
--project = PROJECT_ID \
--database = DATABASE_ID \
The output is the following:
Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"]
Test and analyze organization policy changes
We recommend that you test and dry-run all changes to your
organization policies, to better understand the state of your environment and
how changes affect it.
Policy Simulator for Organization Policy helps you understand the effect of a
constraint and organization policy on your current environment. Using this tool,
you can review all resource configurations to see where violations occur, before
it is enforced on your production environment. For detailed instructions, see
Test organization policy changes with Policy Simulator .
When you understand the current effect, you can create an organization policy
in dry-run mode to understand the impact and potential violations of a policy
over the next 30 days. An organization policy in dry-run mode is a type of
organization policy where violations of the policy are audit-logged, but the
violating actions aren't denied. You can create an organization policy in
dry-run mode from a custom constraint using the Google Cloud console or
Google Cloud CLI. For detailed instructions, see
Create an organization policy in dry-run mode .
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Database names must follow a certain pattern. Note that the format
of a database name in custom organization policies is
projects/ project-id /databases/ database-id while only database-id is specified in database management operations.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.nameSuffixMobile
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
condition : "resource.name.endsWith('-mobile')"
actionType : ALLOW
displayName : Firestore database names end with "-mobile"
description : Only allow the creation of database names ending with suffix "-mobile"
Databases can only be created in specified locations .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.locationUsCentral1
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
condition : "resource.locationId == 'us-central1'"
actionType : ALLOW
displayName : Firestore database location id us-central1
description : Only allow the creation of databases in region us-central1
Databases must be of the specified type .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.typeFirestore
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.type==" FIRESTORE_NATIVE""
actionType : ALLOW
displayName : Firestore database type Firestore_Native
description : Only allow creation and updating of databases if the type is Firestore in native mode.
Databases must use the specified concurrency mode .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.concurrencyNotPessimistic
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.concurrencyMode == 'PESSIMISTIC'"
actionType : DENY
displayName : Firestore database concurrencyMode not pessimistic
description : Disallow the creation and updating of databases with pessimistic concurrency mode.
Databases must enable point-in-time-recovery .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.pitrEnforce
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.pointInTimeRecoveryEnablement == " POINT_IN_TIME_RECOVERY_ENABLED""
actionType : ALLOW
displayName : Firestore database enables PiTR
description : Only allow the creation and updating of a databases if PiTR is enabled.
Databases must use the specified App Engine integration mode .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enableAppEngineIntegrationMode
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.appEngineIntegrationMode == 'ENABLED'"
actionType : ALLOW
displayName : Firestore Database App Engine integration mode enabled
description : Only allow the creation and updating of databases with App Engine Integration Mode enabled.
Don't allow creation of databases unless delete protection is enabled.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.deleteProtectionRequired
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.deleteProtectionState == " DELETE_PROTECTION_ENABLED""
actionType : ALLOW
displayName : Firestore Delete Protection Required
description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
Databases must use the specified CMEK (Customer Managed Encryption Key) configuration .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.cmekKeyNotDev
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.cmekConfig.kmsKeyName.matches('dev$')"
actionType : DENY
displayName : Firestore database CMEK key not dev
description : Disallow the creation and updating of databases with CMEK KMS keys ending with "dev".
Databases must use the specified Database Edition .
name : organizations/ ORGANIZATION_ID /customConstraints/custom.standardEditionRequired
resourceTypes :
- firestore.googleapis.com/Database
methodTypes :
- CREATE
- UPDATE
condition : "resource.databaseEdition == " STANDARD""
actionType : ALLOW
displayName : Firestore Standard Edition Required
description : Only allow the creation and updating of databases with Standard Edition.
Firestore supported resources
The following table lists the Firestore resources that you can reference
in custom constraints.
Resource
Field
firestore.googleapis.com/Database
resource.appEngineIntegrationMode
resource.cmekConfig.kmsKeyName
resource.concurrencyMode
resource.deleteProtectionState
resource.locationId
resource.name
resource.pointInTimeRecoveryEnablement
resource.type
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
