# OS Login with SSH certificates

Product: Compute Engine
Feature slug: `os-login-with-ssh-certificates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

OS Login now supports SSH certificate-based connections in addition to SSH keys.

## Lifecycle

- Latest feature date: 2025-06-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- allow (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- audit (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- auth (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- certificate (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- confidential (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- constraint (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- credential (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- encrypt (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- iam (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- identity (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- key (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- kms (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- logging (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- permission (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- policy (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- private (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- role (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- security (evidence: [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))

## Official Evidence

- [https://developers.google.com/compute/docs/instances/ssh](https://developers.google.com/compute/docs/instances/ssh)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instances/ssh](https://docs.cloud.google.com/compute/docs/instances/ssh)
