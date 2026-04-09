---
title: "Best practices for Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
  title: "Best practices for Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Best practices for Cloud Interconnect | Google Cloud Documentation
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
Work with Google Cloud projects Provision physical Cloud Interconnect connections in a separate project
Configure VLAN attachments in the Shared VPC host project
Create redundant Cloud Interconnect connections with sufficient capacity Ensure sufficient capacity in each edge availability domain
Use active-active VLAN attachments
Understand failover between regions
Scenarios
Use the same MTU for all VLAN attachments
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Best practices for Cloud Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Work with Google Cloud projects Provision physical Cloud Interconnect connections in a separate project
Configure VLAN attachments in the Shared VPC host project
Create redundant Cloud Interconnect connections with sufficient capacity Ensure sufficient capacity in each edge availability domain
Use active-active VLAN attachments
Understand failover between regions
Scenarios
Use the same MTU for all VLAN attachments
What's next
Use the following best practices when planning for and configuring
Cloud Interconnect.
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
Work with Google Cloud projects
If your network architecture supports it, configure your
Cloud Interconnect projects as recommended in this section.
Provision physical Cloud Interconnect connections in a separate project
Warning: After you create a Cloud Interconnect connection in a project,
you can't move the connection to a different project or rename the
connection later.
Provision physical connections (ports) for Cloud Interconnect in one
project, but provision VLAN attachments in other projects. The other projects
must be in the same Google Cloud organization as the project that contains the
physical connections.
VLAN attachments that connect a physical connection to a region through a
Cloud Router don't have to be in the same project as the physical connection.
For more information, see Use connections in other
projects .
This practice makes the following configuration steps easier:
You can associate a separate internal billing account with the project
that contains the physical connections.
You can configure Identity and Access Management (IAM) roles and permissions in the
project that contains the physical connections.
If you want to delete or update a resource that is not a physical
connection, you can do so without affecting the physical connections.
Configure VLAN attachments in the Shared VPC host project
In a Shared VPC network, configure all VLAN attachments, not physical
Cloud Interconnect connections (ports), in the host project. For more
information about connecting attachments to Shared VPC networks, see
Options for connecting to multiple VPC
networks .
Create redundant Cloud Interconnect connections with sufficient capacity
This section describes best practices for creating redundant
Cloud Interconnect connections that have sufficient capacity in a
failover scenario. Following these practices ensures that events such as planned
maintenance or hardware failures do not cause downtime.
Cloud Interconnect connections provide protection for up to 50% of
network traffic on aggregate capacity when capacity is split evenly between edge
availability domains. This ensures sufficient capacity in the cases of a failure
or planned maintenance. Using more than 50% of Cloud Interconnect's
capacity may subject the connection to throttling during periods of network
congestion. For example, if you intend to send 100 Gbps of protected
traffic between your on-premises network and Google Cloud, then ensure that you
provision redundant Cloud Interconnect connections with at least
200 Gbps capacity.
You can create Cloud Interconnect connections according to either of
these recommended topologies:
Topology for production-level
applications
Topology for non-critical
applications
When creating Cloud Interconnect connections according to these
topologies, you create pairs of connections in one
or more metropolitan areas. Within a single metropolitan area, you place
Cloud Interconnect connections in different edge availability domains.
We recommend that you create redundant connections using connection groups. For
more information, see
Resiliency and SLA options .
Ensure sufficient capacity in each edge availability domain
If there is downtime or maintenance in one of the edge availability domains in a
metropolitan area, traffic fails over to the other edge availability domain.
To avoid packet loss if a single edge availability domain fails, follow this
guidance:
Type of capacity
Guidance
Cloud Interconnect connection capacity
Ensure that each edge availability domain has
enough connection capacity to carry all your production traffic.
VLAN attachment capacity
Ensure that each edge availability domain has enough VLAN attachment
capacity to carry all the production traffic for the target
VPC network.
VPC traffic on Cloud Interconnect connections
is carried over VLAN attachments, which link the connection to
VPC networks. Even if each edge availability domain has
enough connection capacity, it must also have enough VLAN attachment
capacity.
VLAN attachment capacity and multiple VPC networks
If you are using your Cloud Interconnect connections to access more
than one Virtual Private Cloud (VPC) network, create VLAN attachments from each
VPC network to each Cloud Interconnect connection. For
each VPC network, ensure that there is enough VLAN attachment
capacity to carry all the production traffic for that VPC network
if a failover occurs.
Consider an example in which you have the following VPC networks
and workloads:
vpc-1 receives 2 Gbps of total traffic from your on-premises network.
vpc-2 also receives 2 Gbps of total traffic from your on-premises network.
The following table describes the minimum amount of attachment capacity that
you need in each edge availability domain for each VPC network:
Edge availability domain
Connection capacity
Attachment capacity
EDGE_DOMAIN_1
1 x 10 Gbps
2 x 1 Gbps to vpc-1
2 x 1 Gbps to vpc-2
EDGE_DOMAIN_2
1 x 10 Gbps
2 x 1 Gbps to vpc-1
2 x 1 Gbps to vpc-2
When you add VLAN attachments over a Cloud Interconnect connection,
your configured attachment capacity might exceed the total capacity of the
connection. Although this configuration is valid, your actual traffic cannot
exceed the total capacity of the connection. Ensure that your workload does not
generate more traffic than the capacity of the connection.
Use active-active VLAN attachments
There are two ways to configure redundant VLAN attachments:
An active-active configuration that splits traffic between the VLAN
attachments.
An active/passive configuration that uses only one VLAN attachment at a time.
We recommend that you use an active-active configuration because it makes
it easy to determine whether all VLAN attachments are working correctly during
normal operation. When using an active-active configuration, monitor your usage
patterns to ensure that you have sufficient capacity if a failure occurs.
In an active/passive configuration, VLAN attachments might
be configured incorrectly without your realizing it. If you do use this
configuration, ensure that you test failover before adding production traffic.
Warning: To ensure reliable connectivity when using ECMP across active-active
VLAN attachments, use flow-based hashing on your on-premises devices.
Using per-packet load balancing— for example, round-robin or
random—with ECMP is not supported. Using this configuration might
cause services in the VPC network, such as
Private Service Connect, to close TCP connections unexpectedly.
Understand failover between regions
Network traffic leaving a region prefers to use the path with the lowest metric,
as described in Effects of dynamic routing
mode
in the Cloud Router overview. In typical usage, this means that egress
traffic leaves through the closest Google Cloud region that has any live
VLAN attachments, with the local region being the closest.
Consider an example in which you build the topology for production-level
applications , and you have a
VPC network with the following:
VLAN attachments in two regions
Global dynamic routing enabled
Traffic prefers to egress the VLAN attachments in the local region, even if the
attachments in that region are overloaded. The traffic only flows to the other
region if all the VLAN attachments in the local region are down. This means that
each of the four Cloud Interconnect connections in the topology must
have enough VLAN attachment capacity to carry all your production traffic.
Scenarios
This section describes scenarios in which you configure
Cloud Interconnect resources. It also describes how each configuration
handles your workload during normal operation and failover. Each scenario
includes a recommendation related to the best practices for redundancy and
capacity.
Scenario 1: Sufficient capacity
In this scenario, you provision two Dedicated Interconnect connections in two
different edge availability domains as shown in the following table:
Edge availability domain
Connection capacity
Attachment capacity
Attachment region
EDGE_DOMAIN_1
1 x 10 Gbps
1 x 10 Gbps
ATTACHMENT_REGION_1
EDGE_DOMAIN_2
1 x 10 Gbps
1 x 10 Gbps
ATTACHMENT_REGION_1
The following table describes how this configuration handles your workload
during normal operation and failover:
Resource
Description
Size of your workload
10 Gbps of total traffic between ATTACHMENT_REGION_1 and
your on-premises network.
Capacity during normal operation
Sufficient capacity
20 Gbps of capacity from ATTACHMENT_REGION_1 to your
on-premises network. Your 10-Gbps workload runs successfully.
Capacity during failover
Sufficient capacity if either
Cloud Interconnect connection goes down.
For example, if the connection in EDGE_DOMAIN_1 fails, your
available capacity is the connection in EDGE_DOMAIN_2 . This
single Cloud Interconnect connection has 10 Gbps of capacity.
The 10 Gbps of attachment capacity that you created on it is enough to
carry your production workload.
If your workload increases to more than 10 Gbps of traffic, it
exceeds the capacity of your attachment, and you might experience
packet loss.
Recommendation
Provision your Cloud Interconnect connection and VLAN
attachment capacity so that each edge availability domain has enough
capacity for all your production workload.
Scenario 2: Insufficient capacity during failover
In this scenario, you provision two Dedicated Interconnect connections in two
different edge availability domains as shown in the following table:
Edge availability domain
Connection capacity
Attachment capacity
Attachment region
EDGE_DOMAIN_1
1 x 100 Gbps
100 Gbps (2 x 50 Gbps)
ATTACHMENT_REGION_1
EDGE_DOMAIN_2
1 x 100 Gbps
100 Gbps (2 x 50 Gbps)
ATTACHMENT_REGION_1
The following table describes how this configuration handles your workload
during normal operation and failover:
Resource
Description
Size of your workload
150 Gbps of total traffic between ATTACHMENT_REGION_1 and
your on-premises network.
Capacity during normal operation
Sufficient capacity
200 Gbps of capacity from ATTACHMENT_REGION_1 to your
on-premises network. Your 150-Gbps workload runs successfully.
Capacity during failover
Insufficient capacity if either
Cloud Interconnect connection goes down.
If one of your Cloud Interconnect connections goes down for
maintenance, your entire 150-Gbps workload attempts to fail over to a
single 100-Gbps connection. This is more than the capacity of the
connection, so you experience congestion and packet loss.
Recommendation
To ensure full availability during a failure event, make sure that the
combined traffic over each connection doesn't exceed the total capacity of
a single edge availability domain. In this scenario, you need at least 200
Gbps of connection capacity and 3 x 50 Gbps of attachment capacity in each
edge availability domain to have sufficient capacity during failover.
Scenario 3: Imbalanced VLAN attachments
In this scenario, you provision two Dedicated Interconnect connections in two
different edge availability domains as shown in the following table. You
initially provision 1 x 10 Gbps of attachment capacity in
EDGE_DOMAIN_1 . Later, you realize that your workload has
grown to 20 Gbps, so you update only the attachment capacity in
EDGE_DOMAIN_1 to 2 x 10 Gbps.
Edge availability domain
Connection capacity
Attachment capacity
Attachment region
EDGE_DOMAIN_1
1 x 100 Gbps
1 x 10 Gbps (initially provisioned)
2 x 10 Gbps (updated later)
ATTACHMENT_REGION_1
EDGE_DOMAIN_2
1 x 100 Gbps
1 x 10 Gbps
ATTACHMENT_REGION_1
The following table describes how this configuration handles your workload
during normal operation and failover:
Resource
Description
Size of workload
20 Gbps of total traffic between ATTACHMENT_REGION_1 and
your on-premises network.
Capacity during normal operation
Sufficient capacity
30 Gbps of capacity from ATTACHMENT_REGION_1 to your
on-premises network. Your 20-Gbps workload runs successfully.
Capacity during failover
Sufficient capacity if the
Cloud Interconnect connection in EDGE_DOMAIN_2 goes
down.
Insufficient capacity if the
Cloud Interconnect connection in EDGE_DOMAIN_1 goes
down.
If your Cloud Interconnect connection in
EDGE_DOMAIN_2 goes down, there is still 20 Gbps of attachment
capacity from the remaining connection, and your workload runs
successfully.
However, if your Cloud Interconnect connection in
EDGE_DOMAIN_1 goes down, there is only 10 Gbps of attachment
capacity from the remaining connection, and you experience congestion and
packet loss.
Recommendation
Make sure that you have equal capacity to both edge availability
domains in a metropolitan area; this applies to both
Cloud Interconnect connections and VLAN attachments. In this
scenario, you need at least 2 x 10 Gbps of attachment capacity in each edge
availability domain to ensure sufficient capacity if either
Cloud Interconnect connection goes down.
Use the same MTU for all VLAN attachments
We recommend that you use the same MTU for all VLAN attachments that are
connected to the same VPC network, and that you set the MTU of
the VPC network to the same value. While that is the recommended
practice, you are not forced to make VLAN attachment MTUs and VPC
network MTUs match. However, you can experience dropped packets, especially for
protocols other than TCP, if you do any of the following:
Use different VLAN attachment MTUs for VLAN attachments connected to the
same VPC network.
Configure VLAN attachment MTUs that are less than the MTU of the
VPC network that contains the VLAN attachments.
For general information about how protocols handle mismatched MTUs, see
Mismatched MTUs, MSS clamping, path MTU
discovery in the VPC MTU
documentation.
Packets sent through a VLAN attachment are processed in the following way:
Situation
Behavior
TCP SYN and SYN-ACK packets
Google Cloud performs MSS clamping, changing the MSS so that
packets fit within the VLAN attachment MTU. For example, if the VLAN
attachment MTU is 1,500 bytes, MSS clamping uses a 1,460-byte maximum
segment size.
IP packets up to (and including) the MTU of the VLAN attachment
Google Cloud makes no changes to the packet, except for SYN and
SYN-ACK packets as discussed in the first row.
MTU checks for IP packets
The MTU for packets sent by Google Cloud resources through a
VLAN attachment is limited by the VLAN attachment's MTU. For example,
when a VM instance sends packets to a destination reachable by a
dynamic route whose next hop is a VLAN attachment, packets that exceed
the VLAN attachment's MTU are dropped:
Google Cloud drops the packet and sends a Fragmentation
Needed (ICMP over IPv4) or Packet Too Big (ICMPv6) message both when
the Don't Fragment (DF) bit is on and also when the DF bit is
off.
You must configure ingress allow
VPC firewall
rules or
rules in firewall policies such that ICMP (for IPv4) or ICMPv6
(for IPv6) are allowed from sources that match the original packet
destinations.
Forwarding rules for internal passthrough Network Load Balancer and internal protocol
forwarding must use the L3_DEFAULT protocol so that they
process both ICMP for Path MTU discovery (PMTUD) and the protocol used
by the original packet.
Cloud Interconnect doesn't enforce the VLAN attachment MTU
for packets received from an on-premises network. Instead,
Google Cloud enforces the MTU on the Google Cloud resource
that receives the packet:
If the resource that receives the packet is a VM instance,
Google Cloud enforces the MTU of the VPC
network used by the network interface of the receiving VM, as if the
receiving VM had received a packet routed
within the VPC
network .
Packets sent to Google APIs and services from on-premises through
a VLAN attachment are processed in the same way as packets sent from
VM instances to Google APIs and services. For more information, see
Communication to Google APIs and
services .
Packets sent through HA VPN over Cloud Interconnect
HA VPN over Cloud Interconnect uses a gateway MTU of 1440 bytes,
and payload MTUs are smaller, depending on the ciphers used. For more
information, see
MTU
considerations in the Cloud VPN documentation.
What's next
To choose a connection type for Cloud Interconnect, see Choosing a
Network Connectivity
product .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
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
