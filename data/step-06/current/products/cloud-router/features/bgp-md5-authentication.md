---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.315Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "BGP MD5 authentication"
feature_slug: "bgp-md5-authentication"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
keywords:
  - "bgp"
  - "md5"
  - "authentication"
  - "secures"
  - "router"
  - "sessions"
  - "with"
  - "based"
---

# BGP MD5 authentication

Product: Cloud Router
Coverage: MEDIUM

## Step 02 Summary

BGP MD5 authentication secures Cloud Router BGP sessions with MD5-based peer authentication; BGP MD5 authentication secures Cloud Router BGP sessions with MD5-based peer authentication.

## Extended Definition

BGP MD5 authentication secures Cloud Router BGP sessions with MD5-based peer authentication; BGP MD5 authentication secures Cloud Router BGP sessions with MD5-based peer authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)

## Supporting Pages

### Establish BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/configuring-bgp)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BGP authentication When you configure BGP for some hybrid connectivity resources, you can optionally configure the router's peering sessions to use MD5 authentication.
- Because Partner Interconnect requires a public ASN, and all other types of interface require private ASNs, a Cloud Router that manages BGP sessions for a VLAN attachment on Partner Interconnect cannot manage BGP sessions for any other type of interface.
- Supported BGP sessions Cloud Router supports two types of BGP sessions: IPv4 BGP sessions IPv6 BGP sessions IPv4 BGP sessions By default, when you create a BGP session in Cloud Router, you create an IPv4 BGP session.
- This configuration ensures that the BGP sessions share the same fate with the dataplane and stay synchronized correctly with the status of the routes in terms of availability.

### Troubleshoot BGP peering \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For additional troubleshooting information, see the following: Troubleshoot BGP sessions Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP peer status is MD5 AUTH INTERNAL PROBLEM Sometimes the status of a BGP peer includes the following values: md5AuthEnabled : true statusReason : MD5 AUTH INTERNAL PROBLEM The first value indicates that you have successfully configured MD5 authentication.
- Troubleshoot BGP peering This guide is for troubleshooting peering issues, such as MD5 authentication or on-premises routes without MED values having priority.
- However, the second value—a statusReason value of MD5 AUTH INTERNAL PROBLEM —indicates that an internal error has prevented Cloud Router from being able to configure MD5 authentication.
- Home Documentation Networking Network Connectivity Cloud Router Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= CUSTOM ROUTE PRIORITY Optional: If you want to enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Manual To manually allocate IPv6 addresses to the BGP session associated with the Cloud Router interface and BGP peer, complete the following steps.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= CUSTOM ROUTE PRIORITY If you want to use MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Manual To manually allocate the IPv4 BGP addresses associated with the Cloud Router interface and BGP peer, complete the following steps.
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "md5AuthenticationKeys": [ { "name": "bgppeer-1-key", "key": "secret key value" } ], } { "bgpPeers": [ { "interfaceName": "if-tunnel-a-to-on-prem-if-0", "ipAddress": "fdff:1::1", "name": "bgp-peer-tunnel-a-to-on-prem-if-0", "peerAsn": 65002, "peerIpAddress": "fdff:1::2", "advertiseMode": "DEFAULT", "md5AuthenticationKeyName": "bgppeer-1-key" } ] } Both IPv4 BGP and IPv6 BGP sessions Use the following steps to create both an IPv4 BGP session and an IPv6 BGP session that run in parallel in the same HA VPN tunnel.
- PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "md5AuthenticationKeys": [ { "name": "bgppeer-1-key", "key": "secret key value" } ], } { "bgpPeers": [ { "interfaceName": "if-tunnel-a-to-on-prem-if-0", "ipAddress": "169.254.0.1", "name": "bgp-peer-tunnel-a-to-on-prem-if-0", "peerAsn": 65002, "peerIpAddress": "169.254.0.2", "advertiseMode": "DEFAULT", "md5AuthenticationKeyName": "bgppeer-1-key" } ] } IPv6 BGP sessions Console To create BGP sessions, follow these steps: Click Configure BGP session .

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- Local ASN conflicts with peer ASN specified by a router in the same region and network." The Cloud Router is attempting to establish a BGP session with an on-premises device that has the same ASN as the Cloud Router.
- Home Documentation Networking Network Connectivity Cloud Router Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Ensure that the Cloud Router is configured correctly and that your on-premises router is configured with the matching IPv6 BGP addresses.

