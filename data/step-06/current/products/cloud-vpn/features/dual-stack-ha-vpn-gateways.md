---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.872Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Dual-stack HA VPN gateways"
feature_slug: "dual-stack-ha-vpn-gateways"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
keywords:
  - "dual"
  - "stack"
  - "ha"
  - "vpn"
  - "gateways"
  - "supports"
  - "that"
  - "carry"
---

# Dual-stack HA VPN gateways

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN supports HA VPN gateways that carry both IPv4 and IPv6 traffic using MP-BGP.

## Extended Definition

Cloud VPN supports HA VPN gateways that carry both IPv4 and IPv6 traffic using MP-BGP.

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
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To support IPv6 traffic, HA VPN gateways must use either the IPv4 and IPv6 (dual-stack) or IPv6 (single-stack) configuration.
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.
- For example, to configure ciphers for the VPN tunnel 0, run the following command: POST https://www.googleapis.com/compute/{version}/projects/ PROJECT ID /regions/ REGION /vpntunnels/ha-vpn-gw-a-tunnel-0 { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 "ciphers": { "phase1": { "encryption": "3DES-CBC,AES-GCM-16-192,AES-GCM-16-256", "integrity": "AES-XCBC-96,HMAC-SHA2-256-128", "prf": "PRF-AES128-XCBC,PRF-AES128-CMAC,PRF-HMAC-SHA1", "dh": "Group-14,Group-15,Group-16" }, "phase2": { "encryption": "AES-CBC-128,AES-GCM-16-192,AES-GCM-16-256", "integrity": "HMAC-SHA2-256-128,HMAC-SHA2-512-256", "pfs": "Group-14,Group-15,Group-16" } } } For phase 1, specify the following values: encryption : a comma-separated list of encryption algorithms that are supported for phase 1 IKE security association (SA) negotiations.
- Note: The VPN tunnels that you create are not available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : the name of the external peer gateway created earlier PEER EXT GW IF0 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dual-stack IPv4 and IPv6 gateways An HA VPN gateway that is configured with the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6 traffic.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- When you create the HA VPN tunnels for a dual-stack HA VPN gateway, you can create either an IPv6 BGP session for IPv6 route exchange, or an IPv4 BGP session that exchanges IPv6 routes by using multiprotocol BGP (MP-BGP) .
- IPv6 traffic Supports dual stack (IPv4 and IPv6) and IPv6-only configuration Not supported For information about how to move from Classic VPN to HA VPN, see Move from Classic VPN to HA VPN .

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- December 14, 2022 Feature Cloud VPN supports dual-stack HA VPN gateways that allow both IPv4 and IPv6 traffic.
- October 14, 2020 Deprecated Classic VPN partial deprecation Starting on October 31, 2021, you will no longer be able to do the following: Create new Classic VPN tunnels using static routing (route based or policy based) that connect to another Classic VPN gateway Create new Classic VPN tunnels using static routing (route based or policy based) that connect a Google Cloud Virtual Private Cloud (VPC) network to another cloud provider's network Create new Classic VPN tunnels using dynamic routing (all configurations) You can continue to create the following types of connections and get support for them: VPN tunnels using static routing from Classic VPN gateways to on-premises VPN gateways and from on-premises VPN gateways to Classic VPN gateways VPN tunnels using static routing from a Classic VPN gateway to and from a Compute Engine virtual machine (VM) acting as a VPN gateway Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will no longer receive regular updates or maintenance.
- By using Multiprotocol BGP (MP-BGP) sessions in Cloud Router , HA VPN can connect your peer networks to VPC networks with dual-stack subnets .
- June 15, 2020 Feature Cloud VPN now supports an org-level policy that restricts peer IP addresses through a Cloud VPN tunnel.

