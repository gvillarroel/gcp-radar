---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.488Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests live data plane analysis"
feature_slug: "connectivity-tests-live-data-plane-analysis"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
keywords:
  - "connectivity"
  - "tests"
  - "live"
  - "plane"
  - "analysis"
  - "can"
  - "perform"
  - "between"
---

# Connectivity Tests live data plane analysis

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can perform live data plane analysis between a VM and a Google network edge location for supported traffic flows.

## Extended Definition

Connectivity Tests can perform live data plane analysis between a VM and a Google network edge location for supported traffic flows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- If you see apparent discrepancies between the configuration analysis and live data plane analysis results, see Troubleshoot Connectivity Tests .
- For some connectivity scenarios, Connectivity Tests also performs live data plane analysis.
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For some connectivity scenarios, Connectivity Tests also performs live data plane analysis.
- It analyzes your configuration and, in some cases, performs live data plane analysis between the endpoints.
- With these performance-monitoring capabilities, you can distinguish between a problem in your application and a problem in the underlying Google Cloud network.
- Connectivity Tests Connectivity Tests is a diagnostics tool that lets you check connectivity between network endpoints.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Rapid root cause analysis : Quickly differentiate between network problems, application-level issues, or browser performance impacts.
- You can deploy them to critical network segments that represent your user base or application backend to monitor your network or web application performance.
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Rapid root cause analysis : Quickly differentiate between network problems, application-level issues, or browser performance impacts.
- You can deploy them to critical network segments that represent your user base or application backend to monitor your network or web application performance.
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.

