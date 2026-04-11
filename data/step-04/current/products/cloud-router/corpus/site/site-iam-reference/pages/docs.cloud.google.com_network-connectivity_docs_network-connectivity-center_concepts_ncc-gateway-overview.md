---
title: "NCC Gateway overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview
  title: "NCC Gateway overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\
    \ Documentation"
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
NCC Gateway overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
NCC Gateway is a spoke type that can be attached to the
Network Connectivity Center (NCC) hub. It
is a regional product that enables security for Cross-Cloud Network
traffic. NCC Gateway lets you enable security functions such
as third-party Security Service Edge (SSE), a cloud-delivered security component
of secure access service edge (SASE) ,
and terminate interconnect connections.
NCC Gateway offers the following features:
Streamlined SSE integration: you can integrate SSE seamlessly with transparent
steering for improved user-to-application protection and performance.
Regional deployment: you can deploy NCC Gateway in various regions
based on physical proximity to data centers or other cloud providers.
Secure remote workforce: You can securely connect remote workforces—such as those in
branches, data centers, and remote offices—to private
applications in Google Cloud, on-premises, or other cloud providers and to
public applications, like Palo Alto Networks Prisma Access and Symantec
Cloud Secure Web Gateway (Cloud SWG).
Enhanced security: you can enable security functions like SSE for multicloud
traffic.
Simplified management: NCC Gateway helps you reduce complexity
and operational costs associated with managing VPC networks
and connections to remote networks.
Performance visibility: NCC Gateway lets you gain insights
into network performance with metrics and telemetry data.
Benefits
NCC Gateway provides the following benefits:
Optimal application experience with reduced latency: high bandwidth
cloud-first consumption of SSE service with NCC Gateway
and enhanced performance through Google's private backbone.
Unified security for all user traffic: improved security posture with single
unified security stack and reduced attack surface by limiting ingress and
egress points.
Simplified management through NCC.
Key terms
To understand NCC Gateway, familiarize yourself with the
following terminology:
Hybrid attachment : hybrid connections that you configure to directly
land on NCC Gateway.
Security service function : services that are attached to
NCC Gateway. For example, for
user-to-application protection, you must attach an SSE service to
NCC Gateway.
Application or workload VPC network : a workload VPC
network is typically a network that uses Compute Engine virtual
machine (VM) or Google Kubernetes Engine (GKE) containers as workloads. Workload
VPC networks can be regular VPC networks or
Shared VPCs with a host project and multiple
service projects. The workload VPC networks must be configured
as spokes in the hub.
Spoke groups : a way to group spokes within an NCC hub.
Spoke groups let you segregate spokes into different routing domains.
A spoke group can contain multiple spokes, but a spoke can only belong to one
group. For detailed information about spoke groups for different topologies, see
Preset connectivity topologies .
Hybrid inspection topology : lets
you add NCC Gateway spokes to a group to apply policies.
For information about hybrid inspection topology, see
Hybrid inspection topology .
Secure Access Connect : lets you connect third-party SSE
products to NCC Gateway for security processing and secure
internet egress. For information about Secure Access Connect, see
Secure Access Connect overview .
Supported SSE products
NCC Gateway supports connections to the following SSE products:
Symantec Cloud SWG
Palo Alto Networks Prisma Access
Use cases
NCC Gateway is ideal for organizations that want to secure
hybrid workforce access to applications. NCC Gateway provides
security for hybrid workforce through an integrated partner ecosystem to
let you connect to SSE providers of your choice.
NCC Gateway lets you secure your access to private applications
hosted in Google Cloud, on-premises, in other cloud providers, and in public
applications hosted on internet and SaaS applications. NCC Gateway
lets you create regional deployments for optimal data center proximity and
manage cross-region traffic on Google Cloud's private backbone.
Use cases for Google Cloud users include the following:
Branch users to the internet
Branch users to private applications
Private applications to the internet
Some supported partners offer one or more of the following use cases:
Mobile users to the internet
Mobile users to private applications
Branch users to partner applications
Private applications to partner applications
Traffic flows
This section describes the traffic flow paths in NCC Gateway
depending on each use case.
Traffic flow in the use cases for Google Cloud users
Branch users to the internet
In the following diagram, the traffic flows from an on-premises branch user
through the NCC Gateway and the third-party SSE stack to the
internet.
Branch users to the internet traffic flow (click to enlarge).
Branch users to private applications
In the following diagram, the traffic flows from the on-premises branch user
through the NCC Gateway, traverses the third-party SSE, and
then goes back through the NCC Gateway to a private application.
Branch users to a private application
traffic flow (click to enlarge).
Private applications to the internet
In the following diagram, the traffic flows from Google Cloud
through the NCC Gateway, traverses the third-party SSE, and
then goes back through the NCC Gateway to the internet.
Private applications to the internet traffic flow
(click to enlarge).
Traffic flow in the use cases for supported partners
Mobile users to the internet
In the following diagram, traffic flows from mobile users through the
third-party SSE to the internet. In this case, traffic doesn't go through
NCC Gateway.
Mobile users to the internet traffic flow (click to enlarge).
Mobile users to private applications
In the following diagram, traffic flows from mobile users through the
third-party SSE service and the NCC Gateway to a private
application hosted in a VPC network.
Mobile users to a private
application traffic flow (click to enlarge).
Branch users to partner applications
In the following diagram, the traffic flows from the on-premises branch user
through the NCC Gateway, traverses the third-party SSE, and
then goes back through the NCC Gateway to the on-premises branch.
Branch users to partner applications traffic flow (click to enlarge).
Private applications to partner applications
In the following diagram, the traffic flows from private applications through
the NCC Gateway, traverses the third-party SSE, and then goes
back through the NCC Gateway to partner applications.
Private applications to partner applications traffic flow (click to enlarge).
Processing capacity
The processing capacity of an NCC Gateway spoke is its
provisioned bandwidth. You must provision enough bandwidth to account for
each traffic flow direction, keeping in mind that packets might enter and leave
the gateway spoke more than once for each flow direction for some traffic flows.
Consider the following examples to calculate the required processing capacity
of a gateway spoke.
Example: Branch users to the internet
Suppose that a branch's on-premises network is connected to the internet as
shown in the Branch users to the internet use case. The
packets are traversing NCC Gateway once in each direction and
the branch and the internet need 1 Gbps full-duplex
bandwidth: 1 Gbps for traffic from the branch on-premises network to the
internet and 1 Gbps for traffic from the internet to the branch network.
In this case, the user needs 2 Gbps of processing capacity. This example
also assumes that the SSE partner doesn't drop any packets. If your chosen SSE
parter recommends higher bandwidth than what this example calculates, follow the
partner's recommendation.
Example: Branch users to private applications
Suppose that a branch's on-premises network is connected to
Google Cloud as shown in the
Branch users to private applications use case, and
that the branch and private applications need 1 Gbps full-duplex
bandwidth: 1 Gbps for traffic from the branch to the applications
and 1 Gbps for traffic from the applications to the branch. This example
also assumes that the SSE partner doesn't drop any packets. If your chosen
SSE parter recommends higher bandwidth than what this example calculates, follow
the partner's recommendation.
The NCC Gateway spoke that connects the branch's on-premises
network to the NCC hub needs two 1 Gbps VLAN attachments
in order to meet Cloud Interconnect SLA requirements. This way, it's
possible for one VLAN attachment to provide 1 Gbps of full-duplex bandwidth
between the branch and private applications even when one VLAN attachment is
offline (for example, due to interconnect connection maintenance).
The required processing capacity of the gateway spoke is 4 Gbps for
the following reasons:
Traffic from the branch on-premises network to the NCC
hub requires 1 Gbps of bandwidth. This traffic requires 2 Gbps of
gateway bandwidth because it is processed by the gateway in the following
two places:
1 Gbps as packets from the VLAN attachments that connect to the
branch enter the gateway spoke
1 Gbps as packets leave the gateway spoke and enter the hub
Traffic from the NCC hub to the branch on-premises network
also requires 1 Gbps of bandwidth. This traffic requires an additional
2 Gbps of gateway bandwidth because it is processed by the gateway
in the following two places:
1 Gbps as packets leave the hub and enter the gateway spoke
1 Gbps as packets leave the gateway spoke and are sent to the VLAN
attachments that connect to the branch
We recommend the following strategy for configuring gateway processing capacity
and VLAN attachment bandwidth:
The gateway processing capacity is the sum of bandwidth required, in each
direction, among all gateway NICs.
Unlike gateway processing capacity, VLAN attachment bandwidth is full-duplex.
Always provision a sufficient number of VLAN attachments to support your
required bandwidth even if the VLAN attachments that use a common
interconnect connection are down.
Considerations
Keep the following considerations in mind when you use NCC Gateway:
NCC Gateway supports SSE service insertion only.
You can only attach VLAN attachments to
NCC Gateway spokes. Cloud VPNs and Router appliances
aren't supported.
All NCC Gateway spokes must be in the same gateways spoke
group. To configure NCC Gateway, NCC hubs must
use the
preset hybrid inspection topology .
Only one service can be attached to an NCC Gateway at a time.
A Cloud Router must be linked to an NCC Gateway in the
same region.
Only VLAN attachments created with a Cloud Router linked to an
NCC Gateway are attached to the gateway.
You can only have one NCC Gateway spoke per region per hub.
NCC Gateway spokes and hub must be in the same project.
You must specify the processing capacity at the time of gateway spoke creation.
The processing capacity can be changed later, if needed.
You can't change assigned IP address ranges. Some IP address ranges
are reserved for SSE partners.
There is no traffic steering policy to bypass a subset of traffic from
NCC Gateway.
Gateway advertised routes don't show up in the VPC route
table. You can view them in the hub route table of the spoke group that
the VPC network is in.
If you configure a gateway advertised route in the gateway spoke, this
route is not propagated to the NCC hub route table until
there is an active SSE gateway.
Gateway advertised routes are programmed using the standard best path
selection mode .
The priority of gateway advertised routes in the hub route table
reflects the effective Andromeda route priority, such as, 65536 or 65537 .
The priority that the gateway advertised route is created with is taken
into account when calculating the effective Andromeda route priority.
Static routes always have a priority between 0-65535 , and therefore take
precedence over gateway advertised routes for the same
destination prefix. So, if you want to direct internet traffic to the
gateway using a gateway advertised route with a 0/0 destination, then you
might need to remove the system-generated default route .
Effective routes view for gateways and hub route tables
You can query hub route tables
from the perspective of a region, which takes into account inter-region cost
when you select a route, whether it is through the gateway or not. This query
lets you see which particular gateway instance receives the traffic if you send
a packet from that particular region.
Example user journey
If you don't have a pre-existing connectivity setup, see
NCC Gateway setup overview .
Pricing
For information about pricing, see
NCC pricing .
What's next
To create hubs and spokes, see
Work with hubs and spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
To find solutions for common issues, see
Troubleshoot NCC .
To get details about API and gcloud commands, see
APIs and reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
