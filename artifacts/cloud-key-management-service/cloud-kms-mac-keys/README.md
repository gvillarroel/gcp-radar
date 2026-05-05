# Cloud KMS MAC keys

Product: Cloud Key Management Service
Feature slug: `cloud-kms-mac-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports MAC keys for creating and validating message authentication codes.

## Lifecycle

- Latest feature date: 2021-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- key (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- private (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- role (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))
- security (evidence: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures)
- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
