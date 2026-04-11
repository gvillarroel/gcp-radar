---
title: "Manage data lineage resources using custom constraints \_|\_ Knowledge Catalog\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints
  title: "Manage data lineage resources using custom constraints \_|\_ Knowledge Catalog\
    \ \_|\_ Google Cloud Documentation"
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
Manage data lineage resources using custom constraints
Stay organized with collections
Save and categorize content based on your preferences.
You can use Google Cloud Organization Policy custom constraints to
restrict specific operations on data lineage resources. Although
Organization Policy provides predefined constraints for various
Google Cloud services, custom constraints let you to define granular
control over specific fields in your organization policies.
About Google Cloud Organization Policy
Google Cloud Organization Policy gives you centralized, programmatic
control over your organization's resources. As the organization policy
administrator, you can define an organization policy, which is a set of
restrictions called constraints that apply to Google Cloud resources and
descendants of those resources in the
Google Cloud resource hierarchy .
You can enforce organization policies at the organization, folder, or project level.
Benefits
Custom organization policies provide more granular, customizable control over
the specific fields that are restricted in your organization policies.
You can use a custom organization policy to allow or deny the creation of
data lineage processes with conditions based on supported resource
attributes, such as process name, source type, and origin.
For more information, see
predefined constraints .
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Pricing
The Organization Policy Service, including predefined and custom organization policies, is
offered at no charge.
Limitations
Custom constraints can be enforced only for data lineage Process resources. Other resources, such as Runs and Events , aren't supported.
Newly enforced custom constraints don't apply to existing resources.
Before you begin
Ensure that you know your organization
ID .
If you want to test custom organization policies that reference
data lineage resources, create a new project. Testing these
organization policies in an existing project could disrupt security
workflows.
Ensure that you have the Project Creator IAM role
( roles/resourcemanager.projectCreator ). Learn how to grant
roles .
In the Google Cloud console, go to the project selector page.
Go to project selector
Click Create project .
Name your project. Make a note of your generated project ID.
Edit the other fields as needed.
Click Create .
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
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
- datalineage.googleapis.com/ RESOURCE_TYPE
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
only include uppercase letters, lowercase letters, or numbers—for
example, custom.denyLineageProcess . The maximum length of this field is 70
characters, not counting the prefix—for example,
organizations/123456789/customConstraints/custom .
RESOURCE_TYPE : the name (not the URI) of the
Data Lineage API REST resource containing the object and field
you want to restrict. For data lineage only Process is available.
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This
field has a maximum length of 1000 characters. See
Supported resources for more information about the
resources available to write conditions against. For example,
"resource.name.contains('invalid_name')".
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
numbers, for example custom.denyLineageProcess . This field can contain up to
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
or numbers, for example, custom.denyLineageProcess . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
datalineage.googleapis.com/Process . Most resource types support up to 20 custom
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
"resource.name.contains('invalid_name')" .
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
example, custom.denyLineageProcess .
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
This section describes how to test an organization policy constraint that restricts users from creating a data lineage process with a name that contains the text invalid_name .
If you want to test this custom constraint, do the following:
Create a new project, as described in the Before you begin section.
Copy the following constraint into a YAML file:
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyLineageProcess
resourceTypes : datalineage.googleapis.com/Process
methodTypes :
- CREATE
- UPDATE
condition :
"resource.name.contains('invalid_name')"
actionType : DENY
displayName : Do not allow data lineage process with 'invalid_name' to be created.
Replace ORGANIZATION_ID with the numeric ID of your
Google Cloud organization.
Set up the custom constraint and
enforce it for the project that you created
to test the custom organization policy constraint.
Create a process with the name that you included in the custom constraint.
curl -s -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application.json" \
"https://datalineage.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /processes" \
-d '{"name":"projects/ PROJECT_ID /locations/ LOCATION /processes/invalid_name"}'
Replace the following:
PROJECT_ID : ID of the project where the process is created. It must be in the same organization that the constraint is defined in.
LOCATION : Google Cloud region where the process is created.
The output is the following:
Operation denied by org policy on resource 'projects/ PROJECT_ID /locations/ LOCATION ': ["customConstraints/custom.denyLineageProcess"]
Data lineage supported resources and operations
The following custom constraint fields are available to use when you create or update a data lineage process:
resource.name
resource.displayName
resource.origin.name
resource.origin.sourceType
Custom constraints are checked for the following methods:
CreateProcess
UpdateProcess
ProcessopenLineageRunEvent
Example custom organization policies for common use cases
The following table provides the syntax of some custom constraints for common use cases:
For more information about CEL macros available for use in custom constraint conditions, see
Common Expression Language .
Use case
Constraint syntax
Disable the creation of data lineage processes
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyLineageProcessesCreation
resourceTypes :
- datalineage.googleapis.com/Process
methodTypes :
- CREATE
condition : "True"
actionType : DENY
displayName : Deny creation of all data lineage processes.
Disable the creation of data lineage processes by BigQuery or Managed Service for Apache Spark
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyLineageProcessesCreation
resourceTypes :
- datalineage.googleapis.com/Process
methodTypes :
- CREATE
condition : "resource.origin.sourceType == 'BIGQUERY' || resource.origin.sourceType == 'DATAPROC'"
actionType : DENY
displayName : Deny data lineage processes created by BigQuery or Managed Service for Apache Spark.
Disable data lineage processes with the specified name
name : organizations/ ORGANIZATION_ID /customConstraints/custom.denyLineageProcessesCreation
resourceTypes :
- datalineage.googleapis.com/Process
methodTypes :
- CREATE
- UPDATE
condition : "resource.name.contains(' RESTRICTED_NAME ')"
actionType : DENY
displayName : Deny data lineage processes whose name contains RESTRICTED_NAME .
What's next
See Introduction to the Organization Policy Service to learn more about organization policies.
Learn more about how to create and manage organization policies .
See the full list of predefined organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
