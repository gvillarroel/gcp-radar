---
title: "Use third-party VPNs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides
  title: "Use third-party VPNs \_|\_ Google Cloud Documentation"
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
Use third-party VPNs
Stay organized with collections
Save and categorize content based on your preferences.
This page provides Google-tested interoperability guides and vendor-specific
notes for peer third-party VPN devices or services that you can use to connect
to Cloud VPN.
Each Interop guide offers specific instructions for connecting the third-party
VPN solution to Cloud VPN. If the third-party solution supports
dynamic (BGP) routing, the guide includes configuration instructions for
Cloud Router .
Most peer VPN devices should be compatible with Cloud VPN. For general
information about configuring peer VPN devices, see
Configure the peer VPN gateway .
Any third-party device or service that supports IPsec and IKE versions 1 or
2 should be compatible with Cloud VPN. For a list of IKE ciphers and
other configuration parameters used by Cloud VPN, see
Supported IKE ciphers .
Some third-party device configuration templates are available for download from
the Google Cloud console. For more information,
see Download a peer VPN configuration template .
IPv6 is supported only in HA VPN configurations.
IPv6 is not supported by Classic VPN.
For more information about Cloud VPN, see the
Cloud VPN overview .
For definitions of terms used on this page, see
Key terms .
Note: Guides on this page may refer to the Classic VPN configuration
instead of HA VPN.
Warning: Certain Classic VPN dynamic routing
functionality is deprecated. For more information, see
Classic VPN dynamic routing partial deprecation .
Interop guides by vendor
This section lists interoperability guides by vendor. Each
guide covers how to use that vendor's VPN gateway solution with
Cloud VPN.
For detailed notes covering the vendors listed in this section, see the
vendor-specific notes section .
A-L
Guide
Notes
Alibaba Cloud VPN Gateway without redundancy
Supports static routes only.
Alibaba Cloud VPN Gateway with redundancy
Supports static routes only.
Amazon Web Services with HA VPN
Supports dynamic routing with Cloud Router only.
Known issue : When setting up VPN tunnels to
AWS, using
IKEv2 and setting up fewer IKE transform sets on the AWS side is
required.
Amazon Web Services with Classic VPN
Supports static routes or dynamic routing with Cloud Router.
Cisco ASA 5506H with HA VPN
Supports dynamic routing with Cloud Router only.
Cisco ASA 5505 with Classic VPN
Supports static routes only.
Cisco ASR
Supports static routes or dynamic routing with Cloud Router.
Check Point security gateway
Supports static routes or dynamic routing with Cloud Router.
Fortinet FortiGate with HA VPN
Supports dynamic routing with Cloud Router only.
Fortinet FortiGate 300C with Classic VPN
Supports static routes or dynamic routing with Cloud Router.
Juniper SRX
Supports static routes or dynamic routing with Cloud Router.
M-Z
Guide
Notes
Microsoft Azure with HA VPN
Supports dynamic routing with Cloud Router only.
Palo Alto Networks PA-3020
Supports static routes or dynamic routing with Cloud Router.
strongSwan
Supports dynamic routing with Cloud Router and
BIRD .
Vendor-specific notes
The following vendor-specific guidelines help you configure your third-party VPN
devices to work with Cloud VPN.
Check Point
Check Point VPN implements IKEv2 by creating multiple Child Security Associations
(SAs) when you specify more than one CIDR per traffic selector. This
implementation is incompatible with Cloud VPN, which requires all
CIDRs for the local traffic selector and all CIDRs for the remote traffic selector
to be located in a single Child SA. For suggestions about how to create a
compatible configuration, see Traffic selector
strategies .
Cisco
If your VPN gateway runs Cisco IOS XE, make sure that you're running version
16.6.3 (Everest) or later. Earlier versions have known problems with Phase 2
rekey events, which result in tunnels going down for a few minutes every few
hours.
Cisco ASA supports route-based VPN with Virtual Tunnel Interface (VTI) in IOS
version 9.7(x) and later. For more information, see the following:
Release Notes for the Cisco ASA Series, 9.7(x)
Virtual Tunnel Interface sections in the Cisco ASA Series VPN CLI Configuration Guide, 9.7
Note: IOS version 9.7
is not supported with ASA hardware version 5505, which has reached
end-of-life status . For more information, see the
ASA compatibility matrix .
When using Cisco ASA devices with a Cloud VPN tunnel, you cannot
configure more than one IP address range (CIDR block) for each of the local and
remote traffic selectors. The reason is that Cisco ASA devices use a unique
SA for each IP address range in a traffic selector, while Cloud VPN
uses a single SA for all IP ranges in a traffic selector. For more information,
see Policy-based tunnels and traffic selectors .
What's next
To configure your third-party VPN for dual-stack (IPv4 and IPv6) or
IPv6-only traffic, see Set up third-party VPNs for IPv4 and IPv6 traffic .
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
