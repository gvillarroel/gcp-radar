---
title: "Order Cross-Cloud Interconnect connections \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/order-google-connections
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/order-google-connections
  title: "Order Cross-Cloud Interconnect connections \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order Cross-Cloud Interconnect connections | Google Cloud Documentation
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
Before you begin Required roles
Required information
Project selection
Order your connections
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order Cross-Cloud Interconnect connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Required information
Project selection
Order your connections
To begin the process of connecting to Oracle Cloud Infrastructure (OCI), order your
Cross-Cloud Interconnect connections.
Before you begin
This section describes required permissions, information, and setup steps.
Required roles
Before proceeding, you need the required permissions. Ask your administrator to make sure that
you have the Compute Network Admin
( roles/compute.networkAdmin ) IAM role on the project. For more information about
granting roles, see
Manage access to projects, folders, and organizations
in the Identity and Access Management (IAM) documentation.
Required information
Make sure that you have the names of the remote location and Google Cloud location that
you want to use. If you don't have this information, see
Choose your locations .
Project selection
If you're using the Google Cloud CLI, set your project ID by using the
gcloud config set command .
gcloud config set project PROJECT_ID
The gcloud CLI instructions on this page assume that you have set your project ID.
Order your connections
When you order a Cross-Cloud Interconnect connection, Google reserves a port
on a router at the location that you specify. Google later uses this port to create your connection
to an OCI router.
To satisfy the Cross-Cloud Interconnect service level agreement , order
two connections: a primary connection and a redundant one.
After you place each order, you get an email confirming your order.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical
connections
Click Set up physical connection .
In the form that's displayed, select
Cross-Cloud Interconnect connection , and then click Continue .
On the next page, keep the default selection of
Order new Cross-Cloud Interconnect connection , and then click
Continue .
On the Create Cross-Cloud Interconnect connection page, enter details about
the primary connection:
Enter a Name for the connection.
Optional: Enter a Description .
In the Remote cloud provider field, select
Oracle Cloud Infrastructure .
In the Remote location field, select the OCI
location.
In the Google Cloud location field, select the
Cross-Cloud Interconnect location.
Set Capacity to one of the following:
Any variant of 10 Gb/s —for example:
10 Gb/s
20 Gb/s (2 x 10 Gb/s)
A 10-Gb/s value that uses another multiplier up to 8
100 Gb/s
100 Gb/s
200 Gb/s (2 x 100 Gb/s)
For help with setting the Remote location or Location field, see
Choose your locations .
Click Next .
In the next form, enter details about your redundant connection:
Enter a Name for the connection.
Optional: Enter a Description .
Leave the Remote location and
Google Cloud location fields set to the same values that you selected for the primary
connection.
Click Next .
Enter an email address in the Technical contact field.
Click Next .
Review the order, including the information about billing. If the summary of your
details is correct, click Place order . If not, go back and edit the connection
details. Then return to this step and place the order.
In the order confirmation dialog, click
Submit .
Use the
gcloud compute interconnects create command .
Related to this command, note the following:
Cross-Cloud Interconnect is similar to Dedicated Interconnect
in the sense that it does not require you to use a partner provider. For that reason, you set the
--interconnect-type flag to DEDICATED .
Complete the following steps:
Create the primary connection:
gcloud compute interconnects create CONNECTION_NAME_1 \
--interconnect-type=DEDICATED \
--link-type= CAPACITY \
--requested-link-count= NUMBER_OF_LINKS \
--location= GOOGLE_CLOUD_LOCATION_1 \
--remote-location= REMOTE_LOCATION \
--description= DESCRIPTION_1 \
--noc-contact-email= CONTACT_EMAIL_1
Replace the following:
CONNECTION_NAME_1 : the name of the primary
Cross-Cloud Interconnect connection
CAPACITY : the capacity of the connection—for
example, LINK_TYPE_ETHERNET_10G_LR or
LINK_TYPE_ETHERNET_100G_LR
NUMBER_OF_LINKS : the number of links that
you want for your connection—for example:
If you choose a capacity of LINK_TYPE_ETHERNET_10G_LR ,
this value can be 1 through 8 .
If you choose a capacity of LINK_TYPE_ETHERNET_100G_LR ,
this value can be 1 through 8 .
GOOGLE_CLOUD_LOCATION_1 : one of the two edge availability
zones associated with the Google Cloud location you want to use—for example,
fra-zone1-58
REMOTE_LOCATION : the remote location
DESCRIPTION_1 : an optional description of your connection
CONTACT_EMAIL_1 : an email address that Google can use
to contact you
Create the redundant connection:
gcloud compute interconnects create CONNECTION_NAME_2 \
--interconnect-type=DEDICATED \
--link-type= CAPACITY \
--requested-link-count= NUMBER_OF_LINKS \
--location= GOOGLE_CLOUD_LOCATION_2 \
--remote-location= REMOTE_LOCATION \
--description= DESCRIPTION_2 \
--noc-contact-email= CONTACT_EMAIL_2
Replace the following:
CONNECTION_NAME_2 : the name of the redundant
Cross-Cloud Interconnect connection
CAPACITY : the capacity of the connection; this value
must be the same as the capacity of the primary connection
NUMBER_OF_LINKS : the number of links
that you want for your redundant connection; this value must be the same as the one that you used
for the primary connection
GOOGLE_CLOUD_LOCATION_2 : one of the two edge availability
zones associated with the Google Cloud location you want to use; do not use the same
zone that you used for the primary location—for example, if you chose
fra-zone1-58 for the primary connection, use fra-zone2-58 for
the secondary one
REMOTE_LOCATION : the same remote location that you
specified in the preceding step, when you created the primary connection
DESCRIPTION_2 : an optional description of your
redundant connection
CONTACT_EMAIL_2 : an email address that Google can use
to contact you about the redundant location
For help with setting the Remote location or Location field,
see
Choose your locations .
Previous
arrow_back
Choose your locations
Next
Order OCI ports
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
