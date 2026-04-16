---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.501Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Access"
feature_slug: "private-service-access"
latest_feature_date: "2018-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/private-services-access"
  - "https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services"
keywords:
  - "private"
  - "access"
  - "provides"
  - "connection"
  - "from"
  - "vpc"
  - "network"
  - "to"
---

# Private Service Access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Access provides a private connection from a VPC network to a network owned by Google or a third party.

## Extended Definition

Private Service Access provides a private connection from a VPC network to a network owned by Google or a third party.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It does not support the following access methods to Google-managed services: External traffic from the internet Direct Google access from the VMs Private Google Access from on-premises hosts Network Topology doesn't show traffic to or from some of the Google-managed services such as App Engine Memcache, Filestore, Memorystore, Cloud SQL, and partner and marketplace solutions.
- Network Topology overview Network Topology is a visualization tool that shows the topology of your network infrastructure: Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid connectivity to and from your on-premises networks, connectivity to Google-managed services, and the associated metrics.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Instead, Network Topology displays the traffic as if it were to and from an external location by using two connections: one connection between the first VM and the country of the second VM, and another connection between the second VM and the country of the first VM.

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Access the service from another VPC network Stay organized with collections Save and categorize content based on your preferences.
- Objectives Configure networking for the service consumer resources Create an endpoint Test accessing the endpoint Costs In this document, you use the following billable components of Google Cloud: Virtual Private Cloud Compute Engine To generate a cost estimate based on your projected usage, use the pricing calculator .
- Make the service accessible from other VPC networks .
- Click Create . gcloud Create a custom mode VPC network: gcloud compute networks create consumer-network --subnet-mode=custom In the consumer-network network, create a subnet. gcloud compute networks subnets create consumer-subnet \ --network=consumer-network \ --range=192.168.10.0/24 \ --region= REGION Replace REGION with the same region as the published service that you created.

### Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, there are ways to make the private connection available to resources that are outside of that VPC network: To make the service instances available from other VPC networks, consider the following options: Accessing through NCC .
- Limitations The following limitations apply to private services access: Because a private connection is implemented as a VPC Network Peering connection, the behaviors and constraints of peering connections also apply to private connections.
- Supported services The following Google VPC-hosted services support private services access: AI Platform Training AlloyDB for PostgreSQL Apigee Backup and DR Service Cloud Build Cloud Intrusion Detection System Cloud SQL (doesn't support DNS peering ) Cloud TPU Converge Enterprise Cloud with IBM Power for Google Cloud Filestore Google Cloud Managed Lustre Google Cloud NetApp Volumes Google Cloud VMware Engine Looker (Google Cloud core) Memorystore for Memcached Memorystore for Redis Vertex AI Note: When you use private services access as a service consumer, you are solely responsible for securing your VPC networks and all resources and data available on them.
- Accessing through hybrid connectivity In hybrid networking scenarios, an on-premises network is connected to a VPC network either through a Cloud VPN or Cloud Interconnect connection.

### "About controlling access to published services \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prevention of quota exhaustion The total number of Private Service Connect endpoints and propagated connections, from any consumer, that can access your producer VPC network is controlled by the PSC ILB consumer forwarding rules per producer VPC network quota .
- You can use the following limits to protect against quota exhaustion: Consumer accept list connection limits control the total number of Private Service Connect endpoints that can create connections to a service attachment from a single consumer VPC network or project.
- These limits set the total number of Private Service Connect endpoint and backend connections that a service attachment can accept from the specified consumer project or VPC network.
- If connection reconciliation is enabled, all existing connections from Project-A transition to PENDING , which terminates network connectivity between the two VPC networks and immediately stops network traffic.

