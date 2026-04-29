# Subqueries in row-level access policies

Product: BigQuery
Feature slug: `subqueries-in-row-level-access-policies`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery row-level access policies now support subqueries; BigQuery supports using subqueries in row-level access policies.

## Lifecycle

- Latest feature date: 2025-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- iam
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
