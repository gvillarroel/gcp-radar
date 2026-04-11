---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.329Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery migration assessment for Snowflake"
feature_slug: "bigquery-migration-assessment-for-snowflake"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "migration assessment report"
  - "migration complexity score"
  - "Snowflake-to-BigQuery assessment"
  - "complexity analysis"
  - "Snowflake to BigQuery readiness"
  - "Snowflake migration assessment"
  - "assessment preview"
  - "BigQuery Migration Service"
---

# BigQuery migration assessment for Snowflake

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Migration Service now provides a migration assessment for Snowflake to evaluate migration complexity to BigQuery; BigQuery migration assessment is now available in preview to analyze migration complexity from Snowflake to BigQuery.

## Extended Definition

BigQuery Migration Service includes a documented **Migration assessment** function as part of its migration workflow, and it supports migration activity for Snowflake by translating Snowflake SQL into GoogleSQL. The available official release-note excerpts also show it can use an MCP server for SQL translation tasks and can apply custom organization policies during migration, but they do not explicitly document a separate Snowflake "migration complexity score" or a preview launch of that assessment output.

## Evidence Summary

The release notes confirm Snowflake SQL translation and migration-service translation/policy features, while the access-control documentation confirms BigQuery Migration Service with a Migration assessment topic is part of BigQuery documentation and IAM coverage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Permission Included in roles managedflink. deployments. create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink. deployments. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.deployments.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.deployments.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink. deployments. update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.jobs.create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.jobs.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.jobs.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.jobs.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.jobs.update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.locations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.locations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.operations.cancel Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.operations.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.operations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.operations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.sessions.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.sessions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) BigQuery Migration Service permissions This table lists the IAM permissions for BigQuery Migration Service and the roles that include them.
- Warning: Do not grant service agent roles to any principals except service agents . compute. networkAttachments. create compute. networkAttachments. delete compute.networkAttachments.get compute. networkAttachments. list compute. networkAttachments. update compute.networks.get compute.networks.list compute.regionOperations.get compute.subnetworks.get compute.subnetworks.list compute.subnetworks.use dns. networks. targetWithPeeringZone managedkafka.clusters.get managedkafka.clusters.list managedkafka.clusters.update monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create serviceusage.services.use storage.objects.get Managed Flink Viewer Beta ( roles/ managedflink.viewer ) Readonly access to Managed Flink resources. managedflink.deployments.get managedflink.deployments.list managedflink.jobs.get managedflink.jobs.list managedflink.locations. managedflink.locations.get managedflink.locations.list managedflink.operations.get managedflink.operations.list managedflink.sessions.get managedflink.sessions.list resourcemanager.projects.get resourcemanager.projects.list BigQuery Migration Service roles This table lists the predefined IAM roles and permissions for BigQuery Migration Service.
- BigQuery Migration Service API: Roles and permissions that apply to BigQuery Migration Service resources.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use the BigQuery Migration Service MCP server to perform SQL translation tasks, including translating SQL queries into GoogleSQL syntax, generating DDL statements from SQL input queries, and getting explanations of SQL translations.
- November 04, 2025 Feature You can now use custom organization policies with the BigQuery migration service to allow or deny specific operations during a BigQuery migration to meet your organization's compliance and security requirements.
- Feature The BigQuery Migration Service supports SQL translations from Snowflake SQL to GoogleSQL .

