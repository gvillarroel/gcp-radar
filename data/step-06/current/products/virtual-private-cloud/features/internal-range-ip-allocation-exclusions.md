---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.441Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Internal range IP allocation exclusions"
feature_slug: "internal-range-ip-allocation-exclusions"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
keywords:
  - "internal"
  - "range"
  - "ip"
  - "allocation"
  - "exclusions"
  - "allows"
  - "users"
  - "to"
---

# Internal range IP allocation exclusions

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows users to exclude specific IP address ranges from being automatically used during internal range allocation.

## Extended Definition

Allows users to exclude specific IP address ranges from being automatically used during internal range allocation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Using a secondary range for alias IP allocation lets you separate the IP space for services hosted in the VM, which helps you create firewall rules that allow access only to the services running on the VM and block access to the VM's primary IP address.
- NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS instance-1 us-central1-a n1-standard-1 10.128.0.2 47.82.96.9 RUNNING Try to assign an alias IP range from the subnet created in step 1.
- We recommend using a secondary range for alias IP allocation to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.
- NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS instance-2 us-central1-a n1-standard-1 10.9.0.2 38.74.204.89 RUNNING Add an alias IP range to the interface.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: Next hop instance internal IP address ( next-hop-address ) Behavior when instances are stopped or deleted VPC Network Peering VPC Network Peering allows you to peer two VPC networks so that the VMs in the two networks can communicate via internal, private IP addresses.
- Alias IP ranges defined in a VM network interface Using IP aliasing, you can configure multiple internal IP addresses, representing containers or applications hosted in a VM, without having to define a separate network interface.
- Although you can create a route whose next hop address is an internal IPv4 address that fits within an alias IP range, Google Cloud does not program that route—Google Cloud considers the next hop to be down.
- Example: Several alias IP ranges configured in a single VM instance Alias IP ranges allow you to manage IP allocation for applications running within VMs, including with containers.

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For information about using addresses in an internal IPv6 range, see Internal IPv6 specifications When you create IP addresses from a public delegated prefix or sub-prefix, the IP addresses can be used only within the project and scope that they are allocated to.
- Must be smaller than the associated sub-prefix—the difference between the allocatable prefix length and the sub-prefix length must be at least 8, and can't be greater than 32 Valid lengths: /48 , /56 , /64 , /72 , /80 , /88 , /96 Default lengths: If the parent sub-prefix's length is /64 or /72 , the default allocatable prefix length is /96 Otherwise, the default allocatable prefix length is /64 Sub-prefix for external subnet ranges (--mode=EXTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Sub-prefix for internal subnet ranges (--mode=INTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 Internal Limitations Provisioning time takes multiple weeks and cannot be accelerated.
- Configuration Regional (v2) Regional (v1) Global (v1) Public advertised prefix /16 to /24 /16 to /24 /16 to /24 Public delegated prefix (top-level, not sub-prefix) /16 to /28 Can be the same size or smaller (have a longer prefix length) than the public advertised prefix /17 to /28 Must be smaller (have a longer prefix length) than the public advertised prefix /17 to /28 Must be smaller (have a longer prefix length) than the public advertised prefix Sub-prefix Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 IPv6 prefixes The following table summarizes the CIDR range requirements for IPv6 prefixes.
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- For VMs that use internal IP addresses to communicate, Network Topology only displays a connection if both VMs are communicating by using their first network interface ( nic0 -to- nic0 ).
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.

