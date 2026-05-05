# Custom term lengths for resource-based commitments

Product: Compute Engine
Feature slug: `custom-term-lengths-for-resource-based-commitments`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Resource-based commitments can use custom term lengths beyond the standard one- and three-year options.

## Lifecycle

- Latest feature date: 2024-10-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- allow (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- audit (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- auth (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- certificate (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- confidential (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- constraint (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- credential (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- encrypt (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- iam (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- identity (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- key (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- kms (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- logging (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- permission (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- policy (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- private (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- role (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))
- security (evidence: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource))

## Official Evidence

- [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/machine-resource](https://docs.cloud.google.com/compute/docs/machine-resource)
