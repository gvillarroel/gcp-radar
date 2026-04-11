---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.736Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "BGP route policies"
feature_slug: "bgp-route-policies"
latest_feature_date: "2025-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
keywords:
  - "bgp"
  - "route"
  - "policies"
  - "let"
  - "you"
  - "define"
  - "policy"
  - "based"
---

# BGP route policies

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

BGP route policies let you define policy-based routing behavior for Cloud Router BGP sessions; BGP route policies let you define policy-based routing behavior for Cloud Router BGP sessions.

## Extended Definition

BGP route policies let you define policy-based routing behavior for Cloud Router BGP sessions; BGP route policies let you define policy-based routing behavior for Cloud Router BGP sessions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 10 action elements The following action operations accept lists: asPath.prependSequence communities.add communities.remove communities.replaceAll There isn't a limit on the number of actions in a term, number of terms in a single BGP route policy, or the number of BGP route policies.
- There isn't a limit on the number of actions in a term, number of terms in a single BGP route policy, or the number of BGP route policies.
- 35kB (35,000 bytes) Maximum number of terms of all applied BGP route policies within a single BGP peer or direction 1,000 This limit isn't split across resources, but combined.
- Home Documentation Networking Network Connectivity Cloud Router Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Advertised routes \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need finer-grained control, you can apply BGP route policies .
- HA VPNs with active-active tunnels In this example, suppose that you have a VPC network with the following configuration: A subnet in each of the following regions: us-central1 , europe-west1 , and us-west-1 One Cloud Router that manages two BGP sessions for two HA VPN tunnels in us-central1 One Cloud Router that manages two BGP sessions for two HA VPN tunnels in us-west1 The following diagram shows this example, including sample values for region-to-region costs: HA VPNs with active-active tunnels (click to enlarge).
- For example, see the following resources: Cisco: BGP Path Selection Fortinet: BGP Handbook Juniper: BGP Path Selection Route metric examples This section provides examples that show how region-to-region costs influence advertised MEDs when you use global dynamic routing.
- BGP attributes for advertised prefixes When a Cloud Router advertises prefixes to a BGP peer, it advertises the MED value and fills the MED attribute with a value based on the Cloud Router's internal priority for each prefix in the advertisement, or the BGP message.

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command: gcloud compute routers describe ROUTER-NAME In the output, check the following values: bgpPeers.enableIpv4 is true bgpPeers.ipv4NexthopAddress and bgpPeers.peerIpv4NexthopAddress are present Some on-premises IPv4 or IPv6 prefixes aren't reachable If you are experiencing traffic loss, ping errors, or other problems when attempting to reach on-premises IPv4 or IPv6 destinations that are within prefixes learned by Cloud Router, there are a variety of possible causes.
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.
- Home Documentation Networking Network Connectivity Cloud Router Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- The output is similar to the following; look for the routeStatus set to active : kind : compute#routerStatusResponse result : bestRoutesForRouter : - asPaths : - asLists : - 65200 pathSegmentType : AS SEQUENCE creationTimestamp : '2024-03-22T13:57:15.533-07:00' destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME nextHopIp : 169.254.73.246 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeStatus : ACTIVE routeType : BGP bgpPeerStatus : - advertisedRoutes : - destRange : 10.128.0.0/20 kind : compute#route network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/aneta-vpc nextHopIp : 169.254.73.245 nextHopVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME priority : 100 routeType : BGP enableIpv6 : false ipAddress : 169.254.73.245 linkedVpnTunnel : https://www.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /vpnTunnels/ VPN NAME md5AuthEnabled : false name : aneta-bgp numLearnedRoutes : 1 peerIpAddress : 169.254.73.246 state : Established status : UP uptime : 10 hours, 11 minutes, 0 seconds uptimeSeconds : '36660' network : https://www.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ VPC NAME The bestRoutesForRouter.routeStatus value displays ACTIVE for an active route, and DROPPED for a filtered route.

