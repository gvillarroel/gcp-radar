---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.450Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Network Peering to Private Service Connect migration"
feature_slug: "vpc-network-peering-to-private-service-connect-migration"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
keywords:
  - "vpc"
  - "network"
  - "peering"
  - "to"
  - "private"
  - "connect"
  - "migration"
  - "lets"
---

# VPC Network Peering to Private Service Connect migration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Lets service producers migrate services from VPC Network Peering to Private Service Connect while keeping the same consumer IP addresses.

## Extended Definition

Lets service producers migrate services from VPC Network Peering to Private Service Connect while keeping the same consumer IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)

## Supporting Pages

### "About migrating peering-based services to Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- Source ID: `site-docs-root-2`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Producer Consumer Deploy a Private Service Connect service Deploy the service in a new subnet in a new VPC network in the producer project and publish it by using Private Service Connect Performed by producer Shut down the peering-based service Reserve the producer subnet CIDR range by creating an internal range in the producer project Performed by producer Consumer provides the subnet name to use for the migration target Delete all resources in the producer subnet, and then delete the subnet Performed by producer The consumer can no longer access the service Create a Private Service Connect endpoint in the consumer network Create a migration subnet in the consumer network If consumer didn't choose the subnet name, the producer provides the subnet name to consumer Performed by consumer (or by producer through a service agent) Create a Private Service Connect endpoint in the consumer network Producer provides service attachment URI to consumer Performed by consumer (or by producer through a service agent) The consumer can access the service Validate access through the Private Service Connect endpoint Performed by consumer Finalize the migration Delete the internal range Performed by producer Update the consumer's migration subnet to convert it to a regular subnet Performed by consumer (or by producer through a service agent) If it's not needed for other services, delete the peering connection in the producer and consumer networks Performed by producer Performed by consumer (or by producer through a service agent) Considerations If you are a service producer who wants to migrate your peering-based service to Private Service Connect, consider the following: The Private Service Connect implementation of the service must offer the same features as the peering-based service.
- About migrating peering-based services to Private Service Connect Many managed service producers use VPC Network Peering to offer connectivity to service consumers that are in another Virtual Private Cloud (VPC) network.
- After the migration, clients in the consumer VPC network send requests to the Private Service Connect endpoint, which forwards traffic to the producer VPC network (click to enlarge).
- To learn whether a service producer is migrating from VPC Network Peering to Private Service Connect, check the service documentation or contact the service producer.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- If a local subnet route exists, Google Cloud prohibits the following: You can't establish a new peering connection to a VPC network that already contains a static route that exactly matches or fits within the destination of the local VPC network's subnet route, if the peering configuration results in importing the static route from the peer.
- When the intended peering stack type is IPV4 IPV6 , if a local subnet route for 2001:0db8:0a0b:0c0d::/64 exists, you can't establish a peering connection to a VPC network with a static route whose destination exactly matches 2001:0db8:0a0b:0c0d::/64 or fits within 2001:0db8:0a0b:0c0d::/64 (for example, 2001:0db8:0a0b:0c0d::/96 ).

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Cloud Monitoring is especially useful for Shared VPC and VPC Network Peering scenarios, where resources or networks can be in different projects.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- A Private Service Connect interface is a resource that lets a producer Virtual Private Cloud (VPC) network initiate connections to various destinations in a consumer VPC network.
- A Private Service Connect endpoint in the consumer network lets the analytics service initiate connections to a database service in another VPC network.
- Connecting to workloads in other networks Because Private Service Connect interface connections are transitive, if the consumer VPC network configuration allows it, resources in producer VPC networks can communicate with workloads that are connected to the consumer network.

