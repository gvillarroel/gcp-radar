---
title: "Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/private-google-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/private-google-access
  title: "Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Private Google Access | Virtual Private Cloud | Google Cloud Documentation
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
Example
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
Example
What's next
Private Google Access
Stay organized with collections
Save and categorize content based on your preferences.
VM instances that only have internal IP addresses (no external IP addresses) can
use Private Google Access. They can reach the external IP addresses of Google
APIs and services. The source IP address of the packet can be the primary
internal IP address of the network interface or an address in an alias IP range
that is assigned to the interface. If you disable Private Google Access, the
VM instances can no longer reach Google APIs and services; they can only send
traffic within the VPC network.
Private Google Access has no effect on instances that have external IP
addresses. Instances with external IP addresses can access the internet,
according to the internet access
requirements . They don't need any special
configuration to send requests to the external IP addresses of Google APIs and
services.
You enable Private Google Access on a subnet by subnet basis; it's a setting
for subnets in a VPC network. To enable a subnet for
Private Google Access and to view the requirements, see Configure
Private Google Access .
Supported services
Private Google Access lets you access Google APIs and
services
that are hosted in Google's production infrastructure.
Other Google services are hosted in VPC networks and can be
accessed by using the following methods:
To connect to services that are published using the
Service Networking API ,
see private services access .
To connect to services that are published using
Private Service Connect , see Access managed services .
Example
The following diagram shows an implementation of Private Google Access.
Implementation of Private Google Access (click to
enlarge).
The VPC network has been configured to meet the DNS, routing,
and firewall network requirements
for Google APIs and services. Private Google Access has been enabled on
subnet-a , but not on subnet-b .
VM A1 can access Google APIs and services, including Cloud Storage,
because its network interface is located in subnet-a , which has
Private Google Access enabled. Private Google Access applies to the instance
because it only has an internal IP address.
VM B1 cannot access Google APIs and services because it only has an
internal IP address and Private Google Access is disabled for subnet-b .
VM A2 and VM B2 can both access Google APIs and services, including
Cloud Storage, because they each have external IP addresses.
Private Google Access has no effect on whether or not these instances can
access Google APIs and services because both have external IP addresses.
What's next
To configure Private Google Access, see Configure
Private Google Access .
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
