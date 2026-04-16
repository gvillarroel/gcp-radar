---
title: "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\
  \ Tests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview
  title: "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\
    \ Tests \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Connectivity Tests
Guides
Send feedback
Connectivity Tests overview
Stay organized with collections
Save and categorize content based on your preferences.
Connectivity Tests is a diagnostics tool that lets you check connectivity
between network endpoints. It analyzes your configuration and, in
some cases, performs live data plane analysis between the endpoints. An endpoint
is a source or destination of network traffic, such as a VM,
Google Kubernetes Engine (GKE) cluster, load balancer forwarding rule, or an IP
address on the internet.
To analyze network configurations, Connectivity Tests simulates the
expected forwarding path of a packet through your Virtual Private Cloud (VPC) network,
Cloud VPN tunnels, or VLAN attachments. Connectivity Tests can also
simulate the expected inbound forwarding path to resources in your VPC
network.
For some connectivity scenarios, Connectivity Tests also performs
live data plane analysis. This feature sends packets over the data plane to
validate connectivity and provides baseline diagnostics of latency and packet
loss. If the route is supported for the feature, each test that you run
includes a live data plane analysis result.
To learn how to create and run tests for various scenarios, see
Create and run Connectivity Tests .
The API for Connectivity Tests is the Network Management API.
For more information, see the API documentation .
Why use Connectivity Tests?
Connectivity Tests can help you troubleshoot the following network
connectivity issues:
Unintended inconsistent configurations
Obsolete configurations caused by network configuration changes or migrations
Configuration errors for a variety of network services and functions
When testing Google-managed services,
Connectivity Tests can also help you determine whether there is an
issue in your VPC network or in the Google-owned
VPC network used for the service resources.
How Connectivity Tests analyzes configurations
When analyzing network configurations, Connectivity Tests uses an
abstract state
machine
to model how a VPC network should process packets.
Google Cloud processes a packet in several logical steps.
The analysis can take many possible paths
Because of the variety of VPC network services and features
that the configuration analysis supports, a test packet traversing a
VPC network configuration can take many possible paths.
The following diagram shows a model for how the configuration analysis simulates
trace traffic between two Compute Engine instances—one on the left
and another on the right.
The analysis depends on your network infrastructure
Depending on your Google Cloud network and resource configurations, this traffic
might go through a Cloud VPN tunnel, a VPC network,
a Google Cloud load balancer, or a peered VPC network before
reaching the destination Compute Engine instance.
The network abstract state machine (click to enlarge).
The analysis follows one of the many finite states
The bounded number of steps between discrete states until a packet has been
delivered or dropped is modeled as a
finite state machine .
This finite state machine can be in exactly one of many finite states at
any one time and might have multiple successor states.
For example, when Connectivity Tests matches several routes
according to route precedence, Google Cloud can choose a route among
several routes based on an unspecified hashing function in the data plane. If a
policy-based route is configured, Connectivity Test
routes the packet to the next hop, which is an internal load balancer.
In the previous case, the Connectivity Tests trace returns all of the
possible routes but can't determine the method Google Cloud used to
return the routes. This is because that method is internal to Google Cloud
and is subject to change.
Google-managed services
Google-managed services, such as Cloud SQL and Google Kubernetes Engine (GKE),
allocate resources for customers in projects and VPC networks
that Google owns and manages. Customers don't have permission to access these
resources.
The Connectivity Tests configuration analysis can still run a test and
provide an overall reachability result for Google-managed services, but it
doesn't provide details for the tested resources in the project owned by Google.
The following diagram shows a model for how the configuration analysis
simulates trace traffic from a Compute Engine instance in a customer
VPC network to a Cloud SQL instance in the Google-owned
VPC network. In this example, the networks are connected through
VPC Network Peering.
Similar to a standard test between two Compute Engine instances, the
logical steps include checking the relevant egress firewall rules and matching
the route. When you run a test, Connectivity Tests configuration
analysis provides details about these steps. However, for the final logical step
of analyzing the configuration in the Google-owned VPC network,
the analysis provides only an overall reachability result.
Connectivity Tests doesn't provide details for the resources in the
Google-owned project because you don't have permission to view them.
For more information, see the test examples in
Test connectivity to and from Google-managed services .
The network abstract state machine for Google-managed services (click to enlarge).
Supported configurations
The Connectivity Tests configuration analysis supports testing the
network configurations described in the following sections.
Source endpoints
Connectivity Tests configuration analysis supports the following
source endpoints:
Compute Engine instance
Cloud Run revision
Cloud Run functions (1st gen)
App Engine standard environment
Cloud SQL instance
GKE control plane
GKE Pod
Internet IP address
IP address from an on-premises network
IP address of a Compute Engine instance
IP address of a Cloud SQL instance
IP address of a GKE control plane
IP address of a GKE Pod
Unassigned IP address in a Virtual Private Cloud network
Destination endpoints
Connectivity Tests configuration analysis supports the following
destination endpoints:
Compute Engine instance
Cloud SQL instance
GKE control plane
GKE Pod
External and
internal Application Load Balancer
External and
internal Proxy Network Load Balancer
External
and
internal
Passthrough Network Load Balancer
Private Service Connect endpoint
Memorystore for Redis Cluster
Memorystore for Redis instance
Internet IP address
IP address from an on-premises network
IP address of a forwarding rule
IP address of a Compute Engine instance
IP address of a Cloud SQL instance
IP address of a GKE control plane
IP address of a GKE Pod
IP address of a Memorystore for Redis Cluster
IP address of a Memorystore for Redis instance
Google Cloud networking features
You can test connectivity between resources that use the following features
(both IPv4 and IPv6 are supported whenever applicable):
VPC networks
VPC Network Peering
Shared VPC
Private Google Access
Cloud Load Balancing
Alias IP ranges
Privately used public IPv4 addresses
Compute Engine instances with multiple network interfaces
VPC routing
VPC firewall rules
Regional network firewall policies
Hierarchical firewall policies and
global network firewall policies
Resource Manager tags for firewalls ,
including when attached to
Compute Engine instances with multiple network interfaces
Policy-based routes
Private Service Connect
Instances with IPv6 addresses ,
including instances with multiple network interfaces
VPC spokes and hybrid spokes for NCC
Public NAT and Private NAT
Cloud VPN
Cloud Interconnect
Cloud Router ,
including dynamic routes that use BGP and static routes
Considerations for Cloud Load Balancing
For Cloud Load Balancing, Connectivity Tests configuration
analysis supports the following features:
Testing connectivity to the load balancer IP addresses
Verifying connectivity of Cloud Load Balancing health checks to
backends
Internal TCP/UDP load balancers can be used as next hops
For Cloud Load Balancing features that are unsupported, see the
Unsupported configurations section .
For information about how Connectivity Tests analyzes backends of a
load balancer, see
Number of traces in a test to a load balancer .
Considerations for Google Kubernetes Engine
For GKE, Connectivity Tests configuration
analysis supports the following features:
Connectivity to and between GKE
nodes and the GKE control plane
Connectivity to and between GKE
Pods, including evaluation of
GKE network policies
and IP masquerading .
Testing connectivity to a GKE service through
Cloud Load Balancing
is supported. However, to evaluate GKE network policies and
IP masquerading, you must use Pods as your test endpoints.
Considerations for serverless endpoints
The source IP addresses of serverless endpoints are usually nondeterministic.
For each test run, Connectivity Tests selects a random IP address from the
pool of addresses that are available to the serverless endpoint. For general
information about how IP addresses are allocated for serverless endpoints, see
the following:
For external connectivity, see
IP addresses .
For connectivity through a Serverless VPC Access connector, see
Send serverless traffic to a Virtual Private Cloud network .
For connectivity through Direct VPC egress, see
IP address allocation .
This connectivity type is available only for Cloud Run.
In some cases, Direct VPC egress and Serverless VPC Access
connectors are configured to route traffic from serverless endpoints through
external connectivity instead of the Virtual Private Cloud network, depending on the
egress settings.
For serverless features that are unsupported, see the
Unsupported configurations section .
Unsupported configurations
The Connectivity Tests configuration analysis doesn't support testing
the following network configurations:
Firewall policy rules with
threat intelligence data
or FQDN objects
aren't supported. If such firewalls can potentially affect a specific
traffic flow, Connectivity Tests returns a corresponding warning.
Internet NEG
backends targeting FQDNs aren't supported. However, internet NEG backends
targeting IP addresses are supported.
Cloud Service Mesh load balancers with the
INTERNAL_SELF_MANAGED forwarding rules aren't supported.
Google Cloud Armor policies aren't considered or used when tracing
connectivity to an external Application Load Balancer IP address.
HA VPN gateways connected to Compute Engine instances
aren't supported.
Cloud SQL external server replicas
defined by DNS names aren't supported. However, external server replicas
defined by IP addresses are supported.
Cloud Run functions (2nd gen) aren't supported. However, you can
test connectivity from a Cloud Run function (2nd gen) by creating a
Connectivity Test for the underlying Cloud Run
revision. A Cloud Run revision is created every time a
Cloud Run function is deployed.
App Engine flexible environment isn't supported.
Cloud Run jobs aren't supported. For more information, see
Services, jobs, and worker pools: three ways to run your code .
How Connectivity Tests analyzes the live data plane
The live data plane analysis feature tests connectivity by sending multiple
probe packets from the source endpoint to the destination. If the destination
isn't a Google Cloud resource, connectivity is tested between the source
endpoint and the network edge location .
The live data plane analysis results show you the number of probes sent, the
number of probes that successfully reached the destination, and a reachability
status. This status is determined based on how many probes were successfully
delivered, as described in the following table.
Status
Number of probes that reached their destination
Reachable
At least 95%
Unreachable
None
Partially reachable
More than 0 and less than 95%
In addition to showing how many packets were successfully delivered, live data
plane analysis also shows median and 95th percentile one-way latency
information. When the destination is an internet IP address, live data plane
analysis sends probes and shows the results for each
Google network edge router that traffic might be
routed through.
Limitations
Live data plane analysis might not cover all possible networking paths:
If the destination endpoint is a Google Cloud load balancer with
multiple backends, each live data plane analysis probe is sent to a random
backend. Some backends can be tested by many probes while other backends might
not be tested at all.
In case of equal-cost multipath (ECMP) routing, each live data plane analysis
probe is forwarded by a random route. Some routing paths can be tested by many
probes while other routing paths might not be tested at all.
The number of live data plane analysis probes doesn't depend on the number of
existing networking paths, and there might not be a sufficient number of
live data plane analysis probes to test each possible path.
If you see apparent discrepancies between the configuration analysis
and live data plane analysis results, see
Troubleshoot Connectivity Tests .
Supported configurations
Live data plane analysis supports a subset of the configurations that are tested
by Connectivity Tests configuration analysis.
Source endpoints
Live data plane analysis supports the following source endpoints:
Compute Engine instance
Serverless endpoint configured with a Serverless VPC Access
connector and associated with one of the following resources:
Cloud Run revision
Cloud Run functions (1st gen)
App Engine standard environment
Cloud SQL instance
GKE control plane
Destination endpoints
Live data plane analysis supports the following destination endpoints:
Compute Engine instance
Internal passthrough Network Load Balancer
Private Service Connect
with a producer internal passthrough Network Load Balancer
Internet IP address, tested to the
network edge location
VLAN attachment for
Cloud Interconnect
Private endpoint associated with one of the following resources:
Cloud SQL instance
Memorystore for Redis Cluster
Memorystore for Redis instance
GKE control plane
Protocols
Live data plane analysis supports TCP and UDP protocols.
Google Cloud networking features
Live data plane analysis supports the following features:
VPC networks
VPC Network Peering
Shared VPC
VPC spokes and hybrid spokes in
NCC
Alias IP ranges
External IP addresses
Internal IP addresses ,
including
privately used public IPv4 addresses
Compute Engine instances with multiple network interfaces
VPC routing
Public NAT and Private NAT , except for
NAT64
VPC firewall rules
Hierarchical firewall policies ,
global network firewall policies ,
and
regional network firewall policies
Secure tags for firewalls , including when
attached to
Compute Engine instances with multiple network interfaces
Policy-based routes
Instances with IPv6 addresses ,
including
instances with multiple network interfaces
Unsupported configurations
Live data plane analysis doesn't support and isn't executed for the following
network configurations:
Non-Google Cloud resources as source endpoints:
Internet IP addresses
Inbound traffic to Google Cloud through
Cloud Interconnect ,
Cloud VPN , and
NCC hybrid spokes
Unassigned IP addresses in a VPC network as
source endpoints
Source and destination endpoints are the same Compute Engine instance
Non-running Compute Engine instances
GKE Pods
Google API and services
External and
internal Application Load Balancer
External and
internal Proxy Network Load Balancer
External passthrough Network Load Balancer
Cloud VPN
NAT64
Considerations and constraints
Evaluate the following considerations when deciding whether to use
Connectivity Tests.
The configuration analysis that Connectivity Tests performs is based
entirely on configuration information for Google Cloud resources and
might not represent the actual condition or status of the data plane for a
VPC network.
While Connectivity Tests does acquire some dynamic configuration
information, such as the Cloud VPN tunnel state and dynamic routes that are
on Cloud Router, it does not access or maintain the health state of
Google internal production infrastructure and data plane components.
A status of Packet could be delivered for a Connectivity Test
does not guarantee that traffic can pass through the data plane. The
purpose of the test is to validate configuration issues that can cause
traffic to drop.
For supported routes, the live data plane analysis results supplement the
configuration analysis results by testing whether transmitted packets arrive at
the destination.
Connectivity Tests has no knowledge of networks outside of Google Cloud
Outside networks are defined as the following:
On-premises networks that reside in your data center or other facility
where you operate your hardware devices and software applications.
Other cloud providers where you run resources.
A host on the internet that sends traffic to your VPC network.
Connectivity Tests doesn't perform firewall connection tracking
Connection tracking for VPC firewalls stores information about
new and established connections and enables allowing or restricting subsequent
traffic based on that information.
The Connectivity Tests configuration analysis doesn't support firewall
connection tracking because the firewall connection table is located in the data
plane for a Compute Engine instance and is inaccessible. However, the
configuration analysis can simulate connection tracking by allowing a return
connection that would normally be denied by an ingress firewall rule, as long as
Connectivity Tests initiates the outbound connection.
Live data plane analysis doesn't support testing firewall connection tracking.
Connectivity Tests can't test Compute Engine instances configured to modify forwarding behavior
Connectivity Tests can't test Compute Engine instances that
have been configured to act in the data plane as routers, firewalls, NAT
gateways, or VPNs. This type of configuration makes it difficult to assess the
environment running on the Compute Engine instance. Additionally, live
data plane analysis doesn't support this type of testing scenario.
Connectivity Tests result times can vary
Getting Connectivity Tests results can take from 30 seconds to up to
10 minutes. The time a test takes is based on the size of your VPC
network configuration and the number of Google Cloud resources that you use.
The following table shows response times that you can expect for all users running
a test against a sample configuration in a query. This configuration contains
Compute Engine instances, a Cloud VPN tunnel, and Google Cloud
load balancers.
Response times per query
Project size
Number of Google Cloud resources
Response latency
Small project
Fewer than 50
60 seconds for 95% of queries from all users
Medium project
Greater than 50 but fewer than 5000
120 seconds for 95% of queries from all users
Large project
Greater than 5000
600 seconds for 95% of queries from all users
Live data plane analysis is not intended for continuous monitoring
Live data plane analysis performs one-time verification of network connectivity
for diagnostic purposes. For continuous monitoring of connectivity and packet
loss, use
Performance Dashboard .
VPC Service Controls support
VPC Service Controls can provide additional security for
Connectivity Tests to help mitigate the risk of data exfiltration.
Using VPC Service Controls, you can add projects to service
perimeters that protect resources and services from requests that originate
outside the perimeter.
To learn more about service perimeters, see the
Service perimeter details and configuration
page of the VPC Service Controls documentation.
What's next
Roles and permissions
Create and run Connectivity Tests
Common test scenarios
Detect invalid or inconsistent configurations
Identify and fix ICMP issues
(tutorial)
Troubleshoot Connectivity Tests
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
