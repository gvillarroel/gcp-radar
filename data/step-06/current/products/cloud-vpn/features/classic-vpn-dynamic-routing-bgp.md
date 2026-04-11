---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.866Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Classic VPN dynamic routing (BGP)"
feature_slug: "classic-vpn-dynamic-routing-bgp"
latest_feature_date: "2025-08-01"
deprecation_date: "2025-08-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "classic"
  - "vpn"
  - "dynamic"
  - "routing"
  - "bgp"
  - "supports"
  - "using"
  - "border"
---

# Classic VPN dynamic routing (BGP)

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Classic VPN supports dynamic routing using Border Gateway Protocol for VPN tunnels; Classic VPN supports creating tunnels that use dynamic routing with Border Gateway Protocol; deprecated on 2025-08-01.

## Extended Definition

Classic VPN supports dynamic routing using Border Gateway Protocol for VPN tunnels; Classic VPN supports creating tunnels that use dynamic routing with Border Gateway Protocol; deprecated on 2025-08-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### Classic VPN dynamic routing deprecation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As of August 1, 2025, the creation of Classic VPN tunnels using dynamic routing (BGP) is no longer supported, regardless of the gateway the tunnel connects to.
- Dynamic routing or Border Gateway Protocol (BGP) for Classic VPN tunnels is deprecated on August 1, 2025.
- Deprecated configurations You cannot create new Classic VPN tunnels that use dynamic routing (BGP) that is managed by a Cloud Router.
- Existing Classic VPN tunnels that use dynamic routing (BGP) aren't supported.

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 01, 2025 Deprecated Classic VPN full deprecation update As of August 1, 2025, dynamic routing or Border Gateway Protocol (BGP) for Classic VPN tunnels is deprecated.
- October 14, 2020 Deprecated Classic VPN partial deprecation Starting on October 31, 2021, you will no longer be able to do the following: Create new Classic VPN tunnels using static routing (route based or policy based) that connect to another Classic VPN gateway Create new Classic VPN tunnels using static routing (route based or policy based) that connect a Google Cloud Virtual Private Cloud (VPC) network to another cloud provider's network Create new Classic VPN tunnels using dynamic routing (all configurations) You can continue to create the following types of connections and get support for them: VPN tunnels using static routing from Classic VPN gateways to on-premises VPN gateways and from on-premises VPN gateways to Classic VPN gateways VPN tunnels using static routing from a Classic VPN gateway to and from a Compute Engine virtual machine (VM) acting as a VPN gateway Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will no longer receive regular updates or maintenance.
- October 05, 2021 Deprecated Classic VPN partial deprecation update Starting on March 31, 2022, you will no longer be able to create new Classic VPN tunnels that use dynamic routing (BGP) unless you are creating a specifically supported configuration.
- On or after March 31, 2022, you can still create the following Classic VPN configurations: Classic VPN tunnels that use dynamic routing and connect to VPN gateway software running inside a Compute Engine VM.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Your peer VPN gateway device must support dynamic Border Gateway Protocol (BGP) routing.
- Use the following procedures to configure cipher options for the various Cloud VPN gateways: To configure cipher options for Classic VPN using static routing, see Create a gateway and tunnel .
- When you create the HA VPN tunnels for a dual-stack HA VPN gateway, you can create either an IPv6 BGP session for IPv6 route exchange, or an IPv4 BGP session that exchanges IPv6 routes by using multiprotocol BGP (MP-BGP) .
- The unhealthy VPN tunnel in turn causes removal of the routes using this tunnel as a next-hop (BGP routes or static routes) triggering a failover of VM traffic to other VPN tunnels that are healthy.

