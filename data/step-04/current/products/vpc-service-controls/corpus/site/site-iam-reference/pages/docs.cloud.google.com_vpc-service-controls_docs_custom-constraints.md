---
title: "Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints
  title: "Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Create custom constraints for VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
accesscontextmanager.googleapis.com/AccessPolicy
accesscontextmanager.googleapis.com/AccessLevel
accesscontextmanager.googleapis.com/AuthorizedOrgsDesc
accesscontextmanager.googleapis.com/ServicePerimeter
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
numbers, for example custom.disableCustomAccessLevels . This field can contain up to
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
or numbers, for example, custom.disableCustomAccessLevels . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
accesscontextmanager.googleapis.com/AccessLevel . Most resource types support up to 20 custom
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
"resource.basic.conditions.exists(c, has(c.devicePolicy))" .
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
example, custom.disableCustomAccessLevels .
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
The following example creates a custom constraint and policy that denies all
basic access levels in a specific organization that uses the devicePolicy
attribute.
Before you begin, you should know the following:
Your organization ID
A project ID
Create a custom constraint
Save the following file as constraint-disable_custom_access_level.yaml :
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableCustomAccessLevels
resourceTypes :
- accesscontextmanager.googleapis.com/AccessLevel
methodTypes :
- CREATE
- UPDATE
condition : "resource.basic.conditions.exists(c, has(c.devicePolicy))"
actionType : DENY
displayName : Deny basic access levels using `devicePolicy`
description : Basic access levels must not use the `devicePolicy` attribute.
Replace ORGANIZATION_ID with your organization ID.
This defines a constraint that only allows the creation of basic access
levels and denies the creation of custom access levels.
Apply the constraint:
gcloud org-policies set-custom-constraint ~/constraint-disable_custom_access_level.yaml
Verify that the constraint exists:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
The output is similar to the following:
CUSTOM_CONSTRAINT ACTION_TYPE METHOD_TYPES RESOURCE_TYPES DISPLAY_NAME
custom.disableCustomAccessLevels DENY CREATE accesscontextmanager.googleapis.com/AccessLevel Deny basic access levels using `devicePolicy`
...
Create the policy
Save the following file as policy-disable_custom_access_level.yaml :
name : organizations/ ORGANIZATION_ID /policies/custom.disableCustomAccessLevels
spec :
rules :
- enforce : true
Replace ORGANIZATION_ID with your organization ID.
Apply the policy:
gcloud org-policies set-policy ~/policy-disable_custom_access_level.yaml
Verify that the policy exists:
gcloud org-policies list --organization = ORGANIZATION_ID
The output is similar to the following:
CONSTRAINT LIST_POLICY BOOLEAN_POLICY ETAG
custom.disableCustomAccessLevels - SET COCsm5QGENiXi2E=
After you apply the policy, wait for about two minutes for Google Cloud to
start enforcing the policy.
Test the policy
Save the following access level specification file as example_access_level.yaml :
- devicePolicy :
requireScreenlock : true
Create an access level:
gcloud access-context-manager levels create ACCESS_LEVEL_NAME --policy = ACCESS_POLICY_ID --title = ACCESS_LEVEL_TITLE --basic-level-spec = example_access_level.yaml
Replace the following:
ACCESS_LEVEL_NAME : A unique name for the access level.
ACCESS_POLICY_ID : The ID of your organization's access policy.
ACCESS_LEVEL_TITLE : A short title for the access level.
For more information about creating a basic access level, see Create a basic access level .
The output is similar to the following:
ERROR: (gcloud.access-context-manager.levels.create) [ USER ] does not have permission to access accessPolicies instance [ ACCESS_POLICY_ID ] (or it may not exist): The caller does not have permission. This command is authenticated as USER which is the active account specified by the [core/account] property
'@type': type.googleapis.com/google.rpc.DebugInfo
detail: '[ORIGINAL ERROR] generic::permission_denied: com.google.apps.framework.request.ForbiddenException:
The user is not authorized!'
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Disable scoped policies
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableScopedPolicies
resourceTypes :
- accesscontextmanager.googleapis.com/AccessPolicy
methodTypes :
- CREATE
- UPDATE
condition : "size(resource.scopes) == 0"
actionType : DENY
displayName : Disable scoped policies
description : Disables the creation of scoped policies.
Disable custom access levels
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyBasicAccessLevels
resourceTypes :
- accesscontextmanager.googleapis.com/AccessLevel
methodTypes :
- CREATE
- UPDATE
condition : "has(resource.custom)"
actionType : ALLOW
displayName : Disable custom access levels
description : Disables the creation of custom access levels. Allows only basic access levels.
Disable region_code in custom access levels
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyRegionCode
resourceTypes :
- accesscontextmanager.googleapis.com/AccessLevel
methodTypes :
- CREATE
- UPDATE
condition : "resource.custom.expr.expression.contains('region_code')"
actionType : DENY
displayName : Disable region_code in custom access levels
description : Disables the use of region_code attribute in custom access levels.
Enforce verbose description for access levels
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enforseVerboseDescriptioninAccessLevels
resourceTypes :
- accesscontextmanager.googleapis.com/AccessLevel
methodTypes :
- CREATE
- UPDATE
condition : "size(resource.description) < 50"
actionType : DENY
displayName : Enforce access level descriptions to have at least 50 characters
description : Denies access levels with a short description. The access level description must be at least 50 characters long.
Disable perimeter bridges
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyBridgePerimeters
resourceTypes :
- accesscontextmanager.googleapis.com/ServicePerimeter
methodTypes :
- CREATE
- UPDATE
condition : "resource.perimeterType == 'PERIMETER_TYPE_BRIDGE'"
actionType : DENY
displayName : Disable perimeter bridges
description : Disables the use of perimeter bridges. Instead, use ingress and egress rules.
VPC Service Controls supported resources
The following table lists the VPC Service Controls resources that you can reference
in custom constraints.
Resource
Field
accesscontextmanager.googleapis.com/AccessLevel
resource.basic.combiningFunction
resource.basic.conditions.devicePolicy.allowedDeviceManagementLevels
resource.basic.conditions.devicePolicy.allowedEncryptionStatuses
resource.basic.conditions.devicePolicy.osConstraints.minimumVersion
resource.basic.conditions.devicePolicy.osConstraints.osType
resource.basic.conditions.devicePolicy.osConstraints.requireVerifiedChromeOs
resource.basic.conditions.devicePolicy.requireAdminApproval
resource.basic.conditions.devicePolicy.requireCorpOwned
resource.basic.conditions.devicePolicy.requireScreenlock
resource.basic.conditions.ipSubnetworks
resource.basic.conditions.members
resource.basic.conditions.negate
resource.basic.conditions.regions
resource.basic.conditions.requiredAccessLevels
resource.custom.expr
resource.description
resource.title
accesscontextmanager.googleapis.com/AccessPolicy
resource.parent
resource.scopes
resource.title
accesscontextmanager.googleapis.com/AuthorizedOrgsDesc
resource.assetType
resource.authorizationDirection
resource.authorizationType
resource.orgs
accesscontextmanager.googleapis.com/ServicePerimeter
resource.description
resource.perimeterType
resource.spec.accessLevels
resource.spec.egressPolicies.egressFrom.identities
resource.spec.egressPolicies.egressFrom.identityType
resource.spec.egressPolicies.egressFrom.sourceRestriction
resource.spec.egressPolicies.egressTo.externalResources
resource.spec.egressPolicies.egressTo.operations.methodSelectors.method
resource.spec.egressPolicies.egressTo.operations.methodSelectors.permission
resource.spec.egressPolicies.egressTo.operations.serviceName
resource.spec.egressPolicies.egressTo.resources
resource.spec.ingressPolicies.ingressFrom.identities
resource.spec.ingressPolicies.ingressFrom.identityType
resource.spec.ingressPolicies.ingressFrom.sources.accessLevel
resource.spec.ingressPolicies.ingressFrom.sources.resource
resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.method
resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.permission
resource.spec.ingressPolicies.ingressTo.operations.serviceName
resource.spec.ingressPolicies.ingressTo.resources
resource.spec.resources
resource.spec.restrictedServices
resource.spec.vpcAccessibleServices.allowedServices
resource.spec.vpcAccessibleServices.enableRestriction
resource.status.accessLevels
resource.status.egressPolicies.egressFrom.identities
resource.status.egressPolicies.egressFrom.identityType
resource.status.egressPolicies.egressFrom.sourceRestriction
resource.status.egressPolicies.egressTo.externalResources
resource.status.egressPolicies.egressTo.operations.methodSelectors.method
resource.status.egressPolicies.egressTo.operations.methodSelectors.permission
resource.status.egressPolicies.egressTo.operations.serviceName
resource.status.egressPolicies.egressTo.resources
resource.status.ingressPolicies.ingressFrom.identities
resource.status.ingressPolicies.ingressFrom.identityType
resource.status.ingressPolicies.ingressFrom.sources.accessLevel
resource.status.ingressPolicies.ingressFrom.sources.resource
resource.status.ingressPolicies.ingressTo.operations.methodSelectors.method
resource.status.ingressPolicies.ingressTo.operations.methodSelectors.permission
resource.status.ingressPolicies.ingressTo.operations.serviceName
resource.status.ingressPolicies.ingressTo.resources
resource.status.resources
resource.status.restrictedServices
resource.status.vpcAccessibleServices.allowedServices
resource.status.vpcAccessibleServices.enableRestriction
resource.title
resource.useExplicitDryRunSpec
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
