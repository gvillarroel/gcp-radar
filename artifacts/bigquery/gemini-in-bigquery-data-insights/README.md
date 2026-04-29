# Gemini in BigQuery data insights

Product: BigQuery
Feature slug: `gemini-in-bigquery-data-insights`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Gemini in BigQuery provides data insights capabilities within BigQuery; Gemini in BigQuery provides automated data insights to help users explore and understand data.

## Lifecycle

- Latest feature date: 2024-08-28
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
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
