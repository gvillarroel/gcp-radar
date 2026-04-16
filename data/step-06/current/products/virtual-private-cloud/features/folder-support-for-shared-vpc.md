---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.502Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Folder support for Shared VPC"
feature_slug: "folder-support-for-shared-vpc"
latest_feature_date: "2018-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
keywords:
  - "folder"
  - "for"
  - "shared"
  - "vpc"
  - "became"
  - "available"
  - "in"
  - "beta"
---

# Folder support for Shared VPC

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Folder support for Shared VPC became available in beta.

## Extended Definition

Folder support for Shared VPC became available in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.
- For example, an existing instance in a service project cannot be reconfigured to use a Shared VPC network, but a new instance can be created to use available subnets in a Shared VPC network.
- Networks A Shared VPC network is a VPC network defined in a host project and made available as a centrally shared network for eligible resources in service projects.
- For example, when Service Project Admins create instances , they select the Shared VPC network and an available shared subnet .

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Consumer support Producer support Regional Cloud Service Mesh Regional external Application Load Balancer Regional external proxy Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Shared VPC Service Project Admins can create endpoints in Shared VPC service projects that use IP addresses from Shared VPC networks .
- The configuration is the same as for a regular endpoint, but the endpoint uses an IP address that's reserved from a shared subnet of the Shared VPC.
- For more information, see Create an endpoint with an IP address from a Shared VPC network .
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the Shared VPC host project or the related service projects need public IP addresses, the Public IP Admin for the organization creates the IP addresses in the Shared VPC host project .
- BYOIP addresses administration with Shared VPC In this example of an organization that contains Shared VPC, there is a dedicated project, Public IP project , used to manage BYOIP addresses.
- When the VPC project needs public IP addresses, the Public IP Admin for the organization creates the IP addresses in the VPC project .
- Creating IP addresses in a Shared VPC service project is not supported.

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- An endpoint lets service consumers send traffic from the consumer's VPC network to regional service endpoints for supported Google APIs through a service attachment that is managed by Google (click to enlarge).
- By default, endpoints can be accessed only by clients that are in the same region and the same VPC network (or Shared VPC network) as the endpoint.
- If you're using Shared VPC, you can create the endpoint in either the host project or a service project.

