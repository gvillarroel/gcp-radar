---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.488Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology higher-egress views and insights"
feature_slug: "network-topology-higher-egress-views-and-insights"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/apis"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights"
keywords:
  - "network"
  - "topology"
  - "higher"
  - "egress"
  - "views"
  - "and"
  - "insights"
  - "provides"
---

# Network Topology higher-egress views and insights

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress and supports traffic-type filtering.

## Extended Definition

Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress and supports traffic-type filtering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/apis](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/apis)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Network Topology provides dedicated views that rank resources where you can start your troubleshooting and analysis.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- Insights for entities with high metric values In addition to the average hourly metrics, Network Topology also shows the ranking of VMs or instance groups that generate the highest egress.

### "Roles and permissions \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Predefined roles for Cloud Network Insights Cloud Network Insights has the following predefined roles that allow you to either modify all Cloud Network Insights resources or view the resources: Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) If you want to grant users the ability to view Cloud Network Insights in projects where it is already enabled, you can grant users one of the following predefined roles: Cloud Network Management Viewer ( roles/networkmanagement.viewer ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Lowest-level resources where you can grant this role: Project networkmanagement.providers.get networkmanagement.providers.list networkmanagement.providers.generateProviderAccessToken networkmanagement.monitoringPoints.get networkmanagement.monitoringPoints.list networkmanagement.networkPaths.get networkmanagement.networkPaths.list networkmanagement.webPaths.get networkmanagement.webPaths.list productrequirementsservice.requirements.check Alerts and logs roles The following table describes the IAM predefined roles and their associated permissions to view or manage alerts and logs based on Cloud Network Insights data.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights roles The following tables describe the IAM predefined roles and their associated permissions for Cloud Network Insights.

### "APIs and reference \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/apis](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/apis)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights APIs & Reference APIs and reference Stay organized with collections Save and categorize content based on your preferences.
- This page describes Google Cloud CLI commands and APIs that can be used with Cloud Network Insights and links to Broadcom AppNeta APIs that can be used in conjunction with Google Cloud CLI APIs.
- As such, both Google Cloud APIs and Broadcom AppNeta APIs can be used to perform actions with Cloud Network Insights.
- You can perform actions such as the following using the Network Management APIs: Get Monitoring Point information Create and delete monitor providers Download installation scripts Network Management v1alpha1 reference Download installation scripts, generate access tokens, and get information about Monitoring Points, network paths, and web paths with the v1alpha1 version of the Network Management API.

### "Enable Cloud Network Insights \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Enable Cloud Network Insights Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ): To enable Cloud Network Insights and editing permissions for Cloud Network Insights resources.
- Once Cloud Network Insights is enabled, a corresponding AppNeta instance is provisioned to provide telemetry data, more monitoring options, and to allow further configuration.
- Enable Cloud Network Insights Open the Google Cloud console and navigate to Network Intelligence > Cloud Network Insights .

