# Cloud CDN Signed URL prefix authorization

Product: Cloud CDN
Feature slug: `cloud-cdn-signed-url-prefix-authorization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN extends signed URL support to allow authorizing a URL prefix as an alternative signing scheme.

## Lifecycle

- Latest feature date: 2020-04-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- allow (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- auth (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- authorization (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- logging (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- policy (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- private (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))
- secret (evidence: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls), [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring), [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
