---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.328Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Standard Tier egress support"
feature_slug: "standard-tier-egress-support"
latest_feature_date: "2023-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud NAT supports Standard Tier egress traffic; Cloud NAT supports Standard Tier egress traffic.

## Extended Definition

Cloud NAT supports Standard Tier egress traffic; Cloud NAT supports Standard Tier egress traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- When creating a Cloud NAT gateway with manual NAT IP address allocation, you can choose to manually assign NAT IP addresses from either Premium Tier or Standard Tier or both, subject to certain conditions .
- When creating a Cloud NAT gateway with automatic NAT IP address allocation, you can assign NAT IP addresses from either Premium Tier or Standard Tier.
- Network tier Premium Standard Public NAT lets you specify the Network Service Tiers from which the Cloud NAT gateway allocates external IP addresses.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Firewall rules that block egress (outbound) traffic are applied before the traffic would have been sent to the NAT gateway.
- During periods of heavy egress traffic, NAT logging is throttled, proportional to the machine type of the VM.
- Increase the value for TCP Transitory Connection Idle Timeout, so that external endpoints that receive traffic (initiated by Google Cloud resources) through a Cloud NAT gateway get more time to respond and to establish the connection.
- Does Public NAT let a source VM whose network interface lacks an external IP address send traffic to a destination VM or load balancer that has an external IP address, even when the source and destination are in the same VPC network?

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- View predefined dashboards Cloud NAT provides a set of predefined dashboards that display activity across your gateway: Open connections Egress data processed by NAT (rate) Ingress data processed by NAT (rate) Port usage NAT allocation errors Dropped sent packets rate Dropped received packets rate To view predefined dashboards from the details page of a particular gateway, follow these steps: Console In the Google Cloud console, go to the Cloud NAT page.
- Specifications The following specifications apply to Cloud NAT logging: Cloud NAT logging handles TCP and UDP traffic only.
- What is logged Cloud NAT log entries contain information useful for monitoring and debugging your NAT traffic.
- Cloud NAT logging only logs dropped packets if they are egress (outbound) TCP and UDP packets.

