---
title: "Enable MACsec \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/enable-macsec
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/enable-macsec
  title: "Enable MACsec \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable MACsec | Cloud Interconnect | Google Cloud Documentation
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
Enable MACsec for Cloud Interconnect
Verify MACsec configuration
Enable MACsec on your on-premises router
Undrain your Cloud Interconnect connection
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Enable MACsec
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Enable MACsec for Cloud Interconnect
Verify MACsec configuration
Enable MACsec on your on-premises router
Undrain your Cloud Interconnect connection
What's next?
This page describes how to enable MACsec for Cloud Interconnect.
After you generate pre-shared keys and configure your on-premises router to use
them, you need to enable MACsec for Cloud Interconnect. After
MACsec for Cloud Interconnect is enabled, you verify that your
Cloud Interconnect configuration is correctly configured and is using
MACsec
to help protect your data.
Before you begin
If you haven't completed set up, then
set up MACsec
before enabling MACsec for Cloud Interconnect.
Important: When you enable MACsec on your Cloud Interconnect
connection, the connection temporarily experiences packet loss. To avoid
disruption to your connectivity, verify that there is no traffic on your
Cloud Interconnect VLAN attachments before enabling
MACsec for Cloud Interconnect. For more information, see Disable VLAN
attachments .
Enable MACsec for Cloud Interconnect
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the connection that you want to modify.
On the MACsec tab, click Enable .
A confirmation window is displayed. Read the message, and then click
Confirm to confirm that you want to enable MACsec, or Cancel to
cancel.
To enable MACsec for Cloud Interconnect with default settings, run the
following command:
gcloud compute interconnects macsec update INTERCONNECT_CONNECTION_NAME \
--enabled
Replace INTERCONNECT_CONNECTION_NAME with the name of your
Cloud Interconnect connection.
Verify MACsec configuration
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the connection that you want to view.
The Link circuit info section displays the following information:
Google circuit ID: the name of the link circuit.
Link state: the LACP member link's physical state displays a check_circle
Check and Active to indicate that the LACP member link is up.
MACsec key name : displays a check_circle Check and the name of the
MACsec key name to indicate that MACsec is active on the link.
Receiving optical power: a check_circle Check indicates an
acceptable connection. The optical light level that the physical
interface detects from the remote transmitter is displayed in
dBm .
Transmitting optical power: a check_circle Check indicates
an acceptable connection and the optical light level that the physical
interface is transmitting to the remote receiver is displayed in dBm.
Google demarc ID: the Google-assigned unique ID for the link
circuit.
Click the MACsec tab. The MACsec configuration displays one
of the following for your MACsec configuration:
Enabled, fail open: MACsec encryption is enabled on the
link. If MACsec encryption isn't established between both ends, then
the link operates without encryption.
Enabled, fail closed: MACsec encryption is enabled on the
link. If MACsec encryption isn't established between both ends, then
the link fails.
Run the following command:
gcloud compute interconnects describe INTERCONNECT_CONNECTION_NAME
The output is similar to the following 10 GB Cloud Interconnect
example; look for availableFeatures set to IF_MACSEC and the macsec
section:
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
macsec :
failOpen : false
preSharedKeys :
- name : key1
startTime : 2023-07-01T21:00:01.000Z
macsecEnabled : true
name : INTERCONNECT_CONNECTION_NAME
operationalStatus : OS_ACTIVE
provisionedLinkCount : 1
requestedFeatures :
- IF_MACSEC
requestedLinkCount : 1
selfLink : https://www.googleapis.com/compute/v1/projects/my-project1/global/interconnects/ INTERCONNECT_CONNECTION_NAME
selfLinkWithId : https://www.googleapis.com/compute/v1/projects/my-project1/global/interconnects/12345678987654321
state : ACTIVE
The following items specify the Cloud Interconnect connection's
MACsec configuration:
availableFeatures : MACsec capability on the
Cloud Interconnect connection. This parameter is shown only for
10 GB Cloud Interconnect connections, because all
100 GB and 400 GB Cloud Interconnect connections are
MACsec capable by default.
macsec.failOpen : the connection's behavior if
Cloud Interconnect can't establish an MKA session with your
router. The value is either of the following:
false : if an MKA session can't be established, then
Cloud Interconnect drops all traffic.
true : if an MKA session can't be established, then
Cloud Interconnect passes unencrypted traffic.
macsec.preSharedKeys.name : the list of all pre-shared keys
configured for Cloud Interconnect on this link.
macsec.preSharedKeys.startTime : the start time that the current
pre-shared key is considered valid. All keys have infinite validity.
macsecEnabled : MACsec status for Cloud Interconnect on this
link. The value is either of the following:
false : MACsec for Cloud Interconnect is off.
true : MACsec for Cloud Interconnect is on.
This command doesn't display MACsec operational status.
Enable MACsec on your on-premises router
Refer to your router vendor's documentation to enable MACsec on your on-premises
router.
Undrain your Cloud Interconnect connection
If you previously drained your Cloud Interconnect connection, enable
VLAN attachments .
What's next?
Troubleshoot MACsec
View MACsec status
Disable MACsec
Get MACsec keys
Rotate MACsec keys
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
