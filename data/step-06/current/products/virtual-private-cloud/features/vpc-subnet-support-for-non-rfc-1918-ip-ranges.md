---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.493Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC subnet support for non-RFC 1918 IP ranges"
feature_slug: "vpc-subnet-support-for-non-rfc-1918-ip-ranges"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "vpc"
  - "subnet"
  - "for"
  - "non"
  - "rfc"
  - "1918"
  - "ip"
  - "ranges"
---

# VPC subnet support for non-RFC 1918 IP ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC subnets now support IP address ranges that are not restricted to RFC 1918 private ranges.

## Extended Definition

VPC subnets now support IP address ranges that are not restricted to RFC 1918 private ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 10.1.2.254 from range 10.1.2.0/24 Broadcast address Last address in the primary IPv4 range 10.1.2.255 from range 10.1.2.0/24 Note: Google Cloud software-defined networking reserves a virtual gateway IP address for the primary IP ranges of each subnet in a VPC network.
- Limitations for IPv4 subnet ranges IPv4 subnet ranges have the following limitations: Each primary or secondary IPv4 range for all subnets in a VPC network must be a unique valid CIDR block .
- Range Description Private IPv4 address ranges 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Private IP addresses RFC 1918 For information about using 172.17.0.0/16 , see Additional considerations .
- IPv6 subnet ranges When you create a subnet with an IPv6 address range or enable IPv6 on an existing subnet in a VPC network, you choose an IPv6 access type for the subnet.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- If you want to configure internal IPv6 address ranges on subnets in this network, complete these steps: In the Private IPv6 address settings section, select Configure a ULA internal IPv6 range for this VPC Network .
- To configure internal IPv6 address ranges on subnets in this network, complete these steps: In the Private IPv6 address settings section, select Configure a ULA internal IPv6 range for this VPC Network .

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- To create the configuration illustrated above: Create a subnet with a CIDR range 10.128.0.0/16, from which VM IP addresses are allocated, and a secondary CIDR range 172.16.0.0/20 for the containers’ exclusive use, which will be configured as alias IP ranges in the VM that is hosting them: gcloud compute networks subnets create subnet-a \ --network network-a \ --range 10.128.0.0/16 \ --secondary-range container-range=172.16.0.0/20 Create VMs with a primary IP from range 10.128.0.0/16 and an alias IP range 172.16.0.0/24 from the secondary CIDR range 172.16.0.0/20 for the containers in that VM to use: gcloud compute instances create vm1 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.0.0/24 gcloud compute instances create vm2 [...] \ --network-interface subnet=subnet-a,aliases=container-range:172.16.1.0/24 Container IP addresses are configured in Google Cloud as alias IP addresses.
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.
- Firewalls All ingress or egress traffic, including traffic for Alias IP ranges, is evaluated by a VPC firewall rule for a matching target tag or target service account .

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Internal IPv6 subnet ranges are used for VM-to-VM communication within VPC networks.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.

