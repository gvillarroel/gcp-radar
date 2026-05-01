# IAM custom roles support

Product: Dataflow
Feature slug: `iam-custom-roles-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM custom roles support lets Dataflow use custom IAM roles with user-managed service accounts.

## Lifecycle

- Latest feature date: 2022-01-04
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
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
