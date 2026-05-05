# Private origin authentication for Amazon S3 origins

Product: Cloud CDN
Feature slug: `private-origin-authentication-for-amazon-s3-origins`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections.

## Lifecycle

- Latest feature date: 2023-01-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))
- allow (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))
- auth (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))
- private (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))
- security (evidence: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication), [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content), [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content)
- [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content)
