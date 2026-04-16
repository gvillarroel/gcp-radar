---
title: "Classic VPN topologies \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/classic-topologies
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/classic-topologies
  title: "Classic VPN topologies \_|\_ Google Cloud Documentation"
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
Classic VPN topologies
Stay organized with collections
Save and categorize content based on your preferences.
With Classic VPN, your on-premises hosts communicate through
one or more IPsec VPN tunnels to Compute Engine virtual machine (VM) instances
in your project's Virtual Private Cloud (VPC) networks.
Classic VPN supports site-to-site VPN as the sample topology
shown on this page or with redundancy options .
Note: For information about HA VPN topologies, including
Google Cloud-to-Google Cloud VPNs, see the
HA VPN topologies page .
For information about configuring third-party devices or services with
Cloud VPN, see
Use third-party VPNs .
Sample Classic VPN topology
The following diagram shows a sample VPN
connection
between a Classic VPN gateway and your
peer VPN gateway.
Sample VPN topology with a connection between a
Classic VPN gateway and your peer VPN gateway
(click to enlarge).
Redundancy and failover options
Note: With Classic VPN, it isn't possible to create two VPN tunnels
within the same Cloud VPN gateway to the same destination VPN gateway.
You can provide redundancy and failover for Classic VPN gateways
by using a second Classic VPN gateway.
Use a second peer VPN gateway
For Classic VPN, if your on-premises side is hardware based, having
a second peer VPN gateway provides redundancy and failover on that side
of the connection. A second physical gateway lets you take one of the gateways
offline for software upgrades or other scheduled maintenance. It also protects
you in case of an outright failure in one of the devices.
To configure a tunnel from your Cloud VPN gateway to a
second on-premises-side VPN gateway, do the following:
Configure a second on-premises VPN gateway and a tunnel.
Set up a second tunnel on your Cloud VPN
gateway pointing to the second on-premises gateway.
Forward the same routes for the second tunnel as you did for the first.
If you want both tunnels to balance traffic, set their
route priorities to be the same.
If you want one tunnel to be primary, set a lower priority on the
second tunnel.
If either VPN tunnel fails due to network issues along the path, or a
problem with an on-premises gateway, the Cloud VPN gateway will
continue sending traffic over the healthy tunnel and will automatically resume
using both tunnels once the failed tunnel recovers.
For details about configuring redundancy with dynamic routing, see the
Cloud Router redundancy page .
Redundant on-premises VPN gateways (click to enlarge).
Increased throughput and load balancing options
Note: the solutions in this section for increasing throughput can be also used
to load balance between two gateways as described for each option.
For information about VPN bandwidth, see the
VPN Overview and Calculating
network throughput .
There are three options for scaling a Cloud VPN configuration:
Option 1: Scale the on-premises VPN gateway.
Option 2: Scale the Cloud VPN gateway. If your on-premises VPN
gateway's throughput capabilities are higher, and you want to scale higher
throughput from the Cloud VPN gateway, you can set up a second
Cloud VPN gateway.
Option 3: Scale both the on-premises VPN gateway and the Cloud VPN
gateway.
Option 1: Scale the on-premises VPN gateway
Set up a second on-premises VPN gateway device with a different external IP
address. Create a second tunnel on your existing Cloud VPN gateway
that forwards the same IP range, but pointing at the second on-premises gateway
IP. Your Cloud VPN gateway automatically load balances between the
configured tunnels. You can set up the VPN gateways to have multiple tunnels
load balanced this way to increase the aggregate VPN connectivity throughput.
Redundant on-premises VPN gateways (click to enlarge).
Option 2: Scale the Cloud VPN gateway
Note: This configuration requires an on-premises VPN gateway that supports using
equal-cost multi-path routing
( ECMP )
between two tunnels having the same on-premises IP ranges. Many software VPNs
are not capable of this.
Add a second
Cloud VPN gateway in the same region as the existing VPN gateway. The second Cloud VPN gateway can have a tunnel that points to
the same IP address of the on-premises VPN gateway as the tunnel on the first
gateway. Once configured, traffic to the on-premises VPN gateway is
automatically load balanced between the two Cloud VPN gateways and
tunnels.
Redundant Cloud VPN gateways (click to enlarge).
Option 3: Scale both the on-premises VPN gateway and the Cloud VPN gateway
Note: This configuration requires an on-premises VPN gateway that supports using
equal-cost multi-path routing
( ECMP )
between two tunnels having the same on-premises IP ranges. Many software VPNs
are not capable of this.
Combine options 1 and 2 mentioned above to scale throughput. If you have
two on-premises VPN gateways and two Cloud VPN gateways, each
Cloud VPN gateway can have a tunnel pointing at each on-premises
VPN gateway external IP, giving you four load balanced tunnels between the VPN
gateway, thereby potentially providing four times the bandwidth.
Redundant Cloud VPN and on-premises VPN gateways (click to enlarge).
For more information, see the tutorial
Building high-throughput VPNs .
You can increase the number of tunnels up to your project's quota. ECMP is used
to balance traffic between tunnels.
What's next
To move to HA VPN, see
Move to HA VPN .
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
