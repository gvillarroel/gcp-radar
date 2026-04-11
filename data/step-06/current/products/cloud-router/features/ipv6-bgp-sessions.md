---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.737Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "IPv6 BGP sessions"
feature_slug: "ipv6-bgp-sessions"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network"
keywords:
  - "ipv6"
  - "bgp"
  - "sessions"
  - "enable"
  - "router"
  - "to"
  - "establish"
  - "peerings"
---

# IPv6 BGP sessions

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses; IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses.

## Extended Definition

IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses; IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)

## Supporting Pages

### Establish BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You configure these BGP sessions by assigning two interfaces on Cloud Router, one IPv4 and one IPv6, to the same HA VPN tunnel or Cloud Interconnect VLAN attachment.
- Establish BGP sessions Cloud Router uses Border Gateway Protocol (BGP) to exchange routes between your Virtual Private Cloud (VPC) network and a remote network.
- To enable or disable dual-stack traffic in BGP sessions, see Configure multiprotocol BGP for IPv4 or IPv6 BGP sessions .
- Supported BGP sessions Cloud Router supports two types of BGP sessions: IPv4 BGP sessions IPv6 BGP sessions IPv4 BGP sessions By default, when you create a BGP session in Cloud Router, you create an IPv4 BGP session.

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- Run the following command: gcloud compute routers describe ROUTER-NAME In the command output, check the following values: bgpPeers.peerIpAddress is an IPv6 address assigned to the external interface on your on-premises router.
- Local ASN conflicts with peer ASN specified by a router in the same region and network." The Cloud Router is attempting to establish a BGP session with an on-premises device that has the same ASN as the Cloud Router.

### "Create a Cloud Router to connect a VPC network to a peer network \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Establish BGP sessions When you set up a network connectivity product with Cloud Router, you establish Border Gateway Protocol (BGP) sessions between the Cloud Router and the router on the peer network.
- If omitted, Cloud Routers with IPv4 BGP sessions use one of the IPv4 BGP addresses as the BGP identifier, and adding the first IPv6 interface to this Cloud Router populates the field automatically.
- To establish BGP sessions between your Cloud Router and the router on your peer network, see Establish BGP sessions .
- Establish Border Gateway Protocol (BGP) sessions with a router on the peer network.

