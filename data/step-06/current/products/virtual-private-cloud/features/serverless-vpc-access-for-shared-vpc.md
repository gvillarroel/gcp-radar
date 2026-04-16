---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.491Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Serverless VPC Access for Shared VPC"
feature_slug: "serverless-vpc-access-for-shared-vpc"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "for"
  - "shared"
  - "was"
  - "introduced"
  - "in"
---

# Serverless VPC Access for Shared VPC

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access support for Shared VPC was introduced in VPC, available in Beta.

## Extended Definition

Serverless VPC Access support for Shared VPC was introduced in VPC, available in Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)

## Supporting Pages

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- Configuration Consumer support Producer support Regional Cloud Service Mesh Regional external Application Load Balancer Regional external proxy Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Shared VPC Service Project Admins can create endpoints in Shared VPC service projects that use IP addresses from Shared VPC networks .
- By default, the endpoint can be accessed only by clients that are in the same region and the same VPC network (or Shared VPC network) as the endpoint.
- The configuration is the same as for a regular endpoint, but the endpoint uses an IP address that's reserved from a shared subnet of the Shared VPC.

### "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://vpcaccess.googleapis.com REST Resource: v1beta1.projects.locations Methods list GET /v1beta1/{name=projects/ }/locations Lists information about the supported locations for this service.
- Home Documentation Networking Virtual Private Cloud Send feedback Serverless VPC Access API Stay organized with collections Save and categorize content based on your preferences.
- API for managing VPC access connectors.
- REST Resource: v1beta1.projects.locations.connectors Methods create POST /v1beta1/{parent=projects/ /locations/ }/connectors Creates a Serverless VPC Access connector, returns an operation. delete DELETE /v1beta1/{name=projects/ /locations/ /connectors/ } Deletes a Serverless VPC Access connector. get GET /v1beta1/{name=projects/ /locations/ /connectors/ } Gets a Serverless VPC Access connector. list GET /v1beta1/{parent=projects/ /locations/ }/connectors Lists Serverless VPC Access connectors. patch PATCH /v1beta1/{connector.name=projects/ /locations/ /connectors/ } Updates a Serverless VPC Access connector, returns an operation.

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- By default, endpoints can be accessed only by clients that are in the same region and the same VPC network (or Shared VPC network) as the endpoint.
- About accessing regional endpoints through Private Service Connect endpoints This page provides an overview of using Private Service Connect endpoints to access regional endpoints for supported Google APIs in supported regions .
- An endpoint lets service consumers send traffic from the consumer's VPC network to regional service endpoints for supported Google APIs through a service attachment that is managed by Google (click to enlarge).

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Recommendations If you try to access the destination endpoint by using its private IP address, make sure that you have configured a Serverless VPC Access connector for the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision.
- Serverless VPC Access connector is not configured The packet was dropped because the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision does not have a Serverless VPC Access connector configured.
- The packet leaves the source, but there is no Serverless VPC Access connector configured for the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision.
- Serverless VPC Access connector is not running The packet was dropped because the Serverless VPC Access connector is not running.

