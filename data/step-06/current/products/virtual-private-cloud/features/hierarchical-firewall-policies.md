---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.488Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Hierarchical firewall policies"
feature_slug: "hierarchical-firewall-policies"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
keywords:
  - "hierarchical"
  - "firewall"
  - "policies"
  - "are"
  - "now"
  - "generally"
  - "available"
  - "for"
---

# Hierarchical firewall policies

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Hierarchical firewall policies are now generally available for centralized firewall policy management in Virtual Private Cloud; Introduces hierarchical firewall policies in VPC, enabling firewall policy configuration in a hierarchical structure.

## Extended Definition

Hierarchical firewall policies are now generally available for centralized firewall policy management in Virtual Private Cloud; Introduces hierarchical firewall policies in VPC, enabling firewall policy configuration in a hierarchical structure.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)

## Supporting Pages

### "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details, see the Hierarchical firewall policies overview .
- For details, see the Hierarchical firewall policies overview .
- For details, see the Hierarchical firewall policies overview .
- Console UI snapshot of the trace failing to reach vm2 Create the firewall rule allow-ping-from-known-ranges To allow ingress to the external IP address of vm2 , configure a new VPC firewall rule called allow-ping-from-known-ranges .

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- For firewall policies , you can get insights into firewall rules that are associated with a firewall policy.
- They are available only for firewall rules with Firewall Rules Logging enabled.
- Note: For firewall rules containing IPv6 address ranges, insights are generated based on firewall logging data gathered only after June 17, 2022.

### "Troubleshoot Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details about the permissions that you need to view these policies, see Identity and Access Management (IAM) roles in the hierarchical firewall policies overview.
- For details, see Effective firewall rules in the hierarchical firewall policies overview.
- Test state issues I can't access details about a hierarchical firewall policy The trace for your test might reference a hierarchical firewall policy that you don't have permission to view.
- For example, if you create a firewall rule, live data plane analysis generally responds to the new rule right away.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- For each test run, Connectivity Tests selects a random IP address from the pool of addresses that are available to the serverless endpoint.
- Considerations for Google Kubernetes Engine For GKE, Connectivity Tests configuration analysis supports the following features: Connectivity to and between GKE nodes and the GKE control plane Connectivity to and between GKE Pods, including evaluation of GKE network policies and IP masquerading .

