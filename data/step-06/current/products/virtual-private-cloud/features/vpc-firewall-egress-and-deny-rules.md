---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.505Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Firewall egress and deny rules"
feature_slug: "vpc-firewall-egress-and-deny-rules"
latest_feature_date: "2017-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "vpc"
  - "firewall"
  - "egress"
  - "and"
  - "deny"
  - "rules"
  - "now"
  - "supports"
---

# VPC Firewall egress and deny rules

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC firewall now supports egress firewall rules, explicit deny rules, and configurable rule-priority evaluation ordering.

## Extended Definition

VPC firewall now supports egress firewall rules, explicit deny rules, and configurable rule-priority evaluation ordering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- Because of the implied allow egress firewall rules , you don't need to create egress allow firewall rules or rules in firewall policies to permit packets to destinations in the peered VPC network unless your networks include egress deny rules.
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Because of the implied deny ingress firewall rules , security administrators for each VPC network must create ingress allow firewall rules or rules in firewall policies.

### "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a firewall rule default-deny-outgoing-ping After you have created the VMs, create an egress VPC firewall rule called default-deny-outgoing-ping .
- Console UI snapshot of the trace containing the denied outgoing ping Run a second trace after disabling firewall rule default-deny-outgoing-ping To allow the ping test to vm2 , temporarily disable the VPC firewall rule default-deny-outgoing-ping .
- Console UI snapshot of the trace failing to reach vm2 Create the firewall rule allow-ping-from-known-ranges To allow ingress to the external IP address of vm2 , configure a new VPC firewall rule called allow-ping-from-known-ranges .
- This time, Connectivity Tests tells you that the packet has been delivered to vm2 and that the matched firewall rule, allow-ping-from-known-ranges , allows an inbound ICMP packet to the external IP address of vm2 .

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- Specifications VPC networks have the following properties: VPC networks, including their associated routes and firewall rules, are global resources .
- Communications and access for App Engine VPC firewall rules apply to resources running in the VPC network, such as Compute Engine VMs.
- Because App Engine standard environment instances do not run inside your VPC network, VPC firewall rules do not apply to them.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- For information about this error and its solution, see Resource not found error in the VPC firewall rules documentation.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- In both the IPv4 firewall rules tab and the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule; the IPv4 rule is named NETWORK -allow-custom and the IPv6 rule is named NETWORK -allow-ipv6-custom .

