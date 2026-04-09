---
title: "Infrastructure maintenance events \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/infrastructure-maintenance-events
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/infrastructure-maintenance-events
  title: "Infrastructure maintenance events \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Infrastructure maintenance events | Cloud Interconnect | Google Cloud Documentation
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
What infrastructure maintenance events are Planned maintenance
Unplanned maintenance
Urgent maintenance
Single links and SLA
Receiving event notifications
Assigning contacts for event notifications
Event notification properties Partner Interconnect event notifications
Outage statuses
View maintenance events
View maintenance events in Unified Maintenance
Next steps
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Infrastructure maintenance events
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What infrastructure maintenance events are Planned maintenance
Unplanned maintenance
Urgent maintenance
Single links and SLA
Receiving event notifications
Assigning contacts for event notifications
Event notification properties Partner Interconnect event notifications
Outage statuses
View maintenance events
View maintenance events in Unified Maintenance
Next steps
This guide describes infrastructure maintenance events and how they can affect
Cloud Interconnect connections.
What infrastructure maintenance events are
Infrastructure maintenance events are times that Google Cloud performs
maintenance on network equipment, including equipment for Cloud Interconnect.
We provide notification, when possible, so that you can plan for the
infrastructure maintenance event and prevent downtime.
Planned maintenance
Google Cloud performs many different types of maintenance events. The
differences between the types of maintenance events are simplified, so that
maintenance events of different types look the same in the Google Cloud console.
Most types of planned maintenance events occur between 10 PM to 5 AM local time
to where the network device is located. For example, if the device is located in
asia-south1, then planned maintenance typically occurs between 10 PM and 5 AM
India Standard Time (UTC+5:30). Planned maintenance events don't have a set
interval between occurrences, but generally occur several times a year.
One type of planned maintenance event, a physical migration, happens Monday to
Friday, 9am to 5pm Eastern Time.
Unplanned maintenance
Emergency, or unscheduled maintenance events, might also occur. Emergency events
are irregular and unplanned-for events that can affect
Cloud Interconnect connections. Unfortunately, emergency events can
happen at any time, without warning. Google recommends that you create high
availability hybrid network topologies to mitigate network outages caused by
emergency maintenance events.
The total capacity that is impacted by an unplanned maintenance event varies
based on the nature of the event. It could be up to 100% of your capacity on one
or more of your Cloud Interconnect connections.
Urgent maintenance
Urgent maintenance events are similar to planned maintenance events, but they
are scheduled less than 14 days in advance. In addition, they impact up to 100%
of the total capacity on each of your affected Cloud Interconnect
connections.
Single links and SLA
A single link in one edge availability domain carries no
SLA . To
prevent loss of access to your services during maintenance, make sure that you
provision two links in different edge availability domains. For more information,
see Create redundant Cloud Interconnect connections with sufficient
capacity .
Receiving event notifications
You receive notifications for planned, unplanned, and urgent maintenance events.
Notifications for planned maintenance events are sent at least 14 days ahead of
the event to the email listed in the nocContactEmail field of the
Cloud Interconnect object and are displayed in the
interconnects.get API method .
For more information, see
Assigning contacts for event notifications .
During unplanned or urgent events, you might receive a notification
for an interruption but not have sufficient time to redirect traffic. To reduce
the chances of traffic disruptions due to emergency interruptions, see
Best practices .
Maintenance events might not happen as planned. We send updated event
notifications if a maintenance event is rescheduled or canceled.
Notifications don't appear in Google Cloud console for
Partner Interconnect users.
Assigning contacts for event notifications
Cloud Interconnect notifies the project owners and also uses the
Essential Contacts
API to send
notifications about maintenance events. If you don't assign a technical
contact to a project, then notifications are sent to fallback
contacts ,
which are based on IAM roles.
To ensure that you receive proper notification about maintenance events, specify
at least one technical contact for any project that hosts a
Cloud Interconnect connection or VLAN attachment.
For more information about assigning technical contacts for a project, see
Managing contacts for
notifications .
Event notification properties
This section applies to Dedicated Interconnect,
Cross-Cloud Interconnect, and Cross-Site Interconnect.
Prior to a planned infrastructure maintenance event,
users receive the following notifications:
An email is sent to all Cloud Interconnect connection
project owners as soon as an impacting maintenance is scheduled.
An email is sent to the address listed in the nocContactEmail field of
the Cloud Interconnect object. You can find and edit this object in
the Google Cloud console on the Cloud Interconnect details page, or by
using the following Google Cloud CLI command:
gcloud compute interconnects describe my-interconnect
An email is sent to any technical
contacts listed for
the project that hosts the Cloud Interconnect connection.
During an unplanned or urgent infrastructure maintenance event, users
receive the following notifications:
An email is sent to all Cloud Interconnect connection
project owners as soon as an impacting maintenance is scheduled.
An email is sent to the address listed in the nocContactEmail field of
the Cloud Interconnect object.
An email is sent to any technical
contacts listed for
the project that hosts the Cloud Interconnect connection.
Partner Interconnect event notifications
Prior to a scheduled infrastructure maintenance event,
Partner Interconnect users receive the following notifications:
An email is sent to any technical
contacts for the
project that hosts the VLAN attachment.
An email is sent to all project owners for the project that hosts the VLAN
attachment.
Outage statuses
Event emails sent to project owners and nocContactEmail contacts include a
section titled "Outage Status". The following describes the possible outage
status states:
Updated : a previously scheduled maintenance event that is updated or
rescheduled.
Overrun : a previously scheduled maintenance event that is in progress
and taking longer than expected to complete.
Completed : a completed maintenance event.
Canceled : a previously scheduled maintenance event that is canceled.
New : a new maintenance event.
No change : a previously scheduled maintenance event that is still
scheduled as previously planned.
View maintenance events
Note: You can't view unplanned maintenance events with the Google Cloud CLI or
the API. You can view urgent maintenance requests with the Google Cloud CLI and
the API, but they're shown as planned maintenance requests.
Select one of the following options:
gcloud REST API
More
To display information about your connection, including upcoming planned
maintenance events, run the following command:
gcloud compute interconnects describe INTERCONNECT_NAME
Replace INTERCONNECT_NAME with the name of the
Cloud Interconnect.
The output is similar to the following; look for expectedOutages :
adminEnabled : true
availableFeatures :
- IF_MACSEC
circuitInfos :
- customerDemarcId : demarc-0
googleCircuitId : circuit-0
googleDemarcId : local-demarc-0
creationTimestamp : '2021-12-15T17:02:48.829-08:00'
customerName : Cymbal Group
description : Interconnect connection
expectedOutages :
- description : ''
endTime : '1705520100000'
issueType : IT_OUTAGE
name : pcr-764913
source : NSRC_GOOGLE
startTime : '1705501500000'
state : CANCELLED
- description : ''
endTime : '1707304200000'
issueType : IT_OUTAGE
name : pcr-777490
source : NSRC_GOOGLE
startTime : '1707285600000'
state : COMPLETED
googleIpAddress : 192.0.2.0/24
googleReferenceId : '6006458259035'
id : '249691500371717847'
interconnectType : IT_PRIVATE
kind : compute#interconnect
labelFingerprint : 42WmSpB8rSM=
linkType : LINK_TYPE_ETHERNET_10G_LR
location : https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/interconnectLocations/sjc-zone1-6
macsec :
failOpen : false
preSharedKeys :
- name : key-1
startTime : '2023-08-08T21:09:21.385Z'
macsecEnabled : false
name : cymbal-group-interconnect
nocContactEmail : cloudysanfrancisco@gmail.com
operationalStatus : OS_ACTIVE
peerIpAddress : 192.0.2.0/24
provisionedLinkCount : 1
requestedLinkCount : 1
selfLink : https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/interconnects/ INTERCONNECT_NAME
state : ACTIVE
To list information about your connection, including upcoming
maintenance events, use
interconnects.get :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/interconnects/ INTERCONNECT_NAME
Replace the following:
PROJECT_ID : the project ID that the
Cloud Interconnect is located in
INTERCONNECT_NAME : the name of the
Cloud Interconnect
The output is similar to the following:
{
"kind" : "compute#interconnect" ,
"description" : "Interconnect connection" ,
"selfLink" : "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/interconnects/ INTERCONNECT_NAME " ,
"id" : "249691500371717847" ,
"creationTimestamp" : "2021-12-15T17:02:48.829-08:00" ,
"name" : " INTERCONNECT_NAME " ,
"location" : "https://www.googleapis.com/compute/v1/projects/ INTERCONNECT_NAME /global/interconnectLocations/sjc-zone1-6" ,
"linkType" : "LINK_TYPE_ETHERNET_10G_LR" ,
"requestedLinkCount" : 1 ,
"interconnectType" : "IT_PRIVATE" ,
"adminEnabled" : true ,
"nocContactEmail" : "" ,
"customerName" : "Cymbal Group" ,
"operationalStatus" : "OS_ACTIVE" ,
"provisionedLinkCount" : 1 ,
"peerIpAddress" : "192.0.2.0/24" ,
"googleIpAddress" : "192.0.2.0/24" ,
"googleReferenceId" : "6006458259035" ,
"expectedOutages" : [
{
"name" : "pcr-764913" ,
"description" : "" ,
"source" : "NSRC_GOOGLE" ,
"state" : "CANCELLED" ,
"issueType" : "IT_OUTAGE" ,
"startTime" : "1705501500000" ,
"endTime" : "1705520100000"
},
{
"name" : "pcr-777490" ,
"description" : "" ,
"source" : "NSRC_GOOGLE" ,
"state" : "COMPLETED" ,
"issueType" : "IT_OUTAGE" ,
"startTime" : "1707285600000" ,
"endTime" : "1707304200000"
}
],
"circuitInfos" : [
{
"googleCircuitId" : "circuit-0" ,
"googleDemarcId" : "local-demarc-0" ,
"customerDemarcId" : "demarc-0"
}
],
"labelFingerprint" : "42WmSpB8rSM=" ,
"state" : "ACTIVE" ,
"macsec" : {
"preSharedKeys" : [
{
"name" : "key-1" ,
"startTime" : "2023-08-08T21:09:21.385Z"
}
],
"failOpen" : false
},
"macsecEnabled" : false ,
"availableFeatures" : [
"IF_MACSEC"
]
}
View maintenance events in Unified Maintenance
You can use Unified Maintenance to view Cloud Interconnect
infrastructure maintenance events, and you can configure
Unified Maintenance to send alerts and notifications about maintenance
events. Notifications don't appear in Unified Maintenance for
Partner Interconnect users.
Follow the steps on the
Configure alerts and notifications
page, but use one of the following inclusion filters when you are prompted to
create one:
This filter includes only planned maintenance notifications:
log_id("maintenance.googleapis.com/maintenance_events") AND jsonPayload.resource.type="compute.googleapis.com/Interconnect" AND jsonPayload.maintenance.title =~ "Planned Outage.*"
This filter includes only urgent maintenance notifications:
log_id("maintenance.googleapis.com/maintenance_events") AND jsonPayload.resource.type="compute.googleapis.com/Interconnect" AND jsonPayload.maintenance.title =~ "Urgent Maintenance.*"
This filter contains only unplanned maintenance notifications:
log_id("maintenance.googleapis.com/maintenance_events") AND jsonPayload.resource.type="compute.googleapis.com/Interconnect" AND jsonPayload.maintenance.title =~ "Unplanned Outage.*"
Alternatively, to view maintenance events with the Scheduled state see
View resource maintenances by using the API .
$ curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://maintenance.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/resourceMaintenances?filter=resource.type%3D%22compute.googleapis.com/Interconnect%22%20AND%20state%3D%22SCHEDULED%22"
Next steps
Implement Cloud Interconnect Best
practices
Manage contacts for
notifications
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
