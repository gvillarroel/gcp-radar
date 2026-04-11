---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.738Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Custom learned routes"
feature_slug: "custom-learned-routes"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/release-notes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
keywords:
  - "custom"
  - "learned"
  - "routes"
  - "let"
  - "you"
  - "manually"
  - "specify"
  - "for"
---

# Custom learned routes

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer; Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer.

## Extended Definition

Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer; Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/router/release-notes](https://docs.cloud.google.com/network-connectivity/docs/router/release-notes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save BGP configuration . gcloud To create BGP sessions, follow these steps: In the commands, replace the following: ROUTER INTERFACE NAME 0 ipv4 and ROUTER INTERFACE NAME 0 ipv6 : names for the first pair of Cloud Router BGP interfaces that share the same tunnel; it can be helpful to use names related to the tunnel names configured previously ROUTER INTERFACE NAME 1 ipv4 , ROUTER INTERFACE NAME 1 ipv6 : names for the second set of Cloud Router BGP interfaces TUNNEL NAME 0 and TUNNEL NAME 1 : the tunnel associated with the HA VPN gateway interface that you configured IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- Add a BGP peer configuration to the interface; replace PEER NAME 0 with a name for the peer, and replace PEER ASN ` with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --peer-ip-address= PEER BGP IPV6 0 \ --region= REGION If you want to specify learned routes for the peer, add the --set-custom-learned-route-ranges flag.

### Cloud Router release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/release-notes](https://docs.cloud.google.com/network-connectivity/docs/router/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature lets you configure a Border Gateway Protocol (BGP) session to include learned routes that you manually specify.
- Custom learned routes can be helpful if you want to avoid the limitations of static routes .
- For more information, see Custom learned routes .
- For more information, see Custom learned routes .

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.
- Check for filtered learned routes To see if a route is filtered, run the following command: gcloud compute routers get-status ROUTER NAME \ --region = REGION Replace the following: ROUTER NAME : the name of your Cloud Router.
- Check quotas and limits Check that your Cloud Routers haven't exceeded the quotas for learned routes.
- If you have exceeded your quota for learned routes, IPv6 prefixes are dropped before IPv4 prefixes.

