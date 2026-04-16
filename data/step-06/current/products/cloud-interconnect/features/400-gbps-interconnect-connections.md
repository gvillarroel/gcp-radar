---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.564Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "400 Gbps interconnect connections"
feature_slug: "400-gbps-interconnect-connections"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
keywords:
  - "400"
  - "gbps"
  - "interconnect"
  - "connections"
  - "supports"
  - "for"
  - "dedicated"
  - "and"
---

# 400 Gbps interconnect connections

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports 400 Gbps connections for Dedicated Interconnect and Cross-Cloud Interconnect.

## Extended Definition

Cloud Interconnect supports 400 Gbps connections for Dedicated Interconnect and Cross-Cloud Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)

## Supporting Pages

### MACsec for Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec-overview)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MACsec-capable connections display the following: For 10‑Gbps links: linkType: LINK TYPE ETHERNET 10G LR and availableFeatures: IF MACSEC For 100‑Gbps links: linkType: LINK TYPE ETHERNET 100G LR ; all 100‑Gbps links are MACsec capable For 400‑Gbps links: linkType: LINK TYPE ETHERNET 400G LR ; all 400‑Gbps links are MACsec capable address : - Equinix 47 Bourke Road Alexandria Sydney , New South Wales 2015 Australia availabilityZone : zone1 availableFeatures : - IF MACSEC availableLinkTypes : - LINK TYPE ETHERNET 10G LR - LINK TYPE ETHERNET 100G LR - LINK TYPE ETHERNET 400G LR city : Sydney continent : C ASIA PAC creationTimestamp : ' 2019 - 12 - 05 T12 : 56 : 15.000 - 08 : 00 ' description : Equinix Sydney ( SY3 ) facilityProvider : Equinix facilityProviderFacilityId : SY3 id : ' 1173 ' kind : compute # interconnectLocation name : syd - zone1 - 1605 peeringdbFacilityId : ' 1605 ' regionInfos : - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/australia-southeast1 - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/australia-southeast2 - region : https : //www.googleapis.com/compute/v1/projects/my-project/regions/us-east7 selfLink : https : //www.googleapis.com/compute/v1/projects/my-project/global/interconnectLocations/syd-zone1-1605 status : AVAILABLE List all colocation facilities that support MACsec for Cloud Interconnect on 10‑Gbps circuits: gcloud compute interconnects locations list \ --filter "availableFeatures: (IF MACSEC)" The output is similar to the following: NAME DESCRIPTION FACILITY PROVIDER ... <stripped> syd-zone1-1605 Equinix Sydney (SY3) Equinix ... <stripped> List all colocation facilities that have 100‑Gbps links, and therefore offer MACsec by default: gcloud compute interconnects locations list \ --filter "availableLinkTypes: (LINK TYPE ETHERNET 100G LR)" The output is similar to the following: NAME DESCRIPTION FACILITY PROVIDER ... <stripped> syd-zone1-1605 Equinix Sydney (SY3) Equinix ... <stripped> MACsec support on existing Cloud Interconnect connections MACsec for Cloud Interconnect is supported on existing 100‑Gbps and 400‑Gbps Cloud Interconnect connections.
- MACsec availability MACsec for Cloud Interconnect is supported on all Cloud Interconnect 100‑Gbps and 400‑Gbps connections, regardless of location.
- MACsec for Cloud Interconnect is available for 10‑Gbps, 100‑Gbps, and 400‑Gbps circuits.
- Before you use MACsec for Cloud Interconnect Ensure that you meet the following requirements: Understand basic network interconnections , so that you can order and configure network circuits.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you use Dedicated Interconnect Make sure that you meet the following requirements: Be familiar with basic network interconnections so that you can order and configure circuits.
- For example, if you select a 10-Gbps link type and need a 100-Gbps link type later, you must create a new Dedicated Interconnect connection with the higher capacity.
- You can choose fixed pricing for each Dedicated Interconnect connection and choose which types of connections you want the fixed pricing to apply to.
- Each link type has a different maximum capacity: 1 x 10-Gbps (10 Gbps) circuit up to 8 x 10-Gbps (80 Gbps) circuits 1 x 100-Gbps (100 Gbps) circuit up to 8 x 100-Gbps (800 Gbps) circuits 1 x 400-Gbps (400 Gbps) circuit up to 8 x 400-Gbps (3200 Gbps) circuits Caution: The link type that you select when you create a Dedicated Interconnect connection cannot be changed later.

### Cross-Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to choose the option that works best for your needs: Interconnect connection type Cross-Cloud Interconnect Partner Cross-Cloud Interconnect for AWS Description Provides dedicated connectivity between Google Cloud and providers like OCI, AWS, Azure, and Alibaba Provides dedicated connectivity between Google Cloud and providers like AWS Needs physical provisioning Yes No Needs physical attachments and ports Yes No Connection increments 10 Gbps or 100 Gbps Granular pre approved speeds starting from 1 Gbps to 100 Gbps Provisioning time 1-4 weeks 1 day or less Connection ordering Must be initiated from Google Cloud Bidirectional; can be initiated from Google Cloud or Amazon Web Services Resiliency Must be configured manually Built into the product Google support for Cross-Cloud Interconnect The following diagram shows the point of physical cabling that Google support is responsible for.
- Port capacity Cross-Cloud Interconnect connections are available in the following sizes: Provider Size Amazon Web Services (AWS), Oracle Cloud Infrastructure (OCI) 10 Gbps, 100 Gbps, and 400 Gbps Microsoft Azure, Alibaba Cloud 10 Gbps, 100 Gbps Cross-Cloud Interconnect MTU Cross-Cloud Interconnect lets you configure jumbo maximum transmission units (MTUs) with any of the cloud providers.
- Supported cloud service providers Google supports the following cloud service providers for use with Cross-Cloud Interconnect: Amazon Web Services (AWS) Microsoft Azure Oracle Cloud Infrastructure (OCI) Alibaba Cloud Cross-Cloud Interconnect and this documentation refer to such cloud service providers as your remote cloud service provider or remote cloud .
- Comparison to Partner Cross-Cloud Interconnect for OCI While Cross-Cloud Interconnect lets you turn up dedicated connectivity between Google Cloud and OCI, Partner Cross-Cloud Interconnect for OCI lets you connect any Google Cloud and OCI resources privately in available paired locations .

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner Cross-Cloud Interconnect for OCI supports connections at multiple speeds with no data transfer charges for traffic that is exchanged between Google Cloud and OCI.
- Comparison to Cross-Cloud Interconnect While Partner Cross-Cloud Interconnect for OCI lets you connect any Google Cloud and OCI resources privately in available paired locations, Cross-Cloud Interconnect lets you turn up dedicated connectivity between Google Cloud and OCI.
- Use the following table to choose the option that works best for your needs: Feature Cross-Cloud Interconnect Partner Cross-Cloud Interconnect for OCI Tenancy Connections are fully owned by you and can't be shared across organizations.
- Lets you provision connections on demand, with variable speed options for maximum flexibility (1 Gbps, 2 Gbps, 5 Gbps, 10 Gbps, 20 Gbps, and 50 Gbps).

