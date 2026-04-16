---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.036Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "HA VPN over Cloud Interconnect"
feature_slug: "ha-vpn-over-cloud-interconnect"
latest_feature_date: "2023-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms"
keywords:
  - "ha"
  - "vpn"
  - "over"
  - "interconnect"
  - "can"
  - "encrypt"
  - "traffic"
  - "by"
---

# HA VPN over Cloud Interconnect

Product: Cloud VPN
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN can encrypt Cloud Interconnect traffic by deploying HA VPN tunnels over VLAN attachments.

## Extended Definition

Cloud VPN can encrypt Cloud Interconnect traffic by deploying HA VPN tunnels over VLAN attachments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.
- Note: The VPN tunnels that you create are not available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : the name of the external peer gateway created earlier PEER EXT GW IF0 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2.
- The gcloud instructions on this page assume that you have set your project ID before issuing commands. gcloud config set project PROJECT ID You can also view a project ID that has already been set by running the following command: gcloud config list --format='text(core.project)' Note: Instructions in this guide are written from the point of view of your VPC network and Cloud VPN gateway.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With HA VPN over Cloud Interconnect, you get the security of IPsec encryption from Cloud VPN alongside the increased capacity of Cloud Interconnect.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- The following Cloud VPN traffic remains within the Google Cloud network: Between two HA VPN gateways Between two Classic VPN gateways Between a Classic VPN or HA VPN gateway and the external IP address of a Compute Engine VM acting as a VPN gateway Cloud VPN can be used with Private Google Access for on-premises hosts .
- You must configure ciphers from the supported list of ciphers that meet the following criteria: If you specify AEAD ciphers for encryption, you cannot specify separate ciphers for integrity because Cloud VPN uses the same encryption ciphers for handling integrity.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this topology, you create HA VPN tunnels to carry IPsec-encrypted traffic over VLAN attachments of either Dedicated Interconnect or Partner Interconnect.
- You can connect two VPC networks together by using an HA VPN gateway in each network, where the HA VPN gateways are in different regions.
- If you deploy an HA VPN gateway with IPV6 ONLY or IPV4 IPV6 stack type, then your VPN tunnels can support the exchange of IPv6 traffic.
- Connect VPC networks by using HA VPN gateways You can connect two Google Cloud VPC networks by using an HA VPN gateway in each network.

### Key terms \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HA VPN over Cloud Interconnect payload MTU The size in bytes of the largest IP packet—including headers and data—that can be successfully encrypted and sent in a HA VPN over Cloud Interconnect tunnel without fragmentation.
- HA VPN over Cloud Interconnect gateway MTU The size in bytes of the largest IP packet—including headers, data, and IPsec overhead—supported by a HA VPN over Cloud Interconnect tunnel.
- Cloud VPN payload MTU The size in bytes of the largest IP packet—including headers and data—that can be successfully encrypted and sent in a Cloud VPN tunnel without fragmentation.
- A peer VPN gateway can be one of the following: Another Cloud VPN gateway A VPN gateway hosted by another cloud provider such as AWS or Microsoft Azure An on-premises VPN device or VPN service Note: Cloud VPN instructions are written from the point of view of your Virtual Private Cloud (VPC) network, so the peer VPN gateway is the gateway that connects to Cloud VPN. remote peer IP address For an HA VPN gateway interface that connects to an external VPN gateway, the remote peer IP address is the IP address of the interface on the external VPN gateway that is used for the tunnel.

