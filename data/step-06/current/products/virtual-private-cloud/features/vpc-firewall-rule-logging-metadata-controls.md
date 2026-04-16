---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.490Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC firewall rule logging metadata controls"
feature_slug: "vpc-firewall-rule-logging-metadata-controls"
latest_feature_date: "2020-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables"
keywords:
  - "vpc"
  - "firewall"
  - "rule"
  - "logging"
  - "metadata"
  - "controls"
  - "in"
  - "now"
---

# VPC firewall rule logging metadata controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall Rule Logging in VPC now includes controls for logging metadata.

## Extended Definition

Firewall Rule Logging in VPC now includes controls for logging metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- Note: For firewall rules containing IPv6 address ranges, insights are generated based on firewall logging data gathered only after June 17, 2022.
- Also, firewall metrics are generated only for traffic that fits the specifications for Firewall Rules Logging.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- Static routes that use --next-hop-ilb to specify the name of an internal passthrough Network Load Balancer forwarding rule can be used to send and receive traffic to a Private Service Connect endpoint when the route and the endpoint are in the same VPC network and region.
- Establishing a Private Service Connect connection between consumer and producer projects that are not in the same VPC Service Controls perimeter does not require explicit authorization with egress policies.
- If the VPC network where the Private Service Connect endpoint is deployed is in a VPC Service Controls perimeter, the endpoint is part of the same perimeter.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- If you have VPC firewall rules or firewall policy rules that use the original IPv4 address range as a source or destination, add additional firewall rules to apply the same rules to the extended range.
- For information about this error and its solution, see Resource not found error in the VPC firewall rules documentation.

### "Configuration analysis states \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Message Target INSTANCE A Compute Engine VM instance INTERNET The internet GOOGLE API A Google API GKE MASTER A GKE control plane CLOUD SQL INSTANCE A Cloud SQL instance PSC GOOGLE API All Google APIs and services that use Private Service Connect PSC VPC SC VPC Service Controls that use Private Service Connect PSC PUBLISHED SERVICE A published service that uses Private Service Connect Metadata The configuration analysis shows the following metadata for the final state.
- The analysis cannot proceed because, in a Shared VPC network, the user running the test does not have access to the host project's network configurations, including firewall rules and routes.
- ForwardingRuleInfo Metadata associated with a VPC forwarding rule.
- FirewallInfo Metadata associated with a firewall rule.

