---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.782Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Backend subsetting for internal HTTP(S) load balancers"
feature_slug: "backend-subsetting-for-internal-http-s-load-balancers"
latest_feature_date: "2022-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
keywords:
  - "backend"
  - "subsetting"
  - "internal"
  - "http"
  - "load"
  - "balancers"
  - "improves"
  - "performance"
---

# Backend subsetting for internal HTTP(S) load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Backend subsetting for internal HTTP(S) load balancers improves performance and scalability by assigning each proxy instance a subset of backends.

## Extended Definition

Backend subsetting for internal HTTP(S) load balancers improves performance and scalability by assigning each proxy instance a subset of backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)

## Supporting Pages

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Backend subsetting is supported for the following: Regional internal Application Load Balancer Internal passthrough Network Load Balancer Backend subsetting for regional internal Application Load Balancers Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Backend subsetting for internal passthrough Network Load Balancer Backend subsetting for internal passthrough Network Load Balancers lets you scale your internal passthrough Network Load Balancer to support a larger number of backend VM instances per internal backend service.
- For external Application Load Balancers and internal Application Load Balancers using the HTTP, HTTPS, or HTTP/2 protocol, the backend service timeout is a request and response timeout for HTTP(S) traffic.
- For regional internal Application Load Balancers, backend subsetting automatically assigns only a subset of the backends within the regional backend service to each proxy instance.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Backend subsetting is an optional feature supported by regional internal Application Load Balancers that improves performance and scalability by assigning a subset of backends to each of the proxy instances.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Types of session affinity The session affinity for internal Application Load Balancers can be classified into one of the following categories: Hash-based session affinity ( NONE , CLIENT IP ) HTTP header-based session affinity ( HEADER FIELD ) Cookie-based session affinity ( GENERATED COOKIE , HTTP COOKIE , STRONG COOKIE AFFINITY ) Hash-based session affinity For hash-based session affinity, the load balancer uses the consistent hashing algorithm to select an eligible backend.
- Backend HTTP keepalive timeout Internal Application Load Balancers are proxies that use a first TCP connection between the (downstream) client and an Envoy proxy, and a second TCP connection between the Envoy proxy and your backends.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Instances that participate as backend VMs for internal passthrough Network Load Balancers must be running the appropriate Linux or Windows guest environment or other processes that provide equivalent functionality.
- How internal passthrough Network Load Balancers work An internal passthrough Network Load Balancer has a frontend (the forwarding rule) and a backend (the backend service).
- Backend subsetting Backend subsetting is an optional feature that improves performance by limiting the number of backends to which traffic is distributed.

