---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.491Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall Rules Logging metadata controls"
feature_slug: "firewall-rules-logging-metadata-controls"
latest_feature_date: "2020-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
keywords:
  - "firewall"
  - "rules"
  - "logging"
  - "metadata"
  - "controls"
  - "in"
  - "vpc"
  - "introduce"
---

# Firewall Rules Logging metadata controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall Rules Logging metadata controls in VPC introduce configurable control over metadata included in firewall logs.

## Extended Definition

Firewall Rules Logging metadata controls in VPC introduce configurable control over metadata included in firewall logs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- Note: For firewall rules containing IPv6 address ranges, insights are generated based on firewall logging data gathered only after June 17, 2022.
- Also, firewall metrics are generated only for traffic that fits the specifications for Firewall Rules Logging.
- For a complete list of criteria, see Specifications in the Firewall Rules Logging overview.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- If you have VPC firewall rules or firewall policy rules that use the original IPv4 address range as a source or destination, add additional firewall rules to apply the same rules to the extended range.
- For information about this error and its solution, see Resource not found error in the VPC firewall rules documentation.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Establishing a Private Service Connect connection between consumer and producer projects that are not in the same VPC Service Controls perimeter does not require explicit authorization with egress policies.
- If the VPC network where the Private Service Connect endpoint is deployed is in a VPC Service Controls perimeter, the endpoint is part of the same perimeter.
- Any VPC Service Controls-supported services that are accessed through the endpoint are subject to the policies of that VPC Service Controls perimeter.
- Logging You can enable VPC Flow Logs on subnets containing VMs that are accessing services in another VPC network using endpoints.

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- VPC Flow Logs interacts with firewall rules in the following ways: Egress packets are sampled before egress firewall rules.
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.
- This data is then sent to Logging in the Google Cloud project of the VPC network that reported the flow.
- If an ingress firewall rule denies inbound packets, those packets aren't sampled by VPC Flow Logs.

