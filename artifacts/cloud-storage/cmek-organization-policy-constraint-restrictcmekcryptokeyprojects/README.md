# CMEK organization policy constraint: restrictCmekCryptoKeyProjects

Product: Cloud Storage
Feature slug: `cmek-organization-policy-constraint-restrictcmekcryptokeyprojects`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This organization policy constraint controls which projects can provide Cloud KMS keys for Cloud Storage requests.

## Lifecycle

- Latest feature date: 2022-08-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- constraint
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
