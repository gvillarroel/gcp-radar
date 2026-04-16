---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.796Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTP/2 health checks"
feature_slug: "http-2-health-checks"
latest_feature_date: "2019-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/health-checks"
  - "https://docs.cloud.google.com/load-balancing/docs/features"
keywords:
  - "http"
  - "health"
  - "checks"
  - "load"
  - "balancing"
  - "supports"
  - "use"
  - "protocol"
---

# HTTP/2 health checks

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Load balancing supports health checks that use the HTTP/2 protocol.

## Extended Definition

Load balancing supports health checks that use the HTTP/2 protocol.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)

## Supporting Pages

### Health checks overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Health check category and scope Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Health check ( global ) Regional external Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Regional external proxy Network Load Balancer Health check ( regional ) Regional external passthrough Network Load Balancer Backend service-based load balancer: Health check ( regional ) Target pool-based load balancer: Legacy health check ( global with the HTTP protocol ) Internal passthrough Network Load Balancer Health check ( global or regional ) For external Application Load Balancers, legacy health checks are not recommended but are sometimes supported, depending on the load balancer mode.
- The two categories are health checks and legacy health checks and their supported protocols are as follows: Health checks Regional (gRPC, gRPC (with TLS), TCP, SSL, HTTP, HTTPS, or HTTP/2) Global (gRPC, gRPC (with TLS), TCP, SSL, HTTP, HTTPS, or HTTP/2) Legacy health checks: Legacy global (HTTP) Legacy global (HTTPS) The protocol and port determine how health check probes are done.
- Certificates and health checks Google Cloud health check probers don't perform certificate validation, even for protocols that require that your backends use certificates (SSL, HTTPS, and HTTP/2)—for example: You can use self-signed certificates or certificates signed by any certificate authority (CA).
- Envoy supports the following protocols for health checking: HTTP HTTPS HTTP/2 TCP When Cloud Service Mesh is integrated with Service Directory and you bind a Service Directory service to a Cloud Service Mesh backend service, you cannot set a health check on the backend service.

### Use health checks \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- Source ID: `site-docs-reference-required-3`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example creates an HTTP health check named hc-http-port-80 using port 80 with default interval, timeout, and health threshold criteria. gcloud compute health-checks create HTTP PROTOCOL hc-http-port-80 \ COMMON FLAGS \ PORT SPECIFICATION \ --host= HOST \ --proxy-header= PROXY HEADER \ --request-path= REQUEST PATH \ --response= RESPONSE HTTP PROTOCOL : Can be http (HTTP/1.1 without TLS), https (HTTP/1.1 with TLS), or http2 (HTTP/2 with TLS).
- A regional external passthrough Network Load Balancer has at least one target pool, and might have a secondary backup pool. gcloud compute target-pools list Identify a legacy health check using the HTTP protocol.
- Home Documentation Networking Load Balancing Guides Send feedback Use health checks Stay organized with collections Save and categorize content based on your preferences.
- If you are creating the legacy health check for a target pool-based regional external passthrough Network Load Balancer, you must use http-health-checks .

### "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- Source ID: `site-docs-reference-required-3`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External gRPC health checks (without TLS) 2 2 2 2 1 gRPC health checks (with TLS) 2 2 2 2 1 HTTP health checks 3 (Only classic and regional mode) 1 HTTPS health checks 3 (Only classic and regional mode) 1 HTTP/2 health checks (Only classic and regional mode) 1 SSL health checks 1 TCP health checks 1 Configurable health checks Configurable request path (HTTP, HTTPS, HTTP/2) Configurable request string or path (TCP or SSL) Configurable expected response string 1 Distributed Envoy health checks (Only regional mode) (Only regional mode) 1 This table documents health checks used by backend service-based regional external passthrough Network Load Balancers.
- Target pool-based load balancers support only legacy HTTP health checks .
- Backends Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Backends can be in multiple regions (Only cross-region mode) (Only global and classic mode) (Only cross-region mode) (Only global and classic mode) Backends must be in one region (Only regional mode) (Only regional and classic mode) (Only regional mode) (Only regional and classic mode) info info Cloud Storage in backend buckets External endpoints in internet NEGs (Only regional mode) ( Global , regional , and classic modes) (Only regional mode) (Only regional mode) Multiple backend services and a URL map Virtual machine backends on Compute Engine Self-managed Kubernetes and GKE Zonal NEGs GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP endpoints GCE VM IP endpoints Private Service Connect NEGs (Only global and regional mode) (Only global and regional mode) Private external endpoints in hybrid NEG backends info info info info Serverless backends info info Dual-stack (IPV4 and IPv6) backends info (Only global and regional modes) info (Only global and regional modes) info info IPv6-only backends info info Health checks For links to reference information, see Health checks .
- Routing and traffic management Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External HTTP or Layer 7 request routing info info Fault injection info (Only global and regional modes) Configurable timeouts info info info info Retries info info Redirects info global classic regional URL rewrites info global classic regional Request and response header transformations (configured on the URL map) info (Only global and regional modes) Traffic splitting info (Only global and regional modes) Traffic mirroring info 1 (Only global and regional modes) (Only regional mode) Outlier detection info (Only global and regional modes) Retry failed requests info (Only global and regional modes) Custom request and response headers (configured on the backend service) (Only global and regional modes) Custom error responses (Only global mode) Service load balancing policy (Only cross-region mode) (Only global mode) (Only cross-region mode) (Only global mode) Connection tracking policy info info 1 Source IP-based traffic steering info 2 1 This feature is not supported with load balancers that use serverless NEG backends.

