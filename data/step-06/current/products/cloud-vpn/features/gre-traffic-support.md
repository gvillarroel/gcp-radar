---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.047Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "GRE traffic support"
feature_slug: "gre-traffic-support"
latest_feature_date: "2021-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting"
keywords:
  - "gre"
  - "traffic"
  - "vpn"
  - "supports"
  - "carrying"
  - "over"
  - "tunnels"
---

# GRE traffic support

Product: Cloud VPN
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN supports carrying GRE traffic over VPN tunnels; Cloud VPN supports carrying GRE traffic over VPN tunnels.

## Extended Definition

Cloud VPN supports carrying GRE traffic over VPN tunnels; Cloud VPN supports carrying GRE traffic over VPN tunnels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)

## Supporting Pages

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- The unhealthy VPN tunnel in turn causes removal of the routes using this tunnel as a next-hop (BGP routes or static routes) triggering a failover of VM traffic to other VPN tunnels that are healthy.
- Network bandwidth Each Cloud VPN tunnel supports up to 250,000 packets per second for the sum of ingress and egress traffic.
- Cloud VPN supports generic routing encapsulation (GRE) traffic.
- To support IPv6 traffic in HA VPN tunnels, do the following: Use the IPV6 ONLY or IPV4 IPV6 stack type when creating a HA VPN gateway and tunnels that connect IPv6-enabled VPC networks with other IPv6-enabled networks.

### View logs and metrics \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature lets you quickly see the amount of traffic moving between entities, such as the traffic traversing the VPN tunnels between Google Cloud and the on-premises network.
- It can be set to as low as one second (1s), and scaled higher if more data sampling points over a longer period of days are needed. ( rate({"vpn.googleapis.com/network/sent bytes count", monitored resource="vpn gateway", tunnel name=" TUNNEL NAME "}[1m]) + rate({"vpn.googleapis.com/network/received bytes count", monitored resource="vpn gateway", tunnel name=" TUNNEL NAME "}[1m]) ) > 187500000 # 187.5 MBy/s 1000000 Query for pps : This example query notifies you when the sum of sent packets count and received packets count exceeds 50% of the maximum recommended packet rate of 250,000 pps for a given VPN tunnel. ( rate({"vpn.googleapis.com/network/sent packets count", monitored resource="vpn gateway", tunnel name=" TUNNEL NAME "}[1m]) + rate({"vpn.googleapis.com/network/received packets count", monitored resource="vpn gateway", tunnel name=" TUNNEL NAME "}[1m]) ) > 125000 For more information about PromQL, see PromQL for Cloud Monitoring .
- After sampling, data is not visible for up to 60 seconds. configured for sla : (BOOL) Whether the HA connection is fully configured for SLA. gcp service health : (BOOL) Whether the Google Cloud side of the HA connection is fully functional. end to end health : (BOOL) Whether the HA connection is functional end-to-end. network/dropped received packets count GA (project) Incoming packets dropped DELTA , INT64 , 1 vpn gateway Ingress (received from peer VPN) packets dropped for tunnel.
- After sampling, data is not visible for up to 180 seconds. tunnel name : The name of the tunnel. gateway name : The name of the gateway managing the tunnel. network/dropped sent packets count GA (project) Outgoing packets dropped DELTA , INT64 , 1 vpn gateway Egress (directed to peer VPN) packets dropped for tunnel.

### HA VPN topologies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- In this topology, you create HA VPN tunnels to carry IPsec-encrypted traffic over VLAN attachments of either Dedicated Interconnect or Partner Interconnect.
- If you use an active-passive configuration across multiple HA VPN gateways—with an active and passive tunnel pair configured on each gateway—HA VPN doesn't use the passive tunnels for failover until all the active tunnels on all gateways have failed.
- If you deploy an HA VPN gateway with IPV6 ONLY or IPV4 IPV6 stack type, then your VPN tunnels can support the exchange of IPv6 traffic.
- However, this configuration effectively under provisions the tunnels and can cause dropped traffic in case of failover.

### Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Use the following guidelines when defining traffic selectors: The local traffic selector for the Cloud VPN tunnel should cover all subnets in your Virtual Private Cloud (VPC) network that you need to share with your peer network.
- Classic VPN also supports using multiple CIDR blocks for traffic selectors with IKEv2, but it uses a single Child SA for all CIDR blocks.
- Important: For Classic VPN using static routing, IKEv1 supports a single IP range (CIDR block) for each traffic selector.
- The implied allow egress rule permits outgoing ICMP traffic from your network unless you have overridden it.

