# Managed instance group rollout disruption controls

Product: Compute Engine
Feature slug: `managed-instance-group-rollout-disruption-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managed instance groups support minimum and most disruptive allowed actions to limit rollout disruption during updates; Managed instance groups support minimum and most disruptive allowed actions to control disruption during configuration or application rollouts.

## Lifecycle

- Latest feature date: 2021-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
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

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/autoscaler](https://docs.cloud.google.com/compute/docs/autoscaler)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
