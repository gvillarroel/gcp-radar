---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.477Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode IP ranges"
feature_slug: "auto-mode-ip-ranges"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "auto"
  - "mode"
  - "ip"
  - "ranges"
  - "expanded"
  - "vpc"
  - "network"
  - "by"
---

# Auto mode IP ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Expanded Auto mode VPC network IP ranges by adding a new 10.206.0.0/20 subnet in the us-south1 (Dallas) region; Expanded Auto mode VPC network IP ranges by adding a new 10.202.0.0/20 subnet in the us-east5 (Columbus) region.

## Extended Definition

Expanded Auto mode VPC network IP ranges by adding a new 10.206.0.0/20 subnet in the us-south1 (Dallas) region; Expanded Auto mode VPC network IP ranges by adding a new 10.202.0.0/20 subnet in the us-east5 (Columbus) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- By default it specifies the source range 10.128.0.0/9 , which contains current and future IPv4 ranges for subnets in an auto mode network.
- Subnets with IPv6 address ranges are not supported on auto mode VPC networks.
- All auto mode VPC networks use the same set of IPv4 ranges.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- Auto mode Virtual Private Cloud (VPC) networks can't be deleted if secondary subnet ranges are present.
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " PRIMARY IP RANGE ", "network": " NETWORK URL ", "name": " SUBNET NAME ", "secondaryIpRanges": [ { "rangeName": " SECONDARY RANGE NAME 1 ", "ipCidrRange": " SECONDARY IP RANGE 1 " }, { "rangeName": " SECONDARY RANGE NAME 2 ", "ipCidrRange": " SECONDARY IP RANGE 2 " }, ...] } Replace the following: PROJECT ID : the ID of the project that contains the VPC network where the subnet is to be created.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.
- In order to configure this example, use the following gcloud commands: gcloud compute networks create vpc1 --subnet-mode custom gcloud compute networks subnets create subnet1 --region us-central1 --network vpc1 --range 10.128.0.0/16 --secondary-range secondaryrange1=172.16.0.0/20 gcloud compute instances create vm1 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.0/27;secondaryrange1:172.16.1.0/32" gcloud compute instances create vm2 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.32/27;secondaryrange1:172.16.1.1/32" Alias IP addresses in auto mode VPC networks and subnets The automatically-created subnets in auto mode VPC networks each have a primary CIDR range, but no secondary range.
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- Alternatively, you can create a new subnet with secondary ranges in the auto mode VPC network as long as none of its ranges overlap with 10.128.0.0/9 .

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- As new Google Cloud regions become available, new subnets in those regions are automatically added to auto mode VPC networks by using an IP range from that block.

