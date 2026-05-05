# Spanner managed autoscaler

Product: Spanner
Feature slug: `spanner-managed-autoscaler`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner managed autoscaler is now generally available and supports independent autoscaling configuration for read-only replicas separate from read-write replicas using capacity and CPU utilization targets; Spanner managed autoscaler automatically increases or decreases instance compute capacity based on workload, storage needs, and user-defined goals.

## Lifecycle

- Latest feature date: 2025-02-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek), [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek), [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek), [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek), [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek), [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
