---
title: "Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments
  title: "Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create VLAN attachments | Cloud Interconnect | Google Cloud Documentation
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
Before you begin Required roles
Required resources
Project selection
Utilize multiple VLAN attachments
Create unencrypted VLAN attachments
Get details about your VLAN attachments
Restrict Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) usage
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Create VLAN attachments
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Required resources
Project selection
Utilize multiple VLAN attachments
Create unencrypted VLAN attachments
Get details about your VLAN attachments
Restrict Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) usage
What's next
VLAN attachments for Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) connections
(also known as interconnectAttachment resources) connect the
Google Cloud Virtual Private Cloud (VPC) network to the Oracle Cloud Infrastructure
virtual cloud network (VCN) by allocating VLANs over existing connections between
the two cloud providers.
You can create unencrypted VLAN attachments, which support both IPv4 only
(single stack) or IPv4 and IPv6 (dual stack).
Before you can create VLAN attachments for
Partner Cross-Cloud Interconnect for OCI, you must already have an OCI account.
Hourly billing for VLAN attachments starts when OCI completes its
configurations, whether or not you pre-activated your attachments. OCI
configures your attachments when they are in the PENDING_CUSTOMER or
ACTIVE state. Billing stops when you or OCI deletes the
attachments (when they are in the DEFUNCT state). You are not billed for
data transfer between the two clouds.
For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Partner Cross-Cloud Interconnect for OCI, see
Troubleshooting .
To configure the Google Cloud resources needed for Partner Cross-Cloud Interconnect for OCI,
complete the following tasks:
Create two VLAN attachments, one for each of your Partner Cross-Cloud Interconnect for OCI
connections.
Configure Border Gateway Protocol (BGP) sessions, one for each VLAN attachment.
Before you begin
This section lists required permissions, resources, and setup steps.
Required roles
Before proceeding, you need the required permissions. Ask your administrator to make sure that
you have the Compute Network Admin
( roles/compute.networkAdmin ) IAM role on the project. For more information about
granting roles, see
Manage access .
Required resources
Make sure that you have the following resources.
VPC network
If you don't already have a Virtual Private Cloud (VPC) network, create one. For more
information, see
Create and manage VPC networks .
Cloud Router
To configure Partner Cross-Cloud Interconnect for OCI, you need a Cloud Router. If you're
working in the Google Cloud console, you can create your Cloud Router at the same
time that you create your VLAN attachments.
If you want to create a Cloud Router in advance, see
Create a
Cloud Router to connect a VPC network to a peer network .
Give the Cloud Router an ASN of 16550
or any private ASN in the 64512 - 65533 (inclusive) range except ASN 65534 .
For more information about the ASNs that OCI reserves for itself, see the
OCI documentation .
Place the Cloud Router in a region that's
supported for your Google Cloud location .
Project selection
If you're using the Google Cloud CLI, set your project ID by using the
gcloud config set command .
gcloud config set project PROJECT_ID
The gcloud CLI instructions on this page assume that you have set your project ID.
Utilize multiple VLAN attachments
VLAN attachments support traffic speeds up to 50 Gbps or 6.25 M packets per
second (pps). Throughput depends on which limit you
reach first. For example, if your traffic uses very small packets, you may reach
the 6.25 M pps limit before the 50 Gbps limit.
To achieve higher throughput into a VPC network,
you must configure multiple VLAN attachments
into the VPC network. For each Border Gateway Protocol (BGP)
session, you must use the
same MED values to let the traffic use equal-cost multipath (ECMP) routing
over all the configured VLAN attachments.
Note: Creating VLAN attachments with a combined bandwidth
greater than the Cloud Interconnect connection doesn't give you more
than the maximum stated bandwidth of the connection.
Create unencrypted VLAN attachments
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.use
compute.interconnectAttachments.create
compute.interconnectAttachments.get
compute.routers.create
compute.routers.get
compute.routers.update
Roles
roles/owner
roles/editor
roles/compute.networkAdmin
Console gcloud
More
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the VLAN attachments tab, click
add Create VLAN attachments .
Select Partner Interconnect connection .
In the Encrypt interconnect section, select Set up unencrypted
Interconnect , and then click Continue .
Select I already have a service provider .
Select Create a redundant pair of VLAN attachments . Redundancy
provides higher availability than a single connection. Both attachments
serve traffic, and the traffic is load balanced between them. If one
attachment goes down, such as during a scheduled maintenance, the other
attachment continues to serve traffic. For more information, see
Redundancy and SLA .
If you're creating an attachment for testing purposes or don't require
high availability, select Create a single VLAN to create only one
VLAN attachment.
For the Network and Region fields, select the VPC
network and Google Cloud region
where your attachments are to connect.
Specify the details of your VLAN attachments:
Cloud Router : a Cloud Router to associate with this
attachment. You can only choose a Cloud Router in the
VPC network and region that you selected with an ASN of
16550 . If you don't have an existing Cloud Router, create
one
with an ASN of 16550 . Each VLAN attachment can be associated with a
single Cloud Router. Google automatically adds an interface
and a BGP peer on the Cloud Router.
VLAN attachment name : a name for the attachment. This name is
displayed in the Google Cloud console and is used by the
Google Cloud CLI to reference the attachment—for example,
my-attachment .
IP stack type : the IP stack type. Either IPv4
(single-stack) , or IPv4 and IPv6 (dual-stack) .
Maximum transmission unit (MTU) : the MTU for the attachment. To
use the 1460-, 1500-, or 8896-byte maximum transmission unit (MTU),
the VPC network that uses the attachment must have an
MTU set to the same value . In addition, the OCI VM must set the same MTU.
To create the attachments, click Create . This action takes a few
minutes to complete.
After creation is complete, copy the pairing
keys .
You share these keys with OCI when you create
your FastConnect virtual circuit with OCI.
You can pre-activate
the attachment by selecting Enable . Activating
attachments lets you confirm that you're connecting to the
expected service provider. Pre-activating attachments lets you
skip the
activation step
and lets the attachments start passing traffic immediately after your
virtual circuit is created.
To view a list of your VLAN attachments, click OK .
You can optionally update your BGP sessions to
use MD5 authentication .
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned these routes from the BGP peer. For more information, see
Update an existing session to use custom learned routes .
Note: OCI doesn't support Bidirectional Forwarding Detection (BFD).
Before you create a VLAN attachment, you must have an existing
Cloud Router in the network and region that you want to reach from
your on-premises network. If you don't have an existing Cloud Router,
create one .
The Cloud Router must have a BGP ASN of 16550 .
Create a VLAN attachment of type PARTNER , specifying the
names of your Cloud Router and the edge availability
domain
(metro availability zone) of the VLAN attachment.
Google automatically adds an interface and a BGP peer on the
Cloud Router. The attachment generates a
pairing key
that you need to share with OCI.
You can specify the MTU of your attachment. Valid values are 1440
(default), 1460 , 1500 , and 8896 . To specify an MTU of 1460 ,
1500 , or 8896 use the --mtu parameter—for example, --mtu 1500 .
To make use of the 1460-, 1500-, or 8896-byte MTU,
the VPC network that uses the attachment must set the
same MTU .
In addition, the OCI VM must set the same MTU.
You can specify the stack type of your VLAN attachment. The default stack
type is IPv4.
The following example creates a VLAN attachment in edge
availability domain availability-domain-1 :
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--region= REGION \
--router= ROUTER_NAME \
--stack-type= STACK_TYPE \
--edge-availability-domain availability-domain-1
Replace the following:
ATTACHMENT_NAME : a name for your VLAN attachment.
REGION : the region of your VLAN attachment.
ROUTER_NAME : the name of your Cloud Router.
STACK_TYPE : the stack type for your VLAN
attachment. The stack type can be one of the following:
IPV4_ONLY : selects IPv4 only (single stack).
IPV4_IPV6 : selects IPv4 and IPv6 (dual stack).
Note: You can specify any for the edge availability domain, and then
OCI assigns the domain for you. However, to create
a redundant attachment (the second attachment), you need to wait
until OCI configures your first VLAN attachment. You
won't know which domain to use for your redundant attachment until OCI
completes the configuration.
You can pre-activate
the attachment by selecting the --admin-enabled flag. Activating
attachments lets you confirm that you're connecting to the
expected service provider. Pre-activating attachments lets you
skip the
activation step
and lets the attachments start passing traffic immediately after your
service provider completes their configuration.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--region= REGION \
--router= ROUTER_NAME \
--stack-type= STACK_TYPE \
--edge-availability-domain availability-domain-1 \
--admin-enabled
ATTACHMENT_NAME : a name for your VLAN attachment.
REGION : the region of your VLAN attachment.
ROUTER_NAME : the name of your Cloud Router.
STACK_TYPE : the stack type for your VLAN
attachment. The stack type can be one of the following:
IPV4_ONLY : selects IPv4 only (single stack).
IPV4_IPV6 : selects IPv4 and IPv6 (dual stack).
Describe the attachment to retrieve its pairing key; you need to share
this key with OCI when you create the virtual circuit with OCI:
gcloud compute interconnects attachments describe ATTACHMENT_NAME \
--region= REGION
The output is similar to the following for IPv4 VLAN attachments:
adminEnabled: false
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
creationTimestamp: '2017-12-01T08:29:09.886-08:00'
id: '7976913826166357434'
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: ATTACHMENT_NAME
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/ REGION /1
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/ ROUTER_NAME
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME
stackType: IPV4_ONLY
state: PENDING_PARTNER
type: PARTNER
The output is similar to the following for IPv4 and IPv6 (dual stack)
VLAN attachments:
bandwidth: BPS_1G
cloudRouterIpAddress: 169.254.67.201/29
cloudRouterIpv6Address: 2600:2d00:0:1::1/125
creationTimestamp: '2017-12-01T08:31:11.580-08:00'
customerRouterIpAddress: 169.254.67.202/29
customerRouterIpv6Address: 2600:2d00:0:1::2/125
description: Interconnect for Customer 1
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
stackType: IPV4_IPV6
state: ACTIVE
type: PARTNER
vlanTag8021q: 1000
The pairingKey field contains the pairing key that you need to
share with OCI. Treat the pairing key as sensitive
information until your VLAN attachment is configured.
The state of the VLAN attachment is PENDING_PARTNER until you
request a connection with OCI and it completes your
VLAN attachment configuration. After the configuration is complete, the
state of the attachment changes to ACTIVE or PENDING_CUSTOMER .
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned these routes from the BGP peer. For more information, see
Update an existing session to use custom learned routes .
Optional: You can update your BGP sessions to use MD5 authentication .
Note: OCI doesn't support Bidirectional Forwarding Detection (BFD).
If you're building redundancy with a duplicate VLAN attachment, repeat these
steps for the second attachment. Use the same Cloud Router,
but specify a different edge availability
domain. Also, when you request connections from OCI, you
must select the same metropolitan area (city) for both attachments for them
to be redundant. For more information, see
Redundancy and SLA .
Note: When your service provider completes the VLAN attachment configuration,
Google automatically configures an interface and a BGP peering session on the
associated Cloud Router. Don't modify these Google-defined
configurations because doing so shuts down the BGP session. However, if you
delete your attachment, you can delete these configurations.
Get details about your VLAN attachments
After you create your VLAN attachments, retrieve the details that you need to configure your
OCI resources.
Console gcloud
More
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the VLAN attachments tab, click the name of your primary VLAN attachment.
Make a note of the Cloud Router BGP IP and BGP Peer IP values. You need these
values when you configure your OCI resources.
Repeat the preceding steps for your redundant attachment.
Use the
gcloud compute interconnects attachments describe command .
Run the following command twice—once for each attachment:
gcloud compute interconnects attachments describe NAME --region REGION
Replace the following:
NAME : the name of the VLAN attachment
REGION : the region where the VLAN attachment is
located
The command returns output that includes cloudRouterIpAddress and
customerRouterIpAddress . Make a note of these values. You need them when you
configure your OCI resources.
Restrict Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) usage
By default, any VPC network can use Cloud Interconnect.
To control which VPC networks can use Cloud Interconnect, you can set an
organization policy. For more information, see
Restrict Cloud Interconnect usage .
For information about how to configure Oracle Cloud Infrastructure resources,
see Configure OCI resources
in the OCI documentation.
What's next
To find answers to common questions about Cloud Interconnect
architecture and features, see the
Cloud Interconnect FAQ .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
To find Google Cloud resource names, see the
Cloud Interconnect APIs .
Previous
arrow_back
Paired locations
Next
Request OCI connections
arrow_forward
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
