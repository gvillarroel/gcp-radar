---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.491Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology child-node focus filter"
feature_slug: "network-topology-child-node-focus-filter"
latest_feature_date: "2021-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards"
keywords:
  - "network"
  - "topology"
  - "child"
  - "node"
  - "focus"
  - "filter"
  - "can"
  - "the"
---

# Network Topology child-node focus filter

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology can filter the graph to show only child-node connections while still allowing lower-level paths to be inspected.

## Extended Definition

Network Topology can filter the graph to show only child-node connections while still allowing lower-level paths to be inspected.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- The following list describes the paths that Network Topology visualizes between entities in the GKE Enterprise view, available only for GKE Enterprise projects: Traffic within a GKE cluster such as the traffic between pairs of GKE pods on different GKE nodes.
- An on-premises network can refer to any remote network that is outside the Google Cloud domain. on-premises Router appliance instances Network Topology shows the Router appliance instances.
- Project aggregation When you view multiple projects in a Network Topology graph, you can aggregate Google Cloud entities by project and then by their standard hierarchies.

### "Network Management API \_|\_ Network Intelligence Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.networkMonitoringProviders Methods create POST /v1alpha1/{parent=projects/ /locations/ }/networkMonitoringProviders Creates a NetworkMonitoringProvider resource. delete DELETE /v1alpha1/{name=projects/ /locations/ /networkMonitoringProviders/ } Deletes a NetworkMonitoringProvider resource and all of its child resources. generateProviderAccessToken GET /v1alpha1/{name=projects/ /locations/ /networkMonitoringProviders/ }:generateProviderAccessToken Generates a provider access token for a given Google access token. get GET /v1alpha1/{name=projects/ /locations/ /networkMonitoringProviders/ } Gets the NetworkMonitoringProvider resource. list GET /v1alpha1/{parent=projects/ /locations/ }/networkMonitoringProviders Lists NetworkMonitoringProviders for a given project and location.
- REST Resource: v1beta1.organizations.locations.global.operations Methods cancel POST /v1beta1/{name=organizations/ /locations/global/operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1beta1/{name=organizations/ /locations/global/operations/ } Deletes a long-running operation. get GET /v1beta1/{name=organizations/ /locations/global/operations/ } Gets the latest state of a long-running operation. list GET /v1beta1/{name=organizations/ /locations/global}/operations Lists operations that match the specified filter in the request.
- REST Resource: v1beta1.projects.locations.global.operations Methods cancel POST /v1beta1/{name=projects/ /locations/global/operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1beta1/{name=projects/ /locations/global/operations/ } Deletes a long-running operation. get GET /v1beta1/{name=projects/ /locations/global/operations/ } Gets the latest state of a long-running operation. list GET /v1beta1/{name=projects/ /locations/global}/operations Lists operations that match the specified filter in the request.
- REST Resource: v1.organizations.locations.global.operations Methods cancel POST /v1/{name=organizations/ /locations/global/operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=organizations/ /locations/global/operations/ } Deletes a long-running operation. get GET /v1/{name=organizations/ /locations/global/operations/ } Gets the latest state of a long-running operation. list GET /v1/{name=organizations/ /locations/global}/operations Lists operations that match the specified filter in the request.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Opt out If you do not want to have projects in your organization analyzed by Network Analyzer, you can go to the Transparency and Control Center to opt out of the Network Analyzer data processing group.
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.

### "View dashboards \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- It displays the following key metrics: Average Total HTTP response time Total transaction time Failed test status for web path Failed HTTP test status for WebPath (filtered) (SUM) HTTP download size for WebPath (MAX) HTTP download size for WebPath (MEAN) HTTP download speed for WebPath (MEAN) Maximum total response time for WebPath Request Receive HTTP response time for WebPath (MEAN) DNS Lookup HTTP response time for WebPath (MEAN) TCP Connect HTTP response time for WebPath (MEAN) SSL Connect HTTP response time for WebPath (MEAN) Access the Cloud Network Insights dashboards Cloud Network Insights provides predefined dashboards prepopulated with common troubleshooting metrics for your selected network or web paths.
- RTT AVG. loss Average RTT for NetworkPath (MEAN) Maximum RTT for NetworkPath (MAX) Connectivity Loss (Inbound) Connectivity Loss (Outbound) Total Jitter for NetworkPath (Single-Ended) (SUM) Dual ended inbound data packets received and sent Dual ended outbound data packets received and sent Web paths dashboard The default web paths dashboard is automatically filtered to the paths you selected before you click Open Dashboard .
- You can view additional details in AppNeta by doing one of the following: Click the Actions menu on any Path or Monitoring Point in the Cloud Network Insights UI and select Open in AppNeta .
- Network paths dashboard The default network paths dashboard is automatically filtered to the paths you selected before you clicked Open Dashboard .

