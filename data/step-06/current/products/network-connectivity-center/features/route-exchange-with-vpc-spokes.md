---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.939Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Route exchange with VPC spokes"
feature_slug: "route-exchange-with-vpc-spokes"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview"
keywords:
  - "route"
  - "exchange"
  - "with"
  - "vpc"
  - "spokes"
  - "lets"
  - "routes"
  - "hybrid"
---

# Route exchange with VPC spokes

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Lets VPC spokes exchange routes with hybrid spokes such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub; Lets VPC spokes exchange routes with hybrid spokes such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub.

## Extended Definition

Lets VPC spokes exchange routes with hybrid spokes such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub; Lets VPC spokes exchange routes with hybrid spokes such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)

## Supporting Pages

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 393
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route exchange with VPC spokes lets you connect VPC spokes and hybrid spokes, such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub, which enables highly scalable any-to-any network connectivity between all such spokes attached to a single hub.
- The hub route table is updated with appropriate route entries when the following events occur: VPC spoke creation or deletion Subnet creation or deletion in attached VPC spokes Hybrid spoke creation or deletion BGP route advertisement or withdrawal from attached hybrid spokes Each VPC spoke also has a VPC network route table.
- The dynamic routing mode of a routing VPC network determines in which regions the NCC dynamic routes are programmed in the VPC spokes: If the dynamic routing mode is regional, NCC dynamic routes from its hybrid spokes are only programmed in the same region as each hybrid spoke.
- The Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs in each hybrid spoke are also associated with one or more routing VPC networks , but the routing VPC networks themselves need not be added to the NCC hub as VPC spokes.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The subnet routes from the service producer network are exported to the hub and advertised to the VPC spokes associated with Networks 3 and 4.
- Use the same NCC quotas and limits , including: Number of active VPC spokes per hub Number of subnet routes per hub route table If adding a producer VPC spoke could result in the hub exceeding the limit of either of the preceding quotas, NCC prohibits you from adding the producer VPC spoke.
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- After the producer VPC spoke is part of the hub, its subnet routes are exported and the other spokes on that hub can access its services.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.
- NCC supports the following types of spokes: Virtual Private Cloud (VPC) spokes Producer VPC spokes NCC Gateway spokes Hybrid spokes, that can be associated with any of the following resources: HA VPN tunnels Cloud Interconnect VLAN attachments Router appliance VMs Cross-Cloud Interconnect VLAN attachments Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview ) With the hub and spoke connectivity, you can do the following: Connect multiple VPC networks to one another.
- If the other VPC network has dynamic routes with next hop Cloud Interconnect VLAN attachments or Cloud VPN tunnels that connect to an on-premises network, you can connect the spoke VPC network to the on-premises network by using Cloud Router custom route advertisements and VPC Network Peering route exchange options as described in the transit network example of the VPC Network Peering documentation .

### "NCC Gateway overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hybrid inspection topology : lets you add NCC Gateway spokes to a group to apply policies.
- Gateway advertised routes don't show up in the VPC route table.
- Effective routes view for gateways and hub route tables You can query hub route tables from the perspective of a region, which takes into account inter-region cost when you select a route, whether it is through the gateway or not.
- So, if you want to direct internet traffic to the gateway using a gateway advertised route with a 0/0 destination, then you might need to remove the system-generated default route .

