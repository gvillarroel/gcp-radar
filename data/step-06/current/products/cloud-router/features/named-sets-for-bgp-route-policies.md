---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.736Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Named sets for BGP route policies"
feature_slug: "named-sets-for-bgp-route-policies"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
keywords:
  - "named"
  - "sets"
  - "for"
  - "bgp"
  - "route"
  - "policies"
  - "let"
  - "you"
---

# Named sets for BGP route policies

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

Named sets let you group BGP communities or prefixes so they can be managed and referenced as a single entity in BGP route policies.

## Extended Definition

Named sets let you group BGP communities or prefixes so they can be managed and referenced as a single entity in BGP route policies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)

## Supporting Pages

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.
- The output is similar to the following; look for the routeStatus set to active : kind : compute#routerStatusResponse result : bestRoutesForRouter : - asPaths : - asLists : - 65200 pathSegmentType : AS SEQUENCE creationTimestamp : '2024-03-22T13:57:15.533-07:00' destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME nextHopIp : 169.254.73.246 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeStatus : ACTIVE routeType : BGP bgpPeerStatus : - advertisedRoutes : - destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/aneta-vpc nextHopIp : 169.254.73.245 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeType : BGP enableIpv6 : false ipAddress : 169.254.73.245 linkedVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME md5AuthEnabled : false name : aneta-bgp numLearnedRoutes : 1 peerIpAddress : 169.254.73.246 state : Established status : UP uptime : 10 hours, 11 minutes, 0 seconds uptimeSeconds : '36660' network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME The bestRoutesForRouter.routeStatus value displays ACTIVE for an active route, and DROPPED for a filtered route.
- Run the following command: gcloud compute routers describe ROUTER-NAME In the output, check the following values: bgpPeers.enableIpv4 is true bgpPeers.ipv4NexthopAddress and bgpPeers.peerIpv4NexthopAddress are present Some on-premises IPv4 or IPv6 prefixes aren't reachable If you are experiencing traffic loss, ping errors, or other problems when attempting to reach on-premises IPv4 or IPv6 destinations that are within prefixes learned by Cloud Router, there are a variety of possible causes.
- For additional troubleshooting information, see the following: Troubleshoot BGP sessions Troubleshoot BGP peering Troubleshoot Cloud Router log messages IPv6 BGP session is established but does not exchange IPv4 routes Verify that the VLAN attachment or HA VPN gateway has the required stack type of IPV4 IPV6 .

### Quotas and limits \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Maximum number of BGP peers for each Cloud Router in a given VPC network and region 128 The BGP peer can be any of the following: A Cloud VPN tunnel using dynamic routing A VLAN attachment for any of the following: Dedicated Interconnect Partner Interconnect Cross-Cloud Interconnect A Router appliance within Network Connectivity Center Maximum number of prefixes that Cloud Router accepts from a single BGP peer 5,000 If a BGP peer advertises more than 5,000 prefixes, Cloud Router resets the BGP session.
- The maximum number of elements per named set. ( [Preview] ) 1000 Maximum queries per minute for list-bgp-routes calls on a single Cloud Router 1500 This quota is from compute.googleapis.com/list requests per region .
- For a given Cloud Router, the maximum number of named sets. ( [Preview] ) 500 Named sets contribute to the overall limit on the size of policy related resources on the router.
- For more information about these quotas, including metrics that you can use to understand your current usage, see Troubleshoot BGP routes and route selection .

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- BGP resets that originate from Google Cloud appear on your router Cloud Router tasks are software processes in the Google Cloud control plane that are normally migrated from machine to machine.
- Cloud Logging adds entries for the affected router when BGP resets occur.

