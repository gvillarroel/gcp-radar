---
title: "Order OCI ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/order-oci-ports
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/order-oci-ports
  title: "Order OCI ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order OCI ports | Cloud Interconnect | Google Cloud Documentation
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
Before you begin
Order FastConnect ports
Generate LOAs
Send the LOAs to Google
Check the status of your Google Cloud ports
Verify and enable OCI ports
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order OCI ports
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Order FastConnect ports
Generate LOAs
Send the LOAs to Google
Check the status of your Google Cloud ports
Verify and enable OCI ports
After you order your Cross-Cloud Interconnect connections, order
your Oracle Cloud Infrastructure (OCI) ports.
Before you begin
Make sure that you have sufficient quota to order the FastConnect resources
that you need.
Order Fast Connect ports
For each of your Cross-Cloud Interconnect connections, you need
an OCI port.
Caution: Use the following procedure twice—once to create the primary port and
again to create the redundant port.
Console
More
Note: For the most up-to-date information about how to order a FastConnect
port, see
FastConnect: Colocation with Oracle in the OCI documentation.
Sign in to the OCI console.
Make sure that the Regions list shows the region where you
want to purchase OCI ports.
In the menu menu, select
Networking . Under Customer connectivity , select FastConnect .
Click Create FastConnect .
On the Connection type page, select the FastConnect direct box,
and then click Next .
Fill out the Configuration page:
Enter a name for the connection.
Select a Compartment .
Under Cross-connect type , select the Cross-connect group box.
It's important to make this choice even if you do not plan to use LACP.
After you do, the page updates to include additional fields.
Enter the Number of cross-connects to use for the connection.
Choose the same number of links that you specified when ordering your
Cross-Cloud Interconnect ports. For example, if you
ordered a connection of size 20 Gb/s (2 x 10 Gb/s), enter 2
in this field. If you ordered a 100-Gb/s connection, set this field
to 1 .
Note: Set this field to reflect the number of links in this
cross-connect group. Setting the number of cross-connects to 2 does not
set up redundancy . To set up redundancy, order two cross-connect groups
by following the cross-connect group ordering process twice.
Enter a Port speed . Use the same capacity that you selected
when ordering your Cross-Cloud Interconnect
connections. To view the list of valid capacities, see
Port capacity .
The OCI console might list additional options, but they can't be used
with Cross-Cloud Interconnect.
Leave the Enable MACsec encryption field cleared. This must be
disabled until turn up completes.
Select a Physical location .
Specify whether to use the same OCI router as other
FastConnect connections by checking the Specify router proximity
box. This step is important when you order the redundant port. Make
sure to place the redundant port on a different router than the
primary port. If both ports are placed on the same router, you would
lose both connections during maintenance work on the router.
Then fill in the related fields that are displayed.
Optional: Use the Tag namespace , Tag key , and Tag value
fields to create tags that represent the resource.
Click Create .
Generate LOAs
For Google to provision your connection, it must have a letter of authorization
(LOA) for each of your OCI ports.
Use the following procedure for each link that you created. In the
OCI interface, links are known as cross-connects .
For example, suppose you ordered two FastConnect connections, each of which
has two links. In this case, you need four LOA documents.
Console
More
Sign in to the OCI console.
Make sure that the Regions list shows the region where you
purchased your FastConnect resources.
In the menu menu, select
Networking . In the Customer connectivity section,
select FastConnect .
Click the name of the appropriate connection.
In the Cross-connects section, click the name of the appropriate
link.
On the Cross-connects tab, locate the Letter of Authorization
field. Click the corresponding View link.
Click Print and follow prompts to print the LOA to a PDF to save it
locally.
Send the LOAs to Google
After you order your Cross-Cloud Interconnect connections, you
should receive confirmation email messages from Google. Each of these
messages includes instructions for sending your OCI LOAs to Google. Now that
you have the LOAs, do the following:
Decide which OCI port should be connected to each
Cross-Cloud Interconnect connection.
Locate the LOA documents for that port. The number of relevant LOAs
depends on the number of links that you specified for each port.
For example, if the port has two links
(or cross-connects), then you have two LOAs.
Respond to each of the Google emails, and attach the appropriate LOA
documents.
Make a note of the instructions that you provide to Google regarding which
Cross-Cloud Interconnect port connects to which OCI port. You need this
information later in the process when you configure your OCI resources.
After you respond to both emails, Google sends you an email acknowledging
receipt of the LOAs.
Still later, after Google provisions your
Cross-Cloud Interconnect connections, you receive another set of
emails stating that the work is complete. At that point, the
Cross-Cloud Interconnect ports are active, although the OCI
ports are not.
When you receive this confirmation, you can finish the required
configuration.
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
At this point, it is normal to see a red checkmark in the Link State
column.
Verify and enable OCI ports
Check to see whether your OCI links are all receiving a signal from Google. If
they are, enable them.
Console
More
For each of your links, complete the following steps:
Sign in to the OCI console.
Make sure that the Regions list shows the region where you
want to purchase OCI ports.
In the menu menu, select
Networking . In the Customer connectivity section,
select FastConnect .
Click the name of the appropriate FastConnect resource.
Under Cross-connects , click the name of the link that you want
to verify.
In the Cross-Connection Information box, locate the
Light Level Indicator . Verify that a
green checkmark appears next to the field.
If all of the fields appear as expected, click Activate .
In the Confirmation dialog, click Activate .
To verify the activation, go back to the previous page and review
the Cross-connects table. The value in the Life Cycle column
should be Provisioning .
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
