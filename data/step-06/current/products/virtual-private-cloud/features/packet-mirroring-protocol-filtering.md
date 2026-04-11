---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.157Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Packet Mirroring protocol filtering"
feature_slug: "packet-mirroring-protocol-filtering"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/routes"
keywords:
  - "packet"
  - "mirroring"
  - "protocol"
  - "filtering"
  - "introduced"
  - "general"
  - "availability"
  - "for"
---

# Packet Mirroring protocol filtering

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduced General Availability for Packet Mirroring with full control over which protocols are included in mirrored traffic.

## Extended Definition

Introduced General Availability for Packet Mirroring with full control over which protocols are included in mirrored traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2021 Feature Full control over which protocols are mirrored by Packet Mirroring is now available in General Availability .
- February 27, 2025 Feature The following Private Service Connect monitoring metrics are available for both producers and consumers in General Availability : Closed connections count Received packets dropped count Sent packets dropped count New connections count Open connections Received bytes count Received packets count Sent bytes count Sent packets count Additionally, the NAT IP address capacity metric is available for producers in General Availability .
- July 14, 2022 Feature Private Service Connect supports publishing a service that is hosted on the following load balancers: Internal TCP/UDP load balancer with global access enabled Internal protocol forwarding (target instances) These features are available in General Availability .
- December 07, 2020 Feature Packet Mirroring direction control is now available in General Availability .

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Virtual Private Cloud (VPC) All resources VPC pricing Announcement of pricing changes for egress traffic Announcement of pricing changes for external IPv4 addresses All networking pricing Quotas and limits Release notes All Google Cloud networking release notes Getting support Billing questions Service Level Agreement Google network locations Network edge locations Cloud CDN cache locations Cloud Interconnect colocation facility locations AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Quotas Per project Per network Deprecated quotas Limits Shared VPC limits Per network IP address limits Per instance Connection logging limits Hybrid connectivity Effective limits for per-peering group quotas Effective limits example Manage quotas Permissions Check your quota Errors when exceeding your quota Request additional quota Resource availability Home Documentation Networking Virtual Private Cloud Resources Was this helpful?
- Send feedback On this page Quotas Per project Per network Deprecated quotas Limits Shared VPC limits Per network IP address limits Per instance Connection logging limits Hybrid connectivity Effective limits for per-peering group quotas Effective limits example Manage quotas Permissions Check your quota Errors when exceeding your quota Request additional quota Resource availability Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, if that resource is available.
- Packet Mirrorings The number of Packet Mirroring policies that you can create in your project, in any network and region.

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Routing in Google Cloud Route types Subnet routes Dynamic routes System-generated default routes Route interactions Interactions between subnet routes and static routes Interactions between subnet routes and dynamic routes Applicability and order Applicable routes Special routing paths Routing order Unmatched resources in hybrid subnet routes What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- Each forwarding rule for an external passthrough Network Load Balancer or for external protocol forwarding also provides a routing path for its backend VMs or target instance to send packets to destinations outside of the VPC network: Packets sent by backend VMs or target instances can be either outbound response packets (sent back to the client) or they can be outbound packets that initiate a new connection.
- Paths for external passthrough Network Load Balancers and external protocol forwarding External passthrough Network Load Balancers and external protocol forwarding use Maglev systems to route packets from clients on the internet to backend VMs and target instances in your VPC network.
- Packet protocol and source port don't have to match the forwarding rule's protocol and port specification.

