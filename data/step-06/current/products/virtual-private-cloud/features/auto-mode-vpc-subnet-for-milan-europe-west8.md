---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.479Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet for Milan (europe-west8)"
feature_slug: "auto-mode-vpc-subnet-for-milan-europe-west8"
latest_feature_date: "2022-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "for"
  - "milan"
  - "europe"
  - "west8"
---

# Auto mode VPC subnet for Milan (europe-west8)

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduces a new 10.198.0.0/20 subnet for auto mode VPC networks in the Milan (europe-west8) region.

## Extended Definition

Introduces a new 10.198.0.0/20 subnet for auto mode VPC networks in the Milan (europe-west8) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- When you create an IPv4 subnet range, you provide the following information: Subnet setting Valid values Details IPv4 range A valid range that you choose Required Secondary IPv4 range A valid range that you choose Optional When you create an IPv6 subnet range, you specify the access type and the source of the IP addresses: Access type Address type and source Internal (not internet routable) ULAs : Automatically assigned from the VPC network's /48 ULA range .
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This is because peered VPC networks always exchange subnet routes that use private internal IPv4 addresses, and each subnet in an auto mode VPC network uses a subnet IP address range that fits within the 10.128.0.0/9 CIDR block.
- You can connect a custom mode VPC network to an auto mode VPC network as long as the custom mode VPC network doesn't have any subnet IP address ranges that fit within 10.128.0.0/9 .
- The following table summarizes the network configuration specified in the preceding example: Network name Networking component IPv4 range IPv6 range Region network-a subnet-a 10.0.0.0/24 fc:1000:1000:1000::/64 us-west1 network-a subnet-b 10.0.1.0/24 fc:1000:1000:1001::/64 europe-north 1 network-b subnet-c 10.0.2.0/23 fc:1000:1000:1002::/64 us-west1 network-b Cloud Router 10.0.0.0/22 fc:1000:1000:1000::/64 us-west1 On-premises network On-premises router 10.0.0.0/8 fc:1000:1000:1000::/56 N/A Regardless of the dynamic routing mode of network-a , the following routing characteristics apply: When the dynamic routing mode of network-b is global, On-premises prefix learned by the Cloud Router in network-b are added as dynamic routes in all regions of network-b and as peering dynamic routes in all regions of network-a .
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=auto \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Note: For auto mode VPC networks, you cannot delete any of the automatically created subnets.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.

