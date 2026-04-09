---
title: "Protocol forwarding overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/protocol-forwarding
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/protocol-forwarding
  title: "Protocol forwarding overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Protocol forwarding overview | Cloud Load Balancing | Google Cloud Documentation
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
Architecture Forwarding rules
Target instances
IP addresses for request and return packets
Outbound internet connectivity from target instances
Limitations
API and gcloud reference
Pricing
Quotas and limits
What's next
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Protocol forwarding overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Architecture Forwarding rules
Target instances
IP addresses for request and return packets
Outbound internet connectivity from target instances
Limitations
API and gcloud reference
Pricing
Quotas and limits
What's next
This page discusses external and internal protocol forwarding only.
For more information about protocol forwarding in the context of Classic VPN,
see Create
a Classic VPN gateway using static routing .
Protocol forwarding uses a regional forwarding rule to deliver packets
of a specific protocol to a single virtual machine (VM) instance. The forwarding
rule can have an internal or an external IP address. Protocol forwarding delivers
packets while preserving the destination IP address of the forwarding rule. The
forwarding rule references an object called a target instance ,
which, in turn, references a single VM instance.
You can use protocol forwarding to do the following:
Provide an IP address which can be moved from one instance to another by
either changing the VM referenced by the target instance object or by changing
the target instance referenced by the forwarding rule.
Forward packets to different VMs based on protocol and port. Two forwarding
rules can share the same IP address as long as their port and protocol
information is unique.
(External protocol forwarding only) Define additional external IP addresses
for a given network interface. Unlike a network interface with a 1:1 NAT
configuration for its external IPv4 address, protocol forwarding preserves the
destination IP address of the forwarding rule.
Send packets whose source IP addresses match the forwarding rule's IP address.
Protocol forwarding is different from a pass-through load
balancer in the
following ways:
No load balancing . A target instance only distributes packets to a single
VM.
No health check . Unlike a backend service, a target instance doesn't
support a health check. You must use other means to ensure that the necessary
software is running and operational on the VM referenced by the target
instance.
Architecture
Protocol forwarding uses regional external or regional internal forwarding rules
and a zonal target instance object. The target instance and the VM it references
must be located in a zone in the forwarding rule's region.
External protocol forwarding . You can set up multiple forwarding rules to
point to a single target instance, which lets you use multiple external IP
addresses with one VM instance. You can use this in scenarios where you may
want to serve data from just one VM instance, but through different external
IP addresses or different protocols and ports. This is especially useful for
setting up SSL virtual hosting. External protocol forwarding can handle
connections from IPv6 clients.
External protocol forwarding supports the following protocols:
AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP
.
The following diagram shows an example of external protocol forwarding
architecture. To learn how to set this up, see Set up external protocol
forwarding .
External protocol forwarding architecture (click to enlarge).
Internal protocol forwarding . Internal protocol forwarding uses either a
regional internal IPv4 address (from the primary IPv4 address range of a
subnet ) or a regional internal IPv6 address
range (from the IPv6 address range of a
subnet ).
Internal protocol forwarding supports the following protocols:
TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE
.
The following diagram shows an example of internal protocol forwarding
architecture. To learn how to set this up, see Set up internal protocol
forwarding .
Internal protocol forwarding architecture (click to enlarge).
With internal protocol forwarding, you can change the target of a forwarding
rule to switch between a target instance and a backend service of a
pass-through load balancer. For details, see Switch between a target instance
and a backend
service .
Forwarding rules
Each forwarding rule matches an IP address, protocol, and optionally, port
information (if specified and if the protocol supports ports). When a forwarding
rule references a target instance, Google Cloud routes packets that match the
forwarding rule's address, protocol, and port specification to the VM referenced
by the target instance.
Internal protocol forwarding:
IPv4 address support . A regional internal IPv4
address from the primary IPv4 range of a subnet. You can specify a
reserved static IPv4 address
or a custom ephemeral IPv4 address. If not specified, Google Cloud
automatically assigns an ephemeral IPv4 address.
IPv6 address support . The forwarding rule references a /96 range of IP
addresses from the subnet's /64 internal IPv6 address range. The subnet
must be either of the following:
A dual-stack (IPv4 and IPv6) subnet
A single-stack (IPv6-only) subnet
The subnet's ipv6-access-type setting must be set to INTERNAL .
Internal IPv6 addresses are available only in Premium Tier. You can
specify a reserved static IPv6 address or
a custom ephemeral IPv6 address. If not specified, Google Cloud automatically assigns
an ephemeral IPv6 address.
To specify a custom ephemeral IPv6 address, you must use
the gcloud CLI or the API. The Google Cloud console doesn't support
specifying custom ephemeral IPv6 addresses for forwarding rules.
Protocol options . TCP (default), UDP , and L3_DEFAULT .
The L3_DEFAULT forwarding rule protocol option forwards all
TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE
traffic. For the TCP, UDP,
and SCTP protocols, L3_DEFAULT also forwards all ports.
Port specification options . A list of up to five contiguous or
non-contiguous ports or all ports.
External protocol forwarding:
IPv4 address support . The forwarding rule references a single regional
external IPv4 address . Regional external IPv4
addresses come from a pool unique to each Google Cloud region. You
can specify a reserved static IPv4 address .
If not specified, Google Cloud automatically assigns an IPv4 address.
IPv6 address support . The forwarding rule references a /96 range of IP
addresses from the second half ( /65 ) of the subnet's /64 external IPv6
address range as described in External IPv6 specifications .
The subnet must be either of the following:
A dual-stack (IPv4 and IPv6) subnet
A single-stack (IPv6-only) subnet
The subnet ipv6-access-type must be set to EXTERNAL .
External IPv6 addresses are available only in Premium Tier. You can
specify a reserved static IPv6 address or
a custom ephemeral IPv6 address. If not specified, Google Cloud
automatically assigns an ephemeral IPv6 address.
To specify a custom ephemeral IPv6 address, you must use
the gcloud CLI or the API. The Google Cloud console doesn't support
specifying custom ephemeral IPv6 addresses for forwarding rules.
Protocol options .
AH , ESP , ICMP , SCTP , TCP (default), UDP , and L3_DEFAULT
:
The L3_DEFAULT forwarding rule protocol option forwards all
AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP
traffic. For the TCP, UDP,
and SCTP protocols, L3_DEFAULT also forwards all ports.
IPv6 forwarding rules don't support the ICMP protocol setting because
the ICMP protocol only supports IPv4 addresses. To serve ICMPv6 and GRE
traffic, set the forwarding rule protocol to L3_DEFAULT .
Port specification options . A contiguous port range or all ports.
Keep the following points in mind when working with forwarding rules:
For protocol forwarding, a forwarding rule can only reference a single target
instance.
For internal passthrough Network Load Balancers and backend service-based regional external passthrough Network Load Balancers,
a forwarding rule can only reference a single backend service.
You can switch between internal protocol forwarding and an
internal passthrough Network Load Balancer without deleting and re-creating the forwarding
rule. To switch between external protocol forwarding and a backend service-based
regional external passthrough Network Load Balancer, you must delete and re-create the
forwarding rule. For details, see
Switch between a target instance and a backend service .
Port information can only be specified for protocols that have a concept of
port: TCP , UDP , or SCTP .
If you expect fragmented UDP packets, do one of the following to ensure that
all fragments (including those without port information) are delivered to the
instance:
Use a single L3_DEFAULT forwarding rule, or
Use a single UDP forwarding rule configured to forward all ports.
Target instances
A target instance is a zonal resource that references one VM instance in the
same zone. The forwarding rule that references the target instance must be in
the region containing the target instance's zone. Because a target instance
doesn't have a Cloud NAT policy applied to it, it can be used for IPsec
traffic that can't traverse NAT.
Multi-NIC support
Protocol forwarding using target instances supports VM instances with
non- nic0 network interfaces ( vNICs or
Dynamic Network Interfaces ) by
using the --network flag when you create the target instance:
If you omit the --network flag when you create a target instance,
Google Cloud delivers packets to the nic0 interface of the referenced
VM.
If you include the --network flag when you create a target instance,
Google Cloud delivers packets to the NIC of the referenced VM that's in
the VPC network specified by the --network flag.
The referenced VM must have a NIC in the VPC
network specified by the --network flag.
To deliver packets to non- nic0 interfaces, each network interface of an
instance must be in a separate VPC network. Using protocol forwarding to
deliver packets to multiple network interfaces that are in the same VPC
network is not supported.
Internal protocol forwarding and IPv6 external protocol forwarding have the
following additional requirement because their forwarding rules use subnets:
When configuring a forwarding rule to reference a target instance, the
forwarding rule must use a subnet of the target instance's VPC
network. The forwarding rule and target instance cannot use different
VPC networks, even if those networks are connected in some way.
Note: Cloud Armor features such as advanced network DDoS
protection and
network edge security policies aren't
supported for VM instances using Dynamic NICs.
IPv6 support for VM instances
If you want the protocol forwarding deployment to support IPv6 traffic,
the VM instance must be configured in either a
dual-stack or a
single-stack IPv6-only
subnet that is in
the same region as the IPv6 forwarding rule.
Note that while IPv6-only instances can be created in both dual-stack and
IPv6-only subnets, dual-stack VMs can't be created in IPv6-only subnets.
The VM instance can be created in a subnet with the ipv6-access-type set to
either EXTERNAL or INTERNAL . The VM inherits the ipv6-access-type setting
(either EXTERNAL or INTERNAL ) from the subnet.
For instructions, see Create an instance that uses IPv6
addresses . If
you want to use an existing VM, you can update the VM to be dual-stack by using
the gcloud compute instances network-interfaces update
command .
Updating existing VMs to IPv6-only isn't supported.
IP addresses for request and return packets
When a target instance receives a packet from a client, the request packet's
source and destination IP addresses are as shown in this table.
Table 1. Source and destination IP addresses for request
packets
Protocol forwarding type
Source IP address
Destination IP address
External protocol forwarding
The external IP address associated with a Google Cloud VM or an
external IP address of a client on the internet.
The IP address of the forwarding rule.
Internal protocol forwarding
A client's internal IP address; for Google Cloud clients, the
primary internal IPv4 address or IPv6 address or an IPv4 address from an
alias IP range of a VM's network interface.
The IP address of the forwarding rule.
Software running on the target instance VMs should be configured to do the
following:
Listen on (bind to) the forwarding rule IP address or any IP address
( 0.0.0.0 or :: ).
If the forwarding rule's protocol supports ports, then listen on (bind to) a
port that's included in the forwarding rule.
Return packets are sent directly from the target instance to the client. The
response packet's source and destination IP addresses depend on the protocol:
TCP is connection-oriented. Target instances must reply with packets that have
source IP addresses that match the forwarding rule's IP address. This ensures
that the client can associate the response packets with the appropriate TCP
connection.
AH, ESP, GRE, ICMP, ICMPv6, and UDP are connectionless. Target instances can
send response packets which have source IP addresses that either match the
forwarding rule's IP address, or match any IP address assigned to the VM's NIC
in the same VPC network as the forwarding rule. Practically speaking, most
clients expect the response to come from the same IP address to which they
sent packets.
The following table summarizes sources and destinations for return packets:
Table 2. Source and destination IP addresses for return
packets
Traffic type
Source IP address
Destination IP address
TCP
The IP address of the forwarding rule.
The request packet's source IP address.
AH, ESP, GRE, ICMP, ICMPv6, and UDP
For most use cases, the IP address of the forwarding rule. 1
The request packet's source IP address.
1 With internal protocol forwarding, it is possible to set the
response packet's source to the VM NIC's primary internal IPv4 address or IPv6
address or an alias IP address range. If a VM has IP forwarding enabled, it
can use an arbitrary source IP address for packets that it sends to
destinations routed within a VPC network. Not using the
forwarding rule's IP address as a source is an advanced scenario because the
client receives a response packet from an internal IP address that does not
match the IP address to which it sent a request packet.
Outbound internet connectivity from target instances
VM instances referenced by target instances can initiate connections to the
internet by using the IP address of the associated forwarding rule as the source
IP address of the outbound connection.
Generally, a VM instance always uses its own external IP address or
Cloud NAT to initiate connections. You use the forwarding rule IP
address to initiate connections from target instances only in special scenarios
such as when you need VM instances to originate and receive connections at the
same external IP address.
Outbound packets sent from target instance VMs directly to the internet have no
restrictions on traffic protocols and ports. Even if an outbound packet
is using the forwarding rule's IP address as the source, the packet's
protocol and source port don't have to match the forwarding rule's protocol and
port specification. However, inbound response packets must match the forwarding
rule IP address, protocol, and destination port of the forwarding rule. For more
information, see Paths for regional external passthrough Network Load Balancers and external protocol
forwarding .
This path to internet connectivity from a target instance VM is the
default intended behavior according to Google Cloud's implied firewall
rules . However, if you have
security concerns about leaving this path open, you can use targeted egress
firewall rules to block unsolicited outbound traffic to the internet.
Limitations
A forwarding rule cannot point to more than one target instance.
Health checks are not supported with target instances. You must ensure
that the necessary software is running and operational on the VM referenced by
the target instance.
Internal protocol forwarding for IPv6 traffic doesn't support the
L3_DEFAULT protocol. Use either TCP or UDP .
For Dynamic NICs, you must manually add local routes for
forwarding rule IP addresses as described in the following known issue:
Dropped packets when using Dynamic NICs with alias IP ranges, protocol forwarding, or Passthrough Network Load Balancers .
API and gcloud reference
For forwarding rules, see the following:
gcloud compute forwarding-rules
REST Resource: forwardingRules
For target instances, see the following:
gcloud compute target-instances
REST Resource: targetInstances
Pricing
Protocol forwarding is charged at the same rate as load balancing. There is a
charge for the forwarding rule and a charge for the inbound data processed by
the target instance.
For all pricing information, see Pricing .
Quotas and limits
For the quotas on forwarding rules for protocol forwarding, see Quotas and
limits: Forwarding rules .
What's next
Troubleshoot protocol forwarding
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
