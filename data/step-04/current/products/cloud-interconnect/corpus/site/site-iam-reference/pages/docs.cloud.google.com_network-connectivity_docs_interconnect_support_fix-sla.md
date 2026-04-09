---
title: "Fix SLA eligibility problems \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/fix-sla
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/fix-sla
  title: "Fix SLA eligibility problems \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Fix SLA eligibility problems | Cloud Interconnect | Google Cloud Documentation
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
Topology capability blockers No interconnects
No attachments
Incompatible metros
Incompatible regions
No interconnects in metro and zone
No attachments in metro and zone
Missing global routing
Not available
Other
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Fix SLA eligibility problems
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Topology capability blockers No interconnects
No attachments
Incompatible metros
Incompatible regions
No interconnects in metro and zone
No attachments in metro and zone
Missing global routing
Not available
Other
This document describes common problems that you might encounter with the SLA
eligibility of your Cloud Interconnect connection groups or VLAN
attachment groups, and provides troubleshooting steps to help you resolve those
problems.
Topology capability blockers
The following sections describe problems with the topology of your interconnect
groups or VLAN attachment groups. For Cloud Interconnect connection groups, the
configured.topologyCapability.intendedCapabilityBlockers field returns
blockers that map to each of these sections. For VLAN Attachment groups, the same
information is returned by the configured.availabilitySla.intendedSlaBlockers field.
The solutions generally involve modifying your interconnect connection group resource.
No interconnects
If you receive this blocker, then your connection group doesn't contain any
interconnect connections. To resolve this blocker, see
Create Cloud Interconnect connections within a connection group
or
Add existing Cloud Interconnect connections to a group .
No attachments
If you receive this blocker, then your VLAN attachment group doesn't contain any
VLAN attachments. To resolve this blocker, see
Add VLAN attachments to a VLAN attachment group .
Incompatible metros
If you receive this blocker, then your connections or VLAN attachments need to
be configured in additional metropolitan areas (metros). Check the
configured.topologyCapability.intendedCapabilityBlockers.metros field (for connection groups)
or configured.availabilitySla.intendedSlaBlockers field (for VLAN attachment groups) to
identify the metro or metros in which you have already deployed resources,
then create or add a connection or VLAN attachment to the group within a new
metro. To resolve this blocker, see the following pages:
Connection groups:
Create Cloud Interconnect connections within a connection group
Add existing Cloud Interconnect connections to a group .
VLAN attachment groups:
Add VLAN attachments to a VLAN attachment group .
Incompatible regions
If you receive this blocker, then your VLAN attachments need to be configured in
additional regions. Check the
configured.availabilitySla.intendedSlaBlockers.regions field to
identify the region or regions in which you have already deployed resources,
then create or add a VLAN attachment to the group within a new region. To
resolve this blocker, see
Add VLAN attachments to a VLAN attachment group .
No interconnects in metro and zone
If you receive this blocker, then your connections within the same metro need to
be configured in different edge availability domains. Check the
configured.topologyCapability.intendedCapabilityBlockers.zones
field to identify the zone in which you are missing an interconnect connection,
then see
Create Cloud Interconnect connections within a connection group
or
Add existing Cloud Interconnect connections to a group
to resolve this blocker.
No attachments in metro and zone
If you receive this blocker, then your VLAN attachments within the same metro
need to be configured in different edge availability domains. Check the
configured.availabilitySla.intendedSlaBlockers.zones
field to identify the zone in which you are missing a VLAN attachment,
then see
Add VLAN attachments to a VLAN attachment group
to resolve this blocker.
Missing global routing
If you receive this blocker, then your VPC network's dynamic routing mode isn't
set to Global . To resolve this blocker,
change your VPC network's dynamic routing mode
to Global .
Not available
If you receive this blocker, then you have chosen a level of reliability that
isn't generally available with your configured connection group or VLAN
attachment group. To resolve this blocker,
contact support .
Other
If you receive this blocker, then there is an issue with your deployment that
doesn't fall under the other categories. To resolve this blocker,
contact support .
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
