---
title: "Partner Cross-Cloud Interconnect for AWS overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-aws-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-aws-overview
  title: "Partner Cross-Cloud Interconnect for AWS overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Partner Cross-Cloud Interconnect for AWS overview | Google Cloud Documentation
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
Comparison to Cross-Cloud Interconnect
Quota
Billing
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Partner Cross-Cloud Interconnect for AWS overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Comparison to Cross-Cloud Interconnect
Quota
Billing
What's next?
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) provides multicloud connectivity between Google Cloud
and AWS. It lets you connect any
Google Cloud and AWS resources privately in
available paired locations . Partner Cross-Cloud Interconnect for AWS supports connections at multiple speeds
for traffic that is exchanged between Google Cloud and
AWS.
Partner Cross-Cloud Interconnect for AWS provides an on-demand and reliable method
for establishing cross-cloud transport, without having to manually set up
networking components.
This connectivity is represented as region-to-region transport with an
SLA-protected, coordinated underlay built with AWS that can be set up on-demand,
and sized up and down based on your needs.
Partner Cross-Cloud Interconnect for AWS is intended for you if you meet one or more
of the following criteria:
Run workload in distributed regions
Have low bandwidth needs
Are an application owner with no networking expertise
Want Cross-Cloud connectivity without a having to manage the physical
infrastructure
Partner Cross-Cloud Interconnect for AWS is an evolution of
Cross-Cloud Interconnect. The Partner Cross-Cloud Interconnect for AWS API
incorporates redundancy directly into the underlying resources. Unlike
Cross-Cloud Interconnect where you have to establish and manage
redundancy for your connections, Google Cloud can handle this at the
service level. This means that the Partner Cross-Cloud Interconnect for AWS service
is designed with inherent fault tolerance, ensuring a more stable and reliable
connection without requiring you to configure complex redundant setups. While
Google and the remote cloud provider each offer their own SLAs for their
respective portions of the connection, these are fully managed and abstracted
away on both sides, ensuring a unified and simplified reliability experience.
Partner Cross-Cloud Interconnect for AWS provides the following benefits:
Lower bandwidth options when you don't need increments of 10 Gbps or 100 Gbps:
Partner Cross-Cloud Interconnect for AWS offers greater flexibility with bandwidth
options. Unlike dedicated interconnect connections that typically require
high-capacity links (10G/100G increments), Partner Cross-Cloud Interconnect for AWS
provides lower bandwidth options. This flexibility lets you select bandwidth
amounts that precisely match your needs, leading to potential cost savings
for use cases that don't require large data transfer capabilities. The
ability to size bandwidth up and down on demand further enhances your
flexibility.
Fully managed reliability characteristics, avoiding nuances in per-cloud
SLA definitions.
Minimal lead time due to prebuilt connectivity: by pre-building and managing
the cross-cloud connectivity infrastructure, Google Cloud
reduces the time it takes for you to establish your connections. You don't
have to wait for physical links or set up complex provisioning processes.
Eliminates the need for coordination or third-party involvement for physical
connection issues: Google Cloud takes on the responsibility for the
underlying physical infrastructure and its reliability, eliminating the need to
deal with potential issues or coordinate with multiple third-party providers.
Minimal networking knowledge: route exchange between the two CSPs
is handled automatically, rather than copying and pasting resource information
between the two or maintaining large, complex configurations to
deploy region to region connectivity across the clouds.
Comparison to Cross-Cloud Interconnect
The following table describes the differences between
Partner Cross-Cloud Interconnect for AWS and Cross-Cloud Interconnect.
Interconnect connection type
Cross-Cloud Interconnect
Partner Cross-Cloud Interconnect for AWS
Description
Provides dedicated connectivity between Google Cloud and
providers like OCI, AWS, Azure, and Alibaba
Provides dedicated connectivity between Google Cloud and
providers like AWS
Needs physical provisioning
Yes
No
Needs physical attachments and ports
Yes
No
Connection increments
10 Gbps or 100 Gbps
Granular pre approved speeds starting from 1 Gbps to 100 Gbps
Provisioning time
1-4 weeks
1 day or less
Connection ordering
Must be initiated from Google Cloud
Bidirectional; can be initiated from Google Cloud or
Amazon Web Services
Resiliency
Must be configured manually
Built into the product
Quota
Transport resources are enforced by a per-project per-region quota. By default,
each project is limited to a single transport resource per region.
Billing
During public preview , you are not billed
when the transport resource is active.
What's next?
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
