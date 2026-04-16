---
title: "Order of routes \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/order-of-routes
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/order-of-routes
  title: "Order of routes \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Guides
Send feedback
Order of routes
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how custom routes with next hops of Cloud VPN
tunnels work in Google Cloud.
For background information about Google Cloud routes, including
route applicability and order and static route parameters, see
the Virtual Private Cloud (VPC) routes overview .
Route types
A Cloud VPN tunnel can be a next hop for a custom route in your
VPC network. Each custom route with a next hop Cloud VPN
tunnel defines an egress path for packets leaving your VPC
network:
A Cloud Router always manages a Classic VPN tunnel that uses
dynamic routing
or an HA VPN tunnel. The
Cloud Router receives BGP advertisements from and sends BGP messages
to a peer VPN gateway .
Cloud Router automatically creates and removes dynamic
routes in your VPC
network—that is, the routes with destinations in a peer network. It also
advertises routes to a peer network—that is, routes to the IP
ranges of subnets in your VPC network or to custom
destinations that
you specify
in a Cloud Router configuration. The dynamic
routing mode of your
VPC network controls the set of routes that
Cloud Router imports and exports.
A policy-based or route-based Classic VPN tunnel uses static
routing .
If you use the Google Cloud console to create one of these tunnels,
Google Cloud automatically creates static
routes based on the remote IP ranges that you
specify in the Cloud VPN configuration. If you use the Google Cloud CLI
to create one of these tunnels, you must manually create the static routes
that use the tunnel as a next hop.
Example scenarios
Google Cloud follows a well-defined
applicability and order when selecting
the next hop to which a packet should be sent. The following examples
demonstrate common interactions between routes and Cloud VPN.
Interaction with subnet routes
The following table demonstrates how subnet routes and custom routes interact.
Each row represents a possible IP range of a subnet in a VPC
network. The on-premises ranges are 10.2.0.0/16 for IPv4 and fd20:a:b:c::/64 for IPv6.
IPv6 traffic is supported only by HA VPN gateways that are
configured with a dual stack type of IPv4 and IPv6.
VPC network
Cloud VPN tunnel routing
IP range of Google Cloud subnet
Static (policy-based, route-based)
Classic VPN only
Dynamic (BGP)
Classic VPN or HA VPN
10.2.0.0/16
Same as on-premises IP range
Google Cloud does not let you create a static route
whose destination is 10.2.0.0/16 and whose next hop is a
Cloud VPN tunnel.
The tunnel's associated Cloud Router ignores any advertised
routes with a destination of 10.2.0.0/16 . Traffic destined for
10.2.0.0/16 remains in your VPC network.
fd20:a:b:c::/64
Same as on-premises IP range
Classic VPN does not support IPv6.
The tunnel's associated Cloud Router ignores any advertised
routes with a destination of fd20:a:b:c::/64 . Traffic destined for
fd20:a:b:c::/64 remains in your VPC network.
10.0.0.0/8
Broader than on-premises IP range
(smaller subnet mask)
Google Cloud does not let you create a static route
whose destination is 10.2.0.0/16 and whose next hop is a
Cloud VPN tunnel.
The tunnel's associated Cloud Router ignores any advertised
routes whose destinations match or fit within 10.0.0.0/8 ,
including 10.2.0.0/16 . Traffic destined for
10.0.0.0/8 remains in your VPC network.
fd20:a:b::/48
Broader than on-premises IP range
(smaller subnet mask)
Classic VPN does not support IPv6.
The tunnel's associated Cloud Router ignores any advertised
routes whose destinations match or fit within fd20:a:b::/48 ,
including fd20:a:b:c::/64 . Traffic destined for
fd20:a:b::/48 remains in your VPC network.
10.2.99.0/24
Narrower than on-premises IP range
(longer subnet mask)
Google Cloud lets you create a static route with the
10.2.0.0/16 destination and next hop Cloud VPN
tunnel; however, traffic to IP addresses in 10.2.99.0/24
remains inside your VPC network.
The tunnel's associated Cloud Router accepts an advertised
route whose destination is 10.2.0.0/16 ; however, traffic to
IP addresses in 10.2.99.0/24 remains inside your
VPC network.
fd20:a:b:c::/80
Narrower than on-premises IP range
(longer subnet mask)
Classic VPN does not support IPv6.
The tunnel's associated Cloud Router accepts an advertised
route whose destination is fd20:a:b:c::/64 ; however, traffic to
IP addresses in fd20:a:b:c::/80 remains inside your
VPC network.
When tunnels are down
The following sections describe how Cloud VPN behaves when tunnels are down,
for both dynamic and static routing.
Dynamic (BGP) routing
When a Classic VPN tunnel that uses dynamic routing or an
HA VPN tunnel goes down, the Cloud Router
managing it automatically removes the learned routes. The length of time that
it takes to detect the breakage varies depending on the configured BGP
keepalive interval
and hold timer .
The learned routes can be re-added when the tunnel is re-established.
This process is fully automatic, but can still result in some packet loss during
the time that it takes for Cloud Router to remove the affected routes.
Static routing
Google Cloud never considers a Cloud VPN tunnel as a valid next
hop that has not established an IKE security association (SA). If a
Cloud VPN tunnel has established an IKE SA, Google Cloud
considers it operational. An operational Cloud VPN tunnel
only passes traffic if it is selected as the next hop according to the
routing order . The next hop for a different
route, with either a more specific destination or with a higher priority,
might be used instead.
The following scenarios demonstrate expected behaviors:
If you have multiple static routes for the same destination, each
having a different next hop Cloud VPN tunnel, Google Cloud
only considers those tunnels that have established IKE SAs (Phase 1). Tunnels
that are down—that is, that do not have valid IKE SAs—are disregarded
before considering route priority.
For example, suppose that you have three static
routes for the 192.168.168.0/24 destination: one with priority 10 whose
next hop Cloud VPN tunnel is down, a second with priority 20 whose
next hop tunnel is up, and a third with priority 30 whose next hop tunnel is
also up. Google Cloud sends traffic to the second next hop, even
though its route has a lower priority than the route whose next hop is down.
If the first tunnel is re-established, then Google Cloud considers
it a valid next hop and uses that route instead.
Traffic is dropped if all Cloud VPN tunnels serving as next hops for
static routes with the same destination are down. Traffic is dropped even
if there is a static route for a broader destination with an
operational next hop tunnel.
For example, suppose that you have a static route for
192.168.168.0/24 whose next hop Cloud VPN
tunnel is down (no valid IKE SA). Even if you have a route for
192.168.0.0/16 whose next hop is an operational Cloud VPN tunnel,
traffic to 192.168.168.0/24 is dropped. This is because Google Cloud
always selects routes with the most specific destinations.
When traffic switches from one next hop Cloud VPN tunnel to another,
you should still expect packet loss. In-flight packets might be dropped and need
to be re-transmitted.
ECMP over tunnels
For both dynamic and static routing, if more than one custom route exists for
the same destination and has the same priority and an active (IKE SA
established) next hop tunnel, Google Cloud uses equal-cost multipath
(ECMP) routing to distribute packets among the tunnels.
This balancing method is based on a hash, so all packets from the same flow use
the same tunnel as long as that tunnel is up.
To test ECMP behavior, use iperf3
to send multiple simultaneous TCP streams, ideally from multiple
Google Cloud virtual machine (VM) instances,
through Cloud VPN tunnels. If you need to validate ECMP behavior, do
not use ICMP ( ping ) to perform tests. A ping test from one VM instance isn't
sufficient to test ECMP-based egress through Cloud VPN tunnels
because only one tunnel is selected when you have a fixed source and destination.
ICMP has no concept of ports and is a fixed protocol, so the hash is only
calculated from two pieces of information: the source and destination addresses
(a two-tuple hash).
What's next
To learn about the basic concepts of Cloud VPN, see the
Cloud VPN overview .
To help you solve common issues that you might encounter when using
Cloud VPN, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
