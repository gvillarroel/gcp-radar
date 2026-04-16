---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.485Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "External IPv6 addresses for VM instances"
feature_slug: "external-ipv6-addresses-for-vm-instances"
latest_feature_date: "2021-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "external"
  - "ipv6"
  - "addresses"
  - "for"
  - "vm"
  - "instances"
  - "virtual"
  - "machine"
---

# External IPv6 addresses for VM instances

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual machine instances can be assigned external IPv6 addresses in supported regions.

## Extended Definition

Virtual machine instances can be assigned external IPv6 addresses in supported regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access APIs from VMs with external IP addresses A virtual machine (VM) instance with an external IP address assigned to its network interface can connect to Google APIs and services if the network requirements described on this page are met.
- Note: Some Google APIs and services offer direct connectivity from Compute Engine virtual machine (VM) instances, bypassing Google Front Ends (GFEs).
- If you select the default domains, your VM instances connect to Google APIs and services using a subset of Google's external IP addresses .
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- A VPC network does the following: Provides connectivity for your Compute Engine virtual machine (VM) instances .
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- VM instances in a VPC network containing subnet ranges with privately used public IP addresses are not able to connect to external resources which use those same public IP addresses.
- The primary internal addresses for the following resources come from the subnet's primary range: VM instances, internal load balancers, and internal protocol forwarding.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Maximum egress data rate to an external IP address destination all flows: about 7 Gbps (gigabits per second) sustained or 25 Gbps with per VM Tier 1 networking performance single flow: 3 Gbps sustained See Egress to external IP address destinations in the Compute Engine documentation.
- Excludes traffic sent to Google APIs and services from VMs with external IP addresses .
- Instance machine type Maximum number of connections logged in a 5-second interval f1-micro 100 connections g1-small 250 connections Machine types with 1–8 vCPUs 500 connections per vCPU Machine types with more than 8 vCPUs 4,000 (500×8) connections Hybrid connectivity Use the following links to find quotas and limits for Cloud VPN, Cloud Interconnect, and Cloud Router: Cloud VPN quotas and limits Cloud Interconnect quotas and limits Cloud Router quotas and limits Effective limits for per-peering group quotas Each per-peering group quota has the concept of an effective limit .
- Quota name: INSTANCES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/instances per vpc network/limit compute.googleapis.com/quota/instances per vpc network/usage compute.googleapis.com/quota/instances per vpc network/exceeded IP aliases per VPC network The total number of alias IP ranges used by VM network interfaces (NICs) in the VPC network.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 range assignment IPv6 address ranges are assigned to networks, subnets, virtual machine instances (VMs), and forwarding rules.
- Consider an example in which a subnet's external IPv6 address range is 2001:db8:981:4:0:0:0:0/64 : The /65 range allocated for use by VM instances is 2001:db8:981:4:0:0:0:0/65 .
- External IPv6 addresses can be used for VM to VM communication within VPC networks, and are also routable on the internet.
- For VM instances and regional forwarding rules, you can specify a custom ephemeral external IPv6 /96 address range.

