---
title: "Order Alibaba Cloud ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/alibaba/order-alibaba-ports
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/alibaba/order-alibaba-ports
  title: "Order Alibaba Cloud ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order Alibaba Cloud ports | Cloud Interconnect | Google Cloud Documentation
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
Order Express Connect ports
Generate LOAs
Send the LOAs to Google
Check the status of your Google Cloud ports
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order Alibaba Cloud ports
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Order Express Connect ports
Generate LOAs
Send the LOAs to Google
Check the status of your Google Cloud ports
After you order your Cross-Cloud Interconnect connections, order
your Alibaba Cloud Express Connect ports.
Caution: Use the following procedure twice—once to create the primary port and
again to create the redundant port.
Order Express Connect ports
For each of your Cross-Cloud Interconnect connections, you need
an Express Connect port.
Console
More
Log in to the Alibaba Cloud Express Connect console.
On the Express Connect page, click Create Physical Connection .
For Region , select the city that you want to connect to by
choosing one of the following in the Connectivity Provider menu:
For the China (Hong Kong) region, select Other (Chinese Mainland) .
For all other regions, select
Connectivity Provider Outside Chinese Mainland .
For Access Point , select the Alibaba Cloud name for the remote location.
For Port Type , select 10 GE Single-Mode Optical Port .
Leave Redundant Physical Connection ID empty when ordering the
primary port. You will set it when ordering the redundant port.
Check the box that you have read and understood the billing rules.
Click OK to place the order.
Repeat the same process when ordering the redundant port . However, for the
second port, set the Redundant Physical Connection ID menu to the primary
port that you previously ordered.
Wait a few minutes for the ports to be allocated.
After the port is allocated, click Apply for LOA .
For Company Name , enter Google Cloud .
For Construction Company that Enters Data Centers of Alibaba Cloud ,
enter Google Cloud .
For Leased Line Type , select Fiber Connection .
For Construction Schedule , select the date tomorrow.
For Leased Line Bandwidth in Mbps, enter 10000 .
The menu requires that you enter information for a field engineer
even though it is not used:
Click Add Field Engineer .
For Name , enter NotApplicable .
For Contact Information , enter your phone number.
For ID Number , enter Unknown colo facility .
For Gender , enter your gender.
Click OK .
On the page that appears, click OK .
Generate LOAs
For Google to provision your connection, it must have a letter of authorization
(LOA) for each of your Alibaba Cloud ports.
After you order the Express Connect port, the port waits for a review process
that can take between ten minutes and two business days. After review completes,
click the button to download the LOA document. If you are unable to download
an LOA document after two business days, open a support ticket.
Send the LOAs to Google
After you order your Cross-Cloud Interconnect connections, you
should receive confirmation email messages from Google. Each of these
messages includes instructions for sending your Alibaba Cloud LOAs to Google.
Now that you have the LOAs, do the following:
Decide which Alibaba Cloud Express Connect port must be connected to each
Cross-Cloud Interconnect connection.
Locate the LOA document for that port.
Respond to each of the Google emails, and attach the appropriate LOA
documents.
Make a note of the instructions that you provide to Google regarding which
Cross-Cloud Interconnect port connects to which Alibaba Cloud port.
You need this information later in the process when you configure your Alibaba
Cloud resources.
After you respond to both emails, Google sends you an email acknowledging
receipt of the LOAs.
Still later, after Google provisions your
Cross-Cloud Interconnect connections, you receive another set of
emails stating that the work is complete. At that point, Alibaba Cloud has not
yet provisioned the pigtail for the Express Connect port.
Click Confirm Delivery .
For Leased Line ID/Cable ID , enter the connection ticket ID that Google
provides you.
For ODF Port Specification , enter the Patch Panel information
from the LOA document that you previously downloaded.
Click OK .
Alibaba Cloud completes the pigtail connection within four business days.
Google tests your Cross-Cloud Interconnect once each day to check
for connection completion. After the connection is detected, Google sends an
email that your port is ready to use.
Check the status of your Google Cloud ports
Console
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Click the name of your Cross-Cloud Interconnect
connection.
On the Interconnect details page, locate the
Link circuit info table.
Check the Receiving Optical Power and the
Transmitting Optical Power columns. The value in these columns
should be OK .
Previous
arrow_back
Order Cross-Cloud Interconnect connections
Next
Configure your Google Cloud resources
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
