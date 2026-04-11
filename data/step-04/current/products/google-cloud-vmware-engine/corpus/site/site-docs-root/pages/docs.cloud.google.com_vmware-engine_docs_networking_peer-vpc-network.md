---
title: "Peer a VPC network \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network
  title: "Peer a VPC network \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Peer a VPC network
Virtual Private Cloud network peerings define network connectivity between
Google Cloud VMware Engine networks, Google VPCs, and other services.
This document describes how to create a VPC network peering
between a VMware Engine network and another network.
Types of peerings
The following types of peerings are supported:
Standard: A connection from the VMware Engine network to a VPC within the
same or different project.
Shared VPC: A VMware Engine network can peer with
Shared VPC. Use standard peering when peering with
Shared VPC.
VMware Engine network: A connection between VMware Engine
networks within the same or different project.
Private services access: A connection used for establishing private services
access, for example, to peer with services such as Cloud SQL.
Google Cloud NetApp Volumes: A connection to Google Cloud NetApp Volumes.
Dell PowerScale: A connection to Dell PowerScale Storage.
Third-party service: A connection to third-party services. Most third-party
services require manual setup of reverse peering on the VPC network associated
with the third-party service.
Note: A peering configuration establishes the intent to connect to another
VPC network. Your VMware Engine network and the
other network are not connected until each one has a peering configuration for
the other.
If you are peering to a network in a different project, you must complete
creation of the VPC network peering in both projects by
completing the peering in the project where the VMware Engine network
and private cloud are located. To do this, follow these steps:
Switch to the project of the VPC you are trying to peer
with.
In the VPC target project, return to the
VMware Engine VPC Network Peerings and select to
peer a VMware Engine network in another project.
Specify the project ID and VMware Engine network name, and then
peer with the VPC you want to complete the bi-directional
peering.
Create a VPC network peering with VPC
To create a new VPC network peering with VPC using the
Google Cloud console, Google Cloud CLI or Google Cloud VMware Engine, do the following.
The following examples creates a new VPC network peering a
VMware Engine network ven1 and a VPC
network vpc .
Console
To create a new VPC network peering using the
Google Cloud console, do the following:
In the Google Cloud console, go to the VPC Network peerings
page.
Go to VPC Network peerings
Click Select a project and then select the organization, folder, or project
that contains the VMware Engine network you want to peer.
Click Create .
In the Name field, provide a name for your network peering, for
example peering1 .
In the VMware Engine network section, specify the VMware Engine
network you want to peer, for example ven1 .
In the Peering section, select Standard as the peered VPC type.
Select a peered VPC name, for example vpc .
Optional: In the Route exchange section, choose the route exchange behavior
you want for the network peering.
Click Create .
gcloud
To create a new VPC network peering using the
Google Cloud CLI, use the gcloud vmware network-peerings create command :
gcloud vmware network-peerings create NETWORK_PEERING_ID \
--description=" DESCRIPTION " \
--peer-network-type=STANDARD \
--peer-network= VPC_NETWORK_ID \
--vmware-engine-network= VMWARE_NETWORK_ID
Replace the following:
+ ` NETWORK_PEERING_ID ` : a name for your network
peering . For example `peering1` .
+ ` DESCRIPTION ` : a description for this
request , such as "Peering VPC with standard VEN" .
+ ` VPC_NETWORK_ID ` : the network ID for the
VPC network . For example , `vpc` .
+ ` VMWARE_NETWORK_ID ` : the
VMware Engine network ID . For example , `ven1` .
API
To create a new VPC network peering using the
VMware Engine API, make a POST request:
POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/networkPeerings?network_peering_id= NETWORK_PEERING_ID " -d '{
"vmware_engine_network": "projects/ PROJECT_ID /locations/global/vmwareEngineNetworks/ VMWARE_NETWORK_ID ",
"description": " DESCRIPTION ",
"peer_network_type": "STANDARD",
"peer_network": "projects/ VPC_PROJECT_ID /global/networks/ VPC_NETWORK_ID "
}'
Replace the following:
+ ` PROJECT_ID ` : the project ID for your
VMware Engine network .
+ ` NETWORK_PEERING_ID ` : a name for your network
peering . For example `peering1` .
+ ` VMWARE_NETWORK_ID ` : the
VMware Engine network ID . For example , `ven1` .
+ ` DESCRIPTION ` : a description for this
request , such as "Peering VPC with standard VEN" .
+ ` VPC_PROJECT_ID ` : the project ID for your
VPC network .
+ ` VPC_NETWORK_ID ` : the network ID for the
VPC network . For example , `vpc` .
Create a VPC network peering with two VMware Engine networks
To create a new VPC network peering with another
VMware Engine using the Google Cloud console, Google Cloud CLI or
VMware Engine API, do the following. The following examples peers two
VMware Engine networks ven1 and ven2 .
Console
To create a new VPC network peering with another
VMware Engine using the Google Cloud console, do the following:
In the Google Cloud console, go to the VPC Network peerings
page.
Go to VPC Network peerings
Click Select a project and then select the organization, folder, or project
that contains the VMware Engine network you want to peer.
Click Create .
In the Name field, provide a name for your network peering.
In the VMware Engine network section, specify the VMware Engine
network you want to peer.
In the Peering section, select VMware Engine network as the
Peering type .
Select VMware Engine network name, for example ven1 and peered
VMware Engine network name, for example ven2 .
Optional: In the Route exchange section, choose the required
route exchange behavior for the network peering.
Click Create .
gcloud
To create a new VPC network peering with another
VMware Engine using the Google Cloud CLI, use the gcloud vmware network-peerings create command :
gcloud vmware network-peerings create NETWORK_PEERING_ID \
--description=" DESCRIPTION " \
--peer-network-type=VMWARE_ENGINE_NETWORK \
--peer-network= VMWARE_NETWORK_ID_1 \
--vmware-engine-network= VMWARE_NETWORK_ID_2
Replace the following:
+ ` NETWORK_PEERING_ID ` : a name for your network
peering . For example `peering2` .
+ ` DESCRIPTION ` : a description for this
request , such as "Peering two VMware Engine networks" .
+ ` VMWARE_NETWORK_ID_1 ` : the network ID for one
VMware Engine network . For example , `ven1` .
+ ` VMWARE_NETWORK_ID_2 ` : the network ID for the
other VMware Engine network . For example , `ven2` .
API
To create a new VPC network peering with another
VMware Engine using the VMware Engine API, make a POST
request:
POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/networkPeerings?network_peering_id= NETWORK_PEERING_ID " -d '{
"vmware_engine_network": "projects/ PROJECT_ID /locations/global/vmwareEngineNetworks/ VMWARE_NETWORK_ID_1 ",
"description": " DESCRIPTION ",
"peer_network_type": "VMWARE_ENGINE_NETWORK",
"peer_network": "projects/ PROJECT_ID /global/networks/vmwareEngineNetworks/ VMWARE_NETWORK_ID_2 "
}'
Replace the following:
+ ` PROJECT_ID ` : the project ID for your
VMware Engine network .
+ ` NETWORK_PEERING_ID ` : a name for your network
peering . For example `peering2` .
+ ` VMWARE_NETWORK_ID_1 ` : the network ID for one
VMware Engine network. For example, ven1 .
+ DESCRIPTION : a description for this
request, such as "Peering two VMware Engine networks".
+ VMWARE_NETWORK_ID_2 : the network ID for the
other VMware Engine network. For example, ven2 .
Caution: When you connect multiple VPC networks to the same
private cloud, ensure that there's no overlap with subnet address ranges or
published routes from NSX. Otherwise, you might see unexpected behaviors,
including the inability to connect to your VMware Engine private
clouds.
List network peering
To confirm the creation of a peering, you can list VPC
network peerings in a project using VMware Engine using the
Google Cloud console, Google Cloud CLI or Google Cloud VMware Engine by doing the
following:
Console
If you want to list a network peering in a project using the
Google Cloud console, do the following:
In the Google Cloud console, go to the VPC Network peerings page.
Go to VPC Network peerings
Click Select a project and then select the organization, folder, or project
that contains the VMware Engine network you want to list details for.All network peerings are listed on the summary page.
gcloud
If you want to list a network peering in a project using the
Google Cloud CLI, use the gcloud vmware network-peerings list command :
gcloud vmware network-peerings list
API
If you want to list a network peering in a project using the
VMware Engine API, make a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/networkPeerings"
Replace PROJECT_ID with the project ID for your
VMware Engine network.
Edit network peering
To edit a network peering description using the Google Cloud CLI or
Google Cloud VMware Engine, do the following:
gcloud
If you want to edit a network peering description using the Google Cloud CLI,
use the gcloud vmware network-peerings update command :
gcloud vmware network-peerings update NETWORK_PEERING_ID \
--description="Updated description of the network peering"
Replace NETWORK_PEERING_ID with the name for your
network peering. For example peering1 .
API
If you want to edit a network peering description using the
Google Cloud VMware Engine, make a PATCH request:
PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/networkPeerings/ NETWORK_PEERING_ID ?update_mask=description" -d '{
"description": " DESCRIPTION "
}'
Replace the following:
+ ` PROJECT_ID ` : the project ID for your
VMware Engine network .
+ ` NETWORK_PEERING_ID ` : the name for your
network peering . For example `peering1` .
+ ` DESCRIPTION ` : a new description for this
request , such as "Updated description of the network peering" .
Describe network peering
You can get the description of a network peering to verify updates using the
Google Cloud CLI or VMware Engine API by doing the following:
gcloud
To get the description of a network peering using the Google Cloud CLI, run
the gcloud vmware network-peerings describe command : This example
uses the network peering name peering1 :
gcloud vmware network-peerings describe NETWORK_PEERING_ID
Replace NETWORK_PEERING_ID with the name for your
network peering. For example peering1 .
API
To get the description of a network peering using the VMware Engine API,
make a GET request. This example uses the peering name peering1 :
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/networkPeerings/ NETWORK_PEERING_ID "
Replace the following:
+ ` PROJECT_ID ` : the project ID for your
VMware Engine network .
+ ` NETWORK_PEERING_ID ` : the name for your
network peering . For example `peering1` .
Routing limits
The maximum number of routes that a private cloud can receive is 200 . For
example, those routes can come from on-premises networks, peered
VPC networks, and other private clouds in the same VPC network.
This route limit corresponds to the Cloud Router maximum number of custom
route advertisements per BGP session limit.
In a given region, you can advertise at most 250 unique routes from
VMware Engine to your VPC network using private
services access. For example, those unique routes include private cloud
management IP address ranges, NSX workload network segments, and HCX internal
IP address ranges. This route limit includes all private clouds in the region
and corresponds to the Cloud Router learned route limit.
For information about routing limits, see Cloud Router Quotas and limits .
What's next
Manage your private cloud resources and activity .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
