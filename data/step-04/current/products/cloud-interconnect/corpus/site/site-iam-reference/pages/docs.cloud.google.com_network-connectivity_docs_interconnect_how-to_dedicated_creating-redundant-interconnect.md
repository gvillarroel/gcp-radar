---
title: "Duplicate a connection for redundancy \_|\_ Cloud Interconnect \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-redundant-interconnect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-redundant-interconnect
  title: "Duplicate a connection for redundancy \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Duplicate a connection for redundancy | Cloud Interconnect | Google Cloud Documentation
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
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Duplicate a connection for redundancy
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next
If you have a single Dedicated Interconnect connection, you can create
a second one so that you have redundant connections. Google recommends
redundancy so that if one connection fails, the other connection can continue to
serve traffic.
To create a redundant Dedicated Interconnect connection,
you must create it in the same
metropolitan area (city) as the existing one, but in a different
edge availability domain
(metro availability zone). If you don't, the connections won't be redundant.
You can check the redundancy status of your Cloud Interconnect
connections by adding them to a connection group. For more information, see
Create a Dedicated Interconnect connection group .
Note: To build a redundant topology, you must create and configure additional
resources. For more information, see
Redundancy and SLA
in the Dedicated Interconnect overview. Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.create
compute.interconnects.get
compute.interconnectLocations.get
compute.interconnectLocations.list
Roles
roles/owner
roles/editor
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud
More
To find the city of the existing Dedicated Interconnect connection:
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the existing Dedicated Interconnect connection to view its details page.
In the Details section, view the location address and record the city
name. This is the city where the redundant connection must be
configured.
To create the redundant Dedicated Interconnect connection:
In the Google Cloud console, go to the Physical connections tab.
Go to Physical connections
Click Set up connection .
Select Dedicated Interconnect , and then click Continue .
Select Order new Dedicated Interconnect , and then click Continue .
Specify the details of the Dedicated Interconnect connection:
Name : A name for the connection. This name is displayed
in the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect-redundant .
Location : Select Choose , and then filter the
list of locations to the city where your existing
connection is located. Select the same facility (if it supports more
than one edge availability domain) or a different facility. To view the
list of cities and their edge availability domains, see
All colocation facilities .
Capacity : The total capacity of your connection,
which is determined by the number and size of the circuits that you
order. Use the same value as the existing connection.
Click Next .
Clear the Create redundant interconnect checkbox, and then click
Continue to dismiss the SLA message.
Normally, when you create a Dedicated Interconnect connection,
we recommend that
you order a second redundant connection. In this case, because you're
creating a redundant connection for an existing connection, you don't
need to order another connection.
Optional: Select an edge availability domain (metro availability zone).
If the location that you selected has more than one edge availability
domain, you can choose a particular zone. Choose the zone that doesn't
contain the existing Dedicated Interconnect connection
that you're building
redundancy for. If you have no additional connections in the
same city, the Google Cloud console chooses the correct zone for you.
Click Next .
Specify your contact information:
Company name : The name of your organization to put in
the LOA as the party authorized to request a connection.
Technical contact : An email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can
specify only one address.
Review your order. Check that your Dedicated Interconnect
connection details and
contact information are correct. If everything is correct, click Place
order . If not, go back and edit the connection details.
On the order confirmation page, review the next steps and then select
Done .
To find the city of the existing Dedicated Interconnect connection:
Describe the existing Dedicated Interconnect connection
to view its location:
gcloud compute interconnects describe INTERCONNECT_NAME
In the output, view the location field, which shows a URL such as
https://www.googleapis.com/compute/...<example>.../sin-zone1-388 .
The last part of the URL is the name of the location ( sin-zone1-38 ).
Describe the location
to view the city in which it's located, passing the location
name from the previous step:
gcloud compute interconnects locations describe LOCATION_NAME
To create the redundant Dedicated Interconnect connection:
Choose a facility where the redundant Dedicated Interconnect connection is to be
located. From the list of
locations ,
select one that's in the same city but in a different edge availability
domain from the existing connection.
For example, if the existing connection is in iad-zone2-1 , select a
location that's in Ashburn but in zone 1, such as iad-zone1-1 . You need
this location name when you create the redundant connection.
Create the redundant Dedicated Interconnect connection in
the location that you selected:
gcloud compute interconnects create INTERCONNECT_NAME \
--customer-name= NAME \
--interconnect-type=DEDICATED \
--link-type= LINK_TYPE \
--location= LOCATION_NAME \
--requested-link-count= NUMBER_OF_LINKS \
[--noc-contact-email= EMAIL_ADDRESS ] \
[--description= STRING ]
Replace the following:
INTERCONNECT_NAME : the name for the Dedicated Interconnect
connection; this name is displayed in the Google Cloud console and
is used by the Google Cloud CLI to reference the connection, such as
my-interconnect-redundant
NAME : the name of your organization to put in the
LOA as the party authorized to request a connection
LINK_TYPE : the per-circuit capacity of your
Dedicated Interconnect connection; use the same value
as the existing connection.
LOCATION_NAME : the name of the location that you
selected in the previous step
NUMBER_OF_LINKS : number of circuits of type
link-type ; use the same value as the existing connection. For
example, if the existing connection has 8 x 10-Gbps (80 Gbps)
circuits, this number would be 8 . If the existing connection has
2 x 100-Gbps (200 Gbps) circuits, this number would be 2 .
EMAIL_ADDRESS and STRING :
optional; for the NOC contact, you can specify only one email
address—you don't need to enter your own address because you
are included in all notifications
After you order a Dedicated Interconnect connection, Google Cloud
sends you a confirmation through email, and allocates ports for you. When the
allocation is complete, Google Cloud generates LOA-CFAs for your connections and
sends them to you through email. All of the automated emails are sent to the
NOC contact and the person who ordered the Dedicated Interconnect
connection.
You can use the Dedicated Interconnect connection only after your
connections are provisioned and tested for light levels and IP connectivity.
What's next
To create the resources that are required to build a redundant topology,
such as VLAN attachments and Cloud Routers, see
Establish 99.99% availability for
Dedicated Interconnect
or
Establish 99.9% availability for Dedicated Interconnect .
To create a Dedicated Interconnect connection, see the
Dedicated Interconnect provisioning
overview .
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
