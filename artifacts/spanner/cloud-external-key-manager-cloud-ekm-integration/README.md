# Cloud External Key Manager (Cloud EKM) integration

Product: Spanner
Feature slug: `cloud-external-key-manager-cloud-ekm-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now supports Cloud External Key Manager (Cloud EKM) for customer-managed encryption keys and enables Key Access Justification for key access visibility.

## Lifecycle

- Latest feature date: 2021-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- encrypt
- identity
- key
- kms
- permission
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
