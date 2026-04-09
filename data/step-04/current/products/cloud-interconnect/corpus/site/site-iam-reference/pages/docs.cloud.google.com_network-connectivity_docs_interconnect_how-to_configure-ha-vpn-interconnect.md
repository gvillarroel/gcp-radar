---
title: "Configure HA VPN over Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/configure-ha-vpn-interconnect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/configure-ha-vpn-interconnect
  title: "Configure HA VPN over Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure HA VPN over Cloud Interconnect | Google Cloud Documentation
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
VLAN capacity and recommended number of tunnels
Gateway and tunnel mapping Example 1: One HA VPN to two peer VPN
Example 2: Two HA VPN to one peer VPN
Create HA VPN gateways
Configure the HA VPN Cloud Router, peer VPN gateway resources, and HA VPN tunnels
Configure BGP sessions
Complete the HA VPN configuration
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure HA VPN over Cloud Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
VLAN capacity and recommended number of tunnels
Gateway and tunnel mapping Example 1: One HA VPN to two peer VPN
Example 2: Two HA VPN to one peer VPN
Create HA VPN gateways
Configure the HA VPN Cloud Router, peer VPN gateway resources, and HA VPN tunnels
Configure BGP sessions
Complete the HA VPN configuration
What's next?
Learn how to deploy HA VPN on top of the encrypted VLAN
attachments of your Cloud Interconnect connection. These steps apply to
HA VPN for both Dedicated Interconnect
and Partner Interconnect.
When you create an HA VPN gateway for an
HA VPN over Cloud Interconnect deployment, you
associate that HA VPN gateway with your encrypted
VLAN attachment. Each VLAN attachment that you want to configure must be
associated with an HA VPN gateway interface.
Only a single VLAN attachment is required but to configure
failover , you must
associate two VLAN attachments in your edge availability
domain :
The first VLAN attachment in zone1 corresponds to
HA VPN interface 0 .
The second VLAN attachment in zone2 corresponds to
HA VPN interface 1 .
After you create your encrypted VLAN attachments and HA VPN
gateways, you can create the HA VPN tunnels to the
peer VPN gateways. Each HA VPN tunnel has a bandwidth of
3 Gbps. Therefore, to match the capacity of your VLAN attachment, you must
create multiple HA VPN tunnels.
Important: After you associate an HA VPN gateway with an
encrypted VLAN attachment, you cannot change the associations between the
attachment and the interfaces of the HA VPN gateway.
You can only delete the HA VPN gateway and its
tunnels or delete the VLAN attachment itself.
VLAN capacity and recommended number of tunnels
The section provides an estimate of the number of tunnels that you might need
based on the capacity of your VLAN attachment. VLAN attachment capacity covers
both egress and ingress traffic, and the number of tunnels in the table
might not reflect your network's particular traffic patterns.
Use the following table as a starting point and monitor traffic utilization of
your HA VPN tunnels. To ensure adequate capacity for failover
in your tunnels, we recommend that you not exceed 50% of either
the 3-Gbps bandwidth limit or the 250,000-pps packet rate limit for a given VPN
tunnel.
For more information about setting up monitoring and alerts for Cloud VPN
tunnels, see View logs and metrics .
VLAN attachment capacity
Number of tunnels for each VLAN attachment
Total number of tunnels for 2 VLAN attachments (failover)
2 Gbps or fewer
1
2
5 Gbps
2
4
10 Gbps
4
8
20 Gbps
7
14
50 Gbps
17
34
100 Gbps
34
68
Gateway and tunnel mapping
You don't need to have a one-to-one mapping of peer VPN gateways to
HA VPN gateways. You can add multiple tunnels to each
interface of the HA VPN gateway as long as
there are interfaces on the peer VPN gateway that have not yet been mapped to
that particular HA VPN gateway interface. There can only
be one unique mapping or tunnel between a specific
HA VPN gateway interface and a specific peer VPN gateway
interface.
Thus, you can have the following configurations:
Multiple HA VPN gateways that tunnel to a
single peer VPN gateway (with multiple interfaces)
A single HA VPN gateway that tunnels to multiple peer VPN
gateways
Multiple HA VPN gateways that tunnel to multiple
peer VPN gateways
As a general rule, the number of HA VPN gateways that you
need to deploy is determined by how many peer VPN gateways with unused interfaces
you have available in your on-premises network.
Note: The peer VPN gateway cannot be hosted in Google Cloud.
The following diagrams provide examples of tunnel mappings between
HA VPN and peer VPN gateways.
Example 1: One HA VPN to two peer VPN
Figure 1: Example of one HA VPN gateway to two peer VPN gateways (click to enlarge).
Example 2: Two HA VPN to one peer VPN
Figure 2: Example of two HA VPN gateways to one peer VPN gateway (click to enlarge).
Create HA VPN gateways
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
compute.vpnGateways.create
compute.vpnGateways.delete
compute.vpnGateways.get
compute.vpnGateways.list
compute.vpnGateways.use
compute.vpnGateways.setLabels
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.externalVpnGateways.create
compute.externalVpnGateways.delete
compute.externalVpnGateways.use
compute.externalVpnGateways.setLabels
Roles
Compute Network Admin role( roles/compute.networkAdmin )
Important: For Partner Interconnect, you must wait until both your
encrypted VLAN attachments are in an ACTIVE state before you configure your
HA VPN gateways and tunnels. Two VLAN attachments are
required for proper HA VPN over Cloud Interconnect failover and SLA
configuration.
This procedure assumes that you have already created and configured
your encrypted VLAN attachments by using the Google Cloud console:
For Dedicated Interconnect, see
Create encrypted VLAN attachments .
For Partner Interconnect, see
Create encrypted VLAN attachments .
Console gcloud
More
This procedure assumes that you have already created and configured
your encrypted VLAN attachments by using the Google Cloud console:
For Dedicated Interconnect, see
Create encrypted VLAN attachments .
For Partner Interconnect, see
Create encrypted VLAN attachments .
To create an HA VPN gateway, follow these steps:
In the Google Cloud console, continue to the next section of the
HA VPN over Cloud Interconnect deployment wizard.
After you complete the Cloud Router for Cloud Interconnect
configuration, the Create VPN gateways page appears.
The HA VPN over Cloud Interconnect configuration
wizard automatically creates HA VPN gateways based on the
capacity that you configured for your VLAN attachments. For example, if you
specified 5 Gbps as the capacity of each VLAN attachment, the wizard
creates two HA VPN gateways.
Optional: Click expand_more Expand
to change the generated name of each HA VPN gateway.
Optional: If you want to add more HA VPN gateways,
click Add another gateway . Specify a Name and an
optional Description . Then, click Done .
Click Create and Continue .
Use the VLAN capacity and tunnels table to estimate
how many VPN tunnels are needed to match the capacity of your VLAN
attachment. You need to create at least one HA VPN
gateway to be able to create these HA VPN tunnels.
In the following example, a 5-Gbps capacity VLAN attachment might
require four tunnels.
Create the HA VPN gateways.
For example, the following commands create two
HA VPN gateways and assign the gateway
interfaces to your encrypted VLAN attachments:
gcloud compute vpn-gateways create vpn-gateway-a \
--network=network-a \
--region= REGION \
--interconnect-attachments \
attachment-a-zone1,attachment-a-zone2
gcloud compute vpn-gateways create vpn-gateway-b \
--network=network-a \
--region= REGION \
--interconnect-attachments \
attachment-a-zone1,attachment-a-zone2
Replace REGION with the region in which your VLAN
attachment is located.
For the --interconnect-attachments parameter, you list both VLAN
attachments. The first VLAN attachment that you list is assigned to
interface 0 ( if0 ) of the HA VPN gateway and the second
VLAN attachment is assigned to interface 1 ( if1 ).
Configure the HA VPN Cloud Router, peer VPN gateway resources, and HA VPN tunnels
Console gcloud
More
In the Google Cloud console, continue to the next section of the
HA VPN over Cloud Interconnect deployment wizard.
In the Cloud Router section, select a Cloud Router.
This router is dedicated to managing the BGP sessions for all of your
HA VPN tunnels.
You can use an existing Cloud Router if the router
does not already manage a BGP session for a VLAN attachment
associated with a Partner Interconnect connection.
You cannot use the encrypted Cloud Router used for the
Interconnect tier of your HA VPN over Cloud Interconnect deployment.
If you don't have an available Cloud Router, select
Create new router , and specify the following:
A name
An optional description
A Google ASN for the new router
You can use any private ASN
( 64512 through 65534 , 4200000000 through 4294967294 )
that you are not using elsewhere in your network. The Google ASN is
used for all BGP sessions on the same Cloud Router, and you
cannot change the ASN later.
To create the new router, click Create .
Configure the IKE version by selecting either IKEv1 or IKEv2 .
This version is used across all HA VPN tunnels in the
deployment.
Optional: Click Generate keys to generate the IKE pre-shared key for
all VPN tunnels. If you select this option, the same IKE pre-shared key is
populated for all tunnels across all HA VPN gateways.
Make sure that you record the pre-shared key in a secure location because
it cannot be retrieved after you create your VPN tunnels.
In the VPN Configurations section, click a VPN configuration, and then
specify the following:
Peer VPN gateway : Select an existing peer VPN gateway, or create
one by selecting Create a new peer VPN gateway . To create a
peer VPN gateway, specify the following:
A name
Two interfaces
If you need to specify a single interface
or four interfaces, you cannot create this peer VPN gateway in the
Google Cloud console. Use the Google Cloud CLI instead. Specifically,
you must assign four interfaces on your peer VPN gateway if you
are connecting to Amazon Web Services (AWS).
In the IP addresses field, enter the IPv4 addresses of the two peer
VPN gateway interfaces.
Click Create .
Under VPN Tunnel over ENCRYPTED VLAN_ATTACHMENT_1 and
VPN Tunnel over ENCRYPTED VLAN_ATTACHMENT_2 , configure
the following fields for each tunnel:
Name : You can leave the generated tunnel name or modify it.
Description : Optional.
Associated peer VPN gateway interface : Select the peer VPN
gateway interface and IP address combination that you want to associate
with this tunnel and HA VPN interface.
This interface must match the interface on your actual peer router.
IKE pre-shared key : If you did not already generate a pre-shared key
for all tunnels, specify an IKE pre-shared key . Use the pre-shared key
(shared secret) that corresponds with the pre-shared key that you create
on your peer gateway. If you haven't configured a pre-shared key on your
peer VPN gateway and want to generate one, click Generate and copy .
Make sure that you record the pre-shared key in a secure location because
it cannot be retrieved after you create your VPN tunnels.
Click Done when you have completed the configuration of both tunnels.
Repeat the previous two steps for each HA VPN gateway
until you have configured all the gateways and their tunnels.
If you need to add more tunnels, click Add VPN configuration and
configure the following fields:
VPN gateway : Select one of the HA VPN gateways
that are associated with the encrypted VLAN attachments.
Peer VPN gateway : Select an existing peer VPN gateway or create a
new one by selecting Create a new peer VPN gateway . To create a
new peer VPN gateway, specify the following:
A name
Two interfaces
If you need to specify a single interface
or four interfaces, you cannot create this peer VPN gateway in the
Google Cloud console. Use the Google Cloud CLI instead. Specifically,
you must assign four interfaces on your peer VPN gateway if you
are connecting to AWS.
In the IP addresses field, enter the IPv4 addresses of the two peer
VPN gateway interfaces.
Click Create .
When you have finished configuring all your HA VPN
tunnels, click Create and Continue .
This router is dedicated to managing the BGP sessions for all of your
HA VPN tunnels.
You can use an existing Cloud Router if the router
does not already manage a BGP session for a VLAN attachment
associated with a Partner Interconnect connection.
You cannot use the encrypted Cloud Router used for the
Cloud Interconnect tier of your HA VPN over Cloud Interconnect
deployment.
To create a Cloud Router, run the following command:
gcloud compute routers create ROUTER_NAME \
--region= REGION \
--network= NETWORK \
--asn= GOOGLE_ASN
Replace the following:
ROUTER_NAME : the name of the Cloud Router
in the same region as the Cloud VPN gateway
REGION : the Google Cloud
region where you create the
gateway and tunnel
NETWORK : the name of your Google Cloud network
GOOGLE_ASN : any private ASN
( 64512 through 65534 , 4200000000 through 4294967294 )
that you are not already using in the peer network; the Google ASN is
used for all BGP sessions on the same Cloud Router, and it
cannot be changed later
The router that you create should look similar to the following example
output:
Created [https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-central1/routers/router-a].
NAME REGION NETWORK
router-a us-central1 network-a
Create at least one external peer VPN gateway.
gcloud compute external-vpn-gateways create peer-gw \
--interfaces 0= ON_PREM_GW_IP_0 ,1= ON_PREM_GW_IP_1
Replace the following:
ON_PREM_GW_IP_0 : the IP address assigned to interface
0 on your peer VPN gateway
ON_PREM_GW_IP_1 : the IP address assigned to interface
1 on your peer VPN gateway
Create as many external peer VPN gateways as needed
in your deployment.
For each HA VPN gateway that you created in Create
HA VPN gateways , create a
VPN tunnel for each interface, 0 and 1 . In each command, you specify
the peer side of the VPN tunnel as the external VPN gateway and interface
that you created earlier.
For example, to create four tunnels for the two example
HA VPN gateways created in Create
HA VPN gateways , run the
following commands:
gcloud compute vpn-tunnels create tunnel-a-to-on-prem-if-0 \
--peer-external-gateway=peer-gw \
--peer-external-gateway-interface=0 \
--region= REGION \
--ike-version=2 \
--shared-secret= SHARED_SECRET \
--router=vpn-router \
--vpn-gateway=vpn-gateway-a \
--interface=0
gcloud compute vpn-tunnels create tunnel-a-to-on-prem-if-1 \
--peer-external-gateway=peer-gw \
--peer-external-gateway-interface=1 \
--region= REGION \
--ike-version=2 \
--shared-secret= SHARED_SECRET \
--router=vpn-router \
--vpn-gateway=vpn-gateway-a \
--interface=1
gcloud compute vpn-tunnels create tunnel-b-to-on-prem-if-0 \
--peer-external-gateway peer-gw \
--peer-external-gateway-interface 0 \
--region= REGION \
--ike-version=2 \
--shared-secret= SHARED_SECRET \
--router=vpn-router \
--vpn-gateway=vpn-gateway-b \
--interface=0
gcloud compute vpn-tunnels create tunnel-b-to-on-prem-if-1 \
--peer-external-gateway peer-gw \
--peer-external-gateway-interface 1 \
--region= REGION \
--ike-version=2 \
--shared-secret= SHARED_SECRET \
--router=vpn-router \
--vpn-gateway=vpn-gateway-b \
--interface=1
Configure BGP sessions
Console gcloud
More
In the Google Cloud console, continue to the next section of the
HA VPN over Cloud Interconnect deployment wizard.
After you have created all the HA VPN tunnels, you must
configure the BGP sessions for each tunnel.
Next to each tunnel, click Configure BGP session .
Follow the instructions in
Create BGP sessions
to configure BGP for each VPN tunnel.
After you have created all the HA VPN tunnels, you must
configure the BGP sessions for each tunnel.
For each tunnel, follow the instructions in
Create BGP sessions .
Complete the HA VPN configuration
Before you can use the new Cloud VPN gateways and their associated VPN
tunnels, complete the following steps:
Set up the peer VPN gateways for your on-premises networks
and configure the corresponding tunnels there. For instructions, see the following:
For specific configuration guidance for certain peer VPN devices, see
Use third-party VPNs .
For general configuration parameters, see Configure the
peer VPN gateway .
Configure firewall rules
in Google Cloud and your peer network as required.
Check the status of your VPN tunnels .
This step includes checking the high-availability configuration of
your HA VPN gateway.
What's next?
If you need to add more HA VPN tunnels,
see Add a VPN tunnel .
To learn about HA VPN monitoring,
see View logs and metrics .
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
