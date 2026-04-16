---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.487Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Performance Dashboard latency metrics between VMs and Internet endpoints"
feature_slug: "performance-dashboard-latency-metrics-between-vms-and-internet-endpoints"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
keywords:
  - "performance"
  - "dashboard"
  - "latency"
  - "metrics"
  - "between"
  - "vms"
  - "and"
  - "internet"
---

# Performance Dashboard latency metrics between VMs and Internet endpoints

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Performance Dashboard shows latency metrics between VMs and Internet endpoints in project and Google Cloud performance views.

## Extended Definition

Performance Dashboard shows latency metrics between VMs and Internet endpoints in project and Google Cloud performance views.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)

## Supporting Pages

### "Performance Dashboard overview \_|\_ Network Intelligence Center - Performance\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Traffic between Google Cloud and internet locations Performance Dashboard shows latency metrics for regions where you have Compute Engine virtual machine (VM) instances and the internet locations of the end devices that communicate with the VMs.
- Traffic between Google Cloud and internet locations Performance Dashboard shows latency metrics between VMs across all Google Cloud regions and internet endpoints.
- The dashboard lets you see and understand the following: Packet loss summary Packet loss average between region pairs of the regions selected Packet loss average between zone pairs of selected regions Latency summary Latency median between region pairs of the regions selected Latency median between zone pairs of the regions selected Traffic between VM instances Performance Dashboard shows packet loss and latency metrics (in summary charts and heatmap views) for zones where you have Compute Engine virtual machine (VM) instances.
- In such a case, Performance Dashboard provides packet loss and latency metrics for your project between those two zones.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- It does not support the following access methods to Google-managed services: External traffic from the internet Direct Google access from the VMs Private Google Access from on-premises hosts Network Topology doesn't show traffic to or from some of the Google-managed services such as App Engine Memcache, Filestore, Memorystore, Cloud SQL, and partner and marketplace solutions.
- Traffic between Google Cloud and the internet such as traffic between clients on the internet and entities (for example, VM instances or external Application Load Balancers that have external IP addresses).

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- With these performance-monitoring capabilities, you can distinguish between a problem in your application and a problem in the underlying Google Cloud network.
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- This view makes it easier to understand networking relationships between various workloads on Google Cloud and their current state, such as the traffic paths and throughput between virtual machine (VM) instances.
- GKE Enterprise view (for GKE Enterprise enabled projects): Shows the infrastructure of your Google Kubernetes Engine (GKE) deployments: clusters, namespaces, workloads, pods, and their associated metrics.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- View high-level metrics Google Cloud console View standard performance metrics (latency, loss, jitter) for your paths directly in Cloud Monitoring dashboards.
- Metrics and logs All collected telemetry is exported to Google Cloud Observability to visualize your network architecture and performance in a single pane of glass.
- Integrated monitoring : Access metrics and logs directly within Google Cloud, leveraging Cloud Monitoring and Cloud Logging for dashboards and alerting.
- SLA validation : Obtain metrics to verify if ISPs and other service providers meet their performance commitments.

