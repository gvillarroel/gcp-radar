---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.489Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Network Topology connectivity to router appliances"
feature_slug: "network-topology-connectivity-to-router-appliances"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
keywords:
  - "network"
  - "topology"
  - "connectivity"
  - "to"
  - "router"
  - "appliances"
  - "can"
  - "audit"
---

# Network Topology connectivity to router appliances

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Topology can audit networking configuration and troubleshoot issues related to router appliance instances.

## Extended Definition

Network Topology can audit networking configuration and troubleshoot issues related to router appliance instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- An on-premises network can refer to any remote network that is outside the Google Cloud domain. on-premises Router appliance instances Network Topology shows the Router appliance instances.
- Google Cloud users can use Network Topology to audit their networking configuration and troubleshoot networking issues related to the different Google services in use.
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Connectivity Tests can't test Compute Engine instances configured to modify forwarding behavior Connectivity Tests can't test Compute Engine instances that have been configured to act in the data plane as routers, firewalls, NAT gateways, or VPNs.
- Connectivity Tests can also simulate the expected inbound forwarding path to resources in your VPC network.
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.
- Connectivity to the Cloud Network Insights control plane UDP 123 (NTP) Required.
- The following environments are supported: Google Cloud VPC networks in the same or different projects Remote branch offices or retail locations On-premises data centers Other cloud environments, for example, AWS or Azure If you need help to determine where to install Monitoring Points to target strategic web application deployment, use VPC Flow Logs or vm flow metrics in a performance dashboard to understand where traffic is flowing in your network.
- Move the installation bundle to the target host. gcloud Use this method if your target host has Google Cloud CLI installed. gcloud alpha network-management network-monitoring-providers \ monitoring-points download-install-script \ --network-monitoring-provider= PROVIDER NAME --location=global \ --monitoring-point-type= MP TYPE \ --hostname= HOST NAME \ --output-file=compose.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- You can deploy Monitoring Points as containers or as virtual appliances to your cloud or your on-premises network.
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Using Cloud Network Insights, your network and operations teams can monitor your network to identify whether an application's degradation is due to the network or the application itself.
- You can deploy them to critical network segments that represent your user base or application backend to monitor your network or web application performance.

