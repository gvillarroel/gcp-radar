# Spanner managed autoscaling by total CPU utilization

Product: Spanner
Feature slug: `spanner-managed-autoscaling-by-total-cpu-utilization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner managed autoscaling can automatically add or remove compute capacity when an instance's total CPU utilization exceeds or falls below a configured target.

## Lifecycle

- Latest feature date: 2026-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview), [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
