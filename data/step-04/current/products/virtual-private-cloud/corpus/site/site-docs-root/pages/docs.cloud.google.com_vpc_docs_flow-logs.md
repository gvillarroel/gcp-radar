---
title: "VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/flow-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/flow-logs
  title: "VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

VPC Flow Logs | Virtual Private Cloud | Google Cloud Documentation
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
Use cases Network monitoring
Understanding network usage and optimizing network traffic expenses
Network forensics
Supported configurations
Logs collection Log sampling and processing
Specifications
Pricing and billing
What's next
Home
Documentation
Networking
Virtual Private Cloud
Guides
Was this helpful?
Send feedback
On this page
Use cases Network monitoring
Understanding network usage and optimizing network traffic expenses
Network forensics
Supported configurations
Logs collection Log sampling and processing
Specifications
Pricing and billing
What's next
VPC Flow Logs
Stay organized with collections
Save and categorize content based on your preferences.
VPC Flow Logs samples packets in your Virtual Private Cloud (VPC)
network to generate flow logs. Flow logs are aggregated by IP connection
(5-tuple). VPC Flow Logs samples the following packets:
Packets that are sent from and received by
virtual machine (VM) instances , including
instances used as Google Kubernetes Engine nodes
Packets that are sent from and received by Cloud Run resources
configured with Direct VPC egress
Packets that are sent through VLAN attachments for
Cloud Interconnect
and Cloud VPN tunnels
You can view flow logs in Cloud Logging , and you
can export logs to any destination that Cloud Logging export supports.
These logs can be used for network monitoring, forensics, security analysis,
and expense optimization.
For more information, see Supported configurations .
Use cases
The following are use cases for VPC Flow Logs.
Network monitoring
VPC Flow Logs provides you with visibility into network
throughput and performance. You can:
Monitor the VPC network
Perform network diagnosis
Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and
Cloud VPN tunnels to understand traffic changes
Understand traffic growth for capacity forecasting
Understanding network usage and optimizing network traffic expenses
You can analyze network usage with VPC Flow Logs to
optimize network traffic expenses. For example, you can
analyze the network flows for the following:
Traffic between regions and zones
Traffic to specific countries on the internet
Traffic to on-premises and other cloud networks
Top talkers in the network, including VMs, serverless endpoints,
VLAN attachments, and Cloud VPN tunnels
Network forensics
You can use VPC Flow Logs for network forensics. For example,
if an incident occurs, you can examine the following:
Which IP addresses have communicated with each other and when
Which IPs are compromised by analyzing all the incoming and outgoing network flows
Supported configurations
You can enable VPC Flow Logs at the organization and project
levels. An organization-level VPC Flow Logs configuration enables
flow logs for all subnets, VLAN attachments, and Cloud VPN tunnels in
all VPC networks in the organization.
At the project level, you can enable VPC Flow Logs for specific
VPC networks, subnets, VLAN attachments, and Cloud VPN
tunnels.
Configuration scope
Generates flow logs for these resources
Steps to enable
Organization
All VM instances and Cloud Run resources in all subnets
in the organization
All VLAN attachments in the organization
All Cloud VPN tunnels in the organization
Enable VPC Flow Logs for an organization
VPC network
All VM instances and Cloud Run resources in all subnets
in the VPC network
All VLAN attachments in the VPC network
All Cloud VPN tunnels in the VPC network
Enable VPC Flow Logs for a VPC network
Subnet
All VM instances and Cloud Run resources in a specific
subnet
Enable VPC Flow Logs for a subnet:
Recommended: Enable VPC Flow Logs for a subnet (Network Management API)
Enable VPC Flow Logs for a subnet (Compute Engine API)
VLAN attachment
A specific VLAN attachment
Enable VPC Flow Logs for a VLAN attachment
Cloud VPN tunnel
A specific Cloud VPN tunnel
Enable VPC Flow Logs for a Cloud VPN tunnel
You can use filtering to customize these configuration scopes. For more
information, see Log sampling and processing .
Logs collection
Packets are sampled within an aggregation interval. All packets collected for
a given IP connection within the aggregation interval are aggregated into a
single flow log entry. This data is then sent to
Logging in the Google Cloud project of the
VPC network that reported the flow.
Logs are stored in Logging for 30 days by default. If
you want to keep logs longer than that, you can either set a custom
retention period or
export them to a supported
destination.
Log sampling and processing
To generate flow logs, VPC Flow Logs samples packets in your
VPC network, including packets that are sent from and received by
VMs and serverless endpoints and packets that pass through gateways such as
VLAN attachments or Cloud VPN tunnels. After the flow logs are
generated, VPC Flow Logs processes them by following the procedure
described in this section.
VPC Flow Logs samples packets using a primary sampling rate .
The primary sampling rate is dynamic and varies depending on the load of the
physical host running the reporting resource at the time of sampling. The
probability of sampling any single IP connection increases with the volume of
packets. You can't control the primary flow log sampling process or adjust the
primary sampling rate.
After the flow logs are generated, VPC Flow Logs processes them
according to the following procedure:
Filtering . You can specify that only logs that match specified criteria
are generated. For example, you can filter so that only logs
for a particular VM or only logs with a particular metadata value
are generated and the rest are discarded. For more information, see
Log filtering .
Aggregation . Information for sampled packets is aggregated over
a configurable aggregation interval to produce a flow log entry .
Secondary flow log sampling . This is a second sampling process. Flow log entries
are further sampled according to a configurable secondary sampling rate parameter.
The secondary sampling is performed on the flow logs generated by the
primary flow log sampling process. For example, if the secondary sampling
rate is set to 1.0, or 100%, VPC Flow Logs samples 100% of
the flow logs generated by the primary flow log sampling.
Metadata . If disabled, all metadata annotations are discarded. If you
want to keep metadata, you can retain all fields or a specific set of
fields. For more information, see Metadata
annotations .
Write to Logging . The final log entries are written to
Cloud Logging.
Note: You can't change how VPC Flow Logs collects samples.
However, you can control the secondary flow log sampling with the
Secondary sampling rate parameter, as described in
Enable VPC Flow Logs .
If you need to analyze all packets, you can use
Packet Mirroring and collector instances
running third-party software.
Because VPC Flow Logs doesn't capture every packet, it compensates
for missed packets by interpolating from the captured packets. This happens for
packets missed because of initial and user-configurable sampling settings.
Even though Google Cloud doesn't capture every packet, log record captures
can be quite large. You can balance your traffic visibility and storage cost
needs by adjusting the following aspects of logs collection:
Aggregation interval . Sampled packets for a time interval are aggregated
into a single log entry. This time interval can be 5 seconds
(default), 30 seconds, 1 minute, 5 minutes, 10 minutes, or 15 minutes.
Secondary sampling rate .
For configurations created with the Compute Engine API, 50% of log
entries are kept by default. You can set this
parameter from 1.0 (100%, all log entries are kept)
to 0.0 (0%, no logs are kept).
For configurations created with the Network Management API, 100% of
log entries are kept by default. You can set this
parameter from 1.0 to greater than 0.0 .
Metadata annotations . By default, flow log entries are annotated with
metadata information, such as the names of the source and
destination within Google Cloud or the geographic region of external
sources and destinations. Metadata annotations can be turned off, or you
can specify only certain annotations, to save storage space.
Filtering . By default, logs are generated for every sampled flow.
You can set filters to
generate logs that only match certain criteria.
Specifications
VPC Flow Logs introduces no delay
or performance penalty when enabled.
VPC Flow Logs works with VPC networks, not legacy
networks.
VPC Flow Logs samples TCP, UDP, ICMP, ESP, GRE,
and RDMA flows:
Both inbound and outbound flows are sampled. For RDMA over Converged
Ethernet (RoCE), only outbound flows are sampled.
Flows can be within Google Cloud or between Google Cloud and
other networks.
If a flow is captured by sampling,
VPC Flow Logs generates a log for the flow. Each flow record
includes the information described in the
Record format section.
VPC Flow Logs interacts with firewall rules in the following
ways:
Egress packets are sampled before egress firewall rules. Even if an
egress firewall rule denies outbound packets, those packets can be
sampled by VPC Flow Logs.
Ingress packets are sampled after ingress firewall rules. If an
ingress firewall rule denies inbound packets, those packets aren't
sampled by VPC Flow Logs.
You can use filters in
VPC Flow Logs to generate only certain logs.
VPC Flow Logs supports VMs that have multiple network interfaces.
In each VPC, you need to enable VPC Flow Logs
for each subnet that contains a network interface.
To log flows between Pods on the same Google Kubernetes Engine (GKE) node, you
must enable
intranode visibility
for the cluster.
VPC Flow Logs isn't supported for subnets with purpose
INTERNAL_HTTPS_LOAD_BALANCER because these subnets are used as proxy-only
subnets and have no VM instances or serverless endpoints.
VPC Flow Logs writes logs to the project of the reporting
VPC network. For resources in Shared VPC networks,
logs are reported in the host project.
Pricing and billing
Standard pricing for Logging,
BigQuery, or Pub/Sub apply.
VPC Flow Logs pricing is described in
Network Telemetry pricing .
VPC Flow Logs charges are billed to the Google Cloud project of the
resource that reports flow logs. If VPC Flow Logs is enabled for an
organization, each project is billed separately.
What's next
To learn more about the VPC Flow Logs record format and which
metadata annotations are available, see
About VPC Flow Logs records .
To see examples of VPC Flow Logs that are collected for various
use cases, see About traffic flows .
To start reporting flows for a subnet, see
Configure VPC Flow Logs .
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
