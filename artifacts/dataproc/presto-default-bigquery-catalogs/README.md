# Presto default BigQuery catalogs

Product: Dataproc
Feature slug: `presto-default-bigquery-catalogs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Presto on Dataproc includes default catalogs for the cluster project's BigQuery datasets and public BigQuery datasets.

## Lifecycle

- Latest feature date: 2020-04-15
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
- confidential
- encrypt
- iam
- identity
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
