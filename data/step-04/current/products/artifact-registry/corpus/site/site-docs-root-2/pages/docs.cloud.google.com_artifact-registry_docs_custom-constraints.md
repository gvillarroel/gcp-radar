---
title: "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/custom-constraints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/custom-constraints
  title: "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Use custom organization policies
Stay organized with collections
Save and categorize content based on your preferences.
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
Security, compliance, and governance : you can use custom organization
policies as follows:
To enforce security requirements, you can enforce the use of
customer-managed encryption keys (CMEK).
You can restrict any field that is passed when you create or update a
repository.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Pricing
The Organization Policy Service, including predefined and custom organization policies, is
offered at no charge.
Before you begin
Enable Artifact Registry and install the Google Cloud CLI.
(Optional) Configure defaults for gcloud CLI commands .
If you require customer-managed-encryption keys (CMEK) to
encrypt repository content, create and enable a key in
Cloud KMS for the repository.
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
following IAM roles:
Organization policy administrator ( roles/orgpolicy.policyAdmin )
on the organization resource
To test your organization policy:
Artifact Registry Admin ( roles/artifactregistry.admin )
on the organization resource
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
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
Artifact Registry supports custom constraints that are applied to the
CREATE and UPDATE methods of the REPOSITORY resource.
Create a YAML file for a custom constraint similar to the following:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes :
- artifactregistry.googleapis.com/Repository
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
example, custom.enableDockerRemotes. The maximum length of this field is 70
characters, not counting the prefix—for example,
organizations/123456789/customConstraints/custom.enableDockerRemotes .
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This
field has a maximum length of 1000 characters. See
Supported resources for more information about the
resources available to write conditions against—for example,
(resource.mode == 'REMOTE' && resource.format == 'DOCKER') || (resource.mode != 'REMOTE') .
ACTION : the action to take if the condition is
met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
DESCRIPTION : a human-friendly description of the
constraint to display as an error message when the policy is violated. This
field has a maximum length of 2000 characters—for example All remote
repositories must be Docker format.
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
numbers, for example custom.enableDockerRemotes . This field can contain up to
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
gcloud
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
or numbers, for example, custom.enableDockerRemotes . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
artifactregistry.googleapis.com/Repository . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can only be
CREATE .
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
(resource.mode == 'REMOTE' && resource.format == 'DOCKER') || (resource.mode != 'REMOTE') .
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
example, custom.enableDockerRemotes .
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
The following remote repository creation example assumes that a custom
organization policy has been created and enforced on repository creation to only
allow the creation of Docker-format remote repositories.
Try to create a Python remote repository in the project:
gcloud artifacts repositories create REMOTE-REPOSITORY-NAME \
--project = PROJECT_ID \
--repository-format = python \
--location = LOCATION \
--description = " DESCRIPTION " \
--mode = remote-repository \
--remote-repo-config-desc = " REMOTE-REPOSITORY-DESCRIPTION " \
--disable-vulnerability-scanning \
--remote-python-repo = UPSTREAM
Optional flags for authenticating to the upstream repository:
--remote-username= USERNAME
--remote-password-secret-version= SECRET_VERSION
Replace the following:
REMOTE-REPOSITORY-NAME with the name of the repository. For
each repository location in a project, repository names must be unique.
PROJECT_ID with the project ID. If this flag is omitted,
the current or default project is used.
LOCATION with the regional or multi-regional
location for the repository. You can
omit this flag if you set a default . To view a list
of supported locations, run the command gcloud artifacts locations list .
DESCRIPTION with an optional description of the repository.
Don't include sensitive data, since repository descriptions aren't
encrypted.
REMOTE-REPOSITORY-DESCRIPTION with a description for
the external repository configuration for this remote repository.
USERNAME optionally, if you are using authentication, with
your username for authenticating to the upstream repository.
SECRET_VERSION optionally, if you are using authentication,
with the secret version containing your upstream repository password.
UPSTREAM with the preset upstream name, Artifact Registry
repository path, or user-defined URL of the
upstream repository. For Artifact Registry upstream repositories,
format the repository path similar to the following:
projects/ UPSTREAM_PROJECT_ID /locations/ REGION /repositories/ UPSTREAM_REPOSITORY .
For information on available preset upstreams and
supported user-defined upstreams, see Supported formats .
--disable-vulnerability-scanning : is an optional flag that configures your
repository to disable automatic vulnerability scanning.
--allow-vulnerability-scanning : is an optional flag that configures your
repository to permit automatic vulnerability scanning. For more information,
see Enable or disable automatic scanning .
For example, the following command creates a remote repository named
my-repo in the region us-east1 in the Google Cloud project
my-project and can authenticate to the upstream repository using the
username my-username and secret version
projects/my-project/secrets/my-secret/versions/1 .
gcloud artifacts repositories create my-repo \
--project = my-project \
--repository-format = python \
--location = us-east1 \
--description = "Remote Python repository" \
--mode = remote-repository \
--remote-repo-config-desc = "PyPI" \
--remote-username = my-username \
--remote-password-secret-version = projects/my-project/secrets/my-secret/versions/1 \
--remote-python-repo = PYPI
The output is the following:
Operation denied by custom org policies: ["customConstraints/custom.enableDockerRemotes": "All remote repositories must be Docker format."]
Artifact Registry supported resources
Artifact Registry supports custom constraints, on all fields except
labels , for create and update operations on the repository
resource.
Example custom organization policies for common use cases
The following table provides the syntax of some custom organization policies
that you might find useful:
Description
Constraint syntax
Disable creating remote repositories
name : organizations/ ORGANIZATION_ID /customConstraints/custom.disableRemotes
resourceTypes :
- artifactregistry.googleapis.com/Repository
methodTypes :
- CREATE
condition : "resource.mode in ['STANDARD', 'VIRTUAL']"
actionType : ALLOW
displayName : Disable remote repository creation
description : All repositories must be standard or virtual mode.
Enforce tag immutability for Docker format repositories
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enableAutoUpgrade
resourceTypes :
- artifactregistry.googleapis.com/Repository
methodTypes :
- CREATE
condition : "resource.format == 'DOCKER' && !resource.dockerConfig.immutableTags"
actionType : DENY
displayName : Enforce tag immutability
description : All new Docker repositories must have tag immutability enabled.
Require CMEK key
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enableAutoUpgrade
resourceTypes :
- artifactregistry.googleapis.com/Repository
methodTypes :
- CREATE
condition : "resource.kmsKeyName.contains('projects/my-project/')"
actionType : ALLOW
displayName : Enforce the use of a CMEK key from my-project
description : All repositories must be created with a CMEK key from my-project.
What's next
See Introduction to the Organization Policy Service to learn more about organization policies.
Learn more about how to create and manage organization policies .
See the full list of predefined organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
