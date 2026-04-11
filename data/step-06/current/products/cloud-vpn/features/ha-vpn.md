---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.883Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "HA VPN"
feature_slug: "ha-vpn"
latest_feature_date: "2019-09-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "ha"
  - "vpn"
  - "provides"
  - "highly"
  - "available"
  - "ipsec"
  - "connectivity"
  - "between"
---

# HA VPN

Product: Cloud VPN
Coverage: LOW

## Step 02 Summary

HA VPN provides highly available IPsec VPN connectivity between on-premises networks and VPC networks; HA VPN provides highly available IPsec VPN connectivity between on-premises networks and VPC networks.

## Extended Definition

HA VPN provides highly available IPsec VPN connectivity between on-premises networks and VPC networks; HA VPN provides highly available IPsec VPN connectivity between on-premises networks and VPC networks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connect a HA VPN gateway to Compute Engine VM instances With HA VPN, you can establish a secure connection between an HA VPN gateway and Compute Engine VM instances that function as network virtual appliances with an IPsec implementation.
- Two tunnels on each of the following interfaces on the HA VPN gateway connect to the interfaces on the VM: Tunnel 0 from interface 0 to us-central1-vm-a in the us-central1-a zone Tunnel 1 from interface 1 to us-central1-vm-a in the us-central1-a zone Tunnel 2 from interface 0 to us-central1-vm-b in the us-central1-b zone Tunnel 3 from interface 1 to us-central1-vm-b in the us-central1-b zone Connect HA VPN gateway HA VPN to a single VM instance HA VPN lets you connect a HA VPN gateway to a Compute Engine virtual machine (VM) instance that works as a network virtual appliance and runs an IPsec VPN implementation.
- Home Documentation Networking Network Connectivity Cloud VPN Guides Send feedback HA VPN topologies Stay organized with collections Save and categorize content based on your preferences.
- To maintain connectivity in case of failure of one of the tunnels, connect all interfaces of the HA VPN gateway to all interfaces of the peer gateway or another HA VPN gateway.

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The VPN tunnels that you create aren't available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF1 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : a name of the external peer gateway created earlier PEER EXT GW IF0 and PEER EXT GW IF1 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2; if possible, use IKEv2 for the IKE version.
- Note: The VPN tunnels that you create are not available until the corresponding partner tunnels have been created on your peer VPN gateway or gateways. gcloud compute vpn-tunnels create TUNNEL NAME IF0 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 0 gcloud compute vpn-tunnels create TUNNEL NAME IF1 \ --peer-external-gateway= PEER GW NAME \ --peer-external-gateway-interface= PEER EXT GW IF0 \ --region= REGION \ --ike-version= IKE VERS \ --shared-secret= SHARED SECRET \ --router= ROUTER NAME \ --vpn-gateway= GW NAME \ [--vpn-gateway-region= VPN GATEWAY REGION ] \ --interface= INT NUM 1 Replace the following: TUNNEL NAME IF0 and TUNNEL NAME IF1 : a name for the tunnel; naming the tunnels by including the gateway interface name can help identify the tunnels later PEER GW NAME : the name of the external peer gateway created earlier PEER EXT GW IF0 : the interface number configured earlier on the external peer gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2.
- Home Documentation Networking Network Connectivity Cloud VPN Guides Send feedback Create an HA VPN gateway to a peer VPN gateway Stay organized with collections Save and categorize content based on your preferences.
- The Reminder section of this page lists the steps that you must complete to have a fully operational VPN connection between Cloud VPN and your peer VPN.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using Network Connectivity Center , you can use HA VPN tunnels to connect on-premises networks together, passing traffic between them as a data transfer network.
- The following Cloud VPN traffic remains within the Google Cloud network: Between two HA VPN gateways Between two Classic VPN gateways Between a Classic VPN or HA VPN gateway and the external IP address of a Compute Engine VM acting as a VPN gateway Cloud VPN can be used with Private Google Access for on-premises hosts .
- Factors that affect bandwidth The bandwidth is influenced by a number of factors, including the following: The network connection between the Cloud VPN gateway and your peer gateway: Network bandwidth between the two gateways.
- Visualizing and monitoring Cloud VPN connections Network Topology is a visualization tool that shows the topology of your VPC networks, hybrid connectivity to and from your on-premises networks, and the associated metrics.

