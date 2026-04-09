---
title: "Request connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/requesting-oci-connections
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/requesting-oci-connections
  title: "Request connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Request connections | Cloud Interconnect | Google Cloud Documentation
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
Configure OCI resources
Create a VCN
Create a subnet
Create a DRG and attach it to your VCN
Create a private virtual circuit
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Request connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Configure OCI resources
Create a VCN
Create a subnet
Create a DRG and attach it to your VCN
Create a private virtual circuit
After you configure your Google Cloud resources, configure your
Oracle Cloud Infrastructure (OCI) resources.
This page provides instructions about how to configure OCI
resources to connect with Google Cloud.
After you create VLAN attachments for a Partner Cross-Cloud Interconnect for OCI connection,
configure your OCI resources by creating an
OCI FastConnect virtual circuit to establish connectivity
into your OCI virtual cloud network (VCN).
OCI configures your VLAN attachments after the virtual circuit
is created. To request a Partner Cross-Cloud Interconnect for OCI connection, contact
Oracle or visit their portal.
For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI), see
Troubleshooting .
When you request a connection, OCI requires the following
information:
Your VLAN attachment's pairing key :
this pairing key is generated when you create the VLAN attachment.
The VLAN attachment's region : the region
that you select must be supported by a Partner Cross-Cloud Interconnect for OCI
location ,
which is a city where OCI's network meets Google Cloud's
network. Traffic between your Virtual Private Cloud (VPC) network and the
OCI's network passes through this location. You must
choose an OCI location that's paired with the Google Cloud location .
Your VLAN attachment's connection capacity : this capacity can range from
1 Gbps to 50 Gbps. The capacity depends on your bandwidth requirements and
what's offered by OCI. Pricing for
each VLAN attachment is based on its capacity.
After you request a connection and the OCI
VLAN attachment configuration is complete, you
receive an email notification from Google. The state of your attachment changes
from PENDING_PARTNER to PENDING_CUSTOMER . If you
pre-activated your
attachment, it changes to ACTIVE .
Note: If your VLAN attachment remains in the PENDING_PARTNER or
Waiting for service provider state for an extended period of time, contact
OCI assistance.
If you pre-activated your VLAN attachment,
the attachment can immediately start passing traffic. If not, you must activate
the attachment before it can pass traffic.
Configure OCI resources
OCI resources must be created in the OCI location paired with the
Google Cloud location. For a list of paired locations, see
Paired locations .
Note: For the most up-to-date information about how to configure OCI resources, see
Access to Google Cloud Platform
in the OCI documentation.
Create a VCN
Create a virtual cloud network (VCN) that's in the same region and
tenancy as your FastConnect ports.
OCI console
More
Note: For the most up-to-date information about how to create a VCN, see
Creating a VCN
in the OCI documentation.
Sign in to the OCI console.
Make sure that the Regions list shows the region where your
FastConnect port is located.
In the menu menu, select
Networking > Virtual cloud networks .
Click Create VCN .
Fill in the required fields, and then define at least one IPv4
CIDR block.
Click Create VCN .
Create a subnet
In your VCN, create a subnet.
OCI console
More
Note: For the most up-to-date information about how to create a subnet, see
Creating a VCN
in the OCI documentation.
In the OCI console, go to the VCN that you just created.
Click Add subnet .
Fill in the required fields, and then define at least one IPv4
CIDR block.
Click Create Subnet .
Create a DRG and attach it to your VCN
A Dynamic Routing Gateway (DRG) is a virtual router. Create a
DRG and attach it to your VCN.
OCI console
More
Note: For the most up-to-date information about how to create a DRG, see
Creating a DRG
in the OCI documentation.
In the OCI console, on the menu menu,
select Networking .
In the Customer connectivity section, select Dynamic routing
gateway .
Click Create Dynamic Routing Gateway .
Enter a name.
Click Create Dynamic Routing Gateway . OCI displays a
page that represents the DRG; you might have to wait a
few minutes for the system to provision the resource.
While it does so, the controls on the page are disabled.
When the controls become active, continue to the next step.
Click Create Virtual Cloud Network Attachment .
Enter an attachment name.
Select the VCN network that you created previously.
Note: Don't change any of the values listed in the Advanced options
section.
Click Create Virtual Cloud Network Attachment .
Create a private virtual circuit
Create a private virtual circuit for each FastConnect resource. If you created a pair of VLAN attachments, complete the following steps for each one.
OCI console
More
Choose a compartment. If you're not sure which one, choose the compartment
that contains the DRG to connect to. This compartment, along with
a corresponding IAM policy, controls who can access the virtual circuit.
On the main menu, click Networking .
In the Customer connectivity section, click FastConnect .
Click Create Connection .
In the Connection types section, select FastConnect partner , and then choose
Google Cloud: OCI Interconnect .
In the Name field, enter a name for the circuit. The value doesn't
need to be unique across your virtual circuits, and you can change it later.
Leave the Create in compartment list as it is (the compartment you're in).
For Virtual circuit type , select Private virtual circuit .
In the Dynamic routing gateway list, the DRG you set up earlier is
shown. If not, change the compartment to the one that stores the DRG,
and then select the DRG.
In the Provisioned bandwidth list, select the capacity that you chose
for your VLAN attachment (or the closest value available).
In the Partner service key field, enter the pairing key you received
from Google Cloud when you created the VLAN attachment.
In the MTU field, enter 1500 as the MTU value.
Click Continue . The virtual circuit is provisioned.
Click Close .
After the virtual circuit is provisioned, the connection to Google Cloud
is active. Then you can activate any VLAN attachments that you didn't
pre-activate when you created them. Check the status of provisioning virtual
circuits in FastConnect.
After the OCI virtual circuit is created, Google
automatically configures an interface and a BGP peering session on the
associated Cloud Router. Don't modify these Google-defined
configurations because doing so shuts down the BGP session. However, if you delete
your attachment, you can delete these configurations.
Previous
arrow_back
Create VLAN attachments
Next
Activate connections
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
