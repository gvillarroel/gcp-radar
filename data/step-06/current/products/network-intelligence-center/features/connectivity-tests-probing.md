---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.491Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests probing"
feature_slug: "connectivity-tests-probing"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
keywords:
  - "connectivity"
  - "tests"
  - "probing"
  - "can"
  - "verify"
  - "vm"
  - "to"
  - "by"
---

# Connectivity Tests probing

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can verify VM-to-VM connectivity by sending probes.

## Extended Definition

Connectivity Tests can verify VM-to-VM connectivity by sending probes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Connectivity Tests can help you troubleshoot the following network connectivity issues: Unintended inconsistent configurations Obsolete configurations caused by network configuration changes or migrations Configuration errors for a variety of network services and functions When testing Google-managed services, Connectivity Tests can also help you determine whether there is an issue in your VPC network or in the Google-owned VPC network used for the service resources.
- Connectivity Tests can't test Compute Engine instances configured to modify forwarding behavior Connectivity Tests can't test Compute Engine instances that have been configured to act in the data plane as routers, firewalls, NAT gateways, or VPNs.
- The Connectivity Tests configuration analysis can still run a test and provide an overall reachability result for Google-managed services, but it doesn't provide details for the tested resources in the project owned by Google.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Instead, Network Topology displays the traffic as if it were to and from an external location by using two connections: one connection between the first VM and the country of the second VM, and another connection between the second VM and the country of the first VM.
- At most 7 minutes after an activity If the current time is 10:37 AM and you open the time series charts for a VM, you see minute-by-minute metric values for the hour from 09:37 AM to 10:37 AM.
- For VMs that use internal IP addresses to communicate, Network Topology only displays a connection if both VMs are communicating by using their first network interface ( nic0 -to- nic0 ).

### "Using the gcloud CLI for Connectivity Tests \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can use gcloud to run the following commands for Connectivity Tests.
- Home Documentation Networking Network Intelligence Center Connectivity Tests Reference Send feedback Using the gcloud CLI for Connectivity Tests Stay organized with collections Save and categorize content based on your preferences. gcloud is a unified command-line tool that is part of the Google Cloud CLI .
- Command Task gcloud network-management connectivity-tests list Lists Connectivity Tests for a project gcloud network-management connectivity-tests create Creates and runs a Connectivity Test gcloud network-management connectivity-tests rerun Reruns a Connectivity Test gcloud network-management connectivity-tests describe Lists test results for a running or completed Connectivity Test gcloud network-management connectivity-tests update Updates options for an existing Connectivity Test gcloud network-management connectivity-tests delete Deletes a Connectivity Test For command-line examples, see the following pages: Running Connectivity Tests Updating or deleting Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you run gcloud commands for Connectivity Tests, you perform operations on the ConnectivityTest resource that is part of the Network Management API.

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.
- KVM Web Proxy Configuration VMWare Web Proxy Configuration Verify the install Open the Google Cloud console and navigate to Network Intelligence Center > Cloud Network Insights .
- The following environments are supported: Google Cloud VPC networks in the same or different projects Remote branch offices or retail locations On-premises data centers Other cloud environments, for example, AWS or Azure If you need help to determine where to install Monitoring Points to target strategic web application deployment, use VPC Flow Logs or vm flow metrics in a performance dashboard to understand where traffic is flowing in your network.
- Specifications – c50-Docker/Podman Specifications – c50-Kubernetes (Helm) Specifications – v35-VMware Specifications – v35-KVM Deploy Monitoring Points When you're ready to deploy Monitoring Points in your network, do the following: Download the Monitoring Point installation bundle from Google Cloud.

