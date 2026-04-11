---
title: "About propagated connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-propagated-connections
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-propagated-connections
  title: "About propagated connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About propagated connections
This page provides an overview of Private Service Connect propagated
connections.
With propagated connections, services that are accessible in one
consumer VPC spoke through
Private Service Connect endpoints
can be privately accessed by other consumer VPC spokes that are
connected to the same Network Connectivity Center hub. Propagated connections let consumer
VPC spokes access managed services in producer VPC
networks as if the two VPC networks were directly connected
through endpoints.
Propagated connections provide the following benefits:
You can use a common services VPC network to simplify the
deployment of Private Service Connect endpoints.
You can manage which services are accessible to individual VPC
spokes through the NCC hub.
For an overview of propagated connections from the NCC
perspective, see
Private Service Connect propagated connections through Network Connectivity Center .
VPC networks use
propagated connections to access published services that are
connected to a common services VPC network (click to enlarge).
For example, in figure 1, the VPC spoke
Common services VPC contains two endpoints. Two other VPC
spokes are attached to the same NCC hub as Common services VPC .
Because propagated
connections are enabled for the hub, there are two propagated connections in
Consumer VPC 2 and two propagated connections in Consumer VPC 3 .
These propagated connections let workloads in Consumer VPC 2 and
Consumer VPC 3 access managed services in
Producer VPC 1 as if they were directly connected through the endpoints.
No propagated connections are created for Endpoint 3 because the IP range of
that endpoint's subnet is excluded from export and not advertised to other
VPC spokes.
Configuring propagated connections
Propagated connections are managed by
NCC .
You can't directly manage
propagated connections by using Private Service Connect.
Triggering connection propagation
Propagated connections are automatically established when the following actions
occur:
When a hub administrator
enables connection propagation for a hub ,
NCC creates propagated connections for existing
endpoints in the VPC spokes that are connected to the hub.
When a hub administrator
adds a VPC spoke to a hub that has connection propagation
enabled, NCC creates
propagated connections in the new spoke for existing endpoints in other
VPC spokes that are connected to the same NCC hub. If the new spoke
has existing endpoints, propagated connections are created for those endpoints
in each connected spoke.
When a consumer service administrator
creates an endpoint
in a VPC spoke that is attached to a NCC hub with connection
propagation enabled, NCC creates propagated connections for that
endpoint in other connected VPC spokes.
When a producer service administrator
increases a service attachment's propagated connection limit ,
NCC creates propagated connections
that were previously blocked by this limit, as long as the new connections
don't exceed the new limit.
Connections are propagated asynchronously and might not be immediately
available.
Excluding subnets
When you create a VPC spoke , you can
exclude the IP address ranges of subnets from being exported to the NCC hub.
If you exclude a subnet from export, workloads
in that subnet can't access propagated connections, and propagated connections
aren't created for endpoints in that subnet. For example, in figure 1,
workloads in Consumer VPC 2 and Consumer VPC 3 can't access the service
in Producer VPC 2 , and workloads in Subnet 5 can't access the services
in Producer VPC 1 .
Terminating propagated connections
The following actions indirectly control the deletion of propagated
connections:
Deleting the associated endpoint .
Deleting a spoke that contains a
Private Service Connect endpoint.
Disabling connection propagation on a NCC hub.
When any of the previous actions happen, propagated connections are terminated.
This process is asynchronous and might not happen immediately.
Specifications
The following Private Service Connect endpoint types can be
made available through connection propagation:
Endpoints that access a published
service .
Endpoints that access a regional Google
API .
Endpoints that access global Google APIs
can't be made available through connection propagation.
Connections are propagated only if the
Private Service Connect endpoint has the Accepted
connection
status .
By default, propagated connections are accessible by workloads in the
same region and VPC network as the propagated connection.
You can configure global access
on an endpoint to make propagated connections for that endpoint available to
workloads in any region of the propagated connection's VPC
spoke.
Quotas and limits
The following quotas and limits apply to Private Service Connect
connection propagation:
Consumer quota : the PSC propagated connections per VPC
network quota limits
the number of propagated connections that can be made available in a
consumer VPC network.
Producer quota : the PSC ILB consumer forwarding rules per producer
VPC network quota limits the
number of endpoints and propagated connections that can connect to a
producer VPC network.
Producer connection limit : each published service (service attachment)
has a propagated connection limit, which limits how many propagated
connections can be established to the service from a single consumer. For
more information about this producer configuration, see
Propagated connections .
If you can't access a propagated connection, one of these quotas or the
connection limit might be affecting your access. For more information, see
Troubleshooting .
Limitations
Propagated connections have the following limitations:
Propagated connections don't support endpoints that use IPv6 addresses.
Propagated connections don't support endpoints that access global Google
APIs .
Propagated connections aren't created for Hybrid
spokes .
Propagated connections aren't created for Producer VPC spokes .
Troubleshooting
If you are a service consumer who can't access a propagated endpoint, ask the
NCC hub administrator to help troubleshoot. The hub administrator
has the access required to
troubleshoot Private Service Connect connection propagation
errors .
What's next
Work with hubs and spokes .
About accessing published services through endpoints .
Access published services through endpoints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
