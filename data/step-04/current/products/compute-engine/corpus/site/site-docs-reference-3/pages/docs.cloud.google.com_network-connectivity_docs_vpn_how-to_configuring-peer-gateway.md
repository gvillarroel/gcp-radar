---
title: "Configure the peer VPN gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway
  title: "Configure the peer VPN gateway \_|\_ Google Cloud Documentation"
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
Configure the peer VPN gateway
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to complete your VPN configuration.
To complete your configuration, configure the following resources on your
peer VPN gateway:
Corresponding VPN tunnels to Cloud VPN
Border Gateway Protocol (BGP) sessions if you are using dynamic routing with
Cloud Router
Firewall rules
IKE settings
For best practices when setting up your peer gateway, see your peer gateway
documentation or manufacturer. For guides that describe some supported
third-party VPN devices and services, see
Use third-party VPNs . In addition,
some third-party device configuration templates are available for download from
the Google Cloud console. For more information,
see Download a peer VPN configuration template .
For more information about Cloud VPN, see the following resources:
For best practices to consider before setting up Cloud VPN, see
Best practices .
For more information about Cloud VPN, see the
Cloud VPN overview .
For definitions of terms used on this page, see
Key terms .
Configure external peer VPN gateway resources for HA VPN
For HA VPN, you configure an external peer VPN
gateway resource that represents your physical peer gateway in Google Cloud. You
can also create this resource as a standalone resource and use it later.
To create an external peer VPN gateway resource, you need the following values
from your physical peer gateway, which can also be a third-party software-based
gateway. For the VPN to be established, the values for the external peer
VPN gateway resource must match the configuration on your physical peer gateway:
The number of interfaces on your physical VPN gateway
External IP address or addresses for one or more peer gateways or interfaces
BGP endpoint IP address or addresses
The IKE pre-shared key (shared secret)
The ASN number
When you configure the BGP sessions for HA VPN and enable
IPv6, you have the option of configuring IPv6 next hop addresses.
If you do not configure them manually, Google Cloud assigns these IPv6
next hop addresses automatically for you.
To allow IPv4 and IPv6 (dual-stack) traffic in HA VPN
tunnels, you must obtain the IPv6 next hop address
assigned to the BGP peer. Then, you must configure the IPv6 next hop address
when you configure the VPN tunnels on your peer VPN device.
Although you configure IPv6 addresses on the tunnel interfaces of each device,
the IPv6 addresses are solely used for IPv6 next hop configuration.
IPv6 routes are advertised through IPv6 NLRI over IPv4 BGP peering.
For examples of IPv6 next hop address configurations, see
Set up third-party VPNs for IPv4 and IPv6 traffic .
To create a stand-alone external peer VPN gateway resource, complete the
following steps.
Console
In the Google Cloud console, go to the VPN page.
Go to VPN
Click Create peer VPN gateway .
Give the peer gateway a Name .
Select the number of interfaces that your physical peer gateway has:
one , two , or four .
Add the Interface IP address for each interface on your physical
VPN gateway.
Click Create .
gcloud
When running the following command, enter the interface ID and IP address
for your physical VPN gateway. You can enter 1, 2, or 4 interfaces.
gcloud compute external-vpn-gateways create mygateway \
--interfaces 0=35.254.128.120,1=35.254.128.121
The command output should look like the following example:
Creating external VPN gateway...done.
NAME REDUNDANCY_TYPE
mygateway TWO_IPS_REDUNDANCY
API
For this command, you can use this list of gateway
redundancy types .
Make a POST request by using the
externalVpnGateways.insert method.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/externalVpnGateways
{
"name": "mygateway",
"interfaces": [
{
"id": 0,
"ipAddress": "35.254.128.120"
},
{
"id": 1,
"ipAddress": "35.254.128.121"
},
],
"redundancyType": "TWO_IPS_REDUNDANCY"
}
Configure VPN tunnels
To create corresponding tunnels for each Cloud VPN tunnel that you
created, consult the documentation for your peer VPN gateway.
For HA VPN, configure two tunnels on your peer gateway.
One tunnel on the peer gateway should correspond to the Cloud VPN
tunnel on interface 0 . Another tunnel on the peer gateway should correspond
to the Cloud VPN tunnel on interface 1 .
Each tunnel on your peer gateway should also use a unique external IP
address for your HA VPN gateway to use.
Configure BGP sessions for dynamic routing
Note: Always configure BGP sessions for HA VPN gateways and
for Classic VPN gateways with tunnels that use dynamic routing.
For dynamic routing only, configure your peer VPN gateway to support
BGP sessions for the peer subnets that you want to advertise to
Cloud Router.
To configure your peer gateway, use the ASNs and IP addresses of your
Cloud Router and the information from your Cloud VPN gateway.
To obtain the Google ASN, configured peer network ASNs, and BGP IP addresses,
use the
Cloud Router summary information .
If you are configuring HA VPN to allow
IPv4 and IPv6 (dual-stack) traffic, you must configure the peer gateway
with the IPv6 next hop address assigned to the BGP peer.
For HA VPN, the Google ASN—which is the peer
ASN from the perspective of your peer VPN gateway—is the same for both
tunnels.
You can optionally configure your BGP sessions to use
MD5 authentication .
Configure firewall rules
For HA VPN connections that use IPv6,
you must configure your firewalls to allow IPv6 traffic.
For instructions about configuring firewall rules for your peer network, see
Configure firewall rules .
Configure IKE
You can configure IKE on your peer VPN gateway for dynamic, route-based, and
policy-based routing.
HA VPN tunnels must use IKE v2 to support IPv6 traffic.
To configure the peer VPN gateway and tunnel for IKE, use the parameters in the
following table.
For information about connecting Cloud VPN to some third-party VPN solutions, see
Using third-party VPNs
with Cloud VPN . For information about IPsec encryption and authentication settings,
see
Supported IKE ciphers .
For IKEv1 and IKEv2
Setting
Value
IPsec Mode
ESP+Auth Tunnel mode (Site-to-Site)
Auth Protocol
psk
Shared Secret
Also known as an IKE pre-shared key. Choose a strong password by following
these guidelines .
The pre-shared key is sensitive because it allows access into your network.
Start
auto (if the peer device drops, it should automatically restart the
connection)
PFS (Perfect Forward Secrecy)
on
DPD (Dead Peer Detection)
Recommended: Aggressive . DPD detects when the VPN
restarts and uses alternate tunnels to route traffic.
INITIAL_CONTACT (sometimes called uniqueids )
Recommended: on (sometimes called restart ).
Purpose: detect restarts faster so that perceived downtime is reduced.
TSi (Traffic Selector - Initiator)
Subnet networks: the ranges specified by the
--local-traffic-selector flag. If
--local-traffic-selector is not specified because the
VPN is in an auto mode VPC network and is announcing only the gateway's
subnet, then that subnet range is used.
Legacy networks: the range of the network.
TSr (Traffic Selector - Responder)
IKEv2: The destination ranges of all the routes that have
--next-hop-vpn-tunnel set to this tunnel.
IKEv1: Arbitrarily, the destination range of one of the routes that
has --next-hop-vpn-tunnel set to this tunnel.
MTU
The maximum transmission unit (MTU) of the peer VPN device must not exceed 1460 bytes.
Enable prefragmentation on your device so that packets are fragmented first and then
encapsulated. For more information, see
MTU considerations .
Additional parameters for IKEv1 only
Setting
Value
IKE/ISAKMP
aes128-sha1-modp1024
ESP
aes128-sha1
PFS Algorithm
Group 2 ( MODP_1024 )
Configuring traffic selectors
To support both IPv4 and IPv6 traffic, set the traffic selectors on your
peer VPN gateway to 0.0.0.0/0,::/0 .
To support only IPv4 traffic, set the traffic selectors on your
peer VPN gateway to 0.0.0.0/0 .
What's next
To download a configuration template for your peer VPN device, see
Download a peer VPN configuration template .
To configure firewall rules for your peer network, see
Configure firewall rules .
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
