# Unlimited default daily budget on billing enablement

Product: App Engine Admin API
Feature slug: `unlimited-default-daily-budget-on-billing-enablement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Newly billed App Engine applications now default to an unlimited daily budget rather than a $0 cap.

## Lifecycle

- Latest feature date: 2015-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
