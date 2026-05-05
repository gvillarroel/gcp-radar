# Data integrity verification fields

Product: Cloud Key Management Service
Feature slug: `data-integrity-verification-fields`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS API includes fields and guidance for maintaining data integrity during cryptographic operations.

## Lifecycle

- Latest feature date: 2020-05-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- audit (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- key (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- private (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- secret (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- security (evidence: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
