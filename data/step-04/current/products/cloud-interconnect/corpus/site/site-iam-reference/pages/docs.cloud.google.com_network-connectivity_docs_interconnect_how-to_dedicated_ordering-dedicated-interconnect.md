---
title: "Order a Dedicated Interconnect connection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect
  title: "Order a Dedicated Interconnect connection \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order a Dedicated Interconnect connection | Google Cloud Documentation
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
Create a Dedicated Interconnect connection group Create connections in a Dedicated Interconnect connection group
Create a Dedicated Interconnect connection
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order a Dedicated Interconnect connection
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create a Dedicated Interconnect connection group Create connections in a Dedicated Interconnect connection group
Create a Dedicated Interconnect connection
Ordering a Dedicated Interconnect connection starts the creation
process
of your Dedicated Interconnect connection. When you order a Dedicated Interconnect connection,
you specify details such as the capacity and the location of your connection.
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Dedicated Interconnect, see
Troubleshooting .
For more information about the capacities that you can request, see
Port capacity .
Create a Dedicated Interconnect connection group
Cloud Interconnect connection groups provide information about
the reliability of the grouped connections, compared to the requirements
for your intended level of reliability. For more information about
Cloud Interconnect connection groups, see
Resiliency and SLA options .
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
Create connections in a Dedicated Interconnect connection group
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
Create a Dedicated Interconnect connection
When you create a Dedicated Interconnect connection, we
recommend that you follow the steps in the previous sections.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.create
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Click Set up physical connection .
Select Dedicated Interconnect , and then click Continue .
Select Order new Dedicated Interconnect , and then click Continue .
In the Intended SLA field, select the SLA option that you need for
your deployment.
Optional: If you chose a Critical production or Non-critical
production SLA, you can create the connection within a new
Cloud Interconnect connection group:
Select Create a new group .
Specify a name and optionally add a description.
Click Next .
Specify the details of the Dedicated Interconnect connection:
Name : a name for the connection. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect .
Colocation facility : the physical
location
where the connection is created. Your on-premises network
must meet Google Cloud's network in this location.
Capacity : the total capacity of your connection,
which is determined by the number and size of the circuits that you
order.
Note: You can view the estimated cost of your choice on the
Google Cloud console page.
Select one of the available capacity options.
Click Next .
If you require redundancy, specify details for your duplicate
connection, and then click Next .
Specify your contact information:
Company name : the name of your organization to put in
the LOA as the party authorized to request a connection.
Technical contact : an email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can
specify only one address.
If you are creating a connection
through workforce identity federation ,
specifying a Technical contact is required.
Workforce identity federation is in Preview .
Review your order. Your SLA eligibility is displayed on this page. Check
that your connection details and contact information are correct. If
everything is correct, click Place order . If not, go back and edit
the connection details.
On the order confirmation page, review the next steps, and then click
Done .
Create a Dedicated Interconnect connection that is a connection type of
DEDICATED :
gcloud compute interconnects create INTERCONNECT_NAME \
--customer-name= NAME \
--interconnect-type=DEDICATED \
--link-type= LINK_TYPE \
--location= LOCATION_NAME \
--requested-link-count= NUMBER_OF_LINKS \
[--requested-features=MACSEC]
[--noc-contact-email= EMAIL_ADDRESS ] \
[--description= STRING ]
Replace the following values:
INTERCONNECT_NAME : a name for the Dedicated Interconnect
connection; this name is displayed in the Google Cloud console and
is used by the Google Cloud CLI to reference the connection, such as
my-interconnect
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
LINK_TYPE : the type of circuits with which you want
to configure your connection. Replace LINK_TYPE
with LINK_TYPE_ETHERNET_XG_LR , in which X is the capacity that
you want. For example, to configure a connection made up of 100-Gbps
circuits you replace LINK_TYPE with
LINK_TYPE_ETHERNET_100G_LR . For more information about capacity, see
Port capacity .
LOCATION_NAME : specifies the location where the
Dedicated Interconnect connection is created; to list the names of locations, see
List locations
NUMBER_OF_LINKS : number of circuits of type link-type ; this
field combined with --link-type determines your total connection
capacity. For example, for 2 x 100-Gbps (200 Gbps) circuits, this
number would be 2 .
EMAIL_ADDRESS and STRING :
optional; for the NOC contact, you can specify only one email
address—you don't need to enter your own address because you
are included in all notifications. If you are creating a connection
through workforce identity federation ,
providing an email address with the
‑‑noc-contact-email flag is required.
Workforce identity federation is in Preview .
For redundancy, create a duplicate Dedicated Interconnect connection that is in
the same location
but in a different edge availability domain (metro availability zone).
For more information, see
Duplicate a connection for redundancy .
After you order a Dedicated Interconnect connection, Google sends you
a confirmation through email, and allocates ports for you. When the allocation is complete,
Google generates LOA-CFAs for your connections and sends them to you through email.
All the automated emails are sent to the NOC contact and the email address
of the user account used when ordering the Dedicated Interconnect connection. You can
also get your LOA-CFAs by using the Google Cloud console.
You can use the Dedicated Interconnect connection only after your connections have been
provisioned and tested for light levels and IP connectivity.
Note: Billing for your
Dedicated Interconnect connection starts after the connection is ready to use
(all tests have passed) or
30 days after your order is received. You aren't charged before then. You can
cancel your order by
deleting the
Dedicated Interconnect connection.
Previous
arrow_back
Provisioning overview
Next
Retrieve LOA-CFAs
arrow_forward
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
