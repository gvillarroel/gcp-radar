---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.933Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Hybrid spoke export and import filters"
feature_slug: "hybrid-spoke-export-and-import-filters"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies"
keywords:
  - "hybrid"
  - "spoke"
  - "export"
  - "and"
  - "import"
  - "filters"
  - "spokes"
  - "can"
---

# Hybrid spoke export and import filters

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Hybrid spokes can use export and import filters to control which subnets or routes are sent to or accepted from the hub.

## Extended Definition

Hybrid spokes can use export and import filters to control which subnets or routes are sent to or accepted from the hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)

## Supporting Pages

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the producer VPC spoke is part of the hub, its subnet routes are exported and the other spokes on that hub can access its services.
- Additionally, services in a producer VPC spoke are accessible by other VPC spokes on the hub, subject to spoke group and export filters.
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- To reduce the usage of the number of subnet routes per hub route table quota, you can use export filters to limit which of the subnets in the producer VPC spoke are exported.

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Establishing connectivity between hybrid spokes and VPC spokes You can establish connectivity between hybrid spokes and VPC spokes by adding workload VPC networks to an NCC hub as VPC spokes, then you add Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs to the same hub as hybrid spokes.
- Route exchange with VPC spokes lets you connect VPC spokes and hybrid spokes, such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub, which enables highly scalable any-to-any network connectivity between all such spokes attached to a single hub.
- To establish connectivity between hybrid spokes and VPC spokes: Network administrators for the routing VPC networks must first review the Cloud Router path selection and dynamic routing mode: NCC hybrid spokes only support the Cloud Router legacy best path selection mode.
- Either of the following techniques can be used: A spoke administrator for the hybrid spoke can set the includeImportRanges field to ["ALL IPV4 RANGES"] in the hybrid spoke resource by using the API.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Import of hub subnets for hybrid spokes You can achieve the automatic advertisement of VPC spoke IP subnet ranges to on-premises and other cloud provider networks through BGP by enabling the import of hub subnets for hybrid spokes.
- NCC supports the following types of spokes: Virtual Private Cloud (VPC) spokes Producer VPC spokes NCC Gateway spokes Hybrid spokes, that can be associated with any of the following resources: HA VPN tunnels Cloud Interconnect VLAN attachments Router appliance VMs Cross-Cloud Interconnect VLAN attachments Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview ) With the hub and spoke connectivity, you can do the following: Connect multiple VPC networks to one another.
- When enabled, any new VPC subnets that are created or deleted, and are in the hub route table, are automatically imported by hybrid spokes and advertised through BGP to their remote peers.

### "Preset connectivity topologies \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Subject to the spoke group route table rules, spoke administrators or network administrators can do the following: Use export include and export exclude filters to control which subnet ranges a VPC spoke exports to the route table of the spoke group that the VPC spoke belongs to.
- When you add two or more workload VPC networks to the hub as VPC spokes, each VPC spoke exports its subnet routes according to the configured export include and export exclude filters.
- Destination resource spoke Source resource spoke in the prod group in the non-prod group in the services group in the gateways group in the prod group routing SSE inspection routing SSE inspection routing SSE inspection routing SSE inspection in the non-prod group routing SSE inspection routing SSE inspection routing SSE inspection routing SSE inspection in the services group routing SSE inspection routing SSE inspection routing SSE inspection routing SSE inspection in the gateways group routing SSE inspection routing SSE inspection routing SSE inspection routing SSE inspection Supported spoke types Hybrid inspection topology supports VPC spokes, producer VPC spokes, hybrid spokes, and NCC Gateway spokes.
- Spoke Can be in the prod spoke group Can be in the non-prod spoke group Can be in the services spoke group Can be in the gateways spoke group VPC spoke Producer VPC spoke Hybrid spoke with site-to-site data transfer disabled Hybrid spoke with site-to-site data transfer enabled NCC Gateway spoke The gcloud network-connectivity hubs groups list --hub command returns the prod, non-prod, services, and gateway groups when using hybrid inspection topology.

