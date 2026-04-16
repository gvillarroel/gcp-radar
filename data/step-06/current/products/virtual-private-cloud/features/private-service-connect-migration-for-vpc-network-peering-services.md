---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.443Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect migration for VPC Network Peering services"
feature_slug: "private-service-connect-migration-for-vpc-network-peering-services"
latest_feature_date: "2025-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/private-services-access"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
keywords:
  - "private"
  - "connect"
  - "migration"
  - "for"
  - "vpc"
  - "network"
  - "peering"
  - "services"
---

# Private Service Connect migration for VPC Network Peering services

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Enables service producers to move services from VPC Network Peering to Private Service Connect without changing the consumer-facing IPv4 address.

## Extended Definition

Enables service producers to move services from VPC Network Peering to Private Service Connect without changing the consumer-facing IPv4 address.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)

## Supporting Pages

### "About migrating peering-based services to Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- Source ID: `site-docs-root-2`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Producer Consumer Deploy a Private Service Connect service Deploy the service in a new subnet in a new VPC network in the producer project and publish it by using Private Service Connect Performed by producer Shut down the peering-based service Reserve the producer subnet CIDR range by creating an internal range in the producer project Performed by producer Consumer provides the subnet name to use for the migration target Delete all resources in the producer subnet, and then delete the subnet Performed by producer The consumer can no longer access the service Create a Private Service Connect endpoint in the consumer network Create a migration subnet in the consumer network If consumer didn't choose the subnet name, the producer provides the subnet name to consumer Performed by consumer (or by producer through a service agent) Create a Private Service Connect endpoint in the consumer network Producer provides service attachment URI to consumer Performed by consumer (or by producer through a service agent) The consumer can access the service Validate access through the Private Service Connect endpoint Performed by consumer Finalize the migration Delete the internal range Performed by producer Update the consumer's migration subnet to convert it to a regular subnet Performed by consumer (or by producer through a service agent) If it's not needed for other services, delete the peering connection in the producer and consumer networks Performed by producer Performed by consumer (or by producer through a service agent) Considerations If you are a service producer who wants to migrate your peering-based service to Private Service Connect, consider the following: The Private Service Connect implementation of the service must offer the same features as the peering-based service.
- About migrating peering-based services to Private Service Connect Many managed service producers use VPC Network Peering to offer connectivity to service consumers that are in another Virtual Private Cloud (VPC) network.
- After the migration, clients in the consumer VPC network send requests to the Private Service Connect endpoint, which forwards traffic to the producer VPC network (click to enlarge).
- During the migration, the following tasks are completed: The producer deploys the service in a new subnet producer-subnet-2 in a new VPC network, and publishes the service through Private Service Connect.

### Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported services The following Google VPC-hosted services support private services access: AI Platform Training AlloyDB for PostgreSQL Apigee Backup and DR Service Cloud Build Cloud Intrusion Detection System Cloud SQL (doesn't support DNS peering ) Cloud TPU Converge Enterprise Cloud with IBM Power for Google Cloud Filestore Google Cloud Managed Lustre Google Cloud NetApp Volumes Google Cloud VMware Engine Looker (Google Cloud core) Memorystore for Memcached Memorystore for Redis Vertex AI Note: When you use private services access as a service consumer, you are solely responsible for securing your VPC networks and all resources and data available on them.
- Limitations The following limitations apply to private services access: Because a private connection is implemented as a VPC Network Peering connection, the behaviors and constraints of peering connections also apply to private connections.
- In this example, the service consumer VPC network allocated the 10.240.0.0/16 address range for Google services and established a private connection that uses the allocated range.
- Private services access and VPC Network Peering In a private connection, the service producer network and your network are connected through VPC Network Peering.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To resolve this issue, remove any associations to the Serverless VPC Access connector from the serverless resources: If any Cloud Run services or functions used the connector, then for each service or function, follow the steps to Disconnect a Cloud Run service from a VPC network .
- If any Cloud Run jobs used the connector, then for each job, follow the steps to Disconnect a Cloud Run job from a VPC network If any App Engine services used the connector, then for each service, follow the steps to Disconnect an App Engine service from a VPC network .
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Connectivity Tests can help you troubleshoot the following network connectivity issues: Unintended inconsistent configurations Obsolete configurations caused by network configuration changes or migrations Configuration errors for a variety of network services and functions When testing Google-managed services, Connectivity Tests can also help you determine whether there is an issue in your VPC network or in the Google-owned VPC network used for the service resources.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.

