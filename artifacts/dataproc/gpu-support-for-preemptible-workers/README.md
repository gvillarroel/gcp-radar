# GPU support for preemptible workers

Product: Dataproc
Feature slug: `gpu-support-for-preemptible-workers`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports attaching GPUs to preemptible worker nodes.

## Lifecycle

- Latest feature date: 2020-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
