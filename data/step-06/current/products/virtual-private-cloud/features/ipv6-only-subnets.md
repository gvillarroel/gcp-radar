---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.451Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6-only subnets"
feature_slug: "ipv6-only-subnets"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "ipv6"
  - "only"
  - "subnets"
  - "subnet"
  - "configurations"
  - "are"
  - "now"
  - "available"
---

# IPv6-only subnets

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

IPv6-only subnet configurations are now available in preview.

## Extended Definition

IPv6-only subnet configurations are now available in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Click Add . gcloud Use the gcloud compute networks subnets create command . gcloud compute networks subnets create SUBNET \ --network= NETWORK \ --stack-type=IPV6 ONLY \ --ipv6-access-type= IPv6 ACCESS TYPE \ --region= REGION Replace the following: SUBNET : a name for the new subnet.
- After you have enabled a ULA range for your VPC network, you can do the following: Add dual-stack subnets Change an IPv4-only subnet to dual-stack Add IPv6-only subnets To assign an internal ULA range to a network, do the following.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 specifications Subnets with IPv6 address ranges are available in all regions, supporting both external and internal IPv6 subnet ranges.
- Subnets with IPv6 address ranges are supported on custom mode VPC networks only.
- IPv6 range assignment IPv6 address ranges are assigned to networks, subnets, virtual machine instances (VMs), and forwarding rules.
- Subnets with IPv6 address ranges aren't supported on auto mode VPC networks or legacy networks.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- The subnets are used only to provide IP addresses for SNAT of incoming consumer connections.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- The following combinations are possible for supported configurations : IPv4 endpoint to IPv4 service attachment IPv6 endpoint to IPv6 service attachment IPv6 endpoint to IPv4 service attachment In this configuration, Private Service Connect automatically translates between the two IP versions.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- Each subnet defines the following IP address ranges: IPv4-only and dual-stack subnets both define a range of IPv4 addresses, while dual-stack subnets also define a range of IPv6 addresses.
- As new Google Cloud regions become available, new subnets in those regions are automatically added to auto mode VPC networks by using an IP range from that block.

