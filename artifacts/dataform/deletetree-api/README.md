# deleteTree API

Product: Dataform
Feature slug: `deletetree-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The deleteTree API adds methods to delete folders and team folders in Dataform.

## Lifecycle

- Latest feature date: 2026-04-02
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
- allow
- auth
- certificate
- constraint
- credential
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dataform/reference/rest](https://docs.cloud.google.com/dataform/reference/rest)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataform/latest/changelog)
