---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.327Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Hybrid NAT for Cloud Interconnect"
feature_slug: "hybrid-nat-for-cloud-interconnect"
latest_feature_date: "2024-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "hybrid"
  - "nat"
  - "for"
  - "interconnect"
  - "supports"
  - "traffic"
  - "over"
---

# Hybrid NAT for Cloud Interconnect

Product: Cloud NAT
Coverage: MEDIUM

## Step 02 Summary

Hybrid NAT supports traffic over Cloud Interconnect.

## Extended Definition

Hybrid NAT supports traffic over Cloud Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- In this scenario, you create a Cloud NAT gateway for Private NAT that translates traffic between the subnets in your source VPC network and the nonoverlapping subnets of the other network.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- To create a Cloud NAT gateway for a regional internet NEG, see "Set up a Cloud NAT gateway" for the following: Regional external Application Load Balancer Regional internal Application Load Balancer Regional external proxy Network Load Balancer Regional internal proxy Network Load Balancer For a full list of Google Cloud resources that Cloud NAT supports, see Cloud NAT overview .
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- Skip this step if you want to use Cloud NAT only for IPv4 traffic.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Increase the value for TCP Transitory Connection Idle Timeout, so that external endpoints that receive traffic (initiated by Google Cloud resources) through a Cloud NAT gateway get more time to respond and to establish the connection.
- The following are two example methods to determine a minimum number of ports: Consider the average value of compute.googleapis.com/nat/port usage over a representative time period for a representative number of VMs.
- Consider the maximum value of compute.googleapis.com/nat/port usage over a representative time period for a representative number of VMs as a starting point for the maximum number of ports.
- Consider the most frequently occurring value of compute.googleapis.com/nat/port usage over a representative time period for a representative number of VMs.

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data isn't visible for up to 165 seconds. nat project number : The project number to which the NAT gateway belongs. router id : The Cloud Router ID to which the NAT gateway belongs. nat gateway name : The name of the NAT gateway. nat ip : The NAT IP allocated to the NAT gateway. nat/closed connections count GA Closed connections count DELTA , INT64 , {connection} gce instance Count of connections closed over the NAT gateway.
- After sampling, data isn't visible for up to 225 seconds. nat ip : NAT IP of the ports. nat/closed connections count GA Closed connections count DELTA , INT64 , {connection} nat gateway Count of connections closed over the NAT gateway.
- After sampling, data isn't visible for up to 120 seconds. nat/new connections count GA New connections count DELTA , INT64 , {connection} nat gateway Count of new connections created over the NAT gateway.
- What is logged Cloud NAT log entries contain information useful for monitoring and debugging your NAT traffic.

