---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.483Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Private Service Access IP address utilization summary insight"
feature_slug: "private-service-access-ip-address-utilization-summary-insight"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control"
keywords:
  - "private"
  - "access"
  - "ip"
  - "address"
  - "utilization"
  - "summary"
  - "insight"
  - "network"
---

# Private Service Access IP address utilization summary insight

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Analyzer provides an insight that summarizes IP address utilization across all Private Service Access ranges.

## Extended Definition

Network Analyzer provides an insight that summarizes IP address utilization across all Private Service Access ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.
- It does not support the following access methods to Google-managed services: External traffic from the internet Direct Google access from the VMs Private Google Access from on-premises hosts Network Topology doesn't show traffic to or from some of the Google-managed services such as App Engine Memcache, Filestore, Memorystore, Cloud SQL, and partner and marketplace solutions.
- They are typically hosts that communicate with resources in your network over external IP addresses. business region > country # Cloud Interconnect Network Topology shows the Dedicated Interconnect or Partner Interconnect connections.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- In the IP address utilization insights, the VMs and load balancers in the service projects are included in the calculation of IP address allocation.
- Network insight Provides a single-line description of the issue type being reported.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring Points require outbound internet access to communicate back to the Cloud Network Insights control plane.
- If the target network assigns IP addresses automatically, select Obtain settings using DHCP .
- NTP 1 (optional): The primary Network Time Protocol address (IP or FQDN).
- Network Gateway : The default gateway IP address.

### "Roles and permissions \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Predefined roles for Cloud Network Insights Cloud Network Insights has the following predefined roles that allow you to either modify all Cloud Network Insights resources or view the resources: Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) If you want to grant users the ability to view Cloud Network Insights in projects where it is already enabled, you can grant users one of the following predefined roles: Cloud Network Management Viewer ( roles/networkmanagement.viewer ) Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Lowest-level resources where you can grant this role: Project networkmanagement.providers.get networkmanagement.providers.list networkmanagement.providers.generateProviderAccessToken networkmanagement.providers.create networkmanagement.providers.delete networkmanagement.providers.downloadConfig networkmanagement.monitoringPoints.get networkmanagement.monitoringPoints.list networkmanagement.networkPaths.get networkmanagement.networkPaths.list networkmanagement.webPaths.get networkmanagement.webPaths.list productrequirementsservice.requirements.record productrequirementsservice.requirements.check Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer ) Read-only access to Cloud Network Insights resources.
- Lowest-level resources where you can grant this role: Project networkmanagement.providers.get networkmanagement.providers.list networkmanagement.providers.generateProviderAccessToken networkmanagement.monitoringPoints.get networkmanagement.monitoringPoints.list networkmanagement.networkPaths.get networkmanagement.networkPaths.list networkmanagement.webPaths.get networkmanagement.webPaths.list productrequirementsservice.requirements.check Alerts and logs roles The following table describes the IAM predefined roles and their associated permissions to view or manage alerts and logs based on Cloud Network Insights data.
- Role Permissions Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) Full access to Cloud Network Insights resources.

