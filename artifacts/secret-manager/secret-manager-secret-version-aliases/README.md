# Secret Manager secret version aliases

Product: Secret Manager
Feature slug: `secret-manager-secret-version-aliases`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Secret Manager added support for aliases to access a secret version by resource path name; Secret Manager added support for accessing secret versions using aliases.

## Lifecycle

- Latest feature date: 2023-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- permission
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse)
- [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- [https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version](https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version)
