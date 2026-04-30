# Data Access audit logs

Product: Datastore
Feature slug: `data-access-audit-logs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore; Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore.

## Lifecycle

- Latest feature date: 2021-11-04
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
- encrypt
- iam
- identity
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
