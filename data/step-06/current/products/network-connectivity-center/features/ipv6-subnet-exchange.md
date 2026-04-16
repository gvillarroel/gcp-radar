---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.937Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "IPv6 subnet exchange"
feature_slug: "ipv6-subnet-exchange"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services"
keywords:
  - "ipv6"
  - "subnet"
  - "exchange"
  - "vpc"
  - "spokes"
  - "can"
  - "ranges"
  - "or"
---

# IPv6 subnet exchange

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

VPC spokes can exchange IPv6 subnet ranges or both IPv4 and IPv6 subnet ranges using export filters; Lets a VPC spoke exchange IPv6 subnet ranges, or both IPv4 and IPv6 subnet ranges, using export filters.

## Extended Definition

VPC spokes can exchange IPv6 subnet ranges or both IPv4 and IPv6 subnet ranges using export filters; Lets a VPC spoke exchange IPv6 subnet ranges, or both IPv4 and IPv6 subnet ranges, using export filters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)

## Supporting Pages

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The custom ranges can be a list of all subnet IPv4 address ranges of the VPC spokes on the hub, or you can use larger CIDRs that contain the subnet IPv4 address ranges of the VPC spokes.
- A network administrator for the routing VPC network can advertise custom address ranges on the Cloud Routers for the hybrid spokes.
- The hub route table is updated with appropriate route entries when the following events occur: VPC spoke creation or deletion Subnet creation or deletion in attached VPC spokes Hybrid spoke creation or deletion BGP route advertisement or withdrawal from attached hybrid spokes Each VPC spoke also has a VPC network route table.
- Establishing connectivity between hybrid spokes and VPC spokes You can establish connectivity between hybrid spokes and VPC spokes by adding workload VPC networks to an NCC hub as VPC spokes, then you add Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs to the same hub as hybrid spokes.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.
- You can configure VPC spokes to exchange only IPv4 subnet ranges, only IPv6 subnet ranges, or both IPv4 and IPv6 subnet ranges.
- IP addressing IP version support depends on the spoke type: VPC spokes : NCC supports the following IP versions: IPv4 and IPv6 for the exchange of subnet ranges.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- After the producer VPC spoke is part of the hub, its subnet routes are exported and the other spokes on that hub can access its services.
- To reduce the usage of the number of subnet routes per hub route table quota, you can use export filters to limit which of the subnets in the producer VPC spoke are exported.
- This includes any new subnets added to the producer VPC spoke, which means that other spokes can access newly provisioned services from a producer VPC spoke.

### "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AlloyDB for PostgreSQL Apigee Cloud Build Cloud SQL Google Cloud NetApp Volumes Looker (Google Cloud core) Memorystore for Memcached Memorystore for Redis Parallelstore Vertex AI You can check whether a service producer exports only subnet routes by listing peering routes and ensuring that the associated peering connection only has routes of type Peering subnet .
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Supported services for producer VPC spokes Stay organized with collections Save and categorize content based on your preferences.
- For information about producer Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC), see Producer VPC spokes .
- The following Google services consumed through private services access can be used with producer VPC spokes.

