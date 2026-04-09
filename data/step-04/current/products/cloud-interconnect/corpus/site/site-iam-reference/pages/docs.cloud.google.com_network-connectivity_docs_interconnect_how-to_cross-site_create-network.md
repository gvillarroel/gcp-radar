---
title: "Create a cross-site network \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/create-network
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/create-network
  title: "Create a cross-site network \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a cross-site network | Cloud Interconnect | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Create a cross-site network
Stay organized with collections
Save and categorize content based on your preferences.
You can create cross-site networks
over connections that have
passed all tests
and are ready to use.
Billing for a cross-site network starts when you create wires and
stops when you delete them.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles.
Permissions
compute.interconnects.use
compute.crossSiteNetworks.create
compute.wireGroups.create
Roles
Owner ( roles/owner )
Editor ( roles/editor )
Compute Network Admin ( roles/compute.networkAdmin )
To create a cross-site network, follow these steps:
Console gcloud
More
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the Cross-site networks tab, click Create cross-site network .
Specify the details of the cross-site network:
Name : a name for the cross-site network
Description : an optional description of the cross-site network
Click Next .
Specify the basic details of the wire group to add to the cross-site
network:
Name : a name for the wire group.
Description : an optional description of the wire group.
Select either VLAN mode or Port mode for your wire group. If necessary, review Traffic modes in the Cross-Site Interconnect overview.
In the Unmetered bandwidth field, enter the unmetered bandwidth,
in Gbps, for the wire group.
You can't configure bandwidth that exceeds the following:
Your quota between a given pair of metros or the limit for a given wire.
If you haven't already, follow the instructions to
check quotas and limits for bandwidth .
The Cross-Site Interconnect connection capacity.
For additional considerations for configuring
this field, see Wire bandwidth .
If you configured Port mode , review the Failure detection
field. To enable failure detection, select the Disable port
checkbox.
When you enable failure detection,
Google Cloud continuously monitors each wire and disables a wire
if it loses connectivity so that you can failover to an alternate
path, such as another healthy wire in the group.
Choose whether to allocate the wire group's bandwidth setting to each
wire or to share the bandwidth between all wires in the group.
Allocate per wire . The unmetered bandwidth is allocated to each
wire in the group. Consider the cost implications, because per-wire
allocation reserves double the total bandwidth compared to shared
allocation.
Shared with wire group . The unmetered bandwidth is divided equally
between each wire in the group. However, dynamic throttling allocates
unused unmetered bandwidth to other wires in the group.
Click Next .
Specify the Cross-Site Interconnect connections over which to create
your cross-site network.
Depending on your topology, select the connection or redundant connections that you created for your first site,
Site A .
Depending on your topology, select the connection or redundant connections that you created for your second site,
Site B .
Click Next .
If you configured VLAN mode , specify VLAN tags for each
wire in your wire group by entering an integer from 2 to 4093 .
You can't enter a VLAN tag value that is already in use on the same
Cross-Site Interconnect connection.
Review the configuration of your cross-site network, and then click
Create network .
If necessary, create additional wire groups in the cross-site network
by following the instructions to add a wire group .
You might want to add a wire group for the following reasons:
To add more bandwidth between site A and site B.
To connect additional sites. For example, you can add wire
groups that connect an additional site, site C, to site A and site B.
Google Cloud CLI procedure overview
To complete the procedure for creating a cross-site network by using
the Google Cloud CLI, do the following:
Create a cross-site network
Add a wire group to the cross-site network
Add an endpoint and connections for site A to the wire group:
Add an endpoint that represents site A
Add connection A1
Add connection A2
Add an endpoint and connections for site B to the wire group:
Add an endpoint that represents site B
Add connection B1
Add connection B2
You can create additional wire groups in the cross-site network depending
on your use case:
To add more bandwidth between site A and site B, repeat the steps
for creating a wire group and adding endpoints and connections.
To connect additional sites, repeat the steps for each pair of sites
that you want to connect. For example, you can create an additional wire
group that connects site A to site C, and another that connects site B to site C.
You can also add more wire groups later .
1. Create a cross-site network
To create a cross-site network, use the
gcloud compute interconnects cross-site-networks create command .
gcloud compute interconnects cross-site-networks create CROSS_SITE_NETWORK_NAME \
[--description= DESCRIPTION ]
Replace the following values:
CROSS_SITE_NETWORK_NAME : the name of the cross-site network
DESCRIPTION : an optional description for the cross-site
network
2. Add a wire group
To add a wire group, use the
gcloud compute interconnects wire-groups create command .
gcloud compute interconnects wire-groups create WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--bandwidth-unmetered= UNMETERED_BANDWIDTH \
--bandwidth-allocation= BANDWIDTH_ALLOCATION \
--fault-response= FAILURE_DETECTION \
[--description= DESCRIPTION ]
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to add the wire group to
UNMETERED_BANDWIDTH : the unmetered bandwidth
for the wire group in Gbps. The bandwidth that you specify is allocated
to each wire in the group.
You can't configure bandwidth that exceeds the following:
Your quota between a given pair of metros or the limit for a given wire.
If you haven't already, follow the instructions to
check quotas and limits for bandwidth .
The Cross-Site Interconnect connection capacity.
For additional considerations for configuring
this field, see Wire bandwidth .
BANDWIDTH_ALLOCATION : use this flag to set the
bandwidth allocation scope, which can have either of the following values:
ALLOCATE_PER_WIRE , which provides a separate unmetered bandwidth
allocation for each wire in the group.
SHARED_WITH_WIRE_GROUP , which has one unmetered bandwidth allocation
that is divided across each wire in the group. Dynamic throttling
reallocates unused bandwidth from unutilized or underutilized wires to
other wires in the group.
FAILURE_DETECTION : use this flag for port mode
configurations only. To enable failure detection, enter DISABLE_PORT .
Otherwise, enter NONE .
When you enable failure detection,
Google Cloud continuously monitors each wire and disables a wire
if it loses connectivity so that you can failover to an alternate
path, such as another healthy wire in the group.
DESCRIPTION : an optional description of the wire group.
3a. Add an endpoint for site A
To add an endpoint to the wire group that represents your first site, or
site A , use the
gcloud compute interconnects wire-groups add-endpoint command .
gcloud compute interconnects wire-groups add-endpoint WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_A_LABEL
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to which you are adding a wire group
ENDPOINT_A_LABEL : a label for the endpoint, such
as ashburn
3b. Add connection A1
To add the first Cross-Site Interconnect connection to the
wire group for site A, or connection A1 , use the
gcloud compute interconnects wire-groups add-interconnect command .
gcloud compute interconnects wire-groups add-interconnect WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_A_LABEL \
--interconnect-label= INTERCONNECT_CONNECTION_A1_LABEL \
--interconnect= INTERCONNECT_CONNECTION_A1 \
--vlan-tags= TRAFFIC_MODE
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to which you are adding a wire group
ENDPOINT_A_LABEL : the existing label that you specified
when you created the endpoint for site A
INTERCONNECT_CONNECTION_A1_LABEL : a new label
for the first Cross-Site Interconnect connection that you
created for site A
INTERCONNECT_CONNECTION_A1 : the connection
that you created for site A. You can specify the connection by its name,
partial URI, or full URI. See the following examples:
my-connection
projects/my-project/global/interconnects/my-connection
https://compute.googleapis.com/compute/v1/projects/my-project/global/interconnects/my-connection
TRAFFIC_MODE : the traffic mode configuration for the wires
that use this Cross-Site Interconnect connection:
To configure port mode, enter -1 .
To configure VLAN mode, choose one of the following:
To auto-allocate VLAN tag values, enter 0 .
To specify your own VLAN tag values, enter an integer from 2 to
4093 . VLAN tags must be the same for both endpoints of a wire. You
can't enter a VLAN tag value that is already in use on the
Cloud Interconnect connection.
3c. Add connection A2
gcloud compute interconnects wire-groups add-interconnect WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_A_LABEL \
--interconnect-label= INTERCONNECT_CONNECTION_A2_LABEL \
--interconnect= INTERCONNECT_CONNECTION_A2 \
--vlan-tags= TRAFFIC_MODE
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to which you are adding a wire group
ENDPOINT_A_LABEL : the existing label that you specified
when you created the endpoint for site A
INTERCONNECT_CONNECTION_A2_LABEL : a new label
for the redundant Cross-Site Interconnect connection that you
created for site A
INTERCONNECT_CONNECTION_A2 : the redundant connection
that you created for site A. You can specify the connection by its name,
partial URI, or full URI. See the following examples:
my-connection
projects/my-project/global/interconnects/my-connection
https://compute.googleapis.com/compute/v1/projects/my-project/global/interconnects/my-connection
TRAFFIC_MODE : the traffic mode configuration for the wires
that use this Cross-Site Interconnect connection:
To configure port mode, enter -1 .
To configure VLAN mode, choose one of the following:
To auto-allocate VLAN tag values, enter 0 .
To specify your own VLAN tag values, enter an integer from 2 to
4093 . VLAN tags must be the same for both endpoints of a wire. You
can't enter a VLAN tag value that is already in use on the
Cloud Interconnect connection.
4a. Add an endpoint for site B
To add an endpoint to the wire group that represents your second site, or
site B , use the
gcloud compute interconnects wire-groups add-endpoint command .
gcloud compute interconnects wire-groups add-endpoint WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_B_LABEL
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to which you are adding a wire group
ENDPOINT_B_LABEL : a label for the endpoint, such
as chicago
4b. Add connection B1
To add a Cross-Site Interconnect connection to the wire group
for site B, or Interconnect connection B1 , use the
gcloud compute interconnects wire-groups add-interconnect command .
Note: Adding connections to site B can take several minutes to complete.
gcloud compute interconnects wire-groups add-interconnect WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_B_LABEL \
--interconnect-label= INTERCONNECT_CONNECTION_B1_LABEL \
--interconnect= INTERCONNECT_CONNECTION_B1 \
--vlan-tags= TRAFFIC_MODE
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to which you are adding a wire group
ENDPOINT_B_LABEL : the existing label that you specified
when you created the endpoint for site B
INTERCONNECT_CONNECTION_B1_LABEL : a new label
for the Cross-Site Interconnect connection that you
created for site B
INTERCONNECT_CONNECTION_B1 : the connection
that you created for site B. You can specify the connection by its name,
partial URI, or full URI. See the following examples:
my-connection
projects/my-project/global/interconnects/my-connection
https://compute.googleapis.com/compute/v1/projects/my-project/global/interconnects/my-connection
TRAFFIC_MODE : the traffic mode configuration for the wires
that use this Cross-Site Interconnect connection:
To configure port mode, enter -1 .
To configure VLAN mode, choose one of the following:
To auto-allocate VLAN tag values, enter 0 .
To specify your own VLAN tag values, enter an integer from 2 to
4093 . VLAN tags must be the same for both endpoints of a wire. You
can't enter a VLAN tag value that is already in use on the
Cloud Interconnect connection.
4c. Add connection B2
Note: Adding connections to site B can take several minutes to complete.
gcloud compute interconnects wire-groups add-interconnect WIRE_GROUP_NAME \
--cross-site-network= CROSS_SITE_NETWORK_NAME \
--endpoint-label= ENDPOINT_B_LABEL \
--interconnect-label= INTERCONNECT_CONNECTION_B2_LABEL \
--interconnect= INTERCONNECT_CONNECTION_B2 \
--vlan-tags= TRAFFIC_MODE
Replace the following values:
WIRE_GROUP_NAME : the name of the wire group that you
created previously.
CROSS_SITE_NETWORK_NAME : the name of the cross-site
network to add the wire group to.
ENDPOINT_B_LABEL : the existing label that you specified
when you created the endpoint for site A.
INTERCONNECT_CONNECTION_B2_LABEL : a new label
for the redundant Cross-Site Interconnect connection that you
created for site B.
INTERCONNECT_CONNECTION_B2 : the redundant connection
that you created for site B. You can specify the connection by its name,
partial URI, or full URI. See the following examples:
my-connection
projects/my-project/global/interconnects/my-connection
https://compute.googleapis.com/compute/v1/projects/my-project/global/interconnects/my-connection
TRAFFIC_MODE : the traffic mode configuration for the wires
that use this Cross-Site Interconnect connection:
To configure port mode, enter -1 .
To configure VLAN mode, choose one of the following:
To auto-allocate VLAN tag values, enter 0 .
To specify your own VLAN tag values, enter an integer from 2 to
4093 . VLAN tags must be the same for both endpoints of a wire. You
can't enter a VLAN tag value that is already in use on the
Cloud Interconnect connection.
Previous
arrow_back
Test connections
Next
Configure on-premises routers
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
