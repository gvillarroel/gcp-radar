# Import and export operation history in Google Cloud Console

Product: Datastore
Feature slug: `import-and-export-operation-history-in-google-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Google Cloud Console can display recent Datastore import and export operations.

## Lifecycle

- Latest feature date: 2021-05-13
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
- audit
- auth
- credential
- iam
- identity
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
