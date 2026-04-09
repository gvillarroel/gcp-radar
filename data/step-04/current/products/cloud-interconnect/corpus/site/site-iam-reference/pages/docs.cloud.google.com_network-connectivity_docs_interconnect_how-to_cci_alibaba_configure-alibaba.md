---
title: "Configure your Alibaba Cloud resources \_|\_ Cloud Interconnect \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/alibaba/configure-alibaba
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/alibaba/configure-alibaba
  title: "Configure your Alibaba Cloud resources \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure your Alibaba Cloud resources | Cloud Interconnect | Google Cloud Documentation
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
Create a Virtual Border Router (VBR)
Create a VBR-to-VPC network connection
Create a custom route in the VPC network
Create a custom route in the VBR
Configure BGP peering in a VBR
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure your Alibaba Cloud resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create a Virtual Border Router (VBR)
Create a VBR-to-VPC network connection
Create a custom route in the VPC network
Create a custom route in the VBR
Configure BGP peering in a VBR
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
Alibaba Cloud documentation
.
After you configure your Google Cloud resources, configure your Alibaba
Cloud resources.
For the most up-to-date information about how to create a
Virtual Border Router (VBR), see
Create and manage a VBR
in the Alibaba Cloud documentation.
Create a Virtual Border Router (VBR)
A VBR connects customer premises equipment to a Virtual Private Cloud (VPC)
network and allows data transfer between them.
To create a VBR, follow these steps.
Console
More
Log in to the Alibaba Cloud Express Connect
console .
On the Virtual Border Router page, click Create VBR , and then
set the following parameters:
For Physical Connection Interface , select Express Connect circuit ,
and then select the Express Connect circuit ID from the list.
For VLAN ID , enter the VLAN ID that you used earlier when
configuring Google resources.
For Set VBR Bandwidth Value , enter your desired bandwidth.
For IPv4 Address (Alibaba Cloud Gateway) , enter the BGP
peer IP address of the Google Cloud Router BGP peering.
For IPv4 Address (Data Center Gateway) , enter the
Cloud Router BGP IP address of the Google
Cloud Router BGP peering.
Click OK .
Create a VBR-to-VPC network connection
To connect the VBR to a VPC network, follow these steps.
Console
More
In the Express Connect console, go to the VPC Peering Connections
> VBR-to-VPC page.
Click Create Peering Connection , and
then set the following parameters:
For Initiator Region , select the region where you created the VBR.
For Initiator VBR , select the VBR that you created.
For Acceptor Region Type , select Intra-Region if the
VPC network is in the same region as the VBR.
Select Inter-Region if the VPC network is
in a different region.
For Acceptor VPC , select the VPC network that you
want to connect to Google Cloud.
Select the I have read and accept the Terms of Service for Express Connect
Peering Connections (Pay-As-You-Go) checkbox.
Click OK .
Create a custom route in the VPC network
To create a custom route in the VPC network, follow these steps:
Console
More
In the VPC console, on the Route Tables page,
click the route table.
On the specific route table page, choose the Custom Route tab under
the Route Entry List tab.
Click Add Route Entry , and then set the following parameters:
For Destination CIDR Block , enter the VPC IP
address range in Google Cloud.
For Next Hop Type , select Router Interface (To VBR) , click
General Routing , and then select the VBR.
Click OK .
Create a custom route in the VBR
To create a custom route in the VBR, follow these steps.
Console
More
In the Express Connect console, on the Virtual Border Router page, click
the VBR.
On the specific VBR page, click the Routes tab.
Click Add Route , and then set the following parameters:
For Next Hop Type , select VPC .
For Destination CIDR Block , enter the VPC network IP
address range on Alibaba Cloud.
For Next Hop , select the VPC network.
Click OK .
Configure BGP peering in a VBR
To set up BGP peering in the VBR, follow these steps.
Console
More
In the Express Connect console, on the Virtual Border Router page,
click the VBR.
On the corresponding VBR page, click the BGP Groups tab.
Click Create BGP Group , and then set the following parameters:
For Peer ASN , enter the ASN that you specified in the
Cloud Router on Google Cloud.
If you configured BGP MD5 authentication on your Google
Cloud Router BGP peering, for BGP Key , enter
the BGP MD5 key.
Click OK .
On the corresponding VBR page, click the BGP Peers tab.
Click Create BGP Peer , and then set the following parameters:
For BGP Group , select the BGP group.
For BGP Peer IP , enter the VLAN attachment's Cloud Router
BGP IP.
If you enabled Bidirectional Forwarding Detection (BFD) on your Google
Cloud Router BGP peering, check the Enable BFD option.
Click OK .
On the corresponding VBR page, click the Advertised BGP Subnets tab.
Click Advertise BGP Subnet , and then set the following parameters:
For Advertised Subnet , enter the VPC network IP address
range on Alibaba Cloud.
Click OK .
Previous
arrow_back
Configure your Google Cloud resources
Next
Verify your connections
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
