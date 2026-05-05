# Cloud CDN custom response headers

Product: Cloud CDN
Feature slug: `cloud-cdn-custom-response-headers`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers.

## Lifecycle

- Latest feature date: 2020-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys), [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations))
- authorization (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys), [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys), [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations))
- policy (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys), [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations))
- private (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys), [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
