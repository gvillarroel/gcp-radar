---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.868Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Inter-region VPC connectivity with HA VPN"
feature_slug: "inter-region-vpc-connectivity-with-ha-vpn"
latest_feature_date: "2024-06-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "inter"
  - "region"
  - "vpc"
  - "connectivity"
  - "with"
  - "ha"
  - "vpn"
  - "lets"
---

# Inter-region VPC connectivity with HA VPN

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN lets you connect two VPC networks in different regions by using HA VPN gateways.

## Extended Definition

Cloud VPN lets you connect two VPC networks in different regions by using HA VPN gateways.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.
- The example command manually specifies the IPv4 and IPv6 BGP addresses: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "interfaces": [ { "name": "if-tunnel-a-to-on-prem-if-0 ipv4", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipRange": "169.254.0.1/30" }, { "name": "if-tunnel-a-to-on-prem-if-0 ipv6", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipRange": "fdff:1::/126" } ] } The following example adds an IPv4 BGP interface and an IPv6 BGP interface to the same linkedVpnTunnel with automatically assigned IPv4 and IPv6 BGP addresses: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME { "interfaces": [ { "name": "if-tunnel-a-to-on-prem-if-0 ipv4", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipVersion": "IPV4" }, { "name": "if-tunnel-a-to-on-prem-if-0 ipv6", "linkedVpnTunnel": "ha-vpn-gw-a-tunnel-0", "ipVersion": "IPV6" } ] } To add the BGP peers to the Cloud Router for each VPN tunnel, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- Add a BGP peer configuration to the interface for the first tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 0 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 0 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router; the address must be in the 2600:2d00:0:2::/63 IPv6 address range PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are learned by Cloud Router from the BGP peer; the address must be in the 2600:2d00:0:2::/63 IPv6 address range The command output looks similar to the following example: Creating peer [bgp-peer-tunnel-a-to-on-prem-if-0] in router [router-a]...done.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure for 99.9% availability SLA To help ensure 99.9% availability SLA if the VPN gateways are in different regions, configure each HA VPN gateway with two tunnels so that both of the following are true: Tunnel 0 connects interface 0 on one HA VPN gateway to interface 0 on the other HA VPN gateway.
- Two tunnels on each of the following interfaces on the HA VPN gateway connect to the interfaces on the VM: Tunnel 0 from interface 0 to us-central1-vm-a in the us-central1-a zone Tunnel 1 from interface 1 to us-central1-vm-a in the us-central1-a zone Tunnel 2 from interface 0 to us-central1-vm-b in the us-central1-b zone Tunnel 3 from interface 1 to us-central1-vm-b in the us-central1-b zone Connect HA VPN gateway HA VPN to a single VM instance HA VPN lets you connect a HA VPN gateway to a Compute Engine virtual machine (VM) instance that works as a network virtual appliance and runs an IPsec VPN implementation.
- In configurations with two peer interfaces, tunnels on each of the following interfaces on the HA VPN gateway match the corresponding interfaces on the peer gateway or gateways: HA VPN interface 0 to peer interface 0 HA VPN interface 1 to peer interface 1 Examples are shown in the diagrams for two peer VPN gateways, two interfaces and one peer VPN gateway, two interfaces .
- HA VPN to one peer (on-premises) VPN gateway with one IP address (click to enlarge) Configure for 99.99% availability SLA To meet the 99.99% availability SLA on the Google Cloud side, there must be a tunnel from each of the two interfaces on the HA VPN gateway to the corresponding interfaces on the peer gateway.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Visualizing and monitoring Cloud VPN connections Network Topology is a visualization tool that shows the topology of your VPC networks, hybrid connectivity to and from your on-premises networks, and the associated metrics.
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.
- If you have a single peer VPN gateway device with a single interface , both of the tunnels from each interface on the Cloud VPN gateway must be connected to the same interface on the peer gateway.
- If you have a single peer VPN gateway device with two interfaces , each of the tunnels from each interface on the Cloud VPN gateway must be connected to its own interface on the peer gateway.

