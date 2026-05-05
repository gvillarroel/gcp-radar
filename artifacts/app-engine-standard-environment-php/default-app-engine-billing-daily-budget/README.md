# Default App Engine billing daily budget

Product: App Engine standard environment PHP
Feature slug: `default-app-engine-billing-daily-budget`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Applications enabled for billing now default to an unlimited daily budget instead of a $0 cap, preventing accidental budget exhaustion outages.

## Lifecycle

- Latest feature date: 2015-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console), [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console), [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console), [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console), [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console), [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/php7/labeling-resources)
