---
title: "Create custom organization policy constraints \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/create-custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-3/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/create-custom-constraints
  title: "Create custom organization policy constraints \_|\_ Cloud Composer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
Create custom organization policy constraints
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
composer.googleapis.com/Environment
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
You can use custom organization policies to allow or deny specific values
for Cloud Composer resources. For example, if a request to create or
update a Cloud Composer environment fails to satisfy custom
constraint validation as set by your organization policy, the request fails
and an error will be returned to the caller. Additionally, use of custom
organization policies:
Improves security. For example, you can define policies that forbid the
creation of public IPs environments, enable privately used public IP
addresses, or specify the usage of a specific network and subnetwork.
Provides granular control over resources that are being created or used when
creating or updating an environment.
Limitations
Like all organization policy constraints, policy changes don't apply
retroactively to existing instances.
A new policy doesn't impact existing instance configurations.
An existing instance configuration remains valid, unless
you change it from a compliant to non-compliant value using the
Google Cloud console, Google Cloud CLI, or RPC.
Before enforcing custom organization policies on the resource's UPDATE method
type, make sure that existing environments are compliant with each policy.
Because one update operation can update only one field, a deadlock can occur if
several fields of an existing environment are violating the policies at the
same time.
To avoid the deadlock, do one of the following:
(Recommended) Make all existing environments compliant with a policy before
enforcing the policy on the resources. To check which of the existing
environments won't be compliant after the enforcement of the policy, you
can use the
policy simulator .
Disable the enforcement of the policy, update existing environments to the
compliant state, and re-enforce the policy.
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
numbers, for example custom.restrictEnvironmentSize . This field can contain up to
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
or numbers, for example, custom.restrictEnvironmentSize . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
composer.googleapis.com/Environment . Most resource types support up to 20 custom
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
resource.config.environmentSize == "ENVIRONMENT_SIZE_SMALL" .
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
example, custom.restrictEnvironmentSize .
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
The following example creates a custom constraint and policy
that allows only small Cloud Composer environments.
Before you begin, you should know the following:
Your organization ID
Your project ID
Create the constraint
Save the following file as constraint-require-only-small-environments.yaml :
name : organizations/ ORGANIZATION_ID /customConstraints/custom.restrictEnvironmentSize
resourceTypes :
- composer.googleapis.com/Environment
methodTypes :
- CREATE
condition : resource.config.environmentSize == "ENVIRONMENT_SIZE_SMALL"
actionType : ALLOW
displayName : Only allow small Composer environments.
description : All environments must be small.
Apply the constraint:
gcloud org-policies set-custom-constraint constraint-require-only-small-environments.yaml
Create the policy
Save the following file as policy-require-only-small-environments.yaml :
name : projects/ PROJECT_ID /policies/custom.restrictEnvironmentSize
spec :
rules :
- enforce : true
Apply the policy:
gcloud org-policies set-policy policy-require-only-small-environments.yaml
After you apply the policy, wait for about two minutes for Google Cloud
to start enforcing the policy.
Test the policy
gcloud composer environments create ENVIRONMENT_NAME \
--location = LOCATION \
--image-version = "composer-3-airflow-2.10.5-build.33" \
--environment-size = medium
This environment creation fails because of the constraint in place that requires
only small Composer environment size.
The output is similar to the following:
You can't perform this action on a Composer environment due to Custom Organization Policy constraints set on your project. The following constraint(s) were violated: ["customConstraints/custom.restrictEnvironmentSize": All environments must be small.]
To address the previous error, create a small-sized environment. For example:
gcloud composer environments create ENVIRONMENT_NAME \
--location = LOCATION \
--image-version = "composer-3-airflow-2.10.5-build.33" \
--environment-size = small
The environment creation is successfully started.
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Allow only private IP Cloud Composer environments
name : organizations/ ORGANIZATION_ID /customConstraints/custom.allowOnlyPrivateIp
resourceTypes :
- composer.googleapis.com/Environment
methodTypes :
- CREATE
condition : resource.config.privateEnvironmentConfig.enablePrivateEnvironment == true
actionType : ALLOW
displayName : Only Private IP environments
description : All environments must use Private IP networking
The maximum count of the workers must be 10 or less
name : organizations/ ORGANIZATION_ID /customConstraints/custom.restrictMaxWorketCount
resourceTypes :
- composer.googleapis.com/Environment
methodTypes :
- CREATE
- UPDATE
condition : resource.config.workloadsConfig.worker.maxCount <= 10
actionType : ALLOW
displayName : Limit the maximum number of workers
description : All environments must have 10 or less workers
Cloud Composer supported resources
The following table lists the Cloud Composer resources that you can reference
in custom constraints.
Resource
Field
composer.googleapis.com/Environment
resource.config.environmentSize
resource.config.maintenanceWindow.recurrence
resource.config.masterAuthorizedNetworksConfig.enabled
resource.config.nodeConfig.enableIpMasqAgent
resource.config.nodeConfig.network
resource.config.nodeConfig.serviceAccount
resource.config.nodeConfig.subnetwork
resource.config.privateEnvironmentConfig.cloudComposerConnectionSubnetwork
resource.config.privateEnvironmentConfig.enablePrivateBuildsOnly
resource.config.privateEnvironmentConfig.enablePrivateEnvironment
resource.config.privateEnvironmentConfig.enablePrivatelyUsedPublicIps
resource.config.privateEnvironmentConfig.networkingConfig.connectionType
resource.config.privateEnvironmentConfig.privateClusterConfig.enablePrivateEndpoint
resource.config.recoveryConfig.scheduledSnapshotsConfig.enabled
resource.config.recoveryConfig.scheduledSnapshotsConfig.snapshotCreationSchedule
resource.config.recoveryConfig.scheduledSnapshotsConfig.snapshotLocation
resource.config.recoveryConfig.scheduledSnapshotsConfig.timeZone
resource.config.resilienceMode
resource.config.softwareConfig.cloudDataLineageIntegration.enabled
resource.config.softwareConfig.imageVersion
resource.config.softwareConfig.webServerPluginsMode
resource.config.workloadsConfig.dagProcessor.count
resource.config.workloadsConfig.dagProcessor.cpu
resource.config.workloadsConfig.dagProcessor.memoryGb
resource.config.workloadsConfig.dagProcessor.storageGb
resource.config.workloadsConfig.scheduler.count
resource.config.workloadsConfig.scheduler.cpu
resource.config.workloadsConfig.scheduler.memoryGb
resource.config.workloadsConfig.scheduler.storageGb
resource.config.workloadsConfig.triggerer.count
resource.config.workloadsConfig.triggerer.cpu
resource.config.workloadsConfig.triggerer.memoryGb
resource.config.workloadsConfig.webServer.cpu
resource.config.workloadsConfig.webServer.memoryGb
resource.config.workloadsConfig.webServer.storageGb
resource.config.workloadsConfig.worker.cpu
resource.config.workloadsConfig.worker.maxCount
resource.config.workloadsConfig.worker.memoryGb
resource.config.workloadsConfig.worker.minCount
resource.config.workloadsConfig.worker.storageGb
resource.name
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
