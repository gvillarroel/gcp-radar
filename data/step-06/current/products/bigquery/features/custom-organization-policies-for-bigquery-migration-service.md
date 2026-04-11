---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.367Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom organization policies for BigQuery Migration Service"
feature_slug: "custom-organization-policies-for-bigquery-migration-service"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "migration service org policy"
  - "disable AI suggestions"
  - "migration org policy"
  - "AI suggestion policy"
  - "custom organization policies"
  - "allow and deny operations"
  - "BigQuery Migration Service"
---

# Custom organization policies for BigQuery Migration Service

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Migration Service now supports custom organization policies to allow or deny operations and optionally disable AI suggestions.

## Extended Definition

BigQuery Migration Service supports custom organization policies that let an organization allow or deny specific migration operations to meet compliance and security requirements. As announced in the November 4, 2025 release notes, the service also supports disabling AI suggestions during a migration. IAM documentation for BigQuery includes BigQuery Migration Service role and permission tables, indicating these controls are governed through standard BigQuery permissioning.

## Evidence Summary

The release notes provide the feature announcement for custom organization policies and AI-suggestion disabling in BigQuery Migration Service, while the access-control page supplies context on BigQuery Migration Service IAM roles and permissions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

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
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- November 04, 2025 Feature You can now use custom organization policies with the BigQuery migration service to allow or deny specific operations during a BigQuery migration to meet your organization's compliance and security requirements.
- Feature You can now use the BigQuery Migration Service MCP server to perform SQL translation tasks, including translating SQL queries into GoogleSQL syntax, generating DDL statements from SQL input queries, and getting explanations of SQL translations.
- Feature The BigQuery Migration Service supports SQL translations from Snowflake SQL to GoogleSQL .
- This includes an option to disable AI suggestions during a migration.

