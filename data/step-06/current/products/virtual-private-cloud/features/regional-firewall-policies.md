---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.476Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Regional firewall policies"
feature_slug: "regional-firewall-policies"
latest_feature_date: "2022-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow"
keywords:
  - "regional"
  - "firewall"
  - "policies"
  - "allow"
  - "rule"
  - "enforcement"
  - "scoped"
  - "to"
---

# Regional firewall policies

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Regional firewall policies allow firewall rule enforcement scoped to a single VPC region.

## Extended Definition

Regional firewall policies allow firewall rule enforcement scoped to a single VPC region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For firewall policies , you can get insights into firewall rules that are associated with a firewall policy.
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- Optimize firewall rules and tighten security boundaries by identifying overly permissive allow rules and reviewing predictions about their future usage.
- Discover malicious attempts to access your network, in part by getting alerts about significant changes in the hit counts of firewall rules .

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- Because of the implied allow egress firewall rules , you don't need to create egress allow firewall rules or rules in firewall policies to permit packets to destinations in the peered VPC network unless your networks include egress deny rules.
- Because of the implied deny ingress firewall rules , security administrators for each VPC network must create ingress allow firewall rules or rules in firewall policies.
- When used to specify a source for an ingress rule in a network firewall policy, a Tag can identify sources in both the VPC network to which the Tag is scoped and any peered VPC networks that are connected to the VPC network to which the Tag is scoped.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Protocol forwarding: the AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP protocols To allow data packets of the supported protocols, you need to configure firewall rules or protocol forwarding rules based on your requirements.
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- The default network includes several firewall rules in addition to the implied ones, including the default-allow-internal rule, which permits instance-to-instance communication within the network.
- Except for the default network, you must explicitly create higher priority ingress firewall rules to allow instances to communicate with one another.

### "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Console UI snapshot of the trace containing the denied outgoing ping Run a second trace after disabling firewall rule default-deny-outgoing-ping To allow the ping test to vm2 , temporarily disable the VPC firewall rule default-deny-outgoing-ping .
- Console UI snapshot of the trace failing to reach vm2 Create the firewall rule allow-ping-from-known-ranges To allow ingress to the external IP address of vm2 , configure a new VPC firewall rule called allow-ping-from-known-ranges .
- This time, Connectivity Tests tells you that the packet has been delivered to vm2 and that the matched firewall rule, allow-ping-from-known-ranges , allows an inbound ICMP packet to the external IP address of vm2 .
- For the purposes of this tutorial, this source range includes only the external IP address of vm1 , but check any existing firewall rules or rule priorities to make sure that they don't override this new rule.

