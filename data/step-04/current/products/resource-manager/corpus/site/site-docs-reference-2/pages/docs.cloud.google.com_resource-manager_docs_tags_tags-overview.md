---
title: "Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
  title: "Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Tags overview
Stay organized with collections
Save and categorize content based on your preferences.
The Google Cloud
resource hierarchy is a way to organize
your resources into a tree structure. This hierarchy helps you manage resources
at scale, but it models only a few business dimensions, including organization
structure, regions, workload types, and cost centers. The hierarchy lacks
the flexibility to layer multiple business dimensions together.
Tags provide a way to create annotations for resources, and in some cases
conditionally allow or deny policies based on whether a resource has a specific
tag. You can use tags and conditional enforcement of policies for fine-grained
control across your resource hierarchy.
Tags and labels
Labels are a separate way to create annotations for resources.
The following table lists some of the differences between tags and labels:
Tags
Labels
Resource structure
Tag keys, tag values, and tag bindings are all discrete resources
Not a resource in itself, but metadata for resources
Definition
Defined at the organization or project level
Defined by each resource
Access control
Management and attachment of tags requires Identity and Access Management (IAM) roles
Attachment of labels requires IAM roles , which vary based on the service resource
Prerequisite for attachment
The tag key and tag value must be defined before a tag can be attached to a resource
No prerequisites for attachment
Inheritance
Tag bindings are inherited by children of the resource in the Google Cloud hierarchy
Not inherited by children of the resource
Deletion requirements
Tags can't be deleted unless no tag bindings for that tag exist
Can be removed from a resource at any time
Naming requirements
Requirements for tag values and tag keys
Requirements for labels
Key-value name length
256 characters maximum
63 characters maximum
Allow and deny policy support
Tags can be referenced by allow policy conditions and deny policy conditions
No allow and deny policy support
Organization policy support
Tags on some resources can be referenced by organization policy conditional constraints
No organization policy support
Cloud Billing integration
Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery
Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery
For more information about labels, see
Creating and managing labels .
Caution: Existing labels and
network tags continue to be
supported for the purposes of extensibility and automation.
Creating tags
Tags are structured as a key-value pair. A tag key resource can be created under
your organization or project resources, and tag values are resources that
are attached to a key—for example, a tag key environment with values
production and development .
Tag administration
Administrators can control the usage of tags by restricting who can create,
update, delete, and attach tags to resources. They can select an
individual tag to make edits, such as to add or remove values, and update
the description. This allows for fine-grained control of your tags.
Tags optionally have a description that is displayed when information
about the tag is retrieved. The description helps users who attach the tag
to the resource understand the tag's purpose.
In a parent project or organization, each tag key must be unique. This ensures
that each tag value, when bound to a resource, creates a unique pairing with
its tag key.
Policies and tags
You can use tags and IAM conditions together to:
Conditionally grant IAM roles
Conditionally deny IAM permissions
After you create a tag value, you can bind the tag value to resources. You can
then create IAM policies with conditions
that identify resources based on whether a tag key has been bound to the
resource. For information about using tags and IAM conditions, see
Tags and conditional access .
Enforcement of mandatory tags using organization policies
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can enforce mandatory tags on resources by using a custom organization
policy. When you enforce mandatory tags, you can only create resources that
comply with your organization's tagging policies; that is, resources are bound
with the tag values for the mandatory tag keys specified in the policy.
For more information, see
Set up a custom constraint to enforce tags .
Enforcement of mandatory tags is supported for the following resource types:
Resource Manager projects and folders
Filestore instances
AlloyDB for PostgreSQL cluster and backup resources
Workflows workflow
Compute Engine resources:
Instances
Disks
VPC resources:
Networks
Subnetworks
Firewall rules
Routes
Tag inheritance
When a tag value is attached to a resource, by default, all descendants of
the resource inherit the same tag value. You can override an inherited tag
value on a descendant resource. To override an inherited tag value, bind a
different tag value to the descendant resource. The different tag value must
use the same tag key as the inherited tag value.
For example, suppose that you apply the tag environment: development to a
folder, and the folder has two child folders named team-a and team-b .
You can also apply a different tag, environment: test , to the
team-b folder. As a result, projects and other resources in the
team-a folder inherit the tag environment: development , and projects and
other resources in the team-b folder inherit the tag environment: test :
If you remove the environment: test tag from the team-b folder, then that
folder and its resources inherit the tag environment: development .
All of the tags that are both attached to and inherited by a resource are
collectively called the effective tags . The effective tags for a resource
are a combination of the tags directly attached to it, as well as all tags
attached to all of the resource's ancestors throughout the hierarchy.
When using tags with IAM conditions, we recommend that you
create a safe default tag value for each tag key used by your
IAM conditions. Apply the safe default tag value by binding
that tag value to your organization so that it is inherited by all resources
within the organization. Only change the tag value by explicitly overriding
inherited bindings on relevant resources.
For example, suppose you have an IAM condition that depends on
the tag value on for the enforcement tag key, and the tag key also has an
off tag value. Bind the tag value enforcement: off to the organization to
create a safe default that's inherited by all resources within the organization.
Only bind the tag value enforcement: on to selected resources within the
organization.
You can then write policies that address the enforcement tag key, with
conditions that affect a resource if it is enforcement: on or
enforcement: off , and a safe case if it is enforcement: default . If the
enforcement tag key is ever removed from a resource, the resource can then inherit
the tag value for enforcement from its parent resource. If no parent resource
has the enforcement tag key, the resource inherits enforcement: default
from the organization resource.
Using a safe default tag can help, but to prevent unintended behaviors,
we recommend that you review the tags and conditional policies in place
before moving your resources or removing tags.
Deleting tag keys and values
Before you can delete a tag value, you must delete all resource bindings that
use the tag value.
Protecting tag values from deletion
You can create an additional layer of protection for your tag values by
attaching a tag hold to a tag value. A tag hold, like a tag binding, prevents a
user from deleting the tag value.
Some resources automatically create a tag hold on each tag value attached to the
resource. This tag hold must be removed before you can delete the tag value.
What's next
For more information about how to use tags, read the
Creating and managing tags page.
For information about using tags with Compute Engine, see
Manage tags for resources .
For information about using secure tags for firewall policies, see
Create and manage secure tags .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
