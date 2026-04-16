---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.425Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Hybrid subnets"
feature_slug: "hybrid-subnets"
latest_feature_date: "2026-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
keywords:
  - "hybrid"
  - "subnets"
  - "allows"
  - "vpc"
  - "network"
  - "to"
  - "share"
  - "cidr"
---

# Hybrid subnets

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Hybrid Subnets allows a VPC network to share a CIDR block with a connected on-premises network so workloads can migrate to Google Cloud without changing IP addresses; Hybrid subnets allow an on-premises subnet and a VPC subnet to function as a single logical subnet so workloads can be moved gradually from on-premises to VPC while preserving IP addresses.

## Extended Definition

Hybrid Subnets allows a VPC network to share a CIDR block with a connected on-premises network so workloads can migrate to Google Cloud without changing IP addresses; Hybrid subnets allow an on-premises subnet and a VPC subnet to function as a single logical subnet so workloads can be moved gradually from on-premises to VPC while preserving IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both host projects have one Shared VPC network with subnets configured to use the same CIDR ranges.
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.
- Service Project Admin ( compute.networkUser ) • IAM principal in the organization, or • IAM principal in a host project, or • IAM principal in some subnets in the host project A Shared VPC Admin defines a Service Project Admin by granting an IAM principal the Network User ( compute.networkUser ) role to either the whole host project or select subnets of its Shared VPC networks .
- After new Shared VPC networks or new subnets are added to the host project, a Shared VPC Admin should review the permission bindings for the compute.networkUser role to ensure that the subnet-level permissions for all Service Project Admins match the intended configuration.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unusable IPv6 address Description Example The first /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8::/96 from range fd20:db8::/64 The last /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8:0:0:ffff:ffff::/96 from range fd20:db8::/64 What's next Learn more about Geography and regions Create VPC networks Assign an internal IPv6 range for a VPC network Create a subnet Learn about using a hybrid subnet to migrate workloads to a VPC network without changing IP addresses Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud NAT performs in real-world scenarios.
- Limitations for IPv4 subnet ranges IPv4 subnet ranges have the following limitations: Each primary or secondary IPv4 range for all subnets in a VPC network must be a unique valid CIDR block .
- Hybrid Subnets logically extend to an on-premises or source network, letting you migrate workloads to Google Cloud without needing to change IP addresses .
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can grant access to entire Shared VPC networks or select subnets therein by using specific IAM permissions .
- Hybrid cloud Google Cloud provides the following configurations that let you connect your VPC networks to on-premises networks and networks from other cloud providers.
- Each VPC network comes with some system-generated routes to route traffic among its subnets and send traffic from eligible instances to the internet.
- Shared VPC You can share a VPC network from one project (called a host project) to other projects in your Google Cloud organization.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- Cloud Monitoring is especially useful for Shared VPC and VPC Network Peering scenarios, where resources or networks can be in different projects.
- You can also view metrics and details of network traffic to other Shared VPC networks and inter-region traffic.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.

