# Targeted reservations for accelerator pipelines

Product: Dataflow
Feature slug: `targeted-reservations-for-accelerator-pipelines`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs.

## Lifecycle

- Latest feature date: 2025-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse), [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse), [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
