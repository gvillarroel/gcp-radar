# Exception sampling

Product: Dataflow
Feature slug: `exception-sampling`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports data sampling for pipeline exceptions so users can inspect sample data when unhandled errors occur.

## Lifecycle

- Latest feature date: 2023-12-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest), [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds), [https://docs.cloud.google.com/dataflow/docs/samples](https://docs.cloud.google.com/dataflow/docs/samples))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest), [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds), [https://docs.cloud.google.com/dataflow/docs/samples](https://docs.cloud.google.com/dataflow/docs/samples))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/samples](https://docs.cloud.google.com/dataflow/docs/samples)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
