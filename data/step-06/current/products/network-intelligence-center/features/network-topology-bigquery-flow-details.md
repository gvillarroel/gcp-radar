---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.492Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology BigQuery flow details"
feature_slug: "network-topology-bigquery-flow-details"
latest_feature_date: "2020-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
keywords:
  - "network"
  - "topology"
  - "flow"
  - "details"
  - "can"
  - "show"
  - "connection"
  - "related"
---

# Network Topology BigQuery flow details

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology can show connection-related subnet details and VPC Flow Logs status in the View flows in BigQuery pane.

## Extended Definition

Network Topology can show connection-related subnet details and VPC Flow Logs status in the View flows in BigQuery pane.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- For more information, see the Cloud Interconnect overview . interconnect VLAN attachments Network Topology shows the VLAN attachments to Dedicated Interconnect or Partner Interconnect connections. interconnect > interconnect attachments Cloud VPN gateway Network Topology shows the Cloud VPN gateway connections.
- They are typically hosts that communicate with resources in your network over external IP addresses. business region > country # Cloud Interconnect Network Topology shows the Dedicated Interconnect or Partner Interconnect connections.
- For more information, see the Cloud VPN overview . gateway > Cloud VPN Network Topology shows the Cloud VPN connections. gateway > vpn tunnel On-premises Network Topology shows the on-premises networks.

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- For example, if a flow includes generic details about 1,000 GiB traffic from Google Cloud zone X to zone Y, you can drill down using another field such as the source IP address.
- VPC Flow Logs can be used for network monitoring, forensics, real-time security analysis, and expense optimization.
- You can choose one of the following four approaches to determine which VPC Flow Logs contribute to the computed metrics and how they are evaluated: Source endpoint : the number of bytes sent or packets sent reported at the source endpoint of a flow Destination endpoint : the number of bytes sent or packets sent reported at the destination endpoint of a flow Sum of source and destination endpoint : the sum of bytes sent or packets sent reported by both endpoints of a flow Average of source and destination endpoint : an average of bytes sent or packets sent reported by both endpoints of a flow if both the source and the destination information are available in VPC Flow Logs Traffic deduplication To prevent traffic reported at the source and destination VMs from being counted twice, you can choose the Average of source and destination endpoint sampling option.

### "Network Management API \_|\_ Network Intelligence Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.vpcFlowLogsConfigs Methods create POST /v1beta1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs Creates a new VpcFlowLogsConfig . delete DELETE /v1beta1/{name=projects/ /locations/ /vpcFlowLogsConfigs/ } Deletes a specific VpcFlowLogsConfig . get GET /v1beta1/{name=projects/ /locations/ /vpcFlowLogsConfigs/ } Gets the details of a specific VpcFlowLogsConfig . list GET /v1beta1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs Lists all VpcFlowLogsConfigs in a given project. patch PATCH /v1beta1/{vpcFlowLogsConfig.name=projects/ /locations/ /vpcFlowLogsConfigs/ } Updates an existing VpcFlowLogsConfig . queryOrgVpcFlowLogsConfigs GET /v1beta1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs:queryOrgVpcFlowLogsConfigs QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project. showEffectiveFlowLogsConfigs GET /v1beta1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs:showEffectiveFlowLogsConfigs ShowEffectiveFlowLogsConfigs returns a list of all VPC Flow Logs configurations applicable to a specified resource.
- REST Resource: v1.projects.locations.vpcFlowLogsConfigs Methods create POST /v1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs Creates a new VpcFlowLogsConfig . delete DELETE /v1/{name=projects/ /locations/ /vpcFlowLogsConfigs/ } Deletes a specific VpcFlowLogsConfig . get GET /v1/{name=projects/ /locations/ /vpcFlowLogsConfigs/ } Gets the details of a specific VpcFlowLogsConfig . list GET /v1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs Lists all VpcFlowLogsConfigs in a given project. patch PATCH /v1/{vpcFlowLogsConfig.name=projects/ /locations/ /vpcFlowLogsConfigs/ } Updates an existing VpcFlowLogsConfig . queryOrgVpcFlowLogsConfigs GET /v1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs:queryOrgVpcFlowLogsConfigs QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project. showEffectiveFlowLogsConfigs GET /v1/{parent=projects/ /locations/ }/vpcFlowLogsConfigs:showEffectiveFlowLogsConfigs ShowEffectiveFlowLogsConfigs returns a list of all VPC Flow Logs configurations applicable to a specified resource.
- REST Resource: v1beta1.organizations.locations REST Resource: v1beta1.organizations.locations.global.operations REST Resource: v1beta1.organizations.locations.vpcFlowLogsConfigs REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.global.connectivityTests REST Resource: v1beta1.projects.locations.global.operations REST Resource: v1beta1.projects.locations.vpcFlowLogsConfigs REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.networkMonitoringProviders REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.monitoringPoints REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.networkPaths REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.webPaths REST Resource: v1.organizations.locations REST Resource: v1.organizations.locations.global.operations REST Resource: v1.organizations.locations.vpcFlowLogsConfigs REST Resource: v1.projects.locations REST Resource: v1.projects.locations.global.connectivityTests REST Resource: v1.projects.locations.global.operations REST Resource: v1.projects.locations.vpcFlowLogsConfigs Service: networkmanagement.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta1.organizations.locations.vpcFlowLogsConfigs Methods create POST /v1beta1/{parent=organizations/ /locations/ }/vpcFlowLogsConfigs Creates a new VpcFlowLogsConfig . delete DELETE /v1beta1/{name=organizations/ /locations/ /vpcFlowLogsConfigs/ } Deletes a specific VpcFlowLogsConfig . get GET /v1beta1/{name=organizations/ /locations/ /vpcFlowLogsConfigs/ } Gets the details of a specific VpcFlowLogsConfig . list GET /v1beta1/{parent=organizations/ /locations/ }/vpcFlowLogsConfigs Lists all VpcFlowLogsConfigs in a given organization. patch PATCH /v1beta1/{vpcFlowLogsConfig.name=organizations/ /locations/ /vpcFlowLogsConfigs/ } Updates an existing VpcFlowLogsConfig .

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- VPC Flow Logs can be used for network monitoring, forensics, real-time security analysis, and expense optimization.
- You can also view metrics and details of network traffic to other Shared VPC networks and inter-region traffic.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).

