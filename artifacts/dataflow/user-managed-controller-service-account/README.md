# User-managed controller service account

Product: Dataflow
Feature slug: `user-managed-controller-service-account`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataflow lets users specify a user-managed controller service account for pipeline jobs.

## Lifecycle

- Latest feature date: 2018-06-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- auth
- authorization
- certificate
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
