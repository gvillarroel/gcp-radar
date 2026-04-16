---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.507Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Target Instances"
feature_slug: "target-instances"
latest_feature_date: "2013-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect"
keywords:
  - "target"
  - "instances"
  - "added"
  - "for"
  - "instance"
  - "resources"
  - "to"
  - "forward"
---

# Target Instances

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Added support for Target Instance resources to forward non-NAT'ed traffic to a single virtual machine instance.

## Extended Definition

Added support for Target Instance resources to forward non-NAT'ed traffic to a single virtual machine instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- Each forwarding rule for an external passthrough Network Load Balancer or for external protocol forwarding also provides a routing path for its backend VMs or target instance to send packets to destinations outside of the VPC network: Packets sent by backend VMs or target instances can be either outbound response packets (sent back to the client) or they can be outbound packets that initiate a new connection.
- Paths for external passthrough Network Load Balancers and external protocol forwarding External passthrough Network Load Balancers and external protocol forwarding use Maglev systems to route packets from clients on the internet to backend VMs and target instances in your VPC network.
- Backend VMs and target instances don't need to have IP forwarding enabled.

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- IP addresses Google Cloud resources, such as Compute Engine VM instances, forwarding rules, and GKE containers, rely on IP addresses to communicate.
- Destinations for forwarding rules are target instances , load balancer targets (backend services, target proxies, and target pools) , and Classic VPN gateways .
- Forwarding rules While routes govern traffic leaving an instance, forwarding rules direct traffic to a Google Cloud resource in a VPC network based on IP address, protocol, and port.
- A VPC network does the following: Provides connectivity for your Compute Engine virtual machine (VM) instances , including Google Kubernetes Engine (GKE) clusters , serverless workloads , and other Google Cloud products built on Compute Engine VMs.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- For example, Network Topology aggregates the entities as follows: VM instances into their instance group, then aggregates instance groups into a Google Cloud zone GKE pods into their GKE workloads, then aggregates GKE workloads into GKE namespaces, and then the GKE namespaces into a GKE cluster.
- IP address considerations For traffic between VM instances in Google Cloud that communicate using external IP addresses, Network Topology does not display a single connection directly between the VMs.

### "About migrating peering-based services to Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Task Producer Consumer Deploy a Private Service Connect service Deploy the service in a new subnet in a new VPC network in the producer project and publish it by using Private Service Connect Performed by producer Shut down the peering-based service Reserve the producer subnet CIDR range by creating an internal range in the producer project Performed by producer Consumer provides the subnet name to use for the migration target Delete all resources in the producer subnet, and then delete the subnet Performed by producer The consumer can no longer access the service Create a Private Service Connect endpoint in the consumer network Create a migration subnet in the consumer network If consumer didn't choose the subnet name, the producer provides the subnet name to consumer Performed by consumer (or by producer through a service agent) Create a Private Service Connect endpoint in the consumer network Producer provides service attachment URI to consumer Performed by consumer (or by producer through a service agent) The consumer can access the service Validate access through the Private Service Connect endpoint Performed by consumer Finalize the migration Delete the internal range Performed by producer Update the consumer's migration subnet to convert it to a regular subnet Performed by consumer (or by producer through a service agent) If it's not needed for other services, delete the peering connection in the producer and consumer networks Performed by producer Performed by consumer (or by producer through a service agent) Considerations If you are a service producer who wants to migrate your peering-based service to Private Service Connect, consider the following: The Private Service Connect implementation of the service must offer the same features as the peering-based service.
- After the migration, clients in the consumer VPC network send requests to the Private Service Connect endpoint, which forwards traffic to the producer VPC network (click to enlarge).
- When you create an internal range for peer migration, you set the usage to FOR MIGRATION and specify the source and target subnets.
- You must be able to delete all resources in the subnet that contains the service instance during the migration.

