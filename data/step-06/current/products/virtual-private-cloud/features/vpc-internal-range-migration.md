---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.449Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC internal range migration"
feature_slug: "vpc-internal-range-migration"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/advanced-vpc"
keywords:
  - "vpc"
  - "internal"
  - "range"
  - "migration"
  - "allows"
  - "creating"
  - "an"
  - "with"
---

# VPC internal range migration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows creating an internal range with usage type FOR_MIGRATION to move a CIDR block from one subnet to another.

## Extended Definition

Allows creating an internal range with usage type FOR_MIGRATION to move a CIDR block from one subnet to another.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/advanced-vpc](https://docs.cloud.google.com/vpc/docs/advanced-vpc)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Add a subnet that uses a reserved IPv4 internal range If you have a reserved internal range with usage type set to FOR VPC , and peering type set to FOR SELF , you can create a subnet that uses all or part of that range.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- If you're creating an internal IPv6 subnet range, make sure that the network has an assigned internal IPv6 ULA range . gcloud compute networks subnets create SUBNET \ --network= NETWORK \ --range= PRIMARY IPv4 RANGE \ --stack-type=IPV4 IPV6 \ --ipv6-access-type= IPv6 ACCESS TYPE \ --region= REGION Replace the following: SUBNET : a name for the new subnet.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- In this example, another Service Project Admin has created three Tier 2 instances in that subnet along with an internal load balancer whose forwarding rule uses an IP address from the range available in that subnet.
- For instances with IPv4 addresses, the primary internal IPv4 address comes from the range of available IP addresses in the selected shared subnet's primary IPv4 address range.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- The specified subnet secondary range doesn't exist When creating a VM, if you get an error saying that the secondary range doesn't exist, ensure the following: The subnet has a secondary range with the specified name.
- Create a subnet with one or more secondary CIDR ranges This command assumes you have a VPC network already.
- You are creating your VM within the subnet that has the secondary range.

### Advanced VPC concepts \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/advanced-vpc](https://docs.cloud.google.com/vpc/docs/advanced-vpc)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there is an existing connection or valid firewall rule, the VPC network examines its lookup table and replaces the external IP with the corresponding internal IP in the packet, logs the incoming packet in the active connections table, and sends the packet to the target instance.
- If the destination IP address is within the VPC network or in a VPC network peered using VPC Network Peering: The instance is configured with an IP with 255.255.255.255 mask, so the instance sends the packet to the subnet's gateway MAC address.
- If the IP address is not in the current VPC network or in a VPC network peered using VPC Network Peering: The instance sends the packet to the subnet's gateway MAC address with the destination set to the packet's final destination.
- The VPC network consults its network/external IP lookup table and replaces the instance's external IP address with the matching network address and sends the packet to the source instance.

