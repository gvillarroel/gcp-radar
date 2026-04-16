---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.934Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Privately used public IPv4 address exchange"
feature_slug: "privately-used-public-ipv4-address-exchange"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
  - "https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms"
keywords:
  - "privately"
  - "used"
  - "public"
  - "ipv4"
  - "address"
  - "exchange"
  - "network"
  - "connectivity"
---

# Privately used public IPv4 address exchange

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Network Connectivity Center can exchange privately used public IPv4 addresses with VPC spokes and producer VPC spokes; Network Connectivity Center can exchange privately used public IPv4 addresses with VPC spokes and producer VPC spokes.

## Extended Definition

Network Connectivity Center can exchange privately used public IPv4 addresses with VPC spokes and producer VPC spokes; Network Connectivity Center can exchange privately used public IPv4 addresses with VPC spokes and producer VPC spokes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- [https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms)

## Supporting Pages

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Hybrid spokes can also send privately used public IP address ranges to the NCC hub ( Preview ).
- Connect networks using Router appliance VMs NCC can use Router appliance VMs in the following two IPv4 connectivity scenarios: Connecting a VPC network to an on-premises or other cloud provider network using dynamic routes Connecting two VPC networks to each other using dynamic routes With this option, Cloud Router manages the BGP sessions for Router appliance VMs.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route exchange with VPC spokes lets you connect VPC spokes and hybrid spokes, such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub, which enables highly scalable any-to-any network connectivity between all such spokes attached to a single hub.
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Route exchange with VPC spokes Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of route exchange between hybrid spokes and Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC).
- Route exchange with VPC spokes support IPv4 addressing only.

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Features Verified Peering Providers offer the following features: Simplified connectivity No need to meet Google's peering requirements Leave the complexities of peering arrangements to the Verified Peering Providers Spend less time deploying and managing the technical complexities of the Direct Peering arrangement Acquire IP address transit or dedicated internet access from a Verified Peering Provider and let the Verified Peering Provider handle the peering with Google High availability Google badge verifies redundant connectivity to Google Gold badge indicates metro redundancy; silver indicates points of presence (PoPs) redundancy For redundant connectivity details, see Google Edge Network Enterprise grade connectivity Connect to Google through internet products designed for enterprises Access Google with or without the need for border gateway protocol (BGP) or an autonomous system number (ASN) Work directly with internet service provider (ISP) customer services teams and operational escalations Dedicated private Google connectivity All Google connectivity is through private dedicated fiber optics Leverage the same Google fibers that carry all Google services Access all Google services Access to Google Cloud services includes Google Workspace, Cloud APIss, Cloud VPN, public IP addresses, Network Service Tiers, and more Any Google service that is reachable over the internet can be used with a Verified Peering Provider Compare Verified Peering Provider and Cloud Interconnect The following table describes the differences between Verified Peering Provider and Cloud Interconnect.
- Gives you direct access from your on-premises network through a service provider's network to Google Workspace and to Google Cloud products that can be exposed through one or more public IP addresses.
- When established, Direct Peering provides a direct path from your on-premises network to Google services, including Google Cloud products that can be exposed through one or more public IP addresses.
- Google's external connectivity solutions enable you to connect your non-Google Cloud networks to Google in the following ways: To Google Cloud , which lets you access your Virtual Private Cloud (VPC) networks and Compute Engine virtual machine (VM) instances from your on-premises networks or from another cloud provider.

### Key terms \_|\_ Network Connectivity \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/concepts/key-terms)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A peer VPN gateway can be one of the following: Another Cloud VPN gateway A VPN gateway hosted by another cloud provider such as AWS or Microsoft Azure An on-premises VPN device or VPN service Note: Cloud VPN instructions are written from the point of view of your Virtual Private Cloud (VPC) network, so the peer VPN gateway is the gateway that connects to Cloud VPN. remote peer IP address For an HA VPN gateway interface that connects to an external VPN gateway, the remote peer IP address is the IP address of the interface on the external VPN gateway that is used for the tunnel.
- The service provider provides connectivity between your on-premises network and your VPC network. metropolitan area (metro) Applies to Dedicated Interconnect, Partner Interconnect, Cross-Cloud Interconnect, and Cross-Site Interconnect.
- For an HA VPN gateway interface that connects to another HA VPN gateway, the remote peer IP address is the IP address of the other HA VPN gateway's interface that is used for the tunnel.
- Home Documentation Networking Network Connectivity Guides Send feedback Key terms Stay organized with collections Save and categorize content based on your preferences.

