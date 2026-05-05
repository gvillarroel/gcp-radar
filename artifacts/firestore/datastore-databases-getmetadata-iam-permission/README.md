# datastore.databases.getMetadata IAM permission

Product: Firestore
Feature slug: `datastore-databases-getmetadata-iam-permission`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The datastore.databases.getMetadata permission can be included in custom IAM roles for Firestore.

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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam), [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam))

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
