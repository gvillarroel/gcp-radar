# Python streaming support

Product: Dataflow
Feature slug: `python-streaming-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher.

## Lifecycle

- Latest feature date: 2019-10-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration), [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
