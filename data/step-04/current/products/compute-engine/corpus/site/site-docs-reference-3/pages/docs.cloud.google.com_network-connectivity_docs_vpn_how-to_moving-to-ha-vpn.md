---
title: "Move from Classic VPN to HA VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn
  title: "Move from Classic VPN to HA VPN \_|\_ Google Cloud Documentation"
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
Move from Classic VPN to HA VPN
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the strategy to move from Classic VPN to
HA VPN.
For more information about Cloud VPN, see the
Cloud VPN overview .
For definitions of terms used on this page, see
Key terms .
Requirements
General guidelines
Consider the following as you plan a migration to HA VPN:
Your peer VPN device or service must support the Border Gateway Protocol
(BGP). If it does not, you cannot use HA VPN.
The external IP address of your Cloud VPN gateway cannot be
preserved. When you create an HA VPN gateway, two new
external IP addresses are created. Google Cloud selects these IP
addresses from two different pools as part of the high availability (HA)
design.
You cannot migrate an existing Cloud VPN tunnel or tunnels on a
Classic VPN gateway to an HA VPN gateway.
Instead, you need to create new tunnels and delete the old ones.
Migrating to HA VPN means that you can only use features
supported on HA VPN connections. For example, you
cannot connect a Classic VPN gateway to an
HA VPN gateway.
Create Cloud Routers
When configuring a new HA VPN gateway, you can create a new
Cloud Router, or you can use an existing Cloud Router with
existing Cloud VPN tunnels or VLAN attachments. However, the
Cloud Router that you use must not already manage a BGP session for
a VLAN attachment associated with a Partner Interconnect
connection because of the attachment's
specific
ASN requirements .
Migration steps
To move from Classic VPN to HA VPN
gateways and tunnels, perform the following steps:
Create a new HA VPN gateway, Cloud Router,
and VPN tunnels to connect your
Virtual Private Cloud network to your peer network.
The new HA VPN gateway that you create has two new
external IP addresses.
Verify that the new tunnels are working ,
and check the configuration of your
HA VPN gateway for high availability.
Delete the tunnel or tunnels
connected to the Classic VPN gateway. If the
previous VPN tunnel or tunnels were policy-based or route-based,
remove any leftover custom static routes .
Delete the Classic VPN
gateway and
release any static external IP addresses
that it used.
What's next
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
