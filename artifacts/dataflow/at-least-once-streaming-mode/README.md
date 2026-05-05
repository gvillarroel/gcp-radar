# At-least-once streaming mode

Product: Dataflow
Feature slug: `at-least-once-streaming-mode`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports an at-least-once streaming mode for lower latency and reduced costs in workloads that can tolerate duplicate records.

## Lifecycle

- Latest feature date: 2024-02-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery), [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery), [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
