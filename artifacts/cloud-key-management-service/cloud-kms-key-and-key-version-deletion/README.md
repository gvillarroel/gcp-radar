# Cloud KMS key and key version deletion

Product: Cloud Key Management Service
Feature slug: `cloud-kms-key-and-key-version-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports deletion of keys and key versions that meet defined deletion criteria.

## Lifecycle

- Latest feature date: 2026-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- encrypt
- key
- kms
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-encryption-keys](https://docs.cloud.google.com/kms/docs/create-encryption-keys)
- [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
