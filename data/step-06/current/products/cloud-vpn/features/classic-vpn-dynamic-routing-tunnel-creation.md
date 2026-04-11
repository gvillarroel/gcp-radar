---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.880Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Classic VPN dynamic-routing tunnel creation"
feature_slug: "classic-vpn-dynamic-routing-tunnel-creation"
latest_feature_date: "2020-10-14"
deprecation_date: "2021-10-31"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "classic"
  - "vpn"
  - "dynamic"
  - "routing"
  - "tunnel"
  - "creation"
  - "supports"
  - "creating"
---

# Classic VPN dynamic-routing tunnel creation

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Classic VPN supports creating new tunnels that use dynamic routing; deprecated on 2021-10-31.

## Extended Definition

Classic VPN supports creating new tunnels that use dynamic routing; deprecated on 2021-10-31.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### Classic VPN dynamic routing deprecation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation](https://docs.cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As of August 1, 2025, the creation of Classic VPN tunnels using dynamic routing (BGP) is no longer supported, regardless of the gateway the tunnel connects to.
- Deprecated configurations You cannot create new Classic VPN tunnels that use dynamic routing (BGP) that is managed by a Cloud Router.
- Dynamic routing or Border Gateway Protocol (BGP) for Classic VPN tunnels is deprecated on August 1, 2025.
- Existing Classic VPN tunnels that use dynamic routing (BGP) aren't supported.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Use the configuration documented in Creating an HA VPN gateway and tunnel pair to a peer VPN for active-active routing configurations where the advertised route priorities of the two VPN tunnels from the Google Cloud side and the peer side match.
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- Add a BGP peer configuration to the interface for the first tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 0 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router; the address must be in the 2600:2d00:0:2::/63 IPv6 address range PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are learned by Cloud Router from the BGP peer; the address must be in the 2600:2d00:0:2::/63 IPv6 address range The command output looks similar to the following example: Creating peer [bgp-peer-tunnel-a-to-on-prem-if-0] in router [router-a]...done.
- Add a BGP peer configuration to the interface for the first tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 0 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range The command output looks similar to the following example: Creating peer [bgp-peer-tunnel-a-to-on-prem-if-0] in router [router-a]...done.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Use the following procedures to configure cipher options for the various Cloud VPN gateways: To configure cipher options for Classic VPN using static routing, see Create a gateway and tunnel .
- Classic VPN In contrast to HA VPN, Classic VPN gateways have a single interface, a single external IP address, and support tunnels that use static routing (policy based or route based).
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.
- IPv6 traffic Supports dual stack (IPv4 and IPv6) and IPv6-only configuration Not supported For information about how to move from Classic VPN to HA VPN, see Move from Classic VPN to HA VPN .

