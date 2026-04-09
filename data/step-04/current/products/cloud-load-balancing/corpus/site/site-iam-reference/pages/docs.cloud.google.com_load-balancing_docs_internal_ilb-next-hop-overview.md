---
title: "Internal passthrough Network Load Balancers as next hops \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/internal/ilb-next-hop-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/internal/ilb-next-hop-overview
  title: "Internal passthrough Network Load Balancers as next hops \_|\_ Cloud Load\
    \ Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Internal passthrough Network Load Balancers as next hops | Cloud Load Balancing | Google Cloud Documentation
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
Load Balancing
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
Discover
Cloud Load Balancing overview
Choose a load balancer
Cloud Load Balancing resource model
Load balancer feature comparison
Get started
Roles and permissions
IAM Conditions for forwarding rules
Organization policy constraints
Overview
Use custom constraints
Application Load Balancer (HTTP/HTTPS)
Overview
External load balancer
Architecture overview
Request distribution overview
Set up global load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Run functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Set up a load balancer with Shared VPC
Set up load balancer with cross-project backend service and backend bucket
Create custom headers in backend services
Custom error response
Overview
Configure custom error responses
Set up global load balancer (classic)
Terraform examples
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Migrate resources
Overview
Migrate to global external Application Load Balancer
Roll back to classic Application Load Balancer
Add capabilities
Traffic management overview
Create custom headers in backend services
Set up custom header and query parameter-based routing
Set up URL redirect
Set up HTTP-to-HTTPS redirect
Set up URL rewrite
Set up regional load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
Cloud Run backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up high availability
Set up HTTP-to-HTTPS redirect
Set up a load balancer with backend service using Shared VPC
Set up a load balancer with backend buckets using Shared VPC
Create custom headers in URL maps
Fail over to regional load balancers
Monitor and troubleshoot
Overview
Global load balancers
Regional load balancers
Troubleshooting
Best practices
Explore tutorials
Request routing to a multi-region external HTTPS load balancer
Faster web performance and improved web protection for load balancing
Deliver HTTP and HTTPS content over the same published domain
Optimize application latency with load balancing
Application capacity optimizations with global load balancing
Capacity management with load balancing
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
Cloud Run backends (serverless NEG)
Set up regional load balancer
Terraform examples
VM instance group backends
Cloud Run backends (serverless NEG)
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management
Overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Create custom headers in URL maps
Set up regional internal load balancer with backend service using Shared VPC
Set up cross-region load balancer with backend buckets using Shared VPC
Set up a regional internal Application Load Balancer with backend buckets using Shared VPC
Service Directory registration
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Convert load balancer to IPv6
Use custom metrics
Load testing backends
Proxy Network Load Balancer (TCP/SSL proxy)
Overview
External load balancer
Architecture overview
Set up global load balancer
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up global load balancer (classic)
Terraform examples
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up regional load balancer
VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backends
On-premises or other cloud backends (zonal and hybrid NEG)
Set up regional load balancer
Managed VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Add capabilities
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Convert load balancer to IPv6
Passthrough Network Load Balancer (TCP/UDP)
Overview
External load balancer
Backend service-based architecture
Traffic distribution concepts
Target pool-based architecture
Set up load balancer
VM instance group backends (TCP/UDP only)
VM instance group backends (multiple protocols)
Zonal NEG backends
Target pool-based load balancer
Add capabilities
Configure failover
Configure weighted load balancing
Migrate from target pools to backend services
Service Directory registration
Explore tutorials
Use UDP with network load balancers
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Internal load balancer
Architecture overview
Traffic distribution concepts
Set up load balancer
Terraform examples
VM instance group backends
VM instance group backend for multiple protocols
Zonal NEG backends
Add capabilities
Configure failover
Zonal affinity
Load balancers as next hops
Overview
Set up load balancing for third-party appliances
Forwarding rules that use a common IP address
Service Directory registration
Load balancing and connected networks
Explore tutorials
Set up load balancer as next hop (with tags)
Deploy a hub-and-spoke network
Set up a load balancer with internal IPv6-only backends
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Protocol forwarding
Overview
Set up protocol forwarding
Switch between a target instance and a backend service
Secure
SSL certificates
Overview
Use self-managed SSL certificates
Use Google-managed SSL certificates
Encryption to the backends
Troubleshooting
SSL policies
Overview
Use SSL policies
Mutual TLS
Frontend mTLS
Overview
Set up frontend mTLS with user-provided certificates
Set up frontend mTLS with a private CA
Backend mTLS
Overview
Set up backend authenticated TLS
Set up backend mTLS
Backend mTLS with managed workload identity
Overview
Set up backend mTLS using managed workload identity
Authorization policies
Overview
Set up policies for Application Load Balancers
Customize load balancer
Advanced load balancing optimizations
Backend buckets
Backend services
Connection draining
Firewall rules
Forwarding rules
Health checks
Overview
Use health checks
Internal DNS names
IPv6
Network endpoint groups
Overview
Hybrid connectivity NEGs
Internet NEGs
Serverless NEGs
Zonal NEGs
Overview
Set up zonal NEGs
Proxy-only subnets
Tags
Target pools
Target proxies
URL maps
Overview
Use URL maps
Operate and maintain
Audit logging information
Health check logging information
Clean up a load balancer setup
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
Architecture
Benefits of using your internal passthrough Network Load Balancer as a next hop
Specifications Routes
Options for specifying the next hop
Client IP session affinity
Destination range
Same VPC network and region
Advertising the static route
Order of operations
Backend requirements
Processing of TCP, UDP, and other protocol traffic
Additional considerations
Use cases Using an internal passthrough Network Load Balancer as the next hop to a NAT gateway
Hub and spoke: Exchanging next-hop routes by using VPC Network Peering
Load balancing to multiple NICs
What's next
Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Internal passthrough Network Load Balancers as next hops
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Architecture
Benefits of using your internal passthrough Network Load Balancer as a next hop
Specifications Routes
Options for specifying the next hop
Client IP session affinity
Destination range
Same VPC network and region
Advertising the static route
Order of operations
Backend requirements
Processing of TCP, UDP, and other protocol traffic
Additional considerations
Use cases Using an internal passthrough Network Load Balancer as the next hop to a NAT gateway
Hub and spoke: Exchanging next-hop routes by using VPC Network Peering
Load balancing to multiple NICs
What's next
An internal passthrough Network Load Balancer is a regional load balancer that enables you to run and
scale your services behind an internal IP address. You can use an
internal passthrough Network Load Balancer as the next hop to which packets are forwarded along the
path to their final destination. To do this, you set the load balancer as the
next hop in a static route .
Before reviewing the information on this page, you should already be familiar
with concepts from the following:
Routes overview
Internal passthrough Network Load Balancer overview
An internal passthrough Network Load Balancer next hop is useful in the following cases:
To load balance traffic across multiple VMs that are functioning
as gateway or router VMs.
To use gateway virtual
appliances
as your next hop for a default route. With this configuration, virtual machine
(VM) instances in your Virtual Private Cloud (VPC) network send traffic to the
internet through a set of load-balanced virtual gateway VMs.
To send traffic through multiple load balancers in two or more
directions by using the same set of multi-NIC gateway or router VMs as
backends. To do this, you create a load balancer and use it as the next hop
for a static route in each VPC network. Each
internal passthrough Network Load Balancer operates within a single VPC network,
distributing traffic to the network interfaces of backend VMs in that network.
Architecture
In the following diagram, a VM instance group of router VMs serves as the
backend for two different load balancers.
The first internal passthrough Network Load Balancer sends packets to nic0 of the backend
VMs, and the second internal passthrough Network Load Balancer sends packets to nic1 on the
same backends.
Load balancing to multiple NICs (click to enlarge).
Benefits of using your internal passthrough Network Load Balancer as a next hop
When the load balancer is a next hop for a static route, no special
configuration is needed within the guest operating systems of the client VMs in
the VPC network where the route is defined.
Client VMs send packets to the load balancer's backends through
VPC network routing, in a
bump-in-the-wire
fashion.
Using an internal passthrough Network Load Balancer as a next hop for a static route
provides the same benefits as a standalone internal passthrough Network Load Balancer. The load
balancer's health check ensures that new connections are routed to healthy
backend VMs. By using a managed instance group as a backend, you can
configure autoscaling to grow or shrink the set of VMs based on service
demand.
Specifications
The following are specifications for using internal passthrough Network Load Balancers as next hops.
Routes
You can create a static route to pass TCP, UDP, and other protocol
traffic to an internal passthrough Network Load Balancer where the load balancer is the
next hop for the static route. The route can be an external (publicly routable)
CIDR prefix or an internal CIDR prefix, if the prefix doesn't conflict with a
subnet route . For
example, you can replace your default route ( 0.0.0.0/0 ) with a route that
directs traffic to third-party backend VMs for packet processing.
Caution: When sending traffic to Google APIs and services, don't route the
traffic through a next-hop VM or through a next-hop internal passthrough Network Load Balancer.
Instead, route such traffic through a next-hop default internet
gateway. This includes traffic to Google APIs and services sent by means of
Private Google Access .
Options for specifying the next hop
You can specify an internal passthrough Network Load Balancer next hop in one of two ways:
By using the forwarding rule's name and region
By using the forwarding rule's IP address
For details about the project and VPC network in which an
internal passthrough Network Load Balancer next hop can reside, see Next hops and
features .
You can exchange static routes with internal passthrough Network Load Balancer next hops using
VPC Network Peering. For details, see Options for exchanging static
routes .
Note: A load balancer whose forwarding rule uses the
L3_DEFAULT protocol cannot be the next hop for a static route. If this static route is created, traffic is silently dropped.
Client IP session affinity
Internal passthrough Network Load Balancers offer two similar "client IP address" session
affinity options :
Client IP ( CLIENT_IP ): A two-tuple hash of a packet's source IP address
and destination IP address. When an internal passthrough Network Load Balancer is not a route's next
hop, packets sent to the load balancer's forwarding rule IP address share a
common destination IP address—the forwarding rule IP address. In this
situation, one of the addresses used by the two-tuple hash remains constant.
Thus, if the number of configured and healthy backends doesn't change and
packets have identical source IP addresses, this two-tuple session affinity
option selects the same backend.
Client IP, no destination ( CLIENT_IP_NO_DESTINATION ): A one-tuple hash
of a packet's source IP address. When you are using
an internal passthrough Network Load Balancer as a next hop, the destination IP address often varies
because destination IP addresses are those specified by the route's
destination attribute. In this situation, the two-tuple hash
Client IP ( CLIENT_IP ) session affinity cannot select the same backend
even when the number of configured and healthy backends doesn't change and
packets have identical source IP addresses. (An exception to this rule is when
only one backend is configured.) If you require packets with identical source
IP addresses to be routed to the same backend, you must use the Client IP,
no destination ( CLIENT_IP_NO_DESTINATION ) session affinity option.
Destination range
The destination of a static route
cannot be equal to or more specific than a subnet
route . Note that more specific means that the
subnet mask is longer. This rule applies to all static routes, including
when the next hop is an internal passthrough Network Load Balancer. For example, suppose that your
subnet route is 10.140.0.0/20 . The destination of a static route can't
be the same ( 10.140.0.0/20 ), and it can't be more specific, as in
10.140.0.0/22 .
Same VPC network and region
Static routes that use internal passthrough Network Load Balancers as next hops are limited to
the following:
A single VPC network. The load balancer and the
static route must be in the same VPC network.
A single region or all regions. Unless you configure global
access , the static route
is only available to resources in the same region as the load balancer. This
regional restriction is enforced even though the route itself is part of the
routing table for the entire VPC network. If you enable
global access, the static route is available to resources in any region.
Advertising the static route
To advertise the prefix (destination) for the static route, you can use
Cloud Router custom advertisement mode .
The scope of the route advertisement depends on the load balancer's global
access setting, as follows:
When global access is disabled, the internal passthrough Network Load Balancer is only available to
VMs, Cloud VPN tunnels, and Cloud Interconnect attachments
(VLANs) that are in the same region as the load balancer. Consequently, a
custom route advertisement for a static route's prefix only makes sense
if the Cloud Router and load balancer are in the same region.
When global access is enabled, the internal passthrough Network Load Balancer is available to VMs,
Cloud VPN tunnels, and Cloud Interconnect attachments
(VLANs) that are in any region. With global dynamic routing, on-premises
systems can use the static route from any connected region.
The following table summarizes the accessibility of the load balancer.
Global access
VPC network dynamic routing mode
Load balancer access
Disabled
Regional
Accessible by routers in the same region
Disabled
Global
Accessible by routers in the same region
Enabled
Regional
Accessible by all routers in any region
Enabled
Global
Accessible by all routers in any region
For more
information, see Internal passthrough Network Load Balancers and connected
networks .
Order of operations
You must create an internal passthrough Network Load Balancer before you can create a
static route that uses it as a next hop. The load balancer must exist
before you can create the route. If you try to create a route that refers to a
nonexistent load balancer, Google Cloud returns an error.
You specify an internal passthrough Network Load Balancer next hop by using the forwarding
rule's name and the load balancer's region, or by using the internal IP address
associated with the forwarding rule.
After you've created a route with a next hop that refers to an internal passthrough Network Load Balancer,
you cannot delete the load balancer unless you first delete the
route. Specifically, you can't delete an internal forwarding rule until no
static route uses that load balancer as a next hop.
Backend requirements
You must configure all of the internal passthrough Network Load Balancer's backend VMs
to allow IP forwarding ( --can-ip-forward = True ). For more information,
see Considerations common to instance and internal passthrough Network Load Balancer next
hops .
You cannot use an internal passthrough Network Load Balancer whose backends are
Google Kubernetes Engine (GKE) nodes as a next hop for a static route.
Software on the nodes can only route traffic to Pods if the destination matches
an IP address managed by the cluster, not an arbitrary destination.
Processing of TCP, UDP, and other protocol traffic
Important: The information in this section applies only to custom routes
created before May 15, 2021.
If an internal passthrough Network Load Balancer as next hop route was created before May 15, 2021,
the load balancer forwards only TCP and UDP traffic on all ports to the backend
VMs, regardless of the forwarding rule or backend service configuration. All
other traffic, such as ICMP pings, will be handled by the next most specific
route in your VPC network.
If a route created before May 15, 2021 was still in operation on August 16,
2021, it was automatically migrated to forward all protocol traffic
starting August 16, 2021.
When an internal passthrough Network Load Balancer is deployed as a next hop, Google Cloud
forwards all traffic on all ports to the backend VMs, regardless of the
following:
The forwarding rule's protocol and port configuration
The backend service's protocol configuration
The internal passthrough Network Load Balancer, which is the next hop of the route, seamlessly supports
forwarding all the traffic for the protocols supported by Google Cloud
VPC networks (such as TCP, UDP, and ICMP).
Additional considerations
Supported forwarding rules. Google Cloud supports only next hop
internal passthrough Network Load Balancer forwarding rules. Google Cloud does not support next
hop forwarding rules used by other load balancers, protocol forwarding, or
as Private Service Connect endpoints.
Specification methods and forwarding rule network and project. You can
specify a next hop forwarding rule by using one of following three methods.
The specification method that you use determines whether the forwarding
rule's network must match the route's network and in what project the
forwarding rule can be located.
Choose one of the following methods and ensure that the IP version of your
forwarding rule matches the IP version of the static route that you create:
By forwarding rule name ( --next-hop-ilb ) and region
( --next-hop-ilb-region ) : when you specify a next hop forwarding
rule by name and region, the forwarding rule's network must match the
route's VPC network. The forwarding rule must be located
in the same project that contains the forwarding rule's
network (a standalone project or a Shared VPC host project).
By forwarding rule resource link : a forwarding rule's resource
link uses the format
/projects/ PROJECT_ID /regions/ REGION /forwardingRules/ FORWARDING_RULE_NAME , where
PROJECT_ID is the
project ID of the project that contains the forwarding rule,
REGION is the forwarding rule's region, and
FORWARDING_RULE_NAME is the forwarding rule's
name. When
you specify a next hop forwarding rule by its resource link, the
forwarding rule's network must match the route's VPC
network. The forwarding rule can be located in either the project that
contains the forwarding rule's network (a standalone project or a
Shared VPC host project) or a Shared VPC service
project.
By a forwarding rule IP address : when you specify a next hop
forwarding rule by its IPv4 or IPv6 address, the forwarding
rule's network can be either the route's VPC network
or a VPC network that's connected to the route's
VPC network by using either VPC Network Peering or
NCC. NCC supports a next hop internal passthrough Network Load Balancer
in a VPC spoke subject to NCC
requirements for connectivity .
The forwarding rule can be located in either the project that
contains the forwarding rule's network (a standalone project or a
Shared VPC host project) or a Shared VPC service
project.
Effect of global access. Custom static routes using internal passthrough Network Load Balancer
next hops are programmed in all regions. Whether the next hop is usable
depends on the load balancer's global
access setting. With global
access enabled, the load balancer next hop is accessible in all regions of
the VPC network. With global access disabled, the load
balancer next hop is only accessible in the same region as the load
balancer. With global access disabled, packets sent from another region to a
route using an internal passthrough Network Load Balancer next hop are dropped.
When all backends are unhealthy. When all backends of an
internal passthrough Network Load Balancer fail health checks, the routes using that load balancer
next hop are still in effect. Packets processed by the route are sent to one
of the next hop load balancer's backends according to traffic
distribution .
Forwarding rules that use a common internal IP address
( --purpose=SHARED_LOADBALANCER_VIP ) are not supported. Next hop
internal passthrough Network Load Balancers and internal passthrough Network Load Balancer forwarding rules that use a common IP
address to reference different backend services (different
internal passthrough Network Load Balancers)
are mutually exclusive features. A next hop internal passthrough Network Load Balancer must use an IP
address that is unique to the load balancer's forwarding rule so that only
one backend service (one load balancer) is unambiguously referenced.
Traffic sent to a next-hop internal passthrough Network Load Balancer configured with a shared IP
address is silently dropped.
Multiple routes with the same destinations and priorities, but different
next hop internal passthrough Network Load Balancers. Google Cloud never distributes traffic
among two or more next hop internal passthrough Network Load Balancers using ECMP. Instead,
Google Cloud selects just one next hop internal passthrough Network Load Balancer using a
deterministic, internal algorithm. To avoid this ambiguity, you can use
unique network tags for each route.
Google Cloud selects a single next hop when
static routes with different internal passthrough Network Load Balancer next hops have the same
priority and destination.
Multiple routes with the same destinations, priorities, and next hop
internal passthrough Network Load Balancers. Without a network tag, Google Cloud does not
allow you to create multiple static routes that have the same combination of
destination, priority, and internal passthrough Network Load Balancer next hop. With network tags, you
can create multiple static routes having the same combination of destination,
priority, and internal passthrough Network Load Balancer next hop.
Use cases
You can use an internal passthrough Network Load Balancer as a next hop in multiple deployments and
topologies.
For each example, note the following guidelines:
In these examples, each VM's network interfaces are in separate
VPC networks.
You cannot use backend VMs or load balancers to route traffic between subnets
in the same VPC network because subnet routes cannot be
overridden.
The internal passthrough Network Load Balancer is a software-defined pass-through load
balancer . Packets are delivered
to backend VMs without alterations to source or destination information
(addresses or addresses and ports).
Routing, packet filtering, proxying, and address translation are
the responsibility of the virtual appliance VMs that serve as backends for
the internal passthrough Network Load Balancer.
Using an internal passthrough Network Load Balancer as the next hop to a NAT gateway
This use case load balances traffic from internal VMs to multiple NAT gateway
instances that route traffic to the internet.
NAT use case (click to enlarge).
Hub and spoke: Exchanging next-hop routes by using VPC Network Peering
In addition to exchanging subnet routes, you can configure
VPC Network Peering to export and import custom
static and dynamic routes. Static routes that
have a next hop of the default internet gateway are excluded. Custom
static routes that use next-hop internal passthrough Network Load Balancers are included.
You can configure a hub-and-spoke topology with your next-hop firewall virtual
appliances located in the hub VPC network by doing the
following:
In the hub VPC network, create an internal passthrough Network Load Balancer
with firewall virtual appliances as the backends.
In the hub VPC network, create a static route, and set
the next hop to be the internal passthrough Network Load Balancer.
Connect the hub VPC network to each of the spoke
VPC networks by using VPC Network Peering.
For each peering, configure the hub network to export its custom routes, and
configure the corresponding spoke network to import custom routes. The route
with the load balancer next hop is one of the routes that the hub network
exports.
Subject to the routing order , the next hop
firewall appliance load balancer in the hub VPC network is
available in the spoke networks:
to clients in the same region as the load balancer, if global access is
disabled
to clients in all regions, if global access is enabled, according to the
routing order .
Hub and spoke (click to enlarge).
Load balancing to multiple NICs
In the following use case, the backend VMs are virtual appliance instances (for
example, packet inspection, routing, or gateway VMs) with NICs in multiple
VPC networks. These virtual appliance instances can be commercial
solutions from third parties or solutions that you build yourself. The virtual
appliances are Compute Engine VMs with
multiple NICs .
This example shows a single set of backend virtual appliances in a managed VM
instance group.
In the VPC network called testing , the internal passthrough Network Load Balancer has
a forwarding rule called fr-ilb1 . In the example, this load balancer
distributes traffic to the nic0 interface.
In the VPC network called production , a different
internal passthrough Network Load Balancer has a forwarding rule called fr-ilb2 . This load balancer
distributes traffic to a different interface, nic1 in this example.
Traffic with multi-NIC load balancing (click to enlarge).
For a detailed configuration setup, see Load balancing to multiple backend
NICs .
Symmetric hashing
The preceding example doesn't use source network address translation
(SNAT). SNAT isn't required because Google Cloud uses
symmetric hashing . This means that when packets belong to the same flow,
Google Cloud calculates the same hash. In other words, the hash doesn't
change when the source IP address:port is swapped with the destination IP
address:port.
Notes:
Symmetric hashing is enabled automatically when you create the
internal passthrough Network Load Balancer forwarding rule on or after June 22, 2021.
To enable symmetric hashing on existing internal passthrough Network Load Balancers, you must
re-create the forwarding rule and the next-hop route, as described in
Enabling symmetric
hashing .
Symmetric hashing is only supported with internal passthrough Network Load Balancers.
Symmetric hashing is supported with the following session affinity types for
protocols TCP and UDP:
Client IP ( CLIENT_IP )
Client IP and protocol ( CLIENT_IP_PROTO )
Client IP, protocol, and port ( CLIENT_IP_PORT_PROTO )
For more information about these settings, see Session affinity
options .
You can optionally use SNAT if your use case requires it for some reason.
What's next
To configure an internal passthrough Network Load Balancer to be a next hop, see
Set up an internal passthrough Network Load Balancer for third-party appliances
or Deploy a hub-and-spoke network by using a load balancer
as the next hop .
To configure and test an internal passthrough Network Load Balancer, see
Set up an internal passthrough Network Load Balancer with VM instance group backends .
To troubleshoot next hop issues with your internal passthrough Network Load Balancer, see
Troubleshoot internal passthrough Network Load Balancers .
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
