# Gemini Cloud Assist SQL apply to editor

Product: BigQuery
Feature slug: `gemini-cloud-assist-sql-apply-to-editor`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery can apply SQL generated in Gemini Cloud Assist chat to the query open in the editor.

## Lifecycle

- Latest feature date: 2025-10-01
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

## Security Capabilities

- access
- iam
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
