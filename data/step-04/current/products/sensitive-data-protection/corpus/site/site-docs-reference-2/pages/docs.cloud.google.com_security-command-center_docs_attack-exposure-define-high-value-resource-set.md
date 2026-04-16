---
title: "Define and manage your high-value resource set \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set
  title: "Define and manage your high-value resource set \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Define and manage your high-value resource set
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers (requires organization-level activation )
This page shows you how to create, edit, delete, and view resource value
configurations.
Use resource value configurations to create
your high-value resource set. Your high-value resource set determines
which of your resource instances (referred to as resources ) the
attack path simulations consider high-value resources .
You can define resource value configurations for the resources on
Google Cloud. Also, in the
Enterprise service tier, you can define configurations
for resources on the other cloud service providers that Security Command Center is
connected to.
When attack path simulations run, they identify attack paths and
calculate attack exposure scores for resources that are designated as
high-value resources and for Vulnerability class, Misconfiguration
class, and Toxic combination class findings.
Attack path simulations run approximately every six hours. As your organization
grows, simulations take longer, but they will always run at least once a day.
Simulation runs are not triggered by the creation, modification, or deletion of
resources or resource value configurations.
For an introduction to high-value resource sets and resource value
configurations, see
High-value resource sets .
Before you begin
To get the permissions that
you need to view and work with resource value configurations,
ask your administrator to grant you the
following IAM roles on your organization:
Resource value config editor ( roles/securitycenter.resourceValueConfigEditor )
Resource value config viewer ( roles/securitycenter.resourceValueConfigsViewer )
Security Center Settings Editor ( roles/securitycenter.settingsEditor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a resource value configuration
You create resource value configurations by using the Attack path simulation
tab on the Security Command Center Settings page in the Google Cloud console.
To create a resource value configuration, click the tab for your cloud
service provider and follow the steps:
Google Cloud
Go to the Attack path simulation page in Security Command Center
Settings :
Go to Attack path simulations
Select your organization. The Attack path simulation page opens.
Click Create new configuration . The Create resource value
configuration panel opens.
In the Name field, specify a name for this resource value configuration.
Optional: Enter a description of the configuration.
Under Cloud provider , select Google Cloud .
In the Select scope field, click Select and use the project
browser to select a project, folder, or the organization. This
configuration applies only to resource instances in the specified scope.
Click the Select resource type field, and then select a resource type or Any . The configuration
applies to instances of the selected resource type or, if you select
Any , to instances of
all supported resource types .
Any is the default.
Note: If you select Any and enable the Include discovery insights
from Sensitive Data Protection option, then for all supported
resources ,
the system automatically sets resource values based on data sensitivity
classifications from Sensitive Data Protection.
Optional: In the Label section, click Add label to specify one or
more labels. When a label is specified, the configuration only applies
to resources that include the label in their metadata.
If you apply a new label to any resources, it can take several hours
before the label is available for matching by a configuration.
Optional: In the Tag section, click Add tag to specify one or
more tags. When a tag is specified, the configuration only applies
to resources that include the tag in their metadata.
If you define a new tag for a resource, it can take several hours
before the tag is available for matching by a configuration.
Set the
priority value
for the matching resources by specifying one of the following options:
Optional: If you use the
Sensitive Data Protection discovery service ,
enable Security Command Center to automatically set the priority value of
supported data resources
based on data-sensitivity classifications from
Sensitive Data Protection:
Click the slider next to Include discovery insights from
Sensitive Data Protection .
In the first Assign resource value field, select the
priority value to assign to matching resources that contain
high-sensitivity data.
In the second Assign resource value field, select the
priority value to assign to matching resources that contain
medium-sensitivity data.
In the Assign resource value field, select a value to assign to the
resource instances. This value is relative to the other resource instances
in your high-value resource set. The value is used during the calculation
of attack exposure scores.
Click Save .
AWS
Enterprise service tier
Before Security Command Center can generate attack exposure scores and attack
paths for the resources that you specify in a resource value configuration,
Security Command Center must be connected to AWS. For more information, see
Multicloud support .
Go to the Attack path simulation page in Security Command Center
Settings :
Go to Attack path simulations
Select your organization. The Attack path simulation page opens.
Click Create new configuration . The Create resource value
configuration panel opens.
In the Name field, specify a name for this resource value configuration.
Optional: Enter a description of the configuration.
Under Cloud provider , select Amazon Web Services .
Optional: In the Account ID field, enter a 12-digit AWS account ID.
If unspecified, the resource value configuration applies to all
AWS accounts that are specified in the
AWS connection configuration .
Optional: In the Region field, enter an AWS region. For example,
us-east-1 . If unspecified, the resource value configuration applies
to all AWS regions.
Click the Select resource type field, then select a resource type or Any . The configuration
applies to instances of the selected resource type or, if you select
Any , to all supported resource types .
Any is the default.
Note: If you select Any and enable the Include discovery insights
from Sensitive Data Protection option, then for all supported AWS
resources ,
the system automatically sets resource values based on data sensitivity
classifications from Sensitive Data Protection.
Optional: In the Tag section, click Add tag to specify one or
more tags. When you define a tag, the connector scans only resources that
include the tag in their metadata.
If you define a new tag for a resource, it can take several hours
before the tag is available for matching by a configuration.
In the Assign resource value field, select a
priority value
for the matching resources by specifying one of the following options:
Optional: If you use the
Sensitive Data Protection discovery service ,
enable Security Command Center to automatically set the priority value of
supported AWS data resources
based on data-sensitivity classifications from
Sensitive Data Protection:
Click the slider next to Include discovery insights from
Sensitive Data Protection .
In the first Assign resource value field, select the
priority value to assign to matching resources that contain
high-sensitivity data.
In the second Assign resource value field, select the
priority value to assign to matching resources that contain
medium-sensitivity data.
In the Assign resource value field, select a value to assign to the
resource instances. This value is relative to other resource instances
in your high-value resource set. The value is used during the calculation
of attack exposure scores.
Click Save .
Azure
Enterprise service tier
Before Security Command Center can generate attack exposure scores and attack
paths for the Azure resources that you specify in a resource value configuration,
Security Command Center must be connected to Azure. For more information, see
Multicloud support .
Go to the Attack path simulation page in Security Command Center
Settings :
Go to Attack path simulations
Select your organization. The Attack path simulation page opens.
Click Create new configuration . The Create resource value
configuration panel opens.
In the Name field, specify a name for this resource value configuration.
Optional: For Description , enter a description of the configuration.
Under Cloud provider , select Microsoft Azure .
Optional: In Subscription ID , enter a 36-digit Azure
subscription ID. If unspecified, the resource value configuration applies to
all subscriptions that are specified in the Azure
connector configuration .
Optional: In the Select location field, select an Azure location—for example,
East US 2 . If you don't set a location, the resource value configuration applies to all
locations that are specified in the Azure connector configuration.
Click Select resource type , and then select a resource type or Any . The
configuration applies to instances of the selected resource type or, if you select Any , to all supported resource types .
Any is the default.
Optional: In the Tag section, click Add tag to specify one or
more tags. When a tag is specified, the configuration only applies
to resources that include the tag in their metadata.
If you define a new tag for a resource, it can take several hours
before the tag is available for matching by a configuration.
In the Assign resource value field, select a
priority value .
Click Save .
The new configuration is reflected in the attack exposure scores and
attack paths only after the next attack path simulation runs.
When you view the high-value resource set, you can see the resource value
configurations that match the resources in the set. For more information, see
View the configurations that match a high-value
resource .
For information about how to configure Sensitive Data Protection to send data
sensitivity classifications to Security Command Center, see Publish data profiles to
Security Command Center in the
Sensitive Data Protection documentation.
Edit a configuration
Except for the name, you can update any specification in a resource
value configuration.
These steps assume that you know the name of the resource value configuration
that you want to edit. If you know only the name of the relevant resource, see
View the configurations that match a high-value
resource instead.
To update an existing resource value configuration, follow these steps:
Go to the Attack path simulation page in Security Command Center
Settings :
Go to Attack path simulations
Select your organization. The Attack
path simulation page opens with the existing configurations displayed.
In the Configuration name column, click the name of the configuration
that you need to update. The Edit resource value configuration
page opens.
Update the specifications in the configuration as needed.
Click Save .
The changes are reflected in the attack exposure scores and attack paths
only after the next attack path simulation runs.
Delete a configuration
To delete a resource value configuration, follow these steps:
Go to the Attack path simulation page in Security Command Center
Settings :
Go to Attack path simulations
Select your organization. The Attack path simulation page opens.
Under Resource value configurations on the right side of the row for the
configuration you need to delete, display the actions menu by clicking the
vertical dots. If you don't see the vertical dots, scroll to the right.
From the displayed action menu, select Delete .
In the confirmation dialog, select Confirm .
The configuration is deleted.
View a configuration
You can view all existing resource value configurations on the
Attack path simulation page in Security Command Center Settings .
To view a particular resource value configuration, go to the
Attack path simulation page:
Go to Attack path simulations
Select your organization. The Attack path simulation page opens.
Under Resource value configurations on the Attack path simulation
page, scroll the list of resource value configurations until you find
the configuration that you need.
To see the configuration properties, click the name of the configuration. The
properties are displayed on the Edit resource value configuration page.
View the configurations that match a high-value resource
You can view all the configurations that match the resources that are in the
high-value resource set. This feature is useful if you want to review the rules
that determined the resource values of your high-value resource set.
To view the configurations that match a high-value resource, follow these steps:
View the high-value resource
set .
Find the resource whose configurations you want to view. The matching
configurations for that resource are listed in the Matching
configurations column. The configurations are listed in descending order
based on the resource value that they assign to the resource— High ,
Medium , or Low .
To see the properties of a configuration, click its name. The properties are
displayed on the Edit resource value configuration page.
A configuration that was recently deleted remains visible—but not
clickable—until the next attack path simulation runs.
Optional: Edit the configuration and click Save .
Troubleshooting
If you receive errors after creating, editing, or deleting resource
value configurations, check for SCC Error class findings in the
Google Cloud console by following these steps:
Go to the Findings page in the Google Cloud console:
Go to Findings
In the Quick filters panel, go to the Finding class section
and select SCC Error .
In the Findings query results panel, scan the findings for the
following SCC Error findings and click on the category name:
APS no resource value configs match any resources
APS resource value assignment limit exceeded
The finding details panel opens.
In the finding details panel, review the information in the Next steps
section.
To review the remediation instructions for the attack path simulation
SCC Error findings in the documentation, see:
APS no resource value configs match any resources
APS resource value assignment limit exceeded
What's next
For information about working with Security Command Center findings, see
Review and manage findings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
