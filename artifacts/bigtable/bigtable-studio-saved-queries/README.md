# Bigtable Studio saved queries

Product: Bigtable
Feature slug: `bigtable-studio-saved-queries`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bigtable Studio now supports saving queries and managing saved queries.

## Lifecycle

- Latest feature date: 2025-10-20
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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- certificate (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- kms (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))
- security (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb)
