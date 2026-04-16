---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.572Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "1500 MTU support"
feature_slug: "1500-mtu-support"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect"
keywords:
  - "1500"
  - "mtu"
  - "interconnect"
  - "supports"
  - "an"
  - "of"
  - "bytes"
---

# 1500 MTU support

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports an MTU of 1500 bytes.

## Extended Definition

Cloud Interconnect supports an MTU of 1500 bytes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum transmission unit (MTU) 1,440 bytes 1,460 bytes 1,500 bytes 8,896 bytes Depending on the VLAN attachment MTU setting, the size of the largest IP address packet that can be transmitted over a VLAN attachment.
- Maximum lifetime of (Partner Interconnect) VLAN attachment pairing key 28 days The maximum amount of time that can pass between generating a (Partner Interconnect) VLAN attachment pairing key and successful attachment provisioning by the service provider.
- VLAN attachments total Mbps Quota The maximum bandwidth capacity of all VLAN attachments in a given region for a given project, irrespective of their relationship with Interconnect connections.
- 10-Gbps increments up to eight circuits (80 Gbps) to increase the maximum total bandwidth of all VLAN attachments that use the Cloud Interconnect connection to 80 Gbps.

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following reserved IP address ranges are not supported: Reserved IPv4 address ranges: 0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8 172.16.0.0/12 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 192.168.0.0/16 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 224.0.0.0/4 240.0.0.0/4 Reserved IPv6 address ranges: ::ffff:0:0/96 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:/32 2001:20::/28 2001:db8::/32 fe80::/10 2002::/16 3fff::/20 5f00::/16 fc00::/7 fe80::/10 ff00::/8 Configure custom IP address ranges To create VLAN attachments with custom IP address ranges, see the following pages: Dedicated Interconnect: configure custom IP address ranges Layer 2 Partner Interconnect connections: use custom IP address ranges with Layer 2 connections Layer 3 Partner Interconnect connections: use custom IP address ranges with Layer 3 connections Cross-Cloud Interconnect: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Support for GRE traffic Cloud Interconnect supports GRE traffic.
- Cloud Interconnect MTU See the MTU information for your use case: If you are connecting your VPC networks to other networks, Cloud Interconnect VLAN attachments support the following four MTU sizes: 1,440 bytes 1,460 bytes 1,500 bytes 8,896 bytes For information about MTU best practices for VLAN attachments, see Use the same MTU for all VLAN attachments .
- If you are connecting your on-premises networks to each other, cross-site networks support an MTU size of 9,000 bytes.
- The following configurations require that you create custom advertised routes on your Cloud Router to direct traffic from your on-premises network to certain internal IP addresses by using a Cloud Interconnect connection: Configure Private Google Access for on-premises hosts Create a Cloud DNS forwarding zone Alternative name server network requirements Cloud Interconnect as a data transfer network Before you use Cloud Interconnect, carefully review Section 2 of the General Service Terms for Google Cloud.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- VLAN attachment MTU options VLAN attachments can have a maximum transmission unit (MTU) of 1440, 1460, 1500 or 8896 bytes.
- Cloud Interconnect groups You can use connection groups to communicate your intended level of reliability, and to receive feedback on how your Cloud Interconnect resources meet that intended level of reliability.
- Single stack (IPv4 only) Dual stack (IPv4 and IPv6) The stack type that you select for your VLAN attachment determines what version of IP traffic is supported by your Dedicated Interconnect connection.
- Custom IP address ranges When you create a VLAN attachment for Dedicated Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.

### HA VPN over Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/ha-vpn-interconnect)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Payload and latency: HA VPN over Cloud Interconnect differentiates between the following maximum transmission unit (MTU) values: HA VPN over Cloud Interconnect gateway MTU : 1440 bytes.
- Multi-region deployment for production-level applications If the deployment uses a multi-region Cloud Interconnect topology, the HA VPN over Cloud Interconnect deployment has an SLA of 99.99%.
- Single region deployment for non-critical applications If the deployment uses a single region Cloud Interconnect topology, the HA VPN over Cloud Interconnect deployment has an SLA of 99.9%.
- As a solution, HA VPN over Cloud Interconnect has the advantage of providing deployment tools by using the Google Cloud console, the Google Cloud CLI, and the Compute Engine API.

