---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.033Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "IPv6-only HA VPN gateways"
feature_slug: "ipv6-only-ha-vpn-gateways"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing; Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing.

## Extended Definition

Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing; Cloud VPN supports HA VPN gateways that operate with IPv6-only addressing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IP PREFIXES \ --custom-learned-route-priority= PRIORITY Optional: To enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 0 \ --peer-ip-address= PEER BGP IP 0 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Assign IPv6 next-hop addresses Use the commands in this section only if you want VPN tunnels that use MP-BGP and exchange both IPv4 and IPv6 traffic.
- In either case, use a command like the following: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --set-custom-learned-route-ranges= IPV6 PREFIXES \ --custom-learned-route-priority= PRIORITY Optional: If you want to enable MD5 authentication, use the --md5-authentication-key flag to provide your secret key: gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --peer-ip-address= PEER BGP IPV6 1 \ --region= REGION \ --md5-authentication-key= AUTHENTICATION KEY Assign IPv4 next-hop addresses Use the commands in this section only if you want VPN tunnels that use MP-BGP.
- To create an HA VPN gateway, make a POST request by using the vpnGateways.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways { "name": "ha-vpn-gw-a", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/network-a", "stackType": "IPV4 IPV6", "gatewayIpVersion": "IPV4" } POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /regions/ REGION /vpnGateways { "name": "ha-vpn-gw-a", "network": "https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/networks/network-a", "gatewayIpVersion": "IPV6", "stackType": "IPV6 ONLY" } When you create an HA VPN gateway with IPv4 interfaces, the gatewayIpVersion and stackType fields are optional.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single-stack IPv6-only gateways An IPv6-only HA VPN gateway supports only IPv6 traffic.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.
- IPv6 traffic Supports dual stack (IPv4 and IPv6) and IPv6-only configuration Not supported For information about how to move from Classic VPN to HA VPN, see Move from Classic VPN to HA VPN .

### Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To avoid this error, create a VPN tunnel that connects your HA VPN gateway to one of the following: Another HA VPN gateway An external VPN gateway that is not hosted in Google Cloud Compute Engine virtual machine (VM) instances Unable to connect to external destination through HA VPN When you use an HA VPN gateway, Google Cloud resources use the VPN tunnel to connect to only the destinations that are advertised by the peer router.
- For example, the following advanced filter searches for DH group mismatches: resource.type="vpn gateway" "Peer proposal: DOES NOT HAVE DIFFIE HELLMAN GROUP" On-premises gateways behind NAT Cloud VPN can work with on-premises or peer VPN gateways that are behind NAT.
- Verify that traffic is flowing between the two VPN gateways in both directions.
- To view Use this Logging search Cloud VPN initiates Phase 1 (IKE SA) resource.type="vpn gateway" ("initiating IKE SA" OR "generating IKE SA INIT request") Cloud VPN cannot contact remote peer resource.type="vpn gateway" "establishing IKE SA failed, peer not responding" IKE (Phase 1) authentication events resource.type="vpn gateway" ("generating IKE AUTH request" OR "parsed IKE AUTH response") Successful IKE authentication resource.type="vpn gateway" ("authentication of" AND "with pre-shared key successful") Phase 1 (IKE SA) established resource.type="vpn gateway" ("IKE SA" AND "established between") All Phase 2 (Child SA) events, including re-key events resource.type="vpn gateway" "CHILD SA" Peer asks for Phase 2 re-key resource.type="vpn gateway" detected rekeying of CHILD SA Peer asks to terminate Phase 2 (Child SA) resource.type="vpn gateway" received DELETE for ESP CHILD SA Cloud VPN asks to terminate Phase 2 (Child SA) resource.type="vpn gateway" sending DELETE for ESP CHILD SA Cloud VPN closes Phase 2 (Child SA), perhaps in response to the peer resource.type="vpn gateway" closing CHILD SA Cloud VPN closed Phase 2 itself resource.type="vpn gateway" CHILD SA closed If remote traffic selectors don't match resource.type="vpn gateway" Remote traffic selectors narrowed If local traffic selectors don't match resource.type="vpn gateway" Local traffic selectors narrowed Connectivity Consider the following suggestions when using ping to verify connectivity between on-premises systems and Google Cloud virtual machine (VM) instances: Ensure that the firewall rules in your Google Cloud network allow incoming ICMP traffic.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Connect Google Cloud to your peer VPN gateway There are three typical peer gateway configurations for HA VPN: An HA VPN gateway to two separate peer VPN gateways, each with its own IP address An HA VPN gateway to one peer VPN gateway that uses two separate IP addresses An HA VPN gateway to one peer VPN gateway that uses one IP address To set up any of these configurations, see Create an HA VPN to a peer VPN gateway .
- Configure for 99.9% availability SLA To help ensure 99.9% availability SLA if the VPN gateways are in different regions, configure each HA VPN gateway with two tunnels so that both of the following are true: Tunnel 0 connects interface 0 on one HA VPN gateway to interface 0 on the other HA VPN gateway.
- HA VPN to two peer (on-premises) VPN gateways (click to enlarge) Connect one peer VPN gateway with two IP addresses This topology describes one HA VPN gateway that connects to one peer VPN gateway that has two separate external IP addresses.
- Connect two peer VPN gateways If your peer-side gateway is hardware-based, having a second peer-side gateway provides redundancy and failover on that side of the connection.

