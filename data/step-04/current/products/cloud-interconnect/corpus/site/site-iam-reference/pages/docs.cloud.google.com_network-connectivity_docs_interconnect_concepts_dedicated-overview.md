---
title: "Dedicated Interconnect overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview
  title: "Dedicated Interconnect overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Dedicated Interconnect overview | Google Cloud Documentation
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
Before you use Dedicated Interconnect
How does Dedicated Interconnect work?
VLAN attachment MTU options
Provisioning Port capacity
Fixed pricing
Cloud Interconnect groups
Redundancy and SLA Balance egress traffic with redundant connections
Create redundant connections with sufficient capacity
Dedicated Interconnect availability
IPv6 support
Stack types and BGP sessions
Custom IP address ranges
Restrict Dedicated Interconnect usage
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Dedicated Interconnect overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you use Dedicated Interconnect
How does Dedicated Interconnect work?
VLAN attachment MTU options
Provisioning Port capacity
Fixed pricing
Cloud Interconnect groups
Redundancy and SLA Balance egress traffic with redundant connections
Create redundant connections with sufficient capacity
Dedicated Interconnect availability
IPv6 support
Stack types and BGP sessions
Custom IP address ranges
Restrict Dedicated Interconnect usage
What's next?
Dedicated Interconnect provides direct physical
connections between your on-premises network and Google's network.
Dedicated Interconnect lets you transfer large
amounts of data between networks, which can be more cost-effective than
purchasing additional bandwidth over the public internet.
Before you use Dedicated Interconnect
Make sure that you meet the following requirements:
Be familiar with basic network
interconnections
so that you can order and configure circuits.
Be familiar with Cloud Interconnect
terminology .
Your network must physically meet Google's network in a colocation
facility . You must
provide your own routing equipment. Your on-premises router is typically
located in the colocation facility. However, you can also extend your
connection to a router outside of the colocation facility.
In the colocation facility, your network devices must support the following
technical requirements:
At least one of the following:
10-Gbps circuits, single mode fiber, 10GBASE-LR (1310 nm)
100-Gbps circuits, single mode fiber, 100GBASE-LR4
400-Gbps circuits, single mode fiber, 400GBASE-LR4
Note: The maximum supported fiber length for 10GBASE-LR, 100GBASE-LR4, or
400GBASE-LR optics is 10 km. If your on-premises router is more than 10 km
away from the Google demarcation, you must use a lit wavelength,
DWDM ,
or other managed circuit to complete your connection.
IPv4 link local addressing
LACP, even if you're using a single circuit
EBGP-4 with multi-hop
802.1Q VLANs
How does Dedicated Interconnect work?
For Dedicated Interconnect, you provision a
Dedicated Interconnect connection between the Google network and
your own network.
The following example diagram shows a single
Dedicated Interconnect connection between a
Virtual Private Cloud (VPC) network and your on-premises network.
Dedicated Interconnect connection (click to enlarge)
For the basic setup shown in the diagram, a
Dedicated Interconnect connection is provisioned between the
Google network and the on-premises router in a common colocation facility. Your
setup might be different if your on-premises router is not in the same
colocation facility as your Dedicated Interconnect demarcation.
When you create a VLAN attachment, you associate it with a Cloud Router. This
Cloud Router creates a BGP session for the VLAN attachment and its
corresponding on-premises peer router. The Cloud Router receives the
routes that your on-premises router advertises. These routes are added as
custom dynamic routes in your VPC network. The
Cloud Router also advertises routes for Google Cloud resources
to the on-premises peer router.
VLAN attachment MTU options
VLAN attachments can have a maximum transmission unit (MTU) of 1440, 1460, 1500
or 8896 bytes.
The following limitations apply:
VLAN attachments with an MTU of 8896 (also known as jumbo frames ) are
supported only on unencrypted IPv4 and IPv6 VLAN attachments.
Requests to Google API Client Libraries automatically use 1440 MTU packets, even
if your VLAN attachment is set to a higher MTU value, including jumbo
frames.
We recommend that you use the same MTU for all VLAN attachments that are
connected to the same VPC network, and that you set the MTU of
the VPC networks to the same value. For more information about
Cloud Interconnect MTUs, see Cloud Interconnect
MTU .
Provisioning
To create and configure a Dedicated Interconnect connection, you
start by deciding where you want a Dedicated Interconnect
connection and whether you want
MACsec for Cloud Interconnect . Then, you
order a Dedicated Interconnect connection so that Google can
allocate the necessary resources and send you a Letter of Authorization and
Connecting Facility Assignment (LOA-CFA). After you receive the LOA-CFA, you
need to submit it to your vendor so that they can provision the connections
between Google's network and your network.
You then need to configure and test the connections with Google before you can
use them. After they're ready, you can create VLAN attachments to allocate a
VLAN on the connection.
For detailed steps to provision a Dedicated Interconnect
connection, see the
Provisioning overview .
Note: If you encounter any issues during the provisioning stage, we advise you
to reply directly to the email received with your
LOA-CFA .
Replying to that email lets you receive support faster than creating a
support case.
Port capacity
When you order a Dedicated Interconnect connection, you can
request one of the following link types. Each link type has a different maximum
capacity:
1 x 10-Gbps (10 Gbps) circuit up to 8 x 10-Gbps (80 Gbps) circuits
1 x 100-Gbps (100 Gbps) circuit up to 8 x 100-Gbps (800 Gbps) circuits
1 x 400-Gbps (400 Gbps) circuit up to 8 x 400-Gbps (3200 Gbps) circuits
Caution: The link type that you select when you create a Dedicated Interconnect connection
cannot be changed later. For example, if you select a 10-Gbps link type and
need a 100-Gbps link type later, you must create a new Dedicated Interconnect connection
with the higher capacity.
Fixed pricing
Dedicated Interconnect offers fixed port pricing for outbound
data transfers for VLAN attachments. You can choose fixed pricing for each
Dedicated Interconnect connection and choose which types of
connections you want the fixed pricing to apply to. This lets you get a fixed
monthly invoice for outbound data transfers.
Fixed port pricing considers the following types of connections:
Local connection : The VLAN attachment is in the same a metro location
where the destination Google Cloud
region is located.
For example, if you obtain a VLAN attachment in the Los Angeles, California
metro location and the destination Google Cloud region is us-west2 ,
then the VLAN attachment's location and destination Google Cloud
region are the same. This is considered a local connection.
Remote connection : The VLAN attachment is in a different metro
location where the destination Google Cloud region is located.
For example, if you create a VLAN attachment in the Los Angeles, California
metro location and the destination Google Cloud region is us-east4 ,
then the VLAN attachment's location and destination Google Cloud
region are different. This is considered a remote connection.
Similarly, if you obtain a VLAN attachment in the Portland, Oregon metro
location, then there isn't a local Google Cloud region available
within that metro location. Because you can't connect to a local
Google Cloud region, this is considered a remote connection.
The following Google Cloud regions only offer support for fixed pricing
for remote connections on Dedicated Interconnect:
us-west1
us-east1
europe-west4
europe-north1
asia-east1
To request a Dedicated Interconnect connection with fixed port
pricing, contact your account team.
Cloud Interconnect groups
You can use connection groups to communicate your intended level of reliability,
and to receive feedback on how your Cloud Interconnect resources meet
that intended level of reliability. There are two types of
Cloud Interconnect resource groups:
Interconnect groups . Use these to group your Cloud Interconnect
connections.
Attachment groups . Use these to group your VLAN attachments.
When you group your Cloud Interconnect connections and VLAN
attachments, you receive information about the group's structure, global routing
requirements, operational status, SLA
eligibilityand blockers. Use these groups to establish that
your deployment meets the requirements for your chosen level of reliability. You
can use Cloud Interconnect connection groups without configuring VLAN
attachment groups, and you can use VLAN attachment groups without configuring
Cloud Interconnect connection groups.
Connection groups are only an informational and organizational tool.
Connection groups never change the behavior of your
Cloud Interconnect connections or your VLAN attachments. This makes
connection groups safe to use for your production resources.
You can add a Cloud Interconnect connection to more than one
Cloud Interconnect connection group. The connection group must be in
the same project as the resources in the group.
You can't add a VLAN attachment to more than one VLAN attachment group. In
addition, all of the VLAN attachments in an attachment group must be configured
for the same VPC network.
To configure Cloud Interconnect groups, see
Create a Dedicated Interconnect connection group .
Redundancy and SLA
When you configure a Cloud Interconnect connection, you can do so at
a specific level of reliability. You can choose between the following
reliability options:
Critical production . Choose this option for critical production workloads
that require maximum resiliency. This option provides a 99.99% uptime SLA.
Non-critical production . Choose this option for non-critical production
and development workloads. This option provides a 99.9% uptime SLA.
No SLA . You can configure your connection group without specifying an
intended level of reliability. We recommend that you avoid using this option
for resources in which extended downtime is undesirable. This option doesn't
provide an uptime SLA.
For more information about Cloud Interconnect SLAs, see
Dedicated Interconnect and Partner Interconnect SLA .
For the highest level availability, we recommend the configuration for 99.99%
availability as the base configuration, as shown in the following diagram.
Clients in the on-premises network can reach the IP addresses of virtual machine
(VM) instances in the us-central1 region through at least one of the redundant
paths. If one path is unavailable, the other paths can continue to serve
traffic.
Redundant connections for 99.99% availability (click to enlarge)
We recommend that you use the 99.99% availability configuration for
production-level applications with a low tolerance for downtime. If your
applications aren't mission-critical and can tolerate some downtime, you can
use the 99.9% availability configuration.
The SLA requires properly configured topologies that are defined by the 99.99%
and 99.9% configurations. These configurations support availability and provide
an SLA.
Each level of reliability has a different set of metropolitan area (metro) and
edge availability domain (metro availability zone) requirements:
Critical production . At least four Dedicated Interconnect
connections, two connections in one metropolitan area (metro) and two
connections in another metro. Connections that are in the same metro must be
placed in different
edge availability domains
(metro availability zones) to achieve 99.99% availability. Placing
Dedicated Interconnect connections in two separate edge
availability domains within the same metro is important because maintenance
windows are coordinated across edge availability domains within a metro,
while maintenance windows are not coordinated across metros.
Non-critical production . At least two Cloud Interconnect
connections. The connections must be located in the same metropolitan area
(metro) but in different edge availability domains (metro availability
zones). It doesn't matter if the connections are in the same facility or in
different facilities, as long as they are located in two different edge
availability domains.
Balance egress traffic with redundant connections
When you have a redundant topology similar to the 99.99% configuration, there
are multiple paths for traffic to traverse from the VPC network
to your on-premises network.
Google Cloud uses
ECMP
to balance the egress traffic across
connections. To use ECMP, the Cloud Routers used by the VLAN
attachments must receive the same announcement with equal cost (the same CIDR
range and the same MED values).
Google Cloud balances the traffic between the VLAN attachments based
upon the configured capacity of each VLAN attachment.
Create redundant connections with sufficient capacity
The Best practices document describes best practices for
creating redundant Cloud Interconnect connections that have sufficient
capacity in a failover scenario .
When you follow these practices, events such as planned maintenance or hardware
failures are less likely to cause a loss of connectivity.
Dedicated Interconnect availability
A Dedicated Interconnect connection is considered available if
you can send and receive ICMP packets ( ping ) between a VM in a specific
Google Cloud region and a correctly configured machine in your
on-premises network. You should be able to send and receive packets through at
least one of your redundant connections.
Note: When testing availability, Google assumes that all connections and related
devices are correctly configured and connected.
IPv6 support
Dedicated Interconnect supports IPv6 traffic.
To support IPv6 traffic in a Dedicated Interconnect, do the
following:
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
dual-stack
subnet .
To create a dual-stack subnet, see Add a dual-stack
subnet .
To enable IPv6 in an existing IPv4-only subnet, see Change an IPv4-only
subnet to dual stack .
To add an IPv6-only subnet, see Add an IPv6-only
subnet
To create or enable VMs with IPv6, see Configure IPv6 for instances and
instance templates .
For information about using internal IPv6 ranges in your VPC
network and subnets, see Internal IPv6
specifications .
After configuring IPv6 in your VPC network, subnets, and VMs,
configure your VLAN attachments.
Stack types and BGP sessions
With Dedicated Interconnect, you can choose between two different
stack types for your VLAN attachment.
Single stack (IPv4 only)
Dual stack (IPv4 and IPv6)
The stack type that you select for your VLAN attachment determines what version
of IP traffic is supported by your Dedicated Interconnect
connection.
When you create the BGP sessions for a dual-stack VLAN attachment,
you have the following options for IPv6 route exchange:
You can create an IPv6 BGP session
You can create an IPv4 BGP session that exchanges IPv6 routes by using
multiprotocol BGP
(MP-BGP) .
The following table summarizes the types of BGP sessions allowed for each
Dedicated Interconnect VLAN attachment.
Stack type
Supported BGP sessions
IPv4 only
IPv4 BGP
IPv4 and IPv6
IPv4 BGP, with or without MP-BGP
IPv6 BGP, with or without MP-BGP
Both IPv4 BGP and IPv6 BGP, no MP-BGP
For more information about BGP sessions, see
Establish BGP sessions
in the Cloud Router documentation.
Single-stack IPv4-only VLAN attachments
By default, a Dedicated Interconnect VLAN attachment is assigned
the IPv4-only stack type.
An IPv4-only VLAN attachment can support only IPv4 traffic.
Use the following procedure to create an IPv4-only
Dedicated Interconnect VLAN attachment and an IPv4 BGP session.
Create VLAN attachments
Dual-stack IPv4 and IPv6 VLAN attachments
A Dedicated Interconnect VLAN attachment that is configured with
the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6
traffic.
For a dual-stack VLAN attachment, you can configure your Cloud Router
with an IPv4 BGP session, an IPv6 BGP session, or both. If you configure only
one BGP session, you can enable MP-BGP to allow that session to exchange both
IPv4 and IPv6 routes. If you create an IPv4 BGP session and an IPv6 BGP session,
you can't enable MP-BGP on either session.
Use the following procedure to create a dual-stack
Dedicated Interconnect VLAN attachment and all supported BGP
sessions.
Create VLAN attachments
You can also change the stack type of your VLAN attachment after
you create the attachment. For more information,
see Modify VLAN attachment .
Custom IP address ranges
When you create a VLAN attachment for Dedicated Interconnect,
you can configure custom IP address ranges for the Cloud Router and
customer router ends of the attachment. For information about how it works,
including limitations and best practices, see the
Custom IP address ranges section in
the Cloud Interconnect overview.
When you configure custom IP address ranges for VLAN attachments that you use
with Dedicated Interconnect, you must provide the custom IP
address ranges during VLAN creation. However, you can add IPv6 custom IP address
ranges when you upgrade your stack type from IPV4_ONLY to IPV4_IPV6 . To
configure custom IP address ranges with Dedicated Interconnect,
see
Configure custom IP address ranges .
Restrict Dedicated Interconnect usage
By default, any VPC network can use Cloud Interconnect.
To control which VPC networks can use Cloud Interconnect, you can set an
organization policy. For more information, see
Restrict Cloud Interconnect usage .
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
