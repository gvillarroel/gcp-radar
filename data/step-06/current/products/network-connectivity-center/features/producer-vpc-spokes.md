---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.938Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Producer VPC spokes"
feature_slug: "producer-vpc-spokes"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview"
keywords:
  - "producer"
  - "vpc"
  - "spokes"
  - "lets"
  - "network"
  - "that"
  - "consumes"
  - "private"
---

# Producer VPC spokes

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Lets a VPC network that consumes a private services access service become a spoke so the service is reachable by other spokes on a hub; Lets a VPC network that consumes a private services access service become a spoke so the service is reachable by other spokes on a hub.

## Extended Definition

Lets a VPC network that consumes a private services access service become a spoke so the service is reachable by other spokes on a hub; Lets a VPC network that consumes a private services access service become a spoke so the service is reachable by other spokes on a hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)

## Supporting Pages

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Properties unique to producer VPC spokes Producer VPC spokes have the following unique properties and requirements: Property Description Dependencies Creating a producer VPC spoke requires that you have the following existing resources and connections: A VPC network that consumes a supported service from a producer network through VPC Network Peering.
- Producer VPC spokes support the following services: Google services offered by private services access Google Cloud NetApp Volumes How it works When you create a producer VPC spoke, you provide the following: The existing VPC spoke of your consumer network that is peered with the producer network.
- This page provides an overview of producer Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC).
- Producer VPC networks that are added to a hub are called producer VPC spokes .

### "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- Source ID: `site-iam-reference`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about producer Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC), see Producer VPC spokes .
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Supported services for producer VPC spokes Stay organized with collections Save and categorize content based on your preferences.
- That is, the name of the peering connection between your VPC network and the producer VPC network must be servicenetworking-googleapis-com .
- To use a producer VPC spoke, the service must be consumed by using private services access or VPC Network Peering .

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NCC supports the following types of spokes: Virtual Private Cloud (VPC) spokes Producer VPC spokes NCC Gateway spokes Hybrid spokes, that can be associated with any of the following resources: HA VPN tunnels Cloud Interconnect VLAN attachments Router appliance VMs Cross-Cloud Interconnect VLAN attachments Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview ) With the hub and spoke connectivity, you can do the following: Connect multiple VPC networks to one another.
- Producer VPC spokes If you have an existing VPC spoke that consumes a service from a producer network in another project through VPC Network Peering, you can make the service reachable by the other spokes in your NCC hub by creating a producer VPC spoke.
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- When a hub uses hybrid spokes located in a single VPC network, you can also configure site-to-site data transfer so that the dynamic routes whose next hops are a hybrid spoke—for example, a Cloud Interconnect VLAN attachment—are advertised to an on-premises network by the BGP sessions of the other hybrid spokes in that VPC network.

### "Private Service Connect connection propagation through NCC \_|\_ Network\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to make propagated Private Service Connect connections available to on-premises networks connected to hybrid spokes: Your NCC hub must have only one routing VPC network that contains all of its hybrid spokes.
- Similarly, it lets managed service producers host these services in their own separate VPC networks and projects and offer a private connection to their consumers.
- Because the --exclude-export-ranges filter is not mutable for a spoke after the spoke is created, we recommend that you create two subnets to host Private Service Connect endpoints—one subnet for within-VPC-network-only Private Service Connect endpoints and the other for the Private Service Connect endpoints shared to the hub.
- The spoke owner can use the --exclude-export-ranges and --include-export-ranges flags to exclude specific Private Service Connect allocated subnets from the NCC routing so that specified subnets can't be reached from other VPC networks, thus keeping them private to the local VPC network.

