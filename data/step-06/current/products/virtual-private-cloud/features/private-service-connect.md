---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.485Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2021-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "enables"
  - "publishing"
  - "services"
  - "and"
  - "accessing"
  - "published"
---

# Private Service Connect

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect enables publishing services and accessing published services over private networking; Private Service Connect adds support for publishing services and accessing those published services over private connections.

## Extended Definition

Private Service Connect enables publishing services and accessing published services over private networking; Private Service Connect adds support for publishing services and accessing those published services over private connections.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- Go to Private Service Connect Click the Published services tab.
- Go to Private Service Connect Click the Published services tab.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Private Service Connect supports access to the following types of managed services: Published VPC-hosted services Google APIs Published services Published services are VPC-hosted services that are deployed in the producer's VPC network and are accessed from the consumer's VPC network.
- Private Service Connect lets you send traffic to endpoints and backends that forward the traffic to managed services, including Google APIs and published services.
- Private Service Connect endpoints and published services let two independent companies communicate with each other by using internal IP addresses.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- IP version translation For Private Service Connect endpoints that connect to published services (service attachments), the IP version of the consumer forwarding rule's IP address determines the IP version of the endpoint and traffic that egresses the endpoint.
- This approach provides the following benefits: Unified connectivity : Supported load balancers and regional Cloud Service Mesh can access published services through the same Private Service Connect endpoint.
- About accessing published services through endpoints This document provides an overview of connecting to services in another VPC network by using Private Service Connect endpoints.

### "About migrating peering-based services to Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Producer Consumer Deploy a Private Service Connect service Deploy the service in a new subnet in a new VPC network in the producer project and publish it by using Private Service Connect Performed by producer Shut down the peering-based service Reserve the producer subnet CIDR range by creating an internal range in the producer project Performed by producer Consumer provides the subnet name to use for the migration target Delete all resources in the producer subnet, and then delete the subnet Performed by producer The consumer can no longer access the service Create a Private Service Connect endpoint in the consumer network Create a migration subnet in the consumer network If consumer didn't choose the subnet name, the producer provides the subnet name to consumer Performed by consumer (or by producer through a service agent) Create a Private Service Connect endpoint in the consumer network Producer provides service attachment URI to consumer Performed by consumer (or by producer through a service agent) The consumer can access the service Validate access through the Private Service Connect endpoint Performed by consumer Finalize the migration Delete the internal range Performed by producer Update the consumer's migration subnet to convert it to a regular subnet Performed by consumer (or by producer through a service agent) If it's not needed for other services, delete the peering connection in the producer and consumer networks Performed by producer Performed by consumer (or by producer through a service agent) Considerations If you are a service producer who wants to migrate your peering-based service to Private Service Connect, consider the following: The Private Service Connect implementation of the service must offer the same features as the peering-based service.
- This document provides an overview of how service producers can migrate their peering-based services to Private Service Connect and preserve the IPv4 addresses that are used to access the services.
- The compute.subnetworks.usePeerMigration permission is included in the following roles: Compute Peer Subnet Migration Admin ( roles/compute.peerSubnetMigrationAdmin ) Compute Network Admin ( roles/compute.networkAdmin ) Principals with the Compute Peer Subnet Migration Admin role can create and delete IP addresses and Private Service Connect endpoints in a peer migration subnet, but they can't create, update, or delete the migration subnet.
- What's next Migrate a service subnet from peering to Private Service Connect Publish a service through Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

