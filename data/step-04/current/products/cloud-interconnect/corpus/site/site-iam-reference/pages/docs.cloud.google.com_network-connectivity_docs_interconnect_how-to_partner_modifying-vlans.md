---
title: "Modify VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans
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
Modify capacity
Modify the description and MTU
Modify the stack type
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
Modify capacity
Modify the description and MTU
Modify the stack type
What's next
This document describes how to modify Partner Interconnect VLAN
attachments and their Border Gateway Protocol (BGP) sessions.
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
The following table lists VLAN attachment and BGP session properties. It
also provides information about how to modify them.
Property
How to modify
Capacity
Work with your service provider as described in the
Modify capacity
section in this document.
Description and MTU
See the Modify the description
and MTU section in this document.
Modifications are immediate and in rare cases can cause traffic disruption.
If traffic is disrupted, the disruption lasts less than a minute.
Stack type
See the Modify the stack type
section in this document. Modifying the stack type from IPv4 and IPv6
(dual stack) to IPv4 only (single stack) removes the IPv6 BGP session
from the associated Cloud Router, and removes the IPv6 address
from the VLAN attachment. Changing the stack type on an IPv4 only
(single stack) attachment to IPv4 and IPv6 (dual stack) adds a
default-configured IPv6 BGP session to the associated
Cloud Router. The following describes the behavior of the IPv6
BGP session:
The attachment is active and the peer router already has an IPv6
BGP configuration: the IPv6 BGP session establishes and starts
routing IPv6 traffic immediately.
The attachment isn't active or the peer router doesn't have an IPv6
BGP configuration: the IPv6 BGP session doesn't establish and you
can modify the BGP session before activating the attachment or
configuring the peer router.
To change the stack type of an IPv4 only (single stack) attachment
without immediately accepting IPv6 traffic, de-activate the attachment
or disable the peer router's IPv6 BGP configuration first.
Whether a VLAN attachment is enabled or disabled
To disable or re-enable a VLAN attachment, see
Disable VLAN attachments .
VLAN ID
BGP IP addresses (Cloud Router IP address, on-premises
router IP address)
You can't modify these properties for existing attachments. Instead,
you must recreate the VLAN attachment.
To create VLAN attachments for Partner Interconnect, see
Create VLAN attachments .
Custom learned routes
Follow the steps in
Update an existing session to use custom learned routes .
MD5 authentication
If you have a Layer 2 connection, follow the steps in
Add authentication to an existing session .
If you have a Layer 3 connection, contact your service provider for
instructions.
The peer ASN is not a property of the VLAN attachment—it is part of the
BGP configuration of the Cloud Router. If you have a Layer 2 connection
and you want to modify the peer ASN, update the Cloud Router's BGP
session for the VLAN attachment.
For more information, see the following resources:
Viewing BGP session configuration
gcloud compute routers update-bgp-peer command reference
routers.update API method reference
Modify capacity
For an existing VLAN attachment, Google Cloud supports increasing or decreasing
the attachment's capacity as your capacity demands rise or fall. Because
capacity changes can affect your service provider's network, you must work with
them to change your attachment's capacity. Changes in capacity, in rare cases,
can cause traffic disruption. If traffic is disrupted, the disruption lasts less
than a minute.
After the service provider has updated your attachment, your service provider
works with Google to update the attachment's capacity in your Google Cloud project.
At that time, Google updates the charges for the attachment based on the new
capacity.
If you modify the capacity of an encrypted VLAN attachment, you might need to add
HA VPN tunnels to accommodate increased traffic. For more information,
see Configure HA VPN over Cloud Interconnect .
For a list of all the service providers, see
Supported service providers .
Modify the description and MTU
This section provides instructions for updating the description and
maximum transmission unit (MTU) of a
VLAN attachment. In rare cases, changing the attributes of a VLAN attachment
can cause traffic disruption. If traffic is disrupted, the disruption lasts less
than a minute.
To make use of a 1460-, 1500-, or 8896-byte MTU, the VPC network
that uses the attachment must have the same MTU value . In
addition, the on-premises virtual machine (VM) instances and routers must have
the same MTU value. If your network has the default MTU of 1460 , then select
an MTU of 1460 for your VLAN attachment.
You cannot modify the MTU ( 1440 ) of an encrypted VLAN attachment
that is used in an HA VPN over Cloud Interconnect deployment.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment to modify.
On the attachment's detail page, click Edit .
Modify the Description of your VLAN attachment.
Optional: Update the maximum transmission unit (MTU) of
the attachment.
Click Save .
Modify an interconnectAttachment by specifying the name of the existing
VLAN attachment and the attributes to modify:
gcloud compute interconnects attachments partner update NAME \
--region= REGION \
--description= DESCRIPTION \
--mtu= MTU
Replace the following:
NAME : the name of the existing VLAN attachment
REGION : the region of the attachment
DESCRIPTION : a description of the attachment
MTU : the maximum transmission unit (MTU) of the
attachment
For more information, see the
gcloud compute interconnects attachments partner update reference .
Modify the stack type
This section describes modifying the stack type of a VLAN attachment. You can
change between either IPv4 only (single stack), or IPv4 and IPv6 (dual stack).
Modifying the stack type from IPv4 and IPv6 (dual stack) to IPv4 only (single
stack) removes the BGP session from the associated Cloud Router, and
removes the IPv6 address from the VLAN attachment.
Important: Downgrading from IPv4 and IPv6 (dual stack) to IPv4 only (single
stack) results in dropped packets.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment to modify.
On the attachment's detail page, click Edit .
In the IP stack type section, select the IP stack type, either
IPv4 (single-stack) or IPv4 and IPv6 (dual-stack) .
(Optional): You can specify custom IP address ranges when you change your
attachment's stack type.
Note: The following instructions describe how to configure custom
IP address ranges for a Layer 2 connection. If you want to use
custom IP address ranges with a Layer 3 connection, you create a
VLAN attachment and then your service provider configures the
custom IP address ranges during their VLAN attachment
configuration process. If you have a Layer 3 connection, contact
your service provider for instructions.
For more information about prerequisites, limitations and
why you might use custom IP address ranges, see
Custom IP address ranges .
In the Cloud Router IPv6 or Peer IPv6 sections, enter the
following information:
In the Cloud Router IPv6 field, enter the IPv6 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 2001:db8::1/125 .
In the Peer IPv6 field, enter the IPv6 CIDR address that you
want to assign to the customer router end of your VLAN attachment.
Click Save .
Run the following command:
gcloud compute interconnects attachments partner update NAME \
--region= REGION \
--stack_type= STACK_TYPE
Replace the following:
NAME : the name of the existing VLAN attachment.
REGION : the region of your VLAN attachment.
STACK_TYPE : the stack type for your VLAN
attachment. The stack type can be one of the following:
IPV4_ONLY : selects IPv4 only (single stack).
IPV4_IPV6 : selects IPv4 and IPv6 (dual stack).
Note: When you switch the stack type from IPV4_IPV6 (dual stack) to
IPV4_ONLY (single stack), a warning indicates that the
IPv6 only BGP session is removed.
The output is similar to the following when changing the stack type from
IPV4_ONLY to IPV4_IPV6 :
adminEnabled: true
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
bandwidth: BPS_1G
cloudRouterIpAddress: 169.254.67.201/29
cloudRouterIpv6Address: 2600:2d00:0:1::1/125
creationTimestamp: '2017-12-01T08:31:11.580-08:00'
customerRouterIpAddress: 169.254.67.202/29
customerRouterIpv6Address: 2600:2d00:0:1::2/125
description: Interconnect for location 1
id: '7193021941765913888'
interconnect: https://www.googleapis.com/compute/alpha/projects/partner-project/global/interconnects/lga-2
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: partner-attachment
partnerMetadata:
interconnectName: New York (2)
partnerName: Partner Inc
portalUrl: https://partner-portal.com
region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION
selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME
stackType: STACK_TYPE
state: ACTIVE
type: PARTNER
vlanTag8021q: 1000
The output is similar to the following when changing the stack type from
IPV4_IPV6 to IPV4_ONLY :
adminEnabled: true
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
bandwidth: BPS_1G
cloudRouterIpAddress: 169.254.67.201/29
creationTimestamp: '2017-12-01T08:31:11.580-08:00'
customerRouterIpAddress: 169.254.67.202/29
description: Interconnect for location 1
id: '7193021941765913888'
interconnect: https://www.googleapis.com/compute/alpha/projects/partner-project/global/interconnects/lga-2
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: partner-attachment
partnerMetadata:
interconnectName: New York (2)
partnerName: Partner Inc
portalUrl: https://partner-portal.com
region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION
selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME
stackType: STACK_TYPE
state: ACTIVE
type: PARTNER
vlanTag8021q: 1000
Add custom IP address ranges when upgrading to dual stack
When you update your stack type from IPv4 only to dual stack on a Layer 2
connection, you can provide custom IPv6 address ranges by using the
--candidate-cloud-router-ipv6-address and
--candidate-customer-router-ipv6-address flags.
gcloud compute interconnects attachments partner update ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--stack-type=IPV4_IPV6 \
--candidate-cloud-router-ipv6-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ipv6-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
ATTACHMENT_NAME : the name of your VLAN attachment
PROJECT_ID : the ID of your Google Cloud project
REGION : the region of your VLAN attachment
ROUTER_NAME : the name of the Cloud Router
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : the IPv6 CIDR address
that you want to assign to the Cloud Router end of your VLAN attachment;
for example, 2001:db8::1/125
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : the IPv6 CIDR
address that you want to assign to the customer router end
If you use a Layer 3 connection, your service provider can configure custom IP
addresses when you upgrade the stack type.
What's next
To create a Partner Interconnect connection, see the
Partner Interconnect provisioning overview .
To learn more about Cloud Interconnect options, see the
Cloud Interconnect overview .
To help you solve common issues that you might encounter when using
Partner Interconnect, see
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
