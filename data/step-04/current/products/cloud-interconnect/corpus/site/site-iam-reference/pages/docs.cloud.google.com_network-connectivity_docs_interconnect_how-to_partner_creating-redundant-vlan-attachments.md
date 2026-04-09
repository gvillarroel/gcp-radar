---
title: "Duplicate a VLAN attachment for redundancy \_|\_ Cloud Interconnect \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-redundant-vlan-attachments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-redundant-vlan-attachments
  title: "Duplicate a VLAN attachment for redundancy \_|\_ Cloud Interconnect \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Duplicate a VLAN attachment for redundancy | Cloud Interconnect | Google Cloud Documentation
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
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Duplicate a VLAN attachment for redundancy
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next?
If you have an existing VLAN attachment for a Partner Interconnect
connection, you can create a second one to build redundancy. We recommend
redundancy so that if one VLAN attachment fails, the other one can continue
to serve traffic.
To create a redundant VLAN attachment, it must connect to Google Cloud in the same
metropolitan area (city) as the existing VLAN attachment but in a different
edge availability domain
(metro availability zone).
Note: To build a redundant topology, you must create and configure additional
resources. For more information, see
Redundancy and SLA .
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
Click Add VLAN attachment .
Select Partner Interconnect , and then click Continue .
Click I already have a service provider .
Under Redundancy , select Add a redundant VLAN to an existing VLAN .
In the Select VLAN attachment field, select the attachment that you
want to build redundancy for. The new redundant attachment uses the
same VPC network and region as the existing one.
Specify the details of your VLAN attachments:
Cloud Router : Choose the Cloud Router that's associated
with the existing attachment. The Cloud Router must have an
ASN of 16550 . If you don't have an existing Cloud Router
that you can use,
create one
with an ASN of 16550 .
VLAN attachment name : A name for the attachment. This name
is displayed in the Google Cloud console and is used by the
Google Cloud CLI to reference the attachment, such as my-attachment .
Click Create to create the attachments, which takes a few minutes.
After creation is complete, copy the pairing keys. You need to share
these keys with your service provider when you request a connection with
them.
Click OK to view a list of your VLAN attachments.
Use the existing Cloud Router in the network and region
that contains the existing VLAN attachment. The Cloud Router must
have an ASN of 16550 . If you don't have an existing Cloud Router
that you can use,
create one
before you create a VLAN attachment. When you create the
Cloud Router, use 16550 for the BGP ASN.
Describe your existing VLAN attachment to view its details. Record its
edge availability domain (metro availability zone).
Create a VLAN attachment of type PARTNER , specifying the name of your
duplicate Cloud Router and a different edge availability domain
from the existing VLAN attachment:
gcloud compute interconnects attachments partner create my-second-attachment \
--region= REGION \
--router= ROUTER_NAME \
--edge-availability-domain= AVAILABILITY_DOMAIN
Replace the following:
REGION : the region that your VLAN attachment is
located in
ROUTER_NAME : the name of your duplicate
Cloud Router
AVAILABILITY_DOMAIN : an edge availability domain
that's different from your existing VLAN attachment
Describe the attachment to retrieve its pairing key; you need to share
this key with your service provider when you request a connection with
them:
gcloud compute interconnects attachments describe my-second-attachment \
--region= REGION
The output is similar to the following:
adminEnabled: false
edgeAvailabilityDomain: AVAILABILITY_DOMAIN_2
creationTimestamp: '2017-12-01T08:29:09.886-08:00'
id: '7976913826166357434'
kind: compute#interconnectAttachment
labelFingerprint: 42WmSpB8rSM=
name: my-second-attachment
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/my-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/my-second-attachment
state: PENDING_PARTNER
type: PARTNER
The pairingKey field contains the pairing key that you need to
share with your service provider. Treat the pairing key as sensitive
information until your VLAN attachment is configured.
The state of the VLAN attachment is PENDING_PARTNER until you
request a connection with your service provider and they complete
its configuration. After the configuration is complete, the state of
the attachment changes to ACTIVE .
Important: When you request a redundant connection from your service provider,
choose the same metropolitan area that contains your existing VLAN
attachment. You can find the existing attachment's location from your service
provider.
What's next?
To request a connection from your service provider, see
Request connections .
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
