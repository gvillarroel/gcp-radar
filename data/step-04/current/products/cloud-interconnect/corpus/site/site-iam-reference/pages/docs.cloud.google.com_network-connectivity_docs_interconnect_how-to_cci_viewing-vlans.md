---
title: "View VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/viewing-vlans
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/viewing-vlans
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
View VLAN attachments and their details
Check the Dataplane version of an attachment
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
View VLAN attachments and their details
Check the Dataplane version of an attachment
What's next
You can view a list of all the VLAN attachments in your project and details
about each one. For example, you can view the name of an attachment,
the name of its associated Cloud Router, and whether
it's an attachment for Cross-Cloud Interconnect or
another Cloud Interconnect variant. You can also check the
Dataplane version of the attachment.
View VLAN attachments and their details
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
VLAN attachments for Cross-Cloud Interconnect are
listed as attachments of type Dedicated (Cross-Cloud) .
Select a VLAN attachment to view its details.
To list all VLAN attachments in your project, use the
gcloud compute interconnects attachments list command :
gcloud compute interconnects attachments list
You should see output similar to the following.
VLAN attachments for Cross-Cloud Interconnect
connections are listed as attachments of type DEDICATED :
NAME: my-vlan-attachment
REGION: us-east4
TYPE: DEDICATED
INTERCONNECT: my-connection
ROUTER: my-router
NAME: my-vlan-attachment-2
REGION: us-east4
TYPE: DEDICATED
INTERCONNECT: my-connection
ROUTER: my-router
...
To view more information about an attachment, use the
gcloud compute interconnects attachments describe command :
gcloud compute interconnects attachments describe ATTACHMENT_NAME \
--region= REGION
Replace the following:
ATTACHMENT_NAME : the name of your VLAN attachment
REGION : the region where the attachment is located
You should see output similar to the following:
adminEnabled: true
bandwidth: BPS_1G
cloudRouterIpAddress: 169.254.245.153/29
creationTimestamp: '2023-03-17T23:32:27.087-07:00'
customerRouterIpAddress: 169.254.245.154/29
dataplaneVersion: 2
encryption: NONE
id: '4461230117430551572'
interconnect: https://www.googleapis.com/compute/v1/projects...my-connection
kind: compute#interconnectAttachment
mtu: 1500
name: my-vlan-attachment
operationalStatus: OS_ACTIVE
privateInterconnectInfo:
tag8021q: 246
region: https://www.googleapis.com/compute/v1/projects...us-east4
router: https://www.googleapis.com/compute/v1/projects...my-router
selfLink: https://www.googleapis.com/compute/v1/projects...my-vlan-attachment
stackType: IPV4_ONLY
state: ACTIVE
type: DEDICATED
vlanTag8021q: 246
Check the Dataplane version of an attachment
After you create a VLAN attachment,
you can check the Dataplane version for the attachment.
To check the Dataplane version of a VLAN attachment, use the Google Cloud CLI
or the Compute Engine API. The Dataplane version of an attachment does not appear
in the Google Cloud console.
gcloud API
More
To check the Dataplane version of the attachment,
run the following command:
gcloud compute interconnects attachment describe ATTACHMENT_NAME \
--region= NAME
Replace the following:
ATTACHMENT_NAME : the name of the attachment
REGION : the region where the attachment is located
In the output, look for the dataplaneVersion field.
If the dataplaneVersion field does not appear in the output,
the VLAN attachment is using version 2.
The following example output shows a VLAN attachment that uses Dataplane v2.
adminEnabled: true
bandwidth: BPS_10G
cloudRouterIpAddress: 169.254.132.105/29
creationTimestamp: '2022-03-04T10:08:11.526-08:00'
customerRouterIpAddress: 169.254.132.106/29
dataplaneVersion: 2
id: '8542849272424426340'
interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/my-interconnect
kind: compute#interconnectAttachment
mtu: 1440
name: my-attachment
operationalStatus: OS_ACTIVE
privateInterconnectInfo:
tag8021q: 1100
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1/routers/ipv6-cf-test-1
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-west1/interconnectAttachments/my-attachment
state: ACTIVE
type: DEDICATED
vlanTag8021q: 1100
Use the
interconnectAttachments.get method
to obtain the value of the dataplaneVersion field.
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /interconnectAttachments/ ATTACHMENT_NAME
Replace the following:
PROJECT_ID : the project that contains the
VLAN attachment
REGION : the region where the VLAN attachment is
located
ATTACHMENT_NAME : the name of the VLAN attachment
In the output, look for the dataplaneVersion field with a value of 2.
If the dataplaneVersion field does not appear in the output, the
VLAN attachment is using version 2.
What's next
To learn more about Cross-Cloud Interconnect, see the
Cross-Cloud Interconnect overview .
To learn about common issues that you might encounter when using
Cross-Cloud Interconnect, see
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
