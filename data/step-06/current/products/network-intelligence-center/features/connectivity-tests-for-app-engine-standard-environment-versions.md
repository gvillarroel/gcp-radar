---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.487Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests for App Engine standard environment versions"
feature_slug: "connectivity-tests-for-app-engine-standard-environment-versions"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
keywords:
  - "connectivity"
  - "tests"
  - "for"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "versions"
---

# Connectivity Tests for App Engine standard environment versions

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can verify connectivity from an App Engine standard environment version to a VM instance, an IP address, or a Google-managed service.

## Extended Definition

Connectivity Tests can verify connectivity from an App Engine standard environment version to a VM instance, an IP address, or a Google-managed service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Considerations for Google Kubernetes Engine For GKE, Connectivity Tests configuration analysis supports the following features: Connectivity to and between GKE nodes and the GKE control plane Connectivity to and between GKE Pods, including evaluation of GKE network policies and IP masquerading .

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .
- When you run gcloud commands for Connectivity Tests, you perform operations on the ConnectivityTest resource that is part of the Network Management API.
- You can use gcloud to run the following commands for Connectivity Tests.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Features and benefits Cloud Network Insights provides the following benefits: Proactive detection : Identify network and application performance issues with synthetic testing, often before they impact users.
- Data Synchronization While configuration happens in two places, the data is synchronized back to Google Cloud: Metrics : Performance data collected by Monitoring Points is exported to Cloud Monitoring.
- View high-level metrics Google Cloud console View standard performance metrics (latency, loss, jitter) for your paths directly in Cloud Monitoring dashboards.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Features and benefits Cloud Network Insights provides the following benefits: Proactive detection : Identify network and application performance issues with synthetic testing, often before they impact users.
- Data Synchronization While configuration happens in two places, the data is synchronized back to Google Cloud: Metrics : Performance data collected by Monitoring Points is exported to Cloud Monitoring.
- View high-level metrics Google Cloud console View standard performance metrics (latency, loss, jitter) for your paths directly in Cloud Monitoring dashboards.

