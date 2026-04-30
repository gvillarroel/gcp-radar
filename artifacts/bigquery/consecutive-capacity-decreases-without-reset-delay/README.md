# Consecutive capacity decreases without reset delay

Product: BigQuery
Feature slug: `consecutive-capacity-decreases-without-reset-delay`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery workload management allows multiple consecutive capacity reductions after one minute has passed since the most recent capacity increase without resetting the minimum-delay timer.

## Lifecycle

- Latest feature date: 2024-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- encrypt
- identity
- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
