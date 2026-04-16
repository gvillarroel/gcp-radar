---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.315Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "MP-BGP IPv6 prefix exchange over IPv4 BGP sessions"
feature_slug: "mp-bgp-ipv6-prefix-exchange-over-ipv4-bgp-sessions"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
keywords:
  - "mp"
  - "bgp"
  - "ipv6"
  - "prefix"
  - "exchange"
  - "over"
  - "ipv4"
  - "sessions"
---

# MP-BGP IPv6 prefix exchange over IPv4 BGP sessions

Product: Cloud Router
Coverage: MEDIUM

## Step 02 Summary

MP-BGP IPv6 prefix exchange over IPv4 BGP sessions lets Cloud Router advertise and exchange IPv6 prefixes across IPv4 BGP sessions.

## Extended Definition

MP-BGP IPv6 prefix exchange over IPv4 BGP sessions lets Cloud Router advertise and exchange IPv6 prefixes across IPv4 BGP sessions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)

## Supporting Pages

### Cloud Router overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create the following types of BGP sessions: IPv4 BGP sessions that exchange only IPv4 prefixes IPv6 BGP sessions that exchange only IPv6 prefixes IPv4 BGP sessions using MP-BGP that exchange both IPv4 and IPv6 prefixes IPv6 BGP sessions using MP-BGP that exchange both IPv4 and IPv6 prefixes IPv6 BGP peering and IPv6 route exchange aren't supported for the following resources: Classic VPN tunnels Router appliance (part of Network Connectivity Center) Cross-Cloud Interconnect VLAN attachments You can configure an IPv4 BGP session and an IPv6 BGP session simultaneously for an HA VPN tunnel or a Dedicated Interconnect VLAN attachment.
- IP protocols support Cloud Router supports IPv6 route exchange through either of the following: BGP over IPv6 BGP over IPv4 using multiprotocol BGP (MP-BGP) For information about advertising IPv6 prefixes, see Advertising subnet IPv6 address ranges .
- Configure multiprotocol BGP for IPv4 or IPv6 BGP sessions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you configure both BGP sessions simultaneously, the IPv4 BGP session only exchanges IPv4 routes, and the IPv6 BGP session only exchanges IPv6 routes.

### Establish BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, with MP-BGP over IPv6 BGP sessions, you exchange IPv4 routes over an IPv6 BGP session.
- However, you can configure the IPv4 BGP session to exchange IPv6 routes by using multiprotocol BGP (MP-BGP) .
- Similar to IPv4 BGP sessions, you can also configure an IPv6 BGP session with multiprotocol BGP (MP-BGP).
- IPv4 BGP sessions only exchange IPv4 routes, and IPv6 BGP sessions only exchange IPv6 routes.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.
- Route advertisement changes when using site-to-site data transfer When you add an Cloud Interconnect VLAN attachment or Cloud VPN tunnel to a hybrid spoke, NCC updates the corresponding BGP session for the VLAN attachment or Cloud VPN tunnel so that it re-advertises the prefixes learned by BGP sessions of the other Cloud Interconnect VLAN attachments or Cloud VPN tunnels connected to any of the hub's hybrid spokes that have the site-to-site data transfer option enabled.
- Connect networks using Router appliance VMs NCC can use Router appliance VMs in the following two IPv4 connectivity scenarios: Connecting a VPC network to an on-premises or other cloud provider network using dynamic routes Connecting two VPC networks to each other using dynamic routes With this option, Cloud Router manages the BGP sessions for Router appliance VMs.

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv4 and IPv6 addresses for BGP sessions Support for IPv6 BGP sessions is in Preview .
- Run the following command: gcloud compute routers describe ROUTER-NAME In the command output, check the following values: bgpPeers.peerIpAddress is an IPv6 address assigned to the external interface on your on-premises router.
- BGP session closes If your on-premises router advertises more than 5,000 prefixes, then the Cloud Router closes the BGP session and does not attempt to re-establish it until the BGP peering is reset manually.
- The IPv4 and IPv6 addresses that you can use for a BGP session depend on the product you use.

