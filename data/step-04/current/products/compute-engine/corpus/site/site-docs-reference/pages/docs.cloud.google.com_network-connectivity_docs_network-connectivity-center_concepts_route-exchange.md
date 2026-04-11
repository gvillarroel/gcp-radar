---
title: "Route exchange with site-to-site data transfer \_|\_ Network Connectivity\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/route-exchange
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/route-exchange
  title: "Route exchange with site-to-site data transfer \_|\_ Network Connectivity\
    \ Center \_|\_ Google Cloud Documentation"
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
Route exchange with site-to-site data transfer
Stay organized with collections
Save and categorize content based on your preferences.
Network Connectivity Center (NCC) provides full mesh connectivity between each spoke that has
the data transfer feature enabled. If all spokes have the feature enabled,
NCC propagates all routes that one spoke learns to all other
spokes.
NCC topology (click to enlarge)
In the preceding topology, Spokes A, B, and C are attached to the same hub
and use Cloud Router to advertise prefixes into the hub.
To enable cross-region site-to-site traffic through hubs and spokes, you must
enable global routing
in the VPC network associated with the hub and spokes.
If all spokes are located in the same region, then global routing isn't
necessary because site-to-site traffic works without enabling global routing.
The following table shows how the hub propagates prefix advertisements to
other spokes.
Routes from Spoke A
Routes from Spoke B
Routes from Spoke C
Routes exported to Spoke A
10.3.0.0/16 is reachable through Spoke B.
10.4.0.0/16 is reachable through Spoke C.
Routes exported to Spoke B
10.2.0.0/16 is reachable through Spoke A.
10.4.0.0/16 is reachable through Spoke C.
Routes exported to Spoke C
10.2.0.0/16 is reachable through Spoke A.
10.3.0.0/16 is reachable through Spoke B.
What's next
To view a sample topology, see
Sample topology for site-to-site data transfer .
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
