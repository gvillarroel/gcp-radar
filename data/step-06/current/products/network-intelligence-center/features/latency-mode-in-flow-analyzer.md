---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.478Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Latency mode in Flow Analyzer"
feature_slug: "latency-mode-in-flow-analyzer"
latest_feature_date: "2026-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
keywords:
  - "latency"
  - "mode"
  - "in"
  - "flow"
  - "analyzer"
  - "can"
  - "display"
  - "traffic"
---

# Latency mode in Flow Analyzer

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Flow Analyzer can display traffic flows in latency mode to analyze round-trip time.

## Extended Definition

Flow Analyzer can display traffic flows in latency mode to analyze round-trip time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)

## Supporting Pages

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- When flow logs are stored in Observability Analytics-enabled buckets in Cloud Logging, you can use Flow Analyzer to query and visualize your traffic data.
- Flow Analyzer provides two modes for customizing how data is displayed: Data volume (default): displays bytes and packets sent.
- You can choose one of the following four approaches to determine which VPC Flow Logs contribute to the computed metrics and how they are evaluated: Source endpoint : the number of bytes sent or packets sent reported at the source endpoint of a flow Destination endpoint : the number of bytes sent or packets sent reported at the destination endpoint of a flow Sum of source and destination endpoint : the sum of bytes sent or packets sent reported by both endpoints of a flow Average of source and destination endpoint : an average of bytes sent or packets sent reported by both endpoints of a flow if both the source and the destination information are available in VPC Flow Logs Traffic deduplication To prevent traffic reported at the source and destination VMs from being counted twice, you can choose the Average of source and destination endpoint sampling option.

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The following environments are supported: Google Cloud VPC networks in the same or different projects Remote branch offices or retail locations On-premises data centers Other cloud environments, for example, AWS or Azure If you need help to determine where to install Monitoring Points to target strategic web application deployment, use VPC Flow Logs or vm flow metrics in a performance dashboard to understand where traffic is flowing in your network.
- They are the source of all synthetic network traffic and can also be a target of testing.
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.
- Get image and configuration You can download a zip file locally with the Monitoring Point images and configuration files or generate a command to download the installation bundle on the machine you're installing the Monitoring Point on.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Instead, Network Topology displays the traffic as if it were to and from an external location by using two connections: one connection between the first VM and the country of the second VM, and another connection between the second VM and the country of the first VM.
- IP address considerations For traffic between VM instances in Google Cloud that communicate using external IP addresses, Network Topology does not display a single connection directly between the VMs.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Flow Analyzer Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).
- Developed using Observability Analytics and powered by BigQuery , Flow Analyzer enables in-depth analysis of inbound and outbound traffic of your VM instances.
- VPC Flow Logs can be used for network monitoring, forensics, real-time security analysis, and expense optimization.

