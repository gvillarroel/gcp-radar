# MS SQL JDBC driver update

Product: Looker
Feature slug: `ms-sql-jdbc-driver-update`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The MS SQL JDBC driver was updated to version 12.10.0 for connections to supported Microsoft SQL Server and Azure SQL services.

## Lifecycle

- Latest feature date: 2025-06-11
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

- access (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- iam (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- key (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- kms (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- logging (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- policy (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- role (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))
- token (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
