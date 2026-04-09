---
title: "Configure your OCI resources \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/configure-oci
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/configure-oci
  title: "Configure your OCI resources \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure your OCI resources | Cloud Interconnect | Google Cloud Documentation
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
Configure your OCI resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create a VCN
Create a subnet
Create a DRG and attach it to your VCN
Create a private virtual circuit
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
OCI documentation
.
After you configure your Google Cloud resources, configure your Oracle
Cloud Infrastructure (OCI) resources.
Create a VCN
Create a virtual cloud network (VCN) that's in the same region and
tenancy as your FastConnect ports.
Console
More
Note: For the most up-to-date information about how to create a VCN, see
Working with VCNs and subnets
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
Console
More
Note: For the most up-to-date information about how to create a subnet, see
Working with VCNs and subnets
in the OCI documentation.
If you don't already have it displayed, navigate to the VCN that you
just created.
Click Add subnet .
Fill in the required fields, and then define at least one IPv4
CIDR block.
Click Create Subnet .
Create a DRG and attach it to your VCN
A Dynamic Routing Gateway (DRG) is a virtual router. Create a
DRG and attach it to your VCN.
Console
More
Note: For the most up-to-date information about how to create a DRG, see
Dynamic Routing Gateways
in the OCI documentation.
In the menu menu, select
Networking . In the Customer connectivity section, select
Dynamic routing gateway .
Click Create Dynamic Routing Gateway .
Enter a name.
Click Create Dynamic Routing Gateway .
OCI displays a page that represents the DRG; you might have to wait a
few minutes for the system to provision the resource. While it does so,
the controls on the page are disabled. When the controls become active,
click Create Virtual Cloud Network Attachment .
Enter an attachment name.
Select the VCN network that you created previously.
Note: Don't change any of the values listed under
Advanced options .
Click Create Virtual Cloud Network Attachment .
Create a private virtual circuit
For each of your FastConnect resources, create a private virtual circuit.
As part of this process, you configure a Border Gateway Protocol (BGP) session.
Complete the following steps twice. The first time, use the values that you
set for your primary VLAN attachment. The second time, use the values from
your redundant attachment.
Console
More
Note: For the most up-to-date information about how to create a virtual
circuit, see the Set up your virtual circuits section on the
Getting started with FastConnect page
in the OCI documentation.
In the menu menu, select
Networking . In the Customer connectivity section, select
FastConnect .
Click the name of your FastConnect resource.
Click Virtual circuits . The page updates to include additional
options.
Click Add virtual circuit .
Fill out the Create virtual circuit form :
Enter a name for the circuit.
Select the Private virtual circuit box.
Select the DRG that you created previously.
In the Provisioned bandwidth field, enter the
capacity that you chose for your Google Cloud VLAN attachment.
In the VLAN field, enter the same VLAN ID that you chose for your
Google Cloud VLAN attachment.
In the Customer BGP IPv4 address field, enter the value from the
Cloud Router BGP IP field on your Google Cloud VLAN
attachment.
In the Oracle BGP IPv4 address field, enter the value from the
BGP Peer IP field on your Google Cloud VLAN
attachment.
In the Customer BGP ASN field, enter the value of your
Google Cloud Router ASN.
If you configured MD5 authentication on the
Cloud Router, select Use a BGP MD5 authentication key ,
and enter your key.
Optional: Adjust the MTU from the default setting of 1500 .
Click Create .
After you create each circuit, you see the corresponding BGP session.
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
