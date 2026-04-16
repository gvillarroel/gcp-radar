---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.570Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "VLAN attachment MTU up to 8896 bytes"
feature_slug: "vlan-attachment-mtu-up-to-8896-bytes"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
keywords:
  - "vlan"
  - "attachment"
  - "mtu"
  - "up"
  - "to"
  - "8896"
  - "bytes"
  - "interconnect"
---

# VLAN attachment MTU up to 8896 bytes

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports VLAN attachments with a maximum transmission unit of up to 8896 bytes.

## Extended Definition

Cloud Interconnect supports VLAN attachments with a maximum transmission unit of up to 8896 bytes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)

## Supporting Pages

### HA VPN over Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The VLAN attachments that you create for HA VPN over Cloud Interconnect support connections to Private Service Connect endpoints .
- The IP address ranges learned by the Cloud Router on the Cloud Interconnect tier are used to select the internal traffic sent to the HA VPN gateways and the VLAN attachments.
- Each tier requires its own Cloud Router: The Cloud Router for Cloud Interconnect is used exclusively to exchange VPN gateway prefixes between the VLAN attachments.
- HA VPN over Cloud Interconnect payload MTU : is between 1354 to 1386 bytes, depending on the cipher used.

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Interconnect MTU See the MTU information for your use case: If you are connecting your VPC networks to other networks, Cloud Interconnect VLAN attachments support the following four MTU sizes: 1,440 bytes 1,460 bytes 1,500 bytes 8,896 bytes For information about MTU best practices for VLAN attachments, see Use the same MTU for all VLAN attachments .
- The following reserved IP address ranges are not supported: Reserved IPv4 address ranges: 0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8 172.16.0.0/12 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 192.168.0.0/16 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 224.0.0.0/4 240.0.0.0/4 Reserved IPv6 address ranges: ::ffff:0:0/96 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:/32 2001:20::/28 2001:db8::/32 fe80::/10 2002::/16 3fff::/20 5f00::/16 fc00::/7 fe80::/10 ff00::/8 Configure custom IP address ranges To create VLAN attachments with custom IP address ranges, see the following pages: Dedicated Interconnect: configure custom IP address ranges Layer 2 Partner Interconnect connections: use custom IP address ranges with Layer 2 connections Layer 3 Partner Interconnect connections: use custom IP address ranges with Layer 3 connections Cross-Cloud Interconnect: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Support for GRE traffic Cloud Interconnect supports GRE traffic.
- For Partner Interconnect, the following connection capacities for each VLAN attachment are supported: 50-Mbps to 50-Gbps VLAN attachments.
- Visualize and monitor Cloud Interconnect connections and VLAN attachments Network Topology is a visualization tool that shows the topology of your VPC networks, hybrid connectivity to and from your on-premises networks, and the associated metrics.

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 10-Gbps increments up to eight circuits (80 Gbps) to increase the maximum total bandwidth of all VLAN attachments that use the Cloud Interconnect connection to 80 Gbps.
- To achieve maximum throughput, you must use multiple five-tuple flows (for example: 10+) with packet sizes within the MTU of the VLAN attachment.
- Maximum bandwidth per VLAN attachment Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps The maximum possible bandwidth per VLAN attachment depends on the bandwidth capacity that you order.
- Maximum transmission unit (MTU) 1,440 bytes 1,460 bytes 1,500 bytes 8,896 bytes Depending on the VLAN attachment MTU setting, the size of the largest IP address packet that can be transmitted over a VLAN attachment.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- The following limitations apply: VLAN attachments with an MTU of 8896 (also known as jumbo frames ) are supported only on unencrypted IPv4 and IPv6 VLAN attachments.
- VLAN attachment MTU options VLAN attachments can have a maximum transmission unit (MTU) of 1440, 1460, 1500 or 8896 bytes.
- Use the following procedure to create a dual-stack Dedicated Interconnect VLAN attachment and all supported BGP sessions.
- Create VLAN attachments Dual-stack IPv4 and IPv6 VLAN attachments A Dedicated Interconnect VLAN attachment that is configured with the dual-stack (IPv4 and IPv6) stack type can support both IPv4 and IPv6 traffic.

