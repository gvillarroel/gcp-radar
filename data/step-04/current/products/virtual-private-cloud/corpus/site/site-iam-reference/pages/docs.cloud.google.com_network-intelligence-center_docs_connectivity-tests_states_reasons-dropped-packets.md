---
title: "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\
  \ Tests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets
  title: "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\
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
Reasons for dropped test packets
Stay organized with collections
Save and categorize content based on your preferences.
Connectivity Tests can drop a test packet for any of the following
reasons.
For a full list of possible reasons, see
Configuration analysis states .
Foreign IP address disallowed
The packet is dropped because a Compute Engine instance can send or receive
packets with a foreign IP address only when IP forwarding is enabled.
Probable cause
The VM instance doesn't have IP forwarding enabled, but the source or
destination IP address of the packet going through it doesn't match the
instance's IP addresses. This might happen, for example, when the packet is
delivered to the instance using a
static route with the VM instance as a next hop .
Recommendations
Create a Compute Engine instance with IP forwarding enabled, or set the
corresponding attribute for the existing instance. For more information, see
Enable IP forwarding for instances .
Dropped due to a firewall rule
The packet can be dropped because of a firewall rule, except when the packet is
allowed due to
connection tracking .
Probable cause
Connectivity Tests might deny a test packet because the packet matches a
blocking firewall rule or a
firewall policy rule . However, the actual data
plane might allow the packet through due to connection tracking on the firewall
rule. Connection tracking allows packets for an existing connection to return
despite the firewall rule.
Every VPC network has
two implied firewall rules that
allow egress traffic to everywhere and block incoming traffic from everywhere.
You might also have a higher priority deny egress firewall rule.
For connectivity to succeed, you need an egress firewall rule at the source
allowing access to the destination endpoint, and an ingress firewall rule at the
destination to allow this connection.
VPC firewall rules are
stateful . If the specified destination
endpoint is normally the side that initiates the communication, response traffic
is automatically allowed with connection tracking and there is no need for an
ingress firewall rule.
Recommendations
Delete the deny rule or create an allow rule based on the details in the
Connectivity Tests results. For more information, see
Firewall policies and
Use VPC firewall rules . If the
firewall policy rule that denied traffic has a network context specified,
understand the
firewall policy rules to
determine whether the rule applies to your use case.
Dropped due to no matching route
The packet is dropped due to no matching routes.
Probable cause
There is no active route matching the packet attributes (like a destination IP
address) in the packet network and region.
Recommendations
Verify the list of effective routes in
the Google Cloud console. If you have just created a new route, note that
it might take some time
for Connectivity Tests to receive a configuration update and incorporate it
into analysis.
If you try to access the destination endpoint by using its internal IP address,
make sure that the source and destination networks are connected (for example,
using the VPC Network Peering ,
Network Connectivity Center ,
or a
hybrid connectivity solution
such as Cloud VPN).
Note that
transitive VPC peering
is not supported. Consider connecting the source and destination networks
directly or by using a hybrid connectivity solution.
If you try to access the destination endpoint through the internet, make sure
that you have a route for the destination IP address with the next hop internet
gateway.
If the packet is going through the
hybrid connectivity network endpoint group ,
consider
additional requirements for routes applicability .
Some routes you see in the route view table might not be available for traffic
from hybrid NEGs.
For more information, see Routes and
Use routes .
The packet is sent to a wrong network
The packet is sent to an unintended network. For example, you execute a test
from a Compute Engine instance in the network-1 network to the
Compute Engine instance in the network-2 network, but the packet is
sent to the network-3 network.
Probable cause
The network-1 network has a route with a destination range that includes the
destination instance IP address with the next hop in a different network
( network-3 in the example above).
Recommendations
Verify the list of effective routes and
the
list of routes applicable to the source instance ,
in the Google Cloud console. For more information about route creation and
applicability , see
Routes and Use routes .
Route next hop IP address is not resolved
The packet is sent to a destination using an invalid route with the next hop IP
address not assigned to any resource.
Probable cause
If this is a route with next-hop-address , the next hop address must be a
primary internal IPv4 address or an IPv6 address of the Compute Engine
instance in the route's VPC network. Addresses in peered networks are not
supported.
If this is a route with next-hop-ilb , the next hop address must be an address
of the internal passthrough Network Load Balancer (forwarding rules used by other load balancers, protocol
forwarding, or as Private Service Connect endpoints are not supported).
The IP address must be assigned to a resource in the route's VPC network, or in
a network connected to it with VPC Network Peering.
Recommendations
Verify the next hop IP address belongs to a supported resource. For more
information, see
Considerations for next hop instances
and
Considerations for internal passthrough Network Load Balancer next hops .
Route next hop instance has a NIC in the wrong network
The packet is sent to a destination using an invalid route with the next hop
Compute Engine instance not having a network interface controller (NIC)
in the route's network.
Probable cause
The Compute Engine instance used as a route next hop must have a NIC in
the route's network (not a peered VPC network).
Recommendations
Verify that the next hop Compute Engine instance has a NIC in the
route's network. For more information, see
Considerations for next hop instances .
Route next hop address is not a VM primary IP address
The packet is sent to a destination using an invalid route with the next hop IP
address ( next-hop-address ) not being a primary IP address of the
Compute Engine instance.
Probable cause
The route's next hop IP address ( next-hop-address ) must be a primary internal
IPv4 address of the Compute Engine instance.
Alias IP address ranges are not supported.
Recommendations
Verify that the next hop IP address is a primary internal IPv4 address of the
Compute Engine instance. For more information, see
Considerations for next hop instances .
Route next hop forwarding rule type is invalid
The packet is sent to a destination using an invalid route with the next hop
forwarding rule ( next-hop-ilb ) not being a forwarding rule of the
internal passthrough Network Load Balancer.
Probable cause
The route's next hop forwarding rule must be a forwarding rule of the
internal passthrough Network Load Balancer. For more information, see
Considerations for internal passthrough Network Load Balancer next hops .
Recommendations
Create a route targeting a supported forwarding rule instead of the invalid
route.
Private traffic to internet
A packet with an internal destination address was sent to an internet gateway.
Probable cause
The packet destination IP address is a
private IP address , which cannot be reached through
the internet. However, the packet leaves the source Compute Engine
instance, and matches a route with the next hop internet gateway.
Recommendations
If you'd like to access the destination through the internet, make sure that the
source Compute Engine instance has internet connectivity—for
example, it has an external IP address or uses
Cloud NAT — and use the destination endpoint's
external IP address in the test.
If you'd like to access the destination through its internal IP address, you
need to establish connectivity (create routes) between the source and
destination networks. You can do this in any of the following ways:
If your destination endpoint is within an on-premises network, use a
NCC
solution or a
hybrid connectivity solution ,
such as
Cloud VPN or
Cloud Interconnect .
If your destination endpoint is within Google Cloud:
Configure VPC Network Peering between
VPC networks.
Configure
Cloud VPN
between VPC networks.
Configure network connectivity using Network Connectivity Center
VPC spokes .
If you already have a connection to the destination network:
The source endpoint network doesn't have a route through this connection
or uses the default route that goes through the internet gateway. Verify
the list of effective routes ,
and the
list of routes applicable to the source instance
in the Google Cloud console. For more information about route creation
and applicability , see
Routes and Use routes .
If you are testing connectivity to an on-premises network from a peered
network, see
this example
for custom advertisement, network routing mode, and exchanging custom
routes.
Transitive VPC Network Peering
is not supported. You can use VPN or peering for these two
VPC networks.
Private Google Access is disallowed
Compute Engine instance with only an internal IP address tries to reach the
external IP address of Google APIs and services, but Private Google Access is
not enabled in the instance's subnet.
Recommendations
You can allow the Compute Engine VM instance to reach the external IP
address of Google APIs and services in any of the following ways:
Enable Private Google Access for
the instance's subnet.
Assign an external IP address to the Compute Engine NIC.
Enable Cloud NAT for the VM instance's
subnet.
Private Google Access through VPN tunnel is not supported
A source endpoint with an internal IP address tries to reach the external IP
address of Google APIs and services through the VPN tunnel to another network,
but Private Google Access needs to be enabled in the source endpoint
network.
Probable cause
The packet from the source endpoint to the external IP address of the Google
APIs and services is routed through the Cloud VPN tunnel, but such a
configuration is not supported.
Recommendations
If the source endpoint is a Google Cloud endpoint (like a
Compute Engine VM instance), consider enabling
Private Google Access in its source subnet.
If the source endpoint is an on-premises endpoint, refer to the
Private Google Access for on-premises hosts
for detailed instructions.
Unknown internal address
The destination internal IP address can't be resolved to a known target.
Recommendations
If you are testing connectivity for a Shared VPC network, check if the
service project ID is provided as a test input.
Verify that the IP address is assigned to a supported destination endpoint.
Forwarding rule mismatch
The forwarding rule's protocol and ports don't match the packet header.
Probable cause
The packet is sent using a protocol that isn't supported by the forwarding rule,
or the packet is sent to a destination port that doesn't match the ports
supported by the forwarding rule.
Recommendations
Confirm the destination forwarding rule protocol and ports.
Forwarding rule region mismatch
The forwarding rule doesn't have global access enabled, and its region doesn't
match the packet's region.
Probable cause
Depending on the load balancer and its tier, a
forwarding rule is either
global or regional. For more details, see
the load balancer types table .
If the forwarding rule is regional, the client (for example, the VM or the
VPC connector) should be in the same region as the load balancer.
Recommendations
If you connect to the load balancer from a Google Cloud endpoint such as a
Compute Engine VM instance, make sure it's located in the same region as
the forwarding rule.
While connecting from an on-premises network, make sure that the client accesses
the load balancer through Cloud VPN tunnels or VLAN attachments that are in
the same region as the load balancer. For more details, see
Internal Application Load Balancers and connected networks .
You can enable global access on
internal Application Load Balancers and regional internal proxy Network Load Balancers to access clients in any
region. By default, clients for these load balancers must be in the same region
as the load balancer. For more information, see
Enable global access for internal Application Load Balancers
and
Enable global access for regional internal proxy Network Load Balancers .
Firewall blocking load balancer backend health check
Firewalls block health check probes to the backends and cause backends to be
unavailable for traffic from the load balancer.
Probable cause
For health checks to work, you must create ingress allow firewall rules that
allow traffic from Google Cloud probers to reach your backends. Otherwise,
the backends are considered unhealthy.
Recommendations
Create ingress allow firewall rules according to the
probe IP ranges and firewall rules
table. For more information, see
Required firewall rules .
No external address available
A VM instance with only an internal IP address tried to access external hosts
through a route whose next hop is the default internet gateway. Expected when
Cloud NAT is not enabled in the subnet or when there's no other default route
that uses a different type of next hop (such as a proxy VM).
Probable cause
An instance with only an internal IP address tried to access an external host
but it did not have an external IP address or Cloud NAT was not enabled in
the subnet.
Recommendations
If you'd like to access external endpoints, you can assign an
external IP address to your
instance. Alternatively, you can enable Cloud NAT on its
subnet unless the connection goes through a proxy instance that gives access to
the internet.
Forwarding rule with no instances
The forwarding rule does not have backends configured.
Probable cause
The forwarding rule you are trying to reach does not have any backends
configured.
Recommendations
Check the load balancer configuration and make sure that the
backend service of the load balancer has
backends configured.
Traffic type is blocked
The type of traffic is blocked and you cannot configure a firewall rule to
enable it. For more details, see
Always blocked traffic .
Probable cause
This traffic type is blocked by default and can't be enabled by creating
firewall rules. Common scenarios are as follows:
Sending egress traffic to an external destination with TCP port 25 (SMTP).
For more details, see
Always blocked traffic .
Sending traffic to an unsupported port on a Cloud SQL instance. For
example, sending traffic to TCP port 3310 to a MySQL Cloud SQL instance
with port 3306 open.
Sending egress traffic from an App Engine standard environment version, a
Cloud Run function, or a Cloud Run revision that uses a
protocol other than TCP or UDP.
Recommendations
For egress SMTP (egress traffic to an external destination with TCP port 25)
traffic, see
Sending email from an instance .
For DHCP protocol, including UDP IPv4 packets to destination port 68 (DHCPv4
responses) and UDP IPv6 packets to destination port 546 (DHCPv6 responses), DHCP
traffic is only allowed from the metadata server (169.254.169.254).
For Cloud SQL connectivity, make sure the port used is correct.
Access to the control plane of the GKE cluster is not authorized
Access to the control plane of the GKE cluster from the source IP
address is not authorized.
Probable cause
The source IP you are using doesn't match the authorized access rules that are
configured on your GKE cluster. For more information, see
Access to the cluster endpoints .
Recommendations
Update the GKE control plane access to allow the selected source,
as described in
Modify the control plane access .
Access to the Cloud SQL instance is not authorized
Access to the Cloud SQL instance from the source IP address isn't
authorized.
Probable cause
The source IP you are using doesn't match the authorized networks configured on
your Cloud SQL instance. For the connection to work, your
client application's IP address or address range must be configured as an
authorized network on the Cloud SQL instance.
Recommendations
Update the Cloud SQL instance access to allow the selected source IP
address, as described in
Authorize with authorized networks .
Network tags are not supported by Direct VPC egress in ingress firewall rules
The packet is dropped because Direct VPC egress doesn't support source network
tags in ingress firewall rules.
Probable cause
Matching ingress firewall rules by source network tags isn't supported for
Cloud Run connections through Direct VPC egress. For more information,
see Limitations .
Recommendations
Update your firewall rules to use source IP ranges instead of source network
tags to match traffic from Cloud Run connections through Direct VPC
egress.
Serverless VPC Access connector is not configured
The packet was dropped because the App Engine standard environment version, the
Cloud Run function, or the Cloud Run revision does not have a
Serverless VPC Access connector
configured.
Probable cause
The destination IP address is a private IP address ,
which cannot be reached through the internet. The packet leaves the source, but
there is no Serverless VPC Access connector configured for the
App Engine standard environment version, the Cloud Run function, or the Cloud Run
revision.
Recommendations
If you try to access the destination endpoint by using its private IP address,
make sure that you have configured a Serverless VPC Access
connector for the App Engine standard environment version, the Cloud Run function, or the
Cloud Run revision.
Serverless VPC Access connector is not running
The packet was dropped because the
Serverless VPC Access connector
is not running.
Probable cause
The packet was dropped because all the Serverless VPC Access
connector instances are stopped.
Recommendations
For a list of troubleshooting steps, see
Troubleshooting .
Private Service Connect connection is not accepted
The packet was dropped because the Private Service Connect
connection was not accepted.
Probable cause
The Private Service Connect endpoint is in a project that is not
approved to connect to the service. For more information, see
View endpoint details .
Recommendations
Make sure that the Private Service Connect endpoint is in a
project that is approved to connect to the managed service.
Private Service Connect endpoint is accessed from a peered network
The packet is sent to the Private Service Connect endpoint in the
peered network, but such a configuration
is not supported .
Recommendations
Google recommends that you transition to a hub-and-spoke architecture that uses Network Connectivity Center to enable Private Service Connect connection propagation .
Alternatively, consider one of the following connectivity patterns:
If supported by the service producer, transition to a multi-point access connectivity pattern.
If supported by the service producer, configure a supported consumer load balancer with a Private Service Connect backend.
For further assistance, contact your service producer support or Google Cloud representative.
No valid route from a Google-managed network to destination
The packet is dropped because there is no valid matching route from the network
of the Google-managed service to the destination.
This drop cause applies to any Google-managed service supported by
Connectivity Tests, including Cloud SQL and GKE.
Recommendations
Verify whether the Google-managed service is configured to send traffic to
the destination.
If the destination is intended to be reachable through local static or dynamic
routes configured in your VPC network, ensure that the
VPC network exports those routes to the network of the
Google-managed service. This pattern is common for connections from
Google-managed services to destinations
reachable through Cloud VPN or Cloud Interconnect.
For connections over VPC Network Peering, see
Options for exchanging static routes and Options for exchanging dynamic routes .
For connections through Network Connectivity Center producer VPC spokes,
see
Route exchange with VPC spokes
and Shared properties with VPC spokes .
If the destination is located in a subnetwork configured with privately used
public IP address ranges, ensure that your network exports the
corresponding subnet routes to the network of the Google-managed
service.
For connections over VPC Network Peering, see
Options for exchanging subnet routes .
For connections through Network Connectivity Center producer VPC spokes,
see
Privately used public IPv4 addresses .
If the destination is an internet-routable external IP address, ensure that
the Google-managed service is configured for this connectivity path. For
example, some types of Cloud SQL instances don't support outbound external
connections.
If the destination is intended to be reachable through dynamic routes
imported to the network of the Google-managed service through
VPC Network Peering, the Dynamic routes per region per peering group
limit for the service network might be reached. If you believe this limit has
been reached, file a support case .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
