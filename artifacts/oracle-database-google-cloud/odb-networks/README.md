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

- access (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- allow (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- audit (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- auth (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- authorization (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- iam (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- identity (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- permission (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- role (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- security (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))
- token (evidence: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase), [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase](https://docs.cloud.google.com/iam/docs/roles-permissions/oracledatabase)
- [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
