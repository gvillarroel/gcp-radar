---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.883Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Cloud VPN"
feature_slug: "cloud-vpn"
latest_feature_date: "2015-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "vpn"
  - "connects"
  - "on"
  - "premises"
  - "and"
  - "virtual"
  - "private"
  - "networks"
---

# Cloud VPN

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN connects on-premises and Virtual Private Cloud networks through IPsec VPN tunnels; Cloud VPN connects on-premises and Virtual Private Cloud networks through IPsec VPN tunnels.

## Extended Definition

Cloud VPN connects on-premises and Virtual Private Cloud networks through IPsec VPN tunnels; Cloud VPN connects on-premises and Virtual Private Cloud networks through IPsec VPN tunnels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The HA VPN gateway and the VMs are in two different Virtual Private Cloud networks.
- Two tunnels on each of the following interfaces on the HA VPN gateway connect to the interfaces on the VM: Tunnel 0 from interface 0 to us-central1-vm-a in the us-central1-a zone Tunnel 1 from interface 1 to us-central1-vm-a in the us-central1-a zone Tunnel 2 from interface 0 to us-central1-vm-b in the us-central1-b zone Tunnel 3 from interface 1 to us-central1-vm-b in the us-central1-b zone Connect HA VPN gateway HA VPN to a single VM instance HA VPN lets you connect a HA VPN gateway to a Compute Engine virtual machine (VM) instance that works as a network virtual appliance and runs an IPsec VPN implementation.
- HA VPN to one peer (on-premises) VPN gateway with two IP addresses (click to enlarge) Connect one peer VPN gateway with one IP address This topology describes one HA VPN gateway that connects to one peer VPN gateway that has one external IP address.
- HA VPN to two peer (on-premises) VPN gateways (click to enlarge) Connect one peer VPN gateway with two IP addresses This topology describes one HA VPN gateway that connects to one peer VPN gateway that has two separate external IP addresses.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before creating an HA VPN gateway and tunnel pair, create a Virtual Private Cloud (VPC) network and at least one subnet in the region where the HA VPN gateway is located: To create a custom mode VPC network (recommended), see Create a custom mode VPC network with IPv4-only subnets .
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- Run the following command: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 ipv6 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the first interface with the IPv4 address for the second tunnel ; replace PEER NAME 1 ipv4 with a name for the peer VPN interface, and replace PEER ASN with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 ipv4 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 ipv4 \ --region= REGION Add a BGP peer configuration to the second interface with the IPv6 address for the second tunnel ; replace PEER NAME 1 ipv6 with a name for the peer VPN interface, and replace PEER ASN with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 ipv6 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 ipv6 \ --region= REGION In most cases the PEER ASN is the same, but it can be different depending on your on-premises network topology.
- Add a BGP peer configuration to the first interface for the first tunnel ; replace PEER NAME 0 ipv4 with a name for the peer VPN interface, and replace PEER ASN with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 ipv4 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 ipv4 \ --peer-ip-address= PEER BGP IPV4 0 \ --region= REGION Add a BGP peer configuration to the second interface for the first tunnel ; replace PEER NAME 0 ipv6 with a name for the peer VPN interface, and replace PEER ASN with the ASN configured for the peer VPN gateway: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 ipv6 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 ipv6 \ --peer-ip-address= PEER BGP IPV6 0 \ --region= REGION In most cases the PEER ASN is the same, but it can be different depending on your on-premises network topology.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following Cloud VPN traffic remains within the Google Cloud network: Between two HA VPN gateways Between two Classic VPN gateways Between a Classic VPN or HA VPN gateway and the external IP address of a Compute Engine VM acting as a VPN gateway Cloud VPN can be used with Private Google Access for on-premises hosts .
- Visualizing and monitoring Cloud VPN connections Network Topology is a visualization tool that shows the topology of your VPC networks, hybrid connectivity to and from your on-premises networks, and the associated metrics.
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.
- Using Network Connectivity Center , you can use HA VPN tunnels to connect on-premises networks together, passing traffic between them as a data transfer network.

