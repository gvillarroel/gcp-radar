---
title: "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/features
  title: "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Load balancer feature comparison
Stay organized with collections
Save and categorize content based on your preferences.
This page gives you a comparative overview of the load balancing features
offered by Cloud Load Balancing. If you haven't already done so, begin by
reading the following:
To get an overview of the different load balancing solutions that are
available in Google Cloud, see Cloud Load Balancing
overview .
To determine which Google Cloud load balancer best meets your
application's needs, see Choose a load
balancer .
In the following tables, a checkmark
indicates that a feature is supported. For more information about a feature,
click the info link.
Type of load balancer
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Proxy
Load balancer modes:
regional
cross-region
Load balancer modes:
global
classic
regional
Load balancer modes:
regional
cross-region
Load balancer modes:
global
classic
regional
Passthrough
Load balancer modes: internal
Load balancer modes: external
Protocols from the clients to the load balancer
This table lists the protocols supported for communication between clients and
the different load balancers.
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
One of:
HTTP (HTTP/1.0)
HTTPS (HTTP/1.0)
(Only global and classic modes)
One of:
HTTP (HTTP/1.1)
HTTPS (HTTP/1.1)
No QUIC support
No QUIC support for regional mode.
HTTP/2 over TLS
HTTP/2 over TCP, also known as H2C
gRPC 1
(H2C support for global and
regional modes only)
HTTP/3 (based on IETF QUIC)
(Only global and classic modes)
SSL or TCP
TCP only
Regional mode: TCP only
Global and classic mode: SSL or TCP
TCP, UDP, or L3_DEFAULT 2
info
info
WebSockets
info
info
TLS early data
3
1 To support gRPC clients, create an Application Load Balancer
that supports HTTP/2
end-to-end (with or without TLS) .
2 The L3_DEFAULT setting enables support for the
following additional IP protocols:
For internal passthrough Network Load Balancers, L3_DEFAULT enables support for
TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE
.
For regional external passthrough Network Load Balancers, L3_DEFAULT enables support for
TCP, UDP, ESP, GRE, ICMP, and ICMPv6
.
3 TLS early data is supported for
HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC.
Protocols from the load balancer to the backends
This table lists the IP protocol settings supported with backend services for
different load balancers. For more reference information, see Backend
services .
This table does not apply to Application Load Balancers with
serverless NEG backends. The backend service protocol setting is ignored for
these load balancers.
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
One of:
HTTP (HTTP/1.1)
HTTPS (HTTP/1.1)
HTTP/2 over TLS, including gRPC
HTTP/2 over TCP, also known as H2C
(H2C support for global and
regional modes only)
One of:
SSL (TLS) or TCP
TCP only
Regional mode: TCP only
Global and classic mode: SSL or TCP
TCP, UDP, or UNSPECIFIED 1
info
info
WebSockets
info
info
1 The UNSPECIFIED setting enables support for the
following additional IP protocols:
For internal passthrough Network Load Balancers, UNSPECIFIED enables support for
TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE
.
For regional external passthrough Network Load Balancers, UNSPECIFIED enables support for
TCP, UDP, ESP, GRE, ICMP, and ICMPv6
.
Backends
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Backends can be in multiple regions
(Only cross-region mode)
(Only
global and
classic mode)
(Only cross-region mode)
(Only
global and
classic mode)
Backends must be in one region
(Only regional mode)
(Only
regional and
classic mode)
(Only regional mode)
(Only
regional and
classic mode)
info
info
Cloud Storage in backend buckets
External endpoints in internet NEGs
(Only regional mode)
( Global , regional , and
classic modes)
(Only regional mode)
(Only regional mode)
Multiple backend services and a URL map
Virtual machine backends on Compute Engine
Self-managed Kubernetes and GKE
Zonal NEGs
GCE_VM_IP_PORT endpoints
GCE_VM_IP_PORT endpoints
GCE_VM_IP_PORT endpoints
GCE_VM_IP_PORT endpoints
GCE_VM_IP endpoints
GCE_VM_IP endpoints
Private Service Connect NEGs
(Only global and regional mode)
(Only global and regional mode)
Private external endpoints in hybrid NEG backends
info
info
info
info
Serverless backends
info
info
Dual-stack
(IPV4 and IPv6) backends
info
(Only global and regional modes)
info
(Only global and regional modes)
info
info
IPv6-only
backends
info
info
Health checks
For links to reference information, see Health
checks .
Health checks are not supported for internal and external
Application Load Balancers that use serverless NEG backends.
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
gRPC health checks (without TLS)
2
2
2
2
1
gRPC health checks (with TLS)
2
2
2
2
1
HTTP health checks
3
(Only classic and regional mode)
1
HTTPS health checks
3
(Only classic and regional mode)
1
HTTP/2 health checks
(Only classic and regional mode)
1
SSL health checks
1
TCP health checks
1
Configurable health checks
Configurable request path (HTTP, HTTPS, HTTP/2)
Configurable request string or path (TCP or SSL)
Configurable expected response string
1
Distributed Envoy health checks
(Only regional mode)
(Only regional mode)
1 This table documents health checks used by backend
service-based regional external passthrough Network Load Balancers. Target pool-based load balancers support only
legacy
HTTP health checks .
2 Envoy-based regional load balancers
(regional internal and external Application Load Balancers and
regional internal and external proxy Network Load Balancers) that use hybrid NEG backends don't
support gRPC health checks. For more information, see the Hybrid
NEGs overview .
3 Regional external Application Load Balancer does not support legacy health checks.
The global external Application Load Balancer and the classic Application Load Balancer support
legacy health checks only if both of the following are true:
The backends are instance groups.
The backend virtual machine (VM) instances serve traffic that uses the
HTTP or HTTPS protocol.
IP addresses
For links to reference information, see
Addresses .
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Regional internal IPv4 address, accessible in your VPC
network
Regional internal IPv6 address, accessible in your VPC
network
info
Global external IPv4 address
(Includes BYOIP addresses)
(Only global and classic 1 mode)
(Only global and classic 1 mode)
Global external IPv6 address
IPv6 termination
(Only global and classic 1 mode)
IPv6 termination
(Only global and classic 1 mode)
Regional external IPv4 address
(Includes BYOIP addresses)
(Only regional and classic 2 mode)
(Only regional and classic 2 mode)
Regional external IPv6 address
(Includes BYOIP addresses)
info 1, 3
Configure BYOIP
Multiple forwarding rules with the same IP address, each having a
unique protocol and port combination
Internet accessible 4
Privately accessible
info 5
info 5
info 5
Client source IP address preservation
X‑Forwarded‑For header
X‑Forwarded‑For header
PROXY
protocol
PROXY
protocol
1 Supported for Premium Tier.
2 Supported for Standard Tier.
3 External IP addresses from BYOIPv6 are not supported for
target pool backends.
4 Internet access is also available for clients that are in
Google Cloud.
5 Private access is available in the same VPC
network and from any region with global access. In cross-region mode, global
access is enabled by default.
Network topologies
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Network Service Tiers support
Premium Tier
Global mode: Premium Tier
Classic and regional mode: Premium or Standard Tier
Premium Tier
Global mode: Premium Tier
Classic and regional mode: Premium or Standard Tier
Premium Tier
Premium or Standard Tier
Relationships between VPC networks,
load balancers, and their backends
Load balancer and backends in different VPC networks
info
info
info
info
Backends can use a Shared VPC network
Cross-project service referencing
info
info (Only
global and regional mode)
Client access to load balancers
Google Cloud or on-premises clients must access the
load balancer privately 1
Google Cloud client VMs require external IP addresses or a
NAT solution like Cloud NAT to access the load balancer
On-premises client VMs require internet access to access the load
balancer
Google Cloud client VMs can be located in any region
info
(Only global and classic 2
modes)
info
info
Google Cloud client VMs can be located in any project
More topologies
Load balancer as next hop
info
Specify network interface of a backend VM
3
4
3
4
info
info 5
Multi-NIC load balancing
info
info
info
info
info
info
1 Google Cloud or on-premises clients must access the
load balancer privately by being either in the same VPC
network, in a peered VPC network, or in another network
connected using Cloud VPN tunnels or Cloud Interconnect
attachments (VLANs)
2 Supported for Premium Tier
3 For regional load balancers, the backend VM's nic0
must be in the same network and region used by the forwarding rule. For
cross-region load balancers, the backend VM's nic0 must be in the
same network used by the forwarding rule.
4 The load balancer only sends traffic to the first network
interface ( nic0 ), whichever VPC network that nic0
is in.
5 The load balancer only sends traffic to the first network
interface ( nic0 ) of the backend VM.
Failover and availability
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Load balancer is resilient to zonal outages
Automatic failover to healthy backends within same region
Load balancer is resilient to regional outages
Automatic failover to healthy backends in other regions
(Only cross-region mode)
(Only global and classic 1 modes)
(Only cross-region mode)
(Only global and classic 1 modes)
Support for active-active high availability configuration across
load balancers
info
(Only in
regional mode)
Support for active-passive failover configuration across load balancers
(Only in global mode)
Configurable behavior when all backends are unhealthy
info
(configurable)
info
(configurable 2 )
Configurable failover backends
info
(configurable)
info
(configurable 3 )
Connection draining on failover
info
(configurable)
info
(configurable 4 )
1 Supported for Premium Tier.
2 When all the backends of a target pool-based regional external passthrough Network Load Balancers
are unhealthy, traffic is distributed among all backends.
3 Target pool-based regional external passthrough Network Load Balancers use backup pools to
support failover.
4 Target pool-based regional external passthrough Network Load Balancers don't support
configuration of connection draining on failover.
Monitoring
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Byte count metrics
info
info
info
info
info
info
Packet count metrics
info
info
Round trip time (RTT) metrics
info
info
Request latency metrics
info
info
info
Connection count metrics
info
info
HTTP request count metrics
info
info
Logging
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Log type
HTTP request and response attribute logs
info
info
Connection attribute logs
info
info
info
info
Log fields
HTTP request
info
global, classic
regional
String that explains the proxy response
proxyStatus
statusDetails
proxyStatus
TLS metadata between client and load balancer
info
(Only regional mode)
Connection attributes: 5-tuple, bytes/packets sent and received
info
info
info
VM instance details and GKE details
info
(Only regional mode)
info
info
Client VPC or location details
info
info
Network tier details
info
Labels describing the load balancer resource
info
global, classic
regional
info
info
info
info
Session affinity
For detailed information, see Session
affinity .
For links to reference information, see Backend
services .
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Headers
(Only global and regional mode)
HTTP cookie
(Only global and regional)
Generated cookie
Stateful cookie
(Only global and regional)
Client IP, no destination (1-tuple)
CLIENT_IP_NO_DESTINATION
info
Client IP, Destination IP (2-tuple)
CLIENT_IP
1
1
Client IP, Destination IP, Protocol (3-tuple)
CLIENT_IP_PROTO
1
1
Client IP, Client Port, Destination IP, Destination Port, Protocol
(5-tuple)
CLIENT_IP_PORT_PROTO
1,2
1,2
None (5-tuple)
NONE
3
3
1 Setting session affinity is only meaningful if the protocol uses
sessions—for example, TCP.
2 If the protocol does not have a concept of ports or if the packet
does not carry port information (subsequent UDP fragments, for example), then a
3-tuple hash of the Client IP, Destination IP, and protocol is used instead.
3 If the protocol has a concept of ports and the packet carries port
information, then None is a 5-tuple hash. If the protocol does not have a
concept of ports or if the packet does not carry port information (for example,
subsequent UDP fragments), then None is a 3-tuple hash of the Client IP,
Destination IP, and protocol.
Load balancing methods
For detailed information, see the Backend
services overview .
For links to reference information, see Backend
services .
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Balancing mode: connection
Balancing mode: custom metrics
1
1
Balancing mode: in-flight ( Preview )
1
1 (Only global and regional modes)
Balancing mode: rate (requests per second)
1
1
Balancing mode: backend utilization
(instance group backends only)
1
1
Load balancing locality policy
info
info
(Only global and regional modes)
info
info
(Only global and regional modes)
info
Configurable maximum capacity per backend instance group or NEG
1
1
Circuit breaking
1
(Only regional mode)
(Only regional mode)
Prefers region closest to client on the internet 2
(Only global and classic 3 modes)
(Only global and classic 3 modes)
Prefers region closest to the load balancer 2
(Only global and classic 3
modes)
(Only classic 3 modes)
Weight-based load balancing
(Only global and regional modes)
4
info
Within zone/region load balancing policy
info
info
info
info
info
info
1 This feature is not supported with load balancers that use
serverless NEG backends.
2 When the closest region is at capacity or isn't healthy, the
load balancer prefers next closest region.
3 Supported for classic load balancers in Premium Tier only.
4 This feature is not supported with target pool-based
regional external passthrough Network Load Balancers.
Routing and traffic management
Filter this table:
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
HTTP or Layer 7 request routing
info
info
Fault injection
info
(Only global and regional modes)
Configurable timeouts
info
info
info
info
Retries
info
info
Redirects
info
global
classic
regional
URL rewrites
info
global
classic
regional
Request and response header transformations
(configured on the URL map)
info
(Only global and regional modes)
Traffic splitting
info
(Only global and regional modes)
Traffic mirroring
info 1
(Only
global and
regional modes)
(Only regional mode)
Outlier detection
info
(Only
global
and regional modes)
Retry failed requests
info
(Only global
and regional modes)
Custom request and response headers
(configured on the backend service)
(Only global
and regional modes)
Custom error responses
(Only
global mode)
Service load balancing policy
(Only
cross-region mode)
(Only
global mode)
(Only
cross-region mode)
(Only
global mode)
Connection tracking policy
info
info 1
Source IP-based traffic steering
info 2
1 This feature is not supported with load balancers that use
serverless NEG backends.
2 This feature is supported by
backend
service-based regional external passthrough Network Load Balancers . Target pool-based load balancers don't
support this feature.
For traffic management features available with Cloud Service Mesh, see
Cloud Service Mesh features: Routing and traffic
management .
Autoscaling and autohealing
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Managed instance group autoscaling based on load balancer serving
capacity
(Only global and classic modes)
Autohealing (native to managed instance groups and GKE)
Connection draining
1
1 This table documents autoscaling and autohealing features supported
by backend service-based regional external passthrough Network Load Balancers. Target
pool-based regional external passthrough Network Load Balancers don't support connection draining.
Security
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Google-managed SSL certificates
info
info 1
(Only global and classic mode) 2
CORS
info
(Only global and regional modes)
Identity-Aware Proxy (IAP)
3
Google Cloud Armor
info
info
(Only global and classic mode)
info
SSL offload
(Only global and classic modes) 2
SSL policies (TLS version and cipher suites)
info
info
info
(Only global and classic modes) 2
Frontend mTLS
info
info
Backend mTLS
info
info (Only global and regional modes)
Authorization policies
info
info (Only global and regional modes)
1 Global external Application Load Balancers and classic Application Load Balancers support
both Compute Engine and Certificate Manager
Google-managed SSL certificates, whereas regional external Application Load Balancers support only
Certificate Manager Google-managed certificates.
2 Supported only if the load balancer is configured with a target
SSL proxy.
3 IAP is incompatible with Cloud CDN.
Google Cloud Armor protection for external load balancers
Cloud Armor provides both always-on and user-configurable DDoS
protections for all external load balancers, and user-configurable security
policy rules depending on the type of load balancer.
Load balancer type or mode
Cloud Armor security policies
Supported security policy types
Global external Application Load Balancer
Backend security policy
Edge security policy
Classic Application Load Balancer
Backend security policy
Edge security policy
Regional external Application Load Balancer
Regional backend security policy
Global external proxy Network Load Balancer
Backend security policy
Classic proxy Network Load Balancer
Backend security policy
Regional external passthrough Network Load Balancer
Network edge security policy
You can also configure advanced network DDoS protection for
regional external passthrough Network Load Balancers ,
protocol forwarding , or VMs with
public IP addresses. For more information about advanced network DDoS
protection, see
Configure advanced network DDoS protection .
Cross-product integrations
Feature
Application Load Balancer
Proxy Network Load Balancer
Passthrough Network Load Balancer
Internal
External
Internal
External
Internal
External
Cloud CDN
(Only global and
classic 1 modes)
Service Extensions plugins and callouts
info
info
Internal Compute Engine DNS names
(Only regional mode)
(Only regional mode)
info
Automatic Service Directory registration (Preview)
info
info
App Hub integration
info
info
info
info
info
info
1 Supported for Premium Tier
What's next
For detailed information about each load balancer, see the following:
External Application Load Balancer overview (global, classic, and regional)
Internal Application Load Balancer overview (regional and cross-region)
External proxy Network Load Balancer overview (global, classic, and regional)
Internal proxy Network Load Balancer overview (regional and cross-region)
Regional external passthrough Network Load Balancer overview
Internal passthrough Network Load Balancer overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-15 UTC."],[],[]]
