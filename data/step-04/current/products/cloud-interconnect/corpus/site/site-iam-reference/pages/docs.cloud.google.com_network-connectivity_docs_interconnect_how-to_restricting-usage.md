---
title: "Restrict Cloud Interconnect usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/restricting-usage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/restricting-usage
  title: "Restrict Cloud Interconnect usage \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Restrict Cloud Interconnect usage | Google Cloud Documentation
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
Set a policy to deny a specific VPC network
Set a policy to deny all VPC networks
Set a policy at the organization, folder, or project level
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Restrict Cloud Interconnect usage
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Set a policy to deny a specific VPC network
Set a policy to deny all VPC networks
Set a policy at the organization, folder, or project level
What's next
This document describes how to restrict the set of Virtual Private Cloud (VPC)
networks that can use Cloud Interconnect.
By default, any VPC network can use Cloud Interconnect.
To control which VPC networks can use Cloud Interconnect,
you can set an organization policy. For general information about organization
policies, see
Introduction to the Organization Policy Service .
Using Cloud Interconnect to connect a VPC network to
your on-premises network requires a
VLAN attachment .
An organization policy for restricting Cloud Interconnect
usage allows or denies the creation of VLAN attachments from specified
VPC networks. You can set a policy that allows or denies the
creation of VLAN attachments from a specific VPC network or all
VPC networks in a project, folder, or organization resource.
You can use the following constraints when defining your policy:
constraints/compute.restrictDedicatedInterconnectUsage
This constraint defines the set of VPC networks that you can
use when creating a VLAN attachment using Dedicated Interconnect.
constraints/compute.restrictPartnerInterconnectUsage
This constraint defines the set of VPC networks that you can
use when creating a VLAN attachment using Partner Interconnect.
When you set an organization policy, it only constrains the creation of VLAN
attachments in the future. The policy does not affect previously created VLAN
attachments.
If a user attempts to create a VLAN attachment that violates an organization
policy, they see an error message. The following is an example error message
from running gcloud compute interconnects attachments partner create :
ERROR: (gcloud.compute.interconnects.attachments.partner.create) Could not fetch resource:
- Constraint constraints/compute.restrictPartnerInterconnectUsage violated for projects/example-project.
projects/example-project/global/networks/example-network is not allowed to use the Partner Interconnect.
This page includes example procedures for setting organization policies
to restrict Cloud Interconnect usage.
For more information, including general procedures for setting organization
policies, see the following:
Understanding constraints
Using constraints
Creating and managing organization policies
Before you begin
To set organization policies, you must have the
Organization Policy Administrator role
( roles/orgpolicy.policyAdmin ).
Set a policy to deny a specific VPC network
To set a policy to deny a specific VPC network from using
Cloud Interconnect, follow these steps:
Find your organization ID by entering the following command:
gcloud organizations list
The command output looks like the following example:
DISPLAY NAME ID
example-organization 29252605212
Create a JSON file that defines your policy. The following example JSON
file defines a policy that prevents network-1 in project-1 from using
Dedicated Interconnect:
{
"Constraint": "constraints/compute.restrictDedicatedInterconnectUsage",
"listPolicy": {
"deniedValues": [
"projects/project-1/global/networks/network-1"
]
}
}
Use the gcloud Resource Manager set-policy command to set the organization
policy:
gcloud resource-manager org-policies set-policy JSON_FILE_NAME
--organization= ORGANIZATION_ID
Replace the following:
JSON_FILE_NAME : the name of the JSON file that you
created in the previous step, such as policy-name.json
ORGANIZATION_ID : the ID of the organization that you
previously found
Set a policy to deny all VPC networks
To set a policy to deny all VPC networks from using
Cloud Interconnect, follow these steps:
Find your organization ID by entering the following command:
gcloud organizations list
The command output looks like the following example:
DISPLAY NAME ID
example-organization 29252605212
Create a JSON file that defines your policy. The following example JSON
file defines a policy that prevents all VPC networks from
using Dedicated Interconnect:
{
"Constraint": "constraints/compute.restrictDedicatedInterconnectUsage",
"listPolicy": {
"allValues": "DENY"
}
}
Use the gcloud Resource Manager set-policy command to set the organization
policy:
gcloud resource-manager org-policies set-policy JSON_FILE_NAME
--organization= ORGANIZATION_ID
Replace the following:
JSON_FILE_NAME : the name of the JSON file that you
created in the previous step, such as policy-name.json
ORGANIZATION_ID : the ID of the organization that you
previously found
Set a policy at the organization, folder, or project level
The previous sections describe how to deny a specific VPC network
or all VPC networks. You can also use the syntax described in
List constraints
to allow or deny VPC networks at the organization, project, or
folder level.
What's next
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
