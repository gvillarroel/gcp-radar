---
title: "Control key version destruction \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/control-key-destruction
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/control-key-destruction
  title: "Control key version destruction \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Control key version destruction
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers two organization policy constraints to set key version
destruction policy across an organization:
constraints/cloudkms.minimumDestroyScheduledDuration is used to set a
minimum length for the scheduled for destruction duration for new keys
within the organization.
constraints/cloudkms.disableBeforeDestroy is used to require that a key
version has been disabled before it can be scheduled for destruction.
Before you begin
The instructions on this page assume that you're familiar with using
constraints and
that you have the required resources and roles.
Required resources
Before you can complete the steps on this page, you must have the following
resources:
An organization.
Optional: A folder or project resource within your organization.
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
Require a minimum scheduled for destruction duration
The Minimum destroy scheduled duration per key constraint
( constraints/cloudkms.minimumDestroyScheduledDuration ) is used to set a
minimum length for the scheduled for destruction duration for new keys. This
constraint overrides the minimum scheduled for destruction duration at the
project, folder, or organization level. This constraint reduces the chance of
accidentally destroying a key that is still needed. You can set this constraint
to a higher value to help make sure you have time to prevent key destruction
before it becomes irreversible.
Use higher values for this constraint when unwanted key destruction would be
more harmful, such as for production data that is subject to data retention
requirements. Use lower values for this constraint when unwanted key destruction
would be less harmful, such as for development or testing environments. You can
also use lower values to allow timely crypto-shredding . However, as a
minimum value, this constraint can't ensure that new keys are created with low
scheduled for destruction durations.
Caution: When different values are specified for this constraint at different
levels of the hierarchy, the lowest value is applied. To apply different
values for different folders or projects, set your highest constraint value at
the organization level. Override the constraint with a lower value only for
those folders or projects that are less sensitive to unwanted key destruction.
To require a minimum scheduled for destruction duration, follow these steps:
Get the current policy on the organization resource using the describe
command. This command returns the policy directly applied to this
resource:
gcloud org-policies describe \
constraints/cloudkms.minimumDestroyScheduledDuration \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the unique identifier for the
organization resource. Organization ID
is formatted as decimal numbers, and can't have leading zeros.
You can also view the organization policy for a folder or a project with
the --folder or the --project flags, and the folder ID or
project ID , respectively.
The response returns the current organization policy, if one exists.
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
etag : COTP+KYGELiCmsoB
inheritFromParent : true
rules :
- values :
allowedValues :
- in:7d
updateTime : '2023-08-17T14:00:04.424051Z'
If a policy isn't set, the describe command returns a NOT_FOUND
error:
ERROR: (gcloud.org-policies.describe) NOT_FOUND: Requested entity was not found.
Set the policy on the organization using the set-policy command. This
command overwrites any policy currently attached to the resource.
Create a temporary file /tmp/policy.yaml to store the policy:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- values :
allowedValues :
- in: MINIMUM_DURATION
Replace the following:
ORGANIZATION_ID : the numerical ID of your organization.
MINIMUM_DURATION : the minimum duration for the
scheduled for destruction state for keys in this organization,
in days. Must be one of the following values: 7d , 15d ,
30d , 60d , 90d , or 120d .
Run the set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
View the current effective policy using describe --effective . This
command returns the organization policy as it is evaluated at this point
in the resource hierarchy with inheritance included.
gcloud org-policies describe \
constraints/cloudkms.minimumDestroyScheduledDuration --effective \
--organization = ORGANIZATION_ID
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- values :
allowedValues :
- 30d
- 15d
- 90d
- 60d
- 7d
- 120d
Because this organization policy was set at the organization level, it is
inherited by all child resources that allow
inheritance.
Require keys to be disabled before destruction
The Restrict key destruction to disabled keys constraint
( constraints/cloudkms.disableBeforeDestroy ) lets you require
that a key has been disabled before you can schedule the key for destruction.
Disabling a key prior to destroying it is a recommended best practice because it
helps you to validate that the key is not in use. You can combine this
constraint with careful Identity and Access Management policy to create a multi-step
destruction process that requires cooperation from multiple roles.
To use this constraint to create a multi-step destruction process, make sure
that no user has both the cloudkms.cryptoKeyVersions.update and the
cloudkms.cryptoKeyVersions.destroy permissions. This use case requires that
you use custom roles .
To require that a key is in the disabled state before you can schedule the key
for destruction, follow these steps:
gcloud
Get the current policy on the organization resource using the describe
command. This command returns the policy directly applied to this
resource:
gcloud org-policies describe \
constraints/cloudkms.disableBeforeDestroy \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the unique identifier for the
organization resource. Organization ID
is formatted as decimal numbers, and can't have leading zeros.
You can also view the organization policy for a folder or a project with
the --folder or the --project flags, and the folder ID
or project ID , respectively.
The response returns the current organization policy, if one exists. The
output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.disableBeforeDestroy
spec :
etag : CPvY+KYGENDwgxA=
rules :
- enforce : true
updateTime : '2023-08-17T14:19:39.033618Z'
If a policy isn't set, the describe command returns a NOT_FOUND
error:
ERROR: (gcloud.org-policies.describe) NOT_FOUND: Requested entity was not found.
Set the policy on the organization using the set-policy command. This
command overwrites any policy that is already attached to the resource.
Create a temporary file /tmp/policy.yaml to store the policy:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.disableBeforeDestroy
spec :
rules :
- enforce : true
Replace ORGANIZATION_ID with the unique identifier for the
organization resource.
Run the set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
View the current effective policy using describe --effective . This
command returns the organization policy as it is evaluated at this point
in the resource hierarchy with inheritance included.
gcloud org-policies describe \
constraints/cloudkms.disableBeforeDestroy --effective \
--organization = ORGANIZATION_ID
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- enforce : true
Because this organization policy was set at the organization level, it
is inherited by all child resources that allow
inheritance.
What's next
Learn more about key version states .
Destroy and restore a key version .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
