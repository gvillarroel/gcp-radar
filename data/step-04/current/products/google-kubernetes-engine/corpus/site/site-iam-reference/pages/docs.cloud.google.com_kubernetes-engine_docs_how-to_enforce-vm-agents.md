---
title: "Run VM agents on every GKE node across organizations \_|\_ GKE security \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enforce-vm-agents
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enforce-vm-agents
  title: "Run VM agents on every GKE node across organizations \_|\_ GKE security\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Run VM agents on every GKE node across organizations
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This page describes how to ensure that VM Manager is enabled on all
Compute Engine instances, including Google Kubernetes Engine VMs in an organization,
folder, or project, by using
Organization Policy Service .
This guide is intended for security teams that want to ensure that all required
programs, like security and monitoring agents, run across all instances in an
organization, folder, or project. To enforce
configuration with Organization Policy only, use this guide. For a config-as-code approach,
use Config Sync .
Config Sync lets you configure and control many aspects of your clusters and
provides value beyond organization policies.
Before reading this page, ensure that you're already familiar with
VM Manager and
Resource Manager constraints .
This guide shows you how to enforce the use of VM Manager in
every project across an organization or folder. This guide doesn't show you how
to set up and use VM Manager with
OS policies. For those instructions, see
Create an OS policy assignment .
About VM Manager
VM Manager is a suite of tools that can manage operating systems
for large virtual machine (VM) fleets running Windows and Linux on
Compute Engine. You can use VM Manager to apply
OS policies
to customize the programs that run on VMs. For example, you can define a policy
to install an agent on a resource and reuse that policy across multiple
resources. VM Manager is disabled by default in
Google Cloud projects.
You can refine where VM Manager applies policies by using
OSPolicyAssignments , which let you scope OS policies to specific VMs by using
selectors. For example, all GKE node VMs have the label
goog-gke-node , which you can target with an OS policy assignment.
Organization policies and VM Manager
If your Google Cloud organization has multiple levels of hierarchy
like folders and sub-folders, enabling VM Manager across all of
these projects manually might cause unnecessary management overhead. You can
require that all projects across folders or an organization enable
VM Manager on all VMs by using the Organization Policy Service with the
constraints/compute.requireOsConfig constraint. Some of the benefits of
enforcing VM Manager using an organization policy include the
following:
All new projects add the enable-osconfig=TRUE metadata label to every
project and VM.
If anyone tries to remove this label or set it to a value other than true ,
that change is rejected.
If anyone tries to create or update a VM in a way that sets the
enable-osconfig metadata key to a value other than true , that change is
rejected.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Ensure that you're already using VM Manager with OS policies
and OS policy assignments to run agents on your VMs. For instructions, see
Create an OS policy assignment .
Enable the Cloud Resource Manager API, OS Config API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Limitations
The constraints/compute.requireOsConfig organization policy has the following
limitations:
Resources with pre-existing violations are unchanged by the new organization
policy. You can set the metadata for the policy manually or by using gcloud
on existing resources.
Anyone who has permission to change metadata on Compute Engine
instances in the project can disable the osconfig-agent on the VM by
setting the osconfig-disabled-features metadata field.
If the osconfig-agent isn't running, the VM shows up as out-of-compliance
on the VM Manager dashboard. For example, this might happen
if a user manually disabled the agent.
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization policy administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable compute.requireOsConfig across an organization
After you have enabled VM Manager and scoped an
OSPolicyAssignment to your VMs, you can ensure that VM Manager
is enabled by default on any new projects with the
constraints/compute.requireOsConfig organization policy. How you enforce
constraints/compute.requireOsConfig depends on the API version that you use.
Organization Policy v2 API
You can enforce the constraints/compute.requireOsConfig constraint across a
Google Cloud resource like a folder or an organization by using the
gcloud CLI or the Google Cloud console.
gcloud
Confirm that the compute.requireOsConfig constraint is not
already applied:
gcloud org-policies describe \
constraints/compute.requireOsConfig \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with your
Organization ID .
If a policy isn't set, this command returns a NOT_FOUND error:
ERROR: ( gcloud.org-policies.describe ) NOT_FOUND: Requested entity was not found.
If the policy does exist, the command returns the current policy. Applying
a new policy overwrites the existing policy, if one exists.
Create a temporary file /tmp/policy.yaml to store the policy:
name : organizations/ ORGANIZATION_ID /policies/constraints/compute.requireOsConfig
spec :
rules :
- enforce : true
Run the set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
Confirm that the new policy is applied:
gcloud org-policies describe \
constraints/compute.requireOsConfig --effective \
--organization = ORGANIZATION_ID
The output of the command is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/constraints/compute.requireOsConfig
spec :
rules :
- enforce : true
console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project, folder, or organization for
which you want to edit organization policies.
On the Organization policies page, use the filter to search for
compute.requireOsConfig .
Click the name of the policy to open the Policy Details page.
Click Manage policy to update the organization policy for this resource.
On the Edit policy page, select Override parent's policy .
Select Add a rule .
Under Enforcement , change enforcement of this organization policy
to on .
To enforce the policy, click Set policy .
Resource Manager v1 API
Note: The Organization Policy v1 API does not work with tags or conditions. If
you want to use this organization policy with Tags, see the
v2 instructions.
Confirm that the compute.requireOsConfig constraint is not
already applied:
gcloud resource-manager org-policies describe constraints/compute.requireOsConfig \
--organization ORGANIZATION_ID
Replace ORGANIZATION_ID with your Organization ID .
If a policy isn't set, this command returns an incomplete policy, like
the following example:
constraint : "constraints/compute.requireOsConfig"
etag : BwVJi0OOESU=
If the policy does exist, the command returns the current policy. Applying
a new policy overwrites the existing policy, if one exists.
Set the policy to enforce on the organization:
gcloud resource-manager org-policies enable-enforce constraints/compute.requireOsConfig \
--organization ORGANIZATION_ID
The output of the command is similar to the following:
booleanPolicy :
enforced : true
constraint : constraints/compute.requireOsConfig
etag : BwVJitxdiwY=
Confirm that the new policy is applied:
gcloud resource-manager org-policies describe constraints/compute.requireOsConfig \
--effective \
--organization ORGANIZATION_ID
The output of the command is similar to the following:
booleanPolicy :
enforced : true
constraint : constraints/compute.requireOsConfig
Changes to organization policies can take up to 15 minutes to be fully enforced.
For more information about other policies that you can apply, or how to modify
or delete policies, see the
Resource Manager documentation .
What's next
Learn more about GKE audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
