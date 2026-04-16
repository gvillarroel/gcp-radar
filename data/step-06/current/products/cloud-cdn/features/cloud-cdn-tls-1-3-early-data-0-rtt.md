---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.347Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TLS 1.3 early data (0-RTT)"
feature_slug: "cloud-cdn-tls-1-3-early-data-0-rtt"
latest_feature_date: "2025-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "early"
  - "balancing"
  - "external"
  - "http"
  - "load"
---

# Cloud CDN TLS 1.3 early data (0-RTT)

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

External HTTP(S) Load Balancing with Cloud CDN supports TLS 1.3 early data (0-RTT) to send request data during the TLS handshake for resumed connections.

## Extended Definition

External HTTP(S) Load Balancing with Cloud CDN supports TLS 1.3 early data (0-RTT) to send request data during the TLS handshake for resumed connections.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.
- Backend response bytes count loadbalancing.googleapis.com/https/backend response bytes count The number of bytes sent as responses from the backends (including cache) to the external Application Load Balancer.
- Backend request bytes count loadbalancing.googleapis.com/https/backend request bytes count The number of bytes sent as requests from the external Application Load Balancer to the backends.
- Backend request count loadbalancing.googleapis.com/https/backend request count The number of requests sent from the external Application Load Balancer to the backends.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Load balancing page Click the name of your external Application Load Balancer.
- You can improve cache hit rates and origin offload with the following cache key configuration settings: For backend services and buckets: Use HTTP headers as part of cache keys by including named headers in the cache key configuration.
- N/A Where possible, Cloud CDN endeavors to be RFC-compliant (HTTP RFC 7234), but favors optimizing for cache offload and minimizing the impact that clients can have on hit rate and overall origin load.
- Note: Setting cache policies at various levels of the URL map is supported only for the global external Application Load Balancer, and not for the classic Application Load Balancer.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- HTTP/3 is supported between the external HTTP(S) load balancer, Cloud CDN, and clients.
- An external Application Load Balancer can deliver a mix of static and dynamically created content to users through one global IP address from the following types of backends: Instance groups Zonal network endpoint groups (NEGs) Serverless NEGs : One or more App Engine , Cloud Run , or Cloud Run functions services Internet NEGs for external backends Buckets in Cloud Storage Because of the seamless integration with Google Cloud, you have several options for deploying Cloud CDN and managing content.
- Additionally, if origin firewalls prevent access to the origin, use IP allowlisting to ensure that a request is from Cloud CDN or the external Application Load Balancer.
- Early data requests that use nonidempotent HTTP methods or have query parameters are rejected with an HTTP 425 status code.

