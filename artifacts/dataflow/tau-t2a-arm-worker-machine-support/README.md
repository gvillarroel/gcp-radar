# Tau T2A Arm worker machine support

Product: Dataflow
Feature slug: `tau-t2a-arm-worker-machine-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports the Tau T2A Arm machine series as a worker machine type.

## Lifecycle

- Latest feature date: 2023-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard), [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
