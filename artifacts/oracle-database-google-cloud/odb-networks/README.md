# ODB Networks

Product: Oracle Database@Google Cloud
Feature slug: `odb-networks`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

ODB Networks connect Oracle Database@Google Cloud resources in an OCI child site with a Google Cloud VPC network.

## Lifecycle

- Latest feature date: 2025-08-14
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
- audit
- auth
- authorization
- iam
- identity
- permission
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase)
- [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
