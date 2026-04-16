---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.031Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Classic VPN dynamic routing (BGP)"
feature_slug: "classic-vpn-dynamic-routing-bgp"
latest_feature_date: "2025-08-01"
deprecation_date: "2025-08-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides"
keywords:
  - "classic"
  - "vpn"
  - "dynamic"
  - "routing"
  - "bgp"
  - "supports"
  - "using"
  - "border"
---

# Classic VPN dynamic routing (BGP)

Product: Cloud VPN
Coverage: MEDIUM

## Step 02 Summary

Classic VPN supports dynamic routing using Border Gateway Protocol for VPN tunnels; Classic VPN supports creating tunnels that use dynamic routing with Border Gateway Protocol; deprecated on 2025-08-01.

## Extended Definition

Classic VPN supports dynamic routing using Border Gateway Protocol for VPN tunnels; Classic VPN supports creating tunnels that use dynamic routing with Border Gateway Protocol; deprecated on 2025-08-01.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides)

## Supporting Pages

### Classic VPN dynamic routing deprecation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As of August 1, 2025, the creation of Classic VPN tunnels using dynamic routing (BGP) is no longer supported, regardless of the gateway the tunnel connects to.
- Dynamic routing or Border Gateway Protocol (BGP) for Classic VPN tunnels is deprecated on August 1, 2025.
- Deprecated configurations You cannot create new Classic VPN tunnels that use dynamic routing (BGP) that is managed by a Cloud Router.
- Existing Classic VPN tunnels that use dynamic routing (BGP) aren't supported.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Your peer VPN gateway device must support dynamic Border Gateway Protocol (BGP) routing.
- Use the following procedures to configure cipher options for the various Cloud VPN gateways: To configure cipher options for Classic VPN using static routing, see Create a gateway and tunnel .
- When you create the HA VPN tunnels for a dual-stack HA VPN gateway, you can create either an IPv6 BGP session for IPv6 route exchange, or an IPv4 BGP session that exchanges IPv6 routes by using multiprotocol BGP (MP-BGP) .
- The unhealthy VPN tunnel in turn causes removal of the routes using this tunnel as a next-hop (BGP routes or static routes) triggering a failover of VM traffic to other VPN tunnels that are healthy.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your peer VPN gateway supports Border Gateway Protocol (BGP).
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- The example command manually specifies the IPv4 and IPv6 BGP addresses: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "interfaces": [ { "name": "if-tunnel-a-to-on-prem-if-0 ipv4", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipRange": "169.254.0.1/30" }, { "name": "if-tunnel-a-to-on-prem-if-0 ipv6", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipRange": "fdff:1::/126" } ] } The following example adds an IPv4 BGP interface and an IPv6 BGP interface to the same linkedVpnTunnel with automatically assigned IPv4 and IPv6 BGP addresses: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "interfaces": [ { "name": "if-tunnel-a-to-on-prem-if-0 ipv4", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipVersion": "IPV4" }, { "name": "if-tunnel-a-to-on-prem-if-0 ipv6", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipVersion": "IPV6" } ] } To add the BGP peers to the Cloud Router for each VPN tunnel, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .

### Use third-party VPNs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fortinet FortiGate 300C with Classic VPN Supports static routes or dynamic routing with Cloud Router.
- Amazon Web Services with Classic VPN Supports static routes or dynamic routing with Cloud Router.
- If the third-party solution supports dynamic (BGP) routing, the guide includes configuration instructions for Cloud Router .
- M-Z Guide Notes Microsoft Azure with HA VPN Supports dynamic routing with Cloud Router only.

