---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.444Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Exclude internal ranges from automatic IP address allocation"
feature_slug: "exclude-internal-ranges-from-automatic-ip-address-allocation"
latest_feature_date: "2025-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "exclude"
  - "internal"
  - "ranges"
  - "from"
  - "automatic"
  - "ip"
  - "address"
  - "allocation"
---

# Exclude internal ranges from automatic IP address allocation

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows excluding internal IP address ranges from automatic internal range allocation in Virtual Private Cloud.

## Extended Definition

Allows excluding internal IP address ranges from automatic internal range allocation in Virtual Private Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- We recommend keeping the alias IP ranges separate from the primary range of the subnet to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.
- A subnet can also have one or more secondary IP ranges of internal IP addresses.
- Use source ranges to allow or deny ingress traffic from alias IP addresses.
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- For information about using addresses in an internal IPv6 range, see Internal IPv6 specifications When you create IP addresses from a public delegated prefix or sub-prefix, the IP addresses can be used only within the project and scope that they are allocated to.
- For sub-prefixes created from an internal access PAP : The IP addresses are configured as privately used GUAs that aren't advertised to the internet.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- To create the configuration illustrated above: Create a subnet with a CIDR range 10.128.0.0/16, from which VM IP addresses are allocated, and a secondary CIDR range 172.16.0.0/20 for the containers’ exclusive use, which will be configured as alias IP ranges in the VM that is hosting them: gcloud compute networks subnets create subnet-a \ --network network-a \ --range 10.128.0.0/16 \ --secondary-range container-range=172.16.0.0/20 Create VMs with a primary IP from range 10.128.0.0/16 and an alias IP range 172.16.0.0/24 from the secondary CIDR range 172.16.0.0/20 for the containers in that VM to use: gcloud compute instances create vm1 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.0.0/24 gcloud compute instances create vm2 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.1.0/24 Container IP addresses are configured in Google Cloud as alias IP addresses.
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.
- Alias IP ranges defined in a VM network interface Using IP aliasing, you can configure multiple internal IP addresses, representing containers or applications hosted in a VM, without having to define a separate network interface.
- Example: Configure containers with alias IP ranges Using alias IP ranges, container IP addresses can be allocated from a secondary CIDR range and configured as alias IP addresses in the VM that is hosting the container.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Quota name: SUBNET RANGES PER NETWORK Available metrics: compute.googleapis.com/quota/subnet ranges per vpc network/limit compute.googleapis.com/quota/subnet ranges per vpc network/usage compute.googleapis.com/quota/subnet ranges per vpc network/exceeded Subnetwork ranges per peering group From the perspective of a VPC network, the total number of subnet IP address ranges used by subnets local to the VPC network and in its directly connected peers.
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Regional static internal IPv6 address ranges The number of static regional internal IPv6 address ranges that you can reserve in each region in your project.
- Excludes traffic sent to Google APIs and services from VMs with external IP addresses .

