---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.103Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Internal range IP allocation exclusions"
feature_slug: "internal-range-ip-allocation-exclusions"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "internal"
  - "range"
  - "ip"
  - "allocation"
  - "exclusions"
  - "allows"
  - "users"
  - "to"
---

# Internal range IP allocation exclusions

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows users to exclude specific IP address ranges from being automatically used during internal range allocation.

## Extended Definition

Allows users to exclude specific IP address ranges from being automatically used during internal range allocation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2025 Feature When you reserve an internal range with an automatically allocated IPv4 CIDR block, you can specify the allocation strategy that is used to select a free block.
- Feature When you reserve an internal range with an automatically allocated IPv4 CIDR block, you can specify the allocation strategy that is used to select a free block.
- May 12, 2025 Feature You can exclude IP address ranges from being used for automatic IP address allocation for internal ranges.
- Feature You can exclude IP address ranges from internal range automatic IP address allocation.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Quota name: SUBNET RANGES PER NETWORK Available metrics: compute.googleapis.com/quota/subnet ranges per vpc network/limit compute.googleapis.com/quota/subnet ranges per vpc network/usage compute.googleapis.com/quota/subnet ranges per vpc network/exceeded Subnetwork ranges per peering group From the perspective of a VPC network, the total number of subnet IP address ranges used by subnets local to the VPC network and in its directly connected peers.
- Quota name: ALIASES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/ip aliases per vpc network/limit compute.googleapis.com/quota/ip aliases per vpc network/usage compute.googleapis.com/quota/ip aliases per vpc network/exceeded Subnet IP address ranges Subnetwork ranges per VPC network The total number of subnet IP address ranges used by subnets in the VPC network.
- Quota name: INSTANCES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/instances per vpc network/limit compute.googleapis.com/quota/instances per vpc network/usage compute.googleapis.com/quota/instances per vpc network/exceeded IP aliases per VPC network The total number of alias IP ranges used by VM network interfaces (NICs) in the VPC network.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Concepts Organizations, folders, and projects Networks Organization policy constraints Administrators and IAM Required administrative roles Service Project Admins Network and Security Admins Specifications Quotas and limits Billing Resources Eligible resources IP addresses Internal DNS Cloud DNS private zones Load balancing Examples and use cases Basic concepts Multiple host projects Hybrid cloud scenario Two-tier web service What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- Send feedback On this page Concepts Organizations, folders, and projects Networks Organization policy constraints Administrators and IAM Required administrative roles Service Project Admins Network and Security Admins Specifications Quotas and limits Billing Resources Eligible resources IP addresses Internal DNS Cloud DNS private zones Load balancing Examples and use cases Basic concepts Multiple host projects Hybrid cloud scenario Two-tier web service What's next Shared VPC Stay organized with collections Save and categorize content based on your preferences.
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .

