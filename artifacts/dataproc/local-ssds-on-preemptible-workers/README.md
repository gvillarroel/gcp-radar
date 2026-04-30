# Local SSDs on preemptible workers

Product: Dataproc
Feature slug: `local-ssds-on-preemptible-workers`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports adding local SSDs to preemptible secondary worker nodes.

## Lifecycle

- Latest feature date: 2018-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- key
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
