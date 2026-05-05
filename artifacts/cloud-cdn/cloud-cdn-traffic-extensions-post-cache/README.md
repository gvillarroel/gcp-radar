# Cloud CDN traffic extensions (post-cache)

Product: Cloud CDN
Feature slug: `cloud-cdn-traffic-extensions-post-cache`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions.

## Lifecycle

- Latest feature date: 2025-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- allow (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- auth (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- authorization (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- logging (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- policy (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))
- token (evidence: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
