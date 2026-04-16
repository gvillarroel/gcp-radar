---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.486Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology higher-egress views"
feature_slug: "network-topology-higher-egress-views"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
keywords:
  - "network"
  - "topology"
  - "higher"
  - "egress"
  - "views"
  - "provides"
  - "dedicated"
  - "and"
---

# Network Topology higher-egress views

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress.

## Extended Definition

Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Network Topology provides dedicated views that rank resources where you can start your troubleshooting and analysis.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.

### "Roles and permissions \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Predefined roles for Cloud Network Insights Cloud Network Insights has the following predefined roles that allow you to either modify all Cloud Network Insights resources or view the resources: Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) If you want to grant users the ability to view Cloud Network Insights in projects where it is already enabled, you can grant users one of the following predefined roles: Cloud Network Management Viewer ( roles/networkmanagement.viewer ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Lowest-level resources where you can grant this role: Project networkmanagement.providers.get networkmanagement.providers.list networkmanagement.providers.generateProviderAccessToken networkmanagement.monitoringPoints.get networkmanagement.monitoringPoints.list networkmanagement.networkPaths.get networkmanagement.networkPaths.list networkmanagement.webPaths.get networkmanagement.webPaths.list productrequirementsservice.requirements.check Alerts and logs roles The following table describes the IAM predefined roles and their associated permissions to view or manage alerts and logs based on Cloud Network Insights data.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights roles The following tables describe the IAM predefined roles and their associated permissions for Cloud Network Insights.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.
- It identifies network failures, provides root cause information, and suggests possible resolutions.
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- This panel provides information such as the source, destination, traffic, drill down options, and egress autonomous system (AS) paths.
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Home Documentation Networking Network Intelligence Center Flow Analyzer Guides Flow Analyzer overview Stay organized with collections Save and categorize content based on your preferences.
- It lets you monitor, troubleshoot, and optimize your networking deployment for better performance and enhanced security which helps ensure compliance, and save on costs.

