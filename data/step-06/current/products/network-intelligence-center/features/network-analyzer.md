---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.483Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Analyzer"
feature_slug: "network-analyzer"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights"
keywords:
  - "network"
  - "analyzer"
  - "adds"
  - "an"
  - "insight"
  - "that"
  - "flags"
  - "routes"
---

# Network Analyzer

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Analyzer adds an insight that flags routes whose next hop IP address is not assigned to a forwarding rule in the relevant networks; Network Analyzer provides network analysis and troubleshooting capabilities in Network Intelligence Center.

## Extended Definition

Network Analyzer adds an insight that flags routes whose next hop IP address is not assigned to a forwarding rule in the relevant networks; Network Analyzer provides network analysis and troubleshooting capabilities in Network Intelligence Center.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)

## Supporting Pages

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.
- Analysis schedule Network Analyzer generates insights whenever relevant configuration changes are made, as well as periodically.
- Network insight groups and types The results from Network Analyzer analyses are known as insights .

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Home Documentation Networking Network Intelligence Center Flow Analyzer Guides Flow Analyzer overview Stay organized with collections Save and categorize content based on your preferences.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).
- Egress AS paths view In the Egress AS paths tab, you can view the AS paths that egress packets traverse to reach destinations outside of Google Cloud's network.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- Network Analyzer Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).

### "Enable Cloud Network Insights \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Cloud Network Insights If the page fails to load, reach out to your Technical Account Manager to verify that your project has been granted access.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Enable Cloud Network Insights Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ): To enable Cloud Network Insights and editing permissions for Cloud Network Insights resources.
- Once Cloud Network Insights is enabled, a corresponding AppNeta instance is provisioned to provide telemetry data, more monitoring options, and to allow further configuration.

