---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.444Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC regional subnets"
feature_slug: "auto-mode-vpc-regional-subnets"
latest_feature_date: "2025-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "regional"
  - "subnets"
  - "an"
  - "network"
  - "gained"
---

# Auto mode VPC regional subnets

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

An auto mode VPC network gained a new subnet (10.226.0.0/20) in the Sweden (europe-north2, Stockholm) region.

## Extended Definition

An auto mode VPC network gained a new subnet (10.226.0.0/20) in the Sweden (europe-north2, Stockholm) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.
- Converting an auto mode VPC network to a custom mode VPC network preserves all of its automatically created subnets and any subnets you have added.
- However, you can convert an auto mode VPC network to a custom mode VPC network and then delete any unused automatically created subnets.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .
- Auto mode VPC networks are built with one subnet per region at creation time and automatically receive new subnets in new regions.
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- Regular subnets are created by users or automatically created in auto mode VPC networks to be used with VM instances.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .

