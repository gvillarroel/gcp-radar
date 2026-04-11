---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.868Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "IPv6-only HA VPN gateways"
feature_slug: "ipv6-only-ha-vpn-gateways"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
keywords:
  - "ipv6"
  - "only"
  - "ha"
  - "vpn"
  - "gateways"
  - "supports"
  - "that"
  - "operate"
---

# IPv6-only HA VPN gateways

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing; Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing.

## Extended Definition

Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing; Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= PRIORITY Optional: To enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --peer-ip-address= PEER BGP IP 0 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Assign IPv6 next-hop addresses Use the commands in this section only if you want VPN tunnels that use MP-BGP and exchange both IPv4 and IPv6 traffic.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IPV6 PREFIXES \ --custom-learned-route-priority= PRIORITY Optional: If you want to enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --peer-ip-address= PEER BGP IPV6 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Assign IPv4 next-hop addresses Use the commands in this section only if you want VPN tunnels that use MP-BGP.
- To create an HA VPN gateway, make a POST request by using the vpnGateways.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways { "name": "ha-vpn-gw-a", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a", "stackType": "IPV4 IPV6", "gatewayIpVersion": "IPV4" } POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /regions/ REGION /vpnGateways { "name": "ha-vpn-gw-a", "network": "https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/networks/network-a", "gatewayIpVersion": "IPV6", "stackType": "IPV6 ONLY" } When you create an HA VPN gateway with IPv4 interfaces, the gatewayIpVersion and stackType fields are optional.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Single-stack IPv6-only gateways An IPv6-only HA VPN gateway supports only IPv6 traffic.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.
- IPv6 traffic Supports dual stack (IPv4 and IPv6) and IPv6-only configuration Not supported For information about how to move from Classic VPN to HA VPN, see Move from Classic VPN to HA VPN .

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- December 14, 2022 Feature Cloud VPN supports dual-stack HA VPN gateways that allow both IPv4 and IPv6 traffic.
- June 13, 2024 Feature Cloud VPN support for IPv6-only HA VPN gateways is available in General Availability .
- January 30, 2024 Feature Cloud VPN support for IPv6-only HA VPN gateways is in Preview .
- October 14, 2020 Deprecated Classic VPN partial deprecation Starting on October 31, 2021, you will no longer be able to do the following: Create new Classic VPN tunnels using static routing (route based or policy based) that connect to another Classic VPN gateway Create new Classic VPN tunnels using static routing (route based or policy based) that connect a Google Cloud Virtual Private Cloud (VPC) network to another cloud provider's network Create new Classic VPN tunnels using dynamic routing (all configurations) You can continue to create the following types of connections and get support for them: VPN tunnels using static routing from Classic VPN gateways to on-premises VPN gateways and from on-premises VPN gateways to Classic VPN gateways VPN tunnels using static routing from a Classic VPN gateway to and from a Compute Engine virtual machine (VM) acting as a VPN gateway Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will no longer receive regular updates or maintenance.

