# Default unlimited daily budget

Product: App Engine standard environment Go
Feature slug: `default-unlimited-daily-budget`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apps newly enabled for billing now default to an unlimited daily budget instead of a $0 daily budget.

## Lifecycle

- Latest feature date: 2015-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- credential
- firewall
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
