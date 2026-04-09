---
title: "Configure on-premises routers \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/configuring-onprem-routers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/configuring-onprem-routers
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
Establish 99. 99% availability
Establish 99. 9% availability
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
Establish 99. 99% availability
Establish 99. 9% availability
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
When to configure your on-premises router
Topology for Layer 2 connections Physical topology
Logical topology
Configure your on-premises router On-premises router settings
Configuration guidelines
Best practices Configuring devices for active/active forwarding
Configuring devices for active/passive forwarding
Verifying BGP sessions
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
When to configure your on-premises router
Topology for Layer 2 connections Physical topology
Logical topology
Configure your on-premises router On-premises router settings
Configuration guidelines
Best practices Configuring devices for active/active forwarding
Configuring devices for active/passive forwarding
Verifying BGP sessions
This document describes how to configure on-premises routers for
Partner Interconnect. If you are creating a
Dedicated Interconnect connection, see
Configure on-premises routers for Dedicated Interconnect .
For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Partner Interconnect, see
Troubleshooting .
When to configure your on-premises router
An on-premises router in this context means a
device that you configure to enable Partner Interconnect .
For Layer 2 connections, configure your on-premises router after
your service provider has configured your VLAN attachments.
For Layer 3 connections, configuring BGP on your local
router is not required because the service provider configures BGP on their
on-premises routers.
This document provides a sample topology and configuration for Layer 2
connections that you can use as a guide when configuring your on-premises router.
Topology for Layer 2 connections
In this topology, the Partner Interconnect connection or
connections terminate on an on-premises router, which performs BGP peering with
Cloud Router.
This sample topology uses the following Google Cloud resources:
The project Sample Interconnect Project
The network my-network
The region us-east1
There are two VLAN attachments, my-attachment1 and my-attachment2 , which
are already active and have BGP configured.
Physical topology
The following diagram shows the physical topology for Layer 2 connections.
Google and your service provider set up and manage the physical connections
between Google Cloud and your service provider's network.
Sample physical topology for Layer 2 connections (click to enlarge)
Logical topology
The following diagram shows the logical topology for Layer 2 connections.
Sample logical topology for Layer 2 connections (click to enlarge)
Configure your on-premises router
This section describes how to configure Layer 2 topologies for production use.
The sample configuration describes all device settings.
On-premises router settings
Based on the configuration in the sample Google Cloud project, the following
table summarizes the on-premises router settings to use for the example
topology.
For the sample project name, Virtual Private Cloud (VPC) network, and region used
on the Google Cloud side, see the topology reference .
The hold timer and keepalive timer values allow Google to quickly transfer traffic
to redundant connections in the event of an issue. Set their values as shown in
the table.
Graceful restart prevents BGP sessions from packet drops and route withdrawal
during Cloud Router maintenance. If your on-premises device supports
BGP graceful restart, enable it and set the graceful restart and stalepath
timers as shown in the table.
For more information about BGP timer settings, see the
recommended values for BGP timers
in the Cloud Router documentation.
Settings
my-attachment1
my-attachment2
VLAN number
1010
1020
VLAN interface IP address
169.254.10.2/29
169.254.20.2/29
On-premises ASN
64500
64500
Cloud Router ASN
16550
16550
Cloud Router BGP IP address
For cr1-us-east1: 169.254.10.1
For cr2-us-east1: 169.254.20.1
BGP timers
Keepalive: 20 sec
Keepalive: 20 sec
Hold timer: 60 sec
Hold timer: 60 sec
Graceful restart: Set the graceful restart timer to a value that is appropriate for your needs. For more information, see BGP timer settings .
Graceful restart: Set the graceful restart timer to a value that is appropriate for your needs.
Stalepath timer: 300 sec
Stalepath timer: 300 sec
On-premises LAN subnet range
192.168.12.0/24
192.168.12.0/24
Configuration guidelines
Use the following information on your on-premises switch or router to establish
a BGP session with your Cloud Router:
The interface IP address and peering IP address provided by your
activated VLAN attachment .
The VLAN ID provided by your service provider.
A maximum transmission unit (MTU) of 1440, 1460, 1500, or 8896 bytes,
depending on the MTU of your attachment and the VPC network.
You can optionally configure your BGP sessions to use MD5 authentication .
If you added MD5 authentication to the BGP session on Cloud Router, you
must use the same authentication key when you configure BGP
on your on-premises router.
For EBGP multi-hop configuration, check the Dataplane version of
your VLAN attachment by using the
gcloud compute interconnects attachments describe command.
The command returns a dataplaneVersion field if the Dataplane
version is 2 or higher. If the command output does not contain a dataplaneVersion
field, the Dataplane version is 1 .
Note: The dataplaneVersion field appears only in the output for
VLAN attachment types of PARTNER and DEDICATED . The field is not present
for PARTNER_PROVIDER .
If your VLAN attachment uses Dataplane version 1, you must configure
multi-hop for the EBGP neighbor. The recommended value for this setting is 4 .
If your VLAN attachment uses Dataplane version 2 or higher, you are not
required to configure multi-hop for the EBGP neighbor.
Do not configure EBGP multi-hop if you plan to use
Bidirectional Forwarding Detection (BFD) in the BGP sessions of your VLAN
attachment, and if BFD multi-hop is inherited from your BGP multi-hop
configuration. Google Cloud supports only BFD single-hop mode.
See Configuring BFD .
Note: When using Partner Interconnect, your on-premises device
physically connects with service provider devices rather than with a Google
Edge device. For this reason, the Partner Interconnect Layer 2
configuration can be exactly the same as the example configuration or different
from it. To configure your service provider-facing ports, follow the guidance
that you received from your service provider.
Device configuration
VLAN 1010 (Cisco) router VLAN 1020 (Juniper) router
More
The following listing shows a Layer 2 sample configuration for on-premises
Router1 (Cisco) on VLAN 1010:
interface E0/0
description connected_to_service_provider_device
no shut
interface E0/0.1010
description attachment_vlan1010
encapsulation dot1Q 1010
ip address 169.254.10.2 255.255.255.248
ip mtu 1460
ip prefix-list TO_GCP seq 5 permit 192.168.12.0/24
route-map TO_GCP_OUTBOUND permit 10
match ip address prefix-list TO_GCP
router bgp 64500
bgp graceful-restart restart-time 1
neighbor 169.254.10.1 description peering_to_cloud_router
neighbor 169.254.10.1 remote-as 16550
neighbor 169.254.10.1 ebgp-multihop 4
neighbor 169.254.10.1 timers 20 60
neighbor 169.254.10.1 update-source E0/0.1010
neighbor 169.254.10.1 route-map TO_GCP_OUTBOUND out
The following listing shows a Layer 2 sample configuration for on-premises
Router2 (Juniper) on VLAN 1020:
set interfaces xe-0/0/0 description "connected_to_service_provider_device"
set interfaces xe-0/0/0 flexible-vlan-tagging
set interfaces xe-0/0/0 unit 1020 family inet mtu 1460
set interfaces xe-0/0/0 unit 1020 vlan-id 1020
set interfaces xe-0/0/0 unit 1020 family inet address 169.254.20.2/29
set routing-options autonomous-system 64500
set policy-options prefix-list TO_GCP 192.168.12.0/24
set policy-options policy-statement TO_GCP_OUTBOUND term 1 from protocol direct
set policy-options policy-statement TO_GCP_OUTBOUND term 1 from prefix-list TO_GCP
set policy-options policy-statement TO_GCP_OUTBOUND term 1 then accept
set policy-options policy-statement TO_GCP_OUTBOUND term 2 then reject
set protocols bgp group config_vlan_1020 type external
set protocols bgp group config_vlan_1020 multihop ttl 4
set protocols bgp group config_vlan_1020 local-address 169.254.20.2
set protocols bgp group config_vlan_1020 peer-as 16550
set protocols bgp group config_vlan_1020 neighbor 169.254.20.1 export TO_GCP_OUTBOUND
set protocols bgp group config_vlan_1020 neighbor 169.254.20.1 graceful-restart restart-time 1
Best practices
Follow these best practices to ensure effective connectivity to Google Cloud
from your on-premises devices when using Cloud Interconnect 99.9% and
99.99% topologies.
Configuring devices for active/active forwarding
Ensure that the same MED values are exchanged across all BGP sessions.
Enable
equal-cost multipath (ECMP) routing
in your BGP configuration.
Enable graceful restart on your BGP sessions to minimize the impact of Cloud Router task
restarts. When you connect two attachments through different edge availability domains, as
described in the recommended topologies, the Cloud Router uses one task per edge availability
domain. To avoid downtime,
software tasks are
scheduled independently.
If you are configuring two on-premises devices, use any routing protocol to connect both
devices to each other. If you are configuring your device to use redistribution, use either
IBGP or IGP.
Configuring devices for active/passive forwarding
To avoid asymmetric routing, make sure that higher MED values are applied on the
Cloud Router side and on the on-premises device side.
Enable graceful restart on your BGP sessions to minimize the impact of Cloud Router task
restarts. When you connect two attachments through different edge availability domains, as
described in the recommended topologies, the Cloud Router uses one task per edge availability
domain. To avoid downtime,
software tasks are
scheduled independently.
If you are configuring two on-premises devices, make sure that both devices
have Layer 3 connectivity to each other. If you are configuring your device
to use redistribution, use either IBGP or IGP.
Verifying BGP sessions
Check that your BGP sessions are working between your on-premises network and
your Google Virtual Private Cloud (VPC) network. For more information, see
Viewing Cloud Router status and routes
in the Cloud Router documentation.
Previous
arrow_back
Activate connections
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
