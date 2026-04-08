---
title: "Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/private-service-connect
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/private-service-connect
  title: "Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Private Service Connect | Virtual Private Cloud | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Virtual Private Cloud
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Virtual Private Cloud overview
Get started
VPC networks
Subnets
IPv6 support
Create and manage VPC networks
Add networking features
Add IP addresses
Overview
Reserve internal IP addresses
Reserve external IP addresses
Move an external IPv4 address to a different project
Add alias IP ranges
Overview
Configure alias IP ranges
Bring your own IP addresses (BYOIP)
Overview
Planning and architecture
Create a public advertised prefix
Create public delegated prefixes
Create IPv4 sub-prefixes and IP addresses
Create and use IPv6 sub-prefixes
Manage BGP announcement
Deprovision BYOIP
Add routes
Routes overview
Static routes overview
Use routes
Add policy-based routes
Overview
Use policy-based-routes
Change MTU
Overview
Change MTU of a VPC network
Create and verify a jumbo frame MTU network
Access IPv4 destinations from IPv6-only instances
Overview
Configure IPv6-only subnets and instances with DNS64 and NAT64
Configure VMs
Add network tags
Add VMs with multiple network interfaces
Overview
Create VMs with multiple network interfaces
Configure Dynamic NICs
Add Dynamic NICs
Delete Dynamic NICs
Configure routing for an additional network interface
Troubleshoot
Add capabilities
Network Connectivity Center
VPC Network Peering
Overview
About peering connections
Set up and manage VPC Network Peering
Peer two VPC networks
Shared VPC
Overview
Provision Shared VPC
Deprovision Shared VPC
Hybrid Subnets
About migrating to Google Cloud with Hybrid Subnets
Prepare for Hybrid Subnets connectivity
Migrate to Google Cloud with Hybrid Subnets
Disable hybrid subnet routing
Internal ranges
Overview
Create and use internal ranges
Network profiles for specific use cases
Overview
RDMA network profiles
Create a VPC network for RDMA NICs
View network profiles
Access APIs and services
Choose a private access option
Private Service Connect
Overview
Compatibility
Deployment patterns
Architecture
Security
Create and access your own service
Overview
Create a load-balanced service
Make the service accessible to other VPC networks
Access the service from another VPC network
Service consumers
Endpoints
Published services
About accessing published services
Access published services
Manage endpoints that access published services
Global Google APIs
About accessing global Google APIs
Access global Google APIs
Regional Google APIs
About accessing regional Google APIs
Access regional Google APIs
About propagated connections
Backends
About backends
Create a backend
Access published services
Access regional Google APIs
Access global Google APIs
Network attachments
About network attachments
Create network attachments
Configure security
Service connection policies
About service connectivity automation
About service connection policies
Configure connectivity to services
Configure service connection policies
Deploy service instances
Manage consumer security
Service producers
Published services
About published services
About controlling access to published services
Publish services
Manage published services
DNS configuration for services
Private Service Connect health
About Private Service Connect health
Configure Private Service Connect health for failover
View, update, and delete Private Service Connect health configurations
Port mapping
About port mapping
Create port mapping services
Update port mapping services
Migrate peering services to Private Service Connect
About migrating peering services
Migrate peering services
Interfaces
About interfaces
Create interfaces
Configure routing
Configure security
Manage destination overlap
Manage producer security
Monitor connections
Private Google Access
Overview
Configure Private Google Access
Private Google Access for on-premises hosts
Overview
Configure Private Google Access for on-premises hosts
Access APIs from VMs with external IP addresses
Private services access
Overview
Configure private services access
Send serverless traffic to a VPC network
Overview
Configure serverless traffic
Monitor
VPC Flow Logs
Overview
About VPC Flow Logs records
About traffic flows
Configure VPC Flow Logs
Configure organization policy constraints
Access flow logs
Audit logging
VPC audit logging
Private services access audit logging
Serverless VPC Access audit logging
Packet Mirroring
Overview
Use Packet Mirroring
Monitor Packet Mirroring
Packet Mirroring partner providers
Control access
Manage resources by using custom constraints
Create and manage tags for VPC resources
Troubleshoot
Troubleshoot internal connectivity between VMs
Troubleshoot policy and access problems
Advanced topics
Advanced VPC concepts
Legacy networks
Overview
Manage legacy networks
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Choosing a Private Service Connect feature
Private Service Connect types Endpoints
Backends
Interfaces
Private Service Connect managed services Published services
Google APIs
Private Service Connect characteristics
What's next
Home
Documentation
Networking
Virtual Private Cloud
Guides
Was this helpful?
Send feedback
On this page
Choosing a Private Service Connect feature
Private Service Connect types Endpoints
Backends
Interfaces
Private Service Connect managed services Published services
Google APIs
Private Service Connect characteristics
What's next
Private Service Connect
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of Private Service Connect.
Private Service Connect is a capability of Google Cloud networking that
allows consumers to access managed services privately from
inside their VPC network. Similarly, it allows managed service
producers to host these services in their own separate VPC
networks and offer a private connection to their consumers. For example, when
you use Private Service Connect to access Cloud SQL, you are
the service consumer, and Google is the service producer.
With Private Service Connect, consumers can use their own internal IP
addresses to access services without leaving their VPC networks.
Traffic remains entirely within Google Cloud. Private Service Connect
provides service-oriented access between consumers and producers with granular
control over how services are accessed.
Private Service Connect lets you send
traffic to endpoints and backends that forward the traffic to managed
services, including Google APIs and published services. Private Service Connect interfaces let managed services
initiate connections to consumer VPC networks.
Choosing a Private Service Connect feature
The following table summarizes which Private Service Connect
features to use for different use cases.
Use case
Private Service Connect feature
Consume services
Endpoints provide layer 4 connectivity to
services.
If you need load balancer features, such as custom URLs or
advanced traffic management, use backends .
Produce services
Published services let consumers
send requests to your service.
If you need to initiate connections to consumers, use
interfaces.
Private Service Connect types
Private Service Connect is available in different types that
provide different capabilities and modes of communication.
Service producers publish their applications to consumers by creating
Private Service Connect services. Service consumers access
those Private Service Connect services directly through one of
these Private Service Connect types:
Private Service Connect endpoints . Endpoints
are deployed by using forwarding rules that provide the consumer an IP
address that is mapped to the Private Service Connect
service.
Private Service Connect backends . Backends are
deployed by using network endpoint groups (NEGs) that let consumers direct
traffic to their load balancer before reaching a
Private Service Connect service.
Service producers can initiate connections to service consumers by using
Private Service Connect interfaces .
Private Service Connect interfaces provide bidirectional
communication and can be used in the same VPC network as
endpoints and backends.
Endpoints
Private Service Connect endpoints are internal IP addresses in a
consumer VPC network that can be directly accessed by clients in
that network. Endpoints are created by deploying a forwarding
rule
that references a service attachment , a bundle of
Google APIs ,
or a single regional API .
The following diagram shows a Private Service Connect endpoint
that targets a published service that is running in a separate
VPC network and organization.
Private Service Connect endpoints and published services let two
independent companies communicate with each other by using internal IP addresses.
For more information, see About accessing published services through
endpoints .
Private Service Connect lets you send
traffic to endpoints that forward the traffic to published services in
another VPC network.
Similarly, a Private Service Connect endpoint can be used to
access Google APIs such as Cloud Storage or BigQuery.
This functionality is similar to Private Google Access, except that you can
use your own internal IP addresses for endpoints.
Private Service Connect lets you more directly control routing
and create as many endpoints as necessary for your network. For more
information, see About accessing Google APIs through
endpoints .
Private Service Connect lets you send
traffic to endpoints that forward the traffic to Google APIs.
Backends
Private Service Connect backends let Google Cloud load
balancers send traffic through Private Service Connect to reach
published services or Google APIs. The backends are deployed through
Private Service Connect network endpoint groups
(NEGs)
that reference a producer service attachment or a supported Google API. Placing a
load balancer in front of a managed service provides the consumer with more
visibility and control than is possible through a
Private Service Connect endpoint. Backends let you create
configurations such as the following:
Customer-owned domains and certificates in front of managed services
Consumer-controlled failover between managed services in different
regions
Centralized security configuration and access control for managed services
The following diagram shows an internal Application Load Balancer deployed with
Private Service Connect backends that reference a published
service. There are two load balancers in the configuration:
The consumer load balancer that provides control, visibility, and security
of traffic to the service.
The producer load balancer that load balances traffic across the service
backends.
Private Service Connect lets you send
traffic to backends that forward the traffic to published services.
Similarly to Private Service Connect endpoints, backends also
support targeting Google APIs. The following diagram shows an internal Application Load Balancer
that targets a Cloud Storage bucket and terminates traffic by using a
customer-owned domain.
Private Service Connect lets you send
traffic to backends that forward the traffic to a regional Google API.
Interfaces
A Private Service Connect interface is a special type of
network interface
that refers to a network attachment .
A service producer can create a Private Service Connect interface
and request a connection to a network attachment. If the service consumer
accepts the connection, Google Cloud allocates the interface an IP address
from a subnet in the consumer VPC network that's specified by the
network attachment. The VM of the Private Service Connect
interface has a second standard network interface that connects to the
producer's VPC network.
A connection between a Private Service Connect interface and a
network attachment is similar to the connection between a
Private Service Connect endpoint
and a
service attachment , but
it has two key differences:
A Private Service Connect interface lets a producer
VPC network initiate connections to a consumer VPC
network (managed service egress). An endpoint works in the reverse direction,
letting a consumer VPC network initiate connections to a producer
VPC network (managed service ingress).
A Private Service Connect interface connection is transitive.
This means that workloads in a producer network can initiate connections to
other workloads that are
connected to the consumer VPC network .
Private Service Connect endpoints can only initiate connections
to the producer VPC network.
Private Service Connect interfaces
let service producers initiate connections to service consumers.
Private Service Connect managed services
Managed services are services that are owned and managed by someone other than
the service consumer. Private Service Connect can be used to
access managed services that are owned by Google, third-party software as a
service (SaaS) companies, or other teams within the consumer's own company. Both
published services and Google APIs can be targets of
Private Service Connect.
Private Service Connect supports access to the following types of
managed services:
Published VPC-hosted services
Google APIs
Published services
Published services are VPC-hosted
services that are deployed in the producer's VPC network and are
accessed from the consumer's VPC network. Publishing a service
lets the service producer own and control the deployment of the service in their
own VPC network. Published services can include the following:
Google
services ,
such as GKE, Apigee, or Cloud Composer.
These services run in tenant projects and VPC networks that
are managed by Google.
Third-party
services ,
where third parties offer private access to a published service in
Google Cloud.
Intra-organization services , where a single company has clients accessing
internal applications across different VPC networks. Some
organizations use separate VPC networks for internal
segmentation. Given that configuration, one team can offer a managed service
to a different team that operates in a separate VPC network.
Service attachments
Service
attachments
are resources that are used to create Private Service Connect
published services.
Service attachments can be accessed by using
endpoints or
backends . Multiple backends or
endpoints can connect to the same service attachment, which lets multiple
VPC networks or multiple consumers access the same service
instance.
A service attachment targets a producer load balancer and lets clients in a
consumer VPC network access the load balancer. The service
attachment configuration defines the following:
A consumer accept list that defines which consumers are allowed to connect
to the service.
The NAT subnet where
translated traffic is sourced from in the producer VPC
network.
An optional DNS
domain , if
provided, that is used in the DNS entries for
endpoints that are
automatically created in the consumer's Cloud DNS zone.
Google APIs
Using Private Service Connect to access Google APIs is an
alternative to using Private Google Access or the public domain names
for Google APIs. In this case, the producer is Google.
Google APIs can be accessed by using endpoints or backends.
Endpoints let you target a bundle of global Google
APIs , or a
single regional Google API .
Backends let you target a single global Google
API or
single regional Google API .
Using Private Service Connect lets you do the following:
Create one or more internal IP addresses to access Google APIs for different
use cases.
Direct on-premises traffic to specific IP addresses and regions when
accessing Google APIs.
Centralize Google API traffic through a
supported load balancer
to apply your own certificates, security policies, or observability.
Private Service Connect characteristics
Private Service Connect provides private connectivity that has
the following characteristics:
Service-oriented design . Producer services are published through load
balancers that expose a single IP address to the consumer
VPC network. Consumer traffic that accesses producer services
is unidirectional and can only access the service IP address, rather than
having access to an entire peered VPC network.
Explicit authorization . Private Service Connect provides
an authorization model that gives consumers and producers granular control,
ensuring that only the intended service endpoints and no other resources can
connect to a service.
No shared dependencies . Traffic between consumer and producers uses NAT
so that no IP address coordination or other shared resource dependencies
exist between the consumer and producer VPC networks. This
independence helps to simplify deployment and scaling of the service.
Line-rate performance . Private Service Connect traffic
goes directly from the physical machine that hosts the consumer client
VM to the physical machine that hosts the producer load balancer VM. The physical host machines perform NAT directly, reducing latency. The
bandwidth capacity of Private Service Connect is limited only
by the bandwidth capacity of the physical host machines that are
directly communicating.
To learn more about the internal design of
Private Service Connect, see
Private Service Connect architecture and
performance .
What's next
Learn about
accessing published services through endpoints .
Learn about
accessing Google APIs through endpoints .
Learn about backends .
Learn about publishing
services .
Complete a codelab to
use Private Service Connect to publish and consume services with
GKE .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
