---
title: "Set up MACsec \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/set-up-macsec
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/set-up-macsec
  title: "Set up MACsec \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up MACsec | Cloud Interconnect | Google Cloud Documentation
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
Before you begin
Verify that Cloud Interconnect is MACsec capable
Request a MACsec-capable Cloud Interconnect connection
Create pre-shared keys
Get pre-shared keys
Configure your on-premises router
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Set up MACsec
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Verify that Cloud Interconnect is MACsec capable
Request a MACsec-capable Cloud Interconnect connection
Create pre-shared keys
Get pre-shared keys
Configure your on-premises router
What's next?
This page describes how to set up MACsec for Cloud Interconnect.
Before you enable and use MACsec for Cloud Interconnect, you need to create
one or more pre-shared keys and configure your on-premises router to use them.
Your router and Google's edge router use the pre-shared keys to encrypt traffic
that transits between the routers.
Before you begin
To get the permissions that
you need to retrieve MACsec keys,
ask your administrator to grant you the
Compute Network Admin ( roles/compute.networkAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If you choose to use custom roles, ensure that your custom role for
administrating MACsec for Cloud Interconnect includes the
compute.interconnects.getMacsecConfig IAM permission.
Verify that Cloud Interconnect is MACsec capable
Use one of the following options to verify if an existing
Cloud Interconnect connection is MACsec capable. If it is, skip to
Create pre-shared keys .
All Cross-Site Interconnect connections are MACsec capable.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Click the name of the connection you want to inspect.
Click the MACsec tab.
The MACsec information is displayed. If your Cloud Interconnect
connection supports MACsec and it isn't configured, MACsec
configuration displays Disabled . If your connection doesn't support
MACsec, then the Enable button isn't actionable and hovering over the
button displays "Your Interconnect does not support MACsec. You need a
MACsec-capable port."
Run the following command:
gcloud compute interconnects describe INTERCONNECT_CONNECTION_NAME
Replace INTERCONNECT_CONNECTION_NAME with the name of your
Cloud Interconnect connection.
The output is similar to the following sample. MACsec-capable connections
display the following:
For 10‑GB links: linkType: LINK_TYPE_ETHERNET_10G_LR and
availableFeatures: IF_MACSEC
For 100‑GB links: linkType: LINK_TYPE_ETHERNET_100G_LR ; all
100‑GB links are MACsec capable
For 400‑GB links: linkType: LINK_TYPE_ETHERNET_400G_LR ; all
400‑GB links are MACsec capable
adminEnabled : true
availableFeatures :
- IF_MACSEC
circuitInfos :
- customerDemarcId : fake-peer-demarc-0
googleCircuitId : LOOP-0
googleDemarcId : fake-local-demarc-0
creationTimestamp : '2021-10-05T03:39:33.888-07:00'
customerName : Fake Company
description : something important
googleReferenceId : '123456789'
id : '12345678987654321'
interconnectAttachments :
- https://www.googleapis.com/compute/v1/projects/my-project1/regions/us-central1/interconnectAttachments/interconnect-123456-987654321-0
interconnectType : IT_PRIVATE
kind : compute#interconnect
labelFingerprint : 12H17262736_
linkType : LINK_TYPE_ETHERNET_10G_LR
location : https://www.googleapis.com/compute/v1/projects/my-project1/global/interconnectLocations/cbf-zone2-65012
macsecEnabled : false
macsecPort : REQUESTED
name : INTERCONNECT_CONNECTION_NAME
operationalStatus : OS_ACTIVE
provisionedLinkCount : 1
requestedLinkCount : 1
selfLink : https://www.googleapis.com/compute/v1/projects/my-project1/global/interconnects/ INTERCONNECT_CONNECTION_NAME
selfLinkWithId : https://www.googleapis.com/compute/v1/projects/my-project1/global/interconnects/12345678987654321
state : ACTIVE
The following items specify the Cloud Interconnect connection's
MACsec configuration:
availableFeatures : MACsec capability on the
Cloud Interconnect connection. This parameter is shown only for
10 GB Cloud Interconnect connections, because
100 GB and 400 GB Cloud Interconnect connections are
MACsec capable by default.
macsecEnabled : MACsec status for Cloud Interconnect on this
link. The value will be false until you enabled MACsec on the interconnect.
Request a MACsec-capable Cloud Interconnect connection
A 100‑GB or 400‑GB Cloud Interconnect connection is MACsec
capable by default. However, a 10‑GB connection is not MACsec capable by
default unless it is a Cross-Site Interconnect connection.
If your existing connection isn't MACsec capable, then you need to request a new
connection before continuing.
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Click Set up physical connection .
Select Dedicated Interconnect , and then click Continue .
Select Order new Dedicated Interconnect , and then click Continue .
Specify the details of the connection:
Name : A name for the connection. This name is displayed in
the Google Cloud console and is used by the Google Cloud CLI to
reference the connection, such as my-interconnect .
Google Cloud location : The physical
location
where the connection is created. Your on-premises network must meet
Google Cloud's network in this location. You can limit the list of
available locations by geographic area in the Geographic location
drop-down.
The MACsec support for current project column displays the
circuit sizes available for MACsec for Cloud Interconnect.
Capacity : The total capacity of your connection, which is
determined by the number and size of the circuits that you order.
Select one of the displayed options.
Order a MACsec-capable port : If you are ordering a 10‑Gbps
physical link, you must select this option when ordering your
Cloud Interconnect connection for MACsec-capable connections.
If you are ordering a 100‑Gbps or 400‑Gbps physical link,
then a MACsec-capable port is automatically selected for you and can't
deselect it.
You can provide an optional description of the connection in the
Description field. This description is for your use.
Click Next .
If you require redundancy, specify details for your duplicate
connection, and then click Next .
Specify your contact information:
Company name : the name of your organization to put in the
LOA as the party authorized to request a connection.
Technical contact : an email address where notifications
about this connection are sent. You don't need to enter your own
address; you are included in all notifications. You can specify only
one address.
If you are creating a connection through workforce identity
federation , specifying a
Technical contact is required. Workforce identity federation is in
Preview .
Review your order. Check that your Dedicated Interconnect
connection details and contact information are correct. If everything is
correct, click Place order . If not, go back and edit the connection
details.
On the order confirmation page, review the next steps, and then click
Done .
The following command demonstrates how to request a MACsec-capable
Cloud Interconnect connection on a 10‑GB link. MACsec
on 10‑GB connections is supported, but you must contact your
Google Cloud account team to enable your Google Cloud projects to create a
MACsec-capable connection on 10‑GB links.
Important: Google support can't enable 10‑GB MACsec requests for your
projects.
gcloud compute interconnects create INTERCONNECT_CONNECTION_NAME \
--customer-name= CUSTOMER_NAME \
--interconnect-type=DEDICATED \
--link-type=LINK_TYPE_ETHERNET_10G_LR \
--location=" INTERCONNECT_CONNECTION_LOCATION " \
--requested-link-count= LINK_COUNT \
--requested-features=MACSEC
Replace the following:
INTERCONNECT_CONNECTION_NAME : a name for your
Cloud Interconnect connection
CUSTOMER_NAME : the customer name for the letter of
authorization (LOA) that we issue for this connection
INTERCONNECT_CONNECTION_LOCATION : a
Cloud Interconnect connection location listed in the locations
table
LINK_COUNT : the number of Cloud Interconnect
connections that you want
After you request a MACsec-capable Cloud Interconnect connection, a
Cloud Interconnect connection is provisioned for you.
For more information about provisioning, see the following:
Dedicated Interconnect provisioning overview
Partner Interconnect provisioning overview
Cross-Site Interconnect provisioning overview
Create pre-shared keys
After your MACsec-capable Cloud Interconnect connection is provisioned,
create the pre-shared keys that MACsec uses to encrypt the traffic that transits
between Google's edge routers and your router. Creating keys doesn't turn on
MACsec. To turn on MACsec, you must configure your on-premises router and then
enable MACsec.
MACsec for Cloud Interconnect requires that you have at least one key with
a start time of now or before. Keys that you create for
MACsec for Cloud Interconnect have infinite validity. You can have a
maximum of five keys per connection.
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the connection that you want to modify.
On the MACsec tab, go to the Pre-shared keys section, and then
click Managed pre-shared keys .
Specify the details of the pre-shared key:
Key Name 1: a name for the key. This name is displayed in
the Google Cloud console and is used by the gcloud CLI to
reference the key, such as psk-1 .
Start time 1: the time that the key is valid from.
To add more pre-shared keys, click Add key . Consecutive
pre-shared keys must have start times that are at least six hours apart.
Click Submit .
gcloud compute interconnects macsec add-key INTERCONNECT_CONNECTION_NAME \
--key-name= KEY_NAME --start-time=" START_TIME "
Replace the following:
KEY_NAME : a name for the key
START_TIME : the time that this key is valid from in ISO
8601 format—for example, 2023-07-01T21:00:01.000Z
Get pre-shared keys
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the connection that you want to view.
On the MACsec tab, go to the Pre-shared keys section, find the
name of the pre-shared key, and then click View . A window displays the
connectivity association key ( CAK ) and the connectivity association
key name ( CKN ). Click Copy next to either value to copy the value
to your computer's clipboard.
Click Close .
Run the following command:
gcloud compute interconnects macsec get-config INTERCONNECT_CONNECTION_NAME
The output is similar to the following:
preSharedKeys :
- cak : 0123456789abcdef...0123456789abcdef
ckn : 0101016789abcdef...0123456789abcdef
name : key1
startTime : 2023-07-01T21:00:01.000Z
Note the connectivity association key (CAK) and the connectivity association
key name (CKN) for your router's configuration.
If you receive a permissions denied error, verify that you have the correct
permissions. For more information, see Before you begin .
Configure your on-premises router
Refer to your router vendor's documentation to set the following values on your
router for compatibility with Google's routers.
At this point, MACsec isn't enabled on Google's end. To avoid a traffic outage,
don't enable MACsec on your router while setting these values.
Setting
Value
MACsec cipher suite
GCM-AES-256-XPN
GCM-AES-256
Caution: The GCM-AES-256 cipher suite is supported, but not
recommended for high-bandwidth links because it can cause dropped packets
when the control plane is overloaded. We recommend using GCM-AES-256-XPN
to avoid dropped packets.
CAK cryptographic algorithm
AES_256_CMAC
Key server priority
15
Secure association key (SAK) rekey interval
28800 seconds
MACsec confidentiality offset
0
Window size
64
Integrity check value (ICV) indicator
yes
CAK
The value that you previously noted when you got pre-shared keys .
CKN
The value that you previously noted when you got
pre-shared keys.
Secure Channel Identifier (SCI)
enabled
What's next?
Enable MACsec
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
