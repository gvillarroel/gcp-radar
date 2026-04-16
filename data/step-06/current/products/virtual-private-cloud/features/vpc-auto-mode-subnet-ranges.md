---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.494Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Auto Mode Subnet Ranges"
feature_slug: "vpc-auto-mode-subnet-ranges"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "vpc"
  - "auto"
  - "mode"
  - "subnet"
  - "ranges"
  - "networks"
  - "now"
  - "include"
---

# VPC Auto Mode Subnet Ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Google Cloud VPC auto mode networks now include a new subnet range (10.182.0.0/20) in the us-west4 (Las Vegas) region.

## Extended Definition

Google Cloud VPC auto mode networks now include a new subnet range (10.182.0.0/20) in the us-west4 (Las Vegas) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- Subnets with IPv6 address ranges are not supported on auto mode VPC networks.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- Auto mode VPC networks don't support subnets with IPv6 ranges.
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- To advertise peering subnet routes or aggregate ranges of peering subnet routes, you must enable custom advertised mode, and ensure that the custom advertised routes include the IP address ranges of the subnets in the peered VPC network.
- This is because peered VPC networks always exchange subnet routes that use private internal IPv4 addresses, and each subnet in an auto mode VPC network uses a subnet IP address range that fits within the 10.128.0.0/9 CIDR block.
- You can connect a custom mode VPC network to an auto mode VPC network as long as the custom mode VPC network doesn't have any subnet IP address ranges that fit within 10.128.0.0/9 .
- Subnet IP ranges can't overlap across peered VPC networks No subnet IP range can exactly match, contain, or fit within another subnet IP range in a peered VPC network.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported on auto mode VPC networks or legacy networks.
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .
- Auto mode VPC networks are built with one subnet per region at creation time and automatically receive new subnets in new regions.
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.

