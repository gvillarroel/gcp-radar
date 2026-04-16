---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.474Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "GKE Pod endpoints in Connectivity Tests"
feature_slug: "gke-pod-endpoints-in-connectivity-tests"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
keywords:
  - "gke"
  - "pod"
  - "endpoints"
  - "in"
  - "connectivity"
  - "tests"
  - "can"
  - "use"
---

# GKE Pod endpoints in Connectivity Tests

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can use a GKE Pod as the source or destination endpoint for a test and evaluate IP masquerading and network policies for that Pod.

## Extended Definition

Connectivity Tests can use a GKE Pod as the source or destination endpoint for a test and evaluate IP masquerading and network policies for that Pod.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 320
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Connectivity Tests can help you troubleshoot the following network connectivity issues: Unintended inconsistent configurations Obsolete configurations caused by network configuration changes or migrations Configuration errors for a variety of network services and functions When testing Google-managed services, Connectivity Tests can also help you determine whether there is an issue in your VPC network or in the Google-owned VPC network used for the service resources.
- Considerations for Google Kubernetes Engine For GKE, Connectivity Tests configuration analysis supports the following features: Connectivity to and between GKE nodes and the GKE control plane Connectivity to and between GKE Pods, including evaluation of GKE network policies and IP masquerading .

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use one of the following values: Enter CONTAINER for Docker or Podman Enter HELM for Helm (Kubernetes) HOST NAME : the name of the host you're installing the Monitoring Point on.
- Docker or Podman Kubernetes (Helm) You can't change the configuration settings for containers.
- The following environments are supported: Google Cloud VPC networks in the same or different projects Remote branch offices or retail locations On-premises data centers Other cloud environments, for example, AWS or Azure If you need help to determine where to install Monitoring Points to target strategic web application deployment, use VPC Flow Logs or vm flow metrics in a performance dashboard to understand where traffic is flowing in your network.
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connectivity Tests Connectivity Tests is a diagnostics tool that lets you check connectivity between network endpoints.
- Connectivity Tests can also simulate the expected inbound forwarding path to resources in your VPC network.
- GKE Enterprise view (for GKE Enterprise enabled projects): Shows the infrastructure of your Google Kubernetes Engine (GKE) deployments: clusters, namespaces, workloads, pods, and their associated metrics.
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use gcloud to run the following commands for Connectivity Tests.
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .
- For more information, see the SDK overview for Connectivity Tests .

