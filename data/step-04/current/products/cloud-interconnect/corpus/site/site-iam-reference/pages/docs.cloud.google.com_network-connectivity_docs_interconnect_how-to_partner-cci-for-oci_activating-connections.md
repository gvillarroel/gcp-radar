---
title: "Activate connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/activating-connections
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/activating-connections
  title: "Activate connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Activate connections | Cloud Interconnect | Google Cloud Documentation
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
Troubleshooting
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Activate connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Troubleshooting
After Oracle Cloud Infrastructure (OCI) configures your
VLAN attachment for a Partner Cross-Cloud Interconnect for OCI connection, you must
activate it before the attachment can start passing traffic. Activating a VLAN
attachment lets you check that you're connecting successfully with OCI
before the attachment starts passing traffic. It also lets you control
when the attachment starts passing traffic.
If you pre-activate
your VLAN attachment, the attachment is automatically activated after it's
configured.
For definitions of terms used on this page, see
Cloud Interconnect key terms .
To help you solve common issues that you might encounter when using
Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI), see
Troubleshooting .
To activate your VLAN attachment, follow these steps.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment to view its details page.
If the status of your attachment is Waiting for service provider , make
sure that you have created a FastConnect virtual circuit using the
attachments pairing key.
Note: If you have created a valid virtual circuit and the attachment
status continues in the PENDING_PARTNER or
Waiting for service provider state, open a support ticket with OCI.
Review the Interconnect information to check that
OCI has configured the VLAN attachment.
If an unexpected third party pairs with your VLAN attachment, delete the
VLAN attachment and
then create a new one, which generates a new pairing key. Use the new
pairing key to request another connection from OCI.
Note: The VLAN ID for the connection is for the Google Cloud
side of the connection.
Click Activate .
Describe the VLAN attachment to view its details; the state of the
attachment must be PENDING_CUSTOMER before you can activate it:
gcloud compute interconnects attachments describe ATTACHMENT_NAME \
--region= REGION
Replace the following:
ATTACHMENT_NAME : the name of your VLAN
attachment
REGION : the region that your VLAN attachment is
located in
The output is similar to the following for IPv4 VLAN attachments:
adminEnabled: false
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
bandwidth: BPS_1G
cloudRouterIpAddress: 169.254.67.201/29
creationTimestamp: '2017-12-01T08:29:09.886-08:00'
customerRouterIpAddress: 169.254.67.202/29
id: '7976913826166357434'
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: ATTACHMENT_NAME
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/ REGION /2
partnerMetadata:
interconnectName: New York (2)
partnerName: My Service Provider Inc
portalUrl: https://service-provider-portal.com
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/my-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /interconnectAttachments/my-attachment
stackType: IPV4_ONLY
state: PENDING_CUSTOMER
type: PARTNER
vlanTag8021q: 1000
The output is similar to the following for IPv4 and IPv6 (dual stack)
VLAN attachments:
adminEnabled: false
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
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
name: ATTACHMENT_NAME
partnerMetadata:
interconnectName: New York (2)
partnerName: Partner Inc
portalUrl: https://partner-portal.com
region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION
selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/customer-attachment
stackType: IPV4_IPV6
state: PENDING_CUSTOMER
type: PARTNER
vlanTag8021q: 1000
After OCI has configured your VLAN attachment, the state of
your attachment changes from PENDING_PARTNER to PENDING_CUSTOMER .
If the state is still PENDING_PARTNER , wait until OCI has completed
the VLAN configuration.
Note: The VLAN ID for the connection is for the Google Cloud side of the
connection.
View the partnerMetadata field to check that it shows OCI.
If an unexpected third party pairs with your VLAN attachment, delete the
VLAN attachment and
then create a new one, which generates a new pairing key. Use the new
pairing key to request another connection from OCI.
Activate the attachment by using the --adminEnabled flag:
gcloud compute interconnects attachments partner update ATTACHMENT_NAME \
--region= REGION \
--admin-enabled
After activation, your VLAN attachment can start passing traffic. OCI supplies
their autonomous system number (ASN) when configuring your
VLAN attachment, and then Google automatically adds the ASN to the Border
Gateway Protocol (BGP) session on your Cloud Router.
To configure Cloud Router, follow these steps.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Select the VLAN attachment that you activated to view its details page.
Click Configure BGP .
In the Peer ASN field, add the ASN of your on-premises router.
Click Save and continue .
For each of the BGP peers associated with your VLAN attachments, describe
the Cloud Router associated with your VLAN attachment, and then
find the name of the automatically created BGP peer that's associated
with your VLAN attachment.
Run the following command:
gcloud compute routers describe ROUTER_NAME \
--region= REGION
Replace the following:
ROUTER_NAME : the name of your Cloud Router
REGION : the region in which your Cloud Router
is located
The output is similar to the following for IPv4 VLAN attachments:
bgp:
advertiseMode: DEFAULT
asn: 16550
bgpPeers:
- interfaceName: auto-ia-if-my-attachment-c2c53a710bd6c2e
ipAddress: 169.254.67.201
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-bgp-my-attachment-c2c53a710bd6c2e
peerIpAddress: 169.254.67.202
creationTimestamp: '2018-01-25T07:14:43.068-08:00'
description: 'test'
id: '4370996577373014668'
interfaces:
- ipRange: 169.254.67.201/29
linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/ REGION /interconnectAttachments/my-attachment-partner
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-if-my-attachment-c2c53a710bd6c2e
kind: compute#router
name: partner
network: https://www.googleapis.com/compute/v1/projects/customer-project/global/networks/default
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/my-router
The output is similar to the following for IPv4 and IPv6 (dual stack)
VLAN attachments:
bgp:
advertiseMode: DEFAULT
asn: 16550
bgpPeers:
- enableIpv4: true
enableIpv6: false
ipAddress: 169.254.67.201
interfaceName: auto-ia-if-my-attachment-0098154607ecb20
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-bgp4-my-attachment-0098154607ecb20
peerIpAddress: 169.254.67.202
- enableIpv4: false
enableIpv6: true
ipAddress: 2600:2d00:0:1::1
interfaceName: auto-ia-if6-my-attachment-0098154607ecb20
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-bgp6-my-attachment-0098154607ecb20
peerIpAddress: 2600:2d00:0:1::2
creationTimestamp: '2018-03-29T09:58:25.476-07:00'
description: ''
id: '466013140766729694'
interfaces:
- ipRange: 169.254.67.201/29
linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/ REGION /interconnectAttachments/customer-attachment
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-if-customer-attach-0098154607ecb20
- ipRange: 2600:2d00:0:1::1/125
linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/ REGION /interconnectAttachments/customer-attachment
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-if6-customer-attach-0098154607ecb20
kind: compute#router
name: customer-router
network: https://www.googleapis.com/compute/alpha/projects/customer-project/global/networks/default
region: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/ REGION
selfLink: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/ REGION /routers/customer-router
Update each BGP peer with your on-premises router's ASN.
For the IPv4 BGP peer, run the following command:
gcloud compute routers update-bgp-peer ROUTER_NAME \
--peer-name= IPV4_PEER_NAME \
--peer-asn= ON_PREM_ASN \
--region= REGION
Replace the following:
IPV4_PEER_NAME : the name of the bgpPeers entry
with enableIpv4: true from the output from the
gcloud compute routers describe command
ON_PREM_ASN : your on-premises router's ASN
For the IPv6 BGP peer, run the following command:
gcloud compute routers update-bgp-peer ROUTER_NAME \
--peer-name= IPV6_PEER_NAME \
--peer-asn= ON_PREM_ASN \
--region= REGION
Replace IPV6_PEER_NAME with the name of the
bgpPeers entry with enableIpv6: true from the output from the
gcloud compute routers describe command.
Troubleshooting
For additional guidance, see
Troubleshooting .
Previous
arrow_back
Request OCI connections
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
