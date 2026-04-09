---
title: "Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting
  title: "Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshooting | Cloud Interconnect | Google Cloud Documentation
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
General troubleshooting Check for Cloud Interconnect service disruptions
Can't connect to resources in other regions
Can't reach VMs in a peered VPC network
Missing subnets in a connection
Can't ping Cloud Router
Can't create VLAN attachment
Share connections with other projects in my organization
Dedicated Interconnect Google can't ping you during the connection provisioning process
Can't ping Cloud Router
BGP session not working
Can't reach VMs in your VPC network
IPv6 traffic is not passing over the VLAN attachment
Performance testing over your VLAN attachments
Get diagnostics
Partner Interconnect BGP session not working (Layer 2 connections)
BGP session not working (Layer 3 connections)
VLAN attachment down for a Partner Interconnect connection
Pairing key issue in a Partner Interconnect connection
Can't ping Cloud Router (Layer 2 connections)
Loss of optic power on Partner Interconnect connection's port
Can't send and learn MED values over an L3 Partner Interconnect connection
IPv6 traffic isn't working after changing an attachment's stack type to dual stack
All other issues
HA VPN over Cloud Interconnect Can't establish BGP session for the Cloud Router for Cloud Interconnect
Can't establish an HA VPN tunnel
Can't establish BGP session for the Cloud Router for HA VPN
VPC traffic is not reaching on-premises networks or vice versa
Packet loss or low throughput
VLAN attachment metrics display drops due to BANDWIDTH_THROTTLE
Unable to delete an encrypted VLAN attachment
Mismatched IP address types across encrypted VLAN attachments
Missing VLAN attachment from HA VPN gateway interface
Invalid VLAN attachment type
Wrong MTU value for VLAN attachment
VLAN attachments have a different type
Dedicated VLAN attachments are not in the same metropolitan area
HA VPN gateway is not in the same network as VLAN attachment
Wrong encryption type for VLAN attachment
VLAN attachment zone does not match interfaceId
VPN gateway is not in the same region as VLAN attachment
Partner VLAN attachment is not in active state
Wrong type of Cloud Router specified for VLAN attachment
Cross-Cloud Interconnect Mismatches between redundant ports
VLAN IDs
Verify connectivity
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
On this page
General troubleshooting Check for Cloud Interconnect service disruptions
Can't connect to resources in other regions
Can't reach VMs in a peered VPC network
Missing subnets in a connection
Can't ping Cloud Router
Can't create VLAN attachment
Share connections with other projects in my organization
Dedicated Interconnect Google can't ping you during the connection provisioning process
Can't ping Cloud Router
BGP session not working
Can't reach VMs in your VPC network
IPv6 traffic is not passing over the VLAN attachment
Performance testing over your VLAN attachments
Get diagnostics
Partner Interconnect BGP session not working (Layer 2 connections)
BGP session not working (Layer 3 connections)
VLAN attachment down for a Partner Interconnect connection
Pairing key issue in a Partner Interconnect connection
Can't ping Cloud Router (Layer 2 connections)
Loss of optic power on Partner Interconnect connection's port
Can't send and learn MED values over an L3 Partner Interconnect connection
IPv6 traffic isn't working after changing an attachment's stack type to dual stack
All other issues
HA VPN over Cloud Interconnect Can't establish BGP session for the Cloud Router for Cloud Interconnect
Can't establish an HA VPN tunnel
Can't establish BGP session for the Cloud Router for HA VPN
VPC traffic is not reaching on-premises networks or vice versa
Packet loss or low throughput
VLAN attachment metrics display drops due to BANDWIDTH_THROTTLE
Unable to delete an encrypted VLAN attachment
Mismatched IP address types across encrypted VLAN attachments
Missing VLAN attachment from HA VPN gateway interface
Invalid VLAN attachment type
Wrong MTU value for VLAN attachment
VLAN attachments have a different type
Dedicated VLAN attachments are not in the same metropolitan area
HA VPN gateway is not in the same network as VLAN attachment
Wrong encryption type for VLAN attachment
VLAN attachment zone does not match interfaceId
VPN gateway is not in the same region as VLAN attachment
Partner VLAN attachment is not in active state
Wrong type of Cloud Router specified for VLAN attachment
Cross-Cloud Interconnect Mismatches between redundant ports
VLAN IDs
Verify connectivity
This troubleshooting guide can help you solve common issues that you might
encounter when using Cloud Interconnect:
General troubleshooting
Dedicated Interconnect
Partner Interconnect
HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Cross-Cloud Interconnect
For answers to common questions about Cloud Interconnect architecture
and features, see the
Cloud Interconnect FAQ .
For definitions of terms used on this page, see
Cloud Interconnect key terms .
Important: BFD can only be enabled on provisioned VLAN
attachments that use Dataplane version 2. You can view the dataplaneVersion for a
VLAN attachment by viewing the attachment details in one of the following ways:
API : Use the
interconnectAttachments.get
method. You can use this method on VLAN attachments for either
Dedicated Interconnect or Partner Interconnect.
Google Cloud CLI : Use the gcloud compute interconnects attachments describe
ATTACHMENT-NAME command where ATTACHMENT-NAME is the name
of the VLAN attachment for either Dedicated Interconnect or
Partner Interconnect.
In the output of the API or gcloud CLI command, look for the
dataplaneVersion field with a value of 2 . If the field is absent
from the output, the VLAN attachment is using version 1 and cannot be used with BFD. For more
information, contact your customer account team.
The Cloud Interconnect Dataplane v2 is unrelated to
Google Kubernetes Engine (GKE) Dataplane V2
To find logging and monitoring information and view Cloud Interconnect
metrics, see Monitoring connections .
General troubleshooting
Check for Cloud Interconnect service disruptions
You can check known disruptions on the
Google Cloud Status Dashboard . You can also
subscribe to the Cloud Incidents JSON feed or RSS feed for push updates.
You are notified of maintenance events on that impact your Dedicated Interconnect connections. For details, see
Infrastructure maintenance events .
You are notified of maintenance events that impact your Partner Interconnect VLAN attachments.
Notifications for Partner Interconnect are sent in a similar fashion as the notifications
for Dedicated Interconnect connections with some minor differences. For details, see Infrastructure maintenance events .
Can't connect to resources in other regions
By default, Virtual Private Cloud (VPC) networks are regional, meaning
that Cloud Router advertises only the subnets in its region. To connect
to other regions, set the dynamic routing mode of your VPC
network to global so that Cloud Router can advertise all subnets.
For more information, see Dynamic routing
mode
in the Cloud Router documentation.
Can't reach VMs in a peered VPC network
In this scenario, you have set up a Cloud Interconnect connection
between your on-premises network and a VPC network, network A .
You have also set up VPC Network Peering between network A and another
VPC network, network B . However, you are unable to reach VMs in network B from your on-premises network.
This configuration is unsupported as described in the restrictions
of the VPC Network Peering overview.
However, you can use custom IP range advertisements from Cloud Routers in
your VPC network to share routes to destinations in the peer
network. In addition, you must configure your VPC Network Peering
connections to import and export custom routes.
For more information about advertising routes between on-premises networks and
VPC peered networks, see the following resources:
Advertising custom IP ranges
Troubleshooting in Using VPC Network Peering
Missing subnets in a connection
To advertise all of the available subnets, specify the missing routes with
custom advertised routes and advertise all subnet routes between regions with
global dynamic routing. To do this, follow these steps:
Specify custom advertised routes on both a Cloud Router and the
Border Gateway Protocol (BGP) session.
To enter the missing routes, set the following parameters:
--set-advertisement-groups = ADVERTISED_GROUPS
--set-advertisement-ranges = ADVERTISED_IP_RANGES
Replace the following:
ADVERTISED_GROUPS : a Google-defined group that
Cloud Router dynamically advertises; it can have a value of all_subnets ,
which mimics the default behavior of a Cloud Router
ADVERTISED_IP_RANGES : the contents of the new array of IP address
ranges; it can have one or more values of your choice
For more details and examples, see Advertising custom IP ranges .
Enable global dynamic routing mode .
Can't ping Cloud Router
If you can't ping Cloud Router from your on-premises router, find your
product in the following table and perform the troubleshooting steps for that
product. VMs cannot reach 169.254.0.0/16 .
Troubleshooting steps to follow
Dedicated Interconnect
Partner Interconnect with L3 partner
Partner Interconnect with L2 partner
For Partner Interconnect, the Cloud Router
might never be pingable because some partners filter traffic to the IP
range ( 169.254.0.0/16 ) for Cloud Router. For L3
partners, the partner automatically configures BGP. If BGP doesn't come
up, contact your partner.
Not applicable
Yes
Not applicable
Verify that your local device has learned the
correct MAC address for the Google Cloud side of the
connection. For more information, see
Troubleshooting ARP .
Yes
Not applicable
Not applicable
Verify that your Cloud Router has an interface and a
BGP peer. Cloud Router is not pingable unless the
interface and BGP peer are fully configured, including the remote ASN .
For Dedicated Interconnect,
see BGP session not working .
For L2 Partner Interconnect, Google has added the
interface and BGP peer for Cloud Router automatically, but you
must configure the remote ASN.
Yes
Not applicable
Yes
Troubleshooting ARP
For Dedicated Interconnect, to find the correct MAC address,
run the following gcloud command:
gcloud compute interconnects get-diagnostics INTERCONNECT_NAME
The googleSystemID contains the MAC address that should be present in your
device's ARP table for IP addresses assigned to Cloud Router.
result:
links:
— circuitId: SAMPLE-0
googleDemarc: sample-local-demarc-0
lacpStatus:
googleSystemId: ''
neighborSystemId: ''
state: DETACHED
receivingOpticalPower:
value: 0.0
transmittingOpticalPower:
value: 0.0
macAddress: 00:00:00:00:00:00
If your device has not learned a MAC address, verify that the correct VLAN ID
and IP address are configured on the subinterface.
For Partner Interconnect, if you see the wrong MAC address on
your device, verify that you have not bridged
the Layer 2 segments of two VLAN attachments. The Google Cloud side of
the Cloud Interconnect connection is configured with
ip proxy-arp ,
which replies to all ARP requests and can cause your on-premises
router to learn incorrect ARP entries.
Can't create VLAN attachment
If you attempt to
create a VLAN attachment for Dedicated Interconnect or
Partner Interconnect
that violates an organization policy, you see an error message. See the
following example error message from running
gcloud compute interconnects attachments partner create :
ERROR: (gcloud.compute.interconnects.attachments.partner.create) Could not fetch resource:
- Constraint constraints/compute.restrictPartnerInterconnectUsage violated for projects/example-project. projects/example-project/global/networks/example-network is not allowed to use the Partner Interconnect.
For more information, see Restrict Cloud Interconnect usage
and Use custom organization policies
and contact your organization administrator.
Share connections with other projects in my organization
Use Shared VPC to share a connection, such as a VLAN attachment or a
Dedicated Interconnect connection in a host project.
For more information about setting up a Shared VPC network,
see Provisioning Shared VPC .
For more information about configuring attachments in a Shared VPC
network, see Options for connecting to multiple VPC networks .
Dedicated Interconnect
Google can't ping you during the connection provisioning process
Check that you're using the correct IP and LACP configuration. During the
testing process, Google sends you different test IP configurations for your
on-premises router, depending on whether you order a multiple-link bundle or
a single-link bundle. Don't configure VLAN attachments for either of these tests.
For multiple-link bundles
The first set of IP addresses that Google sends is for
testing multi-circuit connectivity
on each individual link. Configure the test IP addresses on every
physical link (without LACP configured), as instructed in the emails that
Google sent you. Google must ping all the IP addresses successfully before
this first test passes.
For the second test, remove all the IP addresses from the first test.
Configure the port channel with LACP even if your connection has only
one link. Google pings the port channel address. Don't modify the LACP
configuration of your port channel after the connection has passed the
final test. However, you must remove the test IP address from the port
channel interface.
For single-link bundles
Google sends the final production IP address for
testing single-circuit connectivity .
Configure the IP address on the bundle interface (with LACP
configured, either active or passive mode), as instructed in the email that
Google sent you. Google must ping the bundle interface IP address
successfully before this test passes. Configure the port channel with LACP
even if your connection has only one link.
Can't ping Cloud Router
Check that you can ping Google's port channel IP address. The IP address is
the googleIpAddress value when you
view connection details .
Check that you have the correct VLAN on your on-premises router's
subinterface. The VLAN information should match the information provided by
the VLAN attachment .
Check that you have the right IP address on your on-premises router's
subinterface. When you create a VLAN attachment,
it allocates a pair of link-local IP addresses. One is for an interface on a
Cloud Router ( cloudRouterIpAddress ), and the other is for a
subinterface on your on-premises router's port channel, not the port channel
itself ( customerRouterIpAddress ).
If you're testing the performance of your VLAN attachments, don't ping
Cloud Router. Instead, create and then use a Compute Engine
virtual machine (VM) instance in your VPC network. For more
information, see Performance testing .
BGP session not working
Enable multi-hop BGP on your on-premises router with at least two hops.
Check that you have the correct neighbor IP address configured on your
on-premises router. Use the BGP peer IP address ( cloudRouterIpAddress ) that
the VLAN attachment allocated.
Check that the local ASN configuration on your on-premises router matches the
peer ASN on the Cloud Router. In addition, check that the
local ASN configuration on the Cloud Router matches the peer ASN on
your on-premises router.
Each attachment is allocated a unique /29 CIDR from 169.254.0.0/16 within
your VPC network. One IP address in the /29 CIDR is allocated
for the Cloud Router and the other for your on-premises router.
Check that the correct IP addresses are allocated for your on-premises router
interface and its BGP neighbor. A common mistake is to configure a /30 on your
on-premises router interface instead of a /29. Google Cloud reserves
all other addresses in the /29 CIDR.
Make sure that you have not allocated any other IP addresses from this CIDR
to the VLAN attachment interface on your router.
Can't reach VMs in your VPC network
Check that you can ping the port channel and VLAN attachment.
Check that your BGP session is active.
Check that your on-premises router is advertising and receiving routes.
Check that there are no overlaps between your on-premises route advertisements and Google Cloud network ranges.
Set the MTU size to the same values for your on-premises router,
VPC, and VLAN attachment.
IPv6 traffic is not passing over the VLAN attachment
If you are experiencing difficulty connecting to IPv6 hosts, do the following:
Verify that IPv6 routes are being correctly advertised. If IPv6 routes are
not being advertised, see Troubleshoot BGP routes and route
selection .
Inspect firewall rules to ensure that you
are allowing IPv6 traffic.
Verify that you do not have overlapping IPv6 subnet ranges in your
VPC network and your on-premises network. See Check
overlapping subnet
ranges .
Determine whether you have exceeded any quotas and limits for your learned
routes in Cloud Router. If you have exceeded your quota for learned
routes, IPv6 prefixes are dropped before IPv4 prefixes.
See Check quotas and limits .
Verify that all components related to IPv6 configuration have been configured
correctly.
The VPC network has enabled the use of internal IPv6
addresses with the --enable-ula-internal-ipv6 flag.
The VPC subnet is configured to use the IPV4_IPV6 stack
type.
The VPC subnet has --ipv6-access-type set to INTERNAL .
The Compute Engine VMs on the subnet are configured with IPv6
addresses.
The VLAN attachment is configured to use the IPV4_IPV6 stack type.
The BGP peer has enabled IPv6 and correct IPv6 next hop addresses are
configured for the BGP session.
To view Cloud Router status and routes, see View
Cloud Router status and
routes .
To view BGP session configuration, see View BGP session
configuration .
Performance testing over your VLAN attachments
If you need to test the performance of your VLAN attachments, use a VM
in your VPC network. Add the performance tools that you require
on the VM. Don't use the Cloud Router link-local IP address to test for
latency, such as ICMP ping or path MTU. Using Cloud Router can give
unpredictable results.
Get diagnostics
To get current, detailed technical information about the Google Cloud side
of a Dedicated Interconnect connection on demand, see Get diagnostics .
Partner Interconnect
BGP session not working (Layer 2 connections)
Check that your on-premises router has been configured with a BGP session to
your Cloud Routers. For more information, see Configuring on-premises routers for Partner Interconnect .
Enable multi-hop BGP on your on-premises router with at least two hops.
Check that you have the correct neighbor IP address configured on your
on-premises router. Use the BGP peer IP address ( cloudRouterIpAddress ) that
the VLAN attachment allocated.
Check that the local ASN configuration on your on-premises router matches the
peer ASN on the Cloud Router ( 16550 ). In addition, check that the
local ASN configuration on the Cloud Router matches the peer ASN on
your on-premises router.
BGP session not working (Layer 3 connections)
Your Cloud Router must be configured with your service provider's ASN.
Contact your service provider for assistance.
VLAN attachment down for a Partner Interconnect connection
The status for a VLAN attachment can show as down even if there are no issues with the
Google Cloud configuration and the Partner Interconnect connection.
Make sure that you have configured EBGP multihop on your on-premises router to have at least four
hops. You can see a
sample configuration in Configuring on-premises routers .
Pairing key issue in a Partner Interconnect connection
When you try to set up a Partner Interconnect connection, you might
encounter an error message such as "Google - Provider status not available." To fix
this issue, follow these steps:
Ensure that the pairing key was generated by the customer-side VLAN attachment ( PARTNER type).
The key is a long random string that Google uses to identify the attachment. The
destination Google Cloud region and edge availability domain are encoded in the
pairing key in the following format:
< random_string > / < region_name > / < domain >
The domain field contains the string any if the VLAN attachment is not
restricted to a particular domain or if you don't specify the edge availability
domain. For more information about the pairing keys, see
pairing key .
Ensure that the edge availability domain of the Partner Interconnect
connection matches the domain specified by the pairing key.
Can't ping Cloud Router (Layer 2 connections)
Check that you have the correct VLAN attachment on your on-premises router's
subinterface. The VLAN attachment information should match the information
provided by your service provider.
Check that you have the right IP address on your on-premises router's
subinterface. After your service provider configures your VLAN attachment,
the attachment allocates a pair of link-local IP addresses. One is for an
interface on the associated Cloud Router ( cloudRouterIpAddress ), and
the other is for a subinterface on your on-premises router's port channel, not
the port channel itself ( customerRouterIpAddress ).
If you're testing the performance of your attachments, don't ping
Cloud Router. Instead, create and then use a VM in your
VPC network. For more information, see
Performance testing .
Loss of optic power on Partner Interconnect connection's port
If there is a loss of optic power on a port, you might encounter one of
the following issues:
Loss of Layer 3 connectivity (loss of a BGP session) or inability to
access your Google Cloud VM instances.
Degraded performance of your link bundle. This issue happens if multiple 10GE ports are
bundled together and only some of the links in a bundle are functioning.
Loss of optic power on a port means that the hardware is unable to detect
a signal from the other end. This can be caused by one of the
following issues:
A faulty transceiver
A faulty transport system
A physical fiber issue
To fix this issue, contact your Partner Interconnect and/or circuit provider. They can perform the
following steps:
Check that their transceiver is functioning.
Run a hard loop to the Meet-Me Room (MMR) to check if the light levels on their device are working as expected.
Check whether the issues are on their side, or on the Google side. The best way to isolate the interface is to put a bidirectional loop at the demarc. The interfaces on each side will transmit light down to the demarc where it will be looped back to itself. The faulty side will be the side of the demarc that does not come up cleanly.
Clean and reseat all the fiber on their side.
Can't send and learn MED values over an L3 Partner Interconnect connection
If you are using a Partner Interconnect connection where a Layer 3 service
provider handles BGP for you, Cloud Router can't learn MED values from your
on-premises router or send MED values to that router. This is because MED values can't pass
through autonomous systems. Over this type of connection, you can't set route priorities
for routes advertised by Cloud Router to your on-premises router. In addition,
you can't set route priorities for routes advertised by your on-premises router to your
VPC network.
IPv6 traffic isn't working after changing an attachment's stack type to dual stack
View Cloud Router
status
and verify that status: UP is displayed.
If BGP isn't up, do the following:
Confirm that your on-premises router (or your partner's router if you
are using a Layer 3 partner) is configured with an IPv6 BGP session, and
that the session is using the correct IPv6 addresses.
View the BGP session
configuration
and verify that bgpPeers.enable displays 'TRUE' for your
Cloud Router.
If BGP is up, view Cloud Router
routes
to verify that the expected IPv6 best_routes are displayed.
If the expected best_routes aren't displayed, confirm that your
on-premises router (or your partner's router if you are using a Layer 3
partner) is configured with the correct IPv6 routes.
All other issues
For additional assistance, contact your service provider. If needed, your
service provider will contact Google to fix issues related to the Google
side of the network.
HA VPN over Cloud Interconnect
When you deploy HA VPN over Cloud Interconnect,
you create two operational tiers:
The Cloud Interconnect tier, which includes the VLAN attachments and
the Cloud Router for Cloud Interconnect.
The HA VPN tier, which includes the
HA VPN gateways and tunnels and the Cloud Router for
HA VPN.
Each tier requires its own Cloud Router:
The Cloud Router for Cloud Interconnect is used exclusively to exchange
VPN gateway prefixes between the VLAN attachments. This Cloud Router is
used only by the VLAN attachments of the Cloud Interconnect tier.
It cannot be used in the HA VPN tier.
The Cloud Router for HA VPN exchanges prefixes between
your VPC network and your on-premises network.
You configure the Cloud Router for HA VPN and its
BGP sessions in the same way you would for a regular HA VPN deployment.
You build the HA VPN tier on top of the Cloud Interconnect
tier. Therefore, the HA VPN tier requires that the Cloud Interconnect
tier, based on either Dedicated Interconnect or Partner Interconnect, is
properly configured and operational.
To troubleshoot an HA VPN over Cloud Interconnect
deployment, troubleshoot the Cloud Interconnect tier
first. After you verify that Cloud Interconnect is functioning correctly,
troubleshoot the HA VPN tier.
Can't establish BGP session for the Cloud Router for Cloud Interconnect
To detect whether the BGP session associated with the VLAN attachment is down,
run the following command:
gcloud compute routers get-status INTERCONNECT_ROUTER_NAME
Replace INTERCONNECT_ROUTER_NAME with the name of the
Cloud Router that you created for the Cloud Interconnect tier of
your HA VPN over Cloud Interconnect deployment.
To fix this issue, follow these steps:
Follow the steps in Testing connections
and Get diagnostics to make sure that
the underlying Cloud Interconnect connection is healthy.
Check that the BGP session interface is pointing to the correct attachment.
Check the IP addresses that are configured for the BGP session interface on
both the Cloud Router and the on-premises router.
Check that the ASN numbers are correctly configured on both the Cloud Router and the
on-premises router.
Check that the Cloud Interconnect connection and the VLAN attachment are in an
admin-enabled state.
Can't establish an HA VPN tunnel
To check the tunnel state, run the command:
gcloud compute vpn-tunnels describe VPN_TUNNEL_NAME
Replace VPN_TUNNEL_NAME with the name of the
HA VPN tunnel.
To fix this issue, follow these steps:
Because the VPN tunnel is routed over a VLAN attachment, check that the
BGP session associated with the VLAN attachment is established. If not, see
Can't establish BGP session for the Cloud Router for Cloud Interconnect .
Check whether the tunnel PSK and ciphers are configured correctly on both the
Cloud VPN gateways and the on-premises VPN gateways.
Check that the on-premises router's BGP announcement includes the on-premises VPN
gateway addresses. If not, adjust the BGP configuration of the
on-premises router to advertise the addresses.
Check that the routes to on-premises VPN gateways have not been dropped
due to conflicts with existing BGP routes. If there are conflicts,
adjust the VPN gateway addresses or advertised routes.
Check that the BGP announcement from Cloud Router includes the
HA VPN gateway addresses. Check this from the on-premises
router or by inspecting the advertisedRoutes field of the BGP peer.
To view the advertisedRoutes field, run the following command:
gcloud compute routers get-status INTERCONNECT_ROUTER_NAME
Replace INTERCONNECT_ROUTER_NAME with the name of the
Cloud Router that you created for the Cloud Interconnect tier of
your HA VPN over Cloud Interconnect deployment.
If the HA VPN gateway addresses are not advertised,
ensure that the VLAN attachments are associated with the encrypted Cloud Interconnect
router. Check that each VLAN attachment is configured with the expected regional
internal IPv4 addresses ( --ipsec-internal-addresses ).
Can't establish BGP session for the Cloud Router for HA VPN
To check if the BGP session associated with the VLAN attachment is down,
run the command:
gcloud compute routers get-status VPN_ROUTER_NAME
Replace VPN_ROUTER_NAME with the name of the
Cloud Router that you created for the HA VPN tier of
your HA VPN over Cloud Interconnect deployment.
To fix this issue, follow these steps:
Because the BGP traffic is routed over the VPN tunnel, check that the
VPN tunnel is established. If not, follow the steps in
Can't establish an HA VPN tunnel .
Check that the BGP session interface for the Cloud Router is pointing
to the correct VPN tunnel.
Check that the IP addresses of the BGP session interface are configured correctly on both the
Cloud Router and the on-premises VPN device.
Check that the ASN numbers are configured correctly on both the Cloud Router
and the on-premises router.
VPC traffic is not reaching on-premises networks or vice versa
The traffic generated from a VM, such as from ping or iperf , can't reach
the on-premises network, or the on-premises network can't reach the traffic generated
from a VM.
To fix this issue, follow these steps:
Because the VM traffic is routed over the VPN tunnel, make sure that the route
from the VM to the VPN tunnel is being sent by the Cloud Router.
Check that the Cloud Router session for HA VPN is established.
If not, see Can't establish BGP session for the Cloud Router for HA VPN .
Packet loss or low throughput
Traffic from VMs on VPC networks to on-premises networks or traffic from
on-premises networks to VPC networks is dropped.
You observe packet loss or low throughput through ping , iperf , and other network
monitoring tools.
To fix this issue, follow these steps:
Check to see if the VLAN attachment is overloaded with traffic. If so,
spread the traffic over more VLAN attachments or update the attachment's
capacity.
Check whether HA VPN is overloaded with traffic.
If so, create additional VPN tunnels over the VLAN attachment to redistribute
the traffic.
Make sure that there are no unexpected or sudden spikes in traffic or bursty traffic.
TCP streams might be affected by other streams, such as bursty UDP traffic.
Check whether packets exceeding the tunnel MTU are fragmented.
Ensure that the MTU is set properly with your VLAN attachments, and
check that UDP traffic isn't being MSS clamped.
VLAN attachment metrics display drops due to BANDWIDTH_THROTTLE
When viewing VLAN attachment metrics when you Monitor connections you may see drops due to BANDWIDTH_THROTTLE .
This occurs when traffic is being sent at too high of a rate through the
attachment, so some traffic is throttled.
However, when viewing the corresponding ingress and egress utilization graphs
there aren't traffic spikes displayed. This is because the metrics are captured
at a 60-second sampling interval, which can mask short traffic spikes or bursts.
To address this, either lower the usage of this attachment, increase the
capacity of the attachment, or utilize more VLAN attachments.
Unable to delete an encrypted VLAN attachment
You receive the following error when you try to delete an encrypted
VLAN attachment for Dedicated Interconnect or Partner Interconnect:
ResourceInUseByAnotherResourceException
To fix this issue, make sure that you have first deleted all the
HA VPN gateways and tunnels associated with the encrypted
VLAN attachment. For more information, see
Delete HA VPN over Cloud Interconnect .
Mismatched IP address types across encrypted VLAN attachments
When you try to create an HA VPN gateway for use in an
HA VPN over Cloud Interconnect deployment, you get the following error:
One of the VLAN attachments has private IP address type, while the other one
has public IP address type; they must have same IP address type.
This error occurs when you specify two encrypted VLAN attachments for an
HA VPN gateway, and they have different IP addressing
schemes for the HA VPN tunnel interfaces. The IP address
types must match across both VLAN attachments.
During VPN gateway creation, specify VLAN attachments that use either both private IP
addresses or both public IP addresses.
If you get this error when creating a VPN gateway,
retry recreating the VLAN attachment with the correct address type.
Missing VLAN attachment from HA VPN gateway interface
If being deployed for HA VPN over Cloud Interconnect, an HA VPN
gateway must have an encrypted VLAN attachment specified for both its interfaces.
If you specify only one VLAN attachment, the following error appears:
VPN Gateway should have VLAN attachment specified in both interfaces or in none.
To fix this issue, create the HA VPN gateway and
specify two VLAN attachments.
Invalid VLAN attachment type
Encrypted VLAN attachments must have the type DEDICATED or PARTNER .
If you specify an invalid type for an encrypted VLAN attachment,
the following error message appears:
VLAN attachment should have type DEDICATED or PARTNER.
To fix this issue, only create encrypted VLAN attachments with the type DEDICATED
or PARTNER .
Wrong MTU value for VLAN attachment
When creating an encrypted VLAN attachment for Dedicated Interconnect,
the following error message appears:
Wrong MTU value [mtuValue] for VLAN attachment.
The supported MTU for IPsec packets for HA VPN over Cloud Interconnect is 1440.
To fix this issue, recreate the attachment with the correct value of 1440 ,
which is the default value.
VLAN attachments have a different type
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
VLAN attachments should both have same type DEDICATED or PARTNER.
But found one DEDICATED and one PARTNER.
To fix this issue, specify two VLAN attachments that are the same type,
either DEDICATED or PARTNER .
Dedicated VLAN attachments are not in the same metropolitan area
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
Dedicated VLAN attachments should be in the same metropolitan area.
To fix this issue, create two encrypted VLAN attachments for
Dedicated Interconnect in the same metropolitan area.
HA VPN gateway is not in the same network as VLAN attachment
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
VPN Gateway should be in the same network as VLAN attachment.
VLAN attachment network: [networkName], VPN gateway network: [networkName]
To fix this issue, create the HA VPN gateway in the same
network as the encrypted VLAN attachments.
Wrong encryption type for VLAN attachment
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
Wrong encryption type for VLAN attachment [interconnectAttachmentName],
required IPSEC.
To fix this issue, specify only encrypted VLAN attachments that are configured
with the encryption type IPSEC .
If necessary, create encrypted VLAN attachments.
VLAN attachment zone does not match interfaceId
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
VLAN attachment zone should match interfaceId: interface 0 - zone1,
interface 1 - zone2, but found interface [interfaceId] - [zone] for
[interconnectAttachmentName].
The first HA VPN gateway interface ( interface 0 ) must
match the encrypted VLAN attachment from zone 1, and the second interface
( interface 1 ) must match the encrypted VLAN attachment from zone 2.
To fix this issue, specify encrypted VLAN attachments from the zones matched
correctly to the HA VPN gateway interfaces.
VPN gateway is not in the same region as VLAN attachment
When specifying encrypted VLAN attachments for your HA VPN
gateway interfaces, the following error message appears:
VPN Gateway should be in the same region as VLAN attachment.
VLAN attachment region: [region], VPN gateway region: [region].
To fix this issue, create HA VPN gateways and
encrypted VLAN attachments in the same region.
Partner VLAN attachment is not in active state
When specifying encrypted VLAN attachments for Partner Interconnect
for your HA VPN gateway interfaces, the following error
message appears:
Interconnect Attachments [name] must be in active state.
You must activate the VLAN attachments for Partner Interconnect
before you associate them with HA VPN gateway interfaces.
For more information, see Activate connections .
Wrong type of Cloud Router specified for VLAN attachment
When you try to create an encrypted VLAN attachment, the following error message appears:
Router must be an encrypted interconnect router.
To fix this issue, create a Cloud Router with the --encrypted-interconnect-router
flag. This Cloud Router is used exclusively for HA VPN over Cloud Interconnect.
Then, create the encrypted VLAN attachment and provide the encrypted Cloud Router.
Cross-Cloud Interconnect
This section describes issues that can come up with
Cross-Cloud Interconnect.
Google supports the connection up to the point where it reaches the network of
your other cloud service provider. Google does not guarantee uptime from the
other cloud service provider and cannot create a support ticket on your behalf.
With your permission Cloud Customer Care can
communicate directly with your other cloud provider's support team to expedite
issue resolution. However, you must have a support ticket open with the
other provider.
Mismatches between redundant ports
After you order Cross-Cloud Interconnect ports, you give
Google information about how you want the ports connected to your remote
cloud ports. You also use this information later, when you configure your
resources. If you have connectivity issues, one problem might be that you
didn't use the correct connectivity details.
For example, you might provide instructions like the following:
Connect gcp-1 to azure-1 .
Connect gcp-2 to azure-2 .
However, when configuring your resources, you might assume that the ports
are connected as follows:
Connect gcp-1 to azure-2 .
Connect gcp-2 to azure-1 .
This condition might be detectable through examination of the ARP cache.
However, a simpler solution is to go to the remote cloud and try swapping the
IP address ranges assigned to the two BGP peers.
For example, suppose azure-1 has a VLAN attachment peering on 169.254.0.2
and azure-2 has a VLAN attachment peering on 169.254.99.2. Swap the IP
address ranges so that the azure-1 attachment uses 169.254.99.2 and the
azure-2 attachment uses 169.254.0.2.
If you used different VLAN IDs for the attachment on each port, you would
also need to swap the VLAN IDs used by the attachments. For Azure, this
scenario is impossible because it requires using the same VLAN ID on both
ports for each attachment.
VLAN IDs
Sometimes connectivity problems can be traced to mistakes with VLAN ID
values. VLAN ID is a field on your Cross-Cloud Interconnect
VLAN attachment.
Azure
Azure requires that VLAN IDs be allocated identically on both
ports of a pair. When you create your VLAN attachment, the Google Cloud console
enforces this requirement. However, if you set up the attachments by using the
Google Cloud CLI or the API, it's possible to allocate different VLAN IDs.
This risk is especially great if you let VLAN IDs be automatically assigned
when you create the attachment. If you don't explicitly set the ID, it's
automatically assigned.
AWS
When connecting to AWS, it's OK to use automatic assignment of VLAN IDs.
However, when configuring your AWS resources, you must manually configure the
VLAN IDs to match the ones that Google Cloud automatically assigned.
Also, it's important to not confuse which VLAN ID should be used for each port.
If the wrong VLAN ID is configured on a port, the virtual routers are unable to
communicate.
Verify connectivity
If you haven't already, follow the steps for verifying connectivity
between Google Cloud and your remote cloud network:
Verify your connection (AWS)
Verify your connection (Azure)
Verify your connection (OCI)
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
