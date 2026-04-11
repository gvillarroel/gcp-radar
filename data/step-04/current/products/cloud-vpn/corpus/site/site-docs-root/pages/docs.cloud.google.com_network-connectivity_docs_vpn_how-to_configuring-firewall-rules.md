---
title: "Configure firewall rules \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-firewall-rules
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-firewall-rules
  title: "Configure firewall rules \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
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
Configure firewall rules
Stay organized with collections
Save and categorize content based on your preferences.
This page provides guidance for configuring Google Cloud firewall
rules and your peer network firewall rules.
When you configure Cloud VPN tunnels to connect to your peer network,
review and modify firewall rules in your Google Cloud and peer networks
to make sure that they meet your needs. If your peer network is another
Virtual Private Cloud (VPC) network, then configure Google Cloud firewall
rules for both sides of the network connection.
Note: If your Cloud VPN tunnel uses
dynamic (BGP) routing ,
make sure that your on-premises network and VPN gateway
allow BGP traffic so that route information can be exchanged.
For more information about Cloud VPN, see the following resources:
For best practices to consider before setting up Cloud VPN, see
Best practices .
For more information about Cloud VPN, see the
Cloud VPN overview .
For definitions of terms used on this page, see
Key terms .
Google Cloud firewall rules
Google Cloud firewall rules apply to packets sent to and
from virtual machine (VM) instances within your VPC network
and through Cloud VPN tunnels.
The implied allow egress rules
allow VM instances and other resources in your Google Cloud network to
make outgoing requests and receive established responses. However, the
implied deny ingress rule blocks
all incoming traffic to your Google Cloud resources.
At a minimum, create firewall rules to allow ingress traffic from
your peer network to Google Cloud. If you created egress rules to
deny certain types of traffic, you might also need to create other egress
rules.
Traffic containing the protocols UDP 500, UDP 4500, and ESP
(IPsec, IP protocol 50) is always allowed to and from one or more external IP
addresses on a Cloud VPN gateway. However, Google Cloud firewall
rules do not apply to the
post-encapsulated IPsec packets
that are sent from a Cloud VPN gateway to a peer VPN gateway.
For more information about Google Cloud firewall rules, see the
VPC firewall rules overview .
Example configurations
For multiple examples of restricting ingress or egress traffic, see the
configuration examples
in the VPC documentation.
The following example creates an ingress allow firewall rule. This rule
permits all TCP, UDP, and ICMP traffic from your peer network's CIDR to your
VMs in your VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Roles
roles/compute.securityAdmin
Console
In the Google Cloud console, go to the VPN tunnels page.
Go to VPN tunnels
Click the VPN tunnel that you want to use.
In the VPN gateway section, click the name of the VPC
network. This action directs you to the VPC network details page that
contains the tunnel.
Click the Firewall rules tab.
Click Add firewall rule . Add a rule for TCP, UDP, and ICMP:
Name: Enter allow-tcp-udp-icmp .
Source filter: Select IPv4 ranges .
Source IP ranges: Enter a Remote network IP range value from
when you created the tunnel. If you have more than one peer network
range, enter each one. Press the Tab key between entries.
To allow traffic from all source IPv4 addresses in your peer network, specify 0.0.0.0/0 .
Specified protocols or ports: Select tcp and udp .
Other protocols: Enter icmp .
Target tags: Add any valid tag or tags.
Click Create .
If you need to allow access to IPv6 addresses on your VPC network from your peer network, add an allow-ipv6-tcp-udp-icmpv6 firewall rule.
Click Add firewall rule . Add a rule for TCP, UDP, and ICMPv6:
Name: Enter allow-ipv6-tcp-udp-icmpv6 .
Source filter: Select IPv6 ranges .
Source IP ranges: Enter a Remote network IP range value from
when you created the tunnel. If you have more than one peer network
range, enter each one. Press the Tab key between entries.
To allow traffic from all source IPv6 addresses in your peer network, specify ::/0 .
Specified protocols or ports: Select tcp and udp .
Other protocols : Enter 58 . 58 is the protocol number for ICMPv6.
Target tags: Add any valid tag or tags.
Click Create .
Create other firewall rules if necessary.
Alternatively, you can create rules from the Google Cloud console
Firewall page.
gcloud
Run the following command:
gcloud compute --project PROJECT_ID firewall-rules create allow-tcp-udp-icmp \
--network NETWORK \
--allow tcp,udp,icmp \
--source-ranges IPV4_PEER_SOURCE_RANGE
Replace IPV4_PEER_SOURCE_RANGE with source IPv4 ranges from your peer network.
If you have more than one peer network range, provide a comma-separated
list in the source-ranges field
( --source-ranges 192.168.1.0/24,192.168.2.0/24 ).
To allow traffic from all source IPv4 addresses in your peer network, specify 0.0.0.0/0 .
IPv6 firewall rules
If you need to allow access to IPv6 addresses on your VPC network from your peer network, add an allow-ipv6-tcp-udp-icmpv6 firewall rule.
gcloud compute --project PROJECT_ID firewall-rules create allow-ipv6-tcp-udp-icmpv6 \
--network NETWORK \
--allow tcp,udp,58 \
--source-ranges IPV6_PEER_SOURCE_RANGE
58 is the protocol number for ICMPv6.
Replace PEER_SOURCE_RANGE with source IPv6 ranges from your peer network.
If you have more than one peer network range, provide a comma-separated
list in the source-ranges field
( --source-ranges 2001:db8:aa::/64,2001:db8:bb::/64 ).
To allow traffic from all source IPv6 addresses in your peer network, specify ::/0 .
Other firewall rules
Create other firewall rules if necessary.
For more information about the firewall-rules command, see the
gcloud firewall rules
documentation.
Peer firewall rules
When configuring your peer firewall rules, consider the following:
Configure rules to allow egress and ingress traffic to and from
the IP ranges used by the subnets in your VPC network.
You can choose to permit all protocols and ports, or you can restrict traffic
to only the necessary set of protocols and ports to meet your needs.
Allow ICMP traffic if you need to use ping to be able to communicate among peer systems and instances or resources in Google Cloud.
If you need to access IPv6 addresses on your peer network with ping ,
allow ICMPv6 (IP protocol 58) in your peer firewall.
Both your network devices (security appliances, firewall devices,
switches, routers, and gateways) and software running on your systems (such as
firewall software included with an operating system) can implement on-premises
firewall rules. To allow traffic, configure all firewall rules in the path to
your VPC network appropriately.
If your VPN tunnel uses dynamic (BGP) routing, make sure that you allow BGP
traffic for the link-local IP addresses. For more details, see the next
section.
BGP considerations for peer gateways
Dynamic (BGP) routing exchanges route information by using TCP port 179. Some VPN
gateways, including Cloud VPN gateways, allow this traffic automatically
when you choose dynamic routing. If your peer VPN gateway does not,
configure it to allow incoming and outgoing traffic on TCP port 179. All BGP
IP addresses use the link-local 169.254.0.0/16 CIDR block.
If your peer VPN gateway is not directly connected to the internet, make
sure that it and peer routers, firewall rules, and security appliances are
configured to at least pass BGP traffic (TCP port 179) and ICMP traffic to your
VPN gateway. ICMP is not required, but it is useful to test connectivity between
a Cloud Router and your VPN gateway. The range of IP addresses to which
your peer firewall rule should apply must include the BGP IP addresses of the
Cloud Router and your gateway.
What's next
To make sure components are communicating correctly with Cloud VPN,
see Check VPN status .
To use high-availability and high-throughput scenarios or multiple
subnet scenarios, see
Advanced configurations .
To help you solve common issues that you might encounter when using
Cloud VPN, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
