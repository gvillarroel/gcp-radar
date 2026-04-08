---
title: "Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/private-services-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/private-services-access
  title: "Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Private services access | Virtual Private Cloud | Google Cloud Documentation
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
Supported services
Private services access and VPC Network Peering
Private services access workflow
Example
Reachability of service instances Accessing through NCC
Accessing through Shared VPC
Accessing through hybrid connectivity
Service producer network
Pricing
Limitations
What's next
Home
Documentation
Networking
Virtual Private Cloud
Guides
Was this helpful?
Send feedback
On this page
Supported services
Private services access and VPC Network Peering
Private services access workflow
Example
Reachability of service instances Accessing through NCC
Accessing through Shared VPC
Accessing through hybrid connectivity
Service producer network
Pricing
Limitations
What's next
Private services access
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of private services access.
Google and third parties (together known as service producers ) can offer
VPC-hosted services —services that run on VMs that are
hosted in a VPC network. Private services
access lets you reach those services by creating a private
connection between your
VPC network and the service producer's VPC
network. The private connection establishes a
VPC Network Peering connection between your network
and the service producer's network.
Private services access traffic travels internally within Google's network, not
through the public internet. Instances in your VPC
network can reach the service by using their internal IPv4 addresses. Your
instances can have external IP addresses, but external IP addresses aren't
required for, and aren't used by, private services access.
Supported services
The following Google VPC-hosted services support private services
access:
AI Platform Training
AlloyDB for PostgreSQL
Apigee
Backup and DR Service
Cloud Build
Cloud Intrusion Detection System
Cloud SQL (doesn't support DNS
peering )
Cloud TPU
Converge Enterprise Cloud with IBM Power for Google Cloud
Filestore
Google Cloud Managed Lustre
Google Cloud NetApp Volumes
Google Cloud VMware Engine
Looker (Google Cloud core)
Memorystore for Memcached
Memorystore for Redis
Vertex AI
Note: When you use private services access as a service consumer, you are solely
responsible for securing your VPC networks and all resources and
data available on them. Google is not responsible for how your data and
resources may be accessed or used by the third party that you are connecting
with.
Private services access and VPC Network Peering
In a private connection, the service producer network and your network are
connected through VPC Network Peering. For routing between the two networks
to work correctly, the two networks must use distinct IP address ranges. To
avoid overlaps, you create one or more allocated ranges in your network to
use with the private connection.
When you allocate a range in your VPC network, that range
can't be used for other resources, such as subnets or destinations of custom
static routes.
For information about choosing an allocated range, see
Choose an IP address range for the allocated
range .
Private services access workflow
When you use private services access, resources are deployed in both your
VPC network and the service producer's network. The following
steps outline the process:
As a service consumer, you deploy a service instance with private services
access . The details might vary depending on which service you are
deploying. The following steps might be performed by you, or might be
automated by the service producer as part of service instance deployment:
You allocate an IP address range in your VPC network.
This allocated range is reserved exclusively for the service producer.
You create a private connection to the service producer, specifying the
allocated range that you created.
You provision a service instance—for example, a Cloud SQL
instance—referencing the private connection that you've created.
The service producer provisions resources for your service instance .
The service producer creates a project for your service instance. The
project is isolated, meaning no other customers share it and the
service consumer is billed for only the resources that the service
consumer provisions.
Within that project, the service producer creates a VPC
network that is dedicated to you.
Within that network, the service producer creates a subnet. The IP
address range for this subnet is selected from the allocated range that
you provided. The service producer typically chooses a /29 to /24
CIDR block. You can't select or modify the service producer's subnet IP
address range.
The service instance is assigned an IP address from the new subnet.
The private connection becomes active .
The VPC Network Peering connection is established.
Your VPC network imports routes from the service
producer's network.
VMs in your network can communicate with the service instance by using
its internal IP address. Traffic travels entirely within Google's
network and not through the public internet.
You can take the following actions after the initial deployment is created:
Provisioning more resources : when you provision additional resources for
the same service, the service producer places them in existing subnets if
there is space. If a subnet is full, a new subnet is created in that region
from the allocated range.
Deleting resources : a subnet in the service producer's network is
deleted only when you delete all the service resources within it. For
information about deleting resources, see the relevant service producer's
documentation.
Example
The following diagram shows using a private connection to access
service instances.
Private services access (click to enlarge).
In this example, the service consumer VPC network allocated the
10.240.0.0/16 address range for Google services and established a private
connection that uses the allocated range.
The private connection is assigned the 10.240.0.0/16 allocated range.
Google creates a project and a VPC network for the service
consumer's resources. The VPC networks are connected by using
VPC Network Peering.
The service producer creates a subnet that uses the IP address range
10.240.0.0/24 .
The Cloud SQL instance is assigned the IP address 10.240.0.2 .
After the subnet is created, the service consumer network imports routes
from the service network.
In the service consumer VPC network, requests with a
destination of 10.240.0.2 are routed to the private connection over to the
service producer's network.
The service consumer deploys a service instance for a different Google
service in europe-west1 . Because Google is the service producer, the same
project and network can be used. However, because the instance is in a
different region, a new subnet is required. Google creates a new subnet that
uses the IP address range 10.240.10.0/24 and assigns the service instance
the IP address 10.240.10.2 .
Reachability of service instances
Only one service consumer VPC network can create a private
connection to a given managed service instance. However, there are ways to make
the private connection available to resources that are outside of that
VPC network:
To make the service instances available from other VPC
networks, consider the following options:
Accessing through NCC .
Accessing through Shared VPC .
To make the service instances available from connected networks, such as
on-premises networks, see Accessing through hybrid connectivity .
If none of these options work for your use case, the service producer might
offer other ways to connect to the service that are a better fit—for
example, through
Private Service Connect .
For more information, see the documentation for the service.
Accessing through NCC
For some services that are available through private services access, you can
use NCC to make the service reachable by other spokes on a hub by
creating a producer VPC spoke . For more information, including
which services are supported, see Producer VPC
spokes .
Accessing through Shared VPC
If you are using Shared VPC , create the
allocated IP range and private connection in the host project. Typically, a
network administrator in the host project must do these tasks. After the host
project is set up, VM instances in service projects can use the private
connection.
Accessing through hybrid connectivity
In hybrid networking scenarios, an on-premises network is connected to a
VPC network either through a
Cloud VPN or
Cloud Interconnect connection. By
default, on-premises hosts can't reach the service producer's network by using
private services access.
In the VPC network, you might have custom static or dynamic
routes to correctly direct traffic to your on-premises network. However, the
service producer's network doesn't contain those same routes. When you create a
private connection, the VPC network and service producer network
exchange subnet routes only.
The service producer's network contains a default route ( 0.0.0.0/0 ) that goes
to the internet. If you export a default route to the service producer's
network, it is ignored because the service producer network's default route
takes precedence. Instead, define and export a custom route with a more specific
destination .
For more information, see Configure hybrid
connectivity .
Service producer network
On the service producer's side of the private connection is a VPC
network, where your service resources are provisioned. The service producer's
network is created exclusively for you and contains only your resources.
A resource in the service producer network is similar to other resources in your
VPC network. For example, it's reachable through internal IP
addresses by other resources in your VPC network. You can also
create firewall rules in your VPC network to control access to
the service producer's network.
For more information about the service producer side, see Enable private
services access
in the Service Infrastructure documentation. This documentation is for your
information only and is not required for you to enable or use private services
access.
Pricing
For private services access pricing, see Private services
access on the VPC
pricing page.
Limitations
The following limitations apply to private services access:
Because a private connection is implemented as a VPC Network Peering
connection, the behaviors and constraints of peering connections also apply
to private connections. For example, because VPC Network Peering isn't
transitive, a private connection isn't available to peered
VPC networks.
For more information, see VPC Network Peering ,
VPC Network Peering limitations ,
and Quotas and limits .
Only one service consumer VPC network can create a private
connection that connects to a given managed service instance. However, there
are ways to make the private connection available to resources that are
outside of that VPC network. For more information, see
Reachability of service instances .
You can't change the IP address range that's associated with an allocated
range. However, you can
modify which allocated ranges are associated with a private
connection .
Using IPv6 address ranges with private services access isn't supported.
What's next
To allocate IP address ranges, create private connections, or share private
DNS zones, see Configure private services
access .
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
