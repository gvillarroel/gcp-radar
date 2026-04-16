---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.317Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "BGP session administrative control"
feature_slug: "bgp-session-administrative-control"
latest_feature_date: "2021-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting"
keywords:
  - "bgp"
  - "session"
  - "administrative"
  - "control"
  - "lets"
  - "you"
  - "enable"
  - "and"
---

# BGP session administrative control

Product: Cloud Router
Coverage: MEDIUM

## Step 02 Summary

BGP session administrative control lets you enable and disable Cloud Router BGP sessions.

## Extended Definition

BGP session administrative control lets you enable and disable Cloud Router BGP sessions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting)

## Supporting Pages

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- BGP session closes If your on-premises router advertises more than 5,000 prefixes, then the Cloud Router closes the BGP session and does not attempt to re-establish it until the BGP peering is reset manually.
- The IPv4 and IPv6 addresses that you can use for a BGP session depend on the product you use.
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.

### Establish BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable IPv6 route exchange on your IPv4 BGP session, you need to configure a IPv4 and IPv6 (dual stack) HA VPN tunnel or Dedicated Interconnect VLAN attachment.
- BGP peering addresses BGP sessions for the following products use IPv4 link-local addresses in the 169.254.0.0/16 range as BGP peering addresses: For Dedicated Interconnect, you can either specify candidate IPv4 link-local addresses for BGP peering addresses, or Google Cloud can select unused IPv4 link-local addresses automatically.
- You configure these BGP sessions by assigning two interfaces on Cloud Router, one IPv4 and one IPv6, to the same HA VPN tunnel or Cloud Interconnect VLAN attachment.
- Establish BGP sessions Cloud Router uses Border Gateway Protocol (BGP) to exchange routes between your Virtual Private Cloud (VPC) network and a remote network.

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command: gcloud compute routers describe ROUTER-NAME In the output, check the following values: bgpPeers.enableIpv4 is true bgpPeers.ipv4NexthopAddress and bgpPeers.peerIpv4NexthopAddress are present Some on-premises IPv4 or IPv6 prefixes aren't reachable If you are experiencing traffic loss, ping errors, or other problems when attempting to reach on-premises IPv4 or IPv6 destinations that are within prefixes learned by Cloud Router, there are a variety of possible causes.
- The BGP session is enabled to advertise IPv6 routes and the next-hop is an IPv6 address.
- The output is similar to the following; look for the routeStatus set to active : kind : compute#routerStatusResponse result : bestRoutesForRouter : - asPaths : - asLists : - 65200 pathSegmentType : AS SEQUENCE creationTimestamp : '2024-03-22T13:57:15.533-07:00' destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME nextHopIp : 169.254.73.246 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeStatus : ACTIVE routeType : BGP bgpPeerStatus : - advertisedRoutes : - destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/aneta-vpc nextHopIp : 169.254.73.245 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeType : BGP enableIpv6 : false ipAddress : 169.254.73.245 linkedVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME md5AuthEnabled : false name : aneta-bgp numLearnedRoutes : 1 peerIpAddress : 169.254.73.246 state : Established status : UP uptime : 10 hours, 11 minutes, 0 seconds uptimeSeconds : '36660' network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME The bestRoutesForRouter.routeStatus value displays ACTIVE for an active route, and DROPPED for a filtered route.
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- BGP session closes If your on-premises router advertises more than 5,000 prefixes, then the Cloud Router closes the BGP session and does not attempt to re-establish it until the BGP peering is reset manually.
- The IPv4 and IPv6 addresses that you can use for a BGP session depend on the product you use.
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.

