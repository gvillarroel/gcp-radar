---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.568Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "VLAN attachment groups"
feature_slug: "vlan-attachment-groups"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting"
keywords:
  - "vlan"
  - "attachment"
  - "groups"
  - "let"
  - "you"
  - "define"
  - "intended"
  - "reliability"
---

# VLAN attachment groups

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

VLAN attachment groups let you define intended reliability levels for Cloud Interconnect resources and receive resiliency feedback.

## Extended Definition

VLAN attachment groups let you define intended reliability levels for Cloud Interconnect resources and receive resiliency feedback.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)

## Supporting Pages

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Interconnect groups You can use connection groups to communicate your intended level of reliability, and to receive feedback on how your Cloud Interconnect resources meet that intended level of reliability.
- You can use Cloud Interconnect connection groups without configuring VLAN attachment groups, and you can use VLAN attachment groups without configuring Cloud Interconnect connection groups.
- Connection groups never change the behavior of your Cloud Interconnect connections or your VLAN attachments.
- When you create the BGP sessions for a dual-stack VLAN attachment, you have the following options for IPv6 route exchange: You can create an IPv6 BGP session You can create an IPv4 BGP session that exchanges IPv6 routes by using multiprotocol BGP (MP-BGP) .

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Increases in the number of VLAN attachments or increasing the capacity of an existing VLAN attachment depends on your service provider's available capacity.
- You can only use these internal IP addresses for HA VPN gateways that are associated with VLAN attachments.
- Pay only for the capacity you need, with options of 50 Mbps to 50 Gbps for each VLAN attachment.
- Google bills you based on your VLAN attachment's capacity and egress traffic.

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum bandwidth per traffic flow on a VLAN attachment 10 Gbps Even if you configure your attachment with a higher bandwidth, an individual traffic flow might be limited to the maximum defined for an attachment.
- Maximum bandwidth per VLAN attachment Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps The maximum possible bandwidth per VLAN attachment depends on the bandwidth capacity that you order.
- The following cases describe where the maximum bandwidth is lower than the 10 Gbps limit: If the bandwidth capacity of your VLAN attachment is less than the maximum for the attachment, the bandwidth per traffic flow is limited by the bandwidth of the VLAN attachment.
- To achieve maximum throughput, you must use multiple five-tuple flows (for example: 10+) with packet sizes within the MTU of the VLAN attachment.

### Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Unable to delete an encrypted VLAN attachment You receive the following error when you try to delete an encrypted VLAN attachment for Dedicated Interconnect or Partner Interconnect: ResourceInUseByAnotherResourceException To fix this issue, make sure that you have first deleted all the HA VPN gateways and tunnels associated with the encrypted VLAN attachment.
- This risk is especially great if you let VLAN IDs be automatically assigned when you create the attachment.
- To enter the missing routes, set the following parameters: --set-advertisement-groups = ADVERTISED GROUPS --set-advertisement-ranges = ADVERTISED IP RANGES Replace the following: ADVERTISED GROUPS : a Google-defined group that Cloud Router dynamically advertises; it can have a value of all subnets , which mimics the default behavior of a Cloud Router ADVERTISED IP RANGES : the contents of the new array of IP address ranges; it can have one or more values of your choice For more details and examples, see Advertising custom IP ranges .
- Can't establish BGP session for the Cloud Router for Cloud Interconnect To detect whether the BGP session associated with the VLAN attachment is down, run the following command: gcloud compute routers get-status INTERCONNECT ROUTER NAME Replace INTERCONNECT ROUTER NAME with the name of the Cloud Router that you created for the Cloud Interconnect tier of your HA VPN over Cloud Interconnect deployment.

