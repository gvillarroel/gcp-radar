---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.457Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet range addition"
feature_slug: "auto-mode-vpc-subnet-range-addition"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "range"
  - "addition"
  - "networks"
  - "gained"
---

# Auto mode VPC subnet range addition

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Auto mode VPC networks gained a new managed subnet range, 10.218.0.0/20, for the africa-south1 (Johannesburg) region.

## Extended Definition

Auto mode VPC networks gained a new managed subnet range, 10.218.0.0/20, for the africa-south1 (Johannesburg) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- Subnets with IPv6 address ranges are not supported on auto mode VPC networks.
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- As new Google Cloud regions become available, new subnets in those regions are automatically added to auto mode VPC networks by using an IP range from that block.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Auto mode Virtual Private Cloud (VPC) networks can't be deleted if secondary subnet ranges are present.
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- Click Create . gcloud Create the first network: gcloud compute networks create my-network1 --subnet-mode CUSTOM Add a subnet: gcloud compute networks subnets create my-subnet1 \ --network my-network1 \ --range 172.16.1.0/24 \ --secondary-range range1=10.1.0.0/16 Create a second network: gcloud compute networks create my-network2 --subnet-mode CUSTOM Add a subnet: gcloud compute networks subnets create my-subnet2 \ --network my-network2 \ --range 172.16.2.0/24 \ --secondary-range range2=10.2.0.0/16 Create a VM with interfaces in both networks.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " PRIMARY IP RANGE ", "network": " NETWORK URL ", "name": " SUBNET NAME ", "secondaryIpRanges": [ { "rangeName": " SECONDARY RANGE NAME 1 ", "ipCidrRange": " SECONDARY IP RANGE 1 " }, { "rangeName": " SECONDARY RANGE NAME 2 ", "ipCidrRange": " SECONDARY IP RANGE 2 " }, ...] } Replace the following: PROJECT ID : the ID of the project that contains the VPC network where the subnet is to be created.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Subnets with IPv6 address ranges aren't supported on auto mode VPC networks or legacy networks.
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .
- Auto mode VPC networks are built with one subnet per region at creation time and automatically receive new subnets in new regions.

