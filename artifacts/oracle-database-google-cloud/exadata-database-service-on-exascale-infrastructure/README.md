# Exadata Database Service on Exascale Infrastructure

Product: Oracle Database@Google Cloud
Feature slug: `exadata-database-service-on-exascale-infrastructure`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Exadata Database Service on Exascale Infrastructure lets you create and manage Exascale VM Clusters and Exascale Storage Vaults.

## Lifecycle

- Latest feature date: 2025-09-23
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

- access (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- authorization (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- key (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- role (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))
- token (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters), [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters)
- [https://docs.cloud.google.com/oracle/database/docs/iam-overview](https://docs.cloud.google.com/oracle/database/docs/iam-overview)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
