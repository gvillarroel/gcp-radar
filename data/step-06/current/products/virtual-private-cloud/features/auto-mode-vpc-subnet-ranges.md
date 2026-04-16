---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.486Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet ranges"
feature_slug: "auto-mode-vpc-subnet-ranges"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "ranges"
  - "added"
  - "new"
  - "network"
---

# Auto mode VPC subnet ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Added a new auto mode VPC network subnet range (10.192.0.0/20) in the Melbourne (australia-southeast2) region.

## Extended Definition

Added a new auto mode VPC network subnet range (10.192.0.0/20) in the Melbourne (australia-southeast2) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As new regions become available, new subnets in those regions are automatically added to the auto mode VPC network.
- Converting an auto mode VPC network to a custom mode VPC network preserves all of its automatically created subnets and any subnets you have added.
- Subnets with IPv6 address ranges are not supported on auto mode VPC networks.
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- As new Google Cloud regions become available, new subnets in those regions are automatically added to auto mode VPC networks by using an IP range from that block.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Unless you create an organizational policy that prohibits it, new projects start with a default network (an auto mode VPC network) that has one subnetwork (subnet) in each region.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- You can connect a custom mode VPC network to an auto mode VPC network as long as the custom mode VPC network doesn't have any subnet IP address ranges that fit within 10.128.0.0/9 .
- To advertise peering subnet routes or aggregate ranges of peering subnet routes, you must enable custom advertised mode, and ensure that the custom advertised routes include the IP address ranges of the subnets in the peered VPC network.
- This is because peered VPC networks always exchange subnet routes that use private internal IPv4 addresses, and each subnet in an auto mode VPC network uses a subnet IP address range that fits within the 10.128.0.0/9 CIDR block.
- The following table summarizes the network configuration specified in the preceding example: Network name Networking component IPv4 range IPv6 range Region network-a subnet-a 10.0.0.0/24 fc:1000:1000:1000::/64 us-west1 network-a subnet-b 10.0.1.0/24 fc:1000:1000:1001::/64 europe-north 1 network-b subnet-c 10.0.2.0/23 fc:1000:1000:1002::/64 us-west1 network-b Cloud Router 10.0.0.0/22 fc:1000:1000:1000::/64 us-west1 On-premises network On-premises router 10.0.0.0/8 fc:1000:1000:1000::/56 N/A Regardless of the dynamic routing mode of network-a , the following routing characteristics apply: When the dynamic routing mode of network-b is global, On-premises prefix learned by the Cloud Router in network-b are added as dynamic routes in all regions of network-b and as peering dynamic routes in all regions of network-a .

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Auto mode Virtual Private Cloud (VPC) networks can't be deleted if secondary subnet ranges are present.
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " PRIMARY IP RANGE ", "network": " NETWORK URL ", "name": " SUBNET NAME ", "secondaryIpRanges": [ { "rangeName": " SECONDARY RANGE NAME 1 ", "ipCidrRange": " SECONDARY IP RANGE 1 " }, { "rangeName": " SECONDARY RANGE NAME 2 ", "ipCidrRange": " SECONDARY IP RANGE 2 " }, ...] } Replace the following: PROJECT ID : the ID of the project that contains the VPC network where the subnet is to be created.

