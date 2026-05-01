# VM shutdown on Cloud KMS key revocation

Product: Compute Engine
Feature slug: `vm-shutdown-on-cloud-kms-key-revocation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A VM can be configured to shut down automatically when its Cloud KMS key is revoked; VM shutdown on Cloud KMS key revocation automatically stops a VM when the Cloud KMS key protecting an attached persistent disk is revoked.

## Lifecycle

- Latest feature date: 2022-07-28
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
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
