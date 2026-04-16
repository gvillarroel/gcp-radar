---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.490Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC network 1500 MTU support"
feature_slug: "vpc-network-1500-mtu-support"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks"
keywords:
  - "vpc"
  - "network"
  - "1500"
  - "mtu"
  - "networks"
  - "now"
  - "maximum"
  - "transmission"
---

# VPC network 1500 MTU support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC networks now support a maximum transmission unit (MTU) of 1500 bytes.

## Extended Definition

VPC networks now support a maximum transmission unit (MTU) of 1500 bytes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)

## Supporting Pages

### "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK { "mtu": MTU } Replace the placeholders with valid values: PROJECT ID is the ID of the project that contains the VPC network to modify.
- For detailed considerations regarding changing the MTU of a network, see the maximum transmission unit overview .
- MTU is the maximum transmission unit of the network.
- There are two ways to start using a VPC network with a different MTU setting: You can change the MTU setting of an existing VPC network, which requires that you shut down all VMs in the network at the same time.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Maximum transmission unit For more information about the maximum transmission unit (MTU) setting for a VPC network and its connected VMs, see Maximum transmission unit .
- For information about changing the MTU of a VPC network, or migrating VMs between VPC networks with different MTU settings, see Change the MTU setting of a VPC network .
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .

### "Test connectivity within VPC networks \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud console screenshot for a trace that's blocked by a hierarchical firewall policy rule (click to enlarge) Test failures for Shared VPC networks In Shared VPC networks, not having permissions to the host project or the service project can cause the test failures listed in the following table.
- Home Documentation Networking Network Intelligence Center Connectivity Tests Guides Send feedback Test connectivity within VPC networks Stay organized with collections Save and categorize content based on your preferences.
- Test failures for VPC Network Peering networks With VPC Network Peering, not having permission to the peered network's Google Cloud project from the primary network can cause the test result listed in the following table.
- VM-to-VM trace through an accessible peered VPC network in a different project (click to enlarge) Test failures for VPC networks The following table lists common failures for tests within VPC networks.

