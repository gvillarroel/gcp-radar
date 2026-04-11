---
title: "Sample topology for data transfer \_|\_ Network Connectivity Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer-topology
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer-topology
  title: "Sample topology for data transfer \_|\_ Network Connectivity Center \_|\_\
    \ Google Cloud Documentation"
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
Sample topology for data transfer
Stay organized with collections
Save and categorize content based on your preferences.
The following topology shows a VPC network and two on-premises
sites. Each on-premises site connects to Google Cloud by using a
Router appliance spoke. The two on-premises sites can use Google's network
to exchange data with each other.
Router appliance topology (click to enlarge)
On-premises Customer network A and Customer network B are each connected
through customer premises equipment (CPE) to a router appliance instance.
CPEs typically use a connectivity mechanism, such as an SD-WAN overlay tunnel
or an IPsec VPN tunnel, to establish connectivity with the
router appliance instance.
Each router appliance instance is located in the
Google Cloud region closest to its associated customer network. Both
router appliance instances are in a single VPC network.
However, the router appliance instances are in different regions. For this
reason, the VPC network has its
dynamic routing mode
set to global .
Both router appliance instances are attached as spokes to the
Network Connectivity Center (NCC) hub. Because Customer network A and Customer network B
need to send data to each other, both spokes have the site-to-site data
transfer field enabled.
You can use site-to-site data transfer only in supported locations. For
more information, see
Locations supported for data transfer .
In each region, a router appliance instance establishes Border Gateway
Protocol (BGP) peering with the appropriate Cloud Router. Each
Cloud Router receives and advertises route prefixes from the
corresponding on-premises location.
The Cloud Routers dynamically exchange all received
routes with each other. This configuration provides end-to-end dynamic route
exchange and data plane connectivity between Customer network A and
Customer network B .
Important: For Cloud Routers in different regions to
exchange routes with each other, you must enable global dynamic routing
mode in your VPC network. For more information, see
Dynamic routing .
What's next
To learn about high availability requirements, see
High availability requirements for spoke resources .
To learn about requirements for assigning ASNs, see
ASN requirements for site-to-site data transfer .
To create hubs and spokes, see
Working with hubs and spokes .
To work through a tutorial, see
Connecting two sites by using Cloud VPN spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
