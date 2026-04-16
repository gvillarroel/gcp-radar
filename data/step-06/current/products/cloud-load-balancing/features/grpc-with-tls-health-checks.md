---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.676Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "GRPC_WITH_TLS health checks"
feature_slug: "grpc-with-tls-health-checks"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-concepts"
keywords:
  - "grpc"
  - "tls"
  - "health"
  - "checks"
  - "load"
  - "balancing"
  - "supports"
  - "backends"
---

# GRPC_WITH_TLS health checks

Product: Cloud Load Balancing
Coverage: LOW

## Step 02 Summary

Cloud Load Balancing supports GRPC_WITH_TLS health checks for gRPC backends with TLS enabled.

## Extended Definition

Cloud Load Balancing supports GRPC_WITH_TLS health checks for gRPC backends with TLS enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)

## Supporting Pages

### Use health checks \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- Source ID: `site-docs-reference-required-3`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To associate a health check with a backend service, use one of these API calls: backendServices.update backendServices.patch Associate legacy health checks with target pool-based regional external passthrough Network Load Balancers To associate a legacy health check with a new regional external passthrough Network Load Balancer, refer to Set up a regional external passthrough Network Load Balancer with a target pool .
- Some load balancers might reference more than one health check if they can reference more than one backend service. gcloud compute backend-services update BACKEND SERVICE NAME \ --region= REGION \ --health-checks= HEALTH CHECK NAME \ --health-checks-region= REGION API You can list backend services with the backendServices.list API call.
- Home Documentation Networking Load Balancing Guides Send feedback Use health checks Stay organized with collections Save and categorize content based on your preferences.
- MyPackage.ServiceA with the serving status SERVING MyPackage.ServiceB with the serving status NOT SERVING Empty service name with the serving status NOT SERVING If you create a health check against MyPackage.ServiceA , as follows, the health check probe returns HEALTHY , because the service's status is SERVING . gcloud compute health-checks create grpc MyGrpcHealthCheckServiceA \ --grpc-service-name=MyPackage.ServiceA If you create a health check against MyPackage.ServiceB , the health check probe returns UNHEALTHY because the service's status is NOT SERVING .

### Health checks overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud supports two types of gRPC health checks: GRPC WITH TLS health checks are used for health checking gRPC backends with TLS enabled.
- Certain Envoy-based load balancers that use hybrid NEG backends don't support gRPC health checks.
- Load balancer mode Legacy health checks supported Global external Application Load Balancer Classic Application Load Balancer Yes, if both of the following are true: The backends are instance groups.
- Google Cloud offers configurable health checks for Google Cloud load balancer backends, Cloud Service Mesh backends, and application-based autohealing for managed instance groups .

### "Backend authenticated TLS and backend mTLS overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- Source ID: `site-docs-reference-required-3`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Backend authenticated TLS and backend mTLS isn't supported for the following backend types: Global internet NEG backends App Engine backends Health checks used by backends don't implement TLS authentication or mTLS capabilities.
- Home Documentation Networking Load Balancing Guides Send feedback Backend authenticated TLS and backend mTLS overview Stay organized with collections Save and categorize content based on your preferences.
- Backend authenticated TLS and backend mTLS add the following capabilities to Application Load Balancers: The load balancer can validate certificates presented by backends against your own trust anchors.
- Key components of backend authenticated TLS and backend mTLS With backend authenticated TLS , the load balancer can verify the identity of the backends that it connects to.

