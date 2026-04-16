---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.569Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Partner Interconnect dual-stack IPv4 and IPv6"
feature_slug: "partner-interconnect-dual-stack-ipv4-and-ipv6"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
keywords:
  - "partner"
  - "interconnect"
  - "dual"
  - "stack"
  - "ipv4"
  - "and"
  - "ipv6"
  - "supports"
---

# Partner Interconnect dual-stack IPv4 and IPv6

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity; Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity.

## Extended Definition

Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity; Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)

## Supporting Pages

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To support IPv6 traffic in a Partner Cross-Cloud Interconnect for OCI connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- Dual-stack Partner Cross-Cloud Interconnect for OCI VLAN attachments must use separate IPv4 and IPv6 BGP sessions.
- Partner Cross-Cloud Interconnect for OCI supports connections at multiple speeds with no data transfer charges for traffic that is exchanged between Google Cloud and OCI.
- IPv6 support Partner Cross-Cloud Interconnect for OCI supports IPv6 traffic for Layer 3 connectivity.

### Partner Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To support IPv6 traffic in a Partner Interconnect connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- Dual-stack Partner Interconnect VLAN attachments must use separate IPv4 and IPv6 BGP sessions.
- IPv6 support Partner Interconnect supports IPv6 traffic for both Layer 2 and Layer 3 connectivity.
- You have the option to create an IPv4 and IPv6 (dual stack) VLAN attachment.

### Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv6 traffic isn't working after changing an attachment's stack type to dual stack View Cloud Router status and verify that status: UP is displayed.
- This troubleshooting guide can help you solve common issues that you might encounter when using Cloud Interconnect: General troubleshooting Dedicated Interconnect Partner Interconnect HA VPN over Cloud Interconnect MACsec for Cloud Interconnect Cross-Cloud Interconnect For answers to common questions about Cloud Interconnect architecture and features, see the Cloud Interconnect FAQ .
- Unable to delete an encrypted VLAN attachment You receive the following error when you try to delete an encrypted VLAN attachment for Dedicated Interconnect or Partner Interconnect: ResourceInUseByAnotherResourceException To fix this issue, make sure that you have first deleted all the HA VPN gateways and tunnels associated with the encrypted VLAN attachment.
- Can't send and learn MED values over an L3 Partner Interconnect connection If you are using a Partner Interconnect connection where a Layer 3 service provider handles BGP for you, Cloud Router can't learn MED values from your on-premises router or send MED values to that router.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Create VLAN attachments Dual-stack IPv4 and IPv6 VLAN attachments A Dedicated Interconnect VLAN attachment that is configured with the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6 traffic.
- Single stack (IPv4 only) Dual stack (IPv4 and IPv6) The stack type that you select for your VLAN attachment determines what version of IP traffic is supported by your Dedicated Interconnect connection.
- To support IPv6 traffic in a Dedicated Interconnect, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- Stack type Supported BGP sessions IPv4 only IPv4 BGP IPv4 and IPv6 IPv4 BGP, with or without MP-BGP IPv6 BGP, with or without MP-BGP Both IPv4 BGP and IPv6 BGP, no MP-BGP For more information about BGP sessions, see Establish BGP sessions in the Cloud Router documentation.

