# Unified Maintenance support for Compute Engine VM and bare metal instances

Product: Unified Maintenance
Feature slug: `unified-maintenance-support-for-compute-engine-vm-and-bare-metal-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Unified Maintenance now displays maintenance activities for Compute Engine virtual machine and bare-metal instances.

## Lifecycle

- Latest feature date: 2026-02-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- allow (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- logging (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- permission (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- policy (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- role (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))
- security (evidence: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates), [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services), [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1), [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance))

## Official Evidence

- [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates)
- [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)

## Validation Findings

- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
