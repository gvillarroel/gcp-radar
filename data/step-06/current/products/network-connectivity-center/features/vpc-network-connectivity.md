---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.940Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "VPC network connectivity"
feature_slug: "vpc-network-connectivity"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services"
keywords:
  - "vpc"
  - "network"
  - "connectivity"
  - "connects"
  - "two"
  - "or"
  - "more"
  - "networks"
---

# VPC network connectivity

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Connects two or more VPC networks as spokes on a hub for full-mesh connectivity.

## Extended Definition

Connects two or more VPC networks as spokes on a hub for full-mesh connectivity.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)

## Supporting Pages

### "VPC-to-VPC topology that uses a third-party appliance \_|\_ Network Connectivity\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 407
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Connectivity Center (NCC) lets you use a third-party network virtual appliance to establish connectivity between your Virtual Private Cloud (VPC) networks.
- The firewall appliance mediates connectivity between two Virtual Private Cloud (VPC) networks.
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback VPC-to-VPC topology that uses a third-party appliance Stay organized with collections Save and categorize content based on your preferences.
- Use a firewall appliance (click to enlarge) Note: This topology would also work for a scenario where you want to use an SD-WAN router, a load balancer, or some other type of appliance in two VPC networks.

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 369
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Establishing connectivity between hybrid spokes and VPC spokes You can establish connectivity between hybrid spokes and VPC spokes by adding workload VPC networks to an NCC hub as VPC spokes, then you add Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs to the same hub as hybrid spokes.
- To establish connectivity between hybrid spokes and VPC spokes: Network administrators for the routing VPC networks must first review the Cloud Router path selection and dynamic routing mode: NCC hybrid spokes only support the Cloud Router legacy best path selection mode.
- The on-premises network connects to two routing VPC networks using two pairs of VLAN attachments in the us-west1 region of each routing VPC network: The a-west hybrid spoke contains the Cloud Routers and VLAN attachments that receive 192.168.0.0/16 .
- The Cloud Interconnect VLAN attachments, HA VPN tunnels, or Router appliance VMs in each hybrid spoke are also associated with one or more routing VPC networks , but the routing VPC networks themselves need not be added to the NCC hub as VPC spokes.

### "Connect two sites by using VPN spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)
- Source ID: `site-iam-reference`
- Final score: 365
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create Google Cloud resources This tutorial assumes that you have already created the following Google Cloud resources: A VPC network that has its dynamic routing mode set to global In the region closest to Office1 , a subnet, an HA VPN gateway, a Cloud Router, and a tunnel that connects the gateway interface to Office1 In the region closest to Office2 , a subnet, an HA VPN gateway, a Cloud Router, and a tunnel that connects the gateway interface to Office2 If you need to create these resources, see the following documents: To create a VPC network, see Creating networks .
- DELETE https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/global/hubs/ HUB NAME Replace the following values: PROJECT ID : the project ID of the project that contains the hub;in the example diagram, the project is my-project HUB NAME : the name of the hub to delete Delete the VPC network and subnet Warning: Make sure not to delete VPC networks that carry production traffic.
- Topology for NCC tutorial (click to enlarge) Configure data transfer connectivity To set up data transfer connectivity, follow these steps: Create Google Cloud resources such as a Virtual Private Cloud (VPC) network, HA VPN gateways and tunnels, and Cloud Routers.
- To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 . gcloud To create the spoke, use the gcloud network-connectivity spokes linked-vpn-tunnels create command . gcloud network-connectivity spokes linked-vpn-tunnels create SPOKE NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --vpn-tunnels= TUNNEL NAME , TUNNEL NAME 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --site-to-site-data-transfer Replace the following values: SPOKE NAME : the name of the spoke—in this case, office-1-spoke HUB NAME : the name of the hub that you are attaching the spoke to—in this case, my-hub DESCRIPTION : optional text that describes the spoke TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office1 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office1 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel REGION : the Google Cloud region where the spoke is located— in this case, us-west1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 .

### "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- Source ID: `site-iam-reference`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Supported services for producer VPC spokes Stay organized with collections Save and categorize content based on your preferences.
- For information about producer Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC), see Producer VPC spokes .
- That is, the name of the peering connection between your VPC network and the producer VPC network must be servicenetworking-googleapis-com .
- To use a producer VPC spoke, the service must be consumed by using private services access or VPC Network Peering .

