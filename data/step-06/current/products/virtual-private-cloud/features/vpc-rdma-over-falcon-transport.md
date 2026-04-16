---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.436Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC RDMA over Falcon transport"
feature_slug: "vpc-rdma-over-falcon-transport"
latest_feature_date: "2025-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/overview"
  - "https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network"
keywords:
  - "vpc"
  - "rdma"
  - "over"
  - "falcon"
  - "transport"
  - "you"
  - "can"
  - "create"
---

# VPC RDMA over Falcon transport

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

You can create a VPC network that supports RDMA over Falcon transport for AI and HPC VM workloads using IRDMA-based instances such as H4D.

## Extended Definition

You can create a VPC network that supports RDMA over Falcon transport for AI and HPC VM workloads using IRDMA-based instances such as H4D.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- When expanding the IPv4 range of an automatically created subnet in an auto mode VPC network (or in a custom mode VPC network that was previously an auto mode VPC network), the broadest prefix (subnet mask) you can use is /16 .
- Add a subnet that uses a reserved IPv4 internal range If you have a reserved internal range with usage type set to FOR VPC , and peering type set to FOR SELF , you can create a subnet that uses all or part of that range.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Networks that support subnets with IPv6 address ranges You can create subnets with IPv6 address ranges in a custom mode VPC network.
- Google Cloud provides RDMA network profiles that let you create Virtual Private Cloud (VPC) networks that support RDMA connectivity.
- You need complete control over the subnets created in your VPC network, including regions and IP address ranges used.

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- VPC networks You can think of a VPC network the same way you'd think of a physical network, except that it is virtualized within Google Cloud.
- Network Connectivity Center You can use Network Connectivity Center (NCC) to connect VPC networks by using a hub and spoke connectivity model.
- Shared VPC You can share a VPC network from one project (called a host project) to other projects in your Google Cloud organization.
- You can grant access to entire Shared VPC networks or select subnets therein by using specific IAM permissions .

### "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- You can create a new VPC network with a different MTU setting, and migrate the VMs to it to it.
- There are two ways to start using a VPC network with a different MTU setting: You can change the MTU setting of an existing VPC network, which requires that you shut down all VMs in the network at the same time.
- If you create new VMs, you can create them from scratch, from an existing image, or by creating a snapshot of the existing VMs and using that to populate the new persistent disks.
- If you intend to delete the old network, create a new server in the new network, get it in sync with the existing server, and fail over to it.

