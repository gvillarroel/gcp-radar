---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.475Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Dual-stack VPC subnets"
feature_slug: "dual-stack-vpc-subnets"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "dual"
  - "stack"
  - "vpc"
  - "subnets"
  - "now"
  - "networking"
  - "with"
  - "both"
---

# Dual-stack VPC subnets

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC subnets now support dual-stack networking with both IPv4 and IPv6 address ranges in all regions.

## Extended Definition

VPC subnets now support dual-stack networking with both IPv4 and IPv6 address ranges in all regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Create a custom mode VPC network with a dual-stack subnet You can create subnets when you create the network, or you can add them later.
- After you have enabled a ULA range for your VPC network, you can do the following: Add dual-stack subnets Change an IPv4-only subnet to dual-stack Add IPv6-only subnets To assign an internal ULA range to a network, do the following.
- Change an IPv4-only subnet to dual-stack Dual-stack subnets have both IPv4 and IPv6 subnet ranges.
- Add a dual-stack subnet Dual-stack subnets have both IPv4 and IPv6 address ranges.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- For dual-stack peerings, if a local VPC network importing IPv6 routes doesn't have any dual-stack or IPv6-only subnets, none of the IPv6 routes it receives from peered VPC networks can be used.
- Configuring a dual-stack peering connection lets you exchange IPv6 routes from both dual-stack and IPv6-only subnets.
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Types of subnets VPC networks support subnets with the following stack types.
- Stack type Subnet ranges Compatible VM network interfaces IPv4-only (single-stack) Only IPv4 subnet ranges IPv4-only interfaces IPv4 and IPv6 (dual-stack) Both IPv4 and IPv6 subnet ranges IPv4-only, dual-stack, and IPv6-only interfaces IPv6-only (single-stack) Only IPv6 subnet ranges IPv6-only interfaces When you create a subnet, you specify which stack type to use.
- Therefore, when you create a managed instance group, you must select an instance template with an appropriate configuration; the template must specify a VPC network that has subnets in the selected zone or region.
- Limitations for naming subnets Subnet names have the following limitations: Within a Google Cloud project, a subnet cannot have the same name as a VPC network unless it is a member of that network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Each subnet defines the following IP address ranges: IPv4-only and dual-stack subnets both define a range of IPv4 addresses, while dual-stack subnets also define a range of IPv6 addresses.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.

