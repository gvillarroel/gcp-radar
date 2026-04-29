# Dataplex automatic discovery in BigQuery

Product: BigQuery
Feature slug: `dataplex-automatic-discovery-in-bigquery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataplex automatic discovery in BigQuery scans Cloud Storage data to extract metadata and create analytics-ready BigLake, external, or object tables.

## Lifecycle

- Latest feature date: 2025-04-28
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
- iam
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
