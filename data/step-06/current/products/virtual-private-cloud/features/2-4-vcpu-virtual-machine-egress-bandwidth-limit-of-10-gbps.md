---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.495Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "2/4 vCPU virtual machine egress bandwidth limit of 10 Gbps"
feature_slug: "2-4-vcpu-virtual-machine-egress-bandwidth-limit-of-10-gbps"
latest_feature_date: "2019-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
keywords:
  - "vcpu"
  - "virtual"
  - "machine"
  - "egress"
  - "bandwidth"
  - "limit"
  - "of"
  - "10"
---

# 2/4 vCPU virtual machine egress bandwidth limit of 10 Gbps

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual machines with 2 or 4 vCPUs gained a maximum egress throughput of 10 Gbps.

## Extended Definition

Virtual machines with 2 or 4 vCPUs gained a maximum egress throughput of 10 Gbps.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)

## Supporting Pages

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance machine type Maximum number of connections logged in a 5-second interval f1-micro 100 connections g1-small 250 connections Machine types with 1–8 vCPUs 500 connections per vCPU Machine types with more than 8 vCPUs 4,000 (500×8) connections Hybrid connectivity Use the following links to find quotas and limits for Cloud VPN, Cloud Interconnect, and Cloud Router: Cloud VPN quotas and limits Cloud Interconnect quotas and limits Cloud Router quotas and limits Effective limits for per-peering group quotas Each per-peering group quota has the concept of an effective limit .
- In network-d : max(400,300) = 400 List of maxima for direct peers: network-c : max(300,300) = 300 Minimum of the list of direct peers: min(300) = 300 Effective limit for INTERNAL FORWARDING RULES PER PEERING GROUP in network-d : max(400,300) = 400 Manage quotas Virtual Private Cloud enforces quotas on resource usage for various reasons.
- Quota Description Network bandwidth GCE VM to internet egress bandwidth Mbps Total egress bandwidth from Google Cloud VMs in one region to destinations outside of a VPC network (using the default internet gateway).
- Maximum egress data rate to an internal IP address destination Depends on the machine type of the VM See Egress to internal IP address destinations and machine types in the Compute Engine documentation.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Egress throughput limits Network throughput information is available on the Network bandwidth page in the Compute Engine documentation.
- In addition to the automatically created subnets, you can add more subnets manually to auto mode VPC networks in regions that you choose by using IP ranges outside of 10.128.0.0/9 .
- VPC networks A Virtual Private Cloud (VPC) network is a virtual version of a physical network that is implemented inside of Google's production network by using Andromeda .
- ICMP probe response generation is typically rate-limited (or disabled) in routers that reside in the network path of your probing and can result in missing probe responses.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Note: Some Google APIs and services offer direct connectivity from Compute Engine virtual machine (VM) instances, bypassing Google Front Ends (GFEs).
- You can limit the VMs to which the firewall rules apply when you define the target of each egress allow rule.
- Default domains: all IP address ranges for Google APIs and services . private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 Additionally, we recommend that you include 34.126.0.0/18 and 2001:4860:8040::/42 in your egress allow firewall rule.
- Access APIs from VMs with external IP addresses A virtual machine (VM) instance with an external IP address assigned to its network interface can connect to Google APIs and services if the network requirements described on this page are met.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- The following table summarizes the network configuration specified in the preceding example: Network name Networking component IPv4 range IPv6 range Region network-a subnet-a 10.0.0.0/24 fc:1000:1000:1000::/64 us-west1 network-a subnet-b 10.0.1.0/24 fc:1000:1000:1001::/64 europe-north 1 network-b subnet-c 10.0.2.0/23 fc:1000:1000:1002::/64 us-west1 network-b Cloud Router 10.0.0.0/22 fc:1000:1000:1000::/64 us-west1 On-premises network On-premises router 10.0.0.0/8 fc:1000:1000:1000::/56 N/A Regardless of the dynamic routing mode of network-a , the following routing characteristics apply: When the dynamic routing mode of network-b is global, On-premises prefix learned by the Cloud Router in network-b are added as dynamic routes in all regions of network-b and as peering dynamic routes in all regions of network-a .
- Because of the implied allow egress firewall rules , you don't need to create egress allow firewall rules or rules in firewall policies to permit packets to destinations in the peered VPC network unless your networks include egress deny rules.
- For example, if one VPC network uses fc:1000:1000:1000::/64 as an IPv6 subnet range, no other VPC network in Google Cloud can use fc:1000:1000:1000::/64 , regardless of whether the VPC networks are connected by using VPC Network Peering.

