---
title: "Manage connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/manage-connections
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/manage-connections
  title: "Manage connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage connections | Cloud Interconnect | Google Cloud Documentation
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
View connections
Update connections
Delete connections
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Manage connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
View connections
Update connections
Delete connections
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the steps to view, update, and delete
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) connections. To view, update, or delete a
connection, use the transport resource.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
networkconnectivity.remoteTransportProfiles.get to get transport profiles
networkconnectivity.remoteTransportProfiles.list to list transport profiles
networkconnectivity.transports.get to view transports
networkconnectivity.transports.list to view transports
networkconnectivity.transports.update to update a transport
Networkconnectivity.transports.delete to delete a transport
Roles (one of the following)
roles/networkconnectivity.transportAdmin to create a transport
roles/compute.networkAdmin to create a transport
roles/networkconnectivity.transportViewer to view a transport
View connections
To view connections, follow these steps.
gcloud API
More
Use the gcloud network-connectivity transports list command .
gcloud beta network-connectivity transports list \
--region= LOCATION
Your output is similar to the following:
gcloud network-connectivity transport list --region us-east4
| Name | Profile | Bandwidth | State |
|===================|======================|===========|========|
| my-cci-aws | aws-us-east-1 | 1 Gb/s | Active |
| my-cci-aws-123456 | aws-us-east-1 | 1 Gb/s | Active |
Replace the following values:
TRANSPORT_NAME : the name of the transport for which you
want to view details
LOCATION : the location where the connection resides
To get details of a single transport, use the
gcloud beta network-connectivity transports describe command .
gcloud beta network-connectivity transports describe TRANSPORT_NAME \
--region= LOCATION
Replace the following values:
TRANSPORT_NAME : the name of the transport for which you
want to view details
LOCATION : the location where the connection resides
To list all the transports in a specific project and location, use the
networkconnectivity.transports.list method with an empty request body.
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ LOCATION /transports"
Replace the following values:
PROJECT : the name of the project
LOCATION : the location where the connection resides
To get details of a single transport, use the
networkconnectivity.transports.get method .
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ LOCATION /transports/ TRANSPORT_NAME "
Replace the following values:
PROJECT : the name of the project
LOCATION : the location where the connection resides
TRANSPORT_NAME : the name of the transport for which you
want to view details
Update connections
You can update the following two parameters of the transport resource:
description
advertisedRoutes
Changing the advertised routes changes the routes reachable from
AWS. You must provide the updated fields in a mask
on the query parameter.
API
More
Use the networkconnectivity.transports.patch method .
curl -X PATCH -H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ LOCATION /transports/ TRANSPORT_NAME " --data '{
"advertisedRoutes": [" IP_RANGE "]
}'
Replace the following values:
PROJECT : the name of the project
LOCATION : the location where the connection resides
TRANSPORT_NAME : the name of the transport that you want
to update
IP_RANGE : the IP range of the advertised routes, such as
10.128.0.0/9
The response looks similar to the following:
{
{
"advertisedRoutes": [
"10.128.0.0/9"
],
"description": NEW_DESCRIPTION ,
"updateTime": TIME
}
}
Delete connections
Deleting a transport doesn't
delete your resource on the AWS side, so make sure to
clean up both sides of the connection.
gcloud API
More
Use the gcloud beta network-connectivity transports delete command .
gcloud beta network-connectivity transports delete TRANSPORT_NAME
--region= LOCATION
Replace the following values:
TRANSPORT_NAME : the name of the transport that
you want to delete
LOCATION : the location where the transport resides
To delete a single transport, use the
networkconnectivity.transports.delete method with an empty request body.
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ LOCATION /transports/ TRANSPORT_NAME
Replace the following values:
PROJECT : the name of the project
LOCATION : the location where the connection resides
TRANSPORT_NAME : the name of the transport that you want
to delete
What's next
To find answers to common questions about Cloud Interconnect
architecture and features, see the
Cloud Interconnect FAQ .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
To find Google Cloud resource names, see the
Cloud Interconnect APIs .
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
