---
title: "Prevent creation of VMs that use the container metadata \_|\_ Compute Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms
  title: "Prevent creation of VMs that use the container metadata \_|\_ Compute Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Prevent creation of VMs that use the container metadata
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Organization policy to disable creation of VMs that use gce-container-declaration
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To ensure that resources in your organization are not using the deprecated container startup agent and the related gce-container-declaration metadata, Google recommends that you enforce an organization policy. The managed constraint compute.managed.disableVmsWithContainerStartupAgent , when enforced, disables the creation of resources that use the deprecated metadata.
This document describes how to do the following:
Enforce an organization policy to disable the creation of Compute Engine instances that use the container startup agent.
Monitor the impact of the organization policy by enforcing the policy in dry-run mode.
Identify projects that attempt to use the deprecated agent with the Logs Explorer.
Enforce the organization policy to disable creation of VMs that use the container metadata
To prevent the creation of resources that use the deprecated container startup agent,
Google recommends that you enforce an organization policy .
The constraints/compute.managed.disableVmsWithContainerStartupAgent constraint
prevents new resources from being created with the
gce-container-declaration metadata key. This constraint doesn't affect
existing instances or instance templates.
Important: Before you enforce the policy in live mode, Google recommends that you use dry-run mode to evaluate its impact. Dry-run mode lets you evaluate the metadata usage without blocking any resource creation. To learn more, see Monitor usage of the deprecated metadata by enforcing the policy in dry-run mode .
Permissions required for this task
To perform this task, you must have the following
permissions :
resourcemanager.organizationAdmin role. For more information
see, Access control for
organizations using IAM .
To learn more about managing policies at the organization level, see
Add
an organization policy administrator .
You can enforce this constraint by using the Google Cloud console,
Google Cloud CLI or the Compute Engine API.
Console
To set the organization policy by using the console, complete the following steps:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project, folder, or organization for
which you want to edit organization policies.
The Organization policies page displays a list of organization
policy constraints that are available.
Select the Disable creation of Compute Engine instances that use the deprecated container startup agent (konlet) constraint from the list of constraints. The Policy details page that appears describes the constraint and provides information about how the constraint is applied.
To update the organization policy for this resource, click Manage policy .
On the Edit policy page, click Override parent's policy .
Select Add a rule .
Under Enforcement , select On .
Optionally, to preview the impact of your organization policy change before
it is enforced, click Test changes . For more information about testing
organization policy changes, see
Test organization policy changes with Policy Simulator .
To enforce the organization policy in dry-run mode, click
Set dry run policy . For more information, see
Create an organization policy in dry-run mode from a live policy .
After you verify that the organization policy in dry-run mode works as
intended, set the live policy by clicking Set policy .
gcloud
Create a YAML file to define the organization policy.
name : RESOURCE_TYPE / RESOURCE_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : ENFORCEMENT_STATE
dryRunSpec :
rules :
- enforce : ENFORCEMENT_STATE
Replace the following:
RESOURCE_TYPE with organizations , folders ,
or projects .
RESOURCE_ID with your organization ID, folder
ID, project ID, or project number, depending on the type of resource
specified in RESOURCE_TYPE .
CONSTRAINT_NAME with the name of the constraint
you want to set.
ENFORCEMENT_STATE with true to enforce this
organization policy when set, or false to disable it when set.
Optionally, to make the organization policy conditional on a tag, add a
condition block to the rules . If you add a conditional rule to an
organization policy, you must add at least one unconditional rule or the
policy cannot be saved. For more details, see
Setting an organization policy with tags .
Run the
org-policies set-policy
command with the dryRunSpec flag to set the organization policy in
dry-run mode:
gcloud org-policies set-policy POLICY_PATH \
--update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your
organization policy YAML file.
For more information about dry-run organization policies, see
Create an organization policy in dry-run mode .
Use the
policy-intelligence simulate orgpolicy
command to preview the impact of your organization policy change before it
is enforced:
gcloud policy-intelligence simulate orgpolicy \
--organization = ORGANIZATION_ID \
--policies = POLICY_PATH
Replace the following:
ORGANIZATION_ID with your organization ID, such as
1234567890123 . Simulating changes over multiple organizations is not
supported.
POLICY_PATH with the full path to your
organization policy YAML file.
For more information about testing organization policy changes, see
Test organization policy changes with Policy Simulator .
After you verify that the organization policy in dry-run mode works as
intended, set the live policy with the org-policies set-policy
command and the spec flag:
gcloud org-policies set-policy POLICY_PATH \
--update-mask = spec
Replace POLICY_PATH with the full path to your
organization policy YAML file.
REST
To set the organization policy, use the
organizations.policies.create
method.
POST https://orgpolicy.googleapis.com/v2/ { parent = organizations/ ORGANIZATION_ID } /policies
The request JSON body contains the definition of an organization policy.
If this constraint doesn't support parameters, omit the parameters block
under rules .
{
"name" : " RESOURCE_TYPE / RESOURCE_ID /policies/ CONSTRAINT_NAME " ,
"spec" : {
"rules" : [
{
"enforce" : [ " ENFORCEMENT_STATE " ],
}
]
}
"dryRunSpec" : {
"rules" : [
{
"enforce" : [ " ENFORCEMENT_STATE " ],
}
]
}
}
Replace the following:
RESOURCE_TYPE with organizations , folders ,
or projects .
RESOURCE_ID with your organization ID, folder
ID, project ID, or project number, depending on the type of resource
specified in RESOURCE_TYPE .
CONSTRAINT_NAME with the name of the constraint
you want to set.
ENFORCEMENT_STATE with true to enforce this
organization policy when set, or false to disable it when set.
Optionally, to make the organization policy conditional on a tag, add a
condition block to the rules . If you add a conditional rule to an
organization policy, you must add at least one unconditional rule or the
policy cannot be saved. For more details, see
Setting an organization policy with tags .
For more information about dry-run organization policies, see
Create an organization policy in dry-run mode .
Monitor usage of the deprecated metadata by enforcing the policy in dry-run mode
Instead of directly enforcing the policy, which blocks the creation of instances
that use the container declaration metadata, you can apply the policy in dry-run
mode. This setting lets you monitor and log any actions that the policy can
block, without actually interfering with operations. For more information, see
Create an organization policy in dry-run
mode .
When an action triggers the dry-run policy (for example, if you attempt to
create an instance with the gce-container-declaration metadata key), a log
entry is generated in Cloud Audit Logs .
To identify projects that attempt to use the deprecated agent, complete the following steps:
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs explorer
In the Query pane, enter the following query:
protoPayload.metadata.dryRun="true"
protoPayload.methodName="CheckOrgPolicy"
protoPayload.resourceName =~ "/compute.managed.disableVmsWithContainerStartupAgent"
Click Run query .
Identify the projects that attempt to use the deprecated agent by reviewing the log entries.
The logs for dry-run violations have the following characteristics:
They are related to orgpolicy.googleapis.com .
The protoPayload.metadata.dryRun field is set to true .
The constraints/compute.managed.disableVmsWithContainerStartupAgent
constraint is included in the violation details.
Review the information in the audit logs to understand where and why the
deprecated agent is still being used. This information can guide efforts
to migrate those workloads to supported alternatives.
After you verify that the organization policy in dry-run mode works as
intended, enforce the policy by changing the
enforcement state from dry-run mode to live.
For more information about using the Logs Explorer, see View logs by using the Logs Explorer .
What's next
Learn how to Migrate containers that were deployed on VMs during VM creation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
