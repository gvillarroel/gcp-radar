---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.879Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "VPN tunnel utilization recommender"
feature_slug: "vpn-tunnel-utilization-recommender"
latest_feature_date: "2021-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
keywords:
  - "vpn"
  - "tunnel"
  - "utilization"
  - "recommender"
  - "provides"
  - "that"
  - "identifies"
  - "overutilization"
---

# VPN tunnel utilization recommender

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

Cloud VPN provides a recommender that identifies VPN tunnel overutilization.

## Extended Definition

Cloud VPN provides a recommender that identifies VPN tunnel overutilization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)

## Supporting Pages

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- June 08, 2021 Feature You can check for VPN tunnel overutilization using the VPN tunnel utilization recommender.
- October 14, 2020 Deprecated Classic VPN partial deprecation Starting on October 31, 2021, you will no longer be able to do the following: Create new Classic VPN tunnels using static routing (route based or policy based) that connect to another Classic VPN gateway Create new Classic VPN tunnels using static routing (route based or policy based) that connect a Google Cloud Virtual Private Cloud (VPC) network to another cloud provider's network Create new Classic VPN tunnels using dynamic routing (all configurations) You can continue to create the following types of connections and get support for them: VPN tunnels using static routing from Classic VPN gateways to on-premises VPN gateways and from on-premises VPN gateways to Classic VPN gateways VPN tunnels using static routing from a Classic VPN gateway to and from a Compute Engine virtual machine (VM) acting as a VPN gateway Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will no longer receive regular updates or maintenance.
- October 05, 2021 Deprecated Classic VPN partial deprecation update Starting on March 31, 2022, you will no longer be able to create new Classic VPN tunnels that use dynamic routing (BGP) unless you are creating a specifically supported configuration.
- On or after March 31, 2022, you can still create the following Classic VPN configurations: Classic VPN tunnels that use dynamic routing and connect to VPN gateway software running inside a Compute Engine VM.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION \ --ip-version=IPV6 Add a BGP peer configuration to the interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv4 \ --ipv4-nexthop-address= IPV4 NEXTHOP ADDRESS \ --peer-ipv4-nexthop-address= PEER IPV4 NEXTHOP ADDRESS In the following commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are advertised by Cloud Router; the address must be in the 169.254.0.0/16 IPv4 address range PEER IPV4 NEXTHOP ADDRESS : the next hop address for IPv4 routes that are learned by Cloud Router from the BGP peer; the address must be in the 169.254.0.0/16 IPv4 address range API To create BGP sessions, follow these steps: To create a Cloud Router interface and assign it an IPv6 address, make either a PATCH or UPDATE request by using the routers.patch method or the routers.update method .
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.
- For example, to configure ciphers for the VPN tunnel 0, run the following command: POST https://www.googleapis.com/compute/{version}/projects/ PROJECT ID /regions/ REGION /vpntunnels/ha-vpn-gw-a-tunnel-0 { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 "ciphers": { "phase1": { "encryption": "3DES-CBC,AES-GCM-16-192,AES-GCM-16-256", "integrity": "AES-XCBC-96,HMAC-SHA2-256-128", "prf": "PRF-AES128-XCBC,PRF-AES128-CMAC,PRF-HMAC-SHA1", "dh": "Group-14,Group-15,Group-16" }, "phase2": { "encryption": "AES-CBC-128,AES-GCM-16-192,AES-GCM-16-256", "integrity": "HMAC-SHA2-256-128,HMAC-SHA2-512-256", "pfs": "Group-14,Group-15,Group-16" } } } For phase 1, specify the following values: encryption : a comma-separated list of encryption algorithms that are supported for phase 1 IKE security association (SA) negotiations.
- For the second VPN tunnel Add a second interface to the Cloud Router. gcloud compute routers add-interface ROUTER NAME \ --interface-name= ROUTER INTERFACE NAME 1 \ --vpn-tunnel= TUNNEL NAME 1 \ --region= REGION Add a BGP peer configuration to the second interface for the second tunnel . gcloud compute routers add-bgp-peer ROUTER NAME \ --peer-name= PEER NAME 1 \ --peer-asn= PEER ASN \ --interface= ROUTER INTERFACE NAME 1 \ --region= REGION \ --enable-ipv6 \ --ipv6-nexthop-address= IPV6 NEXTHOP ADDRESS \ --peer-ipv6-nexthop-address= PEER IPV6 NEXTHOP ADDRESS In the commands, replace the following: PEER NAME 1 with a name for the peer VPN interface PEER ASN with the ASN configured for the peer VPN gateway IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes that are advertised by Cloud Router PEER IPV6 NEXTHOP ADDRESS : the next hop address for IPv6 routes learned by the Cloud Router from the BGP peer API To create BGP sessions, follow these steps: To create a Cloud Router interface, make one of the following requests: PATCH : Use the routers.patch method UPDATE : Use the routers.update method The PATCH request updates only the parameters that you include, whereas the UPDATE request updates all the parameters of a Cloud Router.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Two tunnels on each of the following interfaces on the HA VPN gateway connect to the interfaces on the VM: Tunnel 0 from interface 0 to us-central1-vm-a in the us-central1-a zone Tunnel 1 from interface 1 to us-central1-vm-a in the us-central1-a zone Tunnel 2 from interface 0 to us-central1-vm-b in the us-central1-b zone Tunnel 3 from interface 1 to us-central1-vm-b in the us-central1-b zone Connect HA VPN gateway HA VPN to a single VM instance HA VPN lets you connect a HA VPN gateway to a Compute Engine virtual machine (VM) instance that works as a network virtual appliance and runs an IPsec VPN implementation.
- Configure for 99.9% availability SLA To help ensure 99.9% availability SLA if the VPN gateways are in different regions, configure each HA VPN gateway with two tunnels so that both of the following are true: Tunnel 0 connects interface 0 on one HA VPN gateway to interface 0 on the other HA VPN gateway.
- The following example does not provide 99.99% availability SLA: HA VPN interface 0 to peer interface 0 A topology that doesn't provide high availability (click to enlarge) Active-active and active-passive routing options for HA VPN If a Cloud VPN tunnel goes down, it restarts automatically.
- To help ensure 99.99% availability SLA, configure each HA VPN gateway with two tunnels so that both of the following are true: Tunnel 0 connects interface 0 on one HA VPN gateway to interface 0 on the other HA VPN gateway.

