# Spanner Transaction Insights dashboard

Product: Spanner
Feature slug: `spanner-transaction-insights-dashboard`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Transaction Insights dashboard identifies transactions in Spanner databases that cause lock contention and potential high latency.

## Lifecycle

- Latest feature date: 2022-10-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
