---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.565Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "400 Gbps VLAN attachments"
feature_slug: "400-gbps-vlan-attachments"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
keywords:
  - "400"
  - "gbps"
  - "vlan"
  - "attachments"
  - "interconnect"
  - "supports"
  - "with"
  - "maximum"
---

# 400 Gbps VLAN attachments

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports VLAN attachments with maximum capacities of 400 Gbps for Dedicated Interconnect and Cross-Cloud Interconnect.

## Extended Definition

Cloud Interconnect supports VLAN attachments with maximum capacities of 400 Gbps for Dedicated Interconnect and Cross-Cloud Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)

## Supporting Pages

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each link type has a different maximum capacity: 1 x 10-Gbps (10 Gbps) circuit up to 8 x 10-Gbps (80 Gbps) circuits 1 x 100-Gbps (100 Gbps) circuit up to 8 x 100-Gbps (800 Gbps) circuits 1 x 400-Gbps (400 Gbps) circuit up to 8 x 400-Gbps (3200 Gbps) circuits Caution: The link type that you select when you create a Dedicated Interconnect connection cannot be changed later.
- Create VLAN attachments Dual-stack IPv4 and IPv6 VLAN attachments A Dedicated Interconnect VLAN attachment that is configured with the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6 traffic.
- When you configure custom IP address ranges for VLAN attachments that you use with Dedicated Interconnect, you must provide the custom IP address ranges during VLAN creation.
- In the colocation facility, your network devices must support the following technical requirements: At least one of the following: 10-Gbps circuits, single mode fiber, 10GBASE-LR (1310 nm) 100-Gbps circuits, single mode fiber, 100GBASE-LR4 400-Gbps circuits, single mode fiber, 400GBASE-LR4 Note: The maximum supported fiber length for 10GBASE-LR, 100GBASE-LR4, or 400GBASE-LR optics is 10 km.

### Cross-Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Port capacity Cross-Cloud Interconnect connections are available in the following sizes: Provider Size Amazon Web Services (AWS), Oracle Cloud Infrastructure (OCI) 10 Gbps, 100 Gbps, and 400 Gbps Microsoft Azure, Alibaba Cloud 10 Gbps, 100 Gbps Cross-Cloud Interconnect MTU Cross-Cloud Interconnect lets you configure jumbo maximum transmission units (MTUs) with any of the cloud providers.
- When you configure custom IP address ranges for VLAN attachments that you use with Cross-Cloud Interconnect and AWS, you must provide the IPv6 subnet that was allocated by AWS during attachment provisioning.
- Use the following table to choose the option that works best for your needs: Interconnect connection type Cross-Cloud Interconnect Partner Cross-Cloud Interconnect for AWS Description Provides dedicated connectivity between Google Cloud and providers like OCI, AWS, Azure, and Alibaba Provides dedicated connectivity between Google Cloud and providers like AWS Needs physical provisioning Yes No Needs physical attachments and ports Yes No Connection increments 10 Gbps or 100 Gbps Granular pre approved speeds starting from 1 Gbps to 100 Gbps Provisioning time 1-4 weeks 1 day or less Connection ordering Must be initiated from Google Cloud Bidirectional; can be initiated from Google Cloud or Amazon Web Services Resiliency Must be configured manually Built into the product Google support for Cross-Cloud Interconnect The following diagram shows the point of physical cabling that Google support is responsible for.
- Supported cloud service providers Google supports the following cloud service providers for use with Cross-Cloud Interconnect: Amazon Web Services (AWS) Microsoft Azure Oracle Cloud Infrastructure (OCI) Alibaba Cloud Cross-Cloud Interconnect and this documentation refer to such cloud service providers as your remote cloud service provider or remote cloud .

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can provision partner VLAN attachments over these connections to interconnect your VPC networks in Google Cloud and OCI within minutes.
- Provisioning To provision a Partner Cross-Cloud Interconnect for OCI connection with OCI, you start by selecting your paired location, and then ordering Partner Interconnect attachments in the appropriate Google Cloud locations.
- VLAN attachment MTU options We recommend that you use the same maximum transmission unit (MTU) for all VLAN attachments that are connected to the same VPC network, and that you set the MTU of the VPC networks to the same value.
- Balancing egress traffic with redundant VLAN attachments When you have a redundant topology similar to the 99.99% configuration, there are multiple paths for traffic to traverse from the VPC network to your on-premises network.

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum bandwidth per VLAN attachment Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps The maximum possible bandwidth per VLAN attachment depends on the bandwidth capacity that you order.
- VLAN attachments total Mbps Quota The maximum bandwidth capacity of all VLAN attachments in a given region for a given project, irrespective of their relationship with Interconnect connections.
- 10-Gbps increments up to eight circuits (80 Gbps) to increase the maximum total bandwidth of all VLAN attachments that use the Cloud Interconnect connection to 80 Gbps.
- Item Limit Notes Maximum number of physical circuits per Cloud Interconnect connection 8 x 10 Gbps (80-Gbps) circuits or 8 x 100 Gbps (800-Gbps) circuits or 8 x 400 Gbps (3200-Gbps) circuits A Cloud Interconnect connection is a logical connection to Google, made up of one or more physical circuits.

