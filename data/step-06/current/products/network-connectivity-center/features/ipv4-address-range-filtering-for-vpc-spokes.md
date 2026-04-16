---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.937Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "IPv4 address range filtering for VPC spokes"
feature_slug: "ipv4-address-range-filtering-for-vpc-spokes"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
keywords:
  - "ipv4"
  - "address"
  - "range"
  - "filtering"
  - "for"
  - "vpc"
  - "spokes"
  - "can"
---

# IPv4 address range filtering for VPC spokes

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

VPC spokes can export configurable IPv4 address ranges to a hub.

## Extended Definition

VPC spokes can export configurable IPv4 address ranges to a hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)

## Supporting Pages

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The custom ranges can be a list of all subnet IPv4 address ranges of the VPC spokes on the hub, or you can use larger CIDRs that contain the subnet IPv4 address ranges of the VPC spokes.
- A network administrator for the routing VPC network can advertise custom address ranges on the Cloud Routers for the hybrid spokes.
- Either of the following techniques can be used: A spoke administrator for the hybrid spoke can set the includeImportRanges field to ["ALL IPV4 RANGES"] in the hybrid spoke resource by using the API.
- A spoke administrator for the hybrid spoke can update the hybrid spoke by using the Google Cloud CLI with the --include-import-ranges=[ ALL IPV4 RANGES ] flag.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the IP address ranges of the VPC spokes on your hub don't overlap with an allocated IP range configured for private services access.
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- Avoid overlap with allocated IP ranges If you want to create a producer VPC spoke for a supported service offered through private services access, consider the following: NCC does not check for overlaps with allocated IP ranges.
- This includes any new subnets added to the producer VPC spoke, which means that other spokes can access newly provisioned services from a producer VPC spoke.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- IP addressing IP version support depends on the spoke type: VPC spokes : NCC supports the following IP versions: IPv4 and IPv6 for the exchange of subnet ranges.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.
- Import of hub subnets for hybrid spokes You can achieve the automatic advertisement of VPC spoke IP subnet ranges to on-premises and other cloud provider networks through BGP by enabling the import of hub subnets for hybrid spokes.

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Features Verified Peering Providers offer the following features: Simplified connectivity No need to meet Google's peering requirements Leave the complexities of peering arrangements to the Verified Peering Providers Spend less time deploying and managing the technical complexities of the Direct Peering arrangement Acquire IP address transit or dedicated internet access from a Verified Peering Provider and let the Verified Peering Provider handle the peering with Google High availability Google badge verifies redundant connectivity to Google Gold badge indicates metro redundancy; silver indicates points of presence (PoPs) redundancy For redundant connectivity details, see Google Edge Network Enterprise grade connectivity Connect to Google through internet products designed for enterprises Access Google with or without the need for border gateway protocol (BGP) or an autonomous system number (ASN) Work directly with internet service provider (ISP) customer services teams and operational escalations Dedicated private Google connectivity All Google connectivity is through private dedicated fiber optics Leverage the same Google fibers that carry all Google services Access all Google services Access to Google Cloud services includes Google Workspace, Cloud APIss, Cloud VPN, public IP addresses, Network Service Tiers, and more Any Google service that is reachable over the internet can be used with a Verified Peering Provider Compare Verified Peering Provider and Cloud Interconnect The following table describes the differences between Verified Peering Provider and Cloud Interconnect.
- To change the destination IP address ranges for your on-premises network, adjust the routes that your routers share with Cloud Routers in your project.
- To change the destination IP address ranges for your on-premises network, adjust the routes that your routers share with Cloud Routers in your project.
- To change the destination IP address ranges for your on-premises network, adjust the routes that your routers share with Cloud Routers in your project.

