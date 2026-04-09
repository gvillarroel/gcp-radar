---
title: "Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview
  title: "Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Partner Cross-Cloud Interconnect for OCI overview | Google Cloud Documentation
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
Establish 99. 99% availability
Establish 99. 9% availability
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
Comparison to Cross-Cloud Interconnect
Before you use Partner Cross-Cloud Interconnect for OCI
How does Partner Cross-Cloud Interconnect for OCI work?
VLAN attachment MTU options
Provisioning
Connection activation Basic topology
Redundancy and SLA 99.99% availability topology
Balancing egress traffic with redundant VLAN attachments
Create redundant connections with sufficient capacity
IPv6 support
Considerations
Billing
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Partner Cross-Cloud Interconnect for OCI overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Comparison to Cross-Cloud Interconnect
Before you use Partner Cross-Cloud Interconnect for OCI
How does Partner Cross-Cloud Interconnect for OCI work?
VLAN attachment MTU options
Provisioning
Connection activation Basic topology
Redundancy and SLA 99.99% availability topology
Balancing egress traffic with redundant VLAN attachments
Create redundant connections with sufficient capacity
IPv6 support
Considerations
Billing
What's next?
Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) provides multicloud connectivity between Google Cloud
and Oracle Cloud Infrastructure (OCI). It lets you connect any
Google Cloud and OCI resources privately in
available paired locations . Partner Cross-Cloud Interconnect for OCI
supports connections at multiple speeds with no data transfer
charges for traffic that is exchanged between Google Cloud and OCI. You can provision partner VLAN attachments over
these connections to interconnect your VPC networks in
Google Cloud and OCI within minutes.
Partner Cross-Cloud Interconnect for OCI offers the following features:
Ensures the lowest possible latency between both clouds, while keeping traffic
private and secure.
Lets you provision connections on demand, with variable speed options
for maximum flexibility (1 Gbps, 2 Gbps, 5 Gbps, 10 Gbps, 20 Gbps, and 50 Gbps).
Coordinated support from both Google Cloud and
OCI to address any issues.
Zero cost data transfers.
Uses pre-provisioned capacity because Google Cloud and
OCI build, maintain, and scale multi-tenant private
connections between their edge routers in different locations.
Comparison to Cross-Cloud Interconnect
While Partner Cross-Cloud Interconnect for OCI lets you connect any Google Cloud
and OCI resources privately in available paired locations,
Cross-Cloud Interconnect
lets you turn up dedicated connectivity between Google Cloud
and OCI. Use the following table to choose the option that
works best for your needs:
Feature
Cross-Cloud Interconnect
Partner Cross-Cloud Interconnect for OCI
Tenancy
Connections are fully owned by you and can't be shared across organizations.
Google Cloud and OCI own ports; connections can be used by multiple customers.
Supported speeds
10 Gbps, 100 Gbps, 400 Gbps.
1 Gbps, 2 Gbps, 5 Gbps, 10 Gbps, 20 Gbps, 50 Gbps.
Cost
You pay for ports and attachments in both clouds and data transfer out for traffic leaving Google Cloud.
You pay for Google Cloud partner attachments and OCI virtual circuits. There is no data transfer fee.
Performance
Optimal latency.
Optimal latency.
Support
Google supports the connection all the way to the OCI demarcation.
Google Cloud and OCI partner on supporting the solution end to
end.
Before you use Partner Cross-Cloud Interconnect for OCI
Ensure that you meet the following requirements:
Be familiar with
Cloud Interconnect terminology .
Have an OCI account and be familiar with the FastConnect partner offering .
How does Partner Cross-Cloud Interconnect for OCI work?
Google Cloud and OCI build, maintain, and scale
multi-tenant private connections between their edge routers in different
locations. You can provision partner VLAN attachments over these pre-provisioned
connections to connect your cloud networks in Google Cloud and OCI.
The following diagram gives a high-level view of Partner Cross-Cloud Interconnect for OCI.
Overview of Partner Cross-Cloud Interconnect for OCI (click to enlarge).
VLAN attachment MTU options
We recommend that you use the same maximum transmission unit (MTU) for all VLAN attachments that are
connected to the same VPC network, and that you set the MTU of
the VPC networks to the same value. For more information about
Cloud Interconnect MTUs, see Cloud Interconnect
MTU .
Provisioning
To provision a Partner Cross-Cloud Interconnect for OCI connection with
OCI, you start by selecting your paired location, and
then ordering Partner Interconnect attachments in the appropriate
Google Cloud locations.
OCI utilizes an MTU of 9000. Google Cloud
supports an MTU of 8896 on VPC networks and VLAN attachments.
You must ensure that whatever value you set for Google Cloud, your OCI VMs use the same value.
To debug any MTU issues, see Hanging Connection in the OCI
documentation.
Next, you create a VLAN attachment for a Partner Cross-Cloud Interconnect for OCI
connection in your Google Cloud project, which generates a unique pairing key
that you use to request a FastConnect virtual circuit from
OCI. You also
need to provide other information, such as the connection location and IP stack
type. You can choose the capacity in the OCI console.
After configuring the virtual circuit in your OCI
compartment, you activate your
connection. The Border Gateway Protocol (BGP) session must be established
between your OCI Dynamic Routing Gateway (DRG) and the
Cloud Router.
For detailed steps to provision a Partner Cross-Cloud Interconnect for OCI
connection, see
Partner Interconnect provisioning overview .
Connection activation
After you create a VLAN attachment and OCI configures it,
the attachment can't pass traffic until you activate it. Activation lets you
check your connectivity with OCI.
Partner Cross-Cloud Interconnect for OCI always establishes the BGP session between
your OCI DRG and the Cloud Router over the VLAN
attachments and FastConnect virtual circuits directly.
Because the BGP configuration for Layer 3 connections is fully automated, you
can pre-activate your connections (VLAN attachments). When you
enable pre-activation, the VLAN attachments are active as soon as the OCI virtual circuit is created.
Basic topology
The following topology diagram shows an example Partner Cross-Cloud Interconnect for OCI
connection.
For connectivity between Google Cloud and OCI,
traffic is passed to OCI's network.
Their network then routes the traffic to the VPC network. OCI requires that you establish a BGP session with them
or configure a static default route to their network.
Partner Cross-Cloud Interconnect for OCI topology (click to enlarge).
Redundancy and SLA
Depending on your availability needs, you can configure
Partner Cross-Cloud Interconnect for OCI to support mission-critical services or
applications that can tolerate some downtime. To achieve a specific level of
reliability, Google has two prescriptive configurations:
Establish 99.99% availability for Partner Interconnect (recommended)
Establish 99.9% availability for Partner Interconnect
We recommend that you use the 99.99% availability configuration for
production-level applications with a low tolerance for downtime. If your
applications aren't mission-critical and can tolerate some downtime, you can use
the 99.9% availability configuration. When you use Google Cloud's 99.99%
availability configuration, there is higher availability with a multi-region
deployment versus a single Google Cloud
region one.
For the 99.99% and 99.9% availability configurations,
Partner Cross-Cloud Interconnect for OCI uses the Cloud Interconnect service
level agreement (SLA). Because Partner Cross-Cloud Interconnect for OCI is a shared
responsibility model between Google Cloud and OCI, the
Partner Cross-Cloud Interconnect for OCI SLA covers Google Cloud's
infrastructure up until the point that responsibility is transferred to
OCI.
99.99% availability topology
For the highest level availability, we recommend the 99.99% availability
configuration. Clients in the OCI virtual cloud
network can
reach the IP addresses of virtual machine (VM) instances in the selected region
through at least one of the redundant paths. If one path is unavailable, the
other paths can continue to serve traffic.
99.99% availability requires at least four VLAN attachments across two metros,
one in each edge availability domain (metro availability zone). You also need
two Cloud Routers (one in each Google Cloud region of a
VPC network). Associate one Cloud Router with each pair
of VLAN attachments. You must also enable global
routing for
the VPC network.
Create an equal number of OCI FastConnect virtual circuits in
the paired OCI location for the Google Cloud VLAN
attachments.
Balancing egress traffic with redundant VLAN attachments
When you have a redundant topology similar to the 99.99% configuration, there
are multiple paths for traffic to traverse from the VPC network
to your on-premises network.
Google Cloud uses
ECMP
to balance the egress traffic across
connections. To use ECMP, the Cloud Routers used by the VLAN
attachments must receive the same announcement with equal cost (the same CIDR
range and the same MED values).
Google Cloud balances the traffic between
the VLAN attachments based on the configured capacity of each VLAN attachment.
Create redundant connections with sufficient capacity
The Best practices document describes best practices for creating redundant connections that have sufficient capacity in a failover scenario. Following these practices helps ensure that events such as planned maintenance or
hardware failures don't cause loss of connectivity.
IPv6 support
Partner Cross-Cloud Interconnect for OCI supports IPv6 traffic for Layer 3
connectivity.
Dual-stack Partner Cross-Cloud Interconnect for OCI VLAN attachments must use
separate IPv4 and IPv6 BGP sessions. Multiprotocol BGP (MP-BGP)—IPv4 +
IPv6 route exchange—on a single BGP session isn't supported.
To support IPv6 traffic in a Partner Cross-Cloud Interconnect for OCI connection, do
the following:
Configure your VPC networks to use either IPv4 and IPv6 (dual
stack) or IPv6-only subnets .
Assign subnets within internal IPv6
ranges .
Configure IPv6 addresses for VMs and instance
templates within the
subnet.
For more information about configuring IPv6 within a subnet, see the
following:
To create a custom mode VPC network with internal IPv6
addresses, see Create a custom mode VPC network with a
dual-stack subnet .
To create a subnet with IPv6 enabled, see Add a dual-stack
subnet .
To enable IPv6 in an existing subnet, see Change an IPv4-only subnet to
dual-stack .
To create or enable VMs with IPv6, see Configure IPv6 for instances and
instance templates .
For information about using internal IPv6 ranges in your VPC
network and subnets, see Internal IPv6 specifications .
After configuring IPv6 in your VPC network, subnets, and VMs,
configure your VLAN attachments.
Considerations
When you create Google Cloud resources in a specific location, you must
create OCI resources in a paired
OCI location.
Billing
There are no data transfer charges on any traffic transiting cross-cloud
connections between paired locations.
What's next?
To find answers to common questions about Cloud Interconnect
architecture and features, see the
Cloud Interconnect FAQ .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
To find Google Cloud resource names, see the
Cloud Interconnect APIs .
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
