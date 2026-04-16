---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.779Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Distributed Envoy health checks"
feature_slug: "distributed-envoy-health-checks"
latest_feature_date: "2023-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-logging"
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-concepts"
keywords:
  - "distributed"
  - "envoy"
  - "health"
  - "checks"
  - "regional"
  - "external"
  - "http"
  - "internal"
---

# Distributed Envoy health checks

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional external HTTP(S), internal HTTP(S), and regional internal TCP proxy load balancers use distributed Envoy health checks originating from proxy-only subnets.

## Extended Definition

Regional external HTTP(S), internal HTTP(S), and regional internal TCP proxy load balancers use distributed Envoy health checks originating from proxy-only subnets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the scope of health checks supported by internal Application Load Balancers: Load balancer mode Health check type Cross-region internal Application Load Balancer healthChecks Regional internal Application Load Balancer regionHealthChecks For more information about health checks, see the following: Health checks overview Create health checks Firewall rules An internal Application Load Balancer requires the following firewall rules: An ingress allow rule that permits traffic from Google's central health check ranges.
- Returns HTTP 503 Regional internal Application Load Balancer Automatic failover to healthy backends in the same region.
- For details, see Distributed Envoy health checks .
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.

### "Health check logging information \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- Source ID: `site-docs-reference-required-3`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. probeCompletionTimestamp google.protobuf.Timestamp Probe completion timestamp. connectLatency google.protobuf.Duration Time spent on setting up the connection for connection-oriented health check protocols TCP, SSL, HTTP, HTTPS, and HTTP/2.
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. probeRequest string For HTTP, HTTPS, and HTTP/2, this is the URL request path ( requestPath field in the resource config).
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. previousDetailedHealthState enum(DetailedHealthState) The previous detailed health status of the endpoint.
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. responseLatency google.protobuf.Duration Latency between request and response, as measured by the prober.

### Health checks overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Health check category and scope Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Health check ( global ) Regional external Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Regional external proxy Network Load Balancer Health check ( regional ) Regional external passthrough Network Load Balancer Backend service-based load balancer: Health check ( regional ) Target pool-based load balancer: Legacy health check ( global with the HTTP protocol ) Internal passthrough Network Load Balancer Health check ( global or regional ) For external Application Load Balancers, legacy health checks are not recommended but are sometimes supported, depending on the load balancer mode.
- The following table shows the source IP ranges to allow for each load balancer: Product Health check probe source IP ranges Global external Application Load Balancer Global external proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 2600:2d00:1:1::/64 Regional external Application Load Balancer 1, 2 Cross-region internal Application Load Balancer 1 Regional internal Application Load Balancer 1, 2 Regional external proxy Network Load Balancer 1, 2 Regional internal proxy Network Load Balancer 1, 2 Cross-region internal proxy Network Load Balancer 1 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 Classic proxy Network Load Balancer Classic Application Load Balancer Cloud Service Mesh, except for internet NEG backends and hybrid NEG backends 35.191.0.0/16 130.211.0.0/22 Regional external passthrough Network Load Balancer 3 For IPv4 traffic to the backends: 35.191.0.0/16 209.85.152.0/22 209.85.204.0/22 For IPv6 traffic to the backends: 2600:1901:8001::/48 Internal passthrough Network Load Balancer For IPv4 traffic to the backends: 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 Cloud Service Mesh with internet NEG backends and hybrid NEG backends IP addresses of the VMs running the Envoy software For a sample configuration, see the Cloud Service Mesh documentation 1 Allowing traffic from Google's health check probe ranges isn't required for hybrid NEGs.
- Global external Application Load Balancer Cross-region internal Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Returns an HTTP 503 status code to clients when all backends are unhealthy.
- The two categories are health checks and legacy health checks and their supported protocols are as follows: Health checks Regional (gRPC, gRPC (with TLS), TCP, SSL, HTTP, HTTPS, or HTTP/2) Global (gRPC, gRPC (with TLS), TCP, SSL, HTTP, HTTPS, or HTTP/2) Legacy health checks: Legacy global (HTTP) Legacy global (HTTPS) The protocol and port determine how health check probes are done.

