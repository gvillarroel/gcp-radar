---
title: "Order Cross-Site Interconnect connections \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/order-connections
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/order-connections
  title: "Order Cross-Site Interconnect connections \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order Cross-Site Interconnect connections | Google Cloud Documentation
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
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order Cross-Site Interconnect connections
Stay organized with collections
Save and categorize content based on your preferences.
Ordering Cross-Site Interconnect connections starts the creation
process
of your Cross-Site Interconnect connections. When you order Cross-Site Interconnect connections,
you specify details such as the capacity and the locations of your connections.
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Cross-Site Interconnect, see
Troubleshooting .
You can request the following capacities:
1 x 10-Gbps (10 Gbps) circuit
1 x 100-Gbps (100 Gbps) circuit
Caution: The link type that you select when you create a Cross-Site Interconnect connection
cannot be changed later. For example, if you select a 10-Gbps link type and
need a 100-Gbps link type later, you must create a new Cross-Site Interconnect connection
with the higher capacity.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.create
Roles
Owner ( roles/owner )
Editor ( roles/editor )
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the Physical connections page, click
add Set up physical connection .
Select Cross-Site Interconnect connection , and then click Continue .
If you haven't already, check your bandwidth quotas and limits to ensure that you can successfully
create a cross-site network with your required bandwidth.
After you have confirmed that you have sufficient quota, click
Next: I acknowledge .
Specify the details of the Cross-Site Interconnect connection:
Name : A name for the connection. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect .
Colocation facility : The physical
location
where the connection is created. Your on-premises network
must meet Google Cloud's network in this location.
Capacity : The total capacity of your connection,
which is determined by the number and size of the circuits that you
order.
Select one of the following options:
1 x 10-Gbps circuit
1 x 100-Gbps circuit
Click Next .
Specify details for your duplicate
connection, and then click Next .
Specify your contact information:
Company name : The name of your organization to put in
the LOA as the party authorized to request a connection.
Technical contact : An email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can
specify only one address.
If you are creating a connection
through workforce identity federation ,
specifying a Technical contact is required.
Review your order. Check that your connection details and
contact information are correct. If everything is correct, click
Place order . If not, go back and edit the connection details.
On the order confirmation page, view your order details, your
quota requirements acknowledgement, and next steps.
Submit a Letter of Authorization and Connecting Facility Assignment
(LOA-CFA) forms to your colocation facility. You can wait for an email,
or you can download the form from the Google Cloud console .
Configure your peer router to establish the connection.
Complete your site-to-site connection by adding another interconnect
in a different location.
If you need to order a connection for your second site, click
Order interconnect , and repeat the steps in this section.
Click Done .
Create a Cross-Site Interconnect connection that is a connection type of DEDICATED and specifies the CROSS_SITE_NETWORK feature.
If you plan to use MACsec for Cloud Interconnect , include MACSEC in the list of
requested features.
gcloud compute interconnects create INTERCONNECT_NAME \
--customer-name= NAME \
--interconnect-type=DEDICATED \
--requested-features=CROSS_SITE_NETWORK[,MACSEC] \
--link-type= LINK_TYPE \
--location= LOCATION_NAME \
[--noc-contact-email= EMAIL_ADDRESS ] \
[--description= STRING ]
Replace the following values:
INTERCONNECT_NAME : a name for the Cross-Site Interconnect
connection; this name is displayed in the Google Cloud console and
is used by the Google Cloud CLI to reference the connection, such as
my-interconnect
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
LINK_TYPE :
If you want your Cross-Site Interconnect connection to be made up of a 10-Gbps
circuit, replace LINK_TYPE with
LINK_TYPE_ETHERNET_10G_LR .
If you want your connection to be made up of a 100-Gbps
circuit, replace LINK_TYPE with
LINK_TYPE_ETHERNET_100G_LR .
LOCATION_NAME : specifies the location where the
Cross-Site Interconnect connection is created; to list the names of locations, see
List locations for Cross-Site Interconnect
EMAIL_ADDRESS and STRING :
optional; for the NOC contact, you can specify only one email
address—you don't need to enter your own address because you
are included in all notifications. If you are creating a connection
through workforce identity federation ,
providing an email address with the
‑‑noc-contact-email flag is required.
Create a duplicate Cross-Site Interconnect connection that is in the same metro
but in a different edge availability domain (metro availability zone).
gcloud compute interconnects create REDUNDANT_INTERCONNECT_NAME \
--customer-name= NAME \
--interconnect-type=DEDICATED \
--requested-features=CROSS_SITE_NETWORK[,MACSEC] \
--link-type= LINK_TYPE \
--location= LOCATION_NAME \
[--noc-contact-email= EMAIL_ADDRESS ] \
[--description= STRING ]
Replace the following:
REDUNDANT_INTERCONNECT_NAME : a name for the
redundant Cross-Site Interconnect connection
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
LINK_TYPE : the per-circuit capacity of your
Cross-Site Interconnect connection; use the same value
as the existing connection:
If your existing connection is made up of 10-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_10G_LR .
If your existing connection is made up of 100-Gbps
circuits, replace LINK_TYPE with
LINK_TYPE_ETHERNET_100G_LR .
LOCATION_NAME : the location where the redundant
Cross-Site Interconnect connection is created
From the list of locations ,
select one that's in the same metro but in a different edge availability
domain from the existing connection.
For example, if the existing connection is in iad-zone2-1 , select a
location that's in Ashburn but in zone 1, such as iad-zone1-1 .
EMAIL_ADDRESS and STRING :
optional; for the NOC contact, you can specify only one email
address—you don't need to enter your own address because you
are included in all notifications
To order connections for your second site, repeat the steps in this section.
After you order a Cross-Site Interconnect connection, Google emails you a confirmation
and allocates ports for you. When the allocation is complete, Google generates
LOA-CFAs for your connections and emails them to you.
All the automated emails are sent to the NOC contact and the email address
of the Google Account used when ordering the Cross-Site Interconnect connection. You can
also get your LOA-CFAs by using the Google Cloud console.
You can use the Cross-Site Interconnect connection only after your connections have been
provisioned and tested for light levels and IP connectivity.
Note: Billing for your
Cross-Site Interconnect connection starts after it's ready to use
(all tests have passed) or
30 days after your order is received. You aren't charged before then. You can
cancel your order by
deleting the
Cross-Site Interconnect connection.
Previous
arrow_back
Check bandwidth quotas and limits
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
