---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.941Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Cross-Cloud Interconnect"
feature_slug: "cross-cloud-interconnect"
latest_feature_date: "2023-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
keywords:
  - "cross"
  - "interconnect"
  - "lets"
  - "you"
  - "peer"
  - "vpc"
  - "network"
  - "with"
---

# Cross-Cloud Interconnect

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Lets you peer a Google VPC network with a network hosted by a supported cloud service provider.

## Extended Definition

Lets you peer a Google VPC network with a network hosted by a supported cloud service provider.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)

## Supporting Pages

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connecting to CDN providers CDN Interconnect CDN Interconnect enables select third-party Content Delivery Network (CDN) providers to establish direct peering links with Google's edge network at various locations, which enables you to direct your traffic from your Virtual Private Cloud (VPC) networks to a provider's network.
- For more information, see the following resources: Cloud Interconnect overview Dedicated Interconnect overview Partner Interconnect overview Topology for production-level applications overview Topology for non-critical applications overview Cross-Cloud Interconnect If you need to connect your Google Cloud VPC network to your network that's hosted by another cloud service provider, use Cross-Cloud Interconnect.
- To CDN providers , which lets you choose supported content delivery providers that establish Direct Peering links with Google's edge network.
- Features Verified Peering Providers offer the following features: Simplified connectivity No need to meet Google's peering requirements Leave the complexities of peering arrangements to the Verified Peering Providers Spend less time deploying and managing the technical complexities of the Direct Peering arrangement Acquire IP address transit or dedicated internet access from a Verified Peering Provider and let the Verified Peering Provider handle the peering with Google High availability Google badge verifies redundant connectivity to Google Gold badge indicates metro redundancy; silver indicates points of presence (PoPs) redundancy For redundant connectivity details, see Google Edge Network Enterprise grade connectivity Connect to Google through internet products designed for enterprises Access Google with or without the need for border gateway protocol (BGP) or an autonomous system number (ASN) Work directly with internet service provider (ISP) customer services teams and operational escalations Dedicated private Google connectivity All Google connectivity is through private dedicated fiber optics Leverage the same Google fibers that carry all Google services Access all Google services Access to Google Cloud services includes Google Workspace, Cloud APIss, Cloud VPN, public IP addresses, Network Service Tiers, and more Any Google service that is reachable over the internet can be used with a Verified Peering Provider Compare Verified Peering Provider and Cloud Interconnect The following table describes the differences between Verified Peering Provider and Cloud Interconnect.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NCC supports the following types of spokes: Virtual Private Cloud (VPC) spokes Producer VPC spokes NCC Gateway spokes Hybrid spokes, that can be associated with any of the following resources: HA VPN tunnels Cloud Interconnect VLAN attachments Router appliance VMs Cross-Cloud Interconnect VLAN attachments Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) VLAN attachments Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) ( Preview ) With the hub and spoke connectivity, you can do the following: Connect multiple VPC networks to one another.
- If the other VPC network has dynamic routes with next hop Cloud Interconnect VLAN attachments or Cloud VPN tunnels that connect to an on-premises network, you can connect the spoke VPC network to the on-premises network by using Cloud Router custom route advertisements and VPC Network Peering route exchange options as described in the transit network example of the VPC Network Peering documentation .
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- When a hub uses hybrid spokes located in a single VPC network, you can also configure site-to-site data transfer so that the dynamic routes whose next hops are a hybrid spoke—for example, a Cloud Interconnect VLAN attachment—are advertised to an on-premises network by the BGP sessions of the other hybrid spokes in that VPC network.

### Key terms \_|\_ Network Connectivity \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because each Cross-Cloud Interconnect connection can support multiple VLAN attachments, you can access multiple VPC networks without creating multiple connections.
- Each attachment that you create is associated with a VPC network and a Google Cloud region: When you associate an attachment for Dedicated Interconnect with a VPC network, this network must be in a project in the same organization as the project that contains the Dedicated Interconnect connection.
- The service provider provides connectivity between your on-premises network and your VPC network. metropolitan area (metro) Applies to Dedicated Interconnect, Partner Interconnect, Cross-Cloud Interconnect, and Cross-Site Interconnect.
- Because each connection for Dedicated Interconnect supports multiple VLAN attachments, you can access multiple VPC networks without creating multiple connections.

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route exchange with VPC spokes lets you connect VPC spokes and hybrid spokes, such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub, which enables highly scalable any-to-any network connectivity between all such spokes attached to a single hub.
- Establishing connectivity between hybrid spokes and VPC spokes You can establish connectivity between hybrid spokes and VPC spokes by adding workload VPC networks to an NCC hub as VPC spokes, then you add Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs to the same hub as hybrid spokes.
- The Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs in each hybrid spoke are also associated with one or more routing VPC networks , but the routing VPC networks themselves need not be added to the NCC hub as VPC spokes.
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Route exchange with VPC spokes Stay organized with collections Save and categorize content based on your preferences.

