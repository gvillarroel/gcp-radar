# Rounding mode for NUMERIC and BIGNUMERIC columns

Product: BigQuery
Feature slug: `rounding-mode-for-numeric-and-bignumeric-columns`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

BigQuery supports configurable rounding modes for parameterized NUMERIC and BIGNUMERIC columns and in the ROUND function.

## Lifecycle

- Latest feature date: 2023-04-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- auth
- iam
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
