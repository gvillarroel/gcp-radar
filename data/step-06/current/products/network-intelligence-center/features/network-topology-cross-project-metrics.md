---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.485Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology cross-project metrics"
feature_slug: "network-topology-cross-project-metrics"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
keywords:
  - "network"
  - "topology"
  - "cross"
  - "project"
  - "metrics"
  - "includes"
  - "for"
  - "traffic"
---

# Network Topology cross-project metrics

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology includes cross-project metrics for traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization.

## Extended Definition

Network Topology includes cross-project metrics for traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- When you configure Cloud Monitoring to have access to the metrics for multiple projects, Network Topology can show network traffic that crosses multiple projects.
- You can view cross-project metrics for network traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.

### "Performance Dashboard overview \_|\_ Network Intelligence Center - Performance\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dashboard shows the status of the Google Cloud network and lets you compare the performance across all of Google Cloud to the performance observed in your projects.
- Traffic between Google Cloud and internet locations Performance Dashboard shows latency metrics between VMs across all Google Cloud regions and internet endpoints.
- For example, your project has a Virtual Private Cloud network with VMs in region A that receive traffic from clients in cities X and Y.
- Traffic between VM instances Performance Dashboard shows the packet loss and latency metrics across all of Google Cloud.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- When you add projects to a metrics scope, then this metrics scope lets you monitor the data for the scoping project and the monitored projects.
- Multiple projects To view multiple projects in Network Analyzer, configure a metrics scope and add monitored projects to it.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- GKE Enterprise view (for GKE Enterprise enabled projects): Shows the infrastructure of your Google Kubernetes Engine (GKE) deployments: clusters, namespaces, workloads, pods, and their associated metrics.
- Performance Dashboard Performance Dashboard gives you visibility into the performance of the entire Google Cloud network, as well as to the performance of your project's resources.
- An endpoint is a source or destination of network traffic, such as a VM, Google Kubernetes Engine (GKE) cluster, load balancer forwarding rule, or an IP address on the internet.

