---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.492Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Infrastructure segments"
feature_slug: "infrastructure-segments"
latest_feature_date: "2020-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
keywords:
  - "infrastructure"
  - "segments"
  - "were"
  - "network"
  - "topology"
  - "capability"
  - "for"
  - "representing"
---

# Infrastructure segments

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Infrastructure segments were a Network Topology capability for representing infrastructure segments in the topology view; deprecated on 2020-07-30.

## Extended Definition

Infrastructure segments were a Network Topology capability for representing infrastructure segments in the topology view; deprecated on 2020-07-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- For more information, see the Cloud Interconnect overview . interconnect VLAN attachments Network Topology shows the VLAN attachments to Dedicated Interconnect or Partner Interconnect connections. interconnect > interconnect attachments Cloud VPN gateway Network Topology shows the Cloud VPN gateway connections.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- It enables you to monitor your networks in the following ways: View the topology of your network infrastructure and deployments.
- Network Topology combines configuration information with real-time operational data in a single view.
- For more information, see the Network Topology overview .

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- You can deploy them to critical network segments that represent your user base or application backend to monitor your network or web application performance.
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Features and benefits Cloud Network Insights provides the following benefits: Proactive detection : Identify network and application performance issues with synthetic testing, often before they impact users.

