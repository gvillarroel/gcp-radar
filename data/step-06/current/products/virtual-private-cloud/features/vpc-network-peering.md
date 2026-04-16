---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.504Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Network Peering"
feature_slug: "vpc-network-peering"
latest_feature_date: "2017-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
keywords:
  - "vpc"
  - "network"
  - "peering"
  - "enables"
  - "direct"
  - "communication"
  - "between"
  - "networks"
---

# VPC Network Peering

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Network Peering enables direct communication between VPC networks, including across organizations, using internal IP addresses; VPC Network Peering enables connecting VPC networks, including across organizations, so their resources communicate via internal IP addresses.

## Extended Definition

VPC Network Peering enables direct communication between VPC networks, including across organizations, using internal IP addresses; VPC Network Peering enables connecting VPC networks, including across organizations, so their resources communicate via internal IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)

## Supporting Pages

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if VPC networks net-a and net-b are connected using VPC Network Peering, and VPC networks net-a and net-c are also connected using VPC Network Peering, VPC Network Peering does not provide connectivity between net-b and net-c .
- Peering traffic (traffic flowing between peered networks) has the same latency, throughput, and availability as traffic within the same VPC network.
- Specifications VPC Network Peering lets you do the following: Publish software as a service (SaaS) offerings between VPC networks.
- VPC Network Peering provides internal IPv4 and IPv6 connectivity between pairs of VPC networks.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a VPC network to view its details, such as its peering connections and subnets. gcloud To list the networks in your project, use the networks list command . gcloud compute networks list The command lists all of your VPC and legacy networks.
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "autoCreateSubnetworks": false, "name": " NETWORK ", "mtu": MTU , "enableUlaInternalIpv6": true, "internalIpv6Range": " ULA IPV6 RANGE ", "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " } } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- For information about changing the MTU of a VPC network, or migrating VMs between VPC networks with different MTU settings, see Change the MTU setting of a VPC network .
- VPC networks can be connected to other VPC networks in different projects or organizations by using VPC Network Peering .

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring is especially useful for Shared VPC and VPC Network Peering scenarios, where resources or networks can be in different projects.
- Traffic across peered VPC networks such as traffic between VM instances and internal load balancers that are in peer VPC networks.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.

