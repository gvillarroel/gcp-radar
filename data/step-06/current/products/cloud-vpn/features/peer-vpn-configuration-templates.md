---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.873Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Peer VPN configuration templates"
feature_slug: "peer-vpn-configuration-templates"
latest_feature_date: "2022-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides"
keywords:
  - "peer"
  - "vpn"
  - "configuration"
  - "templates"
  - "lets"
  - "you"
  - "download"
  - "third"
---

# Peer VPN configuration templates

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN lets you download third-party peer VPN device configuration templates from the Google Cloud console.

## Extended Definition

Cloud VPN lets you download third-party peer VPN device configuration templates from the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For instructions on how to select your template and to view a list of supported vendors, see Download a peer VPN configuration template .
- If you want to download a configuration template for your peer VPN device, click Download configuration .
- You can also download the configuration template later by going to the Peer VPN gateways page.
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.

### Configure the peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next To download a configuration template for your peer VPN device, see Download a peer VPN configuration template .
- For the VPN to be established, the values for the external peer VPN gateway resource must match the configuration on your physical peer gateway: The number of interfaces on your physical VPN gateway External IP address or addresses for one or more peer gateways or interfaces BGP endpoint IP address or addresses The IKE pre-shared key (shared secret) The ASN number When you configure the BGP sessions for HA VPN and enable IPv6, you have the option of configuring IPv6 next hop addresses.
- To complete your configuration, configure the following resources on your peer VPN gateway: Corresponding VPN tunnels to Cloud VPN Border Gateway Protocol (BGP) sessions if you are using dynamic routing with Cloud Router Firewall rules IKE settings For best practices when setting up your peer gateway, see your peer gateway documentation or manufacturer.
- To create an external peer VPN gateway resource, you need the following values from your physical peer gateway, which can also be a third-party software-based gateway.

### Use third-party VPNs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/interop-guides)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page provides Google-tested interoperability guides and vendor-specific notes for peer third-party VPN devices or services that you can use to connect to Cloud VPN.
- Some third-party device configuration templates are available for download from the Google Cloud console.
- For more information, see Download a peer VPN configuration template .
- Home Documentation Networking Network Connectivity Cloud VPN Guides Send feedback Use third-party VPNs Stay organized with collections Save and categorize content based on your preferences.

