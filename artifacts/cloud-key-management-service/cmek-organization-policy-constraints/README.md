# CMEK organization policy constraints

Product: Cloud Key Management Service
Feature slug: `cmek-organization-policy-constraints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS provides organization policy constraints to require CMEK protection and limit which key projects can be used for CMEK.

## Lifecycle

- Latest feature date: 2022-03-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- allow (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- constraint (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- key (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- policy (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- role (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- secret (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))
- security (evidence: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy), [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices), [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek), [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy)
- [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction)
