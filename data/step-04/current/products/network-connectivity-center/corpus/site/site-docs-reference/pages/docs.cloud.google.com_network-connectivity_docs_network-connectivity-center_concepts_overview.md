---
title: "NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview
  title: "NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation"
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
NCC overview
Stay organized with collections
Save and categorize content based on your preferences.
Network Connectivity Center (NCC) is an orchestration framework that simplifies network
connectivity among spoke resources that are connected to a central
management resource called a hub . NCC supports the following
types of spokes:
Virtual Private Cloud (VPC) spokes
Producer VPC spokes
NCC Gateway spokes
Hybrid spokes, that can be associated with any of the following resources:
HA VPN tunnels
Cloud Interconnect VLAN attachments
Router appliance VMs
Cross-Cloud Interconnect VLAN attachments
Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview )
With the hub and spoke connectivity, you can do the following:
Connect multiple VPC networks to one another. The VPC
networks can be located across different projects in the same Google Cloud organization or
different organizations.
Connect multiple VPC networks to on-premise or other cloud
provider networks.
These external networks can be reachable through any type of hybrid spoke.
This approach is known as site-to-cloud connectivity.
Use Router appliance VMs to manage connectivity between your VPC
networks.
Use a Google Cloud VPC network as an enterprise wide
area network (WAN) to connect networks that are outside of Google Cloud.
You can establish connectivity between your external sites by using any type
of hybrid spoke. This approach is known as site-to-site
connectivity .
How it works
When a hub uses VPC spokes, you can configure connectivity
between these VPC networks connected to the hub by exchanging
subnet routes between all or some of the VPC networks.
When a hub uses both VPC spokes and hybrid spokes, any to any
connectivity is supported across all of these spokes.
When a hub uses hybrid spokes located in a single VPC network,
you can also configure site-to-site data transfer
so that the dynamic routes whose next hops are a hybrid spoke—for example, a
Cloud Interconnect VLAN attachment—are advertised
to an on-premises network by the BGP sessions of the other hybrid spokes in
that VPC network.
See the following sections for a detailed description of hubs and spokes.
Hubs
An NCC hub is a global resource to which you attach
spokes. A single hub can contain spokes from multiple regions. However, if
any of the spokes of a hub use the site-to-site data transfer feature, the resources
associated with those spokes must all be in the same VPC network.
Spokes that don't use site-to-site data transfer can be associated with any
VPC network in your project.
Spokes
A spoke represents one or more Google Cloud network resources that are
connected to a hub.
When you create a spoke, you must associate it with at
least one supported connectivity resource, which is also called a
backing resource .
A spoke can use any of the following Google Cloud resources as its backing
resource.
VPC spokes
VPC spokes let you connect two or more VPC
networks to a hub so that the networks exchange
subnet routes . VPC spokes
attached to a single hub can reference VPC networks
in the same project or a different project (including a project
in a different organization).
VPC spokes export subnet routes to the hub and import subnet
routes and dynamic routes from the hub.
For detailed information about VPC spokes, see
VPC spokes overview .
VPC spokes provide connectivity among IPv4 and IPv6
subnet ranges from multiple VPC networks. You can configure each
VPC spoke to export subnet ranges as follows:
Only IPv4 subnet ranges
Both IPv4 and IPv6 subnet ranges
Only IPv6 subnet ranges
Consider a spoke whose VPC network has a mix of
subnet stack types . If you configure the spoke
to export only IPv6 subnet ranges, then IPv6 subnet ranges
from dual-stack and IPv6-only subnets are exchanged, but IPv4 subnet ranges from
IPv4-only and dual-stack and subnets aren't exchanged.
Producer VPC spokes
If you have an existing VPC spoke that consumes a service from a
producer network in another project through VPC Network Peering, you can make the
service reachable by the other spokes in your NCC hub
by creating a producer VPC spoke.
For detailed information about producer VPC spokes, see
Producer VPC spokes .
Gateway spokes
NCC Gateway is a regional spoke type attached to the NCC
hub. It enables security for Cross-Cloud Network traffic.
NCC Gateway enables third-party Security Service Edge (SSE)
inspection.
For detailed information about NCC Gateway spokes, see
NCC Gateway overview .
Hybrid spokes
A hybrid spoke represents one or more network connectivity resources that
are connected to a hub. A hybrid spoke type can be any of the following
resources that a spoke is associated with:
Router appliance VMs
HA VPN tunnels
Dedicated Interconnect VLAN attachments
Partner Interconnect VLAN attachments
Cross-Cloud Interconnect VLAN attachments
Partner Cross-Cloud Interconnect for AWS VLAN attachments
A single hybrid spoke can be associated with more than one resource of
the same type. For example, a hybrid spoke can reference two or more
HA VPN tunnels, but that same hybrid spoke cannot
also reference Router appliance VMs or Cloud Interconnect
VLAN attachments. A hybrid spoke must be in the same project as the
NCC hub.
Site-to-site data transfer using hybrid spokes requires that the spokes
be located in the same VPC network. For more information, see
Site-to-site data transfer overview .
Router appliance spokes
A spoke associated with a Router appliance VM instance supports the
following use cases:
IPv4 site-to-cloud connectivity : establish connectivity between an
external site and your VPC network resources.
IPv4 site-to-site data transfer : use Google's network as part of a wide
area network (WAN) that includes your external sites to move data between all
the sites.
IPv4 connectivity between VPC networks : use a third-party
network virtual appliance to establish connectivity between your
VPC networks.
All of the site-to-site spokes that are connected to the same hub must
have all of their backing resources in the same VPC network.
HA VPN tunnel spokes
A spoke associated with Cloud VPN (HA VPN) tunnels
supports the following use cases:
IPv4 site-to-cloud connectivity : Establish connectivity between an
external site and your VPC network resources.
IPv4 site-to-site data transfer : Use Google's network as part of a wide
area network (WAN) that includes your external sites to move data between all
the sites.
All of the appliances linked to from a single spoke, and all of the
Cloud VPN tunnels, VLAN attachments, must be in the same VPC
network.
Cloud Interconnect VLAN attachment spokes
A spoke associated with Cloud Interconnect VLAN attachments
supports the following use cases:
IPv4 site-to-cloud connectivity : all of the appliances linked to
from a single spoke must be in the same VPC network.
IPv4 site-to-site data transfer : all of the Cloud VPN tunnels,
VLAN attachments, or both, must be in the same VPC
network.
Partner Cross-Cloud Interconnect for AWS
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
A Partner Cross-Cloud Interconnect for AWS provides an on-demand method for
establishing cross-cloud transport without having to manually set up networking
components. This transport is associated with a customer NCC hub
and creates hybrid spokes.
For detailed information about Partner Cross-Cloud Interconnect for AWS connectivity,
see the Partner Cross-Cloud Interconnect for AWS overview .
Route exchange with VPC connectivity
NCC VPC spokes support exchanging the following
subnet ranges:
IPv4 subnet ranges
IPv6 subnet ranges
IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can
also be exchanged with VPC spokes or other hybrid spokes.
Import of hub subnets for hybrid spokes
You can achieve the automatic advertisement of VPC spoke IP
subnet ranges to on-premises and other cloud provider networks through BGP by
enabling the import of hub subnets for hybrid spokes. When enabled, any new
VPC subnets that are created or deleted, and are in the hub route
table, are automatically imported by hybrid spokes and advertised through BGP
to their remote peers.
Note: Subnets from routing VPC networks for hybrid spokes are always
advertised regardless of this configuration.
To automatically advertise VPC spoke subnet IP address ranges
to hybrid spokes, use the --include-import-ranges flag with the
ALL_IPV4_RANGES field during spoke creation. By default, the
--include-import-ranges field is empty, which means that no hub subnets are
imported to new or existing hybrid spokes until the ALL_IPV4_RANGES is
specified. Hybrid spokes can also send privately used public IP address ranges
to the NCC hub ( Preview ).
Spoke filters
NCC lets you limit the connectivity between spokes
by using spoke filters.
For detailed information about spoke filters, see
Spoke filters overview .
For detailed information about how to create hybrid spokes, see
Work with spokes .
Example use cases
The following sections describe the main NCC use cases.
Connect different VPC networks with NCC
When you attach two or more VPC spokes to a hub,
NCC provides connectivity through subnet routes among all
the VPC networks that are represented by the spokes.
Using a hub simplifies the management of large-scale mesh subnet
connectivity. See quotas
for how many VPC networks can be connected to a hub.
The following diagram shows two VPC spokes.
Connect spokes to a VPC network (click to enlarge).
On-premises connectivity for VPC spokes
VPC spokes can connect to on-premises networks by using hybrid
spokes located in other (routing) VPC networks. Each
NCC hub supports multiple VPC spokes and
Cloud Interconnect VLAN attachments, HA VPN tunnels,
or Router appliance VMs added as hybrid spokes.
Connect networks using Router appliance VMs
NCC can use Router appliance VMs in the following two
IPv4 connectivity scenarios:
Connecting a VPC network to an on-premises or other cloud
provider network using dynamic routes
Connecting two VPC networks to each other using dynamic routes
With this option, Cloud Router manages the BGP sessions for
Router appliance VMs.
Connect an external network to Google Cloud
The following diagram uses a hybrid spoke with a Router appliance VM
to connect two VPC networks to an external network. The
Cloud Router VM has one network interface (NIC) in each VPC
network.
Connect an external network to Google Cloud (click to enlarge).
For more information about this use case, see
Site-to-cloud topologies that use a third-party appliance .
Manage connectivity between VPC networks
The following diagram uses a hybrid spoke with a Router appliance VM
running specialized firewall or packet inspection software to connect two
VPC networks.
Use a third-party firewall (click to enlarge).
For more information, see
VPC-to-VPC topology that uses a third-party appliance .
Conduct data transfer over Google's network (site-to-site)
Data transfer provides IPv4 connectivity between external networks using
a Google Cloud VPC network and hybrid spokes. You can
transfer data between multiple on-premises networks or to other cloud networks.
When you create a hybrid spoke, you can enable the data transfer option for
that spoke. When data transfer is enabled for hybrid spokes connected to the
same hub, the dynamic routes learned by each Router appliance VM,
Cloud VPN tunnel, or Cloud Interconnect VLAN attachment are
re-advertised to the other VMs, tunnels, or VLAN attachments associated with
any hybrid spoke connected to the same hub. Data transfer requires that all
hybrid spokes refer to Router appliance VMs, Cloud VPN tunnels,
or Cloud Interconnect VLAN attachments in a single VPC
network.
For example, suppose you have data centers in New York, Sydney, and Tokyo. After
you use supported resources to connect your VPC network to each
of these sites, you could create a spoke to represent each network. After you
complete this setup, NCC would provide full mesh connectivity
between all three sites.
As shown in the following diagram, you can create spokes that rely on
connectivity resources such as Cloud VPN, Cloud Interconnect,
and Router appliance.
The diagram doesn't show Cross-Cloud Interconnect, but you can also
use Cross-Cloud Interconnect VLAN attachments.
Data transfer over Google's network (click to enlarge).
For more information about this use case, see
Site-to-site data transfer overview .
Note: Data transfer is available only in
supported regions .
NCC considerations
Before setting up NCC, review the following sections.
IP addressing
IP version support depends on the spoke type:
VPC spokes : NCC supports the following IP
versions:
IPv4 and IPv6 for
the exchange of subnet ranges.
You can configure VPC spokes to
exchange only IPv4 subnet ranges, only IPv6 subnet ranges, or
both IPv4 and IPv6 subnet ranges.
IPv4 addresses only for the exchange of dynamic routes.
Hybrid spokes : NCC supports IPv4 only. For example:
If a spoke has site-to-site data transfer enabled, the resources
associated with the spokes support IPv4 traffic only. This statement applies
to all hybrid spoke types: Router appliance, VLAN attachment, and VPN
spokes.
Site-to-cloud Router appliance spokes support IPv4 traffic only.
When you create a Router appliance VM, the VM's primary internal IPv4 address
must be an RFC 1918 address.
Routing
Routes installed by NCC hybrid spokes are treated as dynamic routes.
For information about how dynamic routes are handled in comparison with other
types of routes, see
Applicability and order
in the VPC documentation.
Resource
Applicable use cases
Prioritization
All hybrid spoke resources use Cloud Routers. For details about how Cloud Routers process learned routes to create dynamic routes in a VPC network or NCC hub, see Learned routes in the Cloud Router documentation.
ASN
All non-Google peering routers that are associated with a single spoke must use
the same ASN when advertising prefixes to the Cloud Router. This is important
because, if two peers advertise the same prefix with different ASNs or AS paths,
only one peer's ASN and AS path is readvertised for that prefix.
Different spokes must have different ASNs. That is, if two BGP sessions belong to
different spokes, they must have different ASNs.
Also, if you are using the data transfer feature, you must assign ASNs as described in ASN requirements for site-to-site data transfer .
BGP sessions
BGP communities are not supported.
Route advertisement changes when using site-to-site data transfer
When you add an Cloud Interconnect VLAN attachment or Cloud VPN tunnel
to a hybrid spoke, NCC updates the corresponding BGP session for the VLAN
attachment or Cloud VPN tunnel so that it re-advertises the prefixes learned by
BGP sessions of the other Cloud Interconnect VLAN attachments or Cloud VPN
tunnels connected to any of the hub's hybrid spokes that have the site-to-site data transfer
option enabled.
Support for other products
The following sections describe how NCC works with other
networking products and features.
VPC spokes and VPC Network Peering
NCC VPC spokes support exchanging the following:
Valid IPv4 subnet ranges
IPv6 subnet ranges
IPv4 dynamic routes
VPC spokes don't support exchanging the following:
Peering subnet routes
Local routes with privately used public IPv4 addresses
Local subnet routes with IPv6 addresses
VPC spokes don't exchange static routes; however, VPC
spokes can import NCC IPv4 dynamic routes from hybrid spokes that
are on the same NCC hub.
For more information about NCC VPC spokes, see
VPC spokes overview .
For details about how routes are exchanged using VPC Network Peering, see
route exchange options
in the VPC Network Peering documentation.
Even though NCC VPC spokes don't support exchanging
static routes, a spoke VPC network can still import the static
and routes from another VPC network by using VPC Network Peering.
Additionally, a VPC spoke can still import dynamic routes from
another VPC network by using VPC Network Peering.
If the other VPC network has dynamic routes with next hop
Cloud Interconnect VLAN attachments or Cloud VPN tunnels that connect to
an on-premises network, you can connect the spoke VPC network to the
on-premises network by using Cloud Router custom route
advertisements
and VPC Network Peering route exchange options
as described in the transit network example of the VPC Network Peering
documentation .
Shared VPC networks
Shared VPC networks can be added as VPC spokes to a
NCC hub. The hub can be in any project.
These VPC spokes can connect
to the hub from the same project or as VPC spokes in a
different project from a hub .
We recommend assigning the networkconnectivity.googleapis.com/spokeAdmin role
to administrators of service projects. For details on this role and other
NCC roles, see
Roles and permissions .
Legacy networks
Spoke resources cannot be part of a legacy network .
VPN tunnels
Classic VPN tunnels are not supported.
Data transfer
If you're using data transfer, review the
Considerations section
in the site-to-site data transfer overview.
Service level agreement
For information about the NCC service level agreement, see
Network Connectivity Center Service Level Agreement (SLA) .
Pricing
For information about pricing, see
NCC pricing .
What's next
To learn how to manage hubs and spokes, see
Work with hubs and spokes .
To learn how to use Cloud VPN spokes, see
Connect two sites by using Cloud VPN spokes .
To obtain a list of partners whose solutions are integrated with NCC,
see NCC partners .
To view NCC quotas and limits, see Quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
