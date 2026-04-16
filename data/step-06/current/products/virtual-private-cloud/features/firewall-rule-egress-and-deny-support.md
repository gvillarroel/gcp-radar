---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.503Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall rule egress and deny support"
feature_slug: "firewall-rule-egress-and-deny-support"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
keywords:
  - "firewall"
  - "rule"
  - "egress"
  - "and"
  - "deny"
  - "rules"
  - "were"
  - "expanded"
---

# Firewall rule egress and deny support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall rules were expanded to support egress traffic controls, deny actions, and explicit rule evaluation ordering.

## Extended Definition

Firewall rules were expanded to support egress traffic controls, deny actions, and explicit rule evaluation ordering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)

## Supporting Pages

### "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a firewall rule default-deny-outgoing-ping After you have created the VMs, create an egress VPC firewall rule called default-deny-outgoing-ping .
- Console UI snapshot of the trace containing the denied outgoing ping Run a second trace after disabling firewall rule default-deny-outgoing-ping To allow the ping test to vm2 , temporarily disable the VPC firewall rule default-deny-outgoing-ping .
- This time, Connectivity Tests tells you that the packet has been delivered to vm2 and that the matched firewall rule, allow-ping-from-known-ranges , allows an inbound ICMP packet to the external IP address of vm2 .
- For the purposes of this tutorial, this source range includes only the external IP address of vm1 , but check any existing firewall rules or rule priorities to make sure that they don't override this new rule.

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- Insights help you identify firewall rules that overlap existing rules, rules with no hits, and unused firewall rule attributes such as IP address and port ranges.
- Optimize firewall rules and tighten security boundaries by identifying overly permissive allow rules and reviewing predictions about their future usage.
- Insights You can use insights to analyze your firewall rule configuration and help simplify your firewall rules.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- In both the IPv4 firewall rules tab and the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule; the IPv4 rule is named NETWORK -allow-custom and the IPv6 rule is named NETWORK -allow-ipv6-custom .
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- About firewall rules After you create a network, create firewall rules to allow or deny traffic between resources in the network, such as communication between VM instances.
- In the Firewall rules section, select zero or more predefined firewall rules in the IPv4 firewall rules and IPv6 firewall rules tabs.

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Every VPC network has two implied firewall rules that allow egress traffic to everywhere and block incoming traffic from everywhere.
- For connectivity to succeed, you need an egress firewall rule at the source allowing access to the destination endpoint, and an ingress firewall rule at the destination to allow this connection.
- Network tags are not supported by Direct VPC egress in ingress firewall rules The packet is dropped because Direct VPC egress doesn't support source network tags in ingress firewall rules.
- If the firewall policy rule that denied traffic has a network context specified, understand the firewall policy rules to determine whether the rule applies to your use case.

