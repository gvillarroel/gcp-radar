# Amazon Redshift private instance migration with VPC

Product: BigQuery
Feature slug: `amazon-redshift-private-instance-migration-with-vpc`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports migrating private Amazon Redshift instances using VPC connectivity.

## Lifecycle

- Latest feature date: 2020-02-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- encrypt
- iam
- key
- permission
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
