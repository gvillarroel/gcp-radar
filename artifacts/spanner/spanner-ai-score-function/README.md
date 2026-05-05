# Spanner AI.SCORE function

Product: Spanner
Feature slug: `spanner-ai-score-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner AI.SCORE rates natural-language input and assigns a score to support ranking and prioritization in SQL.

## Lifecycle

- Latest feature date: 2026-03-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- security (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions), [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml), [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/ml](https://docs.cloud.google.com/spanner/docs/ml)
- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions)
