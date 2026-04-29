# BigQuery slot recommender

Product: BigQuery
Feature slug: `bigquery-slot-recommender`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The BigQuery slot recommender analyzes on-demand usage to recommend slot capacity purchase options and cost-performance tradeoffs.

## Lifecycle

- Latest feature date: 2022-03-17
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
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
