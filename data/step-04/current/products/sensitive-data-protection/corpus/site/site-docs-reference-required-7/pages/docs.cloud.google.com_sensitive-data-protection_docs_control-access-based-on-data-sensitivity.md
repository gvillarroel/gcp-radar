---
title: "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity
  title: "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Control IAM access based on data sensitivity
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to automatically grant or deny
Identity and Access Management (IAM) access to resources based on the sensitivity of the
data in those resources.
You can configure the Sensitive Data Protection discovery
service to automatically
attach tags to resources based on the calculated sensitivity levels of those
resources. You can then use IAM
conditions to grant or deny
access to a resource, based on the presence or absence of a sensitivity level
tag key or tag value.
Suppose that you want your organization's data team to be able to freely copy
and share BigQuery data in their daily operations. However, you don't
know if any of that data contains your customers' personally identifiable
information (PII). You can run
discovery to classify
the sensitivity levels of your BigQuery data. Then, conditionally
grant access to the data team, such that they are only able to access
BigQuery tables that have only low-sensitivity data.
For more information about how Sensitive Data Protection calculates data
sensitivity, see Data risk and sensitivity
levels .
For more information about using tags to control access to resources, see Tags
and conditional access in the
IAM documentation. For general information about tags, see Tags
overview in the Resource Manager
documentation.
Sensitivity level tag
This document uses the term sensitivity level tag to refer to a tag that you
automatically attach to a resource to indicate the calculated
sensitivity level of data in that resource.
Benefits
This feature lets you do the following:
Automate access control across various supported
resources based on attributes and classifications of
the data in those resources. Automation helps you keep up with the
growth and changes in the data in your organization, folders, and projects.
Restrict access to the supported resources until those resources are
profiled and classified by Sensitive Data Protection. This practice is in
accordance with the secure by default principle.
Configure discovery to update the sensitivity level tag value
each time it profiles your data. Consequently, a principal's access to a
resource changes automatically as the calculated data sensitivity level
for that resource changes.
Configure discovery to lower the calculated data risk level on a
resource if discovery detects that a sensitivity level tag is present on
that resource. This option helps you measure the improvement in your data
security and privacy posture.
Supported resources
With this feature, Sensitive Data Protection automatically tags data at
following levels:
BigQuery tables
Cloud SQL instances
Cloud Storage buckets
How it works
The following is a high-level workflow for controlling access to resources based
on data sensitivity. These tasks don't have to be performed by the same person.
Create a sensitivity level tag
Grant conditional access to resources based on the value of the sensitivity
level tag
Enable the automatic tagging in the discovery
configuration
Grant the service agent permission to attach the sensitivity level tag to
resources
Required permissions
The permissions that you need depend on the action that you need to perform.
To gain these permissions, ask your administrator to grant the suggested role at
the appropriate level of the resource hierarchy.
Permissions for administering tags
See Administer
tags in
the Resource Manager documentation.
Permissions for granting conditional access to resources
See Required
roles in
the IAM documentation.
Permissions for configuring discovery
See Roles required to configure and view data
profiles .
Create a sensitivity level tag
In this task, you create a tag key with tag values that map to the data
sensitivity
levels
that Sensitive Data Protection uses to classify your data. For example, you
can use the following tag key and tag values.
Set the tag key to sensitivity-level .
Set the following tag values:
low
Tag value to attach to low-sensitivity data
moderate
Tag value to attach to moderate-sensitivity data
high
Tag value to attach to high-sensitivity data
You can also create a tag value for resources that have an unknown
sensitivity level. Alternatively, you can reuse any of the low , medium ,
or high tag values for those resources.
Take note of the following. You need these in the next task:
Tag key ID—for example, tagKeys/281478077849901
Tag key values—for example, tagValues/281479490918432
Tag value paths—for example, example-project/tag-key/tag-value1
For simplicity, this example sets a one-to-one mapping between a tag value and a
sensitivity level. In practice, you can customize the tag values to suit your
business needs. For example, you might use values like confidential , PII , or
SPII (sensitive PII).
Sensitive data discovery can be configured at the organization, folder,
and project levels. If you intend to use this sensitivity level tag for
organization-level or folder-level discovery, we recommend that you create this
tag at the organization level.
For information about how to create a tag, see Creating and managing
tags in
the Resource Manager documentation.
Grant conditional access to resources based on the value of the sensitivity level tag
In this task, you grant a role to a principal only if the sensitivity level tag
attached to the resource has a specific value. For example, you can grant a
principal access to only data with moderate and low tag values.
This section provides example conditions that are formatted for use with the
condition editor. The condition editor provides a text-based interface to
manually enter an expression using CEL
syntax . For information
about how to attach IAM conditions to role bindings, see Manage
conditional role bindings in
the IAM documentation.
These examples follow the tagging model defined in Create a sensitivity level
tag on this page.
Grant principals access to only low-sensitivity data
In this example, you grant access to a resource if the resource contains only
low-sensitivity data. You can also use this example to restrict all access to
the resource until sensitive data discovery has run on that resource.
resource.matchTagId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ",
"tagValues/ TAG_VALUE_FOR_LOW_SENSITIVITY ")
Replace the following:
SENSITIVITY_LEVEL_TAG_KEY : the numeric ID of the
sensitivity level tag key that you
created
TAG_VALUE_FOR_LOW_SENSITIVITY : the numeric ID of
the tag value that you created for low-sensitivity data
Grant principals access to only moderate-sensitivity and low-sensitivity data
In this example, you grant access to a resource if the resource contains only
moderate-sensitivity or low-sensitivity data. Note that there is an OR
operator between the two conditions.
resource.matchTagId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ", "tagValues/ TAG_VALUE_FOR_LOW_SENSITIVITY ") ||
resource.matchTagId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ", "tagValues/ TAG_VALUE_FOR_MODERATE_SENSITIVITY ")
Replace the following:
SENSITIVITY_LEVEL_TAG_KEY : the numeric ID of the
sensitivity level tag key that you
created
TAG_VALUE_FOR_LOW_SENSITIVITY : the numeric ID of
the tag value that you created for low-sensitivity data
TAG_VALUE_FOR_MODERATE_SENSITIVITY : the numeric
ID of the tag value that you created for moderate-sensitivity data
Grant principals access only if the sensitivity level tag is present
This is useful, for example, if you want to define an organization policy that
requires all IAM access to be conditional based on the presence
of a sensitivity level tag. You can also use this example to restrict all access
to the resource until sensitive data discovery has run on that resource.
resource.hasTagKeyId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ")
Replace SENSITIVITY_LEVEL_TAG_KEY with the numeric ID
of the sensitivity level tag key that you
created .
Example deny policies
For information about how to form a deny policy for use with a resource tag, see
Structure of a deny policy . For
a list of supported permissions, see Permissions supported by deny
policies .
Deny access if there is no sensitivity level tag
The following excerpt of a deny policy denies the
bigquery.googleapis.com/tables.get permission if the resource doesn't have the
sensitivity level tag.
"rules": [
{
"denyRule": {
"deniedPrincipals": [
"principalSet://goog/group/data-team@example.com"
],
"deniedPermissions": [
"bigquery.googleapis.com/tables.get"
],
"denialCondition": {
"title": "Resource has no key",
"expression": "!resource.hasTagKeyId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ")"
}
}
}
]
Replace SENSITIVITY_LEVEL_TAG_KEY with the numeric ID
of the sensitivity level tag key that you
created .
Deny access if moderate-sensitivity or high-sensitivity data is present
The following excerpt of a deny policy denies the
bigquery.googleapis.com/tables.get permission if the resource has any
moderate-sensitivity or high-sensitivity data.
"rules": [
{
"denyRule": {
"deniedPrincipals": [
"principalSet://goog/group/data-team@example.com"
],
"deniedPermissions": [
"bigquery.googleapis.com/tables.get"
],
"denialCondition": {
"title": "Resource has moderate or high data sensitivity",
"expression": "resource.matchTagId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ", "tagValues/ TAG_VALUE_FOR_MODERATE_SENSITIVITY ") || resource.matchTagId("tagKeys/ SENSITIVITY_LEVEL_TAG_KEY ", "tagValues/ TAG_VALUE_FOR_HIGH_SENSITIVITY ")"
}
}
}
]
Replace the following:
SENSITIVITY_LEVEL_TAG_KEY : the numeric ID of the
sensitivity level tag key that you
created
TAG_VALUE_FOR_MODERATE_SENSITIVITY : the numeric
ID of the tag value that you created for moderate-sensitivity data
TAG_VALUE_FOR_HIGH_SENSITIVITY : the numeric
ID of the tag value that you created for high-sensitivity data
Enable the automatic tagging in the discovery configuration
In this task, you enable the Tag resources action. This action
instructs Sensitive Data Protection to automatically tag your data according
to its calculated sensitivity level. You perform this task when you
create or
edit a
discovery scan configuration.
To automatically tag a resource according to its calculated sensitivity level,
follow these steps:
Turn on the Tag resources option.
For each sensitivity level (high, moderate, low, and unknown), enter the
path of the tag value that you created for the given sensitivity level.
If you skip a sensitivity level, no tag is attached for it.
To automatically lower the data risk level of a
resource when the sensitivity level tag is present, select When a tag is
applied to a resource, lower the data risk of its profile to LOW . This
option helps you measure the improvement in your data security and privacy
posture.
Important: This option overrides the calculated data risk
level
of the profiled resource.
Select one or both of the following options:
Tag a resource when it is profiled for the first time.
Tag a resource when its profile is updated. Select
this option if you want Sensitive Data Protection to overwrite the
sensitivity level tag value on succeeding discovery runs. Consequently, a
principal's access to a resource changes automatically as the calculated
data sensitivity level for that resource increases or decreases.
Don't select this option if you plan to manually update the sensitivity
level tag values that the discovery service attached to your resources.
If you select this option, Sensitive Data Protection can overwrite
your manual updates.
Sensitive data discovery can be configured at the organization, folder, and
project levels. If you intend to use this sensitivity level tag for
organization-level discovery and if you don't want project-level discovery
operations to overwrite the tag values that are set by the organization-level
discovery, then make sure that only the service agent of the organization-level
discovery configuration can attach this tag to resources. For information about
how to grant a role at the tag level, see Managing access to
tags in
the Resource Manager documentation.
Troubleshoot errors
This section describes errors that you might encounter when using this feature
and how to resolve those errors.
Maximum number of tags exceeded
Each resource can have a maximum of 50 key-value pairs attached. Attempting to
tag a resource that already has the maximum number of tags causes
profile generation to fail. You get the following error:
The resource RESOURCE_NAME cannot be tagged because there are
too many existing tags bound to the resource. You can either disable automatic
tagging or delete at least one tag binding from the resource.
To resolve this issue, detach a tag from the resource. For more information,
see the following:
BigQuery: Detach tags from a table
Cloud SQL for MySQL: Detach tags from Cloud SQL instances
Cloud SQL for PostgreSQL: Detach tags from Cloud SQL instances
Cloud Storage: Examples
of attaching tags to or detaching tags from a Cloud Storage bucket
Alternatively, disable the Tag resources action in your discovery scan
configuration.
A tag value was deleted or renamed and discovery attempted to attach it to a resource
If a tag value for the sensitivity level tag is deleted or renamed and
Sensitive Data Protection attempts to attach that tag value to a profiled
resource, you get the following error:
Tag value TAG_VALUE not found, it has possibly been either deleted or renamed.
To resolve this issue, do one of the following:
If the tag was deleted, recreate the deleted tag value. Make sure that the
recreated tag value matches the tag value that is referenced in your
discovery scan configuration. For more information, see Create a sensitivity
level tag on this page.
If the tag value was renamed, update the discovery scan configuration to use
the new name of the tag value.
The service agent is missing permissions
If the service agent doesn't have the permissions that are required to attach
the sensitivity level tag to the profiled resources, you get the following
error:
The DLP service account SERVICE_AGENT_NAME is missing
permissions needed for attaching tags to resources. Check that the role
'resourcemanager.tagUser' is granted to the DLP service account.
To resolve this issue, follow these steps:
Get the service agent ID that is associated with your discovery scan
configuration:
Go to the discovery scan configurations list.
Go to discovery scan configurations
On the toolbar, select your organization.
Select your scan configuration.
On the Scan configuration details page, copy the value of the Service agent
field. The service agent ID is in the format of an email address.
Grant the service agent the Tag User
role
( roles/resourcemanager.tagUser ) on the sensitivity level tag.
Alternatively, you can grant a custom
role on the sensitivity level tag. The
custom role must have the resourcemanager.tagValues.get permission and
resource-specific permissions for managing tag bindings. You
need the resource-specific createTagBinding , deleteTagBinding , and
listEffectiveTags permissions. For example, for BigQuery
tables, you need the following:
resourcemanager.tagValues.get
bigquery.tables.createTagBinding
bigquery.tables.deleteTagBinding
bigquery.tables.listEffectiveTags
For information about how to grant a role at the tag level, see Managing
access to
tags
in the Resource Manager documentation.
What's next
Create or
edit
a scan configuration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
