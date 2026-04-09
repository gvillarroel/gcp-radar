---
title: "Get diagnostics \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/getting-diagnostics
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/getting-diagnostics
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
Diagnostics during outages
Diagnostics during provisioning
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
Diagnostics during provisioning
Use diagnostics
Command output reference
What's next
Cloud Interconnect diagnostics let you troubleshoot your
Cross-Cloud Interconnect connections during provisioning and after
activation. The diagnostics provide you with current, detailed technical
information about the Google Cloud side of your
Cross-Cloud Interconnect connection.
Diagnostics during outages
Diagnostic results might not be available during a
global outage because the
Cross-Cloud Interconnect connection information is provided as
a global resource. A global outage might affect the diagnostics for
Cross-Cloud Interconnect from being fetched. However, these
global outages don't necessarily reflect the functional state of the
interconnects or attachments.
Diagnostics during provisioning
Diagnostics contain different data depending on the stage of the
provisioning process. Your connection must meet the requirements of each
stage before it can move on to the next one.
The stages are as follows:
Stage 1 - Circuit connection:
The optical power state is OK .
bundleOperationalStatus is Down .
Stage 2 - Circuit qualification (multiple links):
The optical power state is OK .
bundleOperationalStatus is Down .
Stage 3 - Production configuration:
The optical power state is OK .
bundleOperationalStatus is Up .
Use diagnostics
To interpret information that you get from the Google Cloud console,
the Google Cloud CLI, or the API, see the
Command output reference section.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.get
compute.interconnects.use
Roles
roles/compute.networkAdmin
Console gcloud API
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the name of your Cross-Cloud Interconnect
connection.
Review the following fields:
For warnings or errors, see the Status field in the upper-left
corner of the page.
For the provisioned capacity of the Cloud Interconnect connection, see
the Provisioned capacity field.
If you suspect issues with the Cloud Interconnect connection, see
the VLAN attachments section for information such as the effective
capacity of the connection or the number of down links.
For additional details, such as light levels, see the Link
circuit info section.
Use the
gcloud compute interconnects get-diagnostics command :
gcloud compute interconnects get-diagnostics NAME \
--project= PROJECT_ID
Replace the following:
NAME : the name of the connection
PROJECT_ID : the ID of the Google Cloud project
The command output should look similar to the following:
result:
bundleAggregationType: BUNDLE_AGGREGATION_TYPE_LACP
bundleOperationalStatus: BUNDLE_OPERATIONAL_STATUS_UP
links:
- circuitId: GCP-00112
googleDemarc: MARKL:MMR A/ 4th floor Cab 04.105.004.704 FP 4 Port 3 Fibers 77,78
-LC
lacpStatus:
googleSystemId: 9c:e1:76:7a:40:de
neighborSystemId: ec:ce:13:e2:99:07
state: ACTIVE
operationalStatus: LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower:
state: OK
value: -2.94
transmittingOpticalPower:
state: OK
value: -1.66
macAddress: 9c:e1:76:7a:40:e3
Use the interconnects.getDiagnostics method :
GET https://compute.googleapis.com/compute/projects/ PROJECT_ID /global/interconnects/ NAME /getDiagnostics
Replace the following:
PROJECT_ID : the ID of the Google Cloud project
NAME : the name of your connection
If this command succeeds, it returns InterconnectDiagnostics output in the
following format.
{
"result": {
"macAddress": "9c:e1:76:7a:40:e3",
"links": [
{
"circuitId": "GCP-00112",
"googleDemarc": "MARKL:MMR A/ 4th floor Cab 04.105.004.704 FP 4 Port 3 Fibers 77,78 -LC",
"receivingOpticalPower": {
"value": -2.97,
"state": "OK"
},
"transmittingOpticalPower": {
"value": -1.67,
"state": "OK"
},
"lacpStatus": {
"state": "ACTIVE",
"googleSystemId": "9c:e1:76:7a:40:de",
"neighborSystemId": "ec:ce:13:e2:99:07"
},
"operationalStatus": "LINK_OPERATIONAL_STATUS_UP"
}
],
"bundleOperationalStatus": "BUNDLE_OPERATIONAL_STATUS_UP",
"bundleAggregationType": "BUNDLE_AGGREGATION_TYPE_LACP"
}
}
Command output reference
To interpret diagnostics output, see the following table.
Note: If you want to create an alert for the value of the
transmitting and receiving optical power, you can take a known good optical
value, give it a 10% margin, and create alerts relative to that
value. In general, a -7dBm warning and a -11dBm alarm are good optical
value estimates for most links.
Output parameter
Description
macAddress
Describes the MAC address of the Cloud Interconnect connection bundle on
the Google Cloud side.
arpCache
Describes individual neighbors seen by the Cloud Router
in the ARP cache for the Cloud Interconnect connection. This is empty when
the connection is not bundled.
arpCache[].macAddress
Lists the MAC address of this ARP neighbor.
arpCache[].ipAddress
Lists the IP address of this ARP neighbor.
links[]
Describes the status for each link on the Cloud Interconnect connection.
links[].circuitId
Lists the Google-assigned unique ID for this circuit, as assigned
during circuit turn-up.
links[].googleDemarc
Describes the Google-assigned demarc, as assigned at circuit
turn-up.
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
ACTIVE: The link is configured and active
within the bundle.
DETACHED: The link is not configured within
the bundle; this state is used when the
bundleAggregationType is STATIC .
links[].lacpStatus.googleSystemId
The system ID of the port on the Google Cloud side of the
LACP exchange.
links[].lacpStatus.neighborSystemId
The system ID of the port on the remote cloud side of the LACP
exchange.
links[].arpCache[]
A list of InterconnectDiagnostics.ARPEntry objects,
describing the ARP neighbor entries seen on this link. This is empty
if the link is bundled.
links[].arpCache[].macAddress
The MAC address of this ARP neighbor on this link.
links[].arpCache[].ipAddress
The IP address of this ARP neighbor on this link.
What's next
To learn more about Cross-Cloud Interconnect, see the
Cross-Cloud Interconnect overview .
To learn about common issues that you might encounter when using
Cross-Cloud Interconnect, see
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
