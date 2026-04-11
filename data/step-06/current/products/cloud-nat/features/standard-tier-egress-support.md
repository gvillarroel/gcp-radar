---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.735Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Standard Tier egress support"
feature_slug: "standard-tier-egress-support"
latest_feature_date: "2023-08-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/release-notes"
keywords:
  - "standard"
  - "tier"
  - "egress"
  - "nat"
  - "supports"
  - "traffic"
---

# Standard Tier egress support

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT supports Standard Tier egress traffic; Cloud NAT supports Standard Tier egress traffic.

## Extended Definition

Cloud NAT supports Standard Tier egress traffic; Cloud NAT supports Standard Tier egress traffic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- When creating a Cloud NAT gateway with manual NAT IP address allocation, you can choose to manually assign NAT IP addresses from either Premium Tier or Standard Tier or both, subject to certain conditions .
- When creating a Cloud NAT gateway with automatic NAT IP address allocation, you can assign NAT IP addresses from either Premium Tier or Standard Tier.
- Network tier Premium Standard Public NAT lets you specify the Network Service Tiers from which the Cloud NAT gateway allocates external IP addresses.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.

### Cloud NAT release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- August 06, 2023 Feature Cloud NAT support for Standard Tier egress is in General Availability .
- May 30, 2023 Feature Cloud NAT support for Standard Tier egress is available in Preview .
- Gateway type Default timeout (before June 30) Default timeout (June 30—September 29) Default timeout (on or after September 30) New 120 seconds 30 or 120 seconds 30 seconds October 21, 2025 Feature General Availability : Private NAT supports Cloud Run.
- July 22, 2024 Feature Hybrid NAT supports Cloud Interconnect in Preview .

