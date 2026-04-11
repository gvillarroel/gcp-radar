---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.086Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "BYOIP static external IPv4 addresses from regional v2 prefixes"
feature_slug: "byoip-static-external-ipv4-addresses-from-regional-v2-prefixes"
latest_feature_date: "2026-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "byoip"
  - "static"
  - "external"
  - "ipv4"
  - "addresses"
  - "from"
  - "regional"
  - "v2"
---

# BYOIP static external IPv4 addresses from regional v2 prefixes

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

This feature enables creating individual static external IPv4 addresses from BYOIP prefixes, limited to IPv4 regional v2 prefixes created after December 13, 2025, and available in GA.

## Extended Definition

This feature enables creating individual static external IPv4 addresses from BYOIP prefixes, limited to IPv4 regional v2 prefixes created after December 13, 2025, and available in GA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.
- Bring your own IP (BYOIP) Static BYOIP IP addresses The number of bring your own IP regional external IP addresses that you can reserve in each region in your project.
- External IP addresses Static IP addresses The number of static regional external IPv4 addresses that you can reserve in each region in your project.
- Internal IP addresses Internal IP addresses The number of static regional internal IPv4 addresses that you can reserve in each region in your project.

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- February 04, 2026 Feature You can create individual static external IPv4 addresses from bring your own IP addresses (BYOIP) prefixes.
- To reserve addresses from these ranges, create a static regional external IPv6 address with the VM endpoint type.
- For more information, see the following pages: Use the VIPs from VMs with internal IPv6 addresses Use the VIPs from VMs with external IPv6 addresses Use the VIPs from on-premises hosts with IPv6 addresses Use restricted.googleapis.com with VPC Service Controls November 01, 2022 Feature Private Service Connect supports internal regional TCP proxy load balancers as a service attachment target in General Availability .
- For more information, see the following pages: Use the VIPs from VMs with internal IPv6 addresses Use the VIPs from VMs with external IPv6 addresses Use the VIPs from on-premises hosts with IPv6 addresses Use the VIPs with VPC Service Controls Feature Private Service Connect backends support using an external regional TCP proxy load balancer to access published services .

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Networks and subnets Types of subnets Purposes of subnets Limitations for naming subnets IPv4 subnet ranges Limitations for IPv4 subnet ranges Valid IPv4 ranges Prohibited IPv4 subnet ranges Unusable addresses in IPv4 subnet ranges Auto mode IPv4 ranges Additional considerations IPv6 subnet ranges IPv6 specifications IPv6 range assignment Unusable addresses in IPv6 subnet ranges What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- If you reserve a static regional external IPv6 /96 range from a BYOIP-provided IPv6 subnet range, you must specify VM for the endpoint type.
- A subnet's external IPv6 address range comes from one of the following sources: By default : Google Cloud assigns an unused /64 GUA range from Google's regional external IPv6 addresses .
- If using BYOIP external IPv6 addresses, the IPv6 address range comes from a BYOIP IPv6 address sub-prefix in forwarding rule creation mode .

