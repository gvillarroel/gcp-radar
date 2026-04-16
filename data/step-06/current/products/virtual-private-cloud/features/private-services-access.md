---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.500Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Services Access"
feature_slug: "private-services-access"
latest_feature_date: "2019-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/private-services-access"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services"
keywords:
  - "private"
  - "services"
  - "access"
  - "in"
  - "virtual"
  - "reached"
  - "general"
  - "availability"
---

# Private Services Access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Services Access in Virtual Private Cloud reached general availability.

## Extended Definition

Private Services Access in Virtual Private Cloud reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)

## Supporting Pages

### Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- Source ID: `site-docs-root`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported services The following Google VPC-hosted services support private services access: AI Platform Training AlloyDB for PostgreSQL Apigee Backup and DR Service Cloud Build Cloud Intrusion Detection System Cloud SQL (doesn't support DNS peering ) Cloud TPU Converge Enterprise Cloud with IBM Power for Google Cloud Filestore Google Cloud Managed Lustre Google Cloud NetApp Volumes Google Cloud VMware Engine Looker (Google Cloud core) Memorystore for Memcached Memorystore for Redis Vertex AI Note: When you use private services access as a service consumer, you are solely responsible for securing your VPC networks and all resources and data available on them.
- Limitations The following limitations apply to private services access: Because a private connection is implemented as a VPC Network Peering connection, the behaviors and constraints of peering connections also apply to private connections.
- Accessing through NCC For some services that are available through private services access, you can use NCC to make the service reachable by other spokes on a hub by creating a producer VPC spoke .
- Private services access and VPC Network Peering In a private connection, the service producer network and your network are connected through VPC Network Peering.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection propagation With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.
- This approach provides the following benefits: Unified connectivity : Supported load balancers and regional Cloud Service Mesh can access published services through the same Private Service Connect endpoint.
- You can use global access to provide high availability across services that are hosted in multiple regions, or to allow clients to access a service that is not in the same region as the client.
- About accessing published services through endpoints This document provides an overview of connecting to services in another VPC network by using Private Service Connect endpoints.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Excludes traffic sent to Google APIs and services by using Private Google Access .
- Quota name: PSC PROPAGATED CONNECTIONS PER VPC NETWORK Available metrics: compute.googleapis.com/quota/psc propagated connections per vpc network/limit compute.googleapis.com/quota/psc propagated connections per vpc network/usage compute.googleapis.com/quota/psc propagated connections per vpc network/exceeded PSC ILB consumer forwarding rules per producer VPC network The maximum number of Private Service Connect endpoints and propagated connections that can access a service producer VPC network.
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.

### "About controlling access to published services \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About controlling access to published services This page describes the features that you can use to control access to services that are published by using Private Service Connect.
- Prevention of quota exhaustion The total number of Private Service Connect endpoints and propagated connections, from any consumer, that can access your producer VPC network is controlled by the PSC ILB consumer forwarding rules per producer VPC network quota .
- Propagated connections let workloads in consumer VPC spokes access managed services in producer VPC networks as if the two VPC networks were directly connected through endpoints.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

