# Act-as permission verification

Product: Dataform
Feature slug: `act-as-permission-verification`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging.

## Lifecycle

- Latest feature date: 2025-12-15
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
- credential
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
