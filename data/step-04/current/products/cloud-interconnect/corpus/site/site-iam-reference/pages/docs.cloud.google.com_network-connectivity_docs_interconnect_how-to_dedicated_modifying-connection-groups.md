---
title: "Modify connection groups \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-connection-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-connection-groups
  title: "Modify connection groups \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Modify connection groups | Cloud Interconnect | Google Cloud Documentation
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
Establish 99. 99% availability
Establish 99. 9% availability
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
Create Cloud Interconnect connection groups
Create Cloud Interconnect connections within a connection group
Add existing Cloud Interconnect connections to a group
Remove Cloud Interconnect connections from a group
Delete Cloud Interconnect connection groups
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Modify connection groups
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create Cloud Interconnect connection groups
Create Cloud Interconnect connections within a connection group
Add existing Cloud Interconnect connections to a group
Remove Cloud Interconnect connections from a group
Delete Cloud Interconnect connection groups
What's next
This document provides instructions for creating Cloud Interconnect connection
groups; creating and adding Cloud Interconnect connections to a
connection group; removing connections from a connection group; and deleting
connection groups. For more information about Cloud Interconnect
connection groups, see
Resiliency and SLA options
in the Cloud Interconnect overview.
Create Cloud Interconnect connection groups
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.groups.create
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Click Create group .
Specify the details of the Dedicated Interconnect
connection group:
Name : A name for the connection group. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect-group .
Description : An optional description of the connection group.
In the Production SLA field, select the SLA option that you need for
your deployment.
Optional: In the Group members field, select Add interconnects .
Optional: In the box, select the Cloud Interconnect connections that you
want to add to the connection group. Repeat this step for each
Cloud Interconnect connection that you want to add to the
connection group.
Click Save .
When you create a new connection group, you specify an intended SLA by using
the --intended-topology-capability flag with a value of PRODUCTION_CRITICAL ,
PRODUCTION_NON_CRITICAL , or NO_SLA . In the following example
command, you create a connection group called
GROUP_NAME with an intended SLA of
PRODUCTION_NON_CRITICAL :
gcloud compute interconnects groups create GROUP_NAME \
--intended-topology-capability PRODUCTION_NON_CRITICAL
Note that this new group doesn't yet satisfy your intended SLA because it
doesn't have any Cloud Interconnect connections.
Create Cloud Interconnect connections within a connection group
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnectGroups.get
compute.interconnects.create
compute.interconnectGroups.update
Roles
Owner ( roles/owner )
Editor ( roles/editor )
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Click Set up physical connection .
In the Interconnect type field, select Dedicated interconnect
connection .
Click Continue .
Select Order a new Dedicated Interconnect connection .
Click Continue .
In the Intended SLA field, select the SLA option that you need for
your deployment.
Select Add this interconnect to an existing group .
In the Interconnect group box, select the Cloud Interconnect
connection group to which you want to add the new connection.
Click Next .
Specify the details of the Dedicated Interconnect connection:
Name : A name for the connection. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect .
Location : The physical
location
where the connection is created. When you create a connection group,
you only choose the facility. The location is chosen automatically.
Capacity : The total capacity of your connection,
which is determined by the number and size of the circuits that you
order.
Note: You can view the estimated cost of your choice in the
Google Cloud console page.
Select one of the following options:
1 x 10-Gbps circuit in 10-Gbps increments up to 8 x 10-Gbps
(80 Gbps) circuits
1 x 100-Gbps (100 Gbps) circuit
2 x 100-Gbps (200 Gbps) circuits
Click Next .
If you require redundancy, specify details for your duplicate
connection, and then click Next .
Specify your contact information:
Company name : The name of your organization to put in
the LOA as the party authorized to request a connection.
Technical contact : An email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can
specify only one address.
If you are creating a connection
through Workforce Identity Federation ,
specifying a Technical contact is required.
Workforce Identity Federation is in Preview .
Review your order. Check that your connection details and
contact information are correct. If everything is correct, click Place
order . If not, go back and edit the connection details.
On the order confirmation page, review the next steps, and then click
Done .
In the following example, you create Cloud Interconnect
connections called CONNECTION_1 and
CONNECTION_2 in the connection group called
GROUP_NAME . You provide the --interconnect flag, with a
unique Cloud Interconnect name and any other fields that you want
to be different for each new Cloud Interconnect connection that you
want to create in the group.
In the following example, each Cloud Interconnect connection has a
different name and description, but share the same values for all other
fields.
gcloud compute interconnects groups create-members GROUP_NAME \
--interconnect-type dedicated \
--link-type LINK_TYPE \
--facility FACILITY_NAME \
--customer-name NAME \
--noc-contact-email EMAIL_ADDRESS \
--interconnect "name= CONNECTION_1 ,description='The first interconnect connection'" \
--interconnect "name= CONNECTION_2 ,description='The second interconnect connection'"
Replace the following values:
GROUP_NAME : the name of your connection group
LINK_TYPE :
If you want your Dedicated Interconnect connection to be made up of 10-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_10G_LR .
If you want your connection to be made up of 100-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_100G_LR .
FACILITY_NAME : the name of the facility in which you want
to create the Dedicated Interconnect connections, without -zone1 or zone2 .
The Dedicated Interconnectconnection group automatically
selects the best zones for each Interconnect to maximize
your resiliency. You can find facility names in the
colocation facility table .
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
EMAIL_ADDRESS : an optional email address for the NOC contact. You can
specify only one email
address—you don't need to enter your own address because you
are included in all notifications. If you are creating a connection
through Workforce Identity Federation ,
providing an email address with the
‑‑noc-contact-email flag is required.
Workforce Identity Federation is in Preview .
CONNECTION_1 : the name of the first
Cloud Interconnect connection.
CONNECTION_2 : the name of the second
Cloud Interconnect connection.
In the following alternative
example the Cloud Interconnect connections have the same
description, but different facilities:
gcloud compute interconnects groups create-members GROUP_NAME \
--interconnect-type dedicated \
--description "Both will have this same description" \
--link-type LINK_TYPE \
--customer-name NAME \
--noc-contact-email EMAIL_ADDRESS \
--interconnect "name= CONNECTION_1 ,facility= FACILITY_NAME_1 " \
--interconnect "name= CONNECTION_2 ,facility= FACILITY_NAME_2 " \
Replace the following values:
GROUP_NAME : the name of your connection group
LINK_TYPE :
If you want your Dedicated Interconnect connection to be made up of 10-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_10G_LR .
If you want your connection to be made up of 100-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_100G_LR .
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
EMAIL_ADDRESS : an optional email address for the NOC contact. You can
specify only one email
address—you don't need to enter your own address because you
are included in all notifications. If you are creating a connection
through Workforce Identity Federation ,
providing an email address with the
‑‑noc-contact-email flag is required.
Workforce Identity Federation is in Preview .
CONNECTION_1 : the name of the first
Cloud Interconnect connection.
CONNECTION_2 : the name of the second
Cloud Interconnect connection.
FACILITY_NAME_1 : the name of the first facility as
described in the previous example.
FACILITY_NAME_2 : the name of the second facility as
described in the previous example.
Add existing Cloud Interconnect connections to a group
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnectGroups.get
compute.interconnectGroups.update
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
You can add Cloud Interconnect connections to a connection group by
editing the group.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
In the Interconnect groups field, select the connection group that
you want to edit.
Click Edit .
In the Group members field, select Add interconnect , then select
the Cloud Interconnect connection that you want to add to the
connection group. Repeat this step for each Cloud Interconnect
connection that you want to add to the group.
Click Save .
In the following example command, you add existing connections
CONNECTION_1 and CONNECTION_2 to the
connection group called GROUP_NAME :
gcloud compute interconnects groups add-members GROUP_NAME \
--interconnects= CONNECTION_1 , CONNECTION_2
Remove Cloud Interconnect connections from a group
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnectGroups.get
compute.interconnectGroups.update
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
You can remove Cloud Interconnect connections from a connection
group by editing the group.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
In the Interconnect groups field, select the connection group that
you want to edit.
Click Edit .
In the Group members field, click the box with the
Cloud Interconnect connection that you want to remove from the
connection group, and either replace the selected connection with
another connection or click
delete Delete .
Click Save .
In the following example command, you remove connections
CONNECTION_1 and CONNECTION_2 from the
connection group called GROUP_NAME :
gcloud compute interconnects groups remove-members GROUP_NAME \
--interconnects= CONNECTION_1 , CONNECTION_2
Delete Cloud Interconnect connection groups
Use the instructions in this section to delete a Cloud Interconnect
connection group. Note that when you delete a connection group, the
Cloud Interconnect connections that are members of the group aren't
deleted. To delete Cloud Interconnect connections, see
Delete connections .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnectGroups.delete
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
In the Interconnect groups field, find the row of the connection
group that you want to delete and then click the checkbox next to the
group.
Click Delete , then click Delete again in the confirmation box.
Click Save .
In the following example command, you delete the connection group named
GROUP_NAME .
gcloud compute interconnects groups delete GROUP_NAME
What's next
View VLAN attachment groups and their details
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
