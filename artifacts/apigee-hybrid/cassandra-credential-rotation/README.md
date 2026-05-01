# Cassandra credential rotation

Product: Apigee hybrid
Feature slug: `cassandra-credential-rotation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid v1.14 introduces rotation of Cassandra credentials in Kubernetes secrets and supports rollback before cleanup job initiation for both Vault and Kubernetes secrets.

## Lifecycle

- Latest feature date: 2024-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- credential
- iam
- identity
- key
- kms
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods)
