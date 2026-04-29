# Large alert trimming

Product: Google SecOps
Feature slug: `large-alert-trimming`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues.

## Lifecycle

- Latest feature date: 2024-01-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- credential
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts](https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
