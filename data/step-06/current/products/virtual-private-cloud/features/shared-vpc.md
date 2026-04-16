---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.504Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Shared VPC"
feature_slug: "shared-vpc"
latest_feature_date: "2017-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
keywords:
  - "shared"
  - "vpc"
  - "provides"
  - "cross"
  - "project"
  - "network"
  - "sharing"
  - "succeeding"
---

# Shared VPC

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Shared VPC provides cross-project network sharing, succeeding the earlier Cross-Project Networking (XPN) model, and is now generally available; Shared VPC enables one host project to share a VPC network with other Google Cloud projects.

## Extended Definition

Shared VPC provides cross-project network sharing, succeeding the earlier Cross-Project Networking (XPN) model, and is now generally available; Shared VPC enables one host project to share a VPC network with other Google Cloud projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC lets you map each tier of the web service to different projects so that they can be managed by different teams while sharing a common VPC network: Resources, such as instances and load balancer components, for each tier are placed in individual service projects managed by different teams.
- You can create your private zone in the host project and authorize access to the zone for the Shared VPC network or set up the zone in a service project using cross-project binding .
- A host project with a Shared VPC network provides internal connectivity for two service projects, while a standalone project doesn't use Shared VPC (click to enlarge).
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can view cross-project metrics for network traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization.
- Cloud Monitoring is especially useful for Shared VPC and VPC Network Peering scenarios, where resources or networks can be in different projects.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- When you configure Cloud Monitoring to have access to the metrics for multiple projects, Network Topology can show network traffic that crosses multiple projects.

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC sharing and peering Google Cloud provides the following configurations for sharing VPC networks across projects and connecting VPC networks to each other.
- VPC Network Peering VPC Network Peering lets you build software as a service (SaaS) ecosystems in Google Cloud, making services available privately across different VPC networks, whether the networks are in the same project, different projects, or projects in different organizations.
- Shared VPC You can share a VPC network from one project (called a host project) to other projects in your Google Cloud organization.
- A VPC network does the following: Provides connectivity for your Compute Engine virtual machine (VM) instances , including Google Kubernetes Engine (GKE) clusters , serverless workloads , and other Google Cloud products built on Compute Engine VMs.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .
- Opt out If you do not want to have projects in your organization analyzed by Network Analyzer, you can go to the Transparency and Control Center to opt out of the Network Analyzer data processing group.

