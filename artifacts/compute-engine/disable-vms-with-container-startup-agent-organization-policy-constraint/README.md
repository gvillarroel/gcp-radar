# Disable VMs with Container Startup Agent organization policy constraint

Product: Compute Engine
Feature slug: `disable-vms-with-container-startup-agent-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This managed organization policy constraint prevents creation of Compute Engine VMs that use the container startup agent and gce-container-declaration metadata, with optional dry-run evaluation.

## Lifecycle

- Latest feature date: 2026-04-02
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

- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
