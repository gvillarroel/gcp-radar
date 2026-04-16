---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.937Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "VPC spoke updates for IPv6 subnet exchange"
feature_slug: "vpc-spoke-updates-for-ipv6-subnet-exchange"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns"
keywords:
  - "vpc"
  - "spoke"
  - "updates"
  - "for"
  - "ipv6"
  - "subnet"
  - "exchange"
  - "existing"
---

# VPC spoke updates for IPv6 subnet exchange

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Existing VPC spokes can be updated to enable or disable IPv6 subnet range exchange.

## Extended Definition

Existing VPC spokes can be updated to enable or disable IPv6 subnet range exchange.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)

## Supporting Pages

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Spoke administrators or network administrators for the routing VPC networks must configure advertisement of subnet routes in VPC spokes.
- The hub route table is updated with appropriate route entries when the following events occur: VPC spoke creation or deletion Subnet creation or deletion in attached VPC spokes Hybrid spoke creation or deletion BGP route advertisement or withdrawal from attached hybrid spokes Each VPC spoke also has a VPC network route table.
- Route exchange with VPC spokes lets you connect VPC spokes and hybrid spokes, such as Cloud Interconnect VLAN attachments, HA VPN tunnels, and Router appliance VMs on the same hub, which enables highly scalable any-to-any network connectivity between all such spokes attached to a single hub.
- To establish connectivity between hybrid spokes and VPC spokes: Network administrators for the routing VPC networks must first review the Cloud Router path selection and dynamic routing mode: NCC hybrid spokes only support the Cloud Router legacy best path selection mode.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- Properties unique to producer VPC spokes Producer VPC spokes have the following unique properties and requirements: Property Description Dependencies Creating a producer VPC spoke requires that you have the following existing resources and connections: A VPC network that consumes a supported service from a producer network through VPC Network Peering.
- Producer VPC spokes support the following services: Google services offered by private services access Google Cloud NetApp Volumes How it works When you create a producer VPC spoke, you provide the following: The existing VPC spoke of your consumer network that is peered with the producer network.
- Use the same NCC quotas and limits , including: Number of active VPC spokes per hub Number of subnet routes per hub route table If adding a producer VPC spoke could result in the hub exceeding the limit of either of the preceding quotas, NCC prohibits you from adding the producer VPC spoke.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- IP addressing IP version support depends on the spoke type: VPC spokes : NCC supports the following IP versions: IPv4 and IPv6 for the exchange of subnet ranges.
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- Route exchange with VPC connectivity NCC VPC spokes support exchanging the following subnet ranges: IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes—that is, routes learned by hybrid spokes through BGP—can also be exchanged with VPC spokes or other hybrid spokes.
- You can configure VPC spokes to exchange only IPv4 subnet ranges, only IPv6 subnet ranges, or both IPv4 and IPv6 subnet ranges.

### "Connect two sites by using VPN spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the VPC network and subnet that you configured for this tutorial.
- To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 . gcloud To create the spoke, use the gcloud network-connectivity spokes linked-vpn-tunnels create command . gcloud network-connectivity spokes linked-vpn-tunnels create SPOKE NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --vpn-tunnels= TUNNEL NAME , TUNNEL NAME 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --site-to-site-data-transfer Replace the following values: SPOKE NAME : the name of the spoke—in this case, office-1-spoke HUB NAME : the name of the hub that you are attaching the spoke to—in this case, my-hub DESCRIPTION : optional text that describes the spoke TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office1 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office1 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel REGION : the Google Cloud region where the spoke is located— in this case, us-west1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 .
- Click Create . gcloud To create the spoke, use the gcloud network-connectivity spokes linked-vpn-tunnels create command . gcloud network-connectivity spokes linked-vpn-tunnels create SPOKE NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --vpn-tunnels= TUNNEL NAME , TUNNEL NAME 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --site-to-site-data-transfer Replace the following values: SPOKE NAME : the name of the spoke—in this case, office-2-spoke HUB NAME : the name of the hub that you are attaching the spoke to—in this case, my-hub DESCRIPTION : optional text that describes the spoke TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office2 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office2 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel REGION : the Google Cloud region where the spoke is located—in this case, in us-east1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 .
- POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /spokes/ SPOKE NAME { "hub": " HUB NAME ", "labels": {" KEY ": " VALUE "}, "linkedVpnTunnels": { "uris": [ " TUNNEL NAME ", " TUNNEL NAME 2 " ], "siteToSiteDataTransfer": true } } Replace the following values: PROJECT ID : the project ID of your project REGION : the Google Cloud region where you want to locate the spoke—in this case, us-east1 SPOKE NAME : the name for the spoke HUB NAME : the name of the hub that you are attaching the spoke to KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office2 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office2 ;when including a second tunnel, do not use a space between the comma and the name of second tunnel Verify the configuration After configuring the hub and its spokes, you should be able to pass traffic from the virtual machine (VM) instance in one office to the VM instance in the other office.

