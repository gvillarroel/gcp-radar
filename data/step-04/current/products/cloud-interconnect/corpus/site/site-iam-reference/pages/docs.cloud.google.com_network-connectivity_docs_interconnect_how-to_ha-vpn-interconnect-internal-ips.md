---
title: "Assign internal IP address ranges to HA VPN gateways \_|\_ Cloud Interconnect\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/ha-vpn-interconnect-internal-ips
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/ha-vpn-interconnect-internal-ips
  title: "Assign internal IP address ranges to HA VPN gateways \_|\_ Cloud Interconnect\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Assign internal IP address ranges to HA VPN gateways | Cloud Interconnect | Google Cloud Documentation
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
Prefix length and HA VPN gateway interfaces
Considerations
Reserve regional internal IP ranges
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Assign internal IP address ranges to HA VPN gateways
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Prefix length and HA VPN gateway interfaces
Considerations
Reserve regional internal IP ranges
What's next?
When you deploy HA VPN over Cloud Interconnect, you have the option of using
either regional internal IP addresses or regional external IP addresses for
your HA VPN gateway interfaces. Unless you are required
to use external IP addresses for your VPN tunnels (for example, to connect to
another cloud provider), we recommend that you use regional internal IP addresses
for HA VPN over Cloud Interconnect.
If you choose to use regional internal IP addresses (RFC 1918 only), you must
reserve a private IPv4 address range for your VLAN attachment. The IP addresses
from that range are used exclusively for your HA VPN
gateway interfaces. HA VPN uses these IP addresses
to communicate with one or more peer VPN gateways.
Note: You can't assign a regional internal IP address to an
HA VPN gateway interface on an HA VPN
gateway that is not deployed as part of an HA VPN over Cloud Interconnect
deployment.
If you do not configure the VLAN attachments to use regional internal
IP addresses, then Google Cloud selects two regional external IP addresses
from its address pool and allocates an address to each interface.
Regardless of whether you choose regional internal or external IP addressing,
HA VPN over Cloud Interconnect packets
do not travel over the public internet at any point.
The IP address requirements for Cloud Router BGP interfaces remain the same as
those used in HA VPN deployments without
Cloud Interconnect. The BGP interfaces must be assigned link-local
IPv4 addresses from the 169.254.0.0/16 address space.
Prefix length and HA VPN gateway interfaces
When you reserve a regional internal IPv4 address range, you configure the
prefix length. The prefix length determines the size of the reserved range. For
HA VPN over Cloud Interconnect, this configuration establishes how many
regional internal IP addresses are available for your HA VPN
gateway interfaces.
The prefix length ( --prefix-length ) must be set between 26 and 29. You cannot
modify the size of this range later.
When you specify the prefix length, choose the prefix length that matches your
attachment's capacity. Reserve a large enough range for your VLAN attachment so
that you can accommodate additional HA VPN gateways if you
require them later.
For a VLAN attachment with the capacity of...
...reserve at least this many IP addresses
for your HA VPN gateway interfaces
Use this prefix length
2 Gbps or fewer
1
/29
5 Gbps
2
/29
10 Gbps
4
/29
20 Gbps
7
/28
50 Gbps
17
/26
100 Gbps
34
/26
Note: This table assumes that you are deploying one HA VPN
gateway for every peer VPN gateway. If you plan to deploy more peer VPN gateways
and fewer HA VPN gateways, you might need fewer IP addresses.
For more information, see
Gateway and tunnel mapping .
Considerations
If you choose to reserve regional internal IP addresses for your
HA VPN gateways, keep the following in mind:
Different reserved ranges in the same Virtual Private Cloud (VPC) network cannot
overlap.
The reserved ranges cannot overlap with subnets used for virtual machine (VM)
instances in the same virtual network.
If you reserve an internal IP address range by using --purpose=IPSEC_INTERCONNECT ,
then the prefix length for the range must be between 26 and 29.
If you are using Dedicated Interconnect, an error is thrown if you apply
an address range with a prefix length that does not match the bandwidth of the
VLAN attachments.
For each VLAN attachment, you can only specify one internal IP address range.
If you assign regional internal IP addresses to one VLAN attachment in your
HA VPN over Cloud Interconnect deployment, then
the other VLAN attachment in the deployment must match and also use internal
IP addresses. The other VLAN attachment can't use regional external IP addresses.
Reserve regional internal IP ranges
These IP address ranges are used for allocating IP addresses for the
HA VPN gateways.
Console gcloud
More
You have the option to create internal IP ranges when you create your encrypted
VLAN attachments.
On the Create VLAN attachments page, select Internal regional IP addresses .
To create an encrypted VLAN attachment for Dedicated Interconnect,
see Create encrypted VLAN attachments .
To create an encrypted VLAN attachment for Partner Interconnect,
see Create encrypted VLAN attachments .
To reserve a regional internal IP address range, use the following command:
gcloud compute addresses create ADDRESS_NAME \
--region= REGION \
--addresses= IP_ADDRESS \
--prefix-length= PREFIX_LENGTH \
--network= NETWORK_NAME \
--purpose=IPSEC_INTERCONNECT
Replace the following:
ADDRESS_NAME : a name for the regional
internal IP address range.
REGION : the region where you plan to create the
VLAN attachment and HA VPN gateways.
IP_ADDRESS : the first IP address of the
RFC 1918 internal IP address range that you are reserving.
PREFIX_LENGTH : the correct CIDR prefix length
between 26 and 29 for the capacity of your attachment.
Refer to Prefix lengths and HA VPN gateway interfaces .
NETWORK_NAME : the name of your VPC
network.
For example, to reserve two regional internal IP address ranges with a prefix
length of 29 , use the following commands:
gcloud compute addresses create ip-range-1 \
--region= REGION
--addresses=192.168.1.0 \
--prefix-length=29 \
--network= NETWORK_NAME \
--purpose=IPSEC_INTERCONNECT
gcloud compute addresses create ip-range-2 \
--region= REGION \
--addresses=192.168.2.0 \
--prefix-length=29 \
--network= NETWORK_NAME \
--purpose=IPSEC_INTERCONNECT
The output is similar to the following:
Created [https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/regions/us-central1/addresses/ip-range-1].
NAME REGION NETWORK
ip-range-1 us-central1 network-a
Created https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/regions/us-central1/addresses/ip-range-2].
NAME REGION NETWORK
ip-range-2 us-central1 network-a
What's next?
To choose a connection type for Cloud Interconnect, see
Choosing a Network Connectivity product .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
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
