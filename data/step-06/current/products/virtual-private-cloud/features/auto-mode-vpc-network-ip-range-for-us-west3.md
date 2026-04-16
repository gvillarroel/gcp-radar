---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.495Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC network IP range for us-west3"
feature_slug: "auto-mode-vpc-network-ip-range-for-us-west3"
latest_feature_date: "2020-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "network"
  - "ip"
  - "range"
  - "for"
  - "us"
---

# Auto mode VPC network IP range for us-west3

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Auto mode VPC networks added an automatic subnet allocation of 10.180.0.0/20 for the us-west3 (Salt Lake City) region.

## Extended Definition

Auto mode VPC networks added an automatic subnet allocation of 10.180.0.0/20 for the us-west3 (Salt Lake City) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- When expanding the IPv4 range of an automatically created subnet in an auto mode VPC network (or in a custom mode VPC network that was previously an auto mode VPC network), the broadest prefix (subnet mask) you can use is /16 .
- All auto mode VPC networks use the same set of IPv4 ranges.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- For more information, see Create a custom mode VPC network with only IPv4 subnets .
- The command fails because the secondary range is in a different subnet from the instance. gcloud compute instances network-interfaces update instance-1 \ --zone us-central1-a \ --aliases secondaryrange1:172.16.0.10/32 The output is similar to the following: ERROR: (gcloud.compute.instances.network-interfaces.update) HTTPError 400: Invalid value for field 'resource.aliasIpRanges[0].subnetworkRangeName': 'secondaryrange'.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- As new Google Cloud regions become available, new subnets in those regions are automatically added to auto mode VPC networks by using an IP range from that block.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In order to configure this example, use the following gcloud commands: gcloud compute networks create vpc1 --subnet-mode custom gcloud compute networks subnets create subnet1 --region us-central1 --network vpc1 --range 10.128.0.0/16 --secondary-range secondaryrange1=172.16.0.0/20 gcloud compute instances create vm1 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.0/27;secondaryrange1:172.16.1.0/32" gcloud compute instances create vm2 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.32/27;secondaryrange1:172.16.1.1/32" Alias IP addresses in auto mode VPC networks and subnets The automatically-created subnets in auto mode VPC networks each have a primary CIDR range, but no secondary range.
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- To create the configuration illustrated above: Create a subnet with a CIDR range 10.128.0.0/16, from which VM IP addresses are allocated, and a secondary CIDR range 172.16.0.0/20 for the containers’ exclusive use, which will be configured as alias IP ranges in the VM that is hosting them: gcloud compute networks subnets create subnet-a \ --network network-a \ --range 10.128.0.0/16 \ --secondary-range container-range=172.16.0.0/20 Create VMs with a primary IP from range 10.128.0.0/16 and an alias IP range 172.16.0.0/24 from the secondary CIDR range 172.16.0.0/20 for the containers in that VM to use: gcloud compute instances create vm1 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.0.0/24 gcloud compute instances create vm2 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.1.0/24 Container IP addresses are configured in Google Cloud as alias IP addresses.

