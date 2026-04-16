---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.458Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect regional service endpoint access"
feature_slug: "private-service-connect-regional-service-endpoint-access"
latest_feature_date: "2024-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
keywords:
  - "private"
  - "connect"
  - "regional"
  - "endpoint"
  - "access"
  - "endpoints"
  - "now"
  - "accessing"
---

# Private Service Connect regional service endpoint access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect endpoints now support accessing regional service endpoints, introduced in Preview.

## Extended Definition

Private Service Connect endpoints now support accessing regional service endpoints, introduced in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)

## Supporting Pages

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 371
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About accessing regional endpoints through Private Service Connect endpoints This page provides an overview of using Private Service Connect endpoints to access regional endpoints for supported Google APIs in supported regions .
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- Architecture Private Service Connect endpoints that have a regional endpoint target point to a service attachment that has been created by Google to direct traffic to the regional service endpoint.
- What's next Create a Private Service Connect endpoint to access regional Google APIs .

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- About accessing published services through endpoints This document provides an overview of connecting to services in another VPC network by using Private Service Connect endpoints.
- Global access Private Service Connect endpoints that are used to access services are regional resources.
- Connection propagation With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.

### "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access regional Google APIs through endpoints This document explains how to use Private Service Connect endpoints to connect to regional endpoints of supported Google APIs .
- Click Add endpoint . gcloud Use the gcloud network-connectivity regional-endpoints create command . gcloud network-connectivity regional-endpoints create ENDPOINT NAME \ --region= REGION \ --address= ADDRESS \ --network=projects/ PROJECT ID /global/networks/ NETWORK NAME \ --subnetwork=projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME \ --target-google-api= REP DNS NAME If you want to make the endpoint available to resources in other regions, add the --enable-global-access flag.
- HTTP method and URL: POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /regionalEndpoints?regionalEndpointId= ENDPOINT NAME { "accessType": "REGIONAL", "address": " ADDRESS ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "subnetwork": "projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME ", "targetGoogleApi": " REP DNS NAME " } Replace the following: PROJECT ID : the project ID of the endpoint.
- Roles To get the permissions that you need to create a regional Private Service Connect endpoint, ask your administrator to grant you the following IAM roles on your VPC network: Compute Network Admin role ( roles/compute.networkAdmin ) DNS Administrator role ( roles/dns.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quotas The number of Private Service Connect endpoints that you can create for accessing Google APIs is controlled by the PSC Google APIs Forwarding Rules per VPC Network quota.
- About accessing Google APIs through endpoints This document provides an overview of Private Service Connect endpoints that are used to access Google APIs.
- Configuration Details Consumer configuration (endpoint) Global reachability Uses an internal global IP address Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC Automatic DNS configuration IP version IPv4 Producer Supported services Supported global Google APIs On-premises access Private Service Connect endpoints that you use to access Google APIs can be accessed from supported connected on-premises hosts.
- You can have a firewall rule on a VM instance that disallows all traffic to the internet; traffic sent to Private Service Connect endpoints still reaches Google.

