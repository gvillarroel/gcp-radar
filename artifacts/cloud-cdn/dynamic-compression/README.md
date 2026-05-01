# Dynamic compression

Product: Cloud CDN
Feature slug: `dynamic-compression`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client.

## Lifecycle

- Latest feature date: 2022-09-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- identity
- key
- logging
- private

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
