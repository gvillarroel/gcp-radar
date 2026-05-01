# Data lineage

Product: Dataflow
Feature slug: `data-lineage`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports data lineage to track how data moves through systems.

## Lifecycle

- Latest feature date: 2025-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- credential
- iam
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
