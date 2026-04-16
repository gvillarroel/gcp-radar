---
title: "Site-to-site data transfer overview \_|\_ Network Connectivity Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer
  title: "Site-to-site data transfer overview \_|\_ Network Connectivity Center \_\
    |\_ Google Cloud Documentation"
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
Site-to-site data transfer overview
Stay organized with collections
Save and categorize content based on your preferences.
Network Connectivity Center (NCC) lets you use Google's network as part of a wide area network (WAN)
that includes your external sites. This feature is known as
site-to-site data transfer .
For example, suppose you have an office in New York, an office in Sydney, and an
office in Tokyo. After completing the required configuration, you can use
Google's network to move data between all three locations.
To enable this functionality, you use a supported resource to connect each
site to Google Cloud. Then you create a NCC
spoke to represent each connectivity resource. Each spoke is attached to a
central hub , which provides full mesh connectivity between all of the spokes.
Supported connectivity resources include Cloud VPN
(HA VPN tunnels), Cloud Interconnect, and
Router appliance. Router appliance is a NCC feature that
lets you install a third-party network virtual appliance in Google Cloud
and use it to exchange routes with Cloud Router.
Data transfer over Google's network (click to enlarge).
For a comparison of hybrid connectivity
products and features, see
Choosing a Network Connectivity product .
For more information about Router appliance, see the
Router appliance overview . For
information about NCC, see the
NCC overview .
Considerations
Before using NCC for data transfer, review and consider the
following points:
Data transfer traffic between sites is best-effort, and there are no bandwidth
or latency guarantees.
Data transfer is available only in
supported locations . For an example of
how to configure route advertisements when one of your redundant
Interconnect connections is to an unsupported location, see
Configure on-premises router for mixed advertisements .
When data transfer is enabled for one or more spokes, all connectivity
resources associated with these spokes must be part of a single
VPC network.
If you want to exchange routes between spokes in multiple regions, the
VPC network where your spoke resources are located must have
its dynamic routing mode
set to global .
For each spoke, ensure that the
on-premises router advertises identical routes to the Cloud Router
associated with the spoke.
In some cases, your network might experience duplicate route advertisements
from multiple spokes for the same subnets with the same priority.
NCC handles these situations as follows:
When different types of resources are being used, VLAN attachments
receive more traffic than Cloud VPN connections,
which receive more traffic than VMs acting as router appliance instances.
When NCC splits traffic across multiple resources of the
same type (for example, two VPN tunnels), it uses equal-cost multi-path
( ECMP )
routing to distribute traffic.
Known issue. Problems can occur if there are duplicate route
advertisements from resources in participating spokes, such as
HA VPN tunnels, and from similar resources outside
spokes. When duplicate router advertisements exist, then the traffic in
participating spokes might use ECMP to distribute traffic across all
available next hops. This behavior occurs even if the next hops aren't
participating hubs or spokes themselves.
Cloud Router custom learned routes aren't
honored. If you use custom learned routes on BGP sessions associated with this
feature, the routes aren't propagated to external sites.
See also
Considerations
in the main NCC overview.
Requirements
When using site-to-site data transfer, you must do all of the following:
Make sure that all connectivity resources associated with your
spokes use a high availability configuration. For more information, see
High availability for spoke resources .
Follow the guidelines described in
ASN requirements for site-to-site data transfer .
Make sure that routing prefixes are exclusively advertised within a hub or outside of
a hub. If you fail to do this, best-path selection might choose a route that
is not associated with a spoke.
What's next
To view a sample topology, see
Sample topology for site-to-site data transfer .
To learn more about how NCC enables full mesh connectivity, see
Route exchange with site-to-site data transfer .
To learn about high availability requirements, see
High availability requirements for spoke resources .
To work through a tutorial, see
Connecting two sites by using Cloud VPN spokes .
To create hubs and spokes, see
Work with hubs and spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
