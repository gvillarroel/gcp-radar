---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.314Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Custom learned routes"
feature_slug: "custom-learned-routes"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics"
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
Coverage: MEDIUM

## Step 02 Summary

Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer; Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer.

## Extended Definition

Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer; Custom learned routes let you manually specify routes for a BGP session and have Cloud Router treat them as learned from the peer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save BGP configuration . gcloud To create BGP sessions, follow these steps: In the commands, replace the following: ROUTER INTERFACE NAME 0 ipv4 and ROUTER INTERFACE NAME 0 ipv6 : names for the first pair of Cloud Router BGP interfaces that share the same tunnel; it can be helpful to use names related to the tunnel names configured previously ROUTER INTERFACE NAME 1 ipv4 , ROUTER INTERFACE NAME 1 ipv6 : names for the second set of Cloud Router BGP interfaces TUNNEL NAME 0 and TUNNEL NAME 1 : the tunnel associated with the HA VPN gateway interface that you configured IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .
- Add a BGP peer configuration to the interface; replace PEER NAME 0 with a name for the peer, and replace PEER ASN ` with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --peer-ip-address= PEER BGP IPV6 0 \ --region= REGION If you want to specify learned routes for the peer, add the --set-custom-learned-route-ranges flag.

### "Troubleshoot BGP routes and route selection \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-routes)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check for inactive custom learned routes If you are unable to reach an on-premises destination using a configured custom learned route, do the following: Check that the route is configured properly on the BGP session.
- Check for filtered learned routes To see if a route is filtered, run the following command: gcloud compute routers get-status ROUTER NAME \ --region = REGION Replace the following: ROUTER NAME : the name of your Cloud Router.
- Check quotas and limits Check that your Cloud Routers haven't exceeded the quotas for learned routes.
- If you have exceeded your quota for learned routes, IPv6 prefixes are dropped before IPv4 prefixes.

### Quotas and limits \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/quotas](https://docs.cloud.google.com/network-connectivity/docs/router/quotas)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a given region in a VPC network, the maximum number of unique IP prefixes that can be configured as custom learned routes; this limit allows for the same ranges to be used on multiple peers 10 For more information about this feature, see Custom learned routes .
- 500 For a given BGP session, the maximum number of custom learned routes 10 For more information about this feature, see Custom learned routes .
- Task Required role Check quotas for a project One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Viewer ( roles/servicemanagement.quotaViewer ) Modify quotas, request additional quota One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Administrator ( roles/servicemanagement.quotaAdmin ) A custom role with the serviceusage.quotas.update permission Check your quota Console In the Google Cloud console, go to the Quotas page.
- For a given Cloud Router, the maximum number of custom advertised routes per BGP session 200 If the custom advertised routes are identical for all BGP sessions on a Cloud Router, this limit represents the total number of unique IPv4 and IPv6 custom advertised routes for the Cloud Router.

### View logs and metrics \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event description Logging advanced filter Migrating or restarting a Cloud Router process resource.type="gce router" "task activated" Adding learned routes resource.type="gce router" "received by cloud router" Removing learned routes resource.type="gce router" "deleted from cloud router" Exporting advertised routes resource.type="gce router" ("Route Event" AND "Advertising prefix") BGP peering came up resource.type="gce router" ("BGP peering" AND "came up") BGP peering came up with MD5 authentication resource.type="gce router" ("BGP peering" AND "came up" AND "MD5 authentication enabled") BGP peering went down resource.type="gce router" ("BGP peering" AND "went down") BGP peering went down because the link went down on the Google peering edge router resource.type="gce router" ("BGP peering" AND "went down" AND "LINK DOWN") A BGP session was shut down due to excessive received routes resource.type="gce router" ("NOTIFICATION 6/1") severity="CRITICAL" A Cloud Router dynamic route prefix quota has been exceeded resource.type="gce network region" ("No more routes" AND "can be programmed") severity="ERROR" A route was dropped because of a quota issue resource.type="gce network region" severity="ERROR" jsonPayload.affectedResource.routes.nextHopIpAddresses=" PEER IP ADDRESS " A BFD session waiting for peer resource.type="gce router" ("BFD Event" AND "bfd enabled, state [Init, NoDiagnostic]") A BFD session came up resource.type="gce router" ("BFD Event" AND "to [Up, NoDiagnostic]") A BFD session went down (Rx Timer expired) resource.type="gce router" ("BFD Event" AND "to [Down, ControlDetectionTimeExpired]") A BFD session went down (Peer's state is Down or AdminDown ) resource.type="gce router" ("BFD Event" AND "to [Down, NeighborSessionDown]") A BFD session is disabled locally resource.type="gce router" ("BFD Event" AND "bfd disabled") Metrics Cloud Router publishes metrics to Cloud Monitoring .
- After sampling, data is not visible for up to 60 seconds. routing mode : Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions]. dynamic routes/learned routes/dropped unique destinations BETA (project) Unique destinations dropped GAUGE , INT64 , 1 gce network region The number of unique destinations dropped in a network region due to exceeding quota.
- After sampling, data is not visible for up to 60 seconds. routing mode : Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions]. dynamic routes/learned routes/unique destinations limit BETA (project) Unique destinations limit GAUGE , INT64 , 1 gce network region The maximum number of unique destinations allowed by route quota for this network region.
- After sampling, data is not visible for up to 60 seconds. routing mode : Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions]. dynamic routes/learned routes/used unique destinations BETA (project) Unique destinations used GAUGE , INT64 , 1 gce network region Number of unique destinations used by learned routes for this network region.

