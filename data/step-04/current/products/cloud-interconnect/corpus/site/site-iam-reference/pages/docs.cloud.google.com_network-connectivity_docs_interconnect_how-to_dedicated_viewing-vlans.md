---
title: "View VLAN attachments and groups \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/viewing-vlans
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/viewing-vlans
  title: "View VLAN attachments and groups \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View VLAN attachments and groups | Cloud Interconnect | Google Cloud Documentation
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
View VLAN attachments and their details
View VLAN attachment groups and their details
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
View VLAN attachments and groups
Stay organized with collections
Save and categorize content based on your preferences.
On this page
View VLAN attachments and their details
View VLAN attachment groups and their details
What's next
You can view a list of all the VLAN attachments in your project and the details
about each one. For example, you can view the name of an attachment, whether
it's an attachment for Dedicated Interconnect or
Partner Interconnect, and its associated Cloud Router.
You can also check its Dataplane version.
View VLAN attachments and their details
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
INTERCONNECT: example-partner-interconnect
ROUTER: my-router
ATTACHMENT_GROUP: example-attachment-group
NAME: my-second-attachment
REGION: us-west1
TYPE: DEDICATED
INTERCONNECT: example-dedicated-interconnect
ROUTER: my-second-router
ATTACHMENT_GROUP: example-attachment-group
...
Describe the VLAN attachment to view more information about it:
gcloud compute interconnects attachments describe my-attachment
The output is similar to the following:
adminEnabled: true
attachmentGroup: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnectAttachmentGroups/example-attachment-group
bandwidth: BPS_10G
cloudRouterIpAddress: 169.254.194.169/29
creationTimestamp: '2022-03-04T10:08:51.610-08:00'
customerRouterIpAddress: 169.254.194.170/29
dataplaneVersion: 2
id: '8652605636960316252'
interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/example-dedicated-interconnect
kind: compute#interconnectAttachment
mtu: 1460
name: my-second-attachment
operationalStatus: OS_ACTIVE
privateInterconnectInfo:
tag8021q: 1101
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1/routers/my-second-router
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1/interconnectAttachments/my-second-attachment
state: ACTIVE
type: DEDICATED
vlanTag8021q: 1101
View VLAN attachment groups and their details
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
VLAN attachments tab.
Go to VLAN attachments
In the Attachment groups field, click the name of an attachment group
to see more information about that group's details.
Use the following command to list all VLAN attachment groups that are in
your project:
gcloud compute interconnects attachments groups list
The output is similar to the following:
NAME ATTACHMENTS INTENDED_SLA CONFIGURED_SLA
attachment-group-1 PRODUCTION_NON_CRITICAL NO_SLA
attachment-group-2 us-east4/attachment-1 PRODUCTION_NON_CRITICAL PRODUCTION_NON_CRITICAL
us-east4/attachment-2
attachment-group-3 us-east4/attachment-3 PRODUCTION_CRITICAL PRODUCTION_CRITICAL
us-east4/attachment-4
us-west2/attachment-5
us-west2/attachment-6
To see more information about a specific VLAN attachment group, use the
following command, replacing GROUP_NAME with the name
of the attachment group.
gcloud compute interconnects attachments groups describe GROUP_NAME
The output is similar to the following:
attachments:
us-east4/attachment-1:
attachment: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-east4/interconnectAttachments/attachment-1
us-east4/attachment-2:
attachment: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-east4/interconnectAttachments/attachment-2
configured:
availabilitySla:
effectiveSla: PRODUCTION_NON_CRITICAL
description: my attachment group
intent:
availabilitySla: PRODUCTION_NON_CRITICAL
kind: compute#interconnectAttachmentGroup
logicalStructure:
regions:
- metros:
- facilities:
- facility: '1'
zones:
- attachments:
- https://www.googleapis.com/compute/v1/projects/my-project/regions/us-east4/interconnectAttachments/attachment-1
zone: zone1
- attachments:
- https://www.googleapis.com/compute/v1/projects/my-project/regions/us-east4/interconnectAttachments/attachment-2
zone: zone2
metro: IAD
region: us-east4
name: attachment-group-2
selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/interconnectAttachmentGroups/attachment-group-2
What's next
To create a Dedicated Interconnect connection, see the
Dedicated Interconnect provisioning overview .
To learn more about Cloud Interconnect options, see the
Cloud Interconnect overview .
To help you solve common issues that you might encounter when using
Dedicated Interconnect, see
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
