---
title: "Get diagnostics \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/get-diagnostics
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/get-diagnostics
  title: "Get diagnostics \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Get diagnostics | Cloud Interconnect | Google Cloud Documentation
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
Diagnostics during outages
Diagnostics during provisioning Provisioning stages
Use diagnostics
Command output reference
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Get diagnostics
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Diagnostics during outages
Diagnostics during provisioning Provisioning stages
Use diagnostics
Command output reference
What's next
Cloud Interconnect diagnostics let you troubleshoot your
Cross-Site Interconnect connections during provisioning and after
activation.
The diagnostics provide you detailed technical information about the
Google Cloud Cross-Site Interconnect connections on
demand.
Diagnostics during outages
In the event of a global outage ,
don't use the diagnostics results from your
Cross-Site Interconnect connection to make decisions about
where to redirect your network traffic. A Cross-Site Interconnect
connection is a global resource. A global outage can prevent the diagnostics for
Cloud Interconnect from functioning properly.
Diagnostics during provisioning
Viewing diagnostics provides you with the information required to troubleshoot
and fix problems in your on-premises router configuration, which can be helpful
if your Cross-Site Interconnect connection fails to progress
through the provisioning process.
The diagnostics results contain different data depending on what
stage in the provisioning process your
Cross-Site Interconnect connection is in. The major and minor
steps are listed in the next section. This diagnostic information provides you
with possible next steps
to take to help ensure that the provisioning process progresses without further
issues.
Use the command output reference to interpret diagnostic
command results or the information provided in the Google Cloud console.
Provisioning stages
The Cross-Site Interconnect connection provisioning process
occurs in the following stages. You must meet the requirements in stage 1
before you can move on to stage 2:
Stage 1, circuit connection
The optical power state is OK for each link in the connection.
Stage 2, production configuration
The optical power state is OK for each link in the connection.
A temporary IP address is assigned to the untagged bundle interface.
Google Cloud verifies connectivity through a ping. The test
IP address is removed when the activation process is complete.
Use diagnostics
To see diagnostics information for the Cross-Site Interconnect
connection, follow these steps.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.get
compute.interconnects.use
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Console gcloud API
More
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the Physical connections tab, select the name of a
Cross-Site Interconnect connection.
Diagnostics information is in the following locations on the connection
details page:
For warnings or errors, see the Status field.
For the provisioned capacity of the
Cross-Site Interconnect, see
the Provisioned capacity field.
For additional details, such as link status and light levels, see the
Link circuit info section.
For details such as the effective capacity of the connection or status
of its wire groups, see the Wire groups section.
Use the gcloud compute interconnects get-diagnostics command :
gcloud compute interconnects get-diagnostics NAME \
--project= PROJECT_ID
Replace the following:
NAME : the name of the
Cross-Site Interconnect connection in your project
PROJECT_ID : the ID of the Google Cloud project
Use the interconnects.getDiagnostics
method :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/interconnects/ NAME /getDiagnostics
Replace the following:
PROJECT_ID : the ID of the Google Cloud project
NAME : the name of the Cross-Site Interconnect connection in your
project
If this command succeeds, it returns InterconnectDiagnostics output. To interpret the output, see the
command output reference later in this document.
Command output reference
The definitions for the output parameters for the gcloud commands and the
interconnects.getDiagnostics
API are listed in the following table.
Note: If you want to trigger on-premises warnings for the value of the
transmitting and receiving optical power, you can take a known good optical
value, give it a 10% margin, and trigger warnings relative to that value.
In general, a -7dBm warning and a -11dBm alarm are good optical value
estimates for most links.
Output parameter
Description
macAddress
Describes the MAC address of the Cross-Site Interconnect connection bundle on
the Google Cloud side.
links[]
Describes the status for each link on the Cross-Site Interconnect connection.
links[].circuitId
Lists the Google-assigned unique ID for this circuit, as assigned
during circuit turn-up.
links[].googleDemarc
Describes the Google-assigned demarc, as assigned at circuit
turn-up and provided by Google to the customer in the LOA.
links[].macsec
The link's MACsec state. This field is omitted if you don't have
MACsec enabled.
links[].macsec.ckn
The connectivity association key name (CKN) in use. This
field is omitted if you don't have MACsec enabled.
links[].macsec.operational
The link's MACsec state. This field is omitted if you don't
have MACsec enabled. The following are the possible values:
TRUE: MACsec is operational on the link.
FALSE: MACsec isn't operational on the link.
links[].operationalState
The operational state of this Cross-Site Interconnect link. This field is
omitted if you don't have MACsec enabled. The following are the
possible values:
LINK_OPERATIONAL_STATUS_UP: The link is
operational.
LINK_OPERATIONAL_STATUS_DOWN: The link isn't
operational.
The link's operational state isn't affected by the link's MACsec
state.
links[].receivingOpticalPower
Describes the current value and status for the received light
level.
links[].receivingOpticalPower.value
Lists the current value of the received light level, in dBm.
links[].receivingOpticalPower.state
The status of the current value when compared to the warning
and alarm levels for the receiving transceiver:
OK: The value has not crossed a warning threshold.
LOW_WARNING: The value has crossed below the low warning threshold.
HIGH_WARNING: The value has crossed above the high warning threshold.
LOW_ALARM: The value has crossed below the low alarm threshold.
HIGH_ALARM: The value has crossed above the high alarm threshold.
links[].transmittingOpticalPower
The current value and status for the transmit light level.
links[].transmittingOpticalPower.value
The current value of the transmitting light level,
in dBm .
links[].transmittingOpticalPower.state
The status of the current value when compared to the warning and
alarm levels for the transmitting transceiver:
OK: The value has not crossed a warning threshold.
LOW_WARNING: The value has crossed below the low warning threshold.
HIGH_WARNING: The value has crossed above the high warning threshold.
LOW_ALARM: The value has crossed below the low alarm threshold.
HIGH_ALARM: The value has crossed above the high alarm threshold.
links[].lacpStatus
The LACP information for the single link.
links[].lacpStatus.state
DETACHED: The link is not configured within
the bundle.
What's next
To create a Cross-Site Interconnect connection, see the
Cross-Site Interconnect provisioning overview .
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
