# Strict act-as mode

Product: Dataform
Feature slug: `strict-act-as-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Strict act-as mode requires users to have iam.serviceAccounts.actAs on the service account used to run Dataform workflows; Strict act-as mode adds an additional security check for certain user actions in Dataform.

## Lifecycle

- Latest feature date: 2025-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- credential
- iam
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
