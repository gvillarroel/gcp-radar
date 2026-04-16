---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.477Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC subnet jumbo frame MTU support"
feature_slug: "vpc-subnet-jumbo-frame-mtu-support"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network"
keywords:
  - "vpc"
  - "subnet"
  - "jumbo"
  - "frame"
  - "mtu"
  - "networks"
  - "now"
  - "frames"
---

# VPC subnet jumbo frame MTU support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC networks now support jumbo frames by allowing MTUs between 1300 and 8896 bytes for resources within the same subnet.

## Extended Definition

VPC networks now support jumbo frames by allowing MTUs between 1300 and 8896 bytes for resources within the same subnet.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc](https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)

## Supporting Pages

### "Create and verify a jumbo frame MTU network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc](https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a VM to send and receive jumbo frames, the VM's virtual NIC needs to be connected to a VPC network with a MTU value that is as large or larger than the machine MTU.
- Create and verify a jumbo frame MTU network This page walks you through creating a Virtual Private Cloud (VPC) network and a pair of VMs for testing.
- If you're using GPU machines, see Jumbo frames and GPU machines .
- When you're done testing, delete your resources in the following order: Firewall rule and VM instances VPC network What's next Learn more about MTU .

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- Subnet creation mode Google Cloud offers two types of VPC networks, determined by their subnet creation mode : When an auto mode VPC network is created , one subnet from each region is automatically created within it.

### "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK { "mtu": MTU } Replace the placeholders with valid values: PROJECT ID is the ID of the project that contains the VPC network to modify.
- There are two ways to start using a VPC network with a different MTU setting: You can change the MTU setting of an existing VPC network, which requires that you shut down all VMs in the network at the same time.
- For each zone in the network, stop all VMs in that zone. gcloud compute instances stop INSTANCE NAMES... \ --zone= ZONE Update network MTU. gcloud compute networks update NETWORK \ --mtu= MTU Start all VMs.
- VMs based on public Linux images automatically configure each of their network interfaces to use the MTU of the attached VPC network when they start.

