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

- access (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- allow (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- audit (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- auth (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- certificate (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- confidential (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- constraint (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- credential (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- encrypt (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- iam (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- identity (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- key (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- kms (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- logging (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- permission (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- policy (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- private (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- role (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- security (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))

## Official Evidence

- [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
