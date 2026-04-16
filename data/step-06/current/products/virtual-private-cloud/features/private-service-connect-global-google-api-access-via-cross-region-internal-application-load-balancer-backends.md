---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.443Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect global Google API access via cross-region internal Application Load Balancer backends"
feature_slug: "private-service-connect-global-google-api-access-via-cross-region-internal-application-load-balancer-backends"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints"
keywords:
  - "private"
  - "connect"
  - "global"
  - "api"
  - "access"
  - "via"
  - "cross"
  - "region"
---

# Private Service Connect global Google API access via cross-region internal Application Load Balancer backends

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports accessing global Google APIs using backends that use cross-region internal Application Load Balancers.

## Extended Definition

Private Service Connect now supports accessing global Google APIs using backends that use cross-region internal Application Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)

## Supporting Pages

### "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- Source ID: `site-docs-root-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access global Google APIs through backends This page describes how to access global Google APIs by using Private Service Connect backends that are based on cross-region internal Application Load Balancers .
- Create a Private Service Connect NEG For each global Google API that you want to access, create a Private Service Connect NEG .
- Configure the load balancer To access global Google APIs, configure a cross-region internal Application Load Balancer.
- Private Service Connect NEGs are regional, even when they are used to connect to global Google APIs.

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- About accessing regional endpoints through Private Service Connect endpoints This page provides an overview of using Private Service Connect endpoints to access regional endpoints for supported Google APIs in supported regions .
- What's next Create a Private Service Connect endpoint to access regional Google APIs .
- An endpoint with global access enabled can be accessed by clients in another region, including by clients in connected networks (click to enlarge).

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.

### "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Add endpoint . gcloud Use the gcloud network-connectivity regional-endpoints create command . gcloud network-connectivity regional-endpoints create ENDPOINT NAME \ --region= REGION \ --address= ADDRESS \ --network=projects/ PROJECT ID /global/networks/ NETWORK NAME \ --subnetwork=projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME \ --target-google-api= REP DNS NAME If you want to make the endpoint available to resources in other regions, add the --enable-global-access flag.
- HTTP method and URL: POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /regionalEndpoints?regionalEndpointId= ENDPOINT NAME { "accessType": "REGIONAL", "address": " ADDRESS ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "subnetwork": "projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME ", "targetGoogleApi": " REP DNS NAME " } Replace the following: PROJECT ID : the project ID of the endpoint.
- Access regional Google APIs through endpoints This document explains how to use Private Service Connect endpoints to connect to regional endpoints of supported Google APIs .
- Update the global access configuration You can't update a Private Service Connect endpoint that has a regional endpoint target.

