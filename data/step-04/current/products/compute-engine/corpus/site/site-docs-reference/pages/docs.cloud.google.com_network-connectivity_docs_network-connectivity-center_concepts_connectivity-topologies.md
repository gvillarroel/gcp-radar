---
title: "Preset connectivity topologies \_|\_ Network Connectivity Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies
  title: "Preset connectivity topologies \_|\_ Network Connectivity Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Network Connectivity Center
Guides
Send feedback
Preset connectivity topologies
Stay organized with collections
Save and categorize content based on your preferences.
When you create a Network Connectivity Center (NCC) hub, you can choose one of the following
preset topologies . The mesh topology is the default.
Mesh topology
Star topology
Hybrid inspection topology ( Preview ): only
supported with NCC Gateway
After you create a hub with a preset topology, you can't change the
topology.
Spoke groups
Depending on the topology, a hub supports one or more spoke groups .
The types of spokes that can be in each spoke group also depend on the
hub topology. For all topologies, the following characteristics apply:
Each spoke group is a routing domain with its own route table. The spoke
group's route table is updated automatically as spokes are added to or
removed from the spoke group.
Each spoke added to a hub can only belong to one spoke group.
NCC automatically accepts spokes that are added from the
same project as the hub.
NCC offers both automatic acceptance and spoke proposal
review options when adding VPC spokes that are in different
projects from the hub. For more information, see VPC
spokes in a different project from a
hub .
For steps to configure topologies and spoke groups, see Configure a
hub .
Mesh topology
With mesh topology, all spokes on the hub belong to a single spoke group.
If you create a hub without explicitly specifying a topology, the hub topology
defaults to mesh. When you add two or more workload VPC
networks
to the hub as VPC spokes, each VPC spoke exports
its subnet routes according to the configured export include and export exclude filters.
For more information about subnet route exchange among VPC spokes, see
VPC spokes overview .
Mesh topology also supports high scale network connectivity between VPC
spokes and hybrid spokes. Spoke administrators or network administrators for a routing
VPC network that contains hybrid spokes must configure the advertisement
of subnet routes received from VPC spokes. For more information, see
Establishing connectivity between hybrid spokes and VPC
spokes .
The following diagram shows a hub that uses the mesh topology and has three
VPC spokes.
NCC mesh topology connectivity (click to enlarge).
Supported spoke types
Mesh topology supports VPC
spokes ,
producer VPC
spokes ,
and hybrid
spokes
in its single spoke group.
The gcloud network-connectivity hubs groups list --hub
command
only returns the single default spoke group when using mesh topology.
Star topology
The star topology has two spoke groups that provide network segmentation
using separate route tables for each spoke group. The following route
table rules apply to each spoke group:
The center spoke group permits routes in its route table that let
resources in spokes of the center group communicate with resources
in spokes of either the center group or edge group.
The edge spoke group only permits routes in its route table that let
resources in spokes of the edge group communicate with resources
in spokes of the center group. NCC prohibits routes in the
edge spoke group route table that would provide connectivity among
different spokes in the edge group.
Subject to the spoke group route table rules, spoke administrators or network
administrators can do the following.
Use export include
and export exclude filters
to control which subnet ranges a VPC spoke exports to the route
table of the spoke group that the VPC spoke belongs to.
Control which VPC spoke subnet ranges are exported on the BGP
sessions of Cloud Routers in hybrid spokes. For more information,
see Establishing connectivity between hybrid spokes and VPC
spokes .
The following diagram shows star topology connectivity among four VPC
spokes. The center-vpc-a and center-vpc-b VPC spokes are members
of the center spoke group, and the edge-vpc-c and edge-vpc-d VPC
spokes are members of the edge spoke group.
NCC star topology connectivity (click to enlarge).
Supported spoke types
Star topology supports VPC spokes, producer VPC
spokes, and hybrid spokes. The following table shows the spoke groups
that are supported according to the spoke type:
Spoke
Can be in the center spoke group
Can be in the edge spoke group
VPC spoke
Producer VPC spoke
Hybrid spoke with site-to-site data transfer disabled
Hybrid spoke with site-to-site data transfer enabled
The gcloud network-connectivity hubs groups list --hub
command
returns the center and edge groups when using star topology.
Hybrid spoke compatibility with star topology
A hub configured to use the star topology enforces the
following limitations on its hybrid spokes:
Hybrid spokes with site-to-site data transfer enabled must be in
the center spoke group.
Hybrid spokes without site-to-site data transfer enabled can be in either
the center spoke group or the edge spoke group.
For detailed information about how to configure the mesh or star topology for
your VPC spokes, see Configure a hub .
Hybrid inspection topology
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The hybrid inspection topology is only supported with NCC Gateway.
This topology has the following four spoke groups that provide
network segmentation and packet inspection capabilities:
The prod spoke group is designed for production workloads.
The non-prod spoke group is designed for non-production workloads.
The services spoke group is designed for services that are essential
to both production and non-production workloads.
The gateways spoke group supports NCC Gateway spokes
that serve as security checkpoints.
The following rules apply to the route table for each spoke group:
The prod spoke group permits routes in its route table that let resources
in spokes of the prod group communicate with resources in spokes of
the prod group, the services group, or the gateway group. NCC
prohibits routes in the prod spoke group route table that would provide
connectivity to spokes in the non-prod group.
The non-prod spoke group permits routes in its route table that let resources
in spokes of the non-prod group communicate with resources in spokes of
the non-prod group, the services group, or the gateway group. NCC
prohibits routes in the non-prod spoke group route table that would provide
connectivity to spokes in the prod group.
The services spoke group permits routes in its route table that let resources
in spokes of the services group communicate with resources in spokes of
any spoke group.
The gateways spoke group permits routes in its route table that let
each NCC Gateway spoke communicate with resources in spokes of
any spoke group.
Subject to the spoke group route table rules, spoke administrators or network
administrators can do the following:
Use export include and export exclude filters
to control which subnet ranges a VPC spoke exports to the route
table of the spoke group that the VPC spoke belongs to.
Create custom route advertisements on the BGP sessions of Cloud Routers
that manage hybrid connections in NCC Gateway spokes. These
custom route advertisements can include VPC spoke subnet ranges.
For more information, see Add hybrid connections to
NCC Gateway .
Control which VPC spoke subnet ranges are exported on the BGP
sessions of Cloud Routers in hybrid spokes. For more information,
see Establishing connectivity between hybrid spokes and VPC
spokes .
Security Service Edge availability
Security Service Edge (SSE) packet inspection is available only for traffic that
is routed between an NCC Gateway spoke in the gateways spoke group
and a spoke in the prod group, the non-prod group, or the services group.
Note: SSE packet inspection isn't available for traffic that is routed using
Cloud Interconnect VLAN attachments, HA VPN tunnels,
or Router appliances in a hybrid spoke because hybrid spokes must be a member
of the prod group, the non-prod group, or the services group.
The following table summarizes whether routing is permitted, and whether SSE
packet inspection is available, for traffic routed between spokes in different
spoke groups.
Destination resource spoke
Source resource spoke
in the prod group
in the non-prod group
in the services group
in the gateways group
in the prod group
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
in the non-prod group
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
in the services group
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
in the gateways group
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
routing
SSE inspection
Supported spoke types
Hybrid inspection topology supports VPC spokes, producer VPC
spokes, hybrid spokes, and NCC Gateway spokes. The following table
shows the spoke groups that are supported according to the spoke type.
Spoke
Can be in the prod spoke group
Can be in the non-prod spoke group
Can be in the services spoke group
Can be in the gateways spoke group
VPC spoke
Producer VPC spoke
Hybrid spoke with site-to-site data transfer disabled
Hybrid spoke with site-to-site data transfer enabled
NCC Gateway spoke
The gcloud network-connectivity hubs groups list --hub
command
returns the prod, non-prod, services, and gateway groups when using hybrid
inspection topology.
What's next
To learn about NCC, see
NCC overview .
To find solutions for common issues, see
Troubleshoot NCC .
To get details about API and gcloud commands, see
APIs and reference .
To create hubs and spokes, see
Work with hubs and spokes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
