---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.566Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Custom IP address ranges"
feature_slug: "custom-ip-address-ranges"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"
keywords:
  - "custom"
  - "ip"
  - "address"
  - "ranges"
  - "interconnect"
  - "lets"
  - "you"
  - "use"
---

# Custom IP address ranges

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect lets you use custom IP address ranges; Cloud Interconnect lets you use custom IP address ranges.

## Extended Definition

Cloud Interconnect lets you use custom IP address ranges; Cloud Interconnect lets you use custom IP address ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)

## Supporting Pages

### Cross-Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you configure custom IP address ranges for VLAN attachments that you use with Cross-Cloud Interconnect and AWS, you must provide the IPv6 subnet that was allocated by AWS during attachment provisioning.
- To configure custom IP address ranges with Cross-Cloud Interconnect, see the following pages: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Service-level agreement Cross-Cloud Interconnect uses the Cloud Interconnect service level agreement ( SLA ).
- Custom IP address ranges When you create a VLAN attachment for Cross-Cloud Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.
- When you configure custom IP address ranges for VLAN attachments with other cloud service providers, you can use your own IP addresses or use IP addresses that your service provider configures.

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to use custom IP address ranges with a Layer 3 Partner Interconnect connection, you create a VLAN attachment and then your service provider configures the custom IP address ranges during their VLAN attachment configuration process.
- The following reserved IP address ranges are not supported: Reserved IPv4 address ranges: 0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8 172.16.0.0/12 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 192.168.0.0/16 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 224.0.0.0/4 240.0.0.0/4 Reserved IPv6 address ranges: ::ffff:0:0/96 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:/32 2001:20::/28 2001:db8::/32 fe80::/10 2002::/16 3fff::/20 5f00::/16 fc00::/7 fe80::/10 ff00::/8 Configure custom IP address ranges To create VLAN attachments with custom IP address ranges, see the following pages: Dedicated Interconnect: configure custom IP address ranges Layer 2 Partner Interconnect connections: use custom IP address ranges with Layer 2 connections Layer 3 Partner Interconnect connections: use custom IP address ranges with Layer 3 connections Cross-Cloud Interconnect: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Support for GRE traffic Cloud Interconnect supports GRE traffic.
- The following configurations require that you create custom advertised routes on your Cloud Router to direct traffic from your on-premises network to certain internal IP addresses by using a Cloud Interconnect connection: Configure Private Google Access for on-premises hosts Create a Cloud DNS forwarding zone Alternative name server network requirements Cloud Interconnect as a data transfer network Before you use Cloud Interconnect, carefully review Section 2 of the General Service Terms for Google Cloud.
- Limitations The following limitations apply to custom IP address ranges: You can't use the --candidate-subnets flag with the --candidate-customer-router-ip-address and --candidate-cloud-router-ip-address flags, but you can use --candidate-subnets for link-local IPv4 attachments with the --candidate-customer-router-ipv6-address and --candidate-cloud-router-ipv6-address flags.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you configure custom IP address ranges for VLAN attachments that you use with Dedicated Interconnect, you must provide the custom IP address ranges during VLAN creation.
- Custom IP address ranges When you create a VLAN attachment for Dedicated Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.
- For information about how it works, including limitations and best practices, see the Custom IP address ranges section in the Cloud Interconnect overview.
- However, you can add IPv6 custom IP address ranges when you upgrade your stack type from IPV4 ONLY to IPV4 IPV6 .

### Partner Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The process for creating VLAN attachments differs based on whether you request a Layer 3 or Layer 2 connection from your service provider: Layer 2: when you configure custom IP address ranges for VLAN attachments that you use with Partner Interconnect, you must provide the custom IP address ranges during VLAN creation.
- Custom IP address ranges When you create a VLAN attachment for Partner Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.
- For information about how it works, including limitations and best practices, see the Custom IP address ranges section in the Cloud Interconnect overview.
- To configure custom IP address ranges for Layer 2 connections, see Use custom IP address ranges with Layer 2 connections .

