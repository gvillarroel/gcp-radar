---
title: "Configure your Google Cloud resources \_|\_ Cloud Interconnect \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/configure-google-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/configure-google-resources
  title: "Configure your Google Cloud resources \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure your Google Cloud resources | Cloud Interconnect | Google Cloud Documentation
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
Before you begin Required roles
Required resources
Project selection
Check port status in Google Cloud
Create VLAN attachments
Configure BGP sessions
Get details about your VLAN attachments
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure your Google Cloud resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Required resources
Project selection
Check port status in Google Cloud
Create VLAN attachments
Configure BGP sessions
Get details about your VLAN attachments
To configure the Google Cloud resources needed for Cross-Cloud Interconnect,
complete the following tasks:
Create two VLAN attachments, one for each of your Cross-Cloud Interconnect
connections.
Configure Border Gateway Protocol (BGP) sessions, one for each VLAN attachment.
Before you begin
This section lists required permissions, resources, and setup steps.
Required roles
Before proceeding, you need the required permissions. Ask your administrator to make sure that
you have the Compute Network Admin
( roles/compute.networkAdmin ) IAM role on the project. For more information about
granting roles, see
Manage access to projects, folders, and organizations .
Required resources
Make sure that you have the following resources.
VPC network
If you don't already have a Virtual Private Cloud (VPC) network, create one. For more
information, see
Create and manage VPC networks .
Cloud Router
To configure Cross-Cloud Interconnect, you need a Cloud Router. If you're
working in the Google Cloud console, you can create your Cloud Router at the same
time that you create your VLAN attachments.
If you want to create a Cloud Router in advance, see
Create a
Cloud Router to connect a VPC network to a peer network .
Give the Cloud Router an ASN of
16550 or any private ASN.
Place the Cloud Router in a region that's
supported for your Google Cloud location .
Project selection
If you're using the Google Cloud CLI, set your project ID by using the
gcloud config set command .
gcloud config set project PROJECT_ID
The gcloud CLI instructions on this page assume that you have set your project ID.
Check port status in Google Cloud
Before proceeding, verify that each of your Cross-Cloud Interconnect ports is
receiving a signal from AWS.
Console
More
In the Google Cloud console, go to the Cloud Interconnect page.
Go to Cloud Interconnect
Click the name of your Cross-Cloud Interconnect
connection.
On the Interconnect details page, make sure that the value in the Status
column is Active .
If Google Cloud displays a page titled Cross-Cloud Interconnect order
confirmation , then your connection isn't ready for configuration.
Create VLAN attachments
A VLAN attachment is a logical connection between a single region in your VPC
network and a peer network (in this case, your AWS network).
To qualify for the service level agreement (SLA), create at least one VLAN
attachment for each Cross-Cloud Interconnect connection. You can also create
more attachments for each connection, but certain
quotas and limits apply.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect page.
Go to Cloud Interconnect
Click the name of your primary Cross-Cloud Interconnect connection.
On the Interconnect details page, click Add VLAN attachment .
Fill out the Select interconnects & redundancy form:
In the Redundancy section, select Create a redundant pair of VLAN
attachments (recommended) .
In the Interconnects section, do the following:
Make sure that the Interconnect A field
displays the name of your primary Cross-Cloud Interconnect port.
Set the Interconnect B field to the name of your redundant
Cross-Cloud Interconnect port.
Click Continue .
Fill out the Create VLAN attachment for Interconnect A form:
Enter a name.
Optional: Enter a description.
Select a stack type: either IPv4 (single-stack) or IPv4 and IPv6
(dual-stack) .
Select a Cloud Router from the Cloud Router list. If no routers are listed,
click Create new router and follow the prompts to add a new one.
The Cloud Router must be located in a region that's
supported for your Google Cloud location .
Give the Cloud Router an ASN of
16550 or any private ASN.
Enter a VLAN ID that's between 2 and 4094 and unique among
the VLAN attachments associated with this connection.
Expand the Advanced options section of the form and make any needed changes:
If you want to specify an IP address range for the attachment, do one of the following:
Set the Allocate BGP IP address field to Specify a candidate
link-local range and enter an IP address range.
Set the Allocate BGP IP address field to Specify custom IP address .
For more information about custom IP addresses, see
Custom IP address ranges .
Note that you can't combine custom IPv4 addresses with candidate
subnets. In addition, if you use the dual stack stack
type, you can choose to set custom IP addresses for only your IPv4
addresses, only your IPv6 addresses, or both your IPv4 and IPv6
addresses; you can combine custom IP addresses in one field with
automatic allocation or candidate link-local ranges in the other
field if those options are available.
In the Allocate BGP IPv4 addresses or Allocate BGP IPv6 addresses
sections, enter the following information:
In the Cloud Router IP field, enter the IPv4/IPv6 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 192.0.2.0/29 or 2001:db8::1/125 .
In the Peer IP field, enter the IPv4/IPv6 CIDR address that you
want to assign to the customer router end of your VLAN attachment.
For Capacity , choose a capacity setting for the attachment.
Optional: If appropriate, change the MTU value from its default of
1440 . For help with this field, see
Cloud Interconnect MTU .
We recommend leaving the
IPv4 subnet mask set to /29 .
Click Next .
The page updates to show a form for the second attachment.
Enter details about the redundant attachment:
Enter a name.
Optional: Enter a description.
Select a Cloud Router that's in the same region as the router that you
used for the first attachment. You can use the same Cloud Router.
Enter a VLAN ID for the redundant attachment. We recommend using the same value that
you used for the first attachment.
If you want to specify an IP address range for the attachment, do one of the following:
Set the Allocate BGP IP address field to Specify a candidate
link-local range and enter an IP address range.
Set the Allocate BGP IP address field to Specify custom IP address
For more information about custom IP addresses, see
Custom IP address ranges .
For more information about prerequisites, limitations and
why you might use custom IP address ranges, see
Custom IP address ranges .
Note that you can't combine custom IPv4 addresses with candidate
subnets. In addition, if you use the dual stack stack
type, you can choose to set custom IP addresses for only your IPv4
addresses, only your IPv6 addresses, or both your IPv4 and IPv6
addresses; you can combine custom IP addresses in one field with
automatic allocation or candidate link-local ranges in the other
field if those options are available.
In the Allocate BGP IPv4 addresses or Allocate BGP IPv6 addresses
sections, enter the following information:
In the Cloud Router IP field, enter the IPv4/IPv6 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 192.0.2.0/29 or 2001:db8::1/125 .
In the Peer IP field, enter the IPv4/IPv6 CIDR address that you
want to assign to the customer router end of your VLAN attachment.
Click Next , and continue to the next section,
Configure BGP sessions .
Use the
gcloud compute interconnects attachments dedicated create command .
We recommend not setting a value for
--subnet-length and accepting the default value of 29 .
Complete the following steps:
Create the primary attachment:
gcloud compute interconnects attachments dedicated create VLAN_ATTACHMENT_NAME \
--interconnect CONNECTION \
--router ROUTER \
--region REGION \
--bandwidth BANDWIDTH \
--vlan ID \
--mtu MTU
Replace the following:
VLAN_ATTACHMENT_NAME : the name for this VLAN
attachment
CONNECTION : the name of your primary
Cross-Cloud Interconnect connection
ROUTER : the Cloud Router that you want to use
for the attachment; unless you are using
global dynamic routing mode ,
the router must be located in a
supported Google Cloud location
REGION : the region where the Cloud Router is
located
BANDWIDTH : the bandwidth for this VLAN attachment in Mbps
or Gbps—for example, for 50 Mbps, enter 50m , or for 10 Gbps, enter
10g
ID : a number between 2 and 4094
that's unique among the VLAN attachments associated with this connection
MTU : the MTU to use
If you don't set a value, the default of 1440 is used.
For help with setting this field, see
Cloud Interconnect MTU .
Configure custom IP address ranges
Alternatively, you can create the VLAN attachments with custom IP address ranges. For more
information about custom IP addresses, see
Custom IP address ranges .
Use the following command to configure custom IP address ranges for an attachment with the
IPV4_ONLY stack type:
gcloud compute interconnects attachments dedicated create VLAN_ATTACHMENT_NAME \
--interconnect CONNECTION \
--router ROUTER \
--region REGION \
--bandwidth BANDWIDTH \
--vlan ID \
--mtu MTU \
--stack-type=IPV4_ONLY \
--candidate-cloud-router-address= ADDRESS_RANGE_1 \
--candidate-customer-router-address= ADDRESS_RANGE_2
Replace the following:
VLAN_ATTACHMENT_NAME : the name for this VLAN
attachment
CONNECTION : the name of your primary
Cross-Cloud Interconnect connection
ROUTER : the Cloud Router that you want to use
for the attachment; unless you are using
global dynamic routing mode ,
the router must be located in a
supported Google Cloud location
REGION : the region where the Cloud Router is
located
BANDWIDTH : the bandwidth for this VLAN attachment in Mbps
or Gbps—for example, for 50 Mbps, enter 50m , or for 10 Gbps, enter
10g
ID : a number that's unique among the VLAN attachments
associated with this connection
MTU : the MTU to use
If you don't set a value, the default of 1440 is used.
For help with setting this field, see
Cloud Interconnect MTU .
ADDRESS_RANGE_1 : the IPv4 address range that you want to
assign to the Cloud Router end of your VLAN attachment
ADDRESS_RANGE_2 : the IPv4 address range that you want to
assign to the customer router end of your VLAN attachment
Alternatively, use the following command to configure custom IP address ranges for an
attachment with the IPV4_IPV6 stack type:
gcloud compute interconnects attachments dedicated create VLAN_ATTACHMENT_NAME \
--interconnect CONNECTION \
--router ROUTER \
--region REGION \
--bandwidth BANDWIDTH \
--vlan ID \
--mtu MTU \
--stack-type=IPV4_IPV6 \
--candidate-cloud-router-address= ADDRESS_RANGE_1 \
--candidate-customer-router-address= ADDRESS_RANGE_2 \
--candidate-cloud-router-ipv6-address= ADDRESS_RANGE_3 \
--candidate-customer-router-ipv6-address= ADDRESS_RANGE_4
Replace the following:
VLAN_ATTACHMENT_NAME : the name for this VLAN
attachment
CONNECTION : the name of your primary
Cross-Cloud Interconnect connection
ROUTER : the Cloud Router that you want to use
for the attachment; unless you are using
global dynamic routing mode ,
the router must be located in a
supported Google Cloud location
REGION : the region where the Cloud Router is
located
BANDWIDTH : the bandwidth for this VLAN attachment in Mbps
or Gbps—for example, for 50 Mbps, enter 50m , or for 10 Gbps, enter
10g
ID : a number that's unique among the VLAN attachments
associated with this connection
MTU : the MTU to use
If you don't set a value, the default of 1440 is used.
For help with setting this field, see
Cloud Interconnect MTU .
Use the following values to configure custom IP address ranges. You can omit the flags
that use these values if you have configured candidate subnets, or if you don't want to
configure custom IP address ranges. In addition, you might choose to omit either pair of
IPv4 or IPv6 address ranges if you want to use automatic allocation for that protocol.
ADDRESS_RANGE_1 : the IPv4 address range that you want to
assign to the Cloud Router end of your VLAN attachment
ADDRESS_RANGE_2 : the IPv4 address range that you want to
assign to the customer router end of your VLAN attachment
ADDRESS_RANGE_3 : the IPv6 address range that you want to
assign to the Cloud Router end of your VLAN attachment, like
2001:db8::1/125
ADDRESS_RANGE_4 : the IPv6 address range that you want to
assign to the customer router end of your VLAN attachment
Create the redundant attachment:
gcloud compute interconnects attachments dedicated create VLAN_ATTACHMENT_NAME_2 \
--interconnect CONNECTION_2 \
--router ROUTER_2 \
--region REGION \
--bandwidth BANDWIDTH \
--vlan ID \
--mtu MTU
Replace the following:
VLAN_ATTACHMENT_NAME_2 : the name that you want to give
to this VLAN attachment
CONNECTION_2 : the name of your redundant
Cross-Cloud Interconnect connection
ROUTER_2 : the Cloud Router that you want to use for
the redundant attachment
It must be located in the same region as the Cloud Router
that you used for the primary attachment. You can also use the same
Cloud Router that you used for the primary attachment.
REGION : the region where the Cloud Router is
located
The following fields use the same values as the primary attachment:
BANDWIDTH
ID
MTU
Configure BGP sessions
Cross-Cloud Interconnect uses BGP to exchange routes between your
VPC network and your AWS network. To that end, configure a BGP session
for each of your VLAN attachments. The sessions aren't active until you configure your
AWS resources, but you can configure the Google Cloud side of the sessions
now.
Console gcloud
More
Configure the first session.
Do one of the following:
If the Configure Cloud Routers form is displayed,
locate the name of your primary VLAN attachment and click Configure .
If the form isn't open, go to the Cloud Interconnect
VLAN attachments
tab. Click the name of the attachment. In the Connection section of the form,
click Configure BGP session .
Fill out the Create BGP session form:
Enter a name for the session.
In the Peer ASN field, enter a value to represent the
AWS side of the peering. Use a value in one of the following ranges:
64512 - 65534 or 4,200,000,000 - 4,294,967,294 .
The default AWS ASN is 64512 .
Optional: Enter a value in the Advertised route priority field. For
information about this field, see
Advertised prefixes and priorities .
Set MD5 Authentication to Enabled , and enter your secret MD5 authentication
key. Later, when you configure peering in AWS, you must use the same key on the AWS side of
peering. For more information about MD5 authentication, see
Use MD5 authentication .
Click Save and continue .
Configure the second session.
Do one of the following:
If you are in the Configure
Cloud Routers form, locate the name of your redundant VLAN
attachment and click Configure .
If the form isn't open, go to the Cloud Interconnect
VLAN
attachments tab. Click the name of the redundant attachment, and then
click Configure .
In the Create BGP session form, enter the following values:
Enter a name for the session.
For Peer ASN , enter the same peer ASN that you used for the BGP
session on the primary attachment.
Optional: Enter a value for Advertised route priority . For information
about this field, see
Advertised prefixes and priorities .
Set MD5 Authentication to Enabled , and enter your secret MD5 authentication
key. Later, when you configure peering in AWS, you must use the same key
on the AWS side of peering.
Click Save and continue .
Click Save configuration .
Click Finish setup .
To create the required BGP sessions, you must create two interfaces on the Cloud Router
used by your VLAN attachments. If each of your attachments uses a different
Cloud Router, configure an interface on each Cloud Router. After you create your
interfaces, create a peering session for each interface.
To complete this setup, you use the
gcloud compute routers add-interface command
and the
gcloud compute routers add-bgp-peer command .
Complete the following steps:
Create the primary interface:
gcloud compute routers add-interface ROUTER_NAME \
--interface-name= INTERFACE \
--interconnect-attachment= ATTACHMENT \
--region= REGION
Replace the following:
ROUTER_NAME : the name of the Cloud Router used by
your primary VLAN attachment
INTERFACE : the name of the new interface
ATTACHMENT : the name of your primary VLAN attachment
REGION : the region where the Cloud Router is
located
Create the redundant interface:
gcloud compute routers add-interface ROUTER_NAME_2 \
--interface-name= INTERFACE_2 \
--interconnect-attachment= ATTACHMENT_2 \
--region= REGION
Replace the following:
ROUTER_NAME_2 : the name of the Cloud Router used by
your redundant VLAN attachment
INTERFACE_2 : the name of the redundant interface
ATTACHMENT_2 : the name of your redundant VLAN
attachment
REGION : the region where the Cloud Router is
located
Create a BGP session for the primary VLAN attachment:
gcloud compute routers add-bgp-peer ROUTER_NAME \
--interface= INTERFACE \
--peer-asn= AWS_SIDE_ASN \
--peer-name= PEER_NAME \
--region= REGION \
--md5-authentication-key= YOUR_KEY
Replace the following:
ROUTER_NAME : the name of the Cloud Router
used by your primary VLAN attachment
INTERFACE : the name of the primary interface
AWS_SIDE_ASN : Use
a value in one of the following ranges:
64512 - 65534 or 4,200,000,000 - 4,294,967,294 ; the
default AWS ASN is 64512
PEER_NAME the name of the peer
REGION : the region where the Cloud Router is
located
YOUR_KEY :
The secret key to use for MD5 authentication; later, when you configure peering in AWS,
you must use the same key.
Create a BGP session for the redundant VLAN attachment:
gcloud compute routers add-bgp-peer ROUTER_NAME_2 \
--interface= INTERFACE_2 \
--peer-asn= AWS_SIDE_ASN \
--peer-name= PEER_NAME_2 \
--region= REGION \
--md5-authentication-key= YOUR_KEY_2
Replace the following:
ROUTER_NAME_2 : the name of the Cloud Router
used by your primary VLAN attachment
INTERFACE_2 : the name of the primary interface
AWS_SIDE_ASN : Use
a value in one of the following ranges:
64512 - 65534 or 4,200,000,000 - 4,294,967,294 ; the
default AWS ASN is 64512
PEER_NAME_2 :the name of the peer
REGION : the region where the Cloud Router is
located
YOUR_KEY_2 :
The secret key to use for MD5 authentication; later, when you configure peering in AWS,
you must use the same key.
Get details about your VLAN attachments
After you create your VLAN attachments, retrieve the details that you need to configure your
AWS resources.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect page.
Go to Cloud Interconnect
Click the name of your primary VLAN attachment.
Make a note of the Cloud Router BGP IP and BGP Peer IP values. You need these
values when you configure your Direct Connect resources.
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
configure your AWS resources.
Previous
arrow_back
Order AWS ports
Next
Configure your AWS resources
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
