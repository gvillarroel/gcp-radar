# Cloud HSM

Product: Cloud Key Management Service
Feature slug: `cloud-hsm`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud HSM in Cloud KMS is generally available; Cloud KMS beta introduced HSM protection level support and related API metadata.

## Lifecycle

- Latest feature date: 2018-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- allow (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- authorization (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- identity (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- key (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- private (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- role (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))
- token (evidence: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl), [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl)
