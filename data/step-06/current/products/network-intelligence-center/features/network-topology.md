---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.483Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology"
feature_slug: "network-topology"
latest_feature_date: "2024-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
keywords:
  - "network"
  - "topology"
  - "provides"
  - "gke"
  - "enterprise"
  - "view"
  - "with"
  - "infrastructure"
---

# Network Topology

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology provides a GKE Enterprise view with infrastructure, metrics, and topology data for GKE deployments; Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress, with filters for traffic type.

## Extended Definition

Network Topology provides a GKE Enterprise view with infrastructure, metrics, and topology data for GKE deployments; Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress, with filters for traffic type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 398
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- The following list describes the paths that Network Topology visualizes between entities in the GKE Enterprise view, available only for GKE Enterprise projects: Traffic within a GKE cluster such as the traffic between pairs of GKE pods on different GKE nodes.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- GKE Enterprise view (for GKE Enterprise enabled projects): Shows the infrastructure of your Google Kubernetes Engine (GKE) deployments: clusters, namespaces, workloads, pods, and their associated metrics.
- It enables you to monitor your networks in the following ways: View the topology of your network infrastructure and deployments.
- Network Topology combines configuration information with real-time operational data in a single view.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Network Analyzer Guides Send feedback Network Analyzer overview Stay organized with collections Save and categorize content based on your preferences.
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- If a network failure is detected, it tries to correlate the failure with recent configuration changes to identify root causes.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Features and benefits Cloud Network Insights provides the following benefits: Proactive detection : Identify network and application performance issues with synthetic testing, often before they impact users.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Cloud Network Insights overview Stay organized with collections Save and categorize content based on your preferences.
- After processing this data through specialized analysis engines, Cloud Network Insights exports the results with Google Cloud Observability to provide a unified view of your network health.

