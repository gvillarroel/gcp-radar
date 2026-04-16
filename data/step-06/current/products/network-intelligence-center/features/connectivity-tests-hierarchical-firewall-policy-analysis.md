---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.491Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests hierarchical firewall policy analysis"
feature_slug: "connectivity-tests-hierarchical-firewall-policy-analysis"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
keywords:
  - "connectivity"
  - "tests"
  - "hierarchical"
  - "firewall"
  - "policy"
  - "analysis"
  - "can"
  - "evaluate"
---

# Connectivity Tests hierarchical firewall policy analysis

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can evaluate hierarchical firewall policy rules as part of configuration analysis.

## Extended Definition

Connectivity Tests can evaluate hierarchical firewall policy rules as part of configuration analysis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- However, the configuration analysis can simulate connection tracking by allowing a return connection that would normally be denied by an ingress firewall rule, as long as Connectivity Tests initiates the outbound connection.
- Unsupported configurations The Connectivity Tests configuration analysis doesn't support testing the following network configurations: Firewall policy rules with threat intelligence data or FQDN objects aren't supported.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity Tests can also simulate the expected inbound forwarding path to resources in your VPC network.
- For some connectivity scenarios, Connectivity Tests also performs live data plane analysis.
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.
- It provides insights about network topology, firewall rules, routes, configuration dependencies, and connectivity to services and applications.

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For firewall policies , you can get insights into firewall rules that are associated with a firewall policy.
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- With these insights, you can perform the following tasks: Identify firewall misconfigurations for firewall rules containing IPv4 or IPv6 address ranges.

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- You can use gcloud to run the following commands for Connectivity Tests.
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .
- When you run gcloud commands for Connectivity Tests, you perform operations on the ConnectivityTest resource that is part of the Network Management API.

