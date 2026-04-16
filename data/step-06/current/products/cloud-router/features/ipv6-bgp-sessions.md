---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.313Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "IPv6 BGP sessions"
feature_slug: "ipv6-bgp-sessions"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
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
Coverage: MEDIUM

## Step 02 Summary

IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses; IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses.

## Extended Definition

IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses; IPv6 BGP sessions enable Cloud Router to establish BGP peerings using IPv6 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- [https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)

## Supporting Pages

### Establish BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You configure these BGP sessions by assigning two interfaces on Cloud Router, one IPv4 and one IPv6, to the same HA VPN tunnel or Cloud Interconnect VLAN attachment.
- Establish BGP sessions Cloud Router uses Border Gateway Protocol (BGP) to exchange routes between your Virtual Private Cloud (VPC) network and a remote network.
- To enable or disable dual-stack traffic in BGP sessions, see Configure multiprotocol BGP for IPv4 or IPv6 BGP sessions .
- Supported BGP sessions Cloud Router supports two types of BGP sessions: IPv4 BGP sessions IPv6 BGP sessions IPv4 BGP sessions By default, when you create a BGP session in Cloud Router, you create an IPv4 BGP session.

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- Run the following command: gcloud compute routers describe ROUTER-NAME In the command output, check the following values: bgpPeers.peerIpAddress is an IPv6 address assigned to the external interface on your on-premises router.
- Local ASN conflicts with peer ASN specified by a router in the same region and network." The Cloud Router is attempting to establish a BGP session with an on-premises device that has the same ASN as the Cloud Router.

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- Run the following command: gcloud compute routers describe ROUTER-NAME In the command output, check the following values: bgpPeers.peerIpAddress is an IPv6 address assigned to the external interface on your on-premises router.
- Local ASN conflicts with peer ASN specified by a router in the same region and network." The Cloud Router is attempting to establish a BGP session with an on-premises device that has the same ASN as the Cloud Router.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.
- For the second VPN tunnel Add a second interface to the Cloud Router: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the second interface for the second tunnel ; replace PEER NAME 1 with a name for the peer VPN interface, and replace PEER ASN with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 Manual When you create IPv6 BGP sessions that use MP-BGP, you can manually configure IPv4 next-hop addresses for both Cloud Router and the BGP peer.
- Add a BGP peer configuration to the interface for the first tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 0 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router; the address must be in the 2600:2d00:0:2::/63 IPv6 address range PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are learned by Cloud Router from the BGP peer; the address must be in the 2600:2d00:0:2::/63 IPv6 address range The command output looks similar to the following example: Creating peer [bgp-peer-tunnel-a-to-on-prem-if-0] in router [router-a]...done.

