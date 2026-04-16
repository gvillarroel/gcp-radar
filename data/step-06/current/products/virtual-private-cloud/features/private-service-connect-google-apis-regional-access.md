---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.453Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect Google APIs regional access"
feature_slug: "private-service-connect-google-apis-regional-access"
latest_feature_date: "2024-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
keywords:
  - "private"
  - "connect"
  - "apis"
  - "regional"
  - "access"
  - "endpoints"
  - "can"
  - "be"
---

# Private Service Connect Google APIs regional access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect endpoints can be used to access regional service endpoints of supported Google APIs.

## Extended Definition

Private Service Connect endpoints can be used to access regional service endpoints of supported Google APIs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)

## Supporting Pages

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About accessing regional endpoints through Private Service Connect endpoints This page provides an overview of using Private Service Connect endpoints to access regional endpoints for supported Google APIs in supported regions .
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- Architecture Private Service Connect endpoints that have a regional endpoint target point to a service attachment that has been created by Google to direct traffic to the regional service endpoint.
- What's next Create a Private Service Connect endpoint to access regional Google APIs .

### "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 345
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access regional Google APIs through endpoints This document explains how to use Private Service Connect endpoints to connect to regional endpoints of supported Google APIs .
- The following example request tests that an endpoint with IP address 192.168.1.100 can request the Cloud Spanner API discovery document from the regional endpoint in me-central2 . curl --connect-to spanner.me-central2.rep.googleapis.com:443:192.168.1.100:443 \ 'https://spanner.me-central2.rep.googleapis.com/$discovery/rest?version=v1' Create a private DNS entry for the endpoint You must create private DNS entries so that clients can direct requests to your Private Service Connect endpoint.
- HTTP method and URL: POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /regionalEndpoints?regionalEndpointId= ENDPOINT NAME { "accessType": "REGIONAL", "address": " ADDRESS ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "subnetwork": "projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME ", "targetGoogleApi": " REP DNS NAME " } Replace the following: PROJECT ID : the project ID of the endpoint.
- Get detailed information about an endpoint You can view the configuration details of an endpoint. gcloud Use the gcloud network-connectivity regional-endpoints describe command . gcloud network-connectivity regional-endpoints describe \ ENDPOINT NAME --region= REGION Replace the following: ENDPOINT NAME : the name of the endpoint.

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability Uses an internal global IP address Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC Automatic DNS configuration IP version IPv4 Producer Supported services Supported global Google APIs On-premises access Private Service Connect endpoints that you use to access Google APIs can be accessed from supported connected on-premises hosts.
- Quotas The number of Private Service Connect endpoints that you can create for accessing Google APIs is controlled by the PSC Google APIs Forwarding Rules per VPC Network quota.
- About accessing Google APIs through endpoints This document provides an overview of Private Service Connect endpoints that are used to access Google APIs.
- What's next Configure Private Service Connect to access Google APIs and services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Click Create . gcloud Use the gcloud compute network-endpoint-groups create command: gcloud compute network-endpoint-groups create NEG NAME \ --network-endpoint-type=private-service-connect \ --psc-target-service= TARGET SERVICE \ --region= REGION \ --network= NETWORK \ --subnet= SUBNET If you know which port is being used by the producer , you can specify the port with --producer-port= PORT .
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.

