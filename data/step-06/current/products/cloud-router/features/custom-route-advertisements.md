---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.317Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Custom route advertisements"
feature_slug: "custom-route-advertisements"
latest_feature_date: "2018-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
keywords:
  - "custom"
  - "route"
  - "advertisements"
  - "let"
  - "you"
  - "specify"
  - "which"
  - "routes"
---

# Custom route advertisements

Product: Cloud Router
Coverage: MEDIUM

## Step 02 Summary

Custom route advertisements let you specify which routes Cloud Router advertises; Custom route advertisements let you specify which routes Cloud Router advertises.

## Extended Definition

Custom route advertisements let you specify which routes Cloud Router advertises; Custom route advertisements let you specify which routes Cloud Router advertises.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)

## Supporting Pages

### Advertised routes \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Router custom advertisement mode Gives you complete control over IP address advertisements as described in Custom advertisement .
- You can use Cloud Router custom advertisement mode or per-BGP-session custom advertisement mode to advertise routes that include default route prefixes, such as 0.0.0.0/0 for IPv4 routes or ::/0 for IPv6 routes, for all BGP sessions on a Cloud Router.
- BGP session custom advertisement mode Gives you complete control over IP address advertisements as described in Custom advertisement .
- Effective advertisements The following table describes how router level and BGP session level advertisement modes interact to produce the effective advertisement behavior of the BGP session: Cloud Router advertisement mode BGP session advertisement mode Effective advertised prefixes on the BGP session default default The BGP session inherits the advertisement configuration of the Cloud Router, and the Cloud Router advertises subnet ranges as described in Subnet range advertisement . custom default The BGP session inherits the advertisement configuration of the Cloud Router, and the Cloud Router advertises prefixes as described in Custom advertisement . default or custom custom The BGP session doesn't inherit the advertisement configuration of the Cloud Router.

### "Create a Cloud Router to connect a VPC network to a peer network \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are using Cloud Router with Partner Interconnect, you must specify ASN 16550 . --advertisement-mode=CUSTOM : sets the router-level advertisement mode to CUSTOM so that you can specify router-level custom route advertisements.
- Use the --advertisement-mode=CUSTOM flag to set the router-level advertisement mode to CUSTOM so that you can specify router-level custom route advertisements.
- The bgp.advertiseMode: CUSTOM flag sets the router-level advertisement mode to CUSTOM so that you can specify router-level custom route advertisements.
- Optional: To specify custom advertised routes, go to the Advertised routes section.

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.
- In situations where the number of routes exceeds the available quota by a large amount, it makes sense to do both: Configure your on-premises routers to summarize the routes that you export so that those routes advertise fewer destinations (CIDRs).
- Check for filtered learned routes To see if a route is filtered, run the following command: gcloud compute routers get-status ROUTER NAME \ --region = REGION Replace the following: ROUTER NAME : the name of your Cloud Router.
- In this case, there isn't an iBGP session between Cloud Routers that share the same VPC network, and Cloud Router only advertises VPC subnets and custom configured routes.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also specify which routes are advertised by using custom advertisements : Add the --advertisement-mode=CUSTOM flag ( gcloud ) or the advertiseMode: custom flag (API).
- Click Save BGP configuration . gcloud To create BGP sessions, follow these steps: In the commands, replace the following: ROUTER INTERFACE NAME 0 ipv4 and ROUTER INTERFACE NAME 0 ipv6 : names for the first pair of Cloud Router BGP interfaces that share the same tunnel; it can be helpful to use names related to the tunnel names configured previously ROUTER INTERFACE NAME 1 ipv4 , ROUTER INTERFACE NAME 1 ipv6 : names for the second set of Cloud Router BGP interfaces TUNNEL NAME 0 and TUNNEL NAME 1 : the tunnel associated with the HA VPN gateway interface that you configured IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .

