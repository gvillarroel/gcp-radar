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

- access (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- constraint (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))
- security (evidence: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode), [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository), [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
