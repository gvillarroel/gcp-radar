---
title: "High availability requirements for spoke resources \_|\_ Network Connectivity\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/high-availability
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/high-availability
  title: "High availability requirements for spoke resources \_|\_ Network Connectivity\
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
High availability requirements for spoke resources
Stay organized with collections
Save and categorize content based on your preferences.
For Network Connectivity Center (NCC) to properly enable site-to-site data transfer, you must
configure spoke resources in high availability configurations. If you don't,
sites might be unable to pass traffic to one another.
Each resource type has different requirements for high availability, as
described in the following sections.
High availability for Cloud Interconnect
For site-to-site data transfer to work correctly with
Cloud Interconnect resources, you must configure multiple Interconnect
connections, each in a separate edge availability domain.
For detailed information about how to configure Cloud Interconnect
resources for high availability, see the following documentation:
Redundancy and SLA for
Dedicated Interconnect
Establishing 99.99% availability for
Dedicated Interconnect
Redundancy and SLA for
Partner Interconnect
Establishing 99.99% availability for
Partner Interconnect
Creating redundant Interconnect connections with sufficient
capacity
High availability for Cloud VPN
For site-to-site data transfer to work correctly with Cloud VPN
resources, you must configure multiple HA VPN gateway interfaces
and tunnels to achieve a 99.99% SLO. For guidance, see the
Cloud VPN overview .
High availability for Router appliance
For site-to-site data transfer to work correctly with router appliance instances
attached to a spoke, you must do the following:
If you place all your router appliance instances in a single spoke,
use equal-cost multipath (ECMP) to advertise the same set of prefixes from
two router appliance instances. To advertise different prefixes for each
spoke, add each router appliance instance to a different spoke.
You can't create a cross-region configuration in a single spoke.
ECMP is the result of advertising the same prefix or prefixes, with
the same MEDs and AS path as applicable, from two or more
router appliance instances. The guidance about
route selection in VPC networks
applies to router appliance instances as it does to other
Google Cloud resources.
For detailed information about how to configure router appliance instances
for high availability, see
requirements for 99.9% availability .
What's next
To view a sample topology, see
Sample topology for site-to-site data transfer .
To learn more about how NCC enables full mesh connectivity, see
Route exchange with site-to-site data transfer .
To work through a tutorial, see
Connecting two sites by using Cloud VPN spokes .
To create hubs and spokes, see
Working with hubs and spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
