---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.450Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC RDMA network profile"
feature_slug: "vpc-rdma-network-profile"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network"
keywords:
  - "vpc"
  - "rdma"
  - "network"
  - "profile"
  - "now"
  - "supports"
  - "an"
  - "that"
---

# VPC RDMA network profile

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC now supports an RDMA network profile that enables AI workloads on VM instances with RDMA network interfaces.

## Extended Definition

VPC now supports an RDMA network profile that enables AI workloads on VM instances with RDMA network interfaces.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- You only need to configure a network profile if you want to run AI Hypercomputer workloads that require RDMA NICs.
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " IP RANGE ", "network": " NETWORK URL ", "name": " SUBNET " "stackType": IPV4 IPV6, "ipv6AccessType": IPv6 ACCESS TYPE } Replace the following: PROJECT ID : the ID of the project that contains the VPC network to modify.
- If you want to select the /48 IPv6 range that is assigned, use the --internal-ipv6-range flag to specify a range. gcloud compute networks update NAME \ --enable-ula-internal-ipv6 \ [ --internal-ipv6-range= ULA IPV6 RANGE ] Replace the following: NAME : the name of the VPC network.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .
- Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- If these services use the host project VPC network, the analysis automatically includes the host VPC network information such as firewall rules and routes.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud provides RDMA network profiles that let you create Virtual Private Cloud (VPC) networks that support RDMA connectivity.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Unless you create an organizational policy that prohibits it, new projects start with a default network (an auto mode VPC network) that has one subnetwork (subnet) in each region.

### "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two ways to start using a VPC network with a different MTU setting: You can change the MTU setting of an existing VPC network, which requires that you shut down all VMs in the network at the same time.
- Run the following command to determine the index of the interface that you want to update: netsh interface ipv4 show interface Update the interface: netsh interface ipv4 set interface INTERFACE INDEX mtu= MTU store=persistent Update the device driver configuration: Open the Device Manager with following command: devmgmt.msc Expand the Network adapters category.
- PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK { "mtu": MTU } Replace the placeholders with valid values: PROJECT ID is the ID of the project that contains the VPC network to modify.
- For each zone in the network, start all VMs in that zone. gcloud compute instances start INSTANCE NAMES... \ --zone= ZONE Replace the placeholders with valid values: INSTANCE NAMES... is a space-separated list of instances.

