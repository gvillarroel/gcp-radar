# AlloyDB for PostgreSQL tags data in Cloud Billing usage exports

Product: Cloud Billing
Feature slug: `alloydb-for-postgresql-tags-data-in-cloud-billing-usage-exports`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing now includes AlloyDB for PostgreSQL cluster, instance, and backup usage tags in both Standard and Detailed usage cost exports.

## Lifecycle

- Latest feature date: 2024-07-10
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
- certificate
- iam
- identity
- key
- kms
- logging
- permission
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb)
