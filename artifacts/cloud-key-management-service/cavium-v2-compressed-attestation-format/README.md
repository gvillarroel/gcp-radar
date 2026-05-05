# CAVIUM_V2_COMPRESSED attestation format

Product: Cloud Key Management Service
Feature slug: `cavium-v2-compressed-attestation-format`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports the CAVIUM_V2_COMPRESSED attestation format enum value.

## Lifecycle

- Latest feature date: 2019-02-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- audit (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- key (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))
- security (evidence: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys), [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
