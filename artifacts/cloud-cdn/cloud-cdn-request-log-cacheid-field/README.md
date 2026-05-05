# Cloud CDN request log cacheId field

Product: Cloud CDN
Feature slug: `cloud-cdn-request-log-cacheid-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response.

## Lifecycle

- Latest feature date: 2020-04-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))
- logging (evidence: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
