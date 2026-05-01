# Azure workload identity federation for BigQuery Omni connections

Product: BigQuery
Feature slug: `azure-workload-identity-federation-for-bigquery-omni-connections`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery Omni connections support Azure workload identity federation and connection creation in the Google Cloud console; Azure workload identity federation lets BigQuery Omni connections use Azure-managed applications without client secrets.

## Lifecycle

- Latest feature date: 2023-01-31
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
- auth
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
