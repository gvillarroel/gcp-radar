---
title: "Connect additional networks \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/connect-additional-networks
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/connect-additional-networks
  title: "Connect additional networks \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Connect additional networks
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to connect additional networks to your volumes.
Google Cloud NetApp Volumes uses private services access
to host your volumes. Volumes are provisioned on a tenant VPC
within a service-internal project. The tenant VPC is connected to
your project VPC using VPC peering. Therefore,
only clients connected to your project VPC can access the
volumes. If you want to grant access to the volumes to clients on different
networks, you have to establish additional network connections.
The following are the connectivity options:
Shared VPCs : a common approach is to put both
NetApp Volumes and all client VMs on the same shared
VPC, while keeping the VMs in different service projects for
workload isolation and billing purposes.
Flex Unified and Flex File service levels only : Network Connectivity Center (NCC) offers service transitivity . For more information, see Connect additional networks with NCC .
VPN connection : if you connect an additional VPC to your
project VPC using VPN instead of VPC peering,
you can bypass the transitive routing restriction of VPCs.
VPC peering : if you connect additional VPCs to your
project's VPC using peering, clients on those
VPCs can't connect to your volumes as VPC
peering doesn't provide transitive routing .
However, you can establish direct peerings between these additional
VPCs and the tenant VPC. For more information,
see Connect additional networks with manual peering .
Interconnects : if you connect additional networks to your project
VPC using interconnects, you can configure transitive routing.
Connect additional networks with manual peering
NetApp Volumes establishes connectivity by creating a
private services access tenant project and network, which is then connected
with your specified project network by VPC peering. To enable
clients in other networks to access the same volumes, you can peer additional
VPCs from your projects to this tenant network.
For any requests to peer an additional VPC with a
NetApp Volumes tenant project, contact Google Cloud Customer Care .
Before you proceed, we recommend that you review the
VPC peering documentation to learn about
VPC peering limitations, limits, and billing.
Connect additional networks with NCC
You can connect storage pools that use either the Flex Unified or Flex File
service level to other networks by using Google NCC .
Considerations
Use NCC to connect your consumer VPC to your NCC
hub, and create a producer VPC spoke for the NetApp Volumes
service. Your project VPC must be peered with
NetApp Volumes using private services access as described in
Configure private services access . Creating the producer
VPC spoke doesn't affect the peering, and the spoke doesn't
create connectivity.
NCC connections support only the Flex Unified and Flex File service levels.
Your project VPC might also include resources of the Standard,
Premium, and Extreme service levels, but resources using these service levels
won't be accessible from other NCC spokes.
Using NCC incurs additional
charges . These include an hourly
charge for VPC spokes connected to the hub and data transfer
charges for VPC spokes. The data transfer charges from the
NetApp Volumes VPC producer spoke are billed to
the user project that owns the volumes where the spoke is created.
You can only change the description of the VPC producer spokes.
To change other parameters, you must delete and re-create the spoke.
NCC quotas apply to VPC producer spokes, which count towards
active spoke limits, and to exported routes to the hub's route table.
To create the spoke, administrators need network.use permissions for the
consumer VPC and spokes.create and spokes.update
permissions.
Create a producer VPC spoke
Use the following instructions to create a producer VPC spoke using the
Google Cloud console or Google Cloud CLI.
Console
In the Google Cloud console, go to the Network Connectivity Center
page.
Go to NCC
Create an NCC hub, if needed.
Make sure you have created a spoke to your consumer VPC
that's already peered with NetApp Volumes using private
services access.
To create a VPC producer spoke to the
NetApp Volumes service, complete the following steps:
Click the Spokes tab.
Click Add spokes .
In the Select hub section, select your hub.
Click Next step .
In the Add spokes section, complete the following steps:
Choose the Spoke type as Producer VPC network .
Click the Consumer VPC spoke drop-down list, and select your
consumer VPC spoke peered to
NetApp Volumes.
Enter the peering name as sn-netapp-prod in the
Peering name field.
Click Done .
After you create the VPC producer spoke, click
Add a spoke to add more producer spokes for other consumer
VPCs that are also peered with
NetApp Volumes.
When you have finished adding spokes, click Create . The
NCC page shows details about the spokes you created.
gcloud
After you create the NCC hub and spoke to your consumer
VPC that's already peered with NetApp Volumes
using private services access, run the following command to create a
VPC producer spoke.
gcloud network-connectivity spokes linked-producer-vpc-network create SPOKE_NAME \
--hub = HUB_URI \
--description = DESCRIPTION \
--network = HOME_VPC_URI \
--peering = sn-netapp-prod \
--group = "center" \
--global \
--exclude-export-ranges = EXCLUDE_RANGE \
--include-export-ranges = INCLUDE_RANGE
Replace the following information:
SPOKE_NAME : the name of the new
VPC producer spoke.
HUB_URI : the Uniform Resource Identifier (URI)
for the existing NCC hub.
DESCRIPTION : the description for the spoke.
HOME_VPC_URI : the URI for the VPC
network that contains the peering to NetApp Volumes. The
peering must already exist and be in the ACTIVE state.
EXCLUDE_RANGE : Optional: to exclude subnets from
being exported by the producer VPC to the NCC hub. Exclude
these subnets on both the consumer and VPC producer
spokes.
INCLUDE_RANGE : Optional: to include subnets that
can be exported by the producer VPC to the NCC hub.
The peering name for the consumer VPC with NetApp Volumes is
sn-netapp-prod . Setting the group to center is used with NCC star
topologies ,
but not for mesh topologies.
What's next
Manage hubs and spokes .
Supported services for producer VPC spokes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
