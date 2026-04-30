# Alternate-zone repair for regional managed instance groups

Product: Compute Engine
Feature slug: `alternate-zone-repair-for-regional-managed-instance-groups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional managed instance groups can repair a VM in an alternate zone when repair in the original zone is not possible.

## Lifecycle

- Latest feature date: 2025-11-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- confidential
- constraint
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
