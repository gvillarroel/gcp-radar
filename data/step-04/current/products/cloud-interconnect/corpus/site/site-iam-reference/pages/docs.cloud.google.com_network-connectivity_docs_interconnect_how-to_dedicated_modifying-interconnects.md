---
title: "Modify connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-interconnects
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/modifying-interconnects
  title: "Modify connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Modify connections | Cloud Interconnect | Google Cloud Documentation
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
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Modify connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next
For an existing Dedicated Interconnect connection, you can modify its
description, technical contact email address, and the number of circuits
(the capacity).
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
If you modify the description or email address, these changes are immediate.
If you change the number of circuits, the existing Dedicated Interconnect connection and
its VLAN attachments continue to operate as normal because the circuit bundle
uses Link Aggregation Control Protocol (LACP). Traffic isn't disrupted.
If you increase the number of circuits, you follow a process similar to
creating a connection .
Google sends you an LOA-CFA with your requested changes. You send this
document to your vendor to grant them authorization to complete the work. New
circuits aren't usable until they are provisioned and
tested .
If you decrease the number of circuits, Google removes the requested number of
ports from the bundle and notifies you which circuits to remove. You then
need to contact your vendor to remove those Dedicated Interconnect connections.
The following items can't be modified for existing Dedicated Interconnect connections:
The link type on a Dedicated Interconnect connection. For example, changing the
circuit from 10 Gpbs to 100 Gbps. If you want to migrate to
100 Gbps, you must first provision a new 100‑Gbps Dedicated Interconnect
connection alongside your existing 10‑Gbps connection, and then
migrate the traffic onto the 100‑Gbps connection.
Requested features, such as MACsec. For more information, see MACsec
support on existing Cloud Interconnect
connections .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.get
compute.interconnects.update
Roles
roles/owner
roles/editor
roles/compute.networkAdmin
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
For the Dedicated Interconnect connection that you want to modify, select it.
On the connection's detail page, click Edit .
Modify your Dedicated Interconnect connection:
Description : Information about the connection.
Capacity : The total capacity of your connection, which is
determined by the number and size of the circuits that you order.
Note: You can view the estimated cost of your choice in the
upper-right corner of the Google Cloud console page.
Select one of the following options:
1 x 10‑Gbps circuit in 10‑Gbps increments up to 8 x
10‑Gbps (80 Gbps) circuits
1 x 100‑Gbps (100 Gbps) circuit
2 x 100‑Gbps (200 Gbps) circuits
Technical contact : An email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can
specify only one address.
Click Save .
To confirm your changes, click Done .
Modify an existing Dedicated Interconnect connection by running the following command:
gcloud compute interconnects update INTERCONNECT_NAME \
--description= UPDATED_DESCRIPTION \
--noc-contact-email= UPDATED_EMAIL_CONTACT \
--requested-link-count= UPDATED_COUNT
Replace UPDATED_COUNT with the total number of circuits
of type link-type .
For example, if you have a 20‑Gbps Dedicated Interconnect connection and want
to make it 40 Gbps, use --requested-link-count=4 .
Billing for new circuits starts after they're ready to use (all
tests
have passed) or 30 days after your order is received. You aren't charged
before then. You can cancel your order by reverting to the original number of
circuits. Billing for removed circuits stops when the LACP bundle is resized.
What's next
To create a Dedicated Interconnect connection, see the
Dedicated Interconnect provisioning overview .
To learn more about Cloud Interconnect options, see the
Cloud Interconnect overview .
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
