---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.871Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Cloud VPN regional availability in me-central1"
feature_slug: "cloud-vpn-regional-availability-in-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn"
keywords:
  - "vpn"
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "central1"
  - "is"
  - "available"
---

# Cloud VPN regional availability in me-central1

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN is available in the me-central1 region (Doha, Qatar).

## Extended Definition

Cloud VPN is available in the me-central1 region (Doha, Qatar).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- In the following commands, replace the following: GOOGLE BGP IPV4 0 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV4 0 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 0 GOOGLE BGP IPV6 0 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV6 0 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 0 GOOGLE BGP IPV4 1 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV4 1 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 1 GOOGLE BGP IPV6 1 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV6 1 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 1 For the first VPN tunnel Add an interface with an IPv4 address to the Cloud Router; replace ROUTER INTERFACE NAME 0 ipv4 with a name for the interface: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 0 ipv4 \ --vpn-tunnel= TUNNEL NAME 0 \ --ip-address= GOOGLE BGP IPV4 0 \ --mask-length 30 \ --region= REGION The command output looks similar to the following example: Updated [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].
- In the following commands, replace the following: GOOGLE BGP IP 0 : the BGP IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IP 0 represents the BGP IPv4 address of its peer GOOGLE BGP IP 1 : the BGP IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IPv4 address of its peer MASK LENGTH : 30 ; Cloud Router must use a unique /30 subnet from the 169.254.0.0/16 IPv4 address range For the first VPN tunnel Add an interface to the Cloud Router; replace ROUTER INTERFACE NAME 0 with a name for the interface: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 0 \ --vpn-tunnel= TUNNEL NAME 0 \ --ip-address= GOOGLE BGP IP 0 \ --mask-length 30 \ --region= REGION The command output looks similar to the following example: Updated [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].
- To create a Cloud Router, run the following command: gcloud compute routers create ROUTER NAME \ --region= REGION \ --network= NETWORK \ --asn= GOOGLE ASN Replace the following: ROUTER NAME : the name of the Cloud Router in the same region as the Cloud VPN gateway REGION : the Google Cloud region where you create the gateway and tunnel NETWORK : the name of your VPC network GOOGLE ASN : any private ASN ( 64512 through 65534 , 4200000000 through 4294967294 ) that you are not already using in the peer network; the Google ASN is used for all BGP sessions on the same Cloud Router, and it cannot be changed later The router that you create looks similar to the following example output: Created [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 99.99% HA VPN to Compute Engine VM instances in multiple zones Connect an HA VPN gateway to Compute Engine VM instances with external IP addresses 99.9% HA VPN to a single Compute Engine VM instance Connect an HA VPN gateway to only one Compute Engine VM instance with an external IP address The availability SLA is determined by the availability SLA provided for a single VM instance of memory-optimized machine family for Compute Engine.
- HA VPN to one peer (on-premises) VPN gateway with one IP address (click to enlarge) Configure for 99.99% availability SLA To meet the 99.99% availability SLA on the Google Cloud side, there must be a tunnel from each of the two interfaces on the HA VPN gateway to the corresponding interfaces on the peer gateway.
- Configuring only one tunnel from a single HA VPN interface to a single interface on the peer gateway doesn't provide enough redundancy to meet the availability SLA because there is an unused interface on the HA VPN gateway, which does not have a tunnel configured on it.
- This document describes recommended topologies and the corresponding availability Service Level Agreement (SLA) for each HA VPN topology.

### Move from Classic VPN to HA VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create Cloud Routers When configuring a new HA VPN gateway, you can create a new Cloud Router, or you can use an existing Cloud Router with existing Cloud VPN tunnels or VLAN attachments.
- Home Documentation Networking Network Connectivity Cloud VPN Guides Send feedback Move from Classic VPN to HA VPN Stay organized with collections Save and categorize content based on your preferences.
- Requirements General guidelines Consider the following as you plan a migration to HA VPN: Your peer VPN device or service must support the Border Gateway Protocol (BGP).
- Verify that the new tunnels are working , and check the configuration of your HA VPN gateway for high availability.

