---
title: "Zonal affinity for internal passthrough Network Load Balancers \_|\_ Cloud\
  \ Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/internal/zonal-affinity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/internal/zonal-affinity
  title: "Zonal affinity for internal passthrough Network Load Balancers \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Zonal affinity for internal passthrough Network Load Balancers | Cloud Load Balancing | Google Cloud Documentation
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
Passthrough Network Load Balancer (TCP/ UDP)
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
Compatibility Compatible clients
Zonal match Zonal match conditions
Zonal match example
Zonal affinity options
How ZONAL_AFFINITY_STAY_WITHIN_ZONE works
How ZONAL_AFFINITY_SPILL_CROSS_ZONE and spillover ratio work Zero spillover ratio
Nonzero spillover ratio
Spillover ratio examples
What's next
Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Zonal affinity for internal passthrough Network Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Compatibility Compatible clients
Zonal match Zonal match conditions
Zonal match example
Zonal affinity options
How ZONAL_AFFINITY_STAY_WITHIN_ZONE works
How ZONAL_AFFINITY_SPILL_CROSS_ZONE and spillover ratio work Zero spillover ratio
Nonzero spillover ratio
Spillover ratio examples
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Zonal affinity, configured on the backend
service of the load balancer, lets you limit cross-zone traffic, reduce latency,
and improve performance, all while maintaining the benefits of a multi-zonal
architecture.
Internal passthrough Network Load Balancers support three zonal
affinity
options that offer varying degrees of preference for routing new connections
to eligible backends that are in the same zone as a supported client. Zonal
affinity modifies the set of eligible backends after the load balancer selects
an eligible backend for a new
connection .
Established connections in the load balancer's connection tracking table
aren't affected by zonal affinity.
Compatibility
Zonal affinity is compatible with internal passthrough Network Load Balancers that:
Are next hops for static
routes or next hops
for policy-based routes
Have a failover policy
Zonal affinity is compatible with symmetric hashing
only when the following conditions are true:
Both the internal passthrough Network Load Balancers in the forward and reverse direction
have zonal affinity enabled.
Traffic from sender VMs is only directed to receiver VMs in the same zone.
Zonal affinity is incompatible with internal passthrough Network Load Balancers that:
Have backend
subsetting enabled
Are collector destinations for
Packet Mirroring
Are referenced by
Network Security Integration deployments—in-band or out-of-band . Using zonal affinity with Network Security Integration leads to packet drops.
Are used to provide a Private Service Connect published
service . Zonal
affinity is only possible for compatible clients that send packets
to the load balancer, not to a Private Service Connect
endpoint whose published service producer uses an internal passthrough Network Load Balancer.
Compatible clients
Zonal affinity is possible only for VM clients that are located in the
same region as the load balancer. Zonal affinity isn't compatible with
the following clients, which always operate as if zonal affinity is
disabled:
Client Cloud VPN tunnels and client Cloud Interconnect
VLAN attachments : Cloud VPN
tunnels and
Cloud Interconnect
VLAN attachments are regional resources, not zonal resources. Packets
routed through a Cloud VPN tunnel or VLAN attachment never
support zonal affinity, regardless of whether they are in the same
region as the load balancer or not.
Client VMs in regions that don't match the load balancer's region :
an internal passthrough Network Load Balancer located in one region is reachable by clients
in all other regions if global
access
is enabled. When client VMs are in a region that's different from the
load balancer's region, client VMs never share a common zone with any
of the load balancer's backends.
Zonal match
A zonal match describes the conditions under which zonal affinity is triggered.
The load balancer might then modify the original set of eligible backends to
provide the configured zonal affinity. The modification of the original set of
eligible backends takes place after the
Identify eligible backends
step in the Backend selection and connection tracking process.
In order for the zonal affinity logic to be triggered, the following
sequence of events must occur:
Zonal affinity must be enabled
If zonal affinity is enabled, you need to determine whether the client is a
compatible client.
Determine whether the client is a compatible client
If the client is compatible, determine whether a zonal match can occur.
Determine whether a zonal match can occur
A zonal match means that the client VM is in a zone that contains at least
one configured backend of the relevant type. The different backends that
can be configured are outlined in the Zonal match conditions section.
A zonal match is never possible if either of the following is true:
Zonal affinity is disabled
The client isn't a compatible client
Apply the zonal affinity logic
If a zonal match occurs, apply the zonal affinity logic depending on the
zonal affinity option that is configured. The options that enable zonal
affinity are as follows:
ZONAL_AFFINITY_STAY_WITHIN_ZONE
ZONAL_AFFINITY_SPILL_CROSS_ZONE with a spillover ratio of 0
ZONAL_AFFINITY_SPILL_CROSS_ZONE with a nonzero spillover ratio
After a zonal match occurs and depending on the type of zonal affinity option
that is configured, the original set of eligible backends might be refined ,
replaced , or left unchanged . Any new connections from the client are
routed to this modified set of eligible backends.
Zonal match conditions
The following table determines whether the load balancer can
restrict traffic to the client's zone. If the condition in the third column
isn't met, zonal affinity is ignored, and new connections are routed
to any eligible backend.
Note: For a zonal match to happen, there only needs to be a configured backend,
primary backend, or failover backend in the same zone as the compatible client's
zone. The relevant type of configured backend might or might not be in the set
of eligible backends. The question— Is there a zonal match? —is
equivalent to asking— Is there a configured backend, primary backend,
or failover backend in the same zone as the compatible client?
Failover configuration
Eligible backends 1
Condition for zonal match
No failover policy
Either all healthy backends or all backends
The client VM is in a zone that contains at least one configured
backend. The configured backend might or might not be an eligible
backend.
Failover policy configured
Either all healthy primary backends or all primary backends 2
The client VM is in a zone that contains at least one configured
primary backend. The configured primary backend might or might not
be an eligible backend.
Failover policy configured
All healthy failover backends 3
The client VM is in a zone that contains at least one configured
failover backend. The configured failover backend might or might
not be an eligible backend.
1 Eligible backends might be all healthy backends, all backends,
all healthy primary backends, all healthy failover backends,
or all primary backends. For more information about identifying
eligible backends, see step 2.1 Identify eligible backends in the Backend selection and connection tracking section of the traffic distribution page for internal passthrough Network Load Balancers.
2 The load balancer is in failback mode.
3 The load balancer is in failover mode.
Zonal match example
Consider the following situation to determine whether there is a
zonal match:
Failover policy is configured
Zonal affinity is enabled
Client is in zone A
Primary backends are only in zone B and zone C
There are no primary backends in zone A
Now even if zonal affinity is enabled and there is a compatible client,
no zonal match occurs because there's no primary backend in zone A,
which is the client VM's zone. Therefore, zonal affinity is ignored.
Zonal affinity options
Internal passthrough Network Load Balancers support the following zonal affinity options:
ZONAL_AFFINITY_DISABLED (default): zonal affinity is disabled. The load
balancer selects an eligible backend for a new
connection
without modifying the set of eligible backends.
ZONAL_AFFINITY_STAY_WITHIN_ZONE : zonal affinity is enabled. When a zonal
match occurs, the load balancer keeps traffic in the client's zone by
either refining the original set of eligible backends, or replacing the
original set of eligible backends with a new set. For details about this
option, see How ZONAL_AFFINITY_STAY_WITHIN_ZONE works .
ZONAL_AFFINITY_SPILL_CROSS_ZONE : zonal affinity is enabled. When a zonal
match occurs, the load balancer might refine the set of eligible backends or
it might leave the original set of eligible backends unchanged. This option
allows traffic to spill over to other zones if not enough healthy backends
are in the client's zone. The spill over is controlled by the spillover
ratio. For more information about this option, see How
ZONAL_AFFINITY_SPILL_CROSS_ZONE and spillover ratio
work .
To learn how to configure zonal affinity on the backend service of an
internal passthrough Network Load Balancer, see Use zonal affinity .
How ZONAL_AFFINITY_STAY_WITHIN_ZONE works
If zonal affinity is set to ZONAL_AFFINITY_STAY_WITHIN_ZONE , and a zonal
match occurs, the load balancer keeps traffic in the client's zone by doing one of the following:
Refine the original set of eligible backends
If at least one eligible backend is in the client's zone, the load balancer
refines the set of eligible backends by doing the following:
Discarding all eligible backends that are not in the client's zone
Using only eligible backends that are in the client's zone
The refined set of eligible backends is a subset of the original set of eligible backends.
Replace the original set of eligible backends
If there are no eligible backends in the client's zone, other configured
backends (not in the set of eligible backends) are present in the client's
zone because a zonal match did occur for zonal affinity to be triggered. In
this situation, the load balancer replaces the set of eligible backends with
a new set that includes unhealthy backends within the client's zone, based on
whether a failover policy is configured, and, if so, the failover state.
This new set of replaced eligible backends consists of one of the following:
If a failover policy isn't configured , the replacement set of eligible
backends consists of all unhealthy backends in the client's zone.
If a failover policy is configured and the original eligible backends were
primary backends , the replacement set of eligible backends consists of all
unhealthy primary backends in the client's zone.
If a failover policy is configured and the original eligible backends were
failover backends , the replacement set of eligible backends consists of
all unhealthy failover backends in the client's zone.
The following table summarizes all refinement and replacement scenarios for the
ZONAL_AFFINITY_STAY_WITHIN_ZONE option:
Original set of eligible backends
If at least one eligible backend (from the original set of eligible backends) is in the client's zone:
If no eligible backends (from the original set of eligible backends) are in the client's zone:
Failover policy not configured
All healthy backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
Replace the original set of eligible backends. The new set of eligible backends consists of all unhealthy backends in the client's zone.
All backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
This situation cannot exist. 1
Failover policy configured
All healthy primary backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
Replace the original set of eligible backends. The new set of eligible backends consists of all unhealthy primary backends in the client's zone.
All healthy failover backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
Replace the original set of eligible backends. The new set of
eligible backends consists of all unhealthy failover backends in the client's zone.
All primary backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
This situation cannot exist. 2
1 Zonal affinity requires a zonal match. When a failover policy
isn't configured, a zonal match requires at least one configured backend in
the same zone as the client. When eligible backends are all configured
backends, there is always at least one eligible backend in the same zone as
the client.
2 Zonal affinity requires a zonal match. When a failover policy
is configured and eligible backends are primary backends, a zonal match
requires at least one configured primary backend in the same zone as the
client. When eligible backends are all configured primary backends, there is
always at least one eligible backend in the same zone as the client.
It is important to note the following for the ZONAL_AFFINITY_STAY_WITHIN_ZONE
option:
This zonal affinity option never leaves the original set of eligible backends
unchanged.
This zonal affinity option favors backends in the client's zone even if it
means using unhealthy backends, assuming a zonal match condition is met.
How ZONAL_AFFINITY_SPILL_CROSS_ZONE and spillover ratio work
If zonal affinity is set to ZONAL_AFFINITY_SPILL_CROSS_ZONE and a zonal
match occurs, the set of eligible backends for the client might be refined or
it might also result in no change to the set of eligible backends.
In the case where the original set of eligible backends remain unchanged,
new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other zones.
This distribution depends on a configurable spillover ratio that determines when
traffic starts spilling over to eligible backends in other zones.
A configurable spillover ratio indicates the threshold value for keeping traffic
in the client's zone. If the proportion of healthy and eligible backends falls
below the defined spillover ratio, all new connections from clients in the zone
are distributed to eligible backends in other zones. The value of the spillover
ratio can range from 0.0 to 1.0 , inclusive.
If you don't specify a spillover ratio
when configuring ZONAL_AFFINITY_SPILL_CROSS_ZONE zonal affinity,
Google Cloud uses a default value of 0.0 .
Zero spillover ratio
If the configured spillover ratio is 0.0 , the load balancer refines the
set of eligible backends by discarding all eligible backends that are not
in the client's zone, provided that one of the following is true:
If a failover policy isn't configured, eligible backends are all healthy
backends, and at least one eligible backend is in the client's zone
If a failover policy is configured, eligible backends are all healthy
primary backends, and at least one eligible backend is in the client's zone
If a failover policy is configured, eligible backends are all healthy
failover backends, and at least one eligible backend is in the client's zone
If there are no eligible backends in the client's zone:
The load balancer keeps the original set of eligible backends
New connections are allowed to spill over to eligible backends in other zones
The following table summarizes all refinement scenarios for the
ZONAL_AFFINITY_SPILL_CROSS_ZONE option when the configured spillover ratio is 0.0 :
Original set of eligible backends
If at least one eligible backend (from the original set of
eligible backends) is in the client's zone:
If no eligible backends (from the original set of eligible backends) are in the client's zone:
Failover policy not configured
All healthy backends
Refine the original set of eligible backends by discarding all eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections spill over to eligible backends in other
zones.
All backends
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
This situation cannot exist. 1
Failover policy configured
All healthy primary backends
Refine the original set of eligible backends by discarding all
eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections spill over to eligible backends in other
zones.
All healthy failover backends
Refine the original set of eligible backends by discarding all
eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections spill over to eligible backends in other
zones.
All primary backends
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
This situation cannot exist. 2
1 Zonal affinity requires a zonal match. When a failover policy
isn't configured, a zonal match requires at least one configured backend in
the same zone as the client. When eligible backends are all configured
backends, there is always at least one eligible backend in the same zone as
the client.
2 Zonal affinity requires a zonal match. When a failover policy
is configured and eligible backends are primary backends, a zonal match
requires at least one configured primary backend in the same zone as the
client. When eligible backends are all configured primary backends, there is
always at least one eligible backend in the same zone as the client.
Nonzero spillover ratio
If the configured spillover ratio is greater than 0.0 but less than or equal
to 1.0 , the load balancer first calculates one of the following ratios:
If a failover policy isn't configured, the calculated ratio is the number
of eligible and healthy backends in the client's zone divided by the number
of configured backends in the client's zone.
count ( Eligible and healthy backends ) Client's zone count ( Configured backends ) Client's zone
If a failover policy is configured and all eligible backends are primary
backends, the calculated ratio is the number of eligible and healthy backends
in the client's zone divided by the number of configured primary backends in
the client's zone.
count ( Eligible and healthy primary backends ) Client's zone count ( Configured primary backends ) Client's zone
If a failover policy is configured and all eligible backends are failover
backends, the calculated ratio is the number of eligible and healthy backends
in the client's zone divided by the number of configured failover backends in
the client's zone.
count ( Eligible and healthy failover backends ) Client's zone count ( Configured failover backends ) Client's zone
The load balancer then compares the calculated ratio to the spillover ratio.
If the calculated ratio is greater than or equal to the spillover ratio, the
load balancer refines the set of eligible backends by discarding all eligible
backends that are not in the client's zone. Otherwise, the load balancer uses
the original eligible backends.
When computing the calculated ratio, remember the following:
Eligible backends might be all healthy backends, all backends, all healthy
primary backends, all healthy failover backends, or all primary backends.
Except when eligible backends consist of either all backends or all primary
backends, the set of configured backends, configured primary backends, or
configured failover backends contains more than just eligible backends.
A spillover ratio of 1.0 indicates that one of the following is true:
If a failover policy isn't configured, the set of eligible backends must
be all healthy backends, and the number of eligible backends in the
client's zone must equal the number of configured backends in the client's
zone.
If a failover policy is configured and all eligible backends are primary
backends, the set of eligible backends must contain all healthy primary
backends, and the number of eligible backends in the client's zone must
equal the number of configured primary backends in the client's zone.
If a failover policy is configured and all eligible backends are failover
backends, the set of eligible backends must contain all healthy failover
backends, and the number of eligible backends in the client's zone must
equal the number of configured failover backends in the client's zone.
The following table summarizes all refinement scenarios for the
ZONAL_AFFINITY_SPILL_CROSS_ZONE option when the configured spillover ratio
isn't 0.0 :
Original set of eligible backends
Calculated ratio >= spillover ratio
Calculated ratio < spillover ratio
Failover policy not configured
All healthy backends
Refine the original set of eligible backends by discarding
all eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
All backends
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
Failover policy configured
All healthy primary backends
Refine the original set of eligible backends by discarding
all eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
All healthy failover backends
Refine the original set of eligible backends by discarding
all eligible backends that aren't in the client's zone.
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
All primary backends
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
No change—use the original set of eligible backends. In this
situation, new connections might be sent to eligible backends in the
client's zone, or they might spill over to eligible backends in other
zones.
Spillover ratio examples
The following examples show how ZONAL_AFFINITY_SPILL_CROSS_ZONE works
when there's no failover policy configured.
For zonal affinity to apply when you configure a spillover ratio of 1.0 ,
the following needs to be true:
The set of eligible backends must be all healthy backends.
The number of healthy eligible backends in the client's zone
must equal the number of configured backends in the client's zone.
A spillover ratio of 1.0 indicates that 100% of the eligible
backends in the client's zone need to be healthy for all new connections to be
distributed to backends in the client's zone only. Even if one backend becomes
unhealthy, the load balancer distributes some new connections to backends in
other zones.
For zonal affinity to apply when you configure a spillover ratio of 0.8 ,
the following needs to be true:
The set of eligible backends must be all healthy backends.
The number of healthy eligible backends in the client's zone
divided by the number of configured backends in the client's zone
must be at least 0.8 .
A spillover ratio of 0.8 indicates that at least 80% of the
eligible backends in the client's zone need to be healthy for all new
connections to be distributed to backends in the client's zone only. If less
than 80% of the backends in the client's zone are healthy, the load balancer
distributes some new connections to backends in other zones.
For zonal affinity to apply when you configure a spillover ratio of 0.0 ,
the following needs to be true:
The set of eligible backends must be all healthy backends.
At least one healthy eligible backend must exist in the client's zone.
A spillover ratio of 0.0 means that as long as there is at least one healthy
backend in the client's zone, all new connections are distributed to
backends in the client's zone. If the spillover ratio is 0.0 and there is no
healthy backend in the client's zone, the load balancer distributes all new
connections to healthy backends in zones other than the client's zone.
The following diagram shows a spillover ratio of 0.8 :
Zones 1 and 2 each contain five configured backends.
The original set of eligible backends consists of eight out of the ten
configured backends:
All five configured backends in zone 1 are healthy.
Three configured backends in zone 2 are healthy.
For a compatible client that is in zone 1:
A zonal match happens because there exists at least one configured
backend in zone 1.
The ratio of healthy eligible backends in zone 1 to all configured
backends in zone 1 is 5/5 = 1.0 .
For the compatible client in zone 1: because the calculated ratio of
1.0 is greater than the spillover ratio of 0.8 , the load balancer
refines the set of eligible backends by discarding all eligible
backends that aren't in zone 1. Consequently, new connections from
the compatible client in zone 1 are distributed exclusively among the
five healthy eligible backends in zone 1.
For a compatible client that is in zone 2:
A zonal match happens because there exists at least one configured
backend in zone 2.
The ratio of healthy eligible backends in zone 2 to all configured
backends in zone 2 is 3/5 = 0.6 .
For the compatible client in zone 2: because the calculated ratio of
0.6 isn't greater than or equal to the spillover ratio of 0.8 , the
load balancer makes no changes to the set of eligible backends.
Consequently, new connections from the compatible client in zone 2
are distributed among the original set of eight healthy eligible backends
(five in zone 1 and three in zone 2).
Some traffic spilling over to a different zone (click to enlarge).
What's next
To configure Cloud Monitoring for internal passthrough Network Load Balancers, see
Internal passthrough Network Load Balancer logging and
monitoring .
To troubleshoot issues with your internal passthrough Network Load Balancer, see
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
