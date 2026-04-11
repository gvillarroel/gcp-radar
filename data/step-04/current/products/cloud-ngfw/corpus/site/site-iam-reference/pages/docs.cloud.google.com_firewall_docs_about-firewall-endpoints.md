---
title: "Firewall endpoint overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
  title: "Firewall endpoint overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Firewall endpoint overview
Stay organized with collections
Save and categorize content based on your preferences.
Firewall endpoint is a Cloud Next Generation Firewall resource that enables Layer 7
advanced protection capabilities, such as the URL filtering service and
the intrusion detection and prevention service, in your network.
This page provides a detailed overview of firewall endpoints and their
capabilities.
Specifications
A firewall endpoint is an organizational resource created at the zonal level.
Firewall endpoints perform Layer 7 firewall inspection on the intercepted
traffic.
Cloud Next Generation Firewall uses Google Cloud's packet intercept technology
to transparently redirect traffic from the Google Cloud workloads in a
Virtual Private Cloud (VPC) network to the firewall endpoints.
Packet intercept is a Google Cloud capability that transparently
inserts network appliances in the path of selected network traffic without
modifying their existing routing policies.
Cloud NGFW redirects the workload traffic in a
VPC network to the firewall endpoint only if the Layer 7
inspection is configured to be applied to this flow.
Cloud NGFW adds a VPC network identifier to each
packet redirected to the firewall endpoint for Layer 7 inspection. If you have
multiple VPC networks with overlapping IP address ranges,
this network identifier helps to ensure that each redirected packet
is correctly associated with its VPC network.
You can create a firewall endpoint in a zone and attach it to one or more
VPC networks to monitor workloads in the same zone. If your
VPC network spans multiple zones, you can attach one firewall
endpoint in each zone. If you don't attach a firewall endpoint to a
VPC network in a specific zone, no Layer 7
inspection is performed on the workload traffic for that zone.
You use firewall endpoint association
to attach a firewall endpoint to a VPC network.
The endpoint and the workloads for which you want to enable Layer 7 inspection
must be in the same zone. Creating the firewall endpoint in the same
zone as workloads has the following benefits:
Lower latency. Because firewall endpoints can intercept, inspect, and
reinject the traffic back into the network, latency is lower than that
of firewall endpoints in different zones.
No cross-zonal traffic. Keeping traffic within the same zone
ensures lower costs.
More reliable traffic. Keeping traffic within the same zone removes
the risk of cross-zonal outages.
Firewall endpoints can process up to 2 Gbps of traffic with Transport Layer
Security (TLS) inspection, and 10 Gbps of traffic without TLS inspection.
Excessive traffic can overload the endpoint and cause packet losses.
To monitor the firewall endpoint's capacity utilization, see
firewall_endpoint network security metrics .
Note: To avoid endpoint overloading due to excessive traffic, gradually scale
up the endpoint while monitoring its capacity utilization.
Because the endpoint does not forward unapproved messages, an overloaded
endpoint might drop legitimate traffic if it cannot inspect the traffic.
Firewall endpoints can have a per-connection throughput maximum of 250 Mbps of
traffic with TLS inspection and 1.25 Gbps of traffic without TLS inspection.
You can create a firewall endpoint that processes jumbo frames up to 8,500
bytes in size. Alternatively, you can create an endpoint without jumbo frame
support. For more information, see
Supported packet size .
You can delete a firewall endpoint only when there are no VPC
networks associated with it.
Google manages the infrastructure, load balancing, autoscaling, and
lifecycle of the firewall endpoints. When you create a firewall endpoint,
Google provides a set of dedicated virtual machine (VM) instances, which
ensures reliability, performance, and security isolation for your traffic,
along with certificate management.
Google provides high availability by using proper failover mechanisms for
the firewall endpoints, which ensures reliable firewall protection for all
VM instances covered within the attached VPC network.
Firewall endpoint associations
Firewall endpoint association links a firewall endpoint to a
VPC network in the same zone. After you define this association,
Cloud NGFW forwards the zonal workload traffic in your
VPC network that requires Layer 7 inspection to the attached
firewall endpoint.
Supported packet size
A firewall endpoint either supports or doesn't support jumbo frames.
A firewall endpoint with jumbo frame support can accept packets up to 8,500
bytes.
Cloud NGFW reserves an additional 396 bytes for
GENEVE encapsulation
(needed for data inspection) and for other extensions. Therefore, the total
packet size of 8,896 bytes matches the highest possible maximum transmission
unit (MTU) that Google Cloud supports.
A firewall endpoint without jumbo frame support can accept packets up to 1,460
bytes.
To perform Layer 7 inspection successfully,
configure the VPC networks
associated with the endpoint to follow these MTU limits:
For an endpoint with jumbo frame support, make sure the VPC
networks use an MTU of 8,500 bytes or less.
For an endpoint without jumbo frame support, make sure the VPC
networks use an MTU of 1,460 bytes or less.
Caution: A firewall endpoint doesn't perform URL filtering or intrusion detection and prevention service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
You can create a firewall endpoint with or without jumbo frame support. However,
you cannot reconfigure an existing endpoint to either add or remove jumbo
frame support. To add or remove jumbo frame support, delete the endpoint
and recreate it. For more information, see
Create a firewall endpoint .
Identity and Access Management roles
Identity and Access Management (IAM) roles govern the following actions for managing the
firewall endpoints:
Creating a firewall endpoint in an organization
Modifying or deleting a firewall endpoint
Viewing details of a firewall endpoint
Viewing all the firewall endpoints configured in an organization
The following table describes the roles that are necessary for each step.
Ability
Necessary role
Create a new firewall endpoint
Any of the following roles on the organization where the firewall endpoint is created:
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Modify an existing firewall endpoint
Any of the following roles on the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
View details about the firewall endpoint in an organization
Any of the following roles on the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
View all the firewall endpoints in an organization
Any of the following roles on the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
IAM roles govern the following actions for the
firewall endpoint associations:
Creating a firewall endpoint association in a project
Modifying or deleting a firewall endpoint association
Viewing details of a firewall endpoint association
Viewing all the firewall endpoint associations configured in a project
The following table describes the roles that are necessary for each step.
Ability
Necessary role
Create a firewall endpoint association
Any of the following roles on the project where the firewall endpoint
association is created:
Compute Network Admin
( roles/compute.networkAdmin )
Compute Network User
( roles/compute.networkUser ) role on the organization, which
represents permissions to associate the VPC (which the user
is an administrator of) to the endpoint (which is an org-owned resource,
not necessarily owned by the VPC owner).
Firewall
Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Modify (update or delete) the firewall endpoint associations
Any of the following roles on the project where the VPC network exists:
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
View details about the firewall endpoint association in a project
Any of the following roles on the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
View all of the firewall endpoint associations in a project.
Any of the following roles on the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Quotas
To view quotas associated with firewall endpoints, see Quotas and limits .
Pricing
Pricing for firewall endpoints is described in the Cloud NGFW pricing .
What's next
Configure the URL filtering service
Configure intrusion detection and prevention service
Create and manage firewall endpoints
Create and manage firewall endpoint associations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
