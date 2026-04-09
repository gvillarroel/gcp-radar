---
title: "View VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/viewing-vlans
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/viewing-vlans
  title: "View VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View VLAN attachments | Cloud Interconnect | Google Cloud Documentation
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
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
View VLAN attachments
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next
You can view a list of all the VLAN attachments in your project and the details
about each one. For example, you can view the name of an attachment, whether
it's an attachment for Dedicated Interconnect or
Partner Interconnect, and its associated Cloud Router.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
Select a VLAN attachment to view its details.
List all VLAN attachments that are in your project:
gcloud compute interconnects attachments list
The output is similar to the following:
NAME: my-attachment
REGION: us-east1
TYPE: PARTNER
INTERCONNECT: some-partner-interconnect
ROUTER: my-router
NAME: my-second-attachment
REGION: us-west1
TYPE: DEDICATED
INTERCONNECT: some-dedicated-interconnect
ROUTER: my-second-router
...
Describe the VLAN attachment to view more information about it:
gcloud compute interconnects attachments describe NAME
Replace NAME with the name of your VLAN attachment.
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
name: NAME
pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2
partnerMetadata:
interconnectName: New York (2)
partnerName: My Service Provider Inc
portalUrl: https://service-provider-portal.com
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/my-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/ NAME
stackType: IPV4_ONLY
state: PENDING_CUSTOMER
type: PARTNER
vlanTag8021q: 1000
The output is similar to the following for IPv4 and IPv6 (dual stack)
VLAN attachments:
adminEnabled: true
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
name: partner-attachment
partnerMetadata:
interconnectName: New York (2)
partnerName: Partner Inc
portalUrl: https://partner-portal.com
region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/us-central1
selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/us-central1/interconnectAttachments/customer-attachment
stackType: IPV4_IPV6
state: ACTIVE
type: PARTNER
vlanTag8021q: 1000
Note: The VLAN ID for the connection is for the Google Cloud side of the connection.
To configure your on-premises router for Layer 2 connections, use the VLAN ID
provided by your service provider.
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
