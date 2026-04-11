---
title: "Manage Dataplex Universal Catalog resources using custom constraints \_|\_\
  \ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints
  title: "Manage Dataplex Universal Catalog resources using custom constraints \_\
    |\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Manage Dataplex Universal Catalog resources using custom constraints
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
dataplex.googleapis.com/AspectType
dataplex.googleapis.com/EntryType
dataplex.googleapis.com/EntryGroup
dataplex.googleapis.com/DataScan
dataplex.googleapis.com/MetadataJob
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
Limitations
Custom constraints and organization policies aren't supported on the following resources:
dataplex.googleapis.com/Lake
dataplex.googleapis.com/Zone
dataplex.googleapis.com/Task
dataplex.googleapis.com/Asset
dataplex.googleapis.com/Environment
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
numbers, for example custom.denyDataplexEntryGroup . This field can contain up to
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
or numbers, for example, custom.denyDataplexEntryGroup . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
dataplex.googleapis.com/EntryGroup . Most resource types support up to 20 custom
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
"resource.description.contains('invalid_name')" .
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
example, custom.denyDataplexEntryGroup .
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
The following example creates a custom constraint and policy that restricts
users from creating entry groups in a specific project where the entry group's
description contains the text invalid_name .
Before you begin, you must know the following:
Your organization ID
A project ID
Create the constraint
Save the following file as constraint-valid-entry-groups.yaml :
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyDataplexEntryGroup
resourceTypes :
- dataplex.googleapis.com/EntryGroup
methodTypes :
- CREATE
condition : "resource.description.contains('invalid_name')"
actionType : DENY
displayName : Validate entry group description
description : All new entry groups have valid descriptions.
This defines a constraint where for every new entry group, if the
description contains the text invalid_name , the operation is denied.
Apply the constraint:
gcloud org-policies set-custom-constraint ~/constraint-valid-entry-groups.yaml
Verify that the constraint exists:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
The output is similar to the following:
CUSTOM_CONSTRAINT ACTION_TYPE METHOD_TYPES RESOURCE_TYPES DISPLAY_NAME
custom.denyDataplexEntryGroup DENY CREATE dataplex.googleapis.com/EntryGroup Validate Entry Group description
...
Create the policy
Save the following file as policy-deny-entry-group.yaml :
name : projects/ PROJECT_ID /policies/custom.denyDataplexEntryGroup
spec :
rules :
- enforce : true
Replace PROJECT_ID with your project ID.
Apply the policy:
gcloud org-policies set-policy ~/policy-deny-entry-group.yaml
Verify that the policy exists:
gcloud org-policies list --project = PROJECT_ID
The output is similar to the following:
CONSTRAINT LIST_POLICY BOOLEAN_POLICY ETAG
custom.denyDataplexEntryGroup - SET COCsm5QGENiXi2E=
After you apply the policy, wait for about 15 minutes for Google Cloud to
start enforcing the policy.
Test the policy
Try to create an entry group in the project:
gcloud dataplex entry-groups create org-policy-test \
--project = PROJECT_ID \
--location = LOCATION \
--display-name = DISPLAY_NAME \
--description = 'invalid_name'
The operation is denied. The output is the following:
Operation denied by custom org policy on resource 'projects/ PROJECT_ID /locations/ LOCATION /entryGroups/org-policy-test': ["customConstraints/custom.denyDataplexEntryGroup"]
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Require a specific aspect type for entry types
name : organizations/ ORGANIZATION_ID /customConstraints/custom.requireAspectTypeForEntryType
resourceTypes :
- dataplex.googleapis.com/EntryType
methodTypes :
- CREATE
- UPDATE
condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT_ID /locations/ LOCATION /aspectTypes/exampleAspectType")
actionType : DENY
displayName : All entry types require aspect type exampleAspectType
description : All entry types require the aspect type exampleAspectType
Require a minimum sampling rate for data profiling scans
name : organizations/ ORGANIZATION_ID /customConstraints/custom.minimumSamplingDataScans
resourceTypes :
- dataplex.googleapis.com/DataScan
methodTypes :
- CREATE
- UPDATE
condition : "resource.dataProfileSpec.samplingPercent > = 20.0"
actionType : ALLOW
displayName : Require minimum sampling for data profiling scans
description : All data profiling scans need at least 20% sampling rate
Dataplex Universal Catalog supported resources
The following table lists the Dataplex Universal Catalog resources that you can reference
in custom constraints.
Resource
Field
dataplex.googleapis.com/AspectType
resource.authorization.alternateUsePermission
resource.description
resource.displayName
resource.metadataTemplate.annotations.deprecated
resource.metadataTemplate.annotations.description
resource.metadataTemplate.annotations.displayName
resource.metadataTemplate.annotations.displayOrder
resource.metadataTemplate.annotations.stringType
resource.metadataTemplate.annotations.stringValues
resource.metadataTemplate.constraints.required
resource.metadataTemplate.enumValues.deprecated
resource.metadataTemplate.enumValues.index
resource.metadataTemplate.enumValues.name
resource.metadataTemplate.index
resource.metadataTemplate.name
resource.metadataTemplate.type
resource.metadataTemplate.typeId
resource.metadataTemplate.typeRef
dataplex.googleapis.com/DataScan
resource.data.entity
resource.data.resource
resource.dataDiscoverySpec.bigqueryPublishingConfig.connection
resource.dataDiscoverySpec.bigqueryPublishingConfig.location
resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType
resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter
resource.dataDiscoverySpec.storageConfig.csvOptions.encoding
resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows
resource.dataDiscoverySpec.storageConfig.csvOptions.quote
resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled
resource.dataDiscoverySpec.storageConfig.excludePatterns
resource.dataDiscoverySpec.storageConfig.includePatterns
resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding
resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled
resource.dataProfileSpec.excludeFields.fieldNames
resource.dataProfileSpec.includeFields.fieldNames
resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable
resource.dataProfileSpec.rowFilter
resource.dataProfileSpec.samplingPercent
resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable
resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails
resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold
resource.dataQualitySpec.rowFilter
resource.dataQualitySpec.rules.column
resource.dataQualitySpec.rules.description
resource.dataQualitySpec.rules.dimension
resource.dataQualitySpec.rules.ignoreNull
resource.dataQualitySpec.rules.name
resource.dataQualitySpec.rules.rangeExpectation.maxValue
resource.dataQualitySpec.rules.rangeExpectation.minValue
resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled
resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled
resource.dataQualitySpec.rules.regexExpectation.regex
resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression
resource.dataQualitySpec.rules.setExpectation.values
resource.dataQualitySpec.rules.sqlAssertion.sqlStatement
resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue
resource.dataQualitySpec.rules.statisticRangeExpectation.minValue
resource.dataQualitySpec.rules.statisticRangeExpectation.statistic
resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled
resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled
resource.dataQualitySpec.rules.suspended
resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression
resource.dataQualitySpec.rules.threshold
resource.dataQualitySpec.samplingPercent
resource.description
resource.displayName
resource.executionSpec.field
resource.executionSpec.trigger.schedule.cron
dataplex.googleapis.com/EntryGroup
resource.description
resource.displayName
dataplex.googleapis.com/EntryType
resource.authorization.alternateUsePermission
resource.description
resource.displayName
resource.platform
resource.requiredAspects.type
resource.system
resource.typeAliases
dataplex.googleapis.com/MetadataJob
resource.exportSpec.outputPath
resource.exportSpec.scope.aspectTypes
resource.exportSpec.scope.entryGroups
resource.exportSpec.scope.entryTypes
resource.exportSpec.scope.organizationLevel
resource.exportSpec.scope.projects
resource.importSpec.aspectSyncMode
resource.importSpec.entrySyncMode
resource.importSpec.logLevel
resource.importSpec.scope.aspectTypes
resource.importSpec.scope.entryGroups
resource.importSpec.scope.entryTypes
resource.importSpec.sourceCreateTime
resource.importSpec.sourceStorageUri
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
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
