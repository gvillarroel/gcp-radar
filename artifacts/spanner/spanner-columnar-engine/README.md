# Spanner columnar engine

Product: Spanner
Feature slug: `spanner-columnar-engine`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner launched the Columnar engine in Public Preview to enable automatic columnar query execution and faster columnar scans with vectorized execution on live operational data; The Spanner columnar engine provides a preview storage and query acceleration technique for analytical workloads, improving scan performance on live operational data by up to 200x without impacting transactional workloads.

## Lifecycle

- Latest feature date: 2026-01-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- policy

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/configure-columnar-engine](https://docs.cloud.google.com/spanner/docs/configure-columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
