# Local SSD preservation on stop or suspend

Product: Compute Engine
Feature slug: `local-ssd-preservation-on-stop-or-suspend`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The discard-local-ssd=false option preserves the contents of a single attached Local SSD when a VM is stopped or suspended.

## Lifecycle

- Latest feature date: 2023-05-19
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

- [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
