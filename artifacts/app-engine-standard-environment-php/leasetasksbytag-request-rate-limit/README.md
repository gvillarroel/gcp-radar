# LeaseTasksByTag request rate limit

Product: App Engine standard environment PHP
Feature slug: `leasetasksbytag-request-rate-limit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

LeaseTasksByTag requests are limited to 25 requests per second.

## Lifecycle

- Latest feature date: 2016-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
