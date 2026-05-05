# BigQuery notebook gallery

Product: BigQuery
Feature slug: `bigquery-notebook-gallery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The BigQuery web UI includes a notebook gallery for discovering and using prebuilt notebook templates.

## Lifecycle

- Latest feature date: 2025-10-02
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

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
