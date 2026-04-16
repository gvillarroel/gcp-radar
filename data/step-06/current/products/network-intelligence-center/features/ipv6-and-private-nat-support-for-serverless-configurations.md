---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.481Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "IPv6 and Private NAT support for serverless configurations"
feature_slug: "ipv6-and-private-nat-support-for-serverless-configurations"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
keywords:
  - "ipv6"
  - "and"
  - "private"
  - "nat"
  - "for"
  - "serverless"
  - "configurations"
  - "connectivity"
---

# IPv6 and Private NAT support for serverless configurations

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests supports IPv6 and Private NAT in serverless configurations.

## Extended Definition

Connectivity Tests supports IPv6 and Private NAT in serverless configurations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Connectivity Tests can help you troubleshoot the following network connectivity issues: Unintended inconsistent configurations Obsolete configurations caused by network configuration changes or migrations Configuration errors for a variety of network services and functions When testing Google-managed services, Connectivity Tests can also help you determine whether there is an issue in your VPC network or in the Google-owned VPC network used for the service resources.

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.
- Network Topology Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- Flow Analyzer Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Network Analyzer Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .
- For more information about the Network Management API, see the API reference . gcloud commands Note: gcloud commands for the Network Management API use the hyphenated word network-management .
- When you run gcloud commands for Connectivity Tests, you perform operations on the ConnectivityTest resource that is part of the Network Management API.

