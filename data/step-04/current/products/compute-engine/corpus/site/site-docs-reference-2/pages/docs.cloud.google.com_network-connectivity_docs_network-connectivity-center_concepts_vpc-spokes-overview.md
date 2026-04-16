---
title: "VPC spokes overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/vpc-spokes-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/vpc-spokes-overview
  title: "VPC spokes overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\
    \ Documentation"
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
VPC spokes overview
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of Virtual Private Cloud (VPC) spokes support in
Network Connectivity Center (NCC).
VPC spokes
Network Connectivity Center provides inter-VPC network connectivity at scale
with the support for VPC spokes. VPC
spokes reduce the operational complexity of managing the individual
pair-wise VPC Network Peering connections through the use of
VPC spokes and a centralized connectivity
management model. VPC spokes can export and import all subnet
routes from other spoke VPCs on a Network Connectivity Center hub. This ensures
full connectivity between all workloads that reside
in all these VPC networks. Inter-VPC network
traffic stays within the Google Cloud network and does not travel through the
internet, which helps to ensure privacy and security.
VPC spokes can be in the same project and organization or in a
different project and organization from the NCC hub.
A VPC spoke can be connected to one hub at a time.
For information about how to create a VPC spoke, see
Create a VPC spoke .
Comparison to VPC Network Peering
VPC spokes support medium to large enterprise requirements by
providing IPv4 and IPv6 subnet route connectivity and IPv4 dynamic route connectivity
using hybrid spokes.
A VPC network can simultaneously be a NCC
VPC spoke and connected to another VPC network
using VPC Network Peering, provided the peered VPC network
isn't a VPC spoke itself.
Keep the following in mind when using NCC VPC
spokes and VPC Network Peering:
Peering subnet routes in a
VPC spoke aren't exported to the hub.
NCC doesn't provide connectivity to resources in a
VPC network that's connected to one VPC spoke
using VPC Network Peering, with the following exception:
A peered service producer VPC network for private services
access can be added as a producer
VPC
spoke .
Feature
VPC Network Peering
VPC spokes
VPC networks
Peerings per VPC network
Active VPC spokes per hub
Subnet ranges (subnet routes)
Subnet ranges per peering group
Subnet routes per route table
Static and dynamic routes
Static routes per peering group
Dynamic routes per region per peering group
Unique dynamic route prefixes per hub route table per region .
Static route exchange isn't supported.
Export filters
Specific filters aren't supported; see
Route exchange options
in the VPC Network Peering documentation.
Up to 16 CIDR ranges supported per VPC spoke.
Inter-VPC NAT
Not supported
Supported
Private Service Connect connection propagation
Not supported
Supported
Producer VPC spoke connectivity from other VPC networks
Not supported
Supported
IP addressing
Internal IPv4 addresses, including private IPv4 addresses and privately
used public IPv4 addresses. See
Valid IPv4 ranges .
Internal and external IPv6 addresses.
Internal IPv4 addresses, including private IPv4 addresses and privately
used public IPv4 addresses. See
Valid IPv4 ranges .
Internal and external IPv6 addresses.
IP address families
Supported configurations:
Exchange only IPv4 subnet ranges
Exchange both IPv4 and IPv6 subnet ranges
Supported configurations:
Exchange only IPv4 subnet ranges
Exchange both IPv4 and IPv6 subnet ranges
Exchange only IPv6 subnet ranges
Performance and throughput (when compared to other VPC
connectivity mechanisms)
Lowest latency, highest throughput (VM-VM equivalent).
Lowest latency, highest throughput (VM-VM equivalent).
VPC spokes in a different project from a hub
By using NCC, you can attach VPC networks,
represented as VPC spokes, to a single hub in a different
project, including a project in a different organization.
This lets you connect your VPC networks across multiple
projects and organizations together at scale.
You can be one of the following types of users:
A hub administrator who owns a hub in one project
A VPC network spoke administrator or network administrator who wants
to add their VPC network in a different project as a spoke to
the hub
The hub administrator controls who can create a VPC spoke in a
different project associated with their hub by using Identity and Access Management (IAM)
permissions. The VPC network spoke administrator
creates a spoke in a different project from the hub. These spokes are inactive
upon creation. The
hub administrator must review them, and can either accept or reject the spoke.
If the hub administrator accepts the spoke, it becomes active.
NCC always automatically accepts spokes created in the same
project as the hub.
For detailed information about how to manage hubs that have VPC
spokes in a different project than the hub, see
Hub administration overview . For detailed
information for spoke administrators, see
Spoke administration overview .
Spoke interaction with VPC Service Controls
NCC supports VPC Service Controls
for cross project and organization spokes. For a spoke in a different project
from the hub, when a new VPC Service Controls perimeter is added, you can't add
new spokes that violate the perimeter. However, existing spokes that you added
before adding the VPC Service Controls perimeter continue to function.
VPC connectivity with export filters
NCC lets you limit how other spokes can connect to a
VPC spoke by using spoke filters. For detailed information
about spoke filters, see
Spoke filters overview .
VPC spokes only support export filters.
Preset topologies
NCC lets you specify the connectivity configuration across all
VPC spokes. You can choose one of the following two preset
topologies:
Mesh topology
Star topology
For detailed information about connectivity topologies, see
Preset connectivity topologies .
For detailed information about how to configure the mesh or star topology for
your VPC spokes, see Configure a hub .
Limitations
This section describes the limitations of VPC spokes in general
and when they are attached to a hub in a different project. These limitations
also apply to producer VPC spokes.
Limitations of VPC spokes
VPC networks can connect with each other in an exclusive manner
through either the NCC hub or through VPC Network Peering.
You can't use VPC Network Peering between two VPC spokes
that are also connected using an NCC hub. However, consider
the following:
A producer VPC spoke requires a peering connection to a
VPC spoke on the same hub. Connectivity through
NCC isn't established between the producer
VPC spoke and its peered VPC spoke.
You can have a NCC-connected VPC spoke that is
peered through VPC Network Peering with a
separate VPC that isn't a part of NCC.
You can use VPC Network Peering between two VPC spokes
in the edge spoke group of a hub configured to use the
star topology .
This is because NCC doesn't connect spokes in the edge group
to each other.
VPCs connected together by using NCC
and VPC Network Peering in any combination aren't
transitive.
Static routes exchange across VPC spokes isn't supported.
IPv6-based internal passthrough Network Load Balancers aren't reachable among VPC spokes.
IPv6 dynamic route exchange isn't supported.
Auto mode VPC networks aren't supported as
VPC spokes. You can switch from auto mode to custom
VPC network that lets you manually define subnet prefixes for
each region in your VPC network. Once updated, you cannot
undo this action.
Limitations of dynamic route exchange
IPv4 only : NCC only supports exchanging IPv4 dynamic
routes. Exchanging IPv6 dynamic routes isn't supported.
Hybrid spoke compatibility with star topology : A hub configured to use
the star topology
enforces the following limitations on its hybrid spokes:
Hybrid spokes with site-to-site data transfer enabled are only supported in
the center spoke group.
Hybrid spokes without site-to-site data transfer enabled can be in either
the center spoke group or the edge spoke group.
Routing VPC networks that are also VPC spokes :
NCC supports two or more routing VPC
networks
on the same hub only if all of the routing VPC networks
aren't also VPC spokes. If an NCC hub has a
single routing VPC network, that routing VPC
network can optionally also be a VPC spoke:
If you need to make propagated Private Service Connect
connections
available to on-premises networks through the hub's hybrid spokes, the
hub's single routing VPC network must also be connected as a
VPC spoke.
If you don't need to make propagated Private Service Connect
connections available to on-premises networks through the hub's hybrid spokes,
we recommend not configuring a routing VPC network as a
VPC spoke so that the hub can support two or more routing
VPC networks.
Cool-down period after deleting a VPC spoke
For a new spoke for the same VPC network
attached to a different hub, you must wait for the cool-down period of at least
10 minutes. If the adequate cool-down period isn't allowed, the new
configuration might not take effect. This cool-down period isn't needed if the
VPC network is added as a spoke to the same hub.
Quotas and limits
When using dynamic route exchange, carefully monitor your usage of the
number of dynamic routes per hub .
This quota counts usage by destination (prefix) only , without regard to the
priority or next hop of a dynamic route. When the usage of this quota exceeds
its limit, NCC drops routes by destination. If a destination is
dropped, then all dynamic routes with that destination—regardless of
priority or next hop—are no longer sent to the hub.
For detailed quota information, see Quotas and limits .
Billing
The following sections outline details of billing for spoke hours and outbound
traffic.
Spoke hours
Spoke hours are charged to the project where the spoke resource lives and
follows the standard spoke hours pricing. Spoke hours are only charged when
the spoke is in the ACTIVE state.
Outbound traffic
Outbound traffic is charged to the project of the spoke resource
from which traffic originates. Pricing is the same regardless of whether traffic
crosses project boundaries.
Service level agreement
For information about the NCC service level agreement, see
Network Connectivity Center Service Level Agreement (SLA) .
Pricing
For information about pricing, see
NCC pricing .
What's next
To create hubs and spokes, see
Work with hubs and spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
To find solutions for common issues, see
Troubleshooting .
To get details about API and gcloud commands, see
APIs and reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
