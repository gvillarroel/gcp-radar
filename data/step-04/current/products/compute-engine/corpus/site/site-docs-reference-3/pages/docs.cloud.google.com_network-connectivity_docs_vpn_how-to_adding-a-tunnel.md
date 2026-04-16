---
title: "Add a VPN tunnel \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/adding-a-tunnel
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/adding-a-tunnel
  title: "Add a VPN tunnel \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Guides
Send feedback
Add a VPN tunnel
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to add VPN tunnels to HA VPN or
Classic VPN.
If you haven't set up your HA VPN gateway yet,
see the following:
Create an HA VPN gateway to a peer VPN gateway
Create HA VPN gateways to connect VPC networks
Add an HA VPN gateway to HA VPN over Cloud Interconnect
Note: To create and configure an HA VPN over Cloud Interconnect deployment, see
Deploy HA VPN over Cloud Interconnect .
Add a tunnel from an HA VPN gateway to a peer VPN gateway
To receive a 99.99% uptime SLA, configure a tunnel on each
HA VPN interface. This section includes the
steps to configure additional tunnels on the interface of an
HA VPN gateway.
Configure additional HA VPN tunnels in the following circumstances:
If you configured an HA VPN gateway to a peer
VPN gateway that has a single peer VPN interface.
If you previously set up a single tunnel on an HA VPN
gateway for a peer VPN gateway that contains any number of interfaces, but you now want
a 99.99% uptime SLA for your HA VPN gateway.
If you deployed HA VPN over Cloud Interconnect and you need to add
HA VPN tunnels to accommodate the increased capacity
of a VLAN attachment.
To configure additional HA VPN tunnels, complete the following steps.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
compute.vpnGateways.get
compute.vpnGateways.list
compute.vpnGateways.create
compute.vpnGateways.delete
compute.vpnGateways.use
compute.vpnGateways.setLabels
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.externalVpnGateways.create
compute.externalVpnGateways.delete
compute.externalVpnGateways.use
compute.externalVpnGateways.setLabels
Roles
roles/compute.networkAdmin
Console
In the Google Cloud console, go to the VPN page.
Go to VPN
Click Create VPN tunnel .
From the drop-down menu, select the gateway that requires the additional
tunnel, and then click Continue .
Choose a Cloud Router. If you haven't configured a
Cloud Router, follow the steps for creating one in the
Create VPN tunnels
procedure.
For Peer VPN gateway , select On-prem or Non Google Cloud .
For Peer VPN gateway name , choose the existing peer VPN gateway
resource that the new tunnel will use. To check existing peer
VPN gateway names for this Cloud VPN gateway, under
VPN gateway name near the top of the page, click
View all existing tunnels .
You might receive a warning that a tunnel with the same peer VPN gateway
interface is already associated with the same local Cloud VPN
gateway interface. To fix this issue, under
Associated Cloud VPN gateway interface , select
the other HA VPN interface.
To finish configuring the tunnel, configure the remainder of the steps
as listed in the
Create VPN tunnels
procedure.
Add a tunnel from an HA VPN gateway to another HA VPN gateway
This section includes the steps to configure a second tunnel
on the second interface of an HA VPN gateway.
If you configured one tunnel on an HA VPN gateway to
another HA VPN gateway but want to receive a 99.99%
uptime SLA, you must configure a second tunnel. Configure a tunnel on each
HA VPN interface on each side of an
HA VPN-to-HA VPN gateway
configuration.
To configure a second tunnel, complete the following steps.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
compute.vpnGateways.get
compute.vpnGateways.list
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.vpnGateways.create
compute.vpnGateways.delete
compute.vpnGateways.get
compute.vpnGateways.list
compute.vpnGateways.use
compute.vpnGateways.setLabels
compute.externalVpnGateways.create
compute.externalVpnGateways.delete
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.externalVpnGateways.use
compute.externalVpnGateways.setLabels
Roles
roles/compute.networkAdmin
Console
In the Google Cloud console, go to the VPN page.
Go to VPN
Find the HA VPN that you want to add the tunnel to.
Click Add VPN tunnel .
Under Peer VPN gateway , select Google Cloud .
Under Project , select a Google Cloud project that will contain
the new gateway.
For VPN gateway name , choose the other HA VPN
gateway that the new tunnel connects to.
Select Add the second VPN tunnel to an existing VPN tunnel for high
availability .
Under Select existing VPN tunnel , make sure that the existing tunnel
is selected. You can click a link to view all existing tunnels
near the top of the same page.
Specify a tunnel Name .
Specify the same IKE version in use by the tunnel on the other gateway.
Specify an IKE pre-shared key by using your pre-shared key
(shared secret), which must correspond with the pre-shared key for the
partner tunnel that you create on your peer gateway. If you haven't
configured a pre-shared key on your peer VPN gateway and want to generate
one, click Generate and copy . Make sure that you record the
pre-shared key in a secure location because it cannot be retrieved
after you create your VPN tunnels.
Click Create and continue .
Configure and save a BGP session . Otherwise, you can do this later
by following the steps in the
Create BGP sessions
procedure.
Check the Summary and reminder page for configuration information,
and then click OK .
Add a tunnel to Classic VPN
Each Cloud VPN tunnel associated with a Classic VPN
gateway must connect to a unique peer VPN gateway, as identified by the
peer gateway's IP address. If you need to create a second tunnel to the same
peer gateway, you must create that tunnel from a different Cloud VPN
gateway.
Note: The IP address of the peer VPN gateway must be an external IP address.
You can't use IP addresses that are listed in either RFC 5737
or RFC 5735 . The peer gateway
must use its external IP address to identify itself,
even if it's located behind a NAT device .
To configure a second tunnel, complete the following steps.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
compute.vpnGateways.get
compute.vpnGateways.list
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.vpnGateways.create
compute.vpnGateways.delete
compute.vpnGateways.get
compute.vpnGateways.list
compute.vpnGateways.use
compute.vpnGateways.setLabels
compute.externalVpnGateways.create
compute.externalVpnGateways.delete
compute.externalVpnGateways.get
compute.externalVpnGateways.list
compute.externalVpnGateways.use
compute.externalVpnGateways.setLabels
Roles
roles/compute.networkAdmin
Console
Note: Before creating a tunnel that uses policy-based routing or a
route-based VPN, review the details for
traffic selectors .
Pay special attention to the notes about
multiple IP ranges .
In the Google Cloud console, go to the VPN page.
Go to VPN
Click the Google VPN gateways tab.
Click the name of an existing VPN gateway.
On the VPN gateway details page, in the Tunnels section, click
Add VPN tunnel .
Supply the following information:
In the Name field, enter a name for the tunnel.
In the Remote peer IP address field, enter the external IP
address of the peer VPN gateway.
Choose an IKE version compatible with your peer VPN gateway.
Provide the IKE pre-shared key (shared secret) for
authentication. For suggestions, see
Generate a strong pre-shared key .
Click the appropriate
Routing option :
To use dynamic routing, click Dynamic (BGP) . On the
Cloud Router menu, select or create a new
Cloud Router. To define the BGP session parameters, in the
BGP session field, click
edit Edit .
Each BGP IP address range for each BGP session must be
unique among all Cloud Routers in all regions of a
Virtual Private Cloud (VPC) network.
To use route-based VPN, click Route-based . In the
Remote network IP ranges field, supply
the ranges of IP addresses used by the peer network.
To use policy-based routing, click Policy-based . Supply both
the Remote network IP ranges and the Local IP ranges . In
the Local subnetworks menu, select IP ranges of subnets in a
VPC network.
Click Create .
Complete your configuration by following the steps in
Configure the peer VPN gateway .
gcloud
Follow the steps for creating a route-based VPN gateway and tunnel,
but start in the section
Create the Cloud VPN tunnel .
If the new tunnel has the same CIDR block, you can skip to
Configure firewall rules .
Check tunnel status
After you configure an HA VPN or
Classic VPN tunnel,
check its status .
What's next
To view Cloud Logging and Monitoring information, see
View logs and metrics .
To use high-availability and high-throughput scenarios or multiple
subnet scenarios, see
Advanced configurations .
To help you solve common issues that you might encounter when using
Cloud VPN, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
