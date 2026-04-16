---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.471Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "FQDN objects in VPC firewall policy rules"
feature_slug: "fqdn-objects-in-vpc-firewall-policy-rules"
latest_feature_date: "2022-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "fqdn"
  - "objects"
  - "in"
  - "vpc"
  - "firewall"
  - "policy"
  - "rules"
  - "virtual"
---

# FQDN objects in VPC firewall policy rules

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud firewall policy rules now support using fully qualified domain names (FQDNs) to filter incoming or outgoing traffic by domain.

## Extended Definition

Virtual Private Cloud firewall policy rules now support using fully qualified domain names (FQDNs) to filter incoming or outgoing traffic by domain.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Subject to IAM permissions, a security administrator of a peered VPC network might be able to use the same service account to define targets of firewall rules in a peered VPC network, but the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.
- Even though a security administrator of a peered VPC network can use the same network tag to define targets of firewall rules in a peered VPC network, the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.

### "Test connectivity within VPC networks \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud console screenshot for a trace that's blocked by a hierarchical firewall policy rule (click to enlarge) Test failures for Shared VPC networks In Shared VPC networks, not having permissions to the host project or the service project can cause the test failures listed in the following table.
- Failure type Description Trace results Blocked by a firewall rule Traffic leaving a source endpoint or entering a destination endpoint is blocked by a hierarchical firewall policy rule or a VPC firewall rule.
- Because the host project owns network configurations, a trace against resources in the service project cannot proceed without access to VPC firewall rules, network routes, or IP addresses in the host project.
- In this case, the route included two VPC firewall rules: an implied VPC firewall rule (named default ) and one that was created for this VPC network.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- Security Admins create and manage firewall rules in the Shared VPC network to control traffic among instances in Google Cloud and the on-premises network.
- If you are an organization policy administrator , you can specify the following Shared VPC constraints in an organization policy: You can limit the set of host projects to which a non-host project or non-host projects in a folder or organization can be attached.
- Shared VPC lets organization administrators delegate administrative responsibilities, such as creating and managing instances, to Service Project Admins while maintaining centralized control over network resources like subnets, routes, and firewalls.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Resources within a VPC network can communicate with one another by using internal IPv4 addresses, internal IPv6 addresses, or external IPv6 addresses, subject to applicable network firewall rules.
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- Specifications VPC networks have the following properties: VPC networks, including their associated routes and firewall rules, are global resources .
- Communications and access for App Engine VPC firewall rules apply to resources running in the VPC network, such as Compute Engine VMs.

