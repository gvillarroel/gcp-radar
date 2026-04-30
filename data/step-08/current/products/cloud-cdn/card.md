# Cloud CDN

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:14.757Z`
Product status: `PASS`

## Summary

- Feature cards: 41
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 41 unknown

## Service Card

- Service card ID: `cloud-cdn:service`
- Latest feature date: 2026-03-30
- Official source links: 31
- Security capabilities: 19

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Cloud CDN cache policies in URL maps | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig) |
| Cloud CDN service extensions (pre-cache edge extensions) | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/how-to)<br>[source](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions) |
| Cloud CDN traffic extensions (post-cache) | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions) |
| Cloud CDN predefined dashboards | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/logging) |
| Cloud CDN content targeting | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/apis)<br>[source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring) |
| Cloud CDN cache invalidation by cache tags | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)<br>[source](https://docs.cloud.google.com/cdn/docs/dynamic-compression)<br>[source](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content) |
| Cloud CDN TLS 1.3 early data (0-RTT) | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring) |
| Cloud CDN private origin authentication for Amazon S3-compatible object stores | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/authenticate-content)<br>[source](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)<br>[source](https://docs.cloud.google.com/cdn/docs/private-content) |
| Cloud CDN flexible pattern matching for advanced traffic management | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/authenticate-content)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)<br>[source](https://docs.cloud.google.com/cdn/docs/private-content) |
| Private origin authentication for Amazon S3 origins | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/authenticate-content)<br>[source](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)<br>[source](https://docs.cloud.google.com/cdn/docs/private-content) |
| Dynamic compression | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/dynamic-compression) |
| Custom named cookies and headers in cache key | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys) |
| Query parameter allowlisting for backend buckets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys) |
| Cloud CDN HTTP/3 support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin) |
| Negative caching for HTTP 302 and 307 responses | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/using-negative-caching) |
| Cache bypass via request headers | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/how-to)<br>[source](https://docs.cloud.google.com/cdn/docs/overview) |
| Serving stale content (serve-while-stale) | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/serving-stale-content) |
| Terraform support for Cloud CDN cache modes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-modes) |
| Terraform support for Cloud CDN custom response headers | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig) |
| Terraform support for Cloud CDN TTL overrides | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)<br>[source](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides) |
| Cloud Console support for cache modes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-modes) |
| Cloud Console support for cache TTL configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys) |
| Cloud Console support for custom response headers | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage) |
| Caching of additional HTTP response codes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/using-negative-caching) |
| Per-status-code TTL override via negative caching | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-negative-caching) |
| Request collapsing behavior improvements | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/dynamic-compression)<br>[source](https://docs.cloud.google.com/cdn/docs/overview) |
| Cloud CDN cache modes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/dynamic-compression)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-modes) |
| Cloud CDN custom response headers | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/locations)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys) |
| Cloud CDN TTL overrides | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview)<br>[source](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides) |
| Cloud CDN logging for HTTP(S) Load Balancing | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/logging)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect) |
| Cloud CDN request log cacheId field | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/logging)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket) |
| Cloud CDN Signed Cookies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-urls) |
| Cloud CDN Signed URL prefix authorization | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-urls) |
| Cloud CDN TLS v1.3 by default | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin) |
| Cloud CDN custom origins | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/logging) |
| Cloud CDN Large Object Caching | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage) |
| Cloud CDN Signed URLs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)<br>[source](https://docs.cloud.google.com/cdn/docs/using-signed-urls) |
| Cloud CDN Custom Cache Keys | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/best-practices)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/using-cache-keys) |
| Cloud CDN support for Google Cloud Storage with HTTP(S) Load Balancing | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples) |
| Cloud CDN cache invalidation for a single host | LOW | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)<br>[source](https://docs.cloud.google.com/cdn/docs/caching)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring) |
| Cloud CDN | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/cdn/docs/audit-logging)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)<br>[source](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples) |
