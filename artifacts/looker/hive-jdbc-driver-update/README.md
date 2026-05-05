# Hive JDBC driver update

Product: Looker
Feature slug: `hive-jdbc-driver-update`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Hive JDBC driver was updated to version 4.0.1 for connections to supported Apache Hive, Apache Spark, and Cloudera Impala versions.

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

- access (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- credential (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- iam (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- key (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- kms (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- logging (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- policy (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- role (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- security (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))
- token (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
