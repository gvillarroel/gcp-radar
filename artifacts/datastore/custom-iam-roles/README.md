# Custom IAM roles

Product: Datastore
Feature slug: `custom-iam-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Custom IAM roles let you define Datastore access using user-defined role compositions.

## Lifecycle

- Latest feature date: 2021-06-15
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
- encrypt
- iam
- identity
- key
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/activate](https://docs.cloud.google.com/datastore/docs/activate)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
