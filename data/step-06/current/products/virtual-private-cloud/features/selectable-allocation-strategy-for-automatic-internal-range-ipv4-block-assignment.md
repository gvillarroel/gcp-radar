---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.437Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Selectable allocation strategy for automatic internal range IPv4 block assignment"
feature_slug: "selectable-allocation-strategy-for-automatic-internal-range-ipv4-block-assignment"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "selectable"
  - "allocation"
  - "strategy"
  - "for"
  - "automatic"
  - "internal"
  - "range"
  - "ipv4"
---

# Selectable allocation strategy for automatic internal range IPv4 block assignment

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

When reserving an internal range with an automatically allocated IPv4 CIDR block, users can now choose the strategy used to select a free block.

## Extended Definition

When reserving an internal range with an automatically allocated IPv4 CIDR block, users can now choose the strategy used to select a free block.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To create this configuration, do the following: When you create the subnet, you configure One primary CIDR range, for example, 10.128.0.0/16 One secondary CIDR range, for example, 172.16.0.0/16 Use an instance template to create VMs and automatically assign each the following: A primary IP from the 10.128.0.0/16 range An Alias range /24 from the secondary CIDR 172.16.0.0/16 space, so that you can assign each container on a VM an IP from the /24 secondary CIDR range Create two firewall rules .
- Static routes When you create a static route that uses a next hop instance specified by an internal IPv4 address, Google Cloud verifies that the next hop VM IP address fits within a subnet IPv4 range of a subnet in the route's VPC network.
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- Although you can create a route whose next hop address is an internal IPv4 address that fits within an alias IP range, Google Cloud does not program that route—Google Cloud considers the next hop to be down.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Using a secondary range for alias IP allocation lets you separate the IP space for services hosted in the VM, which helps you create firewall rules that allow access only to the services running on the VM and block access to the VM's primary IP address.
- We recommend using a secondary range for alias IP allocation to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.
- Routing is configured automatically for alias IP ranges on the primary network interface but not on secondary interfaces.
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- IP stack IPv4 IPv6 (only for external passthrough Network Load Balancers and subnets that exclusively host VMs) IPv6 IPv4 IPv4 Access type External Internal External External IPv4 prefixes The following table summarizes the CIDR range requirements for IPv4 prefixes.
- Must be smaller than the associated sub-prefix—the difference between the allocatable prefix length and the sub-prefix length must be at least 8, and can't be greater than 32 Valid lengths: /48 , /56 , /64 , /72 , /80 , /88 , /96 Default lengths: If the parent sub-prefix's length is /64 or /72 , the default allocatable prefix length is /96 Otherwise, the default allocatable prefix length is /64 Sub-prefix for external subnet ranges (--mode=EXTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Sub-prefix for internal subnet ranges (--mode=INTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 Internal Limitations Provisioning time takes multiple weeks and cannot be accelerated.
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- If you're creating an internal IPv6 subnet range, make sure that the network has an assigned internal IPv6 ULA range . gcloud compute networks subnets create SUBNET \ --network= NETWORK \ --range= PRIMARY IPv4 RANGE \ --stack-type=IPV4 IPV6 \ --ipv6-access-type= IPv6 ACCESS TYPE \ --region= REGION Replace the following: SUBNET : a name for the new subnet.
- See the following example: resource "google compute subnetwork" "subnet dual stack" { name = "subnet-dual-stack" ip cidr range = "10.0.0.0/22" region = "us-west2" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" network = google compute network.default.id } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- After you have enabled a ULA range for your VPC network, you can do the following: Add dual-stack subnets Change an IPv4-only subnet to dual-stack Add IPv6-only subnets To assign an internal ULA range to a network, do the following.

