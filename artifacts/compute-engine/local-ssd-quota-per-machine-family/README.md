# Local SSD quota per machine family

Product: Compute Engine
Feature slug: `local-ssd-quota-per-machine-family`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Local SSD quota per machine family lets you view and manage Local SSD quota usage and limits by VM family.

## Lifecycle

- Latest feature date: 2023-05-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- key (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- private (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- role (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- security (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource)
