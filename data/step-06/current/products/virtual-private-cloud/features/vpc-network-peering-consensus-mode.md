---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.429Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Network Peering consensus mode"
feature_slug: "vpc-network-peering-consensus-mode"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-peering-connections"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "vpc"
  - "network"
  - "peering"
  - "consensus"
  - "mode"
  - "adds"
  - "as"
  - "supported"
---

# VPC Network Peering consensus mode

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds consensus mode as a supported connection mode for VPC network peering; VPC Network Peering supports peering connections in consensus mode.

## Extended Definition

Adds consensus mode as a supported connection mode for VPC network peering; VPC Network Peering supports peering connections in consensus mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Network Peering supports two connection modes: Independent mode (default) Consensus mode For standard deployments, independent mode is generally preferred.
- To configure consensus mode for a connection, each route exchange option that you intend to use must have the same value as the complementary flag in the matching peering configuration.
- When a peering connection is in consensus mode, every request to delete the peering connection requires agreement from both networks.
- Limitations Updating peering connections in consensus mode isn't supported.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The dynamic routing mode of the exporting VPC network—the network that contains the Cloud Routers that learned the prefixes for those dynamic routes— determines the regions in which the peering dynamic routes can be programmed in peer networks: If the dynamic routing mode of the exporting VPC network is regional, then that network exports dynamic routes only in the same region as its Cloud Routers that learned the prefixes.
- The following table summarizes the network configuration specified in the preceding example: Network name Networking component IPv4 range IPv6 range Region network-a subnet-a 10.0.0.0/24 fc:1000:1000:1000::/64 us-west1 network-a subnet-b 10.0.1.0/24 fc:1000:1000:1001::/64 europe-north 1 network-b subnet-c 10.0.2.0/23 fc:1000:1000:1002::/64 us-west1 network-b Cloud Router 10.0.0.0/22 fc:1000:1000:1000::/64 us-west1 On-premises network On-premises router 10.0.0.0/8 fc:1000:1000:1000::/56 N/A Regardless of the dynamic routing mode of network-a , the following routing characteristics apply: When the dynamic routing mode of network-b is global, On-premises prefix learned by the Cloud Router in network-b are added as dynamic routes in all regions of network-b and as peering dynamic routes in all regions of network-a .
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- For more information, see the Use VPC Network Peering sections of the following load balancer documentation: Internal passthrough Network Load Balancers and connected networks Internal proxy Network Load Balancers and connected networks Internal Application Load Balancers and connected networks Peered networks can exchange static routes that use internal passthrough Network Load Balancers as next hops.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- Unless you create an organizational policy that prohibits it, new projects start with a default network (an auto mode VPC network) that has one subnetwork (subnet) in each region.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Select a VPC network to view its details, such as its peering connections and subnets. gcloud To list the networks in your project, use the networks list command . gcloud compute networks list The command lists all of your VPC and legacy networks.
- When expanding the IPv4 range of an automatically created subnet in an auto mode VPC network (or in a custom mode VPC network that was previously an auto mode VPC network), the broadest prefix (subnet mask) you can use is /16 .

