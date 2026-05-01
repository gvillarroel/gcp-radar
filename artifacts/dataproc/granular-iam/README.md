# Granular IAM

Product: Dataproc
Feature slug: `granular-iam`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources.

## Lifecycle

- Latest feature date: 2018-09-25
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
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/grant-access](https://docs.cloud.google.com/dataproc-metastore/docs/grant-access)
- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles](https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles)
