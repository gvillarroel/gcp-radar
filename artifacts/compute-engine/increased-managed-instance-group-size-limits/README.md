# Increased managed instance group size limits

Product: Compute Engine
Feature slug: `increased-managed-instance-group-size-limits`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance groups support larger default sizes of up to 2,000 VMs for zonal MIGs and 4,000 VMs for regional MIGs.

## Lifecycle

- Latest feature date: 2022-11-16
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

- [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups](https://docs.cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups)
