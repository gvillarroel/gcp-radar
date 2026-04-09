---
title: "Use connections in other projects \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/using-interconnects-other-projects
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/using-interconnects-other-projects
  title: "Use connections in other projects \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use connections in other projects | Cloud Interconnect | Google Cloud Documentation
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
Required permissions compute.interconnects.get
compute.interconnects.use
Create a VLAN attachment
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Use connections in other projects
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required permissions compute.interconnects.get
compute.interconnects.use
Create a VLAN attachment
What's next
Cross-Cloud Interconnect lets you connect your remote cloud network
to multiple Virtual Private Cloud (VPC) networks. You extend reachability
by adding multiple VLAN attachments to the connection.
As part of this functionality, you can create a VLAN attachment that uses a
Cross-Cloud Interconnect connection that's in a different
project. You can use this approach as long as both resources are in the same
organization .
If appropriate, you can share connectivity between even more
VPC networks by using Shared VPC or
VPC Network Peering. For more information about these approaches, see
Options for connecting to multiple VPC networks .
Note: If you have VLAN attachments associated with multiple VPC
networks that have overlapping IP address ranges, the conflicting IP ranges
might cause traffic to be routed incorrectly by external routers. To
avoid this issue, we recommend that you use a
custom mode VPC network
to assign unique IP address ranges to all of your VPC subnets.
Required permissions
In the project where you create the attachment , you need the
Network Admin role
( roles/compute.networkAdmin ) .
In the project that contains the connection , you need one of the following:
The Network Admin role
( roles/compute.networkAdmin ) or the compute.interconnects.get permission
Minimally, the compute.interconnects.use permission
compute. interconnects. get
If the user has the compute.interconnects.get permission, then the process
of creating the attachment is the same as it is for a network administrator.
compute. interconnects. use
If the user has the compute.interconnects.use permission and does not have
the compute.interconnects.get permission, then the user
does not have visibility into what type of remote cloud the connection uses.
In this case, the Google Cloud console can't detect requirements related to the
remote location.
For example, attachments to Azure require using an IPv4 subnet length of
/30 .
For an administrative user, the Google Cloud console removes the
option to
request a /29 IPv4 subnet. However, it does not do so for users who have only
the compute.interconnects.use permission.
Some constraints are enforced by the API, and in such cases, the
Google Cloud console returns an error if an invalid parameter is specified.
Other constraints are merely advisory, to guide users toward known valid
configurations. For such constraints, the absence of Google Cloud console
advice can result in incompatible configuration choices that are not discovered
until further along in the configuration sequence.
The following are sample requirements:
Microsoft Azure attachments require using an IPv4 subnet length of /30 .
Azure attachments require using the same VLAN ID on both ports of a pair.
Amazon Web Services (AWS) attachments require using MD5 authentication for Border Gateway Protocol
(BGP) sessions.
Oracle Cloud Infrastructure (OCI) attachments require using a VLAN ID >= 100 .
Auto-allocated VLAN IDs meet this requirement.
To learn about constraints, consult the following pages:
Create VLAN attachments (AWS)
Create VLAN attachments (Azure)
Create VLAN attachments (OCI)
When you grant a user the compute.interconnects.use permission, inform
them of any constraints.
Create a VLAN attachment
To create a VLAN attachment that uses a Cross-Cloud Interconnect
connection from another project, follow these steps.
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Select the project in which you need to create a VLAN attachment by using
the project picker.
Click Create VLAN attachments , and then select Cross-Cloud Interconnect connection .
In the Encrypt interconnect section, select Set up unencrypted Interconnect ,
and then click Continue .
On the Choose an Interconnect page,
select In another project . Enter the following information:
Project ID : Enter the ID of the project that
contains the Cross-Cloud Interconnect connection.
Interconnect name : Enter the name of the connection.
Click Continue .
For VLAN attachments , click Add VLAN attachment . Provide
the following information:
Name : Specify a name for the VLAN attachment.
Cloud Router : Choose an existing Cloud Router or
create a new one.
The Cloud Router that you choose defines the region and
VPC network to which your VLAN attachment
is available. The Google Cloud ASN is also defined by the
Cloud Router that you choose.
Click Done , and then click Create . The attachment takes a few
minutes to create.
After the attachment is created, click Configure to create a BGP
session on the chosen Cloud Router. The Google and Peer BGP IP
addresses are selected for you automatically.
After you add the BGP session, click Save configuration . The BGP
session is not active until you configure resources in your remote
cloud.
If you have not already created a Cloud Router, create one by
running the following command:
gcloud compute routers create ROUTER_NAME \
--region= REGION \
--asn= GOOGLE_ASN \
--network= NETWORK \
--project= PROJECT_ID
Replace the following:
ROUTER_NAME : a name that you specify for your
Cloud Router
REGION : the Google Cloud region in which
your Cloud Router is created; this region must match the
region used by the VLAN attachment
GOOGLE_ASN : the
private ASN
( 16550 , 64512 - 65534 , 4200000000 - 4294967294 ); it is used
for all BGP
sessions on the same Cloud Router, and it cannot be
changed later
NETWORK : the name of the network to which the
Cloud Router manages routes; this is the same network
that your VLAN attachment uses
PROJECT_ID : the ID for the project in which both
the Cloud Router and VLAN attachment exist; this project
ID is different from the project where the connection
is located
In the project that contains your connections, list all the
Cloud Interconnect connections:
gcloud compute interconnects list \
--project= INTERCONNECT_PROJECT_ID
Replace INTERCONNECT_PROJECT_ID with
that project's ID. Determine the name of the connection
that you need to use.
Determine the self link for the connection that you need to
use:
gcloud compute interconnects describe INTERCONNECT_NAME \
--project= INTERCONNECT_PROJECT_ID \
--format="get(selfLink)"
Replace INTERCONNECT_NAME with its name, and replace
INTERCONNECT_PROJECT_ID with the ID of the project
that contains it.
Create the VLAN attachment:
gcloud compute interconnects attachments dedicated create VLAN_ATTACHMENT_NAME \
--region= REGION \
--router= ROUTER_NAME \
--project= PROJECT_ID \
--interconnect= INTERCONNECT_SELF_LINK \
--candidate-subnets= CANDIDATE_SUBNETS \
--vlan= VLAN_ID
Replace the following:
VLAN_ATTACHMENT_NAME : a name that you specify
for your VLAN attachment
REGION : must match the same region as the
associated Cloud Router
ROUTER_NAME : the name of the
Cloud Router from the first step
PROJECT_ID : the ID for the project in which both
the Cloud Router and the VLAN attachment exist; this project
ID is different from the project where the connection
is located
INTERCONNECT_SELF_LINK : the self link for the
connection that the VLAN attachment uses; the self link
includes the ID of the project that contains the connection itself
CANDIDATE_SUBNETS : an
optional flag that lets you specify comma-delimited ranges of
link-local IP addresses (as CANDIDATE_SUBNETS )
to be used for the BGP session that manages routes for the VLAN
attachment; for more information, see the
Google Cloud CLI documentation
VLAN_ID : an optional flag that lets you
specify a VLAN ID; for more information, see the Google Cloud CLI
documentation
Describe the VLAN attachment that you just created:
gcloud compute interconnects attachments dedicated describe VLAN_ATTACHMENT_NAME \
--region= REGION \
--project= PROJECT_ID \
--format="get(cloudRouterIpAddress,customerRouterIpAddress,tag8021q)"
Replace the following:
VLAN_ATTACHMENT_NAME : its name
REGION : its region
PROJECT_ID : its project ID
Note the following:
cloudRouterIpAddress is the BGP IP address that is used by
the BGP session on the associated Cloud Router.
customerRouterIpAddress is the BGP IP address that you use
to configure the BGP session in your remote cloud.
tag8021q is the VLAN ID, which you might have specified manually
in the previous step.
Create an interface on the Cloud Router:
gcloud compute routers add-interface ROUTER_NAME \
--interconnect-attachment= VLAN_ATTACHMENT_NAME \
--region= REGION \
--interface-name= INTERFACE_NAME \
--project= PROJECT_ID \
Replace the following:
ROUTER_NAME : the name of the
Cloud Router from the first step
VLAN_ATTACHMENT_NAME : the name of the VLAN
attachment that you created and described in these steps
REGION : the region used by the
Cloud Router and the VLAN attachment
INTERFACE_NAME : a name that you specify for the
new interface on the Cloud Router
PROJECT_ID : the ID for the project in which both
the Cloud Router and VLAN attachment exist; this project
ID is different from the project where the connection
is located
CLOUD_ROUTER_IP : the cloudRouterIpAddress that
you determined in the previous step
Add a BGP peer to the new interface on the Cloud Router:
gcloud compute routers add-bgp-peer ROUTER_NAME \
--region= REGION \
--interface-name= INTERFACE_NAME \
--peer-name= BGP_PEER_NAME \
--project= PROJECT_ID \
--peer-asn= PEER_ASN \
--advertised-route-priority= PRIORITY \
--advertisement-mode= ADVERTISEMENT_MODE
Replace the following:
ROUTER_NAME : the name of the
Cloud Router from the first step
REGION : the region used by the
Cloud Router and the VLAN attachment
INTERFACE_NAME : the name of the interface that
you created in the previous step
BGP_PEER_NAME : a name that you specify for the
BGP peer
PROJECT_ID : the ID for the project in which both
the Cloud Router and the VLAN attachment exist; this project
ID is different from the project where the connection
is located
CUSTOMER_ROUTER_IP : the BGP IP address for your
remote cloud; this is the customerRouterIpAddress that you
noted when you described your VLAN attachment
PEER_ASN : the ASN for your remote cloud
PRIORITY : an optional flag that you can use to
set the base priority for the routes that the Cloud Router
advertises to the remote cloud; for more
details about this option and the base metric, see
Advertised prefixes and priorities
ADVERTISEMENT_MODE : an optional flag that you
can use if you want to customize the routes that the Cloud Router
advertises to the remote cloud; for information about default and
custom advertisements, see
route advertisements
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
