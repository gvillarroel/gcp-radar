---
title: "Modify VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-vlan-attachments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-vlan-attachments
  title: "Modify VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Modify VLAN attachments | Cloud Interconnect | Google Cloud Documentation
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
Modify description, capacity, and MTU
Modify stack type Modification impact on IPv4 and IPv6 traffic
Disable IPv6 traffic
Change VLAN attachment stack type
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Modify VLAN attachments
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Modify description, capacity, and MTU
Modify stack type Modification impact on IPv4 and IPv6 traffic
Disable IPv6 traffic
Change VLAN attachment stack type
What's next
This document describes how to modify Dedicated Interconnect VLAN
attachments and their Border Gateway Protocol (BGP) sessions.
For more information about the terms used on this page and their definitions,
see Cloud Interconnect key terms .
The following table lists VLAN attachment and BGP session properties. It
also provides information about how to modify them.
Property
How to modify
Description
Capacity
MTU
For details, see the next section
Modify description,
capacity, and MTU .
Modifications are immediate and in rare cases, can cause traffic
disruption. If traffic is disrupted, the disruption lasts less than
a minute.
Stack type
You can change the stack type of an existing VLAN attachment to
IPv4 only (single stack) or IPv4 and IPv6 (dual stack).
If you change the stack type of your VLAN attachment, your existing
traffic might be rerouted or dropped. For more details, see Modify stack type .
Whether a VLAN attachment is enabled or disabled
To disable or re-enable a VLAN attachment, see
Disable VLAN attachments .
VLAN ID
BGP IP addresses (Cloud Router IP address, on-premises
router IP address)
You can't modify these properties for existing attachments. Instead,
you must recreate the VLAN attachment.
To create VLAN attachments for Dedicated Interconnect,
see Create VLAN attachments .
Custom learned routes
Follow the steps in
Update an existing session to use custom learned routes .
MD5 authentication
Follow the steps in
Add authentication to an existing session .
The peer ASN is not a property of the VLAN attachment—it is part of the
BGP configuration of the Cloud Router. To modify
the peer ASN, update the Cloud Router's BGP session for the VLAN
attachment.
For more information, see the following resources:
Viewing BGP session configuration
gcloud compute routers update-bgp-peer command reference
routers.update API method reference
Modify description, capacity, and MTU
The section provides instructions for updating the description, capacity,
and maximum transmission unit (MTU) of a VLAN attachment. Changing the attributes
of a VLAN attachment, in rare cases, can cause traffic disruption. If traffic is
disrupted, the disruption lasts less than a minute.
To make use of a 1460-, 1500-, or 8896-byte MTU, the VPC network
that uses the attachment must have the same MTU value . In
addition, the on-premises virtual machine (VM) instances and routers must also
have the same MTU value. If your network has the default MTU of 1460 , then
select an MTU of 1460 for your VLAN attachment.
You cannot modify the MTU ( 1440 ) of an encrypted VLAN attachment that
is used in an HA VPN over Cloud Interconnect deployment.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment to modify.
On the attachment's detail page, click Edit .
Modify your VLAN attachment:
Description : Information about the VLAN attachment.
Capacity : The maximum bandwidth of the attachment. If you modify the
capacity of an encrypted VLAN attachment, you might need to add
HA VPN tunnels to accommodate increased traffic.
For more information, see
Configure HA VPN over Cloud Interconnect .
Maximum transmission unit (MTU) : The MTU of the attachment.
Click Save .
Modify an interconnectAttachment by specifying the name of the existing
VLAN attachment and the attributes to modify:
gcloud compute interconnects attachments dedicated update NAME \
--region= REGION \
--description= DESCRIPTION \
--bandwidth= BANDWIDTH \
--mtu= MTU
Replace the following:
NAME : the name of the existing VLAN attachment
REGION : the region of the attachment
DESCRIPTION : a description of the attachment
BANDWIDTH : the provisioned capacity of the attachment.
If you modify the capacity of an encrypted VLAN attachment,
you might need to add HA VPN tunnels to accommodate the
increased traffic. For more information, see
Configure HA VPN over Cloud Interconnect .
MTU : the MTU of the attachment
For more information, see the
gcloud compute interconnects attachments dedicated update reference .
Modify stack type
You can change the stack type of an existing VLAN attachment to IPv4 only
(single stack) or IPv4 and IPv6 (dual stack). However, a VLAN attachment with
both an IPv4 and an IPv6 BGP session can't be converted to the IPv4-only stack
type without deleting its IPv6 BGP session.
To support IPv6 traffic over a Dedicated Interconnect connection,
you must use a dual-stack VLAN attachment. With a dual-stack VLAN attachment,
you can configure an IPv6 BGP session, or you can enable IPv6 route exchange in
an IPv4 BGP session.
You can't modify the stack type of VLAN attachments that
you create for HA VPN over Cloud Interconnect. Encrypted VLAN attachments
only support the IPv4 only (single stack) stack type.
With a dual-stack VLAN attachment, you can also configure an IPv4 BGP session
and an IPv6 BGP session that run in parallel. For more information, see
Parallel IPv4 and IPv6 BGP sessions .
Modification impact on IPv4 and IPv6 traffic
The following table describes how the stack type configuration
of the VLAN attachment combined with the BGP session configuration
affects IPv4 and IPv6 traffic.
Original stack type of VLAN attachment
Modified stack type of VLAN attachment
BGP session
MP-BGP configuration
Impact on traffic
IPv4 and IPv6 (dual stack)
IPv4 only
IPv4 BGP
IPv6 disabled
No IPv6 traffic supported; only IPv4 traffic.
This is the default
state for Dedicated Interconnect
and Cloud Router.
IPv4 and IPv6 (dual stack)
IPv4 only
IPv4 BGP
IPv6 enabled
No IPv6 traffic supported. Because
the VLAN attachment is configured as IPv4 only,
Cloud Router automatically disables IPv6 route exchange for
the BGP session.
However, if the VLAN attachment
previously had IPv6 route exchange enabled for the IPv4 BGP session,
then Google Cloud
might retain
IPv6 BGP addresses for the VLAN attachment.
Google Cloud can reuse these addresses
if IPv6 route exchange is later re-enabled for the VLAN attachment.
IPv4 only
IPv4 and IPv6 (dual stack)
IPv4 BGP
IPv6 enabled
Both IPv4 and IPv6 traffic are supported.
This is the supported configuration for an IPv4 BGP session that
uses MP-BGP and exchanges IPv6 routes in
Dedicated Interconnect.
IPv4 and IPv6 (dual stack)
IPv4 only
IPv6 BGP
IPv4 enabled or disabled
Dual-stack VLAN attachments with an IPv6 BGP session can't be changed
to an IPv4 only stack type. To change the stack type to IPv4
only, first delete the IPv6 BGP session.
Note: Changing the stack type to IPv4 only in the
Google Cloud console automatically deletes the IPv6 BGP session in
addition to changing the stack type.
IPv4 and IPv6 (dual stack)
IPv4 only
Both IPv4 BGP and IPv6 BGP
Not applicable
Dual-stack VLAN attachments with an IPv6 BGP session can't be changed
to an IPv4 only stack type. To change the stack type to IPv4
only, first delete the IPv6 BGP session.
Note: Changing the stack type to IPv4 only in the
Google Cloud console automatically deletes the IPv6 BGP session in
addition to changing the stack type.
Disable IPv6 traffic
You can temporarily disable IPv6 traffic in your
Dedicated Interconnect VLAN attachment for troubleshooting.
Disabling your IPv6 BGP session or disabling IPv6 route exchange in the IPv4 BGP
session is less disruptive to your Cloud Interconnect configuration
than changing the stack type of your VLAN attachment.
If you are using an IPv6 BGP session, you can disable your entire BGP session
instead of switching the stack type of the VLAN attachment. For information
about how to disable a BGP session, see Disable or remove BGP
sessions .
To disable IPv6 traffic temporarily in an IPv4 BGP session, you can disable IPv6
route exchange in the IPv4 BGP session. For information about how to disable
IPv6 route exchange in an IPv4 BGP session, see Configure multiprotocol BGP for
IPv4 or IPv6 BGP
sessions .
Change VLAN attachment stack type
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment to modify.
On the attachment's detail page, click Edit .
Modify the stack type of the VLAN attachment by selecting
IPv4 (single stack) or IPv4 and IPv6 (dual stack) .
If you are modifying an IPv4-only VLAN attachment to use IPv4 and IPv6
(dual stack), you can complete the configuration by choosing one of the
following configurations:
Enable IPv6 route exchange in your IPv4 BGP session. For more
information, see Configure multiprotocol BGP for IPv4 or IPv6 BGP
sessions .
Configure an IPv6 BGP session. See the instructions in Create a VLAN
attachment .
(Optional): You can specify custom IP address ranges when you change your
attachment's stack type.
For more information about prerequisites, limitations and
why you might use custom IP address ranges, see
Custom IP address ranges .
In the Allocate BGP IPv6 addresses section, enter the following
information:
In the Cloud Router IPv6 field, enter the IPv6 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 2001:db8::1/125 .
In the Peer IP field, enter the IPv6 CIDR address that you
want to assign to the customer router end of your VLAN attachment.
Important: A VLAN attachment with both an IPv4 and an IPv6 BGP session
can't be converted to the IPv4-only stack type without deleting its IPv6
BGP session.
Click Save and continue .
Change VLAN attachment stack type from IPv4 (single stack) to IPv4 and
IPv6 (dual stack)
Modify a VLAN attachment by specifying the name of the existing
attachment and the attributes to modify:
gcloud compute interconnects attachments dedicated update ATTACHMENT_NAME \
--stack-type=IPV4_IPV6
Replace ATTACHMENT_NAME with the name of your VLAN
attachment.
Complete the configuration by choosing one of the following
configurations:
Enable IPv6 route exchange in your IPv4 BGP session. For more
information, see Configure multiprotocol BGP for IPv4 or IPv6 BGP
sessions .
Configure an IPv6 BGP session. See the instructions in Create a
VLAN
attachment .
Optional: When you update your stack type from IPv4 only to dual stack,
you can provide custom IPv6 address ranges by using the
--candidate-cloud-router-ipv6-address and
--candidate-customer-router-ipv6-address flags.
gcloud compute interconnects attachments dedicated update ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--stack-type=IPV4_IPV6 \
--candidate-cloud-router-ipv6-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ipv6-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : the IPv6 CIDR address that
you want to assign to the Cloud Router end of your VLAN attachment;
for example, 2001:db8::1/125
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : the IPv6 CIDR
address that you want to assign to the customer router end of your VLAN
attachment
Change VLAN attachment stack type to IPv4 (single stack)
If the VLAN attachment has an IPv6 BGP session, do the following:
Delete the IPv6 BGP peer from Cloud Router:
gcloud compute routers remove-bgp-peer ROUTER_NAME \
--peer-name = BGP_PEER_NAME \
--region = REGION
Replace the following:
ROUTER_NAME : the name of the Cloud Router
BGP_PEER_NAME : the name of the IPv6 BGP peer
REGION : the region in which your
Cloud Router is located
Delete the IPv6 interface from Cloud Router:
gcloud compute routers remove-interface ROUTER_NAME \
--interface-name = INTERFACE_NAME \
--region = REGION
Replace INTERFACE_NAME with the name of the IPv6
Cloud Router interface.
Update the Cloud Interconnect VLAN attachment:
gcloud compute interconnects attachments dedicated update ATTACHMENT_NAME \
--stack-type = IPV4_ONLY \
--region = REGION
Replace ATTACHMENT_NAME with the name of your
Cloud Interconnect VLAN attachment.
What's next
To configure your on-premises router for IPv4 and IPv6 (dual stack) traffic,
see Configure on-premises
routers .
To create a Dedicated Interconnect connection, see the
Dedicated Interconnect provisioning overview .
To learn more about Cloud Interconnect options, see the
Cloud Interconnect overview .
To help you solve common issues that you might encounter when using
Cloud Interconnect, see
Troubleshooting .
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
