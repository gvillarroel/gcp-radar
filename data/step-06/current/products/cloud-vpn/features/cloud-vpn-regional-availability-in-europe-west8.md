---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.044Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Cloud VPN regional availability in europe-west8"
feature_slug: "cloud-vpn-regional-availability-in-europe-west8"
latest_feature_date: "2022-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas"
keywords:
  - "vpn"
  - "regional"
  - "availability"
  - "in"
  - "europe"
  - "west8"
  - "is"
  - "available"
---

# Cloud VPN regional availability in europe-west8

Product: Cloud VPN
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN is available in the europe-west8 region (Milan, Italy).

## Extended Definition

Cloud VPN is available in the europe-west8 region (Milan, Italy).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas](https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas)

## Supporting Pages

### Cloud VPN | Google Cloud

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Hourly Hourly Monthly Monthly Component billed Price (USD) Hourly charge for each tunnel attached to the gateway.
- Cloud VPN Google Cloud Page Contents Cloud VPN pricing At a high level, your Cloud VPN charges consist of the following: An hourly charge for each Cloud VPN gateway; this charge is determined partly by the number of tunnels attached to the gateway, as well as the location of the gateway A monthly charge for IPsec traffic An hourly charge for any external IP address assigned to a VPN gateway but not used by a tunnel For more information about Cloud VPN, see the Cloud VPN overview.
- HA VPN only: For 99.99% availability, you must configure two tunnels, or, if working with an AWS peer gateway, four tunnels. $0.05 / 1 hour IPsec traffic You are charged as follows: If the Cloud VPN tunnel connects to another Cloud VPN gateway, you are charged data transfer pricing as described in VM-VM data transfer pricing within Google Cloud .
- No charge for a reserved external IP address that is used by a tunnel. $3,288.00 Traffic to Network B: 20 TiB (or 20,480 GiB) x $0.08 = $1,638.40 No charge for data transfer in. europe-west6 gateway ($0.065) x 2 tunnels x 720 hours = $93.60 Traffic to Network A: 20 TiB (or 20,480 GiB) x $0.08 = $1,638.40 No charge for data transfer in.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Depending on the high availability recommendations for your peer VPN gateway, you can create external VPN gateway resources for the following different types of on-premises VPN gateways: Two separate peer VPN gateway devices where the two devices are redundant with each other, and each device has its own external IP address.
- This step includes checking the high-availability configuration of your HA VPN gateway.
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- In the following commands, replace the following: GOOGLE BGP IPV4 0 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV4 0 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 0 GOOGLE BGP IPV6 0 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV6 0 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 0 GOOGLE BGP IPV4 1 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV4 1 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 1 GOOGLE BGP IPV6 1 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV6 1 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 1 For the first VPN tunnel Add an interface with an IPv4 address to the Cloud Router; replace ROUTER INTERFACE NAME 0 ipv4 with a name for the interface: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 0 ipv4 \ --vpn-tunnel= TUNNEL NAME 0 \ --ip-address= GOOGLE BGP IPV4 0 \ --mask-length 30 \ --region= REGION The command output looks similar to the following example: Updated [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- 99.99% HA VPN to Compute Engine VM instances in multiple zones Connect an HA VPN gateway to Compute Engine VM instances with external IP addresses 99.9% HA VPN to a single Compute Engine VM instance Connect an HA VPN gateway to only one Compute Engine VM instance with an external IP address The availability SLA is determined by the availability SLA provided for a single VM instance of memory-optimized machine family for Compute Engine.
- HA VPN to one peer (on-premises) VPN gateway with one IP address (click to enlarge) Configure for 99.99% availability SLA To meet the 99.99% availability SLA on the Google Cloud side, there must be a tunnel from each of the two interfaces on the HA VPN gateway to the corresponding interfaces on the peer gateway.
- Configuring only one tunnel from a single HA VPN interface to a single interface on the peer gateway doesn't provide enough redundancy to meet the availability SLA because there is an unused interface on the HA VPN gateway, which does not have a tunnel configured on it.
- This document describes recommended topologies and the corresponding availability Service Level Agreement (SLA) for each HA VPN topology.

### Quotas and limits \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas](https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Item Limit Notes Bandwidth per VPN tunnel 250,000 packets per second for the sum of ingress and egress 250,000 packets per second is roughly equivalent to 1 Gbps to 3 Gbps, depending on the average packet size within the tunnel.
- Item Quota Notes VPN gateways Quota For HA VPN only External VPN gateways Quota For HA VPN only VPN tunnels Quota This quota represents the combined total number of Classic VPN tunnels and HA VPN tunnels.
- Subject to the Cloud Router quotas and limits, the number of Cloud Routers is independent of the type of Cloud VPN gateway, Classic VPN or HA VPN, that a tunnel is attached to.
- Known issues Be aware of the following issues: Google Cloud resources specific to HA VPN are not yet displayed in Cloud Asset Inventory or Security Command Center .

