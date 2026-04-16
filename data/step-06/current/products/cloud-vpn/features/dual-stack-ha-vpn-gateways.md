---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.037Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Dual-stack HA VPN gateways"
feature_slug: "dual-stack-ha-vpn-gateways"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN supports HA VPN gateways that carry both IPv4 and IPv6 traffic using MP-BGP.

## Extended Definition

Cloud VPN supports HA VPN gateways that carry both IPv4 and IPv6 traffic using MP-BGP.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)

## Supporting Pages

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dual-stack IPv4 and IPv6 gateways An HA VPN gateway that is configured with the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6 traffic.
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- When you create the HA VPN tunnels for a dual-stack HA VPN gateway, you can create either an IPv6 BGP session for IPv6 route exchange, or an IPv4 BGP session that exchanges IPv6 routes by using multiprotocol BGP (MP-BGP) .
- IPv6 traffic Supports dual stack (IPv4 and IPv6) and IPv6-only configuration Not supported For information about how to move from Classic VPN to HA VPN, see Move from Classic VPN to HA VPN .

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To support IPv6 traffic, HA VPN gateways must use either the IPv4 and IPv6 (dual-stack) or IPv6 (single-stack) configuration.
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.
- For example, to configure ciphers for the VPN tunnel 0, run the following command: POST https://www.googleapis.com/compute/{version}/projects/ PROJECT ID /regions/ REGION /vpntunnels/ha-vpn-gw-a-tunnel-0 { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 "ciphers": { "phase1": { "encryption": "3DES-CBC,AES-GCM-16-192,AES-GCM-16-256", "integrity": "AES-XCBC-96,HMAC-SHA2-256-128", "prf": "PRF-AES128-XCBC,PRF-AES128-CMAC,PRF-HMAC-SHA1", "dh": "Group-14,Group-15,Group-16" }, "phase2": { "encryption": "AES-CBC-128,AES-GCM-16-192,AES-GCM-16-256", "integrity": "HMAC-SHA2-256-128,HMAC-SHA2-512-256", "pfs": "Group-14,Group-15,Group-16" } } } For phase 1, specify the following values: encryption : a comma-separated list of encryption algorithms that are supported for phase 1 IKE security association (SA) negotiations.
- Note: The VPN tunnels that you create are not available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : the name of the external peer gateway created earlier PEER EXT GW IF0 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Connect Google Cloud to your peer VPN gateway There are three typical peer gateway configurations for HA VPN: An HA VPN gateway to two separate peer VPN gateways, each with its own IP address An HA VPN gateway to one peer VPN gateway that uses two separate IP addresses An HA VPN gateway to one peer VPN gateway that uses one IP address To set up any of these configurations, see Create an HA VPN to a peer VPN gateway .
- Configure for 99.9% availability SLA To help ensure 99.9% availability SLA if the VPN gateways are in different regions, configure each HA VPN gateway with two tunnels so that both of the following are true: Tunnel 0 connects interface 0 on one HA VPN gateway to interface 0 on the other HA VPN gateway.
- HA VPN to two peer (on-premises) VPN gateways (click to enlarge) Connect one peer VPN gateway with two IP addresses This topology describes one HA VPN gateway that connects to one peer VPN gateway that has two separate external IP addresses.
- Connect two peer VPN gateways If your peer-side gateway is hardware-based, having a second peer-side gateway provides redundancy and failover on that side of the connection.

### View logs and metrics \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Peer Cloud VPN gateway sequence number lost A packet has arrived at the gateway with a sequence number greater than the expected sequence number, indicating that a packet with an earlier sequence number might have been dropped.
- Go to Logs Explorer Cloud VPN logs are indexed by the Cloud VPN gateway that created them: To view all Cloud VPN logs, in the All resources menu, select Cloud Cloud VPN gateway , and then click All gateway id .
- For example, if you want to view traffic bandwidth traversing the VPN tunnel between Google Cloud and the on-premises network, expand the entities until you see that VPN tunnel connection.
- Setting 50% alerting policies on your Cloud VPN tunnel bandwidth usage helps to ensure that you have sufficient capacity in the event of tunnel failover.

