# Cloud KMS post-quantum digital signatures

Product: Cloud Key Management Service
Feature slug: `cloud-kms-post-quantum-digital-signatures`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports post-quantum cryptography algorithms for digital signatures.

## Lifecycle

- Latest feature date: 2025-02-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- key (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- private (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- role (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- security (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures)
- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
