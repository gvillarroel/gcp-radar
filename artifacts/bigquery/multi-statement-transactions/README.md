# Multi-statement transactions

Product: BigQuery
Feature slug: `multi-statement-transactions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports transactions that span multiple SQL statements; Multi-statement transactions let BigQuery execute multiple mutating operations atomically with commit or rollback.

## Lifecycle

- Latest feature date: 2022-10-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes), [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries), [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries)
- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
