# Intel Optane DC Persistent Memory support

Product: Dataproc
Feature slug: `intel-optane-dc-persistent-memory-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports creating master and worker VMs with Intel Optane DC Persistent Memory using cluster properties.

## Lifecycle

- Latest feature date: 2019-11-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
