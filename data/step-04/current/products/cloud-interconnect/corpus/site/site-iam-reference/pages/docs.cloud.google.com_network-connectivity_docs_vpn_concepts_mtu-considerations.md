---
title: "MTU considerations \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/mtu-considerations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/mtu-considerations
  title: "MTU considerations \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

MTU considerations | Cloud VPN | Google Cloud Documentation
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
Cloud VPN
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud VPN
Network Connectivity home
Cloud VPN overview
Best practices
Key terms
Create HA VPNs
HA VPN topologies
HA VPN topologies to increase bandwidth
Terraform examples for HA VPN gateways
Create an HA VPN gateway to a peer VPN gateway
Create HA VPN gateways to connect VPC networks
Add an HA VPN gateway to HA VPN over Cloud Interconnect
Connect HA VPN to Compute Engine VM instances
Connect to AWS
Create HA VPN connections to AWS
Connect HA VPN to AWS peer gateways
Connect to Azure
Create HA VPN connections to Azure
Create Classic VPNs
Classic VPN topologies
Create a Classic VPN gateway using static routing
Create a Classic VPN connection to a remote site
Migrate
Move from Classic VPN to HA VPN
Migrate an HA VPN gateway to IPv6
Manage peer VPNs
Configure the peer VPN gateway
Use third-party VPNs
Download a peer VPN configuration template
Set up third-party VPNs for IPv4 and IPv6 traffic
Delete an external peer VPN gateway
Restrict IP addresses for peer VPN gateways
Administer
Generate a strong pre-shared key
Configure firewall rules
Add a VPN tunnel
Delete a VPN tunnel
Delete a VPN gateway
Manage VPN resources by using custom constraints
Use advanced configurations
Overview
Order of routes
Supported IKE ciphers
Networks and tunnel routing
MTU considerations
Manage
Create and manage tags
Monitor and troubleshoot
Check VPN status
View logs and metrics
Identify VPN maintenance events
Troubleshoot
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
Packet encapsulation and processing
Gateway MTU versus payload MTU
Cloud VPN payload MTU values Payload MTU for AEAD ciphers
Payload MTU for non-AEAD ciphers
What's next
Home
Documentation
Networking
Network Connectivity
Cloud VPN
Guides
Was this helpful?
Send feedback
MTU considerations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Packet encapsulation and processing
Gateway MTU versus payload MTU
Cloud VPN payload MTU values Payload MTU for AEAD ciphers
Payload MTU for non-AEAD ciphers
What's next
The
maximum transmission unit (MTU)
is the size, in bytes, of the largest packet supported by a network layer
protocol, including both headers and IP packet payload.
Network packets sent over a VPN tunnel are encrypted and then encapsulated in an
outer packet so that they can be routed. Cloud VPN tunnels use
IPsec and ESP
for encryption and encapsulation. Because the encapsulated inner packet must
itself fit within the MTU of the outer packet, its maximum IP packet payload
must be smaller.
HA VPN over Cloud Interconnect doesn't support jumbo frames for encrypted
VLAN attachments.
Packet encapsulation and processing
To successfully transmit packets using Cloud VPN tunnels, you must
enable prefragmentation on your
peer VPN gateway so that
packets that it sends are fragmented before they are encrypted and
encapsulated.
Important: Cloud VPN does not support fragmentation of packets
after encapsulation.
As a Cloud VPN tunnel processes packets bound for your peer network:
Cloud VPN uses MSS clamping to ensure that TCP packets fit within the
payload MTU before IPsec encapsulation.
For other protocols, Cloud VPN processes packets before IPsec
encapsulation as follows:
If the packet's DF bit is set, and the Cloud VPN gateway
determines that fragmentation is necessary, the Cloud VPN gateway
sends an ICMP Fragmentation Needed (IPv4) or ICMPv6 Packet Too Big message
to the sender. Delivery of ICMP or ICMPv6 messages requires that you
configure ingress allow firewall rules applicable to the
Compute Engine VM sender – one rule to allow ICMP ingress, and, for
dual-stack VMs, another rule to allow ICMPv6 ingress.
If the packet's DF bit is not set, and the Cloud VPN gateway
and the packet exceeds the payload MTU, the Cloud VPN gateway
attempts to deliver the packet. The packet might be dropped by a
subsequent hop after the Cloud VPN tunnel if the packet is too
large for the next hop.
For general information about how protocols handle mismatched MTUs, see
Mismatched MTUs, MSS clamping, path MTU
discovery in the VPC
MTU documentation.
Gateway MTU versus payload MTU
Cloud VPN differentiates between the Cloud VPN gateway
MTU and the
Cloud VPN payload
MTU . The
Cloud VPN gateway MTU is:
1460 bytes, for Cloud VPN—both Classic VPN and
HA VPN
1440 bytes, for HA VPN over Cloud Interconnect
Configure your peer VPN gateway to use an MTU that matches the corresponding
Cloud VPN gateway MTU.
The payload MTU for a Cloud VPN tunnel depends on both of the
following factors:
The cipher that the tunnel uses
The IP stack of the tunnel's gateway interface: IPv4 or IPv6
For a given gateway MTU and cipher, the payload MTU of a tunnel on an IPv6
gateway interface is 20 bytes smaller than the payload MTU of a tunnel on an
IPv4 gateway interface. For more information, see Cloud VPN payload
MTU values .
Cloud VPN payload MTU values
The Cloud VPN payload MTU depends on the ciphers chosen in your
Cloud VPN connection.
Payload MTU for AEAD ciphers
The following table shows phase 1 and phase 2 cipher combinations for AEAD
ciphers that use one of the following Cloud VPN payload MTUs:
1406 bytes: for Cloud VPN tunnels on IPv4 gateway interfaces
1386 bytes: for Cloud VPN tunnels on IPv6 gateway interfaces
1386 bytes: for HA VPN over Cloud Interconnect tunnels on IPv4 gateway
interfaces
1366 bytes: for HA VPN over Cloud Interconnect tunnels on IPv6 gateway
interfaces
Phase 1
Phase 2
AES-GCM-16-128
AES-GCM-16-128
AES-GCM-16-192
AES-GCM-16-192
AES-GCM-16-256
AES-GCM-16-256
AES-GCM-16-128
AES-GCM-16-192
AES-GCM-16-192
AES-GCM-16-128
AES-GCM-16-256
AES-GCM-16-192
AES-GCM-16-128
AES-GCM-16-256
AES-GCM-16-192
AES-GCM-16-256
AES-GCM-16-256
AES-GCM-16-128
Payload MTU for non-AEAD ciphers
The following table shows phase 1 and phase 2 cipher combinations for non-AEAD
ciphers that use one of the following Cloud VPN payload MTUs:
1374 bytes: for Cloud VPN tunnels on IPv4 gateway interfaces
1354 bytes: for Cloud VPN tunnels on IPv6 gateway interfaces
1354 bytes: for HA VPN over Cloud Interconnect tunnels on IPv4 gateway
interfaces
1334 bytes: for HA VPN over Cloud Interconnect tunnels on IPv6 gateway
interfaces
Phase 1 - Encryption
Phase 1 - Integrity
Phase 2 - Encryption
Phase 2 - Integrity
AES-CBC-128
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-128
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-192
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-512-256
AES-CBC-256
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-512-256
3DES-CBC
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-512-256
The following table shows phase 1 and phase 2 cipher combinations for non-AEAD
ciphers that use one of the following Cloud VPN payload MTUs:
1390 bytes: for Cloud VPN tunnels on IPv4 gateway interfaces
1370 bytes: for Cloud VPN tunnels on IPv6 gateway interfaces
1370 bytes: for HA VPN over Cloud Interconnect tunnels on IPv4 gateway
interfaces
1350 bytes: for HA VPN over Cloud Interconnect tunnels on IPv6 gateway
interfaces
Phase 1 - Encryption
Phase 1 - Integrity
Phase 2 - Encryption
Phase 2 - Integrity
AES-CBC-128
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
AES-XCBC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
AES-XCBC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
AES-XCBC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
AES-CMAC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
AES-CMAC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
AES-CMAC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
HMAC-MD5-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
HMAC-MD5-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
HMAC-MD5-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-128
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
AES-XCBC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
AES-XCBC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
AES-XCBC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
AES-CMAC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
AES-CMAC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
AES-CMAC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
HMAC-MD5-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
HMAC-MD5-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
HMAC-MD5-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-192
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
AES-XCBC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
AES-XCBC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
AES-XCBC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
AES-CMAC-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
AES-CMAC-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
AES-CMAC-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
HMAC-MD5-96
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
HMAC-MD5-96
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
HMAC-MD5-96
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-256-128
AES-CBC-256
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
AES-XCBC-96
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
AES-XCBC-96
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
AES-XCBC-96
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
AES-XCBC-96
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
AES-XCBC-96
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
AES-XCBC-96
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
AES-CMAC-96
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
AES-CMAC-96
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
AES-CMAC-96
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
AES-CMAC-96
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
AES-CMAC-96
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
AES-CMAC-96
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA1-96
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA1-96
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA1-96
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
HMAC-MD5-96
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
HMAC-MD5-96
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
HMAC-MD5-96
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
HMAC-MD5-96
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
HMAC-MD5-96
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
HMAC-MD5-96
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA256-128
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA256-128
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA256-128
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA384-192
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA384-192
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA384-192
AES-CBC-256
HMAC-SHA1-96
3DES-CBC
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA512-256
AES-CBC-128
HMAC-SHA1-96
3DES-CBC
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA512-256
AES-CBC-192
HMAC-SHA1-96
3DES-CBC
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA2-256-128
3DES-CBC
HMAC-SHA512-256
AES-CBC-256
HMAC-SHA1-96
What's next
To learn about the basic concepts of Cloud VPN, see the
Cloud VPN overview .
To help you solve common issues that you might encounter when using
Cloud VPN, see Troubleshooting .
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
