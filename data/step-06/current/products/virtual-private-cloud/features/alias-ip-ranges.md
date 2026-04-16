---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.503Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Alias IP Ranges"
feature_slug: "alias-ip-ranges"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/add-dynamic-nics"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "alias"
  - "ip"
  - "ranges"
  - "enables"
  - "assigning"
  - "additional"
  - "addresses"
  - "to"
---

# Alias IP Ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Alias IP Ranges enables assigning additional IP addresses to a VM instance for use by containers running on that VM; Alias IP Ranges allows additional IP addresses to be assigned to a VM instance for use by containers on that VM.

## Extended Definition

Alias IP Ranges enables assigning additional IP addresses to a VM instance for use by containers running on that VM; Alias IP Ranges allows additional IP addresses to be assigned to a VM instance for use by containers on that VM.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 325
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- Alias IP addresses can be added to firewall rules as source or destination ranges.
- Use source ranges to allow or deny ingress traffic from alias IP addresses.
- PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME /updateNetworkInterface?networkInterface= NETWORK INTERFACE NAME { "aliasIpRanges": [ { "ipCidrRange": " SECONDARY IP RANGE ", "subnetworkRangeName": " SECONDARY RANGE NAME " }, existing ranges... ], "fingerprint": " INTERFACE FINGERPRINT " } Replace the following: PROJECT ID : the ID of the project that contains the instance to modify.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure alias IP ranges describes commands for setting up a subnet with secondary ranges and for assigning alias IP addresses to VMs.
- To create the configuration illustrated above: Create a subnet with a CIDR range 10.128.0.0/16, from which VM IP addresses are allocated, and a secondary CIDR range 172.16.0.0/20 for the containers’ exclusive use, which will be configured as alias IP ranges in the VM that is hosting them: gcloud compute networks subnets create subnet-a \ --network network-a \ --range 10.128.0.0/16 \ --secondary-range container-range=172.16.0.0/20 Create VMs with a primary IP from range 10.128.0.0/16 and an alias IP range 172.16.0.0/24 from the secondary CIDR range 172.16.0.0/20 for the containers in that VM to use: gcloud compute instances create vm1 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.0.0/24 gcloud compute instances create vm2 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.1.0/24 Container IP addresses are configured in Google Cloud as alias IP addresses.
- Alias IP ranges defined in a VM network interface Using IP aliasing, you can configure multiple internal IP addresses, representing containers or applications hosted in a VM, without having to define a separate network interface.
- Alias IP ranges Google Cloud alias IP ranges let you assign ranges of internal IP addresses as aliases to a virtual machine's (VM) network interfaces.

### "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- For more information about assigning alias IP ranges to VM network interfaces, see Configure alias IP ranges .
- For more information about assigning alias IP ranges to VM network interfaces, see Configure alias IP ranges .

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Quota name: ALIASES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/ip aliases per vpc network/limit compute.googleapis.com/quota/ip aliases per vpc network/usage compute.googleapis.com/quota/ip aliases per vpc network/exceeded Subnet IP address ranges Subnetwork ranges per VPC network The total number of subnet IP address ranges used by subnets in the VPC network.
- Quota name: INSTANCES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/instances per vpc network/limit compute.googleapis.com/quota/instances per vpc network/usage compute.googleapis.com/quota/instances per vpc network/exceeded IP aliases per VPC network The total number of alias IP ranges used by VM network interfaces (NICs) in the VPC network.
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Maximum number of alias IP ranges per network interface 150 The number of alias IP ranges that you can assign to a network interface as long as you don't exceed the quota for the total number of assigned alias IP ranges in the VPC network .

