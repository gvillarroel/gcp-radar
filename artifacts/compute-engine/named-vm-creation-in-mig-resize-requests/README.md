# Named VM creation in MIG resize requests

Product: Compute Engine
Feature slug: `named-vm-creation-in-mig-resize-requests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance group resize requests can specify VM names for instances created in a batch.

## Lifecycle

- Latest feature date: 2025-04-28
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

- [https://developers.google.com/compute/docs/reference/rest/v1](https://developers.google.com/compute/docs/reference/rest/v1)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
