# Encrypt and decrypt commands in gcloud CLI

Product: Cloud Key Management Service
Feature slug: `encrypt-and-decrypt-commands-in-gcloud-cli`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gcloud beta kms CLI includes commands to encrypt and decrypt data.

## Lifecycle

- Latest feature date: 2017-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- credential (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- key (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- private (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- role (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))
- security (evidence: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt), [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa), [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption), [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
