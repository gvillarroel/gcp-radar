---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.485Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Analyzer data-processing opt-out"
feature_slug: "network-analyzer-data-processing-opt-out"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
keywords:
  - "network"
  - "analyzer"
  - "processing"
  - "opt"
  - "out"
  - "integrates"
  - "with"
  - "transparency"
---

# Network Analyzer data-processing opt-out

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Analyzer integrates with Transparency and Control Center to let Google Cloud users opt out of analysis.

## Extended Definition

Network Analyzer integrates with Transparency and Control Center to let Google Cloud users opt out of analysis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)

## Supporting Pages

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Opt out If you do not want to have projects in your organization analyzed by Network Analyzer, you can go to the Transparency and Control Center to opt out of the Network Analyzer data processing group.
- Home Documentation Networking Network Intelligence Center Network Analyzer Guides Send feedback Network Analyzer overview Stay organized with collections Save and categorize content based on your preferences.
- Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- To change opt-out settings, you must have the Data Processing Controls Resource Admin role ( roles/dataprocessing.admin ).

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Home Documentation Networking Network Intelligence Center Flow Analyzer Guides Flow Analyzer overview Stay organized with collections Save and categorize content based on your preferences.
- Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Flow Analyzer Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Network Analyzer Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).
- Home Documentation Networking Network Intelligence Center Guides Send feedback Network Intelligence Center overview Stay organized with collections Save and categorize content based on your preferences.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- Network Topology supports direct access of VMs to Google-managed services by using a default route with a next hop as the default-internet-gateway or Private Google Access .
- For more information about viewing metrics, see Monitor your networking configuration with Network Topology .
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.

