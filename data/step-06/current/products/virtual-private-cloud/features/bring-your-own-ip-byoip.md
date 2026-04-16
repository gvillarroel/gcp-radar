---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.487Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Bring Your Own IP (BYOIP)"
feature_slug: "bring-your-own-ip-byoip"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "bring"
  - "your"
  - "own"
  - "ip"
  - "byoip"
  - "introduced"
  - "for"
  - "vpc"
---

# Bring Your Own IP (BYOIP)

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduced Bring Your Own IP (BYOIP) for Google Cloud VPC in General Availability.

## Extended Definition

Introduced Bring Your Own IP (BYOIP) for Google Cloud VPC in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IP addresses for Google Cloud resources.
- Anyone who has the appropriate IAM permissions in the project can use the IP addresses: compute.addresses. for regional IP addresses compute.globalAddresses. for global IP addresses Bring your own IP configurations The following tables summarize the available bring your own IP configurations.
- If you use privately used public IP address ranges for any subnets in your VPC networks, your imported BYOIP prefixes must not overlap with these IP address ranges.
- For more information about provisioning time, see Bring your own IP configurations .

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Planning for bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IPv4 addresses for Google Cloud resources.
- Here are some decisions that should be considered when you plan your deployment: Who is responsible for administering BYOIP addresses?
- BYOIP addresses administration with Shared VPC In this example of an organization that contains Shared VPC, there is a dedicated project, Public IP project , used to manage BYOIP addresses.
- When the Shared VPC host project or the related service projects need public IP addresses, the Public IP Admin for the organization creates the IP addresses in the Shared VPC host project .

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have imported public IP addresses to Google using Bring your own IP (BYOIP) , your BYOIP ranges and privately used public IP address ranges in the same VPC network must not overlap.
- If you use bring your own IP addresses (BYOIP), you can privately use your own IPv6 GUAs .
- For more information, see Bring your own IP .
- Unusable IPv6 address Description Example The first /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8::/96 from range fd20:db8::/64 The last /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8:0:0:ffff:ffff::/96 from range fd20:db8::/64 What's next Learn more about Geography and regions Create VPC networks Assign an internal IPv6 range for a VPC network Create a subnet Learn about using a hybrid subnet to migrate workloads to a VPC network without changing IP addresses Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud NAT performs in real-world scenarios.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Add a subnet that uses an IPv6 BYOIP address range Bring your own IP addresses (BYOIP) lets you import global unicast address (GUA) ranges that you can assign to a subnet's internal or external IPv6 address range.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.

