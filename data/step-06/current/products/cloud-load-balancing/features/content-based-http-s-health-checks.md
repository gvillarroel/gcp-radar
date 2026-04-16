---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.797Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Content-based HTTP(S) health checks"
feature_slug: "content-based-http-s-health-checks"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/health-checks"
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls"
keywords:
  - "content"
  - "based"
  - "http"
  - "health"
  - "checks"
  - "can"
  - "validate"
  - "backend"
---

# Content-based HTTP(S) health checks

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) health checks can validate backend responses based on returned content.

## Extended Definition

HTTP(S) health checks can validate backend responses based on returned content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)

## Supporting Pages

### Use health checks \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- Source ID: `site-docs-reference-required-3`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using a global health check with your internal passthrough Network Load Balancer, use --global-health-checks instead of --health-checks-region . gcloud compute backend-services update BACKEND SERVICE NAME \ --region= REGION \ --health-checks= HEALTH CHECK NAME \ --health-checks-region= REGION To change the health check for a backend service-based regional external passthrough Network Load Balancer: A regional external passthrough Network Load Balancer's backend service is regional.
- To get the instantaneous health state of a global backend service, use backendServices.getHealth To get the instantaneous health state of a regional backend service, use regionBackendServices.getHealth For target pool-based regional external passthrough Network Load Balancers, use targetPools.getHealth Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To associate a health check with a backend service, use one of these API calls: backendServices.update backendServices.patch Associate legacy health checks with target pool-based regional external passthrough Network Load Balancers To associate a legacy health check with a new regional external passthrough Network Load Balancer, refer to Set up a regional external passthrough Network Load Balancer with a target pool .
- Home Documentation Networking Load Balancing Guides Send feedback Use health checks Stay organized with collections Save and categorize content based on your preferences.

### Health checks overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Health check category and scope Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Health check ( global ) Regional external Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Regional external proxy Network Load Balancer Health check ( regional ) Regional external passthrough Network Load Balancer Backend service-based load balancer: Health check ( regional ) Target pool-based load balancer: Legacy health check ( global with the HTTP protocol ) Internal passthrough Network Load Balancer Health check ( global or regional ) For external Application Load Balancers, legacy health checks are not recommended but are sometimes supported, depending on the load balancer mode.
- Certificates and health checks Google Cloud health check probers don't perform certificate validation, even for protocols that require that your backends use certificates (SSL, HTTPS, and HTTP/2)—for example: You can use self-signed certificates or certificates signed by any certificate authority (CA).
- Google Cloud offers configurable health checks for Google Cloud load balancer backends, Cloud Service Mesh backends, and application-based autohealing for managed instance groups .
- Home Documentation Networking Load Balancing Guides Send feedback Health checks overview Stay organized with collections Save and categorize content based on your preferences.

### "Backend authenticated TLS and backend mTLS overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- Source ID: `site-docs-reference-required-3`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backend authenticated TLS and backend mTLS isn't supported for the following backend types: Global internet NEG backends App Engine backends Health checks used by backends don't implement TLS authentication or mTLS capabilities.
- Home Documentation Networking Load Balancing Guides Send feedback Backend authenticated TLS and backend mTLS overview Stay organized with collections Save and categorize content based on your preferences.
- The SNI ( sni ) and SAN ( subjectAltNames ) fields in the tlsSettings attribute control how the load balancer validates the backend's certificate based on the certificate's SAN values.
- You must configure the backends with health check endpoints that can respond to HTTP or HTTPS requests.

