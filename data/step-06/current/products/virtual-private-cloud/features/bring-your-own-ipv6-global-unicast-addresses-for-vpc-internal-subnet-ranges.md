---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.427Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Bring Your Own IPv6 global unicast addresses for VPC internal subnet ranges"
feature_slug: "bring-your-own-ipv6-global-unicast-addresses-for-vpc-internal-subnet-ranges"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "bring"
  - "your"
  - "own"
  - "ipv6"
  - "global"
  - "unicast"
  - "addresses"
  - "for"
---

# Bring Your Own IPv6 global unicast addresses for VPC internal subnet ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC now allows assigning customer-owned IPv6 global unicast addresses to a subnet’s internal IPv6 address range as private range addresses.

## Extended Definition

VPC now allows assigning customer-owned IPv6 global unicast addresses to a subnet’s internal IPv6 address range as private range addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Anyone who has the appropriate IAM permissions in the project can use the IP addresses: compute.addresses. for regional IP addresses compute.globalAddresses. for global IP addresses Bring your own IP configurations The following tables summarize the available bring your own IP configurations.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- Bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IP addresses for Google Cloud resources.
- Overview To bring your own IP addresses to Google, you complete the following steps: Create a public advertised prefix (PAP), a resource that represents the IP prefix that you are bringing to Google Cloud.

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Planning for bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IPv4 addresses for Google Cloud resources.
- Prefix type Prefix Scope Public advertised prefix 203.0.113.0/24 Public delegated prefix 203.0.113.0/28 us-central1 Public delegated prefix 203.0.113.16/28 us-east-4 Public advertised prefix for global load balancers 192.0.2.0/24 Public delegated prefix 192.0.2.0/28 global The remaining IP addresses are reserved for future use.
- For example, if you need some IP addresses in us-central1 and some IP addresses for global load balancers, and you want to reserve some IP addresses for the future, you should create the following plan.
- Here are some decisions that should be considered when you plan your deployment: Who is responsible for administering BYOIP addresses?

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Add a subnet that uses an IPv6 BYOIP address range Bring your own IP addresses (BYOIP) lets you import global unicast address (GUA) ranges that you can assign to a subnet's internal or external IPv6 address range.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- If you use bring your own IP addresses (BYOIP), you can privately use your own IPv6 GUAs .
- Unusable IPv6 address Description Example The first /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8::/96 from range fd20:db8::/64 The last /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8:0:0:ffff:ffff::/96 from range fd20:db8::/64 What's next Learn more about Geography and regions Create VPC networks Assign an internal IPv6 range for a VPC network Create a subnet Learn about using a hybrid subnet to migrate workloads to a VPC network without changing IP addresses Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud NAT performs in real-world scenarios.
- If you have imported public IP addresses to Google using Bring your own IP (BYOIP) , your BYOIP ranges and privately used public IP address ranges in the same VPC network must not overlap.
- External IPv6 specifications External IPv6 address ranges are global unicast addresses (GUAs) .

