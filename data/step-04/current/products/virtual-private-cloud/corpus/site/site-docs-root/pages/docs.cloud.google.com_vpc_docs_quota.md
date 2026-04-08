---
title: "Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/quota
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/quota
  title: "Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quotas and limits | Virtual Private Cloud | Google Cloud Documentation
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
Virtual Private Cloud
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Virtual Private Cloud (VPC)
All resources
VPC pricing
Announcement of pricing changes for egress traffic
Announcement of pricing changes for external IPv4 addresses
All networking pricing
Quotas and limits
Release notes
All Google Cloud networking release notes
Getting support
Billing questions
Service Level Agreement
Google network locations
Network edge locations
Cloud CDN cache locations
Cloud Interconnect colocation facility locations
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
Quotas Per project
Per network
Deprecated quotas
Limits Shared VPC limits
Per network
IP address limits
Per instance
Connection logging limits
Hybrid connectivity
Effective limits for per-peering group quotas Effective limits example
Manage quotas Permissions
Check your quota
Errors when exceeding your quota
Request additional quota
Resource availability
Home
Documentation
Networking
Virtual Private Cloud
Resources
Was this helpful?
Send feedback
On this page
Quotas Per project
Per network
Deprecated quotas
Limits Shared VPC limits
Per network
IP address limits
Per instance
Connection logging limits
Hybrid connectivity
Effective limits for per-peering group quotas Effective limits example
Manage quotas Permissions
Check your quota
Errors when exceeding your quota
Request additional quota
Resource availability
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and limits that apply to
Virtual Private Cloud (VPC) networking.
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
There are also system limits on VPC resources.
System limits can't be changed.
Quotas
To change a quota, see
requesting additional quota .
Per project
This table highlights important global quotas for VPC resources
in each project. For other quotas, see the
Quotas page in the Google Cloud console.
To monitor per-project quotas using Cloud Monitoring, set up monitoring
for the metric serviceruntime.googleapis.com/quota/allocation/usage on the
Consumer Quota resource type. Set additional label filters ( service ,
quota_metric ) to get to the quota type. For information about monitoring quota
metrics, including finding limit names and metric names, see Use quota
metrics . Each quota has a limit and a
usage value.
Note: You can request an increase for a per-project quota's limit by using the
Google Cloud console. If the edit option is not available for a quota, file a
support case to ask if the quota's limit can be increased.
Quota
Description
Network bandwidth
GCE VM to internet
egress bandwidth Mbps
Total egress bandwidth from Google Cloud VMs in one region to destinations
outside of a VPC network (using the default internet gateway). This quota's usage is
charged to the project that contains the Compute Engine VMs that emit the packets.
Excludes traffic sent to Google APIs and services by using
Private Google Access .
Excludes traffic sent to Google APIs and services from
VMs with external IP addresses .
Inter-region network egress bandwidth (Mbps) from Compute instances
Total egress bandwidth from Google Cloud VMs in one region to destinations that are
routable within a VPC network (using next hops that are not the default internet gateway). This quota's usage is
charged to the project that contains the Compute Engine VMs that emit the packets.
Shared VPC
Shared VPC service projects per host project
Number of Shared VPC service projects that can be attached to a
Shared VPC host project.
In addition to this quota, see Shared VPC
project limits .
General
Networks
Includes the default network, which you can
remove.
Policy-based routes
The number of policy-based routes that you can create in your project.
Routers
The number of Cloud Routers that you can
create within your project, in any network and region. Networks also
have a limit on the number of Cloud Routers in any given
region . For details, see
Cloud Router quotas and limits .
Packet Mirrorings
The number of Packet Mirroring policies
that you can create in your project, in any network and region.
Load balancer and protocol forwarding rules
See Forwarding
rules in the load balancing quotas documentation.
Internal IP addresses
Internal IP addresses
The number of static regional internal IPv4
addresses that you can reserve in each region in your project.
Regional static internal IPv6 address ranges
The number of static regional internal IPv6
address ranges that you can reserve in each region in your project.
Static global internal IPv4 addresses
The number of static global internal IPv4 address ranges that you can reserve in your project,
such as allocated IPv4 address ranges for
private services access and IPv4 addresses reserved for Private Service Connect
endpoints that are used to access global Google APIs. For IP address ranges, each range is a contiguous internal IP address range.
Internal ranges
The number of internal range resources that you can reserve in your
project.
External IP addresses
Static IP addresses
The number of static regional external IPv4
addresses that you can reserve in each region in your project.
Regional static external IPv6 address ranges
The number of static regional external IPv6
address ranges that you can reserve in each region in your project.
Static IP addresses global
The number of static global external IP addresses
that you can reserve in your project.
In-use IP
addresses
The number of static and ephemeral regional external IP addresses
that you can use in your project simultaneously.
In-use IP
addresses global
The number of static and ephemeral global external IP addresses
that you can use in your project simultaneously.
Address move requests per minute
The system limit for the global number of address move requests that you can make per minute.
Address move requests per minute per region
The system limit for the number of address move requests that you can make per minute per region.
Bring your own IP (BYOIP)
Static BYOIP IP addresses
The number of bring your own IP
regional external IP addresses that you can reserve in each region in
your project.
Limit name: STATIC-BYOIP-ADDRESSES-per-project-region
Metric: compute.googleapis.com/regional_static_byoip_addresses
Static BYOIP IP addresses global
The number of bring your own IP
global external IP addresses that you can create in your project.
Limit name: STATIC-BYOIP-ADDRESSES-per-project
Metric: compute.googleapis.com/global_static_byoip_addresses
Public advertised prefixes
The number of public advertised prefixes (PAPs) that you can create in your
project.
Limit name: PUBLIC-ADVERTISED-PREFIXES-per-project
Metric: compute.googleapis.com/public_advertised_prefixes
Public V2 advertised prefixes create requests per minute
The number of create requests for regional public advertised prefixes that you can
make per minute. This quota applies to both v1 and v2 public advertised prefixes.
Limit name: PublicAdvertisedPrefixV2CreateRequestsPerMinutePerProject
Metric: compute.googleapis.com/regional_v2_public_advertised_prefixes_create_requests
Public V2 advertised prefixes delete requests per minute
The number of delete requests for regional public advertised prefixes that you can
make per minute. This quota applies to both v1 and v2 public advertised prefixes.
Limit name: PublicAdvertisedPrefixV2DeleteRequestsPerMinutePerProject
Metric: compute.googleapis.com/regional_v2_public_advertised_prefixes_delete_requests
Public V2 advertised prefixes announce requests per minute
The number of announce requests that you can make per minute for regional
public advertised prefixes.
Limit name: PublicAdvertisedPrefixV2AnnounceRequestsPerMinutePerProject
Metric: compute.googleapis.com/regional_v2_public_advertised_prefixes_announce_requests
Regional public delegated prefixes
The number of regional public delegated prefixes (PDPs) that you can
create in each region.
Limit name: PUBLIC-DELEGATED-PREFIXES-per-project-region
Metric: compute.googleapis.com/regional_public_delegated_prefixes
Global
public delegated prefixes
The number of global public delegated prefixes that you can
create.
Limit name: PUBLIC-DELEGATED-PREFIXES-per-project
Metric: compute.googleapis.com/global_public_delegated_prefixes
Regional public delegated prefixes create requests per minute per region
The number of create requests for regional public delegated prefixes that you can
make per minute per region.
Limit name: PublicDelegatedPrefixCreateRequestsPerMinPerProjectPerRegion
Metric: compute.googleapis.com/regional_public_delegated_prefixes_create_requests_per_region
Regional public delegated prefixes delete requests per minute per region
The number of delete requests for regional public delegated prefixes that you can
make per minute per region.
Limit name: PublicDelegatedPrefixDeleteRequestsPerMinPerProjectPerRegion
Metric: compute.googleapis.com/regional_public_delegated_prefixes_create_requests_per_region
Regional public delegated prefixes announce requests per minute per region
The number of announce requests that you can make per minute per region
for regional public delegated prefixes. This quota does not apply
to withdraw requests.
Limit name: PublicDelegatedPrefixAnnounceRequestsPerMinPerProjectPerRegion
Metric: compute.googleapis.com/regional_public_delegated_prefixes_announce_requests_per_region
Public delegated prefix with variable prefix length
The number of regional IPv6 public delegated prefixes that
you can create, per project per region.
Limit name: VARIABLE-IPV6-PUBLIC-DELEGATED-PREFIXES-per-project-region
Metric: compute.googleapis.com/regional_variable_prefix_length_public_delegated_prefixes
Private Service Connect
PSC internal LB forwarding rules
The maximum number of Private Service Connect
endpoints (forwarding rules) that a
service consumer can create to connect to producer services. This quota is
per region, per project.
Quota name:
PSC-INTERNAL-LB-FORWARDING-RULES-per-project-region
Number of Regional Endpoints per project per region
The maximum number of Private Service Connect endpoints
that a service consumer can create to connect to regional endpoints. This
quota is per region, per project.
Quota name:
RegionalPerProjectRegionalEndpoints
Service attachments
The maximum number of Private Service Connect
service attachments that a
service producer can create. This quota is per region, per project.
Quota name:
SERVICE-ATTACHMENTS-per-project-region
Network attachments
The maximum number of network attachments that a
Private Service Connect consumer can create. This quota is
per region, per project.
Quota name:
NETWORK-ATTACHMENTS-per-project-region
Service Connection Policies per project per region
The maximum number of service connection policies that a service
consumer can create. This quota is per region, per project.
Quota name:
RegionalPerProjectServiceConnectionPolicies
Service Connection Maps per project per region
The maximum number of service connection maps that a service
producer can create. This quota is per region, per project.
Quota name:
RegionalPerProjectServiceConnectionMaps
Health aggregation policies
The maximum number of health aggregation policies that you can create in your project.
Quota name:
HEALTH-AGGREGATION-POLICIES-per-project
Health sources
The maximum number of health sources that you can create in your project.
Quota name:
HEALTH-SOURCES-per-project
Composite health checks
The maximum number of composite health checks that you can create in your project.
Quota name:
COMPOSITE-HEALTH-CHECKS-per-project
Per network
This table highlights important network quotas. For other quotas, see the
Quotas page in the Google Cloud console.
Information on monitoring the available metrics using Cloud Monitoring is
available at Use quota metrics . Each
quota has a limit and a usage value.
Note: You can request an increase for a per-network quota's limit by using the
Google Cloud console. If the edit option is not available for a quota, file a
support case to ask if the quota's limit can be increased.
A per-network quota usually has a corresponding per-peering group quota
applicable when VPC Network Peering is used. Per-peering group quotas have
the concept of an effective limit .
Quota
Description
Instances & alias IP ranges
Instances per VPC network
The total number of VM network interfaces (NICs) in the
VPC network.
Quota name:
INSTANCES_PER_NETWORK_GLOBAL
Available metrics:
compute.googleapis.com/quota/instances_per_vpc_network/limit
compute.googleapis.com/quota/instances_per_vpc_network/usage
compute.googleapis.com/quota/instances_per_vpc_network/exceeded
IP aliases per VPC network
The total number of
alias IP ranges used by VM network
interfaces (NICs) in the VPC network. This quota counts the
number of alias IP ranges without regard to each range's size (subnet
mask).
In addition to this quota, there is a limit on the
number of alias IP ranges per network interface .
Quota name:
ALIASES_PER_NETWORK_GLOBAL
Available metrics:
compute.googleapis.com/quota/ip_aliases_per_vpc_network/limit
compute.googleapis.com/quota/ip_aliases_per_vpc_network/usage
compute.googleapis.com/quota/ip_aliases_per_vpc_network/exceeded
Subnet IP address ranges
Subnetwork ranges per VPC network
The total number of
subnet IP
address ranges used by subnets in the VPC network.
Includes primary IPv4 address ranges, secondary IPv4 address ranges, and
IPv6 address ranges.
Quota name:
SUBNET_RANGES_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/subnet_ranges_per_vpc_network/limit
compute.googleapis.com/quota/subnet_ranges_per_vpc_network/usage
compute.googleapis.com/quota/subnet_ranges_per_vpc_network/exceeded
Subnetwork ranges per peering group
From the perspective of a VPC network, the total
number of
subnet IP address ranges used by subnets local to the VPC
network and in its directly connected peers. Includes primary IPv4 address
ranges, secondary IPv4 address ranges, and IPv6 address ranges.
Quota name:
SUBNET_RANGES_PEERING_GROUP
Available metrics:
compute.googleapis.com/quota/subnet_ranges_per_peering_group/limit
compute.googleapis.com/quota/subnet_ranges_per_peering_group/usage
VPC Network Peering
Peerings per VPC network
From the perspective of a VPC network, the total
number of other VPC networks it can connect to by using
VPC Network Peering .
Quota name:
PEERINGS_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/peerings_per_network/limit
compute.googleapis.com/quota/peerings_per_network/usage
compute.googleapis.com/quota/peerings_per_network/exceeded
Static and dynamic routes
Static routes per network
From the perspective of all regions of a VPC network,
the total number of static
routes local to the VPC network. This quota applies to
the aggregate of IPv4 and IPv6 static routes.
Quota name:
STATIC_ROUTES_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/static_routes_per_vpc_network/limit
compute.googleapis.com/quota/static_routes_per_vpc_network/usage
compute.googleapis.com/quota/static_routes_per_vpc_network/exceeded
Static routes per peering group
From the perspective of all regions of a VPC network,
the total number of static
routes local to the VPC network and in its directly
connected peers. This quota applies to the aggregate of IPv4 and IPv6 static
routes.
Quota name:
STATIC_ROUTES_PER_PEERING_GROUP
Available metrics:
compute.googleapis.com/quota/static_routes_per_peering_group/limit
compute.googleapis.com/quota/static_routes_per_peering_group/usage
Dynamic routes per region per peering group
From the perspective of each region in a VPC
network, the total number of
dynamic routes local to the
VPC network and in its directly connected peers. This quota
applies to the aggregate of IPv4 and IPv6 dynamic routes.
Quota name:
DYNAMIC_ROUTES_PER_REGION_PER_PEERING_GROUP
Available metrics:
compute.googleapis.com/quota/dynamic_routes_per_region_per_peering_group/limit
compute.googleapis.com/quota/dynamic_routes_per_region_per_peering_group/usage
If the number of dynamic routes exceeds this limit, Google Cloud
adjusts how it imports dynamic routes according to the following
rules:
Google Cloud only drops peering dynamic routes .
Google Cloud uses an internal algorithm when dropping peering
dynamic routes; you can't predict which peering dynamic routes
are dropped.
Subject to Cloud Router
limits , Google Cloud never drops local dynamic routes (those
routes learned by Cloud Router that are local to the
VPC network itself).
If a peering connection causes this limit to be exceeded,
Google Cloud still lets you create the peering connection
without a warning.
Load balancer and protocol forwarding rules
See Forwarding
rules in the load balancing quotas documentation.
Private Service Connect
PSC Google APIs forwarding rules per VPC network
The maximum number of Private Service Connect
endpoints (forwarding rules) that can be used to access Google APIs.
This quota applies to the total number of forwarding rules
used to access Google APIs in all regions.
This quota can't be increased.
See per project for additional
important details about how many global internal addresses you can
create.
Quota name:
PSC_GOOGLE_APIS_FORWARDING_RULES_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/psc_google_apis_forwarding_rules_per_vpc_network/limit
compute.googleapis.com/quota/psc_google_apis_forwarding_rules_per_vpc_network/usage
compute.googleapis.com/quota/psc_google_apis_forwarding_rules_per_vpc_network/exceeded
PSC propagated connections per VPC network
The maximum number of Private Service Connect
propagated connections
that can exist in a consumer's
VPC network .
This quota can't be increased.
Quota name: PSC_PROPAGATED_CONNECTIONS_PER_VPC_NETWORK
Available metrics:
compute.googleapis.com/quota/psc_propagated_connections_per_vpc_network/limit
compute.googleapis.com/quota/psc_propagated_connections_per_vpc_network/usage
compute.googleapis.com/quota/psc_propagated_connections_per_vpc_network/exceeded
PSC ILB consumer forwarding rules per producer VPC network
The maximum number of
Private Service Connect endpoints
and
propagated connections
that can access a service producer VPC network.
This quota applies to the total number of
endpoints
and propagated connections
that access services in
all regions of the service producer VPC network.
Endpoints contribute to this quota until they are deleted, even if the
associated service attachment is deleted or configured to reject the
connection. Propagated connections contribute to this quota until the
associated endpoint is deleted, even if connection propagation is
disabled on the hub or the propagated connection's spoke is deleted.
Quota name:
PSC_ILB_CONSUMER_FORWARDING_RULES_PER_PRODUCER_NETWORK
Available metrics:
compute.googleapis.com/psc_ilb_consumer_forwarding_rules_per_producer_vpc_network/limit
compute.googleapis.com/psc_ilb_consumer_forwarding_rules_per_producer_vpc_network/usage
compute.googleapis.com/psc_ilb_consumer_forwarding_rules_per_producer_vpc_network/exceeded
Deprecated quotas
Google Cloud no longer enforces the following quotas:
Subnetworks :
The Subnetwork ranges per VPC
network quota is the replacement.
Routes :
The Static routes per network quota is
the replacement.
Instances per peering
group :
Instead, Google Cloud enforces the Instances per VPC
network quota in each VPC network.
IP aliases per peering
group :
Instead, Google Cloud enforces the IP aliases per VPC
network quota in each VPC network.
Limits
Limits can't generally be increased unless specifically noted.
Shared VPC limits
The number of service projects that can be attached to a host project is a
configurable per-project quota . In addition to that quota, the
following limits apply to Shared VPC .
Item
Limit
Notes
Number of Shared VPC host projects in a single organization
100
To request an update to this limit, file a
support case .
Number of host projects to which a service project can attach
1
This limit can't be increased.
Per network
The following limits apply to VPC networks. These limits are
enforced by using quotas internally. When per-network limits are exceeded, you
see QUOTA_EXCEEDED errors with the internal quota names.
Item
Limit
Notes
Subnet IP ranges
Primary IP ranges per subnet
1
IPv4-only and dual-stack subnets must have exactly one primary IPv4
range (CIDR block). This limit can't be increased. For more information, see
IPv4 subnet ranges .
Maximum number of secondary IP ranges per subnet
170
IPv4-only and dual-stack subnets can optionally have subnet secondary
IPv4 address ranges. This limit can't be increased. For more information, see
IPv4 subnet ranges .
Routes
Maximum number of network tags per route
256
The maximum number of network tags that you can
associate with a static route. This limit can't be
increased.
IP address limits
Item
Limit
Notes
Public delegated prefixes per public advertised prefix
10
The number of public delegated prefixes (PDPs) that you can create from a
public advertised prefix (PAP).
Allocated IP address ranges per private connection
5,000
The maximum number of IP address ranges that you can associate with a
private connection .
Per instance
The following limits apply to VM instances. Unless otherwise noted, these
limits can't be increased. For quotas relevant to VMs, see
Compute Engine quotas .
Item
Limit
Notes
Maximum Transmission Unit (MTU)
Between 1,300 bytes and 8,896 bytes (inclusive).
Common values include 1460 bytes (default), 1500 bytes (standard
Ethernet), and 8896 bytes (jumbo frames).
For more information, see Maximum
transmission unit .
Maximum number of network interfaces
Depends on the machine type of the VM
See Maximum number of network interfaces .
Maximum number of alias IP ranges per network interface
150
The number of alias IP ranges that you can assign to a network interface
as long as you don't exceed the quota for the total
number of assigned alias IP ranges in the VPC network .
Google Cloud does not consider the size of the alias
IP range's netmask. For example, an individual /24 range is a
single alias IP range and an individual /23 range is also a
single alias IP range.
Network interfaces per VPC network
1
Each network interface must be connected to a unique
VPC network. An instance can only have one network
interface in a given VPC network.
Maximum duration for idle TCP connections
10 minutes
VPC networks automatically drop idle TCP connections
after ten minutes. You can't change this limit, but you can use
TCP
keepalives to prevent connections to instances from becoming idle.
For details, see
Compute Engine tips and troubleshooting .
Maximum egress data rate to an internal IP address destination
Depends on the machine type of the VM
See
Egress to internal IP address destinations and
machine types in the
Compute Engine documentation.
Maximum egress data rate to an external IP address destination
all flows: about 7 Gbps (gigabits per second) sustained or
25 Gbps with per VM Tier_1 networking performance
single flow: 3 Gbps sustained
See
Egress to external IP address destinations in the
Compute Engine documentation.
Maximum ingress data rate to an internal IP address destination
No artificial limit
See
Ingress to internal IP address destinations in the
Compute Engine documentation.
Maximum ingress data rate to an external IP address destination
no more than 30 Gbps
no more than 1,800,000 packets per second
See
Ingress to external IP address destinations in the
Compute Engine documentation.
Connection logging limits
The maximum number of connections that can be logged per VM instance depends on
its machine type . Connection logging limits are
expressed as the maximum number of connections that can be logged in a five-second
interval.
Important: Firewall log entries are created on a best effort basis according to
the following table. It is possible for entries to not be logged during periods of
heavy traffic, even if the maximum number of logged connections for a machine
type has not been reached.
Instance machine type
Maximum number of connections logged in a 5-second interval
f1-micro
100 connections
g1-small
250 connections
Machine types with 1–8 vCPUs
500 connections per vCPU
Machine types with more than 8 vCPUs
4,000 (500×8) connections
Hybrid connectivity
Use the following links to find quotas and limits for Cloud VPN,
Cloud Interconnect, and Cloud Router:
Cloud VPN quotas and limits
Cloud Interconnect quotas and limits
Cloud Router quotas and limits
Effective limits for per-peering group quotas
Each per-peering group quota has the concept of an effective limit . This
section describes how the quota's effective limit is calculated. The effective
limit is always greater than or equal to the value of the per-peering group
quota's limit.
Most per-peering group quotas have a corresponding network quota—for
example, SUBNET_RANGES_PER_PEERING_GROUP and SUBNET_RANGES_PER_NETWORK . The
effective limit calculation described in this section applies to all per-peering
group quotas, even those that don't have a corresponding per-network quota.
A per-peering group quota's effective limit is calculated in the following way:
Step 1 . Select a VPC network. When VPC Network Peering
is used, each network has its own peering group. A network's peering group
consists of the VPC network itself and all other
VPC networks that are directly connected to it through
VPC Network Peering. Effective limit calculations are repeated for each
per-peering group quota on a network by network basis .
Step 2 . For the selected VPC network, find the greater of
these limits:
the limit for the per-peering group quota
the limit for the corresponding per-network quota
If no corresponding per-network quota exists, use the per-peering group
quota's limit.
Step 3 . Create a list consisting of the greater of these two limits in
each peer network:
the limit for the per-peering group quota
the limit for the corresponding per-network quota
If no corresponding per-network quota exists, use the per-peering group
quota's limit.
Step 4 . Find the smallest value from the list created by Step 3.
Step 5 . Take the greater of the two values from Step 2 and Step 4.
This number is the effective limit for the per-peering group quota from
the perspective of the selected VPC network.
Effective limits example
Suppose that you have four VPC networks, network-a ,
network-b , network-c , and network-d . Because there are four
VPC networks, there are also four peering groups, one from the
perspective of each network.
Suppose the network peering connections are as follows:
network-a is peered with network-b , and network-b is peered with
network-a
network-a is peered with network-c , and network-c is peered with
network-a
network-c is peered with network-d , and network-d is peered with
network-c
Suppose the limits for two corresponding quotas are set as follows:
Network
Limit for INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP
Limit for INTERNAL_FORWARDING_RULES_PER_NETWORK
network-a
500
600
network-b
350
300
network-c
300
300
network-d
400
300
The effective limits for each INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP
quota are as follows:
Peering group for network-a —direct peers are network-b and
network-c .
In network-a : max(500,600) = 600
List of maxima for direct peers:
network-b : max(350,300) = 350
network-c : max(300,300) = 300
Minimum of the list of direct peers: min(350,300) = 300
Effective limit for INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP in
network-a : max(600,300) = 600
Peering group for network-b —one direct peer, network-a .
In network-b : max(350,300) = 350
List of maxima for direct peers:
network-a : max(500,600) = 600
Minimum of the list of direct peers: min(600) = 600
Effective limit for INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP in
network-b : max(350,600) = 600
Peering group for network-c —direct peers are network-a and
network-d .
In network-c : max(300,300) = 300
List of maxima for direct peers:
network-a : max(500,600) = 600
network-d : max(400,300) = 400
Minimum of the list of direct peers: min(600,400) = 400
Effective limit for INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP in
network-c : max(300,400) = 400
Peering group for network-d —one direct peer, network-c .
In network-d : max(400,300) = 400
List of maxima for direct peers:
network-c : max(300,300) = 300
Minimum of the list of direct peers: min(300) = 300
Effective limit for INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP in
network-d : max(400,300) = 400
Manage quotas
Virtual Private Cloud enforces quotas on resource usage for various reasons.
For example, quotas protect the community of Google Cloud users by
preventing unforeseen spikes in usage. Quotas also help users who are exploring
Google Cloud with the
free tier
to stay within their trial.
All projects start with the same quotas, which you can change by
requesting additional quota . Some quotas might increase
automatically based on your use of a product.
Permissions
To view quotas or request quota increases, Identity and Access Management (IAM) principals need one of the
following roles.
Task
Required role
Check quotas for a project
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Viewer ( roles/servicemanagement.quotaViewer )
Modify quotas, request additional quota
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Administrator ( roles/servicemanagement.quotaAdmin )
A custom role with the serviceusage.quotas.update permission
Check your quota
Console gcloud
More
In the Google Cloud console, go to the Quotas page.
Go to Quotas
To search for the quota that you want to update, use the Filter table .
If you don't know the name of the quota, use the links on this page instead.
Using the Google Cloud CLI, run the following command to
check your quotas. Replace PROJECT_ID with your own project ID.
gcloud compute project-info describe --project PROJECT_ID
To check your used quota in a region, run the following command:
gcloud compute regions describe example-region
Errors when exceeding your quota
If you exceed a quota with a gcloud command,
gcloud outputs a quota exceeded error
message and returns with the exit code 1 .
If you exceed a quota with an API request, Google Cloud returns the
following HTTP status code: 413 Request Entity Too Large .
Request additional quota
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Resource availability
Each quota represents a maximum number for a particular type of resource that you can create,
if that resource is available. It's important to note that quotas don't
guarantee resource availability. Even if you have available quota, you can't create
a new resource if it is not available.
For example, you might have sufficient quota to create a new regional, external IP address
in a given region. However, that is not possible if there are no
available external IP addresses in that region. Zonal resource
availability can also affect your ability to create a new resource.
Situations where resources are unavailable in an entire region are rare. However, resources
within a zone can be depleted from time to time, typically without impact to the service level
agreement (SLA) for the type of resource. For more information, review the relevant SLA for the
resource.
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
