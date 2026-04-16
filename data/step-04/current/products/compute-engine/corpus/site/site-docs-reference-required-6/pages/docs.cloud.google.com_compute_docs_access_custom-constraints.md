---
title: "Custom constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/access/custom-constraints
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access/organization-policies
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/access/custom-constraints
  title: "Custom constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Custom constraints
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
policies, you can also create custom constraints and use those custom
constraints in a custom organization policy.
Benefits
Cost management : use custom organization policies to restrict the
virtual machine (VM) instance and disk sizes and types that can be used in
your organization.
You can also restrict the machine family that is used for the VM instance
Security, compliance, and governance : you can use custom organization
policies to enforce policies as follows:
To enforce security requirements, you can require specific
firewall port rules on VMs.
To support hardware isolation or licensing compliance, you can
require all VMs within a specific project or folder to run on
sole-tenant nodes .
To govern automation scripts, you can use custom organization
policies to verify that labels match specified expressions.
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
If you haven't already, set up authentication .
Authentication verifies your identity for access to Google Cloud services and APIs. To run
code or samples from a local development environment, you can authenticate to
Compute Engine by selecting one of the following options:
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Set a default region and zone .
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage organization policies for Compute Engine resources,
ask your administrator to grant you the
following IAM roles:
Organization policy administrator ( roles/orgpolicy.policyAdmin )
on the organization resource
To test the constraints:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage organization policies for Compute Engine resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies for Compute Engine resources:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
To test the constraints:
compute.instances.create on the project
To use a custom image to create the VM: compute.images.useReadOnly on the image
To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot
To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template
To assign a legacy network to the VM: compute.networks.use on the project
To specify a static IP address for the VM: compute.addresses.use on the project
To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project
To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet
To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet
To set VM instance metadata for the VM: compute.instances.setMetadata on the project
To set tags for the VM: compute.instances.setTags on the VM
To set labels for the VM: compute.instances.setLabels on the VM
To set a service account for the VM to use: compute.instances.setServiceAccount on the VM
To create a new disk for the VM: compute.disks.create on the project
To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk
To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Compute Engine supported resources
For Compute Engine, you can set CREATE and UPDATE type custom constraints on
the following resources and fields.
Persistent Disk : compute.googleapis.com/Disk
Persistent Disk type: resource.type
Persistent Disk size: resource.sizeGb
Persistent Disk licenses: resource.licenses
Persistent Disk license codes: resource.licenseCodes
Persistent Disk Confidential Computing: resource.enableConfidentialCompute
Persistent Disk source image: resource.sourceImage
Image : compute.googleapis.com/Image
Raw disk source: resource.rawDisk.source
VM instance : compute.googleapis.com/Instance
Advanced machine features:
resource.advancedMachineFeatures.enableNestedVirtualization
resource.advancedMachineFeatures.threadsPerCore
resource.advancedMachineFeatures.performanceMonitoringUnit
Confidential VM instance configurations:
resource.confidentialInstanceConfig.enableConfidentialCompute
resource.confidentialInstanceConfig.confidentialInstanceType
Deletion protection: resource.deletionProtection
Ip Forwarding: resource.canIpForward
Private Google Access (IPv6): resource.privateIpv6GoogleAccess
Labels: resource.labels
Accelerators:
resource.guestAccelerators.acceleratorType
resource.guestAccelerators.acceleratorCount
Machine type: resource.machineType
Minimum CPU platform: resource.minCpuPlatform
Network interface:
resource.networkInterfaces.network
resource.networkInterfaces.subnetwork
resource.networkInterfaces.networkAttachment
resource.networkInterfaces.accessConfigs.name
resource.networkInterfaces.accessConfigs.natIP
Node affinity:
resource.scheduling.nodeAffinities.key
resource.scheduling.nodeAffinities.operator
resource.scheduling.nodeAffinities.values
Reservation Affinity:
resource.scheduling.reservationAffinity.key
resource.scheduling.reservationAffinity.values
Shielded Instance Config:
resource.shieldedInstanceConfig.enableSecureBoot
resource.shieldedInstanceConfig.enableVtpm
resource.shieldedInstanceConfig.enableIntegrityMonitoring
Zone: resource.zone
Other supported compute resources:
For more information about Compute Engine resources used by
Cloud Load Balancing, such as backend services, backend buckets, forwarding
rules, health checks, SSL policies, target proxies, and URL maps, see the
Manage Cloud Load Balancing resources using custom
constraints page.
Enforcing Mandatory Resource Manager Tags
Some Compute Engine resources also support the GOVERN_TAGS type constraint
to enforce mandatory Resource Manager tags on the Compute Engine resource.
For more information, see Enforcement of mandatory tags using organization
policies .
Set up a custom constraint
A custom constraint is defined by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom organization policies .
You can create a custom constraint and set it up for use in organization
policies using the Google Cloud console or gcloud CLI.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Select the Project picker at the top of the page.
From the Project picker , select the resource for which you want
to set the organization policy.
Click add Custom constraint .
In the Display name box, enter a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
Don't use PII or sensitive data in constraint names, because they could be
exposed in error messages.
In the Constraint ID box, enter the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers, for
example, custom.createOnlyN2DVMs . The maximum length of this field is 70
characters, not counting the prefix, for example,
organizations/123456789/customConstraints/custom. .
In the Description box, enter a human-friendly description of the
constraint to display as an error message when the policy is violated.
This field has a maximum length of 2000 characters.
In the Resource type box, select the name of the Google Cloud
REST resource containing the object and field you want to restrict. For
example, compute.googleapis.com/Instance .
Under Enforcement method , select whether to enforce the constraint
on the REST CREATE method.
To define a condition, click edit
Edit condition .
In the Add condition panel, create a CEL condition that refers to a
supported service resource, for example
resource.machineType.contains('/machineTypes/n2d') . This field has a maximum
length of 1000 characters.
Click Save .
Under Action , select whether to allow or deny the evaluated method if
the previous condition is met.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML
configuration for this custom constraint appears on the right.
gcloud
To create a custom constraint using the gcloud CLI, create a
YAML file for the custom constraint:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resource_types : compute.googleapis.com/ RESOURCE_NAME
method_types : CREATE
condition : CONDITION
action_type : ACTION
display_name : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers. For
example, custom.createOnlyN2DVMs . The maximum length of this field is 70
characters, not counting the prefix (for example,
organizations/123456789/customConstraints/custom. ).
RESOURCE_NAME : the name (not the URI) of the
Compute Engine API REST resource containing the object and field
you want to restrict. For example, Instance .
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This field has a maximum
length of 1000 characters. See
Supported resources for more information about the
resources available to write conditions against. For example,
"resource.machineType.contains('/machineTypes/n2d')" .
ACTION : the action to take if the condition is
met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint. This field has a maximum length of 200 characters. Don't
use PII or sensitive data in constraint names, because they could be
exposed in error messages.
DESCRIPTION : a human-friendly description of the
constraint to display as an error message when the policy is violated.
This field has a maximum length of 2000 characters.
For more information about how to create a custom constraint, see
Creating and managing custom organization policies .
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
numbers, for example custom.createOnlyN2DVMs . This field can contain up to
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
or numbers, for example, custom.createOnlyN2DVMs . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
compute.googleapis.com/Instance . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can only be
CREATE .
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.machineType.contains('/machineTypes/n2d')" .
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
Enforce a custom constraint
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
example, custom.createOnlyN2DVMs .
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
Example: Create a constraint that restricts VMs to use the N2D machine type
gcloud
Create a onlyN2DVMs.yaml constraint file with the following information:
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createOnlyN2DVMs
resource_types : compute.googleapis.com/Instance
condition : "resource.machineType.contains('/machineTypes/n2d')"
action_type : ALLOW
method_types : CREATE
display_name : Only N2D VMs allowed
description : Restrict all VMs created to only use N2D machine types.
Set the custom constraint.
gcloud org-policies set-custom-constraint onlyN2DVMs.yaml
Create a onlyN2DVMs-policy.yaml policy file with the following information.
In this example we enforce this constraint at the
project level but you might also set this at the organization or folder level.
Replace PROJECT_ID with your project ID.
name : projects/ PROJECT_ID /policies/custom.createOnlyN2DVMs
spec :
rules :
– enforce : true
Enforce the policy.
gcloud org-policies set-policy onlyN2DVMs-policy.yaml
Test the constraint by trying to create a VM that uses a machine type that
isn't an N2D machine.
gcloud compute instances create my-test-instance \
--project= PROJECT_ID \
--zone=us-central1-c \
--machine-type=e2-medium
The output is similar to the following:
ERROR: (gcloud.compute.instances.create) Could not fetch resource:
– Operation denied by custom org policies: [customConstraints/ custom.createOnlyN2DVMs ]: Restrict all VMs created to only use N2D machine types.
Example custom constraints for common use cases
The following sections provide the syntax of some custom constraints that you
might find useful:
Disk
Use case
Syntax
Persistent Disk type must be "Extreme persistent disk ( pd-extreme )"
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createDisksPDExtremeOnly
resource_types : compute.googleapis.com/Disk
condition : "resource.type.contains('pd-extreme')"
action_type : ALLOW
method_types : CREATE
display_name : Create pd-extreme disks only
description : Only the extreme persistent disk type is allowed to be created.
Disk size must be less than or equal to 250 GB
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createDisksLessThan250GB
resource_types : compute.googleapis.com/Disk
condition : "resource.sizeGb 250"
action_type : ALLOW
method_types : CREATE
display_name : Disks size maximum is 250 GB
description : Restrict the boot disk size to 250 GB or less for all VMs.
Image
Use case
Syntax
Source images must be from Cloud Storage test_bucket only
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createDisksfromStoragebucket
resource_types : compute.googleapis.com/Image
condition : "resource.rawDisk.source.contains('storage.googleapis.com/test_bucket/')"
action_type : ALLOW
method_types : CREATE
display_name : Source image must be from Cloud Storage test_bucket only
description : Source images used in this project must be imported from the
Cloud Storage test_bucket.
VM instance
Use case
Syntax
VM must have a label with the key set to cost center
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createVMWithLabel
resource_types : compute.googleapis.com/Instance
condition : "'cost_center' in resource.labels"
action_type : ALLOW
method_types : CREATE
display_name : 'cost_center' label required
description : Requires that all VMs created must have the a 'cost_center' label
that can be used for tracking and billing purposes.
VM must have a label with the key set to cost center
and the value set to eCommerce
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createECommerceVMOnly
resource_types : compute.googleapis.com/Instance
condition : "'cost_center' in resource.labels and resource.labels['cost_center'] == 'eCommerce'"
action_type : ALLOW
method_types : CREATE
display_name : Label (cost_center/eCommerce) required
description : Label required and Key/value must be cost_center/eCommerce.
VM must use machine type N2D
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createOnlyN2DVMs
resource_types : compute.googleapis.com/Instance
condition : "resource.machineType.contains('/machineTypes/n2d')"
action_type : ALLOW
method_types : CREATE
display_name : Only N2D VMs allowed
description : Restrict all VMs created to only use N2D machine types.
VM must use machine type e2-highmem-8
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createOnlyE2highmem8
resource_types : compute.googleapis.com/Instance
condition : "resource.machineType.endsWith('-e2-highmem-8')"
action_type : ALLOW
method_types : CREATE
display_name : Only "e2-highmem-8" VMs allowed
description : Restrict all VMs created to only use the E2 high-memory
machine types that have 8 vCPUs.
Ensures that VMs are scheduled on the node group "foo"
name : organizations/ ORGANIZATION_ID /customConstraints/custom.createOnlySTVM
resource_types : compute.googleapis.com/Instance
condition : "resource.scheduling.nodeAffinities.exists(n, n.key == 'foo')"
action_type : ALLOW
method_types : CREATE
display_name : Only VMs scheduled on node group "foo" allowed
description : Restrict all VMs created to use the node group "foo".
What's next
See Introduction to the Organization Policy Service to learn more about organization policies.
Learn more about how to create and manage organization policies .
See the full list of predefined Organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
