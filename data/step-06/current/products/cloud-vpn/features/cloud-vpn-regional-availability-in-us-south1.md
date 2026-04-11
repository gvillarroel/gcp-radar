---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.874Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Cloud VPN regional availability in us-south1"
feature_slug: "cloud-vpn-regional-availability-in-us-south1"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing"
keywords:
  - "vpn"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "south1"
  - "is"
  - "available"
---

# Cloud VPN regional availability in us-south1

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN is available in the us-south1 region (Dallas, US).

## Extended Definition

Cloud VPN is available in the us-south1 region (Dallas, US).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- In the following commands, replace the following: GOOGLE BGP IPV4 0 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV4 0 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 0 GOOGLE BGP IPV6 0 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV6 0 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 0 GOOGLE BGP IPV4 1 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV4 1 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 1 GOOGLE BGP IPV6 1 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV6 1 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 1 For the first VPN tunnel Add an interface with an IPv4 address to the Cloud Router; replace ROUTER INTERFACE NAME 0 ipv4 with a name for the interface: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 0 ipv4 \ --vpn-tunnel= TUNNEL NAME 0 \ --ip-address= GOOGLE BGP IPV4 0 \ --mask-length 30 \ --region= REGION The command output looks similar to the following example: Updated [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- June 07, 2022 Feature Cloud VPN is available in region us-south1 (Dallas, US).
- September 03, 2021 Change Added Terraform examples to automate HA VPN gateway creation: HA VPN gateway between Google Cloud networks HA VPN gateway to a peer VPN gateway August 03, 2021 Feature Cloud VPN is now available in region northamerica-northeast2 (Toronto, Canada).
- November 18, 2024 Feature Cloud VPN is now available in region northamerica-south1 (Queretaro, Mexico, North America).
- June 13, 2024 Feature Cloud VPN support for IPv6-only HA VPN gateways is available in General Availability .

### Cloud VPN | Google Cloud

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Hourly Hourly Monthly Monthly Component billed Price (USD) Hourly charge for each tunnel attached to the gateway.
- Cloud VPN Google Cloud Page Contents Cloud VPN pricing At a high level, your Cloud VPN charges consist of the following: An hourly charge for each Cloud VPN gateway; this charge is determined partly by the number of tunnels attached to the gateway, as well as the location of the gateway A monthly charge for IPsec traffic An hourly charge for any external IP address assigned to a VPN gateway but not used by a tunnel For more information about Cloud VPN, see the Cloud VPN overview.
- HA VPN only: For 99.99% availability, you must configure two tunnels, or, if working with an AWS peer gateway, four tunnels. $0.05 / 1 hour IPsec traffic You are charged as follows: If the Cloud VPN tunnel connects to another Cloud VPN gateway, you are charged data transfer pricing as described in VM-VM data transfer pricing within Google Cloud .
- No charge for a reserved external IP address that is used by a tunnel. $297.28 asia-northeast1 gateway to data center and another VPC network Suppose your project has a VPC network called Network A, which includes a VPN gateway in asia-northeast1.

