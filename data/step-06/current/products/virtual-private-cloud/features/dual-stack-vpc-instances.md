---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.475Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Dual-stack VPC instances"
feature_slug: "dual-stack-vpc-instances"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
keywords:
  - "dual"
  - "stack"
  - "vpc"
  - "instances"
  - "now"
  - "networking"
  - "with"
  - "both"
---

# Dual-stack VPC instances

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC instances now support dual-stack networking with both IPv4 and IPv6 addresses, including multiple network interfaces, in all regions.

## Extended Definition

VPC instances now support dual-stack networking with both IPv4 and IPv6 addresses, including multiple network interfaces, in all regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Create a custom mode VPC network with a dual-stack subnet You can create subnets when you create the network, or you can add them later.
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- After you have enabled a ULA range for your VPC network, you can do the following: Add dual-stack subnets Change an IPv4-only subnet to dual-stack Add IPv6-only subnets To assign an internal ULA range to a network, do the following.
- Change an IPv4-only subnet to dual-stack Dual-stack subnets have both IPv4 and IPv6 subnet ranges.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- When the intended peering stack type is IPV4 IPV6 , if a local subnet route for 2001:0db8:0a0b:0c0d::/64 exists, you can't establish a peering connection to a VPC network with a static route whose destination exactly matches 2001:0db8:0a0b:0c0d::/64 or fits within 2001:0db8:0a0b:0c0d::/64 (for example, 2001:0db8:0a0b:0c0d::/96 ).
- When the intended peering stack type is IPV4 IPV6 , if a local static route with the 2001:0db8:0a0b:0c0d::/96 destination exists, you can't establish a new peering connection to a VPC network that contains an IPv6 subnet route whose destination exactly matches or contains 2001:0db8:0a0b:0c0d::/96 .
- Because VPC Network Peering isn't transitive, VM instances in network-a and network-c can't communicate with each other unless you also connect networks network-a and network-c using VPC Network Peering.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- Each subnet defines the following IP address ranges: IPv4-only and dual-stack subnets both define a range of IPv4 addresses, while dual-stack subnets also define a range of IPv6 addresses.
- VM instances in a VPC network containing subnet ranges with privately used public IP addresses are not able to connect to external resources which use those same public IP addresses.
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- If the NAT subnet is a dual-stack subnet, either the IPv4 or IPv6 address range is used, but not both.
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Producer port configuration When an internal passthrough Network Load Balancer is published by using Private Service Connect, consumers who use Private Service Connect backends to access the service need to know which port to use to communicate with the service.
- However, over time, a pscConnectionId might be reused in these scenarios: Within a given VPC network, if you delete an endpoint (forwarding rule), and create a new endpoint using the same IP address, the same pscConnectionId value might be used.

