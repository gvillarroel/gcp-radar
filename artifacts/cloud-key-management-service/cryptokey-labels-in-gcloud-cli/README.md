# CryptoKey labels in gcloud CLI

Product: Cloud Key Management Service
Feature slug: `cryptokey-labels-in-gcloud-cli`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gcloud CLI supports specifying labels when creating keys and shows labels in key list output.

## Lifecycle

- Latest feature date: 2017-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- identity (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- key (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- private (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- role (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))
- security (evidence: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures), [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures)
- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
