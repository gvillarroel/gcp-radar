---
title: "Partner Cross-Cloud Interconnect for AWS provisioning overview \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/provisioning-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/provisioning-overview
  title: "Partner Cross-Cloud Interconnect for AWS provisioning overview \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Partner Cross-Cloud Interconnect for AWS provisioning overview | Google Cloud Documentation
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
Set up ingress and egress rules (for VPC Service Controls users)
Initiate connection from Google Cloud if you don't have an activation key
Initiate a connection from AWS if you have an activation key
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Partner Cross-Cloud Interconnect for AWS provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Set up ingress and egress rules (for VPC Service Controls users)
Initiate connection from Google Cloud if you don't have an activation key
Initiate a connection from AWS if you have an activation key
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the steps to successfully create and provision a
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) connection.
You can initiate connectivity from either Google Cloud or from
Amazon Web Services. To achieve a successful connection, you must
create the transport resource. After a resource is created
and connectivity is up, the flow is identical regardless of where the
provisioning is initiated. You can manage the resource from either side to
enable, disable, or change the bandwidth on the resources.
Before you start the Partner Cross-Cloud Interconnect for AWS provisioning process,
ensure that the following conditions are met:
You must already have an AWS account.
You must also create a Virtual Private Cloud (VPC) network ,
if it doesn't already exist, to connect your transport to.
If you are a VPC Service Controls user, you must set up ingress and egress rules
using the networkconnectivity-transportmanager-clh@system.gserviceaccount.com
service account that is associated with Partner Cross-Cloud Interconnect for AWS.
Set up ingress and egress rules (for VPC Service Controls users)
If you are a VPC Service Controls user, follow the instructions to
Update ingress and egress policies for a service perimeter .
Google recommends that you set up rules to allow the account to access all
resources and operations within the VPC Service Controls security perimeter.
Use the networkconnectivity-transportmanager-clh@system.gserviceaccount.com
service account to set up the ingress and egress rules.
The following example shows an ingress rule YAML that you can apply.
- ingressFrom:
identities:
- serviceAccount:networkconnectivity-transportmanager-clh@system.gserviceaccount.com
sources:
- accessLevel: '*'
ingressTo:
operations:
- serviceName: '*'
methodSelectors:
- method: '*'
resources:
- '*'
The following is an example of an egress rule YAML.
- egressTo:
operations:
- serviceName: '*'
methodSelectors:
- method: '*'
resources:
- '*'
egressFrom:
identities:
- serviceAccount:networkconnectivity-transportmanager-clh@system.gserviceaccount.com
For information about ingress and egress rules, see Ingress and egress rules .
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
Your workflow might differ based on whether you have an activation key from
AWS or not. For details, see the following sections.
Initiate connection from Google Cloud if you don't have an activation key
If you don't have an activation key from AWS, you can
initiate and provision a Partner Cross-Cloud Interconnect for AWS connection from
Google Cloud. To do so, follow these steps.
Choose a paired location .
Google Cloud regions are paired with specific AWS
regions. When you choose a specific Google Cloud region to create your
resources in, you must choose the corresponding AWS region.
List the available profiles in the region .
Select the correct profile and create the transport resource .
Use the generated activation key to create the connection in your
AWS account .
Establish VPC Network Peering .
Verify the connection
by listing the peered VPC networks and route tables.
Initiate a connection from AWS if you have an activation key
If you already have an activation key from AWS, you can
initiate and provision a Partner Cross-Cloud Interconnect for AWS connection from
AWS. To do so, follow these steps.
Activate your key by using the AWS Console.
Follow instructions to
create a connection from the AWS Console . You must provide the project and region where you want the
connection to land in Google Cloud. For a list of paired locations, see
Choose a paired location .
After the resource is created on the AWS side, create
the Google Cloud resource with the provided activation key.
Peer your VPC network to the transport's peering
VPC network .
Next
Choose a paired location
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
