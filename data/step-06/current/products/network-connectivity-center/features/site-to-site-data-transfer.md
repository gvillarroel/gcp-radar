---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.935Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Site-to-site data transfer"
feature_slug: "site-to-site-data-transfer"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/asn-requirements"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns"
keywords:
  - "site"
  - "to"
  - "transfer"
  - "network"
  - "connectivity"
  - "center"
  - "supports"
  - "in"
---

# Site-to-site data transfer

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Network Connectivity Center supports site-to-site data transfer in Brazil, Indonesia, and South Africa; Lets you transfer data between a remote cloud network and external sites through a Network Connectivity Center spoke.

## Extended Definition

Network Connectivity Center supports site-to-site data transfer in Brazil, Indonesia, and South Africa; Lets you transfer data between a remote cloud network and external sites through a Network Connectivity Center spoke.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/asn-requirements](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/asn-requirements)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)

## Supporting Pages

### "Site-to-site data transfer overview \_|\_ Network Connectivity Center \_\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/data-transfer)
- Source ID: `site-iam-reference`
- Final score: 421
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Site-to-site data transfer overview Stay organized with collections Save and categorize content based on your preferences.
- Requirements When using site-to-site data transfer, you must do all of the following: Make sure that all connectivity resources associated with your spokes use a high availability configuration.
- Network Connectivity Center (NCC) lets you use Google's network as part of a wide area network (WAN) that includes your external sites.
- When data transfer is enabled for one or more spokes, all connectivity resources associated with these spokes must be part of a single VPC network.

### "Preset connectivity topologies \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connectivity-topologies)
- Source ID: `site-iam-reference`
- Final score: 417
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the spoke groups that are supported according to the spoke type: Spoke Can be in the center spoke group Can be in the edge spoke group VPC spoke Producer VPC spoke Hybrid spoke with site-to-site data transfer disabled Hybrid spoke with site-to-site data transfer enabled The gcloud network-connectivity hubs groups list --hub command returns the center and edge groups when using star topology.
- Spoke Can be in the prod spoke group Can be in the non-prod spoke group Can be in the services spoke group Can be in the gateways spoke group VPC spoke Producer VPC spoke Hybrid spoke with site-to-site data transfer disabled Hybrid spoke with site-to-site data transfer enabled NCC Gateway spoke The gcloud network-connectivity hubs groups list --hub command returns the prod, non-prod, services, and gateway groups when using hybrid inspection topology.
- Hybrid spoke compatibility with star topology A hub configured to use the star topology enforces the following limitations on its hybrid spokes: Hybrid spokes with site-to-site data transfer enabled must be in the center spoke group.
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Preset connectivity topologies Stay organized with collections Save and categorize content based on your preferences.

### "ASN requirements for site-to-site data transfer \_|\_ Network Connectivity\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/asn-requirements](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/asn-requirements)
- Source ID: `site-iam-reference`
- Final score: 387
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback ASN requirements for site-to-site data transfer Stay organized with collections Save and categorize content based on your preferences.
- If you are using Network Connectivity Center (NCC) for site-to-site data transfer, use the following best practices for managing autonomous system numbers (ASNs).
- To learn more about how NCC enables full mesh connectivity, see Route exchange with site-to-site data transfer .
- In each of these cases, the peers need to go to the same place and offer redundant connectivity for each other.

### "Connect two sites by using VPN spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/tutorials/connecting-two-offices-with-vpns)
- Source ID: `site-iam-reference`
- Final score: 383
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 . gcloud To create the spoke, use the gcloud network-connectivity spokes linked-vpn-tunnels create command . gcloud network-connectivity spokes linked-vpn-tunnels create SPOKE NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --vpn-tunnels= TUNNEL NAME , TUNNEL NAME 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --site-to-site-data-transfer Replace the following values: SPOKE NAME : the name of the spoke—in this case, office-1-spoke HUB NAME : the name of the hub that you are attaching the spoke to—in this case, my-hub DESCRIPTION : optional text that describes the spoke TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office1 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office1 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel REGION : the Google Cloud region where the spoke is located— in this case, us-west1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 .
- Click Create . gcloud To create the spoke, use the gcloud network-connectivity spokes linked-vpn-tunnels create command . gcloud network-connectivity spokes linked-vpn-tunnels create SPOKE NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --vpn-tunnels= TUNNEL NAME , TUNNEL NAME 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --site-to-site-data-transfer Replace the following values: SPOKE NAME : the name of the spoke—in this case, office-2-spoke HUB NAME : the name of the hub that you are attaching the spoke to—in this case, my-hub DESCRIPTION : optional text that describes the spoke TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office2 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office2 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel REGION : the Google Cloud region where the spoke is located—in this case, in us-east1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text To add the Office2 spoke to the hub, continue to Create the spoke for Office 2 .
- POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /spokes/ SPOKE NAME { "hub": " HUB NAME ", "labels": {" KEY ": " VALUE "}, "linkedVpnTunnels": { "uris": [ " TUNNEL NAME ", " TUNNEL NAME 2 " ], "siteToSiteDataTransfer": true } } Replace the following values: PROJECT ID : the project ID of your project REGION : the Google Cloud region where you want to locate the spoke—in this case, us-east1 SPOKE NAME : the name for the spoke HUB NAME : the name of the hub that you are attaching the spoke to KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office2 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office2 ;when including a second tunnel, do not use a space between the comma and the name of second tunnel Verify the configuration After configuring the hub and its spokes, you should be able to pass traffic from the virtual machine (VM) instance in one office to the VM instance in the other office.
- POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /spokes/ SPOKE NAME { "hub": " HUB NAME ", "labels": {" KEY ": " VALUE "}, "linkedVpnTunnels": { "uris: [ " TUNNEL NAME ", " TUNNEL NAME 2 " ], "siteToSiteDataTransfer": true } } Replace the following values: PROJECT ID : the project ID of your project REGION : the Google Cloud region where you want to locate the spoke—in this case, us-west1 SPOKE NAME : the name for the spoke HUB NAME : the name of the hub that you are attaching the spoke to KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text TUNNEL NAME : the name of the first HA VPN tunnel—in this case, vpn-tunnel1-office1 TUNNEL NAME 2 : the name of the redundant tunnel—in this case, vpn-tunnel2-office1 ; when including a second tunnel, do not use a space between the comma and the name of second tunnel Create the spoke for Office 2 Create a spoke for Office2 .

