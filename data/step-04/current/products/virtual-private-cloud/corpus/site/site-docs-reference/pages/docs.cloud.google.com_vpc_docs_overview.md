---
title: "Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/overview
  title: "Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Virtual Private Cloud (VPC) overview | Google Cloud Documentation
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
VPC networks Firewall rules
Routes
Forwarding rules
Interfaces and IP addresses IP addresses
Alias IP ranges
Multiple network interfaces
VPC sharing and peering Network Connectivity Center
VPC Network Peering
Shared VPC
Hybrid cloud Cloud VPN
Cloud Interconnect
Hybrid Subnets
Cloud Load Balancing
Private access to services
Home
Documentation
Networking
Virtual Private Cloud
Guides
Was this helpful?
Send feedback
On this page
VPC networks Firewall rules
Routes
Forwarding rules
Interfaces and IP addresses IP addresses
Alias IP ranges
Multiple network interfaces
VPC sharing and peering Network Connectivity Center
VPC Network Peering
Shared VPC
Hybrid cloud Cloud VPN
Cloud Interconnect
Hybrid Subnets
Cloud Load Balancing
Private access to services
Virtual Private Cloud (VPC) overview
Stay organized with collections
Save and categorize content based on your preferences.
Virtual Private Cloud (VPC) provides networking functionality to
Compute Engine virtual machine (VM) instances ,
Google Kubernetes Engine (GKE) clusters , and
serverless workloads .
VPC provides networking for your cloud-based resources and
services that is global, scalable, and flexible.
This page provides a high-level overview of VPC
concepts and features.
VPC networks
You can think of a VPC network the same way you'd think of a
physical network, except that it is virtualized within Google Cloud.
A VPC network is a global resource that consists of a list of
regional virtual subnetworks (subnets) in data centers, all connected by a
global wide area network.
VPC networks are logically isolated from each other in
Google Cloud.
VPC network example (click to enlarge).
A VPC network does the following:
Provides connectivity for your
Compute Engine virtual machine (VM) instances ,
including Google Kubernetes Engine (GKE)
clusters ,
serverless workloads , and other
Google Cloud products built on Compute Engine VMs.
Offers built-in internal passthrough Network Load Balancers and proxy systems for
internal Application Load Balancers.
Connects to on-premises networks by using Cloud VPN tunnels and
VLAN attachments for Cloud Interconnect.
Distributes traffic from Google Cloud external load balancers to
backends.
For more information, see VPC networks .
Firewall rules
Each VPC network implements a distributed virtual firewall that
you can configure. Firewall rules let you control which packets are allowed
to travel to which destinations. Every VPC network has two
implied firewall rules that block
all incoming connections and allow all outgoing connections.
The default network has additional firewall
rules , including the
default-allow-internal rule, which permit communication among instances in the
network.
For more information, see VPC firewall rules .
Routes
Routes tell VM instances and the VPC network how to send traffic
from an instance to a destination, either inside the network or outside of
Google Cloud. Each VPC network comes with some
system-generated routes to route
traffic among its subnets and send traffic from
eligible instances to the internet.
You can create custom static routes to direct some packets to specific
destinations.
For more information, see Routes .
Forwarding rules
While routes govern traffic leaving an instance, forwarding rules direct traffic
to a Google Cloud resource in a VPC network based on IP
address, protocol, and port.
Some forwarding rules direct traffic from outside of Google Cloud to a
destination in the network; others direct traffic from inside the network.
Destinations for forwarding rules are
target instances ,
load balancer targets (backend services, target proxies, and target pools) , and
Classic VPN gateways .
For more information, see Forwarding rules overview .
Interfaces and IP addresses
VPC networks provide the following configurations for IP
addresses and VM network interfaces.
IP addresses
Google Cloud resources, such as Compute Engine VM instances,
forwarding rules, and GKE containers,
rely on IP addresses to communicate.
For more information, see IP addresses .
Alias IP ranges
If you have multiple services running on a single VM instance, you can give each
service a different internal IP address by using alias IP ranges. The
VPC network forwards packets that are destined to a particular
service to the corresponding VM.
For more information, see Alias IP ranges .
Multiple network interfaces
You can add multiple network interfaces to a VM instance. Multiple network
interfaces enable use cases such as using a network appliance VM to act as a
gateway for securing traffic among different VPC networks or to
and from the internet.
For more information, see Multiple network interfaces .
VPC sharing and peering
Google Cloud provides the following configurations for sharing
VPC networks across projects and connecting VPC
networks to each other.
Network Connectivity Center
You can use Network Connectivity Center (NCC) to connect VPC networks by
using a hub and spoke connectivity model. VPC spokes let you
connect two or more VPC networks to an NCC hub so
that the networks exchange subnet routes .
You can connect and manage hundreds of VPC spokes from a single
hub.
For more information, see
NCC overview .
VPC Network Peering
VPC Network Peering lets you build
software as a service (SaaS)
ecosystems in Google Cloud, making services available privately across
different VPC networks, whether the networks are in the same
project, different projects, or projects in different organizations.
With VPC Network Peering, all communication happens by using internal IP
addresses. Subject to firewall rules, VM instances in each peered network can
communicate with one another without using external IP addresses.
Peered networks automatically exchange subnet routes for private IP address
ranges. VPC Network Peering lets you configure whether the following
types of routes are exchanged:
Subnet routes for privately re-used public IP ranges
Custom static and dynamic routes
Network administration for each peered network is unchanged: IAM policies
are never exchanged by VPC Network Peering. For example, Network and
Security Admins for one VPC network don't automatically get
those roles for the peered network.
For more information, see VPC Network Peering .
Shared VPC
You can share a VPC network from one project (called a host
project) to other projects in your Google Cloud organization. You can
grant access to entire Shared VPC networks or select subnets therein by using
specific IAM permissions . This lets
you provide centralized control over a common network while maintaining
organizational flexibility. Shared VPC is especially useful in large
organizations.
For more information, see Shared VPC .
Hybrid cloud
Google Cloud provides the following configurations that let you connect
your VPC networks to on-premises networks and networks from other
cloud providers.
Cloud VPN
Cloud VPN lets you connect your VPC network to
your physical, on-premises network or another cloud provider by using a secure
virtual private network .
For more information, see Cloud VPN .
Cloud Interconnect
Cloud Interconnect lets you connect your VPC network to
your on-premises network by using a high speed physical connection.
For more information, see Cloud Interconnect .
Hybrid Subnets
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Hybrid Subnets helps you migrate workloads to Google Cloud
without needing to change any IP addresses. A hybrid subnet is a single
logical subnet that combines a segment of an on-premises network with a subnet
in a VPC network.
For more information, see Hybrid Subnets .
Cloud Load Balancing
Google Cloud offers several load balancing configurations to distribute
traffic and workloads across many backend types.
For more information, see Cloud Load Balancing
overview .
Private access to services
You can use Private Service Connect
and Private Google Access , and
private services access to let VMs that
don't have an external IP address communicate with supported services.
For more information, see Private access options for services .
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
