---
title: "Create and manage tags \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/tags
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/tags
  title: "Create and manage tags \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and manage tags | Cloud Interconnect | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Network Connectivity
Cloud Interconnect
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Cloud Interconnect
Network Connectivity home
Cloud Interconnect overview
Options for connecting to multiple VPC networks
Best practices
Key terms
Topology for production-level applications (recommended)
Topology for non-critical applications
Dedicated Interconnect
Overview
Colocation facilities
Create Dedicated Interconnect connections
Provisioning overview
Order a connection
Retrieve LOA-CFAs
Test connections
Create VLAN attachments
Configure on-premises routers
Manage Dedicated Interconnect connections
View VLAN attachments and groups
Modify VLAN attachments
Disable or enable VLAN attachments
Duplicate a connection for redundancy
Use connections in other projects
Configure traffic differentiation
List locations
View connection details
Get diagnostics
Modify connection groups
Modify connections
Delete VLAN attachments
Delete connections
Change reliability options
Establish 99.99% availability
Establish 99.9% availability
Partner Interconnect
Overview
Supported service providers
Create Partner Interconnect connections
Provisioning overview
Create VLAN attachments
Request connections
Activate connections
Configure on-premises routers
Manage Partner Interconnect connections
Duplicate a VLAN attachment for redundancy
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Delete VLAN attachments
Establish 99.99% availability
Establish 99.9% availability
Cross-Cloud Interconnect
Overview
Create Cross-Cloud Interconnect connections
Connect to AWS
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order AWS ports
Configure Google Cloud resources
Configure your AWS resources
Verify your connections
Connect to Azure
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Azure ports
Configure your Google Cloud resources
Configure your Azure resources
Verify your connections
Connect to OCI
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order OCI ports
Configure your Google Cloud resources
Configure your OCI resources
Verify your connections
Connect to Alibaba Cloud
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Alibaba Cloud ports
Configure your Google Cloud resources
Configure your Alibaba Cloud resources
Verify your connections
Manage Cross-Cloud Interconnect connections
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Use connections in other projects
Configure traffic differentiation
View connection details
Get diagnostics
Disconnect networks
Delete connections
Partner Cross-Cloud Interconnect for OCI
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Paired locations
Create VLAN attachments
Request OCI connections
Activate connections
Partner Cross-Cloud Interconnect for AWS
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Choose a paired location
Create a connection initiated from Google Cloud
Create a connection initiated from AWS
Manage connections
Cross-Site Interconnect
Overview
Colocation facilities
Create Cross-Site Interconnect Connections
Provisioning overview
Check bandwidth quotas and limits
Order connections
Retrieve LOA-CFAs
Test connections
Create a cross-site network
Configure on-premises routers
Manage Cross-Site Interconnect connections
View cross-site networks
Modify a cross-site network
Disable a wire group
Delete a cross-site network
List locations
View connection details
Get diagnostics
Delete connections
Deploy
HA VPN over Cloud Interconnect
Overview
Deployment process
Terraform examples
Assign internal IP address ranges to HA VPN gateways
Configure HA VPN over Cloud Interconnect
Delete HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Overview
Set up MACsec
Enable MACsec
Disable MACsec
Modify fail-open behavior
Get MACsec keys
View MACsec status
Rotate MACsec keys
Troubleshoot MACsec
Manage
Restrict Cloud Interconnect usage
Manage resources by using custom constraints
Create and manage tags
Calculate network throughput over Cloud Interconnect
Monitor and troubleshoot
Fix SLA eligibility problems
Monitor connections
Troubleshooting
Infrastructure maintenance events
Failure scenarios and impacts
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Create and manage tags
Stay organized with collections
Save and categorize content based on your preferences.
On this page
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
You can attach tags to the following Cloud Interconnect resources:
Interconnect
InterconnectAttachment
About tags
A tag is a key-value pair that can attach to a resource within
Google Cloud. You can use tags to conditionally allow or deny policies based on
whether a resource has a specific tag. For example, you can conditionally grant
Identity and Access Management (IAM) roles based on whether a resource has a specific tag.
For more information about tags, see Tags overview .
Tags are attached to resources by creating a tag binding resource that links the
value to the Google Cloud resource.
Required permissions
To get the permissions that
you need to manage tags,
ask your administrator to grant you the
following IAM roles:
Tag Viewer ( roles/resourcemanager.tagViewer )
on the resources the tags are attached to
View and manage tags at the organization level:
Organization Viewer ( roles/resourcemanager.organizationViewer )
on the organization
Create, update, and delete tag definitions:
Tag Administrator ( roles/resourcemanager.tagAdmin )
on the resource you're creating, updating, or deleting tags for
Attach and remove tags from resources:
Tag User ( roles/resourcemanager.tagUser )
on the tag value and the resources that you are attaching or removing the tag value to
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To attach tags to Cloud Interconnect resources,
you need the
Compute Network Admin role ( roles/compute.networkAdmin ).
Create tag keys and values
Before you can attach a tag, you need to create a tag and configure its value.
To create tag keys and tag values, see Creating a tag and
Adding a tag value .
Add tags to existing resources
To add a tag to existing Cloud Interconnect resources, follow these steps:
Console gcloud
More
Go to the Cloud Interconnect page in the
Google Cloud console.
Go to Cloud Interconnect
Select the Cloud Interconnect resource for which you would like to
attach a tag.
Click
label_important Tags .
If your organization doesn't appear in the Tags panel, click
Select scope . Select your organization and click
Open .
Click Add tag .
Select the key for the tag you want to attach from the list. You can
filter the list by typing keywords.
Select the value for the tag you want to attach from the list. You
can filter the list by typing keywords.
Click Save .
In the Confirm dialog, click Confirm to attach the
tag.
A notification confirms that your tags updated.
To attach a tag to a Cloud Interconnect resource, you must create a
tag binding resource by using the
gcloud resource-manager tags bindings create command:
gcloud resource-manager tags bindings create \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID : the full ID of the resource,
including the API domain name to identify the type of resource
( //compute.googleapis.com/ ). You must use the numeric IDs for the resources, not their names.
For example:
The resource ID of a global resource, such as an
interconnect REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/global/interconnects/{resource-id}
The resource ID of a regional resource, such as an
interconnect attachment REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/regions/ REGION /interconnectAttachments/{resource-id}
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
List tags attached to resources
You can view a list of tag bindings directly attached to or inherited by the
Cloud Interconnect resource.
Console gcloud
More
Go to the Cloud Interconnect page in the
Google Cloud console.
Go to Cloud Interconnect
Select the resource to see its details. Tags are displayed in the Tags row.
To get a list of tag bindings attached to a resource, use the
gcloud resource-manager tags bindings list command:
gcloud resource-manager tags bindings list \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
RESOURCE_ID : the full ID of the resource,
including the API domain name to identify the type of resource
( //compute.googleapis.com/ ). You must use the numeric IDs for the resources, not their names.
For example:
The resource ID of a global resource, such as an
interconnect REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/global/interconnects/{resource-id}
The resource ID of a regional resource, such as an
interconnect attachment REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/regions/ REGION /interconnectAttachments/{resource-id}
LOCATION : the
location of your resource. If you're viewing a tag attached to a
global resource, such as a folder or a project, omit this
flag. If you're viewing a tag attached to a regional or a zonal
resource, you must specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
You should get a response similar to the following:
name: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F7890123456/tagValues/567890123456
tagValue: tagValues/567890123456
resource:
//compute.googleapis.com/projects/7890123456/global/interconnects/{resource-id}
Detach tags from resources
You can detach tags that have been directly attached to
a Cloud Interconnect resource. Inherited tags can be overridden by attaching
a tag with the same key and a different value, but they can't be detached.
Console gcloud
More
Go to the Cloud Interconnect page in the
Google Cloud console.
Go to Cloud Interconnect
Select the Cloud Interconnect resource from which you want to remove a
tag.
Click
label_important Tags .
In the Tags panel, next to the tag you want to detach, click
delete Delete item .
Click Save .
In the Confirm dialog, click Confirm to detach the
tag.
A notification confirms that your tags updated.
To delete a tag binding, use the
gcloud resource-manager tags bindings delete command:
gcloud resource-manager tags bindings delete \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID : the full ID of the resource,
including the API domain name to identify the type of resource
( //compute.googleapis.com/ ). You must use the numeric IDs for the resources, not their names.
For example:
The resource ID of a global resource, such as an
interconnect REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/global/interconnects/{resource-id}
The resource ID of a regional resource, such as an
interconnect attachment REST resource
in projects/7890123456 , is as follows:
//compute.googleapis.com/projects/7890123456/regions/ REGION /interconnectAttachments/{resource-id}
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
Delete tag keys and values
When removing a tag key or value definition, ensure that the tag is detached from the
Cloud Interconnect resource. You must delete existing tag attachments, called tag
bindings, before deleting the tag definition itself. To delete tag keys and tag
values, see Deleting tags .
Identity and Access Management conditions and tags
You can use tags and IAM conditions to conditionally
grant role bindings to users in your hierarchy. Changing or deleting the tag
attached to a resource can remove user access to that resource if an
IAM policy with conditional role bindings has been applied. For
more information, see Identity and Access Management conditions and tags .
What's next
See the other services that support tags .
See Tags and access control to learn how to use tags with
IAM.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
