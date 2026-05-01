# Confidential VM worker support

Product: Dataflow
Feature slug: `confidential-vm-worker-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports Confidential VMs for worker VMs.

## Lifecycle

- Latest feature date: 2023-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- key

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
