# Cloud CDN cache policies in URL maps

Product: Cloud CDN
Feature slug: `cloud-cdn-cache-policies-in-url-maps`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters.

## Lifecycle

- Latest feature date: 2026-03-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- allow (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- auth (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- authorization (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- iam (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- logging (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- policy (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- role (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- token (evidence: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
