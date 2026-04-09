---
title: "Establish 99.9% availability for Partner Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability
  title: "Establish 99.9% availability for Partner Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Establish 99.9% availability for Partner Interconnect | Google Cloud Documentation
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
Requirements Example topology
Create a 99.9% topology Create the VPC network
Create a Cloud Router
Create VLAN attachments
Retrieve pairing keys
Request connections from your service provider
Activate VLAN attachments
Configure routers
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Establish 99. 9% availability for Partner Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Requirements Example topology
Create a 99.9% topology Create the VPC network
Create a Cloud Router
Create VLAN attachments
Retrieve pairing keys
Request connections from your service provider
Activate VLAN attachments
Configure routers
What's next
Note: For production-level applications, see
Establish 99.99% availability for Partner Interconnect .
Google recommends this configuration for high availability.
In this tutorial, you use Partner Interconnect to create and
configure resources to achieve 99.9%
availability . This
topology is suitable for non-critical applications that can tolerate some
downtime. For example, your organization might do batch uploads for which the
timing of the operation isn't critical. If a connection isn't available, the
operation continues when connectivity is restored.
For Cloud Interconnect terminology used on this page, see
Key terms .
For information about creating redundant Cloud Interconnect connections that have
sufficient capacity in a failover scenario, see
Best practices .
Note: Before you begin, you must have an existing connection with a supported
service provider .
Requirements
The following resources and settings are required to achieve 99.9%
availability:
At least two VLAN attachments in a single
Google Cloud region , in separate
edge availability domains (metro availability zones).
Note: The Google Cloud console automatically assigns an edge availability domain
to each attachment when you configure a redundant pair of attachments.
However, if you use the API, you must manually assign each attachment to a
different edge availability domain.
The attachments must connect in one metropolitan area (metro). For
more information about choosing a Cloud Interconnect connection location, see
Requesting connections .
At least one Cloud Router, connected to both VLAN attachments.
Note: When Cloud Router is connected to VLAN attachments in
different edge availability domains, Google Cloud uses two
software tasks
for redundancy.
Even though only one Cloud Router is required, topologies with
two Cloud Routers, one for each VLAN attachment, also meet the
SLA requirement.
Make sure that your Cloud Router advertises the same
prefixes on all links, possibly with different priorities.
Depending on your hardware and availability requirements, you might have one
or more routers in your on-premises network.
Example topology
This example topology uses the following resource names, regions, and Cloud Interconnect
connection locations. As you walk through the tutorial, replace these values
with your own.
Region
Router name
VLAN attachment name
Connection location
Edge availability domain
us-central1
router-central
attach-central-a
Dallas
1
us-central1
router-central
attach-central-b
Dallas
2
The following diagram shows two layer 2 connections in two different
edge availability domains in a single metro: Dallas - domain 1 and Dallas -
domain 2 .
The Cloud Router is in the vpc1
network in the us-central1 region. For layer 2, users configure Border
Gateway Protocol (BGP) sessions on their on-premises routers to
Cloud Router.
Redundant connections for 99.9% availability using layer 2 (click to enlarge)
Similar to the layer 2 topology, the following layer 3 topology shows two
Cloud Interconnect connections in two different edge availability domains in
a single metro. The Cloud Router is in
the vpc1 network in the us-central1 region. For layer 3, the service
provider configures the BGP sessions.
Redundant connections for 99.9% availability using layer 3 (click to enlarge)
Create a 99.9% topology
The following sections walk through the steps for creating this topology.
To create a topology that's tailored for you, replace the sample input
values with your own. For example, replace the vpc1 network name with your Virtual Private Cloud (VPC) network name.
Create the VPC network
For the vpc1 network, create a network with custom subnets and set its dynamic
routing mode to global. For more information, see
Creating a custom mode network
in the VPC documentation.
Console gcloud
More
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
For Name , enter vpc1 .
For Subnet creation mode , select Custom .
Specify the details of your subnet:
Name : Enter subnet-uscentral1 .
Region : Select us-central1 .
IP address range : Specify an IP range, such as
192.168.1.0/24 . Use a range that doesn't overlap with your
on-premises network.
Click Add subnet .
Specify the details of your second subnet:
Name : Enter subnet-useast4 .
Region : Select us-east4 .
IP address range : Specify an IP range, such as
192.168.2.0/24 . Use a range that doesn't overlap with your
on-premises network.
In the Dynamic routing mode section, select Global .
Click Create .
Create a custom subnet:
gcloud compute networks create vpc1 \
--subnet-mode custom \
--bgp-routing-mode global
Specify the subnet prefixes for the us-central1 and us-east4 regions:
gcloud compute networks subnets create subnet-uscentral1 \
--network vpc1 \
--region us-central1 \
--range 192.168.1.0/24
gcloud compute networks subnets create subnet-useast4 \
--network vpc1 \
--region us-east4 \
--range 192.168.2.0/24
Create a Cloud Router
Create a Cloud Router. For
Partner Interconnect, all the Cloud Routers must have a
local ASN of 16550 .
Console gcloud
More
In the Google Cloud console, go to the Create a
Cloud Router page.
Go to Create a Cloud Router
Specify the Cloud Router details:
Name : Enter router-central for the name of the
Cloud Router.
Network : Select vpc1 , which is the name of the
network where the on-premises network extends to.
Region : Select us-central1 , which is the region where
the Cloud Router is configured, as shown in the example
topology.
Google ASN : Enter 16550 , which is required for
Partner Interconnect.
Under Routes , select Advertise all subnets visible to the
Cloud Router (default) , and then click Create .
Create a Cloud Router in the vpc1 network in the
us-central1 region; use ASN 16550 :
gcloud compute routers create router-central \
--asn 16550 \
--network vpc1 \
--region us-central1
Create VLAN attachments
Create two VLAN attachments and pair them with the Cloud Router:
attach-central-a
attach-central-b
Note: For layer 3 connections, you can
pre-activate
your VLAN attachments so that you don't have to come back to Google Cloud
and activate them after your service provider has configured them. For this
tutorial, the VLAN attachments aren't pre-activated because pre-activation
skips a verification step when working with Partner Interconnect
VLAN attachments.
Console gcloud
More
In the Google Cloud console, go to the Interconnect Hybrid
Connectivity page.
Go to Interconnect Hybrid Connectivity
Click Get started .
Select Partner Interconnect , and then click Continue .
Select I already have a service provider .
Select Create a redundant pair of VLAN attachments (recommended) .
For the Network and Region fields, select the vpc1 network and
the us-central1 region, which specifies the VPC network
and region to connect to.
Specify the details of the first VLAN attachment (VLAN A):
Cloud Router : Select router-central .
VLAN attachment name : Enter attach-central-a . This name is
displayed in the Google Cloud console and is used by the
Google Cloud CLI to reference the attachment.
Specify the details of the second VLAN attachment (VLAN B):
Cloud Router : Select router-central .
VLAN attachment name : Enter attach-central-b .
Click Create to create the attachments, which takes a few moments to
complete.
Click OK to view a list of your VLAN attachments.
Create two attachments:
gcloud compute interconnects attachments partner create attach-central-a \
--router router-central \
--region us-central1 \
--edge-availability-domain availability-domain-1
gcloud compute interconnects attachments partner create attach-central-b \
--router router-central \
--region us-central1 \
--edge-availability-domain availability-domain-2
Retrieve pairing keys
After you create your VLAN attachments, Google Cloud generates pairing
keys for each one. Pairing keys enable service providers to identify your VLAN
attachment without you having to share information about your project or
resource names.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Find the attach-central-a VLAN attachment, and then click View
instructions .
The Google Cloud console shows the pairing key for the attachment.
Copy and record the key; you'll share these keys with your service
provider when you request a connection with them.
Click OK to return to the list of VLAN attachments.
Retrieve the pairing keys for the attach-central-b VLAN attachment.
Retrieve the VLAN attachment pairing keys by describing each one; use
these keys to request connections with your service provider:
gcloud compute interconnects attachments describe attach-central-a \
--region us-central1
The previous command outputs the following information:
adminEnabled: false
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_1
creationTimestamp: '2017-12-01T08:29:09.886-08:00'
id: '7976913826166357434'
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: attach-central-a
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/1
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attach-central-a
state: PENDING_PARTNER
type: PARTNER
Record the value of the pairingKey for each VLAN attachment.
Request connections from your service provider
Contact your service provider and request two connections, one for each
VLAN attachment. The service provider requires the pairing key, capacity,
and location for each attachment.
The location of each attachment must be in a single location (city). In
this example, attach-central-a and attach-central-b are connected to Dallas.
After the connection configuration is complete, you receive an email notification
indicating that you can activate your attachments.
Activate VLAN attachments
After your service provider configures your VLAN attachments, you must activate
them before they can start passing traffic. If you pre-activated your
attachments, you can skip this step.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Select the attach-central-a VLAN attachment to view its details page.
If the status of your attachment is Waiting for service provider , wait
until your service provider has completed the VLAN configuration.
Review the Interconnect information to check that the expected
service provider configured the VLAN attachment.
Click Activate to activate the attachment.
Go back to the VLAN attachments tab and activate the other attachment.
Describe each VLAN attachment to verify whether your service provider
completed configuring them:
gcloud compute interconnects attachments describe attach-central-a \
--region us-central1 \
--router router-central \
--format '(name,state,partnerMetadata)'
gcloud compute interconnects attachments describe attach-central-b \
--region us-central1 \
--router router-central \
--format '(name,state,partnerMetadata)'
After your service provider configures your VLAN attachments, the state
of your attachments changes from PENDING_PARTNER to PENDING_CUSTOMER .
If the state is still PENDING_PARTNER , wait until your service
provider has completed the VLAN configuration.
Check the partnerMetadata field to verify that the correct service
provider configured your VLAN attachments.
If an unexpected third party configured your VLAN attachment, delete
the attachment and then create a new one, which generates a new pairing
key. Use the new pairing key to request another connection with your
service provider.
If the correct service provider has configured your VLAN attachments,
activate them by using the --adminEnabled flag:
gcloud compute interconnects attachments partner update attach-central-a \
--region us-central1 \
--admin-enabled
gcloud compute interconnects attachments partner update attach-central-b \
--region us-central1 \
--admin-enabled
Configure routers
Google automatically adds a BGP peer on the Cloud Router. For layer 2
connections, you must add your on-premises ASN to each BGP peer. For
layer 3 connections, you don't need to do anything; Google automatically
configures your Cloud Router with your service provider's ASN.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Select the attach-central-a VLAN attachment to view its details page.
Click Configure BGP to configure the Cloud Router that's
associated with this VLAN attachment.
In the Peer ASN field, add the ASN of your on-premises router.
Click Save and continue .
Describe the Cloud Router that's associated with the
attach-central-a VLAN attachment. In the output, find the name of the
automatically created BGP peer that's associated with your VLAN
attachment. The values of ipAddress and peerIpAddress of the BGP peer
must match the values of cloudRouterIpAddress and
customerRouterIpAddress of your attachment.
gcloud compute routers describe router-central \
--region us-central1
bgp:
advertiseMode: DEFAULT
asn: 16550
bgpPeers:
— interfaceName: auto-ia-if-attachment-central-a-c2c53a710bd6c2e
ipAddress: 169.254.67.201
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-bgp-attachment-central-a-c2c53a710bd6c2e
peerIpAddress: 169.254.67.202
creationTimestamp: '2018-01-25T07:14:43.068-08:00'
description: 'test'
id: '4370996577373014668'
interfaces:
— ipRange: 169.254.67.201/29
linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/us-central1/interconnectAttachments/customer-attachment1-partner
managementType: MANAGED_BY_ATTACHMENT
name: auto-ia-if-attachment-central-a-c2c53a710bd6c2e
kind: compute#router
name: partner
network: https://www.googleapis.com/compute/v1/projects/customer-project/global/networks/vpc1
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central
Update the BGP peer with your on-premises router's ASN:
gcloud compute routers update-bgp-peer router-central \
--peer-name auto-ia-bgp-attachment-central-c2c53a710bd6c2e \
--peer-asn ON_PREM_ASN \
--region us-central1
After the BGP sessions are established, you can pass between your
VPC network and on-premises network through your service
provider's network.
What's next
To learn more about each of these steps, see the
Partner Interconnect provisioning overview .
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
