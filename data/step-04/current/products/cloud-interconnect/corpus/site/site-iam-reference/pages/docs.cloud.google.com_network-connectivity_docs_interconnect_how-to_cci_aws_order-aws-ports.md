---
title: "Order AWS ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/order-aws-ports
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/order-aws-ports
  title: "Order AWS ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order AWS ports | Cloud Interconnect | Google Cloud Documentation
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
Order your ports
Generate an LOA
Send the LOAs to Google
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order AWS ports
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Order your ports
Generate an LOA
Send the LOAs to Google
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
AWS documentation
.
After you've ordered your Cross-Cloud Interconnect connections, order
your AWS ports.
Order your ports
AWS offers two Direct Connect ordering options: Link Aggregation Group (LAG)s
and connections . (In the AWS interface, links are known as connections .) You
must order LAGs, not connections . LAGs enable
Link Aggregation Control Protocol (LACP) ,
which permits multiple links per port. Cross-Cloud Interconnect
for AWS requires LACP.
Order one LAG for each Cross-Cloud Interconnect connection.
Caution: For a redundant pair of Cross-Cloud Interconnect
connections, perform the LAG ordering process below twice.
Do not enter 2 for the number of connections within a single LAG if you
actually want a redundant pair of LAGs, each having one link.
Although LAGs enable bundling a group of connections together for higher
bandwidth, you can create a LAG with just one connection.
If you accidentally ordered connections instead of LAGs, you can create a LAG
from the existing connections by following the instructions on the
Create a LAG
page in the AWS documentation, and then clicking the Create a LAG with existing
connections using the console tab.
AWS console AWS CLI
More
Note: For the most up-to-date information about how to order LAGs, see
Create a LAG
in the AWS documentation.
Go to the Direct Connect LAGs page.
Click Create LAG .
In the LAG type section of the page, select
Request new connections .
Fill out the LAG settings section of the page:
Enter a LAG Name for the resource.
In the Location field, enter the AWS location. If you
need help with choosing a value for this field, see
Supported locations . You can find the location
name below each listed location description. You can also search for a
location name by using the search field in the LAG settings section.
Select the appropriate Port speed .
Enter the Number of new connections that you want.
Note: Set this field to reflect the number of links in this LAG.
Setting the number of new connections to 2 does not set up redundancy.
To set up redundancy, order two LAGs by following the LAG ordering
process twice .
Clear the field labeled
Connect through an AWS Direct Connect partner .
Click Create LAG .
To order your Direct Connect ports, use the
create-lag command .
For example:
aws directconnect create-lag \
--number-of-connections NUMBER_OF_CONNECTIONS \
--connections-bandwidth CAPACITY \
--location AWS_LOCATION \
--lag-name NAME \
--region REGION
Replace the following:
NUMBER_OF_CONNECTIONS : the number of links, or
connections, that you want for each port
CAPACITY : the bandwidth of each connection in the LAG
AWS_LOCATION : the name of the AWS location—for
example, EqFA5
NAME : the name of the new LAG
REGION : the region where you want to place your new
connection and its links
Generate an LOA
For Google to provision your connection, it must have a letter of authorization
(LOA) for each connection that you created in each AWS LAG.
For example, suppose you ordered two LAGs and you created two connections in
each LAG. In this case, you need four LOA documents.
Use the following instructions twice—once for each LAG.
AWS console AWS CLI
More
To download the LOAs, complete the following steps:
Go to the Direct Connect LAGs page.
Click the name of the appropriate LAG.
Go the Connections section of the page and do the following
for each connection in the LAG:
Click the name of the connection to display the connection page.
Click Download LOA .
In the Provider name - optional field, enter Google-Cloud .
Click Download .
Repeat step 3 for your redundant LAG.
To download the LOAs, complete the following steps:
Use the
aws directconnect describe-lags command
to retrieve identifiers for the LAGs that you created. For example:
aws directconnect describe-lags \
--region REGION |
jq -r \ '.lags[].connections[].connectionId'
Replace REGION with the region where your connections
are located.
In response, the system returns an identifier for each connection.
For each connection in the LAG, download the LOA by using the
aws directconnect describe-loa command .
For example:
aws directconnect describe-loa \
--connection-id CONNECTION_ID \
--provider-name "Google-Cloud" \
--output text \
--query loaContent \
--region REGION |
base64 --decode > FILE_NAME .pdf
Replace the following:
CONNECTION_ID : the identifier of the connection
REGION : the region where your
connections are located
FILE_NAME : a name for the LOA document
Repeat step 2 for your redundant LAG.
Send the LOAs to Google
After you order your Cross-Cloud Interconnect connections, you
should receive confirmation email messages from Google. Each of these
messages includes instructions for sending your AWS LOAs to Google. Now that
you have the LOAs, do the following:
Decide which AWS LAG you want to connect to each
Cross-Cloud Interconnect port. Locate the LOA documents for
that LAG.
Respond to each Google email. Each email represents a different
Cross-Cloud Interconnect port. Attach the LOA documents
for the AWS LAG that you want connected to that port.
Caution: Make sure to attach the correct LOA documents to the correct email.
Errors in this step cause unintended port connections, which can result in
configuration errors and connection delays.
Make a note of the instructions that you provide to Google regarding which
Cross-Cloud Interconnect port connects to which AWS LAG. You need this
information later in the process when you configure your AWS resources.
Still later, after Google has provisioned your
Cross-Cloud Interconnect connections, you receive another set of
emails stating that the connections are ready to use.
After you receive this confirmation, you can finish the required
configuration.
Previous
arrow_back
Order Cross-Cloud Interconnect connections
Next
Configure Google Cloud resources
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
