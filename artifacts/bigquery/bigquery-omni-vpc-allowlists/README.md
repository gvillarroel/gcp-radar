# BigQuery Omni VPC allowlists

Product: BigQuery
Feature slug: `bigquery-omni-vpc-allowlists`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery Omni VPC allowlists restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs; BigQuery Omni VPC allowlists restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs.

## Lifecycle

- Latest feature date: 2025-01-13
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
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
