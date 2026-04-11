---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.881Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Organization policy for peer IP address restrictions"
feature_slug: "organization-policy-for-peer-ip-address-restrictions"
latest_feature_date: "2020-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway"
keywords:
  - "organization"
  - "policy"
  - "for"
  - "peer"
  - "ip"
  - "address"
  - "restrictions"
  - "vpn"
---

# Organization policy for peer IP address restrictions

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN supports an organization policy that restricts peer IP addresses through a VPN tunnel.

## Extended Definition

Cloud VPN supports an organization policy that restricts peer IP addresses through a VPN tunnel.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE BGP IP 1 represents the BGP IP address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IP 1 represents the BGP IP address of its peer. result.bgpPeerStatus[0].ipAddress: 169.254.0.1 GOOGLE BGP IP 0 result.bgpPeerStatus[0].name: bgp-peer-tunnel-a-to-on-prem-if-0 result.bgpPeerStatus[0].peerIpAddress: 169.254.0.2 PEER BGP IP 0 result.bgpPeerStatus[1].ipAddress: 169.254.1.1 GOOGLE BGP IP 1 result.bgpPeerStatus[1].name: bgp-peer-tunnel-a-to-on-prem-if-1 result.bgpPeerStatus[1].peerIpAddress: 169.254.1.2 PEER BGP IP 1 You can also use the following command to get a full listing of the Cloud Router configuration: gcloud compute routers describe ROUTER NAME \ --region= REGION The full listing looks like the following example: bgp: advertiseMode: DEFAULT asn: 65001 bgpPeers: - interfaceName: if-tunnel-a-to-on-prem-if-0 ipAddress: 169.254.0.1 name: bgp-peer-tunnel-a-to-on-prem-if-0 peerAsn: 65002 peerIpAddress: 169.254.0.2 - interfaceName: if-tunnel-a-to-on-prem-if-1 ipAddress: 169.254.1.1 name: bgp-peer-tunnel-a-to-on-prem-if-1 peerAsn: 65004 peerIpAddress: 169.254.1.2 creationTimestamp: '2018-10-18T11:58:41.704-07:00' id: '4726715617198303502' interfaces: - ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-0 name: if-tunnel-a-to-on-prem-if-0 - ipRange: 169.254.1.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/vpnTunnels/tunnel-a-to-on-prem-if-1 name: if-tunnel-a-to-on-prem-if-1 kind: compute#router name: router-a network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a API To verify the Cloud Router configuration, make a GET request by using the routers.getRouterStatus method , and use an empty request body: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers Create an additional tunnel on a single-tunnel gateway Console To receive a 99.99% uptime SLA, configure a tunnel on each HA VPN interface of an HA VPN gateway.
- In the following commands, replace the following: GOOGLE BGP IPV4 0 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV4 0 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 0 GOOGLE BGP IPV6 0 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 0 ; PEER BGP IPV6 0 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 0 GOOGLE BGP IPV4 1 : the IPv4 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV4 1 represents the IPv4 address of its BGP peer, matches with GOOGLE BGP IPV4 1 GOOGLE BGP IPV6 1 : the IPv6 address of the Cloud Router's interface for the tunnel on Cloud VPN gateway interface 1 ; PEER BGP IPV6 1 represents the IPv6 address of its BGP peer, matches with GOOGLE BGP IPV6 1 For the first VPN tunnel Add an interface with an IPv4 address to the Cloud Router; replace ROUTER INTERFACE NAME 0 ipv4 with a name for the interface: gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 0 ipv4 \ --vpn-tunnel= TUNNEL NAME 0 \ --ip-address= GOOGLE BGP IPV4 0 \ --mask-length 30 \ --region= REGION The command output looks similar to the following example: Updated [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-central1/routers/router-a].
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Restricting peer IP addresses through a Cloud VPN tunnel If you're an Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) , you can create a policy constraint that restricts the IP addresses that users can specify for peer VPN gateways.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- For steps describing how to restrict IP addresses, see Restrict IP addresses for peer VPN gateways .
- The following Cloud VPN traffic remains within the Google Cloud network: Between two HA VPN gateways Between two Classic VPN gateways Between a Classic VPN or HA VPN gateway and the external IP address of a Compute Engine VM acting as a VPN gateway Cloud VPN can be used with Private Google Access for on-premises hosts .

### Configure the peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/configuring-peer-gateway)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the VPN to be established, the values for the external peer VPN gateway resource must match the configuration on your physical peer gateway: The number of interfaces on your physical VPN gateway External IP address or addresses for one or more peer gateways or interfaces BGP endpoint IP address or addresses The IKE pre-shared key (shared secret) The ASN number When you configure the BGP sessions for HA VPN and enable IPv6, you have the option of configuring IPv6 next hop addresses.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways { "name": "mygateway", "interfaces": [ { "id": 0, "ipAddress": "35.254.128.120" }, { "id": 1, "ipAddress": "35.254.128.121" }, ], "redundancyType": "TWO IPS REDUNDANCY" } Configure VPN tunnels To create corresponding tunnels for each Cloud VPN tunnel that you created, consult the documentation for your peer VPN gateway.
- To configure your peer gateway, use the ASNs and IP addresses of your Cloud Router and the information from your Cloud VPN gateway.
- Each tunnel on your peer gateway should also use a unique external IP address for your HA VPN gateway to use.

