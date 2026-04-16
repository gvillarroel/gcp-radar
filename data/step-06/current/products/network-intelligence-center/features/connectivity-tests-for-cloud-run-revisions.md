---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.487Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests for Cloud Run revisions"
feature_slug: "connectivity-tests-for-cloud-run-revisions"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
keywords:
  - "connectivity"
  - "tests"
  - "for"
  - "run"
  - "revisions"
  - "can"
  - "verify"
  - "from"
---

# Connectivity Tests for Cloud Run revisions

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can verify connectivity from a Cloud Run revision to a VM instance, an IP address, or a Google-managed service.

## Extended Definition

Connectivity Tests can verify connectivity from a Cloud Run revision to a VM instance, an IP address, or a Google-managed service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- The Connectivity Tests configuration analysis can still run a test and provide an overall reachability result for Google-managed services, but it doesn't provide details for the tested resources in the project owned by Google.
- However, you can test connectivity from a Cloud Run function (2nd gen) by creating a Connectivity Test for the underlying Cloud Run revision.
- For each test run, Connectivity Tests selects a random IP address from the pool of addresses that are available to the serverless endpoint.

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use gcloud to run the following commands for Connectivity Tests.
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you run gcloud commands for Connectivity Tests, you perform operations on the ConnectivityTest resource that is part of the Network Management API.
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity Tests can also simulate the expected inbound forwarding path to resources in your VPC network.
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.
- For some connectivity scenarios, Connectivity Tests also performs live data plane analysis.
- For more information, see the Connectivity Tests overview .

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.
- You use this project to do the following: Download Monitoring Point installation packages (Docker, Helm, OVA/QCOW2) View the status and inventory of all your deployed Monitoring Points Access Cloud Monitoring dashboards for metrics Configure Alert Policies and Notification Channels in Google Cloud Observability based on logs from AppNeta Monitoring locations - the target hosts in the environments you want to monitor.
- DNS 2 (optional): A backup name server to ensure connectivity if the primary fails (for example, 1.1.1.1) Domain name : The default DNS search domain for the Monitoring Point.
- Docker or Podman Kubernetes (Helm) You can't change the configuration settings for containers.

