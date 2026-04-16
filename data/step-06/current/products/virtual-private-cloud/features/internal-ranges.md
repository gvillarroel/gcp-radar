---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.468Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Internal Ranges"
feature_slug: "internal-ranges"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
keywords:
  - "internal"
  - "ranges"
  - "introduces"
  - "preview"
  - "for"
  - "allowing"
  - "allocation"
  - "of"
---

# Internal Ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduces preview support for Internal ranges, allowing allocation of private IP address blocks in VPC networks with usage controls.

## Extended Definition

Introduces preview support for Internal ranges, allowing allocation of private IP address blocks in VPC networks with usage controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- RANGE NAME 1 = RANGE CIDR 1 and RANGE NAME 2 = RANGE CIDR 2 : the names of the secondary ranges from which to draw the alias IP ranges and the alias IP range itself—for example, range1=10.9.0.0/24 .
- RANGE NAME 1 = RANGE CIDR 1 and RANGE NAME 2 = RANGE CIDR 2 : the names of the secondary ranges from which to draw the alias IP ranges and the alias IP range itself—for example, range1=10.9.0.0/24 .
- RANGE NAME 1 and RANGE NAME 2 : the names of the secondary ranges to be removed from the target subnet SUBNET NAME —for example, range1=10.9.0.0/24 .
- This step isn't required for GKE clusters because GKE disables the creation of local routes for alias IP ranges on its node images.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Limit name: VARIABLE-IPV6-PUBLIC-DELEGATED-PREFIXES-per-project-region Metric: compute.googleapis.com/regional variable prefix length public delegated prefixes Private Service Connect PSC internal LB forwarding rules The maximum number of Private Service Connect endpoints (forwarding rules) that a service consumer can create to connect to producer services.
- In network-a : max(500,600) = 600 List of maxima for direct peers: network-b : max(350,300) = 350 network-c : max(300,300) = 300 Minimum of the list of direct peers: min(350,300) = 300 Effective limit for INTERNAL FORWARDING RULES PER PEERING GROUP in network-a : max(600,300) = 600 Peering group for network-b —one direct peer, network-a .
- In network-c : max(300,300) = 300 List of maxima for direct peers: network-a : max(500,600) = 600 network-d : max(400,300) = 400 Minimum of the list of direct peers: min(600,400) = 400 Effective limit for INTERNAL FORWARDING RULES PER PEERING GROUP in network-c : max(300,400) = 400 Peering group for network-d —one direct peer, network-c .

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- Add a subnet that uses a reserved IPv4 internal range If you have a reserved internal range with usage type set to FOR VPC , and peering type set to FOR SELF , you can create a subnet that uses all or part of that range.
- If you want to configure internal IPv6 address ranges on subnets in this network, complete these steps: In the Private IPv6 address settings section, select Configure a ULA internal IPv6 range for this VPC Network .

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- Example: Several alias IP ranges configured in a single VM instance Alias IP ranges allow you to manage IP allocation for applications running within VMs, including with containers.
- Subnet primary and secondary CIDR ranges All subnets with IPv4 address ranges have a primary CIDR range , which is the range of internal IP addresses that define the subnet.
- Alias IP ranges Google Cloud alias IP ranges let you assign ranges of internal IP addresses as aliases to a virtual machine's (VM) network interfaces.

