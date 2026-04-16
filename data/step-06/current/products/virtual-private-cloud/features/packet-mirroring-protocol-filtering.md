---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.484Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Packet Mirroring protocol filtering"
feature_slug: "packet-mirroring-protocol-filtering"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview"
keywords:
  - "packet"
  - "mirroring"
  - "protocol"
  - "filtering"
  - "introduced"
  - "general"
  - "availability"
  - "for"
---

# Packet Mirroring protocol filtering

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduced General Availability for Packet Mirroring with full control over which protocols are included in mirrored traffic.

## Extended Definition

Introduced General Availability for Packet Mirroring with full control over which protocols are included in mirrored traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)

## Supporting Pages

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For DHCP protocol, including UDP IPv4 packets to destination port 68 (DHCPv4 responses) and UDP IPv6 packets to destination port 546 (DHCPv6 responses), DHCP traffic is only allowed from the metadata server (169.254.169.254).
- Probable cause The packet is sent using a protocol that isn't supported by the forwarding rule, or the packet is sent to a destination port that doesn't match the ports supported by the forwarding rule.
- Forwarding rule mismatch The forwarding rule's protocol and ports don't match the packet header.
- If this is a route with next-hop-ilb , the next hop address must be an address of the internal passthrough Network Load Balancer (forwarding rules used by other load balancers, protocol forwarding, or as Private Service Connect endpoints are not supported).

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, if that resource is available.
- Packet Mirrorings The number of Packet Mirroring policies that you can create in your project, in any network and region.
- Load balancer and protocol forwarding rules See Forwarding rules in the load balancing quotas documentation.
- Load balancer and protocol forwarding rules See Forwarding rules in the load balancing quotas documentation.

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- You can filter on any subset of fields listed in Record format , except for the following fields: rtt msec bytes sent packets sent start time end time VPC Flow Logs filtering uses CEL, an embedded expression language for attribute-based logic expressions.
- Metadata load balancing LoadBalancingDetails If the flow passes through a load balancer in one of the following configurations, this field is populated with Cloud Load Balancing details: The reporter of the flow is the client of the load balancer, and the load balancer type is APPLICATION LOAD BALANCER , PROXY NETWORK LOAD BALANCER , PASSTHROUGH NETWORK LOAD BALANCER , or PROTOCOL FORWARDING .
- If the backend group type is TARGET POOL , this field isn't populated. vpc VpcDetails VPC network details of the load balancer NetworkServiceDetails field format Field Type Description dscp int32 If the Differentiated Services field is present in packet headers, this field is populated with the DSCP value.
- 2 For Falcon traffic, the bytes sent value is calculated differently for the source and destination: If the source VM is the reporter, the reported bytes value is the sum of the user payload bytes and packet header bytes sent.

### "Performance Dashboard overview \_|\_ Network Intelligence Center - Performance\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dashboard lets you see and understand the following: Packet loss summary Packet loss average between region pairs of the regions selected Packet loss average between zone pairs of selected regions Latency summary Latency median between region pairs of the regions selected Latency median between zone pairs of the regions selected Traffic between VM instances Performance Dashboard shows packet loss and latency metrics (in summary charts and heatmap views) for zones where you have Compute Engine virtual machine (VM) instances.
- What's next Project performance use cases View project-specific packet loss dashboard View Google Cloud packet loss dashboard Troubleshoot Performance Dashboard Learn more about packet sampling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Project performance view In the project performance view, Performance Dashboard shows packet loss or latency metrics only for zones where you have project virtual machine (VM) instances.
- Google Cloud performance view In the Google Cloud performance view, Performance Dashboard shows zone-to-zone packet loss and latency metrics across all Google Cloud.

