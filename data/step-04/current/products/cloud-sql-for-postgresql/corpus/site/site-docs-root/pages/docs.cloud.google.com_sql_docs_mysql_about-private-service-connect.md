---
title: "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect
  title: "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Private Service Connect overview
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes concepts associated with Private Service Connect. You can use Private Service Connect for the following purposes:
Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations
Connect to either a primary instance or any of its read replicas
Private Service Connect endpoint
You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks. These endpoints are internal IP addresses that are associated with a forwarding rule that references a service attachment of a Cloud SQL instance.
You can either have Cloud SQL create the endpoint for you automatically or you can create the endpoint manually.
To have Cloud SQL create the endpoint automatically, do the following:
Create a service connection policy in your VPC networks.
Create a Cloud SQL instance with Private Service Connect enabled for the instance and configure the instance to create an endpoint automatically. While creating the instance, specify auto-connection parameters such as VPC networks and projects.
Cloud SQL locates the service connection policy in these networks and creates a Private Service Connect endpoint that points to the service attachment of the instance.
After you create the instance and Cloud SQL creates the endpoint, the clients in the corresponding VPC networks can connect to the instance from the endpoint, either through an IP address or a DNS record.
To create the endpoint manually, do the following:
Create a Cloud SQL instance with Private Service Connect enabled for the instance.
Get the service attachment URI that you need to create the endpoint manually.
Reserve an internal IP address in your VPC network for the endpoint and create an endpoint with that address.
After you create the instance and Cloud SQL creates the endpoint, the clients in the corresponding VPC networks can connect to the instance from the endpoint, either through an IP address or a DNS record .
Note: To create a Private Service Connect endpoint, you need the compute.networkAdmin role. This role grants full control over the VPC network that initiates a connection to a Cloud SQL instance.
You must create this endpoint in each VPC network where database access is needed. To access the endpoint from any region in that network, you must configure global access for the endpoint.
Service connection policy
A service connection policy lets you authorize a specified service class to create a Private Service Connect connection between VPC networks. As a result, you can provision Private Service Connect endpoints automatically.
You can create a maximum of one policy for each service class, region, and VPC network combination. A policy dictates service connectivity automation for that specific combination. When you configure a policy, you select a subnet. The subnet is used to allocate IP addresses for the endpoints that you create through the policy. If multiple service connection policies share the same region, then you can reuse the same subnet for all of the policies.
For example, if you want to use service connectivity automation with two services in three different regions, then create six policies. You can use a minimum of three subnets: one for each region.
After you create a service connection policy, you can only update the policy's subnets and connection limit. If you need to update other fields, then do the following:
Remove all connections that use the policy.
Delete the policy.
Create a new policy.
Service attachment
When you create a Cloud SQL instance and configure the instance to use Private Service Connect, Cloud SQL creates a service attachment for the instance automatically. A service attachment is an attachment point that VPC networks use to access the instance.
You create a Private Service Connect endpoint that the VPC network uses to connect to the service attachment. This enables the network to access the instance.
Each Cloud SQL instance has one service attachment to which the Private Service Connect endpoint can connect through the VPC network. If there are multiple networks, then each network has its own endpoint.
DNS names and records
For instances with Private Service Connect enabled, we recommend that you use the DNS name because different networks can connect to the same instance and Private Service Connect endpoints in each network might have different IP addresses. Additionally, the Cloud SQL Auth Proxy requires DNS names to connect to these instances.
Cloud SQL doesn't create DNS records automatically. Instead, a suggested DNS name is provided from the instance lookup API response. We recommend that you create the DNS record in a private DNS zone in the corresponding VPC network. This provides a consistent way of connecting from different networks.
Allowed Private Service Connect projects
Allowed projects are associated with VPC networks and are specific to each Cloud SQL instance. If an instance isn't contained in any allowed projects, then you can't enable Private Service Connect for the instance.
For these projects, you can create Private Service Connect endpoints for each instance. If a project isn't allowed explicitly, then you can still create an endpoint for the instances in the project, but the endpoint remains in a PENDING state.
Private Service Connect endpoint propagation
By default, Private Service Connect connections aren't transitive
from peered VPC networks. You must create a Private Service Connect endpoint in each
VPC network that needs to connect to your Cloud SQL
instance. For example, if you have three VPC networks that have
to connect to your instance, then you must create three Private Service Connect endpoints—one endpoint for each VPC network.
However, by propagating Private Service Connect endpoints through
the Network Connectivity Center hub , these endpoints can be reachable by any
other spoke VPC network in the same hub. The
hub provides a centralized connectivity management model to interconnect spoke VPC networks to Private Service Connect endpoints.
The connection propagation feature in NCC benefits the following
use case for Private Service Connect deployments:
You can use a common services VPC network to create multiple Private Service Connect endpoints. By adding a single common
services VPC network to the NCC hub, all Private Service Connect endpoints in the VPC
network become accessible transitively to other spoke VPC
networks through the hub. This connectivity eliminates the need to manage each Private Service Connect endpoint in each VPC
network individually.
To learn how to use the NCC hub to propagate Private Service Connect endpoints to spoke VPC
networks, see the NCC—Private Service Connect propagation codelab .
Private Service Connect backend
You can use Private Service Connect backends , as an alternative to Private Service Connect endpoints , to access Cloud SQL instances.
For ease of use, we recommend connecting to your Cloud SQL instances using Private Service Connect endpoints. For additional control and visibility, you can connect using Private Service Connect backends.
To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance:
Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
Internal Proxy Network Load Balancer (consisting of Backend Service, Target TCP Proxy, and Forwarding Rule) with its backend being the Private Service Connect NEG.
The supported serving ports for MySQL are as follows:
TCP port 3306 for direct connections to MySQL database server (including when using Managed Connection Pooling ).
TCP port 3307 for connections through Cloud SQL Auth Proxy .
Private Service Connect outbound connections
You can attach a Private Service Connect interface to your
existing Cloud SQL Private Service Connect-enabled
instances using a network attachment
to allow your Cloud SQL instance to make outbound connections to your
network. To connect to your network's Private Service Connect
interface, you either need a new or existing network attachment
within your Google Cloud project.
You can use outbound connectivity to migrate data from an external server within
your network, or do a
homogeneous migration
using Database Migration Service.
Limitations
When using a Private Service Connect interface with a
network attachment to create outbound connections to your network from your
Cloud SQL instance, note the following limitations:
Enabling or disabling Private Service Connect outbound
connectivity requires downtime. You can expect this operation to take
about 8 minutes to complete with an approximate downtime of 3 minutes.
If you're using a hostname or DNS for your outbound connection, then the DNS
name must be publicly resolvable and resolved to an RFC-1918 IP range.
IPv6 addresses aren't supported.
Public IP addresses aren't supported.
Private Service Connect outbound connectivity can't be
enabled on a read replica instance.
Switchover
isn't supported for instances with Private Service Connect
outbound connectivity enabled.
You can't enable Private Service Connect outbound connectivity
for an instance that has a
DR replica .
You can't convert the replica of an instance that has
Private Service Connect outbound connectivity-enabled to
a DR replica .
If the outbound connectivity IP address conflicts with the eth0 IP or
the Private Service Connect forwarding rule, then the
IP address might not connect correctly. For more information, see
Private Service Connect overview .
If your instance is configured for
both private service access and Private Service Connect ,
then you can't enable Private Service Connect outbound
connectivity for your instance.
For more information on how to setup outbound connectivity for your
Cloud SQL instance, see
Configure outbound connectivity .
What's next
Learn more about private IP .
Learn more about connecting to an instance using Private Service Connect .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
