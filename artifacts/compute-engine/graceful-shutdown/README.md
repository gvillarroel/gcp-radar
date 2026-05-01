# Graceful shutdown

Product: Compute Engine
Feature slug: `graceful-shutdown`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Graceful shutdown gives the guest operating system up to one hour to finish tasks before a stopped instance powers off.

## Lifecycle

- Latest feature date: 2025-01-24
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
- [https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle](https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle)
