# Cloud Build user-specified service account identity tokens

Product: Cloud Build
Feature slug: `cloud-build-user-specified-service-account-identity-tokens`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization.

## Lifecycle

- Latest feature date: 2023-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- identity
- key
- logging
- permission
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)
- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
