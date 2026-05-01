# Skip guest OS shutdown on instance stop or delete

Product: Compute Engine
Feature slug: `skip-guest-os-shutdown-on-instance-stop-or-delete`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Compute Engine can skip guest OS shutdown during instance stop or deletion to release resources and quota more quickly.

## Lifecycle

- Latest feature date: 2025-09-15
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

- [https://developers.google.com/compute/docs/instances/instance-lifecycle](https://developers.google.com/compute/docs/instances/instance-lifecycle)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle](https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle)
