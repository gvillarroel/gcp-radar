---
title: "View MACsec status \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/view-macsec-status
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/view-macsec-status
  title: "View MACsec status \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View MACsec status | Cloud Interconnect | Google Cloud Documentation
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
MACsec enabled and operational
MACsec enabled, not operational, and fail-open off
MACsec enabled, not all links operational, and fail-open off
MACsec enabled, not operational, and fail-open on
MACsec disabled
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
View MACsec status
Stay organized with collections
Save and categorize content based on your preferences.
On this page
MACsec enabled and operational
MACsec enabled, not operational, and fail-open off
MACsec enabled, not all links operational, and fail-open off
MACsec enabled, not operational, and fail-open on
MACsec disabled
What's next?
This page describes how to view the status of your MACsec for Cloud Interconnect
circuits.
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The Link circuit info section displays the following information:
Google circuit ID: the name of the link circuit.
Link state: the link's physical state, one of the following:
check_circle Active
to indicate that the LACP member link is up.
error LACP
Detatched to indicate that the LACP member link is down.
MACsec key name: the link's MACsec status and the MACsec key used
to secure the connection. The status displays one of the following:
check_circle : MACsec is
operationally up and the link is encrypted.
warning :
MACsec is operationally down and the link is unencrypted.
Receiving optical power: a status indicator and the optical
light level that the physical interface detects from the remote
transmitter in
dBm .
Transmitting optical power: a status indicator and the
optical light level that the physical interface is transmitting to the
remote receiver in dBm.
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
Disabled: MACsec encryption is disabled on the link.
To view the status of your circuits, use the following command:
gcloud compute interconnects get-diagnostics INTERCONNECT_CONNECTION_NAME
Replace INTERCONNECT_CONNECTION_NAME with the name of your
Cloud Interconnect connection.
The output is similar to the following; look for the bundleOperationalStatus
set to BUNDLE_OPERATIONAL_STATUS_UP , the circuitId lacpStatus state
set to ACTIVE , and the operationalStatus set to
LINK_OPERATIONAL_STATUS_UP :
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_STATIC
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : true
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In this example, MACsec is enabled and operational on the circuit.
The following items indicate a circuit's status:
bundleOperationalStatus : the circuit bundle's status, which is one of
the following:
BUNDLE_OPERATIONAL_STATUS_UP : the circuit bundle is up.
BUNDLE_OPERATIONAL_STATUS_DOWN : the circuit bundle is down.
links.lacpStatus.state : the circuit's link aggregation control
protocol (LACP) state, which is one of the following:
ACTIVE : LACP is active.
DETACHED : LACP is inactive.
links.macsec.CKN : the connectivity association key name (CKN) that
MACsec for Cloud Interconnect is actively using for this connection.
You can use gcloud compute interconnects macsec get-config
INTERCONNECT_CONNECTION_NAME to display all the keys
configured for your Cloud Interconnect connection. For more
information, see Get MACsec
keys .
If you have more than one key configured, then the key with the
latest start time is selected as the active key. Google's edge routers
reject any new MACsec sessions that attempt to use the older keys.
links.macsec.operational : the MACsec status of the circuits, which is
one of the following:
true : MACsec is operational on this circuit.
false : MACsec is not operational on this circuit.
links.operationalStatus : the MACsec status of the link, which is one of
the following:
LINK_OPERATIONAL_STATUS_UP : the Cloud Interconnect
connection is operationally up.
LINK_OPERATIONAL_STATUS_DOWN : the Cloud Interconnect
connection is operationally down.
The following sections demonstrate examples of
MACsec for Cloud Interconnect states and how they look in the output for
the Google Cloud CLI and the Google Cloud console.
MACsec enabled and operational
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The following items indicate that MACsec is enabled and operational. The
links are passing traffic:
Link state: displays
check_circle Active
for all links.
MACsec key name: displays
check_circle
for all links. The MACsec key name is listed after each connection.
Click the MACsec tab. The following items indicate that MACsec is
configured and operational:
MACsec configuration: displays one of Enabled, fail opened or
Enabled, fail closed .
Pre-shared keys: displays Active, in use for at least one
key's Key status .
The output is similar to the following; look for the
bundleOperationalStatus set to BUNDLE_OPERATIONAL_STATUS_UP , the
circuitId lacpStatus state set to ACTIVE , and the
operationalStatus set to LINK_OPERATIONAL_STATUS_UP :
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_STATIC
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : true
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In the example, the following items indicate that MACsec is enabled and
operational. The link is passing traffic:
bundleOperationalStatus: BUNDLE_OPERATIONAL_STATUS_UP
links.lacpStatus.state: ACTIVE
links.macsec.ckn: 0101010189abcdef...0123456789abcdef
links.macsec.operational: true
links.operationalStatus: LINK_OPERATIONAL_STATUS_UP
MACsec enabled, not operational, and fail-open off
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The following items indicate that MACsec is disabled and non-operational.
The links are not passing traffic:
Link state: displays error LACP Detached for all links.
MACsec key name: displays
warning
for all links. The MACsec key name is listed after each connection.
Click the MACsec tab. The following items indicate that MACsec is
configured and not operational:
MACsec configuration: displays Down .
Pre-shared keys: displays Active, in use for at least one
key's Key status .
The output is similar to the following; look for the bundleOperationalStatus
set to BUNDLE_OPERATIONAL_STATUS_DOWN , the circuitId lacpStatus state
set to DETACHED , and the operationalStatus set to
LINK_OPERATIONAL_STATUS_UP ::
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_LACP
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_DOWN
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : DETACHED
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : false
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In the example, links.macsec indicates that MACsec is enabled. The
following items indicate that MACsec is not operational and that the link is not
passing traffic:
bundleOperationalStatus: BUNDLE_OPERATIONAL_STATUS_DOWN
links.lacpStatus.state: DETACHED
links.macsec.ckn: 0101010189abcdef...0123456789abcdef
links.macsec.operational: false
links.operationalStatus: LINK_OPERATIONAL_STATUS_UP
In this case, Google can't establish a MACsec session. Therefore
links.macsec.operational is false . Because MACsec is a lower-level Layer 2
security protocol, all packets for higher-level protocols are dropped,
including LACP. This results in bundleOperationalStatus being set to
BUNDLE_OPERATIONAL_STATUS_DOWN and links.lacpStatus.state being set to
DETACHED .
However, MACsec doesn't affect the status of the physical link; therefore,
links.operationalStatus remains LINK_OPERATIONAL_STATUS_UP when MACsec is
down as long as the physical layer is operational.
MACsec enabled, not all links operational, and fail-open off
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The following items indicate that MACsec is enabled, not all links are
operational, and that some links are passing traffic:
Link state: displays error LACP Detached for one or more
links, and check_circle Active for at least one
link.
MACsec key name: displays warning MACsec on this link is down for
one or more links, and check_circle MACsec on this link is up
for at least one link. The MACsec key name is listed after each
connection.
Click the MACsec tab. The following items indicate that MACsec is
configured and not operational:
MACsec configuration: displays Enabled, fail closed .
Pre-shared keys: displays Active, in use for at least one
key's Key status .
The output is similar to the following; look for bundleOperationalStatus
set to BUNDLE_OPERATIONAL_STATUS_UP , circuitId lacpStatus state
set to ACTIVE , operationalStatus set to LINK_OPERATIONAL_STATUS_UP ,
circuitId lacpStatus state set to DETACHED , and
operationalStatus set to LINK_OPERATIONAL_STATUS_UP :
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_LACP
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : true
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
- circuitId : LOOP-1
googleDemarc : fake-local-demarc-1
lacpStatus :
googleSystemId : '00:11:22:33:44:66'
neighborSystemId : '66:44:33:22:11:00'
state : DETACHED
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : false
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In the example, the following items indicate that MACsec is enabled and
operational. The circuit is passing traffic, but only on one of the two links
displayed:
bundleOperationalStatus: BUNDLE_OPERATIONAL_STATUS_UP
links.circuitId: LOOP-0:
links.lacpStatus.state: ACTIVE
links.macsec.ckn: 0101010189abcdef...0123456789abcdef
links.macsec.operational: true
links.operationalStatus: LINK_OPERATIONAL_STATUS_UP
links.circuitId: LOOP-1:
links.lacpStatus.state: DETACHED
links.macsec.ckn: 0101010189abcdef...0123456789abcdef
links.macsec.operational: false
links.operationalStatus: LINK_OPERATIONAL_STATUS_UP
In this case, bundleOperationalStatus is BUNDLE_OPERATIONAL_STATUS_UP .
Notice that links.circuitId: LOOP-0 displays that links.lacpStatus.state
is ACTIVE and links.macsec.operational is true . The first link is
functioning as expected and is passing traffic.
However, notice that links.circuitId: LOOP-1 displays that
links.lacpStatus.state is DETACHED and links.macsec.operational is
false . The second link is not functioning as expected and is not passing
traffic.
However, MACsec doesn't affect the status of either physical link; therefore,
both links display links.operationalStatus as LINK_OPERATIONAL_STATUS_UP .
This state remains even when MACsec is down for one of the links, as long as
the physical layer is operational.
MACsec enabled, not operational, and fail-open on
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The following items indicate that MACsec is enabled and non-operational.
The links are passing traffic:
Link state: displays check_circle
Active for all links.
MACsec key name: displays a warning Warning for all links. The
MACsec key name is listed after each connection.
Click the MACsec tab. The following items indicate that MACsec is
configured and not operational:
MACsec configuration: displays Enabled, fail opened .
Pre-shared keys: displays Active for at least one key's
Key status .
The output is similar to the following:
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_LACP
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
macsec :
ckn : 0101010189abcdef...0123456789abcdef
operational : false
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In this example:
links.macsec values indicate that MACsec is enabled.
bundleOperationalStatus displays BUNDLE_OPERATIONAL_STATUS_UP , which
indicates that the Cloud Interconnect connection is operational.
macsec.operational displays false , which indicates that MACsec isn't
operational.
To verify that the Cloud Interconnect connection is set to fail-open,
run the following command:
gcloud compute interconnects describe INTERCONNECT_CONNECTION_NAME
The output is similar to the following for a link set to fail-open; look for
the macsec section where macsecEnabled is set to true :
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
failOpen : true
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
MACsec disabled
Select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Select the Cloud Interconnect connection that you want to view.
The following items indicate that MACsec is disabled. The links aren't
passing traffic:
Link state: displays check_circle
Active for all links.
MACsec key name: displays a empty text and no status for all
links.
Click the MACsec tab. The following items indicate that MACsec is
configured and not operational:
MACsec configuration: displays Disabled .
Pre-shared keys: displays Active for at least one key's Key
status .
The output is similar to the following; look for the bundleOperationalStatus
set to BUNDLE_OPERATIONAL_STATUS_UP , the circuitId lacpStatus state
set to ACTIVE , and the operationalStatus set to
LINK_OPERATIONAL_STATUS_UP :
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_STATIC
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
In the example, the fact that links.macsec is missing from the output
indicates that MACsec is disabled and not operational. The link is
passing unencrypted traffic.
Because MACsec is disabled, both links.macsec.ckn and
links.macsec.operational don't display a value.
What's next?
Rotate MACsec keys
Disable MACsec
Get MACsec keys
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
