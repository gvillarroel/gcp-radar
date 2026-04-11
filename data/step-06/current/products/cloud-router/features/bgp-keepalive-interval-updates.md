---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.740Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "BGP keepalive interval updates"
feature_slug: "bgp-keepalive-interval-updates"
latest_feature_date: "2021-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions"
keywords:
  - "bgp"
  - "keepalive"
  - "interval"
  - "updates"
  - "let"
  - "you"
  - "modify"
  - "the"
---

# BGP keepalive interval updates

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

BGP keepalive interval updates let you modify the keepalive interval for Cloud Router BGP sessions.

## Extended Definition

BGP keepalive interval updates let you modify the keepalive interval for Cloud Router BGP sessions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)

## Supporting Pages

### "Create a Cloud Router to connect a VPC network to a peer network \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a Cloud Router that's associated with a region of a VPC network, use the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers { "name": " ROUTER NAME ", "network": " NETWORK ", "encryptedInterconnectRouter": True False, "bgp": { "asn": " ASN NUMBER ", "advertiseMode": " ADVERTISEMENT MODE ", "advertisedGroups": [ALL SUBNETS], "advertisedIpRanges": [ { "range": CUSTOM ADVERTISED RANGE , "description": CUSTOM ADVERTISED RANGE DESCRIPTION }, ... ], "identifierRange": ROUTER IDENTIFIER RANGE , "keepaliveInterval": KEEPALIVE TIMER } } Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project ID for the project that contains the Cloud Router NETWORK : the VPC network that contains the Cloud Router REGION : the region that contains the Cloud Router ASN NUMBER : any private ASN ( 64512 - 65534 , 4200000000 - 4294967294 ) that you aren't already using in the on-premises network Cloud Router requires you to use a private ASN, but your on-premises ASN can be public or private.
- To create a Cloud Router that's associated with a region of a VPC network, use the following command: gcloud compute routers create ROUTER NAME \ --project= PROJECT ID \ --network= NETWORK \ --region= REGION \ --asn= ASN NUMBER \ [--advertisement-mode= ADVERTISEMENT MODE ] \ [--set-advertisement-groups=ALL SUBNETS] \ [--set-advertisement-ranges= CUSTOM ADVERTISED RANGES ] \ [--bgp-identifier-range= ROUTER IDENTIFIER RANGE ] \ [--keepalive-interval= KEEPALIVE TIMER ] \ [--encrypted-interconnect-router] Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project ID for the project that contains the Cloud Router NETWORK : the VPC network that contains the Cloud Router REGION : the region that contains the Cloud Router ASN NUMBER : any private ASN ( 64512 - 65534 , 4200000000 - 4294967294 ) that you aren't already using in the on-premises network Cloud Router requires you to use a private ASN, but your on-premises ASN can be public or private.
- If you omit the --keepalive-interval flag, Cloud Router uses a 20 second BGP keepalive timer.
- If you omit the --keepalive-interval flag, Cloud Router uses a 20 second BGP keepalive timer.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= CUSTOM ROUTE PRIORITY Optional: If you want to enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Manual To manually allocate IPv6 addresses to the BGP session associated with the Cloud Router interface and BGP peer, complete the following steps.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= CUSTOM ROUTE PRIORITY If you want to use MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Manual To manually allocate the IPv4 BGP addresses associated with the Cloud Router interface and BGP peer, complete the following steps.
- Click Save BGP configuration . gcloud To create BGP sessions, follow these steps: In the commands, replace the following: ROUTER INTERFACE NAME 0 ipv4 and ROUTER INTERFACE NAME 0 ipv6 : names for the first pair of Cloud Router BGP interfaces that share the same tunnel; it can be helpful to use names related to the tunnel names configured previously ROUTER INTERFACE NAME 1 ipv4 , ROUTER INTERFACE NAME 1 ipv6 : names for the second set of Cloud Router BGP interfaces TUNNEL NAME 0 and TUNNEL NAME 1 : the tunnel associated with the HA VPN gateway interface that you configured IP PREFIXES and CUSTOM ROUTE PRIORITY : values that let you manually specify learned routes for a BGP session; for more information about this feature, see Learned routes .

### Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-sessions)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This IPv6 address is used as the BGP peering address with Cloud Router for a HA VPN tunnel or a Dedicated Interconnect VLAN attachment. bgpPeers.ipAddress is an IPv6 address assigned to the interface of the Cloud Router and matches the value configured as the peer BGP IP address on your on-premises router. bgpPeers.peerAsn matches the ASN of your on-premises router. bgp.asn matches the peer ASN configured on your on-premises router.
- For additional troubleshooting information, see the following: Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP session failed to establish Check that the settings on your on-premises BGP router and the settings on your Cloud Router are correct.
- Run the following command: gcloud compute routers describe ROUTER-NAME In the command output, check the following values: bgpPeers.peerIpAddress is an IPv6 address assigned to the external interface on your on-premises router.
- IPv6 BGP session fails to establish If you are experiencing difficulty establishing a connection with your IPv6 BGP peer, do the following: Verify that the corresponding VLAN attachment or HA VPN tunnel is connected.

