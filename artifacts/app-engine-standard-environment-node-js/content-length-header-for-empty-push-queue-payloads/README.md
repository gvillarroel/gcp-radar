# Content-Length header for empty push queue payloads

Product: App Engine standard environment Node.js
Feature slug: `content-length-header-for-empty-push-queue-payloads`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Push queue requests for Task Queue tasks without payloads now include a Content-Length header set to 0.

## Lifecycle

- Latest feature date: 2015-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- private
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
