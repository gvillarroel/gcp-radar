---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.444Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC internal ranges"
feature_slug: "vpc-internal-ranges"
latest_feature_date: "2025-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "vpc"
  - "internal"
  - "ranges"
  - "can"
  - "now"
  - "be"
  - "created"
  - "with"
---

# VPC internal ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Internal ranges can now be created with CIDR blocks that overlap existing routes and subnets; Internal Ranges in VPC allow allocation of private IP address blocks and control over how those addresses are used.

## Extended Definition

Internal ranges can now be created with CIDR blocks that overlap existing routes and subnets; Internal Ranges in VPC allow allocation of private IP address blocks and control over how those addresses are used.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " PRIMARY IP RANGE ", "network": " NETWORK URL ", "name": " SUBNET NAME ", "secondaryIpRanges": [ { "rangeName": " SECONDARY RANGE NAME 1 ", "ipCidrRange": " SECONDARY IP RANGE 1 " }, { "rangeName": " SECONDARY RANGE NAME 2 ", "ipCidrRange": " SECONDARY IP RANGE 2 " }, ...] } Replace the following: PROJECT ID : the ID of the project that contains the VPC network where the subnet is to be created.
- VPC network Adding or removing a large number of alias IP ranges at the same time can take a long time.
- Auto mode Virtual Private Cloud (VPC) networks can't be deleted if secondary subnet ranges are present.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- Add a subnet that uses a reserved IPv4 internal range If you have a reserved internal range with usage type set to FOR VPC , and peering type set to FOR SELF , you can create a subnet that uses all or part of that range.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- IPv6 subnet ranges When you create a subnet with an IPv6 range in a custom mode VPC network, you choose whether the subnet is configured with an internal IPv6 subnet range or an external IPv6 subnet range.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- The internal IPv4 or IPv6 address object must be created in the same service project as the resource that uses it, even though the value of the IP address comes from the available IP addresses of the selected shared subnet in a Shared VPC network.
- Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.

