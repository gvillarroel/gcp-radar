---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.568Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Interconnect connection groups"
feature_slug: "interconnect-connection-groups"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/production-level-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
keywords:
  - "interconnect"
  - "connection"
  - "groups"
  - "let"
  - "you"
  - "define"
  - "intended"
  - "reliability"
---

# Interconnect connection groups

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Interconnect connection groups let you define intended reliability levels for Cloud Interconnect resources and receive resiliency feedback.

## Extended Definition

Interconnect connection groups let you define intended reliability levels for Cloud Interconnect resources and receive resiliency feedback.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/production-level-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/production-level-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)

## Supporting Pages

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Interconnect groups You can use connection groups to communicate your intended level of reliability, and to receive feedback on how your Cloud Interconnect resources meet that intended level of reliability.
- You can use Cloud Interconnect connection groups without configuring VLAN attachment groups, and you can use VLAN attachment groups without configuring Cloud Interconnect connection groups.
- Then, you order a Dedicated Interconnect connection so that Google can allocate the necessary resources and send you a Letter of Authorization and Connecting Facility Assignment (LOA-CFA).
- Redundancy and SLA When you configure a Cloud Interconnect connection, you can do so at a specific level of reliability.

### "Topology for production-level applications overview \_|\_ Cloud Interconnect\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/production-level-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/production-level-overview)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can achieve a 99.99% availability configuration with Dedicated Interconnect or Partner Interconnect by using the following documents: Establish 99.99% availability for Dedicated Interconnect Establish 99.99% availability for Partner Interconnect To help you achieve a 99.99% availability configuration, we recommend that you use interconnect connection groups.
- These groups provide you with information about whether your configuration meets the requirements for your intended level of availability.
- For more information about interconnect connection groups, see Resiliency and SLA options .
- Home Documentation Networking Network Connectivity Cloud Interconnect Guides Send feedback Topology for production-level applications overview Stay organized with collections Save and categorize content based on your preferences.

### Cross-Site Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-overview)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Encryption options The following encryption options are available depending on the wire group mode: For wire groups in VLAN mode, you can use MACsec for Cloud Interconnect to help you secure traffic on Cross-Site Interconnect connections, specifically between your on-premises router and Google's edge routers.
- Then, you order Cross-Site Interconnect connections for each site that you want to connect so that Google can allocate the necessary resources and send you a Letter of Authorization and Connecting Facility Assignment (LOA-CFA).
- If you configure wire groups in VLAN mode, you can use the same Cross-Site Interconnect connections to create multiple wire groups.
- Components Cross-Site Interconnect uses the following components to connect your on-premises networks to each other: Component Description Cross-Site Interconnect connections The physical connections between Google and your on-premises network sites.

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Wire groups per Interconnect Quota The number of wire groups that you can configure on a single Interconnect connection.
- VLAN attachments per Interconnect Quota The number of VLAN attachments that you can configure on a single interconnect connection.
- If a pairing key is no longer valid, you delete and create a new pairing key for the Partner Interconnect service provider to use.
- Maximum bandwidth per VLAN attachment Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps The maximum possible bandwidth per VLAN attachment depends on the bandwidth capacity that you order.

