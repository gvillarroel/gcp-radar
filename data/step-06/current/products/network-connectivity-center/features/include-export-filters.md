---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.939Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Include export filters"
feature_slug: "include-export-filters"
latest_feature_date: "2024-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview"
keywords:
  - "include"
  - "export"
  - "filters"
  - "lets"
  - "you"
  - "restrict"
  - "connectivity"
  - "to"
---

# Include export filters

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Lets you restrict connectivity to permitted CIDR ranges and block all other traffic; Lets you restrict connectivity to permitted CIDR ranges and block all other traffic.

## Extended Definition

Lets you restrict connectivity to permitted CIDR ranges and block all other traffic; Lets you restrict connectivity to permitted CIDR ranges and block all other traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)

## Supporting Pages

### "Preset connectivity topologies \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you add two or more workload VPC networks to the hub as VPC spokes, each VPC spoke exports its subnet routes according to the configured export include and export exclude filters.
- Subject to the spoke group route table rules, spoke administrators or network administrators can do the following: Use export include and export exclude filters to control which subnet ranges a VPC spoke exports to the route table of the spoke group that the VPC spoke belongs to.
- Use export include and export exclude filters to control which subnet ranges a VPC spoke exports to the route table of the spoke group that the VPC spoke belongs to.
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Preset connectivity topologies Stay organized with collections Save and categorize content based on your preferences.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Spoke filters NCC lets you limit the connectivity between spokes by using spoke filters.
- NCC supports the following types of spokes: Virtual Private Cloud (VPC) spokes Producer VPC spokes NCC Gateway spokes Hybrid spokes, that can be associated with any of the following resources: HA VPN tunnels Cloud Interconnect VLAN attachments Router appliance VMs Cross-Cloud Interconnect VLAN attachments Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview ) With the hub and spoke connectivity, you can do the following: Connect multiple VPC networks to one another.
- Router appliance spokes A spoke associated with a Router appliance VM instance supports the following use cases: IPv4 site-to-cloud connectivity : establish connectivity between an external site and your VPC network resources.
- If you configure the spoke to export only IPv6 subnet ranges, then IPv6 subnet ranges from dual-stack and IPv6-only subnets are exchanged, but IPv4 subnet ranges from IPv4-only and dual-stack and subnets aren't exchanged.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- To reduce the usage of the number of subnet routes per hub route table quota, you can use export filters to limit which of the subnets in the producer VPC spoke are exported.
- Additionally, services in a producer VPC spoke are accessible by other VPC spokes on the hub, subject to spoke group and export filters.
- Properties unique to producer VPC spokes Producer VPC spokes have the following unique properties and requirements: Property Description Dependencies Creating a producer VPC spoke requires that you have the following existing resources and connections: A VPC network that consumes a supported service from a producer network through VPC Network Peering.
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.

### "Private Service Connect connection propagation through NCC \_|\_ Network\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the --exclude-export-ranges and --include-export-ranges flags, see VPC connectivity with export filters .
- Because the --exclude-export-ranges filter is not mutable for a spoke after the spoke is created, we recommend that you create two subnets to host Private Service Connect endpoints—one subnet for within-VPC-network-only Private Service Connect endpoints and the other for the Private Service Connect endpoints shared to the hub.
- The spoke owner can use the --exclude-export-ranges and --include-export-ranges flags to exclude specific Private Service Connect allocated subnets from the NCC routing so that specified subnets can't be reached from other VPC networks, thus keeping them private to the local VPC network.
- When you connect a VPC spoke to a hub that has propagated connections enabled, NCC creates propagated connections in that spoke for any endpoints that are attached to the same hub, unless the endpoint's subnet is excluded from being exported.

