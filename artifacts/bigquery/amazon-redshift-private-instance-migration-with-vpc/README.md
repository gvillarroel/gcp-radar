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

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- authorization (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules), [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator), [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
