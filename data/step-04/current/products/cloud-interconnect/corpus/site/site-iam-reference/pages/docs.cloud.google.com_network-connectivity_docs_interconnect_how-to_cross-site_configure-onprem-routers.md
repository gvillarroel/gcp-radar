---
title: "Configure on-premises routers \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/configure-onprem-routers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/configure-onprem-routers
  title: "Configure on-premises routers \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure on-premises routers | Cloud Interconnect | Google Cloud Documentation
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
Sample topology
Configure on-premises routers Configure the interface
Configure traffic shaper
Enable IGP and BFD
Enable LLDP
Enable MACsec
Enable QinQ
Configure MPLS RSVP
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure on-premises routers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Sample topology
Configure on-premises routers Configure the interface
Configure traffic shaper
Enable IGP and BFD
Enable LLDP
Enable MACsec
Enable QinQ
Configure MPLS RSVP
This page describes how to configure on-premises routers for
Cross-Site Interconnect.
After you create a cross-site network with one or more wire groups, you need to
configure your on-premises routers at sites A and B to establish connectivity
with each other.
This page provides a sample topology and configuration that you can use as a
guide when configuring your on-premises routers.
For definitions of terms used on this page, see
Cloud Interconnect key terms and the
Cross-Site Interconnect overview .
Sample topology
This page provides sample configurations for a topology in which:
Each Cross-Site Interconnect connection terminates on an
on-premises router.
A cross-site network with a redundant wire group has been created over
the connections.
Each on-premises router establishes connectivity with the corresponding
router at the opposite site over the wire between the connections. The routers
exchange routes using IGP.
The following diagrams show both the physical and logical topology.
Sample physical topology (click to enlarge).
Sample logical topology (click to enlarge).
Configure on-premises routers
This section provides sample on-premises router configurations. Consider the
following when using the samples on this page:
The samples assume 10 Gbps Cross-Site Interconnect
connections.
Some configurations are marked as optional. Use the corresponding samples as
needed depending on your use case.
The samples apply to router A1 from the sample topology.
You must also configure routers A2, B1, and B2.
For additional information about configuration settings and values, see the
documentation for your device.
Configure the interface
This sample configures the interface of the on-premises router as follows:
Sets the description to the name and interface of the neighbor router with which you
are establishing connectivity, in the format ROUTER_NAME : INTERFACE_NAME .
For router A1, the neighbor router is router B1.
Sets the IP addresses of the interface for router A1 using the values from
the sample topology.
Sets MTU to the recommended value of 9000 .
Sets MTU values for MPLS in both samples, and enables MPLS in the Cisco sample.
These settings are optional as indicated by the brackets ( [] ).
You can omit these settings if you don't plan to configure MPLS RSVP.
Router A1 (Juniper) Router A1 (Cisco)
More
See the following sample configuration:
set interfaces xe-1/1/0 unit 0 description routerB1:xe-1/1/0
set interfaces xe-1/1/0 unit 0 family inet mtu 9000
set interfaces xe-1/1/0 unit 0 family inet address 10.0.0.0
set interfaces xe-1/1/0 unit 0 family iso mtu 9000
set interfaces xe-1/1/0 unit 0 family inet6 mtu 9000
set interfaces xe-1/1/0 unit 0 family inet6 address 2001::
[set interfaces xe-1/1/0 unit 0 family mpls mtu 9000]
See the following sample configuration:
interface TenGigE/1/0
description routerB1:xe-1/1/0:TenGigE/1/0
mtu 9000
ip address 10.0.0.0
ipv6 mtu 9000
ipv6 address 2001::
[mpls mtu 9000]
[mpls ip]
Configure traffic shaper
To help avoid packet loss, shape traffic below the Cross-Site Interconnect
connection capacity to account for additional encapsulation overhead. If you
don't configure traffic shaper, you might experience packet loss when traffic is
at or near the full capacity of the connection, depending on the frame size.
This sample configures traffic shaper with a value of 9500000000 bits per second
(bps) for a 10 Gbps Cross-Site Interconnect connection. If you have a
100 Gbps connection, the recommended value is 96000000000 .
This sample also sets the description to the name of the neighbor router.
For router A1, the neighbor is router B1.
Router A1 (Juniper) Router A1 (Cisco)
More
See the following sample configuration:
set interfaces xe-1/1/0 unit 0 description routerB1:xe-1/1/0
set class-of-service interfaces xe-1/1/0 scheduler-map qos-scheduler
set class-of-service interfaces xe-1/1/0 shaping-rate 9500000000
See the following sample configuration:
interface TenGigE/1/0
description routerB1
service-policy output qos-scheduler
shape average 9500000000
!
Enable IGP and BFD
Enable IGP and BFD to exchange routes and detect failures so that you can
implement failover.
To save bandwidth, the following sample disables CSNP by setting
csnp-interval to the maximum value. This setting is optional as indicated by
the brackets ( [] ). You can remove or adjust this setting if your
network requires CSNP.
Note: We recommend that you configure BFD with the following timers and
associate it with an IGP as follows. You can alternatively use another method,
such as configuring BFD on the interfaces or with static routes.
Router A1 (Juniper)
More
See the following sample configuration:
set protocols isis interface xe-1/1/0.0 level 2 metric 3000
set protocols isis interface xe-1/1/0.0 level 2 hello-interval 1
set protocols isis interface xe-1/1/0.0 level 2 hold-time 5
set protocols isis interface xe-1/1/0.0 level 1 disable
set protocols isis interface xe-1/1/0.0 hello-padding adaptive
[set protocols isis interface xe-1/1/0.0 csnp-interval 65535]
set protocols isis interface xe-1/1/0.0 point-to-point
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection version 1
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection minimum-interval 250
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection multiplier 3
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection detection-time threshold 900
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection authentication key-chain IS-IS-BFD-KEY
set protocols isis interface xe-1/1/0.0 family inet bfd-liveness-detection authentication algorithm keyed-sha-1
Replace IS-IS-BFD-KEY with the name of your IS-IS BFD
keychain.
Enable LLDP
If you have port mode wire groups, enable LLDP to help verify connectivity
between your routers. LLDP protocol data units (PDUs) are automatically
forwarded across the port mode wire between your routers. When your routers
successfully exchange LLDP information, it confirms that the wire is
functioning correctly.
You can also enable LLDP before completing the interface configuration to help
verify newly provisioned Cross-Site Interconnect connections.
Router A1 (Juniper) Router A1 (Cisco)
More
See the following sample configuration:
set protocols lldp interface xe-1/1/0.0
See the following sample configuration:
interface TenGigE/1/0
lldp
receive disable
transmit disable
!
Enable MACsec
Enable MACsec (port mode, optional) if you have port mode wire groups and want
to use MACsec.
This sample configuration does the following:
Enables a must-secure policy
Configures a replay window with the maximum value to prevent replay
protection from generating false positives when MACsec attempts to
order packets
Sets the eapol destination MAC address to broadcast-address
Router A1 (Cisco)
More
interface TenGigE/1/0
Description facing google PF
macsec replay-protection window-size 4294967295
macsec network-link
no cdp enable
eapol destination-address broadcast-address
mka policy MKA_POLICY_NAME
mka pre-shared-key key-chain MKA_KEY_CHAIN
service-policy output egress-scheduler
End
Replace the following:
MKA_POLICY_NAME : the name of your MKA policy
MKA_KEY_CHAIN : the name of your MKA keychain
Enable QinQ
QinQ is optional and is used to transport VLANs across a service provider
network.
Adjust the sample as needed depending on whether you are using STP, LACP, or
both protocols between your endpoints.
Router A1 (Cisco)
More
See the following sample configuration:
interface TenGigE/1/0
switchport access vlan VLAN_ID
switchport mode dot1q-tunnel
l2protocol-tunnel stp
l2protocol-tunnel point-to-point lacp
Replace VLAN_ID with your VLAN ID.
Configure MPLS RSVP
MPLS RSVP is optional and is used to handle failover.
Router A1 (Juniper)
More
See the following sample configuration:
set protocols mpls interface xe-1/1/0.0 admin-group encrypted
set protocols mpls interface xe-1/1/0.0 admin-group unencrypted
set protocols rsvp interface xe-1/1/0.0 subscription 80
set protocols rsvp interface xe-1/1/0.0 update-threshold 5
set protocols rsvp interface xe-1/1/0.0 link-protection optimize-timer 3000
set protocols rsvp interface xe-1/1/0.0 link-protection exclude-srlg
set protocols rsvp interface xe-1/1/0.0 link-protection admin-group include-all encrypted
set protocols rsvp interface xe-1/1/0.0 link-protection admin-group include-all unencrypted
set protocols rsvp interface xe-1/1/0.0 link-protection admin-group exclude red
Previous
arrow_back
Create a cross-site network
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
