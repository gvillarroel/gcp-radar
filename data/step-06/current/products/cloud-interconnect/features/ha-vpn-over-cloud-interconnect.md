---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.571Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "HA VPN over Cloud Interconnect"
feature_slug: "ha-vpn-over-cloud-interconnect"
latest_feature_date: "2023-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting"
keywords:
  - "ha"
  - "vpn"
  - "over"
  - "interconnect"
  - "encrypts"
  - "traffic"
  - "by"
  - "running"
---

# HA VPN over Cloud Interconnect

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

HA VPN over Cloud Interconnect encrypts Cloud Interconnect traffic by running HA VPN tunnels over VLAN attachments.

## Extended Definition

HA VPN over Cloud Interconnect encrypts Cloud Interconnect traffic by running HA VPN tunnels over VLAN attachments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)

## Supporting Pages

### HA VPN over Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)
- Source ID: `site-docs-root`
- Final score: 361
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Payload and latency: HA VPN over Cloud Interconnect differentiates between the following maximum transmission unit (MTU) values: HA VPN over Cloud Interconnect gateway MTU : 1440 bytes.
- As a solution, HA VPN over Cloud Interconnect has the advantage of providing deployment tools by using the Google Cloud console, the Google Cloud CLI, and the Compute Engine API.
- The IP address ranges learned by the Cloud Router on the Cloud Interconnect tier are used to select the internal traffic sent to the HA VPN gateways and the VLAN attachments.
- HA VPN over Cloud Interconnect lets you encrypt the traffic that traverses your Dedicated Interconnect or Partner Interconnect connections.

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also deploy HA VPN over Cloud Interconnect if you need to encrypt the traffic carried by your VLAN attachments.
- You can apply IPsec encryption to your Cloud Interconnect traffic by deploying HA VPN over Cloud Interconnect.
- The following configurations require that you create custom advertised routes on your Cloud Router to direct traffic from your on-premises network to certain internal IP addresses by using a Cloud Interconnect connection: Configure Private Google Access for on-premises hosts Create a Cloud DNS forwarding zone Alternative name server network requirements Cloud Interconnect as a data transfer network Before you use Cloud Interconnect, carefully review Section 2 of the General Service Terms for Google Cloud.
- HA VPN over Cloud Interconnect is supported for both Dedicated Interconnect and Partner Interconnect.

### MACsec for Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about using IPsec to secure your network traffic to Google Cloud, see the HA VPN over Cloud Interconnect overview .
- MACsec-capable connections display the following: For 10‑Gbps links: linkType: LINK TYPE ETHERNET 10G LR and availableFeatures: IF MACSEC For 100‑Gbps links: linkType: LINK TYPE ETHERNET 100G LR ; all 100‑Gbps links are MACsec capable For 400‑Gbps links: linkType: LINK TYPE ETHERNET 400G LR ; all 400‑Gbps links are MACsec capable address : - Equinix 47 Bourke Road Alexandria Sydney , New South Wales 2015 Australia availabilityZone : zone1 availableFeatures : - IF MACSEC availableLinkTypes : - LINK TYPE ETHERNET 10G LR - LINK TYPE ETHERNET 100G LR - LINK TYPE ETHERNET 400G LR city : Sydney continent : C ASIA PAC creationTimestamp : ' 2019 - 12 - 05 T12 : 56 : 15.000 - 08 : 00 ' description : Equinix Sydney ( SY3 ) facilityProvider : Equinix facilityProviderFacilityId : SY3 id : ' 1173 ' kind : compute # interconnectLocation name : syd - zone1 - 1605 peeringdbFacilityId : ' 1605 ' regionInfos : - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/australia-southeast1 - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/australia-southeast2 - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/us-east7 selfLink : https : //www.googleapis.com/compute/v1/projects/my-project/global/interconnectLocations/syd-zone1-1605 status : AVAILABLE List all colocation facilities that support MACsec for Cloud Interconnect on 10‑Gbps circuits: gcloud compute interconnects locations list \ --filter "availableFeatures: (IF MACSEC)" The output is similar to the following: NAME DESCRIPTION FACILITY PROVIDER ... <stripped> syd-zone1-1605 Equinix Sydney (SY3) Equinix ... <stripped> List all colocation facilities that have 100‑Gbps links, and therefore offer MACsec by default: gcloud compute interconnects locations list \ --filter "availableLinkTypes: (LINK TYPE ETHERNET 100G LR)" The output is similar to the following: NAME DESCRIPTION FACILITY PROVIDER ... <stripped> syd-zone1-1605 Equinix Sydney (SY3) Equinix ... <stripped> MACsec support on existing Cloud Interconnect connections MACsec for Cloud Interconnect is supported on existing 100‑Gbps and 400‑Gbps Cloud Interconnect connections.
- The MACsec support for current project column shows the circuit sizes that are available for MACsec for Cloud Interconnect. gcloud Authenticate to the Google Cloud CLI: gcloud auth login To discover if a colocation facility supports MACsec for Cloud Interconnect, do one of the following: Verify that a specific colocation facility supports MACsec for Cloud Interconnect: gcloud compute interconnects locations describe COLOCATION FACILITY Replace COLOCATION FACILITY with the colocation facility name listed in the locations table .
- After your Cloud Interconnect connection completes testing and is ready for use, you can set up MACsec by creating MACsec pre-shared keys and configuring your on-premises router.

### Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To fix this issue, follow these steps: Because the VM traffic is routed over the VPN tunnel, make sure that the route from the VM to the VPN tunnel is being sent by the Cloud Router.
- Can't establish BGP session for the Cloud Router for Cloud Interconnect To detect whether the BGP session associated with the VLAN attachment is down, run the following command: gcloud compute routers get-status INTERCONNECT ROUTER NAME Replace INTERCONNECT ROUTER NAME with the name of the Cloud Router that you created for the Cloud Interconnect tier of your HA VPN over Cloud Interconnect deployment.
- This troubleshooting guide can help you solve common issues that you might encounter when using Cloud Interconnect: General troubleshooting Dedicated Interconnect Partner Interconnect HA VPN over Cloud Interconnect MACsec for Cloud Interconnect Cross-Cloud Interconnect For answers to common questions about Cloud Interconnect architecture and features, see the Cloud Interconnect FAQ .
- Unable to delete an encrypted VLAN attachment You receive the following error when you try to delete an encrypted VLAN attachment for Dedicated Interconnect or Partner Interconnect: ResourceInUseByAnotherResourceException To fix this issue, make sure that you have first deleted all the HA VPN gateways and tunnels associated with the encrypted VLAN attachment.

