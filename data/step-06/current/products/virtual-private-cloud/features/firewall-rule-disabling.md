---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.175Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall rule disabling"
feature_slug: "firewall-rule-disabling"
latest_feature_date: "2018-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "firewall"
  - "rule"
  - "disabling"
  - "virtual"
  - "private"
  - "supports"
  - "rules"
  - "enabling"
---

# Firewall rule disabling

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud supports disabling firewall rules, enabling administrators to temporarily deactivate rules without deleting them.

## Extended Definition

Virtual Private Cloud supports disabling firewall rules, enabling administrators to temporarily deactivate rules without deleting them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- September 26, 2022 Feature General Availability : You can monitor the following Private Service Connect producer metrics using Cloud Monitoring: Connected consumer forwarding rules Used NAT IP addresses For more information, see Monitor Private Service Connect published services .
- The following features are also available in General Availability : System-generated default IPv6 route with next-hop default-internet-gateway Firewall rules and hierarchical firewall rules that reference IPv6 address ranges.
- September 23, 2022 Change VPC Service Controls ingress and egress rules are no longer required to establish Private Service Connect connections from inside a VPC Service Controls perimeter.
- December 20, 2022 Feature Preview : You can use fully qualified domain name (FQDN) objects in firewall policy rules to filter incoming or outgoing traffic from specific domain names.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- Subject to IAM permissions, a security administrator of a peered VPC network might be able to use the same service account to define targets of firewall rules in a peered VPC network, but the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.
- Even though a security administrator of a peered VPC network can use the same network tag to define targets of firewall rules in a peered VPC network, the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- Subject to applicable firewall rules, instances in the service projects can be configured to communicate with internal services, such as database or directory servers located on-premises.
- Security Admins create and manage firewall rules in the Shared VPC network to control traffic among instances in Google Cloud and the on-premises network.
- You can create networks, subnets, secondary address ranges, firewall rules, and other network resources in the host project.

