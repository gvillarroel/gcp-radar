---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.683Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Multi-NIC Dynamic NIC backends"
feature_slug: "multi-nic-dynamic-nic-backends"
latest_feature_date: "2025-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "multi"
  - "nic"
  - "dynamic"
  - "backends"
  - "load"
  - "balancing"
  - "supports"
  - "instances"
---

# Multi-NIC Dynamic NIC backends

Product: Cloud Load Balancing
Coverage: LOW

## Step 02 Summary

Cloud Load Balancing supports load balancing to multi-NIC instances that use Dynamic NICs.

## Extended Definition

Cloud Load Balancing supports load balancing to multi-NIC instances that use Dynamic NICs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining](https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Enable connection draining \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining](https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining)
- Source ID: `site-docs-reference-required-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an existing regional load balancer : PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /region/ REGION /backendServices { "name": " BACKEND SERVICE ", "connectionDraining": { "drainingTimeoutSec": CONNECTION TIMEOUT SECS } } Replace the following: PROJECT ID : the project ID that contains your load balancer or Cloud Service Mesh deployment BACKEND SERVICE : the backend service used by your load balancer or Cloud Service Mesh deployment CONNECTION TIMEOUT SECS : the number of seconds to wait before instances or endpoints are removed from the instance group or NEG, between 0 to 3600 seconds, inclusive.
- The following examples demonstrate how to change the connection draining timeout: For an existing global or cross-region load balancer : gcloud compute backend-services update BACKEND SERVICE \ --global \ --connection-draining-timeout= CONNECTION TIMEOUT SECS For an existing regional load balancer : gcloud compute backend-services update BACKEND SERVICE \ --region= REGION \ --connection-draining-timeout= CONNECTION TIMEOUT SECS Replace the placeholders with valid values: BACKEND SERVICE : the backend service that you're updating REGION : if applicable, the region of the backend service that you're updating CONNECTION TIMEOUT SECS : the number of seconds to wait before existing connections to instances or endpoints are terminated, between 0 - 3600 seconds, inclusive.
- For an existing global or cross-region load balancer : PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices Note: Classic Application Load Balancers and classic proxy Network Load Balancers always use global backend services, even when backends are in only one region because the load balancer is set to use the Standard Network Tier.
- Home Documentation Networking Load Balancing Guides Send feedback Enable connection draining Stay organized with collections Save and categorize content based on your preferences.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Compatible with GKE using Gateway (fully orchestrated) or Standalone NEGs (manual orchestration) Supports advanced traffic management Global Anycast external IP addresses over Premium Tier Can access backends across multiple regions Supports Cloud CDN Supports Cloud Armor Classic Application Load Balancer This load balancer is global in Premium Tier.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Compatible with GKE using Standalone NEGs (manual orchestration) Supports advanced traffic management capabilities Regional VIPs using Standard Network Tier Terminates TLS in a single region that you configure Serves content from the configured region only For the complete list, see Load balancing features .
- Compatible with GKE using Gateway (fully orchestrated), Ingress (fully orchestrated), or Standalone NEGs (manual orchestration) Supports Google Cloud Armor Fewer traffic routing features See the Load balancing features page for the full list of capabilities.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For global load balancing, you deploy your backends in multiple regions, and the load balancer automatically directs traffic to the region closest to the user.
- For global load balancing, you deploy your backends in multiple regions, and the load balancer automatically directs traffic to the region closest to the user.
- Backends and VPC networks For global external proxy Network Load Balancer and classic proxy Network Load Balancer backends , all backend instances from instance group backends and all backend endpoints from NEG backends must be located in the same project.
- After a backend is selected, traffic is then distributed among instances or endpoints in that backend group according to the load balancing locality policy.

