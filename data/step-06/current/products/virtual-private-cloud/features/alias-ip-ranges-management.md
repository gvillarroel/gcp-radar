---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.503Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Alias IP ranges management"
feature_slug: "alias-ip-ranges-management"
latest_feature_date: "2018-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
  - "https://docs.cloud.google.com/vpc/docs/add-dynamic-nics"
keywords:
  - "alias"
  - "ip"
  - "ranges"
  - "management"
  - "virtual"
  - "private"
  - "introduced"
  - "the"
---

# Alias IP ranges management

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud introduced the ability to add and delete alias IP ranges, now available as a generally available feature.

## Extended Definition

Virtual Private Cloud introduced the ability to add and delete alias IP ranges, now available as a generally available feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances { "networkInterfaces": [ { "subnetwork": "projects/ PROJECT ID /regions/ REGION /subnetworks/my-subnet1", "aliasIpRanges": [ { "ipCidrRange": "/32", }, { "subnetworkRangeName": "range1", "ipCidrRange": "/24" } ] }, { "subnetwork": "projects/ PROJECT ID /regions/ REGION /subnetworks/my-subnet2", "aliasIpRanges": [ { "ipCidrRange": "/32", }, { "subnetworkRangeName": "range2", "ipCidrRange": "/24" } ] } ], ... } Replace the following: PROJECT ID : the ID of the project where you create the instance.
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME /updateNetworkInterface?networkInterface= NETWORK INTERFACE NAME { "aliasIpRanges": [ { "ipCidrRange": " SECONDARY IP RANGE ", "subnetworkRangeName": " SECONDARY RANGE NAME " }, existing ranges... ], "fingerprint": " INTERFACE FINGERPRINT " } Replace the following: PROJECT ID : the ID of the project that contains the instance to modify.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- Alias IP ranges are routable within the Google Cloud virtual network without requiring additional routes.
- To create the configuration illustrated above: Create a subnet with a CIDR range 10.128.0.0/16, from which VM IP addresses are allocated, and a secondary CIDR range 172.16.0.0/20 for the containers’ exclusive use, which will be configured as alias IP ranges in the VM that is hosting them: gcloud compute networks subnets create subnet-a \ --network network-a \ --range 10.128.0.0/16 \ --secondary-range container-range=172.16.0.0/20 Create VMs with a primary IP from range 10.128.0.0/16 and an alias IP range 172.16.0.0/24 from the secondary CIDR range 172.16.0.0/20 for the containers in that VM to use: gcloud compute instances create vm1 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.0.0/24 gcloud compute instances create vm2 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.1.0/24 Container IP addresses are configured in Google Cloud as alias IP addresses.
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The main differences between virtual and dynamic Private Service Connect interfaces are described in the following table: Type Max Private Service Connect interfaces per VM Interface management Supported guest OS Virtual Private Service Connect interface Up to 9 ( depends on number of vCPUs ) Added at VM creation time; removed with VM deletion Linux, Windows Dynamic Private Service Connect interface Up to 15 ( depends on number of vCPUs ) Added at any time; can be removed independently of VM Linux only Consider using virtual Private Service Connect interfaces when you expect your interface configuration to remain unchanged throughout the VM's lifecycle.
- Google Cloud validates that IP addresses that are allocated to a Private Service Connect interface don't overlap with the address ranges of subnets that are connected to the VM's other network interfaces.
- Alias IP ranges must come from the primary IPv4 address range of the network attachment's subnet.
- Private Service Connect interfaces support alias IP ranges .

### "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- To assign an alias IP range, do the following: In Alias IP ranges , click add Add IP range .
- To assign an alias IP range, do the following: In Alias IP ranges , click add Add IP range .

