# Custom IAM roles for datastore.databases.getMetadata

Product: Datastore
Feature slug: `custom-iam-roles-for-datastore-databases-getmetadata`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The datastore.databases.getMetadata permission can be used in custom IAM roles to support operations such as unlinking a database from App Engine.

## Lifecycle

- Latest feature date: 2022-04-28
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
- encrypt
- iam
- identity
- key
- kms
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
