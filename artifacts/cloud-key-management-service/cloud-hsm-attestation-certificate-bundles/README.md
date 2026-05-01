# Cloud HSM attestation certificate bundles

Product: Cloud Key Management Service
Feature slug: `cloud-hsm-attestation-certificate-bundles`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Certificate bundles for verifying attestations for Cloud HSM keys were replaced by certificate chains; deprecated on 2024-03-20.

## Lifecycle

- Latest feature date: 2024-03-20
- Deprecation date: 2024-03-20
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- certificate
- iam
- identity
- key
- kms
- permission
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
