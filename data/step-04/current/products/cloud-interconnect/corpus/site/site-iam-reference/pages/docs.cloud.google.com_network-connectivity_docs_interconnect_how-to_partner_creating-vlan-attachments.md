---
title: "Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments
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
Utilize multiple VLAN attachments
Create unencrypted VLAN attachments
Create encrypted VLAN attachments
Restrict Partner Interconnect usage
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
Utilize multiple VLAN attachments
Create unencrypted VLAN attachments
Create encrypted VLAN attachments
Restrict Partner Interconnect usage
What's next
VLAN attachments for Partner Interconnect connections (also known as
interconnectAttachments ) connect your Virtual Private Cloud (VPC) networks with
your on-premises network through your service provider's network by allocating
VLANs on your service provider's connection.
You can create unencrypted VLAN attachments or encrypted VLAN attachments.
Unencrypted VLAN attachments support IPv4 only (single stack) or IPv4 and IPv6
(dual stack). Encrypted VLAN attachments are used in
HA VPN over Cloud Interconnect deployments, and they only support IPv4 (single
stack).
Before you can create VLAN attachments for
Partner Interconnect, you must already have connectivity with a
supported service provider .
Billing for VLAN attachments starts when your service provider completes their
configurations, whether or not you pre-activated your attachments. Your service
provider configures your attachments when they are in the PENDING_CUSTOMER or
ACTIVE state. Billing stops when you or the service provider deletes the
attachments (when they are in the DEFUNCT state).
The VLAN ID is unique to your Partner Interconnect connection, and
therefore you can reuse the same VLAN ID on a different connection, regardless
of where that connection is located.
For VLAN attachments for Dedicated Interconnect, see
Creating VLAN attachments for Dedicated Interconnect .
For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Partner Interconnect, see
Troubleshooting .
Utilize multiple VLAN attachments
VLAN attachments support traffic speeds up to 50 Gbps or 6.25 M packets per
second (pps) for 100-Gbps connections. Throughput depends on which
limit you reach first. For example, if your traffic uses very small packets, you
might reach the 6.25 M pps limit before the 50 Gbps limit.
To achieve higher throughput into a VPC network,
you must configure multiple VLAN attachments
into the VPC network. For each Border Gateway Protocol (BGP)
session, you should use the
same MED values to let the traffic use equal-cost multipath (ECMP) routing
over all the configured VLAN attachments.
Note: Creating VLAN attachments with a combined bandwidth
greater than the Cloud Interconnect connection doesn't give you more
than the maximum stated bandwidth of the connection.
If you have multiple VLAN attachments, including attachments in different
projects, you can pair them with a Partner Interconnect
connection from the same service provider, or with
Partner Interconnect connections from different service providers.
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
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
Click Create VLAN attachments .
Select Partner Interconnect connection .
In the Encrypt interconnect section, select Set up unencrypted
Interconnect , and then click Continue .
Select I already have a service provider .
Select Create a redundant pair of VLAN attachments . Redundancy
provides higher availability than a single connection. Both attachments
serve traffic, and the traffic is load balanced between them. If one
attachment goes down, for example during scheduled maintenance, the other
attachment continues to serve traffic. For more information, see
Redundancy and SLA .
If you're creating an attachment for testing purposes or don't require
high availability, select Create a single VLAN to create only one
VLAN attachment.
For the Network and Region fields, select the VPC
network and Google Cloud region
where your attachments will connect.
Specify the details of your VLAN attachments:
Cloud Router : A Cloud Router to associate with this
attachment. You can only choose a Cloud Router in the
VPC network and region that you selected with an ASN of
16550 . If you don't have an existing Cloud Router, create
one
with an ASN of 16550 . Each VLAN attachment can be associated with a
single Cloud Router. Google automatically adds an interface
and a BGP peer on the Cloud Router.
VLAN attachment name : A name for the attachment. This name is
displayed in the Google Cloud console and is used by the
Google Cloud CLI to reference the attachment—for example,
my-attachment .
IP stack type : Select the IP stack type. Either IPv4
(single-stack) , or IPv4 and IPv6 (dual-stack) .
In the Allocate BGP IPv4 address and Allocate BGP IPv6
address sections, you can choose Automatically allocate
link-local range or Specify custom IP address. If you choose
Automatically allocate link-local range , skip the rest of the
instructions in this step.
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
In the Cloud Router IP field, enter the IPv4 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 192.0.2.1/29 . Then, in the Peer IP
field, enter the IPv4 CIDR address that you want to assign to the
customer router end of your VLAN attachment.
If you selected IPv4 and IPv6 (dual stack) , you must also
select one of the options in the Allocate BGP IPv6 address
section. In the Cloud Router IPv6 field, enter the
IPv6 CIDR address that you want to assign to the Cloud Router end
of your VLAN attachment, like 2001:db8::1/125 . Then, in the
Peer IPv6 field, enter the IPv6 CIDR address that you want to
assign to the customer router end of your VLAN attachment.
Maximum transmission unit (MTU) for the attachment: To make use of
the 1460-, 1500-, or 8896-byte maximum transmission unit (MTU), the
VPC network that uses the attachment must have an MTU
set to the same value . In addition, the on-premises
virtual machine (VM) instances and routers must have their MTU set to
the same value as well. If your network has the default MTU of 1460 ,
then select 1460 as the VLAN attachment MTU.
To create the attachments, click Create . This action takes a few
minutes to complete.
After creation is complete, copy the pairing
keys .
You share these keys with your service provider when you request a
connection with them.
If you're requesting a Layer 3 connection from your service provider,
you can
pre-activate
the attachment by selecting Enable . Activating
attachments enables you to confirm that you're connecting to the
expected service provider. Pre-activating attachments enables you to
skip the
activation step
and lets the attachments start passing traffic immediately after your
service provider completes their configuration.
To view a list of your VLAN attachments, click OK .
You can optionally update your BGP sessions to
use MD5 authentication .
If you have a Layer 2 connection, follow the steps in
Add authentication to an existing session .
If you have a Layer 3 connection, contact your service provider for
instructions.
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned these routes from the BGP peer. For more information, see
Update an existing session to use custom learned routes .
Optional: Bidirectional Forwarding Detection (BFD)
for Cloud Router detects forwarding path outages such as link
down events, allowing for more resilient hybrid networks. To update
your BGP session to use BFD, see Configuring
BFD .
Important: BFD can only be enabled on provisioned VLAN
attachments that use Dataplane version 2. You can view the dataplaneVersion for a
VLAN attachment by viewing the attachment details in one of the following ways:
API : Use the
interconnectAttachments.get
method. You can use this method on VLAN attachments for either
Dedicated Interconnect or Partner Interconnect.
Google Cloud CLI : Use the gcloud compute interconnects attachments describe
ATTACHMENT-NAME command where ATTACHMENT-NAME is the name
of the VLAN attachment for either Dedicated Interconnect or
Partner Interconnect.
In the output of the API or gcloud CLI command, look for the
dataplaneVersion field with a value of 2 . If the field is absent
from the output, the VLAN attachment is using version 1 and cannot be used with BFD. For more
information, contact your customer account team.
The Cloud Interconnect Dataplane v2 is unrelated to
Google Kubernetes Engine (GKE) Dataplane V2
Before you create a VLAN attachment, you must have an existing
Cloud Router in the network and region that you want to reach from
your on-premises network. If you don't have an existing Cloud Router,
create one .
The Cloud Router must have a BGP ASN of 16550 .
Create a VLAN attachment of type PARTNER , specifying the
names of your Cloud Router and the edge availability
domain
(metro availability zone) of the VLAN attachment. Google automatically
adds an interface and a BGP peer on the Cloud Router. The
attachment generates a pairing key
that you need to share with your service provider.
You can specify the MTU of your attachment. Valid values are 1440
(default), 1460 , 1500 , and 8896 . To specify an MTU of 1460 ,
1500 , or 8896 use the --mtu parameter—for example, --mtu 1500 .
To make use of the 1460-, 1500-, or 8896-byte MTU,
the VPC network that uses the attachment must set the
same MTU .
In addition, the on-premises VMs and routers must set the same MTU
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
your service provider assigns the domain for you. However, to create
a redundant attachment (the second attachment), you need to wait
until your service provider configures your first VLAN attachment. You
won't know which domain to use for your redundant attachment until they
complete the configuration.
If you're requesting a Layer 3 connection from your service provider,
you can
pre-activate
the attachment by selecting --admin-enabled flag. Activating
attachments enables you to confirm that you're connecting to the
expected service provider. Pre-activating attachments enables you to
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
this key with your service provider when you request a connection with
them:
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
share with your service provider. Treat the pairing key as sensitive
information until your VLAN attachment is configured.
The state of the VLAN attachment is PENDING_PARTNER until you
request a connection with your service provider and they complete your
VLAN attachment configuration. After the configuration is complete, the
state of the attachment changes to ACTIVE or PENDING_CUSTOMER .
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned these routes from the BGP peer. For more information, see
Update an existing session to use custom learned routes .
Optional: You can update your BGP sessions to use MD5 authentication .
If you have a Layer 2 connection, follow the steps in
Add authentication to an existing session .
If you have a Layer 3 connection, contact your service provider for
instructions.
Optional: Bidirectional Forwarding Detection (BFD)
for Cloud Router detects forwarding path outages such as link
down events, allowing for more resilient hybrid networks. To update
your BGP session to use BFD, see Configuring
BFD for Cloud Router .
If you're building redundancy with a duplicate VLAN attachment, repeat these
steps for the second attachment. Use the same Cloud Router,
but specify a different edge availability
domain. Also, when you request connections from your service provider, you
must select the same metropolitan area (city) for both attachments for them
to be redundant. For more information, see
Redundancy and SLA .
Use custom IP address ranges with Layer 2 connections
If you want to use custom IP address ranges with a Layer 2 connection, add
the --candidate-customer-router-ip-address and
--candidate-cloud-router-ip-address flags, which also support link-local
IP addresses. Note that you can't combine these flags with the
--candidate-subnets and --subnet-length flags, but you can use
--candidate-subnets for link-local IPv4 attachments with the
--candidate-customer-router-ipv6-address and
--candidate-cloud-router-ipv6-address flags. For more information
about why you might use custom IP address ranges, see
Custom IP address ranges .
For more information about prerequisites, limitations and why you might use custom IP
address ranges, see
Custom IP address ranges .
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--candidate-cloud-router-ip-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ip-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : the IPv4 CIDR
address that you want to assign to the Cloud Router end of your VLAN
attachment, like 192.0.2.1/29
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : the IPv4 CIDR
address that you want to assign to the customer router end of your VLAN
attachment
If you use IPv6 dual-stack attachments, use the following
command.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--stack-type=IPV4_IPV6 \
--candidate-cloud-router-ipv6-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ipv6-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : an IPv6 CIDR
address, like 2001:db8::1/125
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : an IPv6 CIDR
address
You can use the --candidate-cloud-router-ip-address and
--candidate-customer-router-ip-address flags alongside the
--candidate-cloud-router-ipv6-address and
--candidate-customer-router-ipv6-address flags to create an attachment
that uses both IPv4 and IPv6 custom address ranges.
Use custom IP address ranges with Layer 3 connections
If you want to use custom IP address ranges with a Layer 3 connection, you
create a VLAN attachment and then your service provider configures the
custom IP address ranges during their VLAN attachment configuration process.
If you have a Layer 3 connection, contact your service provider for
instructions.
Create encrypted VLAN attachments
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
Note: If you're deploying the 99.99% availability topology of
HA VPN over Cloud Interconnect, repeat the following procedure for both
Cloud Interconnect connection pairs. When you create the second set of VLAN
attachments for the second Cloud Interconnect connection pair, specify a
different region with another encrypted Cloud Router.
For more information about obtaining 99.99% availability with
HA VPN over Cloud Interconnect, see
SLA .
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
Click Create VLAN attachments .
Select Partner Interconnect connection .
In the Encrypt interconnect section, select Set up HA VPN over Interconnect ,
and then click Continue .
Select I already have a service provider .
On the Create VLAN attachments page, select a VPC Network .
In the Encrypted interconnect router field, select a Cloud Router
to associate with both encrypted VLAN attachments. The Cloud Router
must be in the VPC network that you want to connect to.
In addition, the Cloud Router that you specify can only be used
with encrypted VLAN attachments. This router only advertises the routes
for HA VPN and peer VPN tunnel interfaces.
If you don't have an existing Cloud Router that you can use
specifically for encrypted Cloud Interconnect, do the following:
Select Create new router .
Specify a Region .
For the BGP AS number, use 16550 .
Configure the two VLAN attachments. For VLAN attachment 1 and
VLAN attachment 2 , configure the following fields:
Name : A name for the attachment. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the attachment, such as attachment-a-zone1 or attachment-a-zone2 .
Description : Enter an optional description.
To configure a VLAN ID or a specific IP address range for the BGP session,
click VLAN ID, BGP IPs .
To specify a VLAN ID, in the VLAN ID section, select Customize .
To specify an IP address range for the BGP session, in the
Allocate BGP IP address section, select Specify a candidate
link-local range or Specify custom IP address , then enter an
IP address range or an IP address respectively.
If you do not specify a VLAN ID or manually allocate BGP IP addresses,
Google Cloud automatically assigns these values for you.
Note: The following instructions describe how to configure custom IP
address ranges for a Layer 2 connection. If you want to use custom IP
address ranges with a Layer 3 connection, you create a VLAN attachment
and then your service provider configures the custom IP address ranges
during their VLAN attachment configuration process. If you have a Layer
3 connection, contact your service provider for instructions.
Custom IP address: For more information about prerequisites,
limitations and why you might use custom IP address ranges, see
Custom IP address ranges .
In the Cloud Router IP field, enter the IPv4 CIDR
address that you want to assign to the Cloud Router end of your
VLAN attachment, like 192.0.2.1/29 . Then, in the Peer IP field, enter
the IPv4 CIDR address that you want to assign to the customer router end
of your VLAN attachment.
In the Capacity field, select the maximum bandwidth for each VLAN
attachment. The value that you select for VLAN attachment 1 is
automatically applied to VLAN attachment 2 .
If you don't select a value, Cloud Interconnect uses 10 Gbps.
The capacity that you select determines how many HA VPN
tunnels you need to deploy.
Under VPN Gateway IP addresses , select the type of IP addresses to use
for your HA VPN gateway interfaces.
If you select Internal regional IP addresses , click
Add new IP address range , and enter a Name and IP range .
For the IP range , specify a regional internal IPv4 range with a
prefix length between 26 and 29 . The prefix length determines
the number of IP addresses available for the VPN gateway interfaces and
must be based on the capacity of the attachment.
For more information, see
Assign internal IP address ranges to HA VPN gateways .
If you select External regional IP addresses , Cloud Interconnect
automatically assigns regional external IP addresses to the HA VPN
tunnel interfaces that you create on your VLAN attachment.
Both VLAN attachments must use the same type of addressing, either internal
or external, for their VPN gateway IP addresses.
When you have created both VLAN attachments, click Create . The
attachments take a few moments to create.
After creation is complete, copy the pairing keys .
You share these keys with your service provider when you request a
connection with them.
If you're requesting a Layer 3 connection from your service provider,
you can
pre-activate
the attachment by selecting Enable . Activating
attachments enables you to confirm that you're connecting to the
expected service provider. Pre-activating attachments enables you to
skip the
activation step
and lets the attachments start passing traffic immediately after your
service provider completes their configuration.
To view a list of your VLAN attachments, click OK .
The state of the VLAN attachment is PENDING_PARTNER until you
request a connection with your service provider and they complete your
VLAN attachment configuration. After the configuration is complete, the
state of the attachment changes to ACTIVE or PENDING_CUSTOMER .
To activate your VLAN attachments, see
Activate connections .
Note : If your encrypted VLAN attachment remains in the
PENDING_PARTNER or
Waiting for service provider state for an extended period of time, contact
your service provider for assistance.
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned these routes from the BGP peer. For more information, see
Update an existing session to use custom learned routes .
Optional: You can update your BGP sessions to use
MD5 authentication.
If you have a Layer 2 connection, follow the steps in
Add authentication to an existing session .
If you have a Layer 3 connection, contact your service provider for
instructions.
Do not enable
Bidirectional Forwarding Detection (BFD) .
Enabling BFD at the Cloud Interconnect level does
not provide faster failure detection for HA VPN
tunnel traffic.
After both of your VLAN attachments are active, you can complete the
HA VPN over Cloud Interconnect deployment by configuring
HA VPN for your VLAN attachments.
See Configure HA VPN over Cloud Interconnect .
Create an encrypted Cloud Router for Cloud Interconnect
in the network and region that you want to reach from your on-premises
network. Specify the --encrypted-interconnect-router flag to identify
this router to use with the HA VPN over Cloud Interconnect deployment.
The Cloud Router must have a BGP ASN of 16550 .
The following example creates a router ASN of 16550 :
gcloud compute routers create ROUTER_NAME \
--region= REGION \
--network= NETWORK_NAME \
--asn 16550 \
--encrypted-interconnect-router
Replace NETWORK_NAME with the name of your network.
Optional: Reserve a regional internal IPv4 range with a
prefix length between 26 and 29 . The prefix length determines
the number of IP addresses available for the VPN gateway interfaces
The number of addresses you need to reserve depends on the capacity
of the associated VLAN attachment.
For example, to reserve a range for the first VLAN attachment with
10-Gbps capacity:
gcloud compute addresses create ip-range-1 \
--region= REGION \
--addresses=192.168.1.0 \
--prefix-length=29 \
--network= NETWORK_NAME \
--purpose=IPSEC_INTERCONNECT
To reserve an address range for the second VLAN attachment:
gcloud compute addresses create ip-range-2 \
--region= REGION \
--addresses=192.168.2.0 \
--prefix-length=29 \
--network= NETWORK_NAME \
--purpose=IPSEC_INTERCONNECT
For more information about reserving regional internal addresses, see
Assign internal IP address ranges to HA VPN gateways .
Create the first encrypted VLAN attachment of type PARTNER ,
specifying the names of your encrypted Cloud Router and the
edge availability domain
(metro availability zone) of the VLAN attachment.
Google automatically adds an interface and a BGP peer on the Cloud Router.
The attachment generates a pairing key
that you need to share with your service provider.
The following example creates an encrypted attachment for the edge
availability domain availability-domain-1 . The command also specifies
the regional internal IP address range, ip-range-1 , to use for all
HA VPN gateway interfaces that are created on this
attachment.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME_1 \
--region= REGION \
--router= ROUTER_NAME \
--edge-availability-domain availability-domain-1 \
--encryption IPSEC \
--ipsec-internal-addresses ip-range-1
Note: You can specify any for the edge availability domain, and then
your service provider assigns the domain for you. However, to create
a redundant attachment (the second attachment), you need to wait
until your service provider configures your first VLAN attachment. You
won't know which domain to use for your redundant attachment until they
complete the configuration.
If you want to use regional external IP addresses for the
HA VPN gateway interfaces on your attachment,
omit the --ipsec-internal-addresses flag. All HA VPN
gateway interfaces are automatically assigned regional external IPv4
addresses.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME_1 \
--region= REGION \
--router= ROUTER_NAME \
--edge-availability-domain availability-domain-1 \
--encryption IPSEC
If you're requesting a Layer 3 connection from your service provider,
you can
pre-activate
the attachment by selecting --admin-enabled flag. Activating
attachments enables you to confirm that you're connecting to the
expected service provider. Pre-activating attachments enables you to
skip the
activation step
and lets the attachments start passing traffic immediately after your
service provider completes their configuration.
You cannot set a custom MTU ( --mtu ) with encrypted VLAN attachments.
All encrypted VLAN attachments must use an MTU of 1440 bytes, which is
the default value.
Use custom IP address ranges with Layer 2 connections
If you want to use custom IP address ranges with a Layer 2 connection, add
the --candidate-customer-router-ip-address and
--candidate-cloud-router-ip-address flags, which also support link-local
IP addresses. Note that you can't combine these flags with the
--candidate-subnets and --subnet-length flags, but you can use
--candidate-subnets for link-local IPv4 attachments with the
--candidate-customer-router-ipv6-address and
--candidate-cloud-router-ipv6-address flags. For more information
about why you might use custom IP address ranges, see
Custom IP address ranges .
For more information about prerequisites, limitations and
why you might use custom IP address ranges, see
Custom IP address ranges .
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--encryption IPSEC \
--candidate-cloud-router-ip-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ip-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : the IPv4 CIDR
address that you want to assign to the Cloud Router end of your VLAN
attachment, like 192.0.2.1/29
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : the IPv4 CIDR
address that you want to assign to the customer router end of your VLAN
attachment
If you use IPv6 dual-stack attachments, use the following
command.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME \
--project= PROJECT_ID \
--region= REGION \
--router= ROUTER_NAME \
--stack-type=IPV4_IPV6 \
--encryption IPSEC \
--candidate-cloud-router-ipv6-address= CANDIDATE_CLOUD_ROUTER_IP_ADDRESS \
--candidate-customer-router-ipv6-address= CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS
Replace the following:
CANDIDATE_CLOUD_ROUTER_IP_ADDRESS : an IPv6 CIDR
address, like 2001:db8::1/125
CANDIDATE_CUSTOMER_ROUTER_IP_ADDRESS : an IPv6 CIDR
address
You can use the --candidate-cloud-router-ip-address and
--candidate-customer-router-ip-address flags alongside the
--candidate-cloud-router-ipv6-address and
--candidate-customer-router-ipv6-address flags to create an attachment
that uses both IPv4 and IPv6 custom address ranges.
Use custom IP address ranges with Layer 3 connections
If you want to use custom IP address ranges with a Layer 3 connection, you
create a new VLAN attachment and then your service provider configures the
custom IP address ranges during their VLAN attachment configuration process.
If you have a Layer 3 connection, contact your service provider for
instructions.
Create the second encrypted VLAN attachment, specifying the names
of your second Cloud Interconnect connection and the
Cloud Router for Cloud Interconnect.
The following example creates an encrypted attachment for edge
availability domain availability-domain-2 . The
command also specifies the regional internal IP address range,
ip-range-2 , to use for all HA VPN gateway
interfaces that are created on this attachment.
gcloud compute interconnects attachments partner create ATTACHMENT_NAME_2
--region= REGION
--router= ROUTER_NAME
--edge-availability-domain availability-domain-2
--encryption IPSEC
--ipsec-internal-addresses ip-range-2
When creating the second VLAN attachment, you must specify the same type
of addressing scheme, either internal or external,
that you used when you created the first attachment. Each VLAN attachment
must be assigned a different internal address range. You can only specify
one IP range for each attachment.
Describe the attachments to retrieve their pairing keys; you need to share
these keys with your service provider when you request a connection with
them:
For the first VLAN attachment:
gcloud compute interconnects attachments describe ATTACHMENT_NAME_1 \
--region= REGION
The output is similar to the following:
adminEnabled: false
creationTimestamp: '2021-12-01T08:29:09.886-08:00'
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
encryption: IPSEC
id: '7976913826166357434'
kind: compute#interconnectAttachment
name: ATTACHMENT_NAME_1
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/ REGION /1
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/interconnect-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME_1
stackType: IPV4_ONLY
state: PENDING_PARTNER
type: PARTNER
For the second VLAN attachment:
gcloud compute interconnects attachments describe ATTACHMENT_NAME_2 \
--region= REGION
The output is similar to the following:
adminEnabled: false
creationTimestamp: '2021-12-01T08:29:09.886-08:00'
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_2
encryption: IPSEC
id: '7976913826166334235'
kind: compute#interconnectAttachment
name: ATTACHMENT_NAME_2
pairingKey: 9f5fg371e-72a3-40b5-b844-2e3efefaee59/ REGION /2
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/interconnect-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME_2
stackType: IPV4_ONLY
state: PENDING_PARTNER
type: PARTNER
The pairingKey fields contain the pairing keys that you need to
share with your service provider. Treat the pairing keys as sensitive
information until your VLAN attachments are configured.
The state of the VLAN attachment is PENDING_PARTNER until you
request a connection with your service provider and they complete your
VLAN attachment configuration. After the configuration is complete, the
state of the attachment changes to ACTIVE or PENDING_CUSTOMER .
To activate your VLAN attachments, see
Activate connections .
Note : If your encrypted VLAN attachment remains in the
PENDING_PARTNER or
Waiting for service provider state for an extended period of time, contact
your service provider for assistance.
Optional: You can update your BGP session to use custom learned routes.
When you use this feature, the Cloud Router behaves as if it
learned the custom learned routes from the BGP peer. For more
information, see
Update an existing session to use custom learned routes .
Optional: You can update your BGP sessions to use
MD5 authentication.
If you have a Layer 2 connection, follow the steps in
Add authentication to an existing session .
If you have a Layer 3 connection, contact your service provider for
instructions.
Do not enable Bidirectional Forwarding Detection (BFD) .
Enabling BFD at the Cloud Interconnect level does
not provide faster failure detection for HA VPN
tunnel traffic.
After both of your VLAN attachments are active, you can complete the
HA VPN over Cloud Interconnect deployment by configuring
HA VPN for your VLAN attachments.
See Configure HA VPN over Cloud Interconnect .
Restrict Partner Interconnect usage
By default, any VPC network can use Cloud Interconnect.
To control which VPC networks can use Cloud Interconnect, you can set an
organization policy. For more information, see
Restrict Cloud Interconnect usage .
What's next
To modify VLAN attachments,
see Modify VLAN attachments .
To configure on-premises routers for Dedicated Interconnect,
see Configure on-premises routers .
Previous
arrow_back
Provisioning overview
Next
Request connections
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
