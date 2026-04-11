---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.414Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery migration assessment for Cloudera and Apache Hadoop"
feature_slug: "bigquery-migration-assessment-for-cloudera-and-apache-hadoop"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "Cloudera to BigQuery assessment"
  - "Cloudera"
  - "migration assessment workflow"
  - "Hadoop migration assessment"
  - "source system migration"
  - "Apache Hadoop"
  - "migration assessment"
  - "BigQuery migration"
---

# BigQuery migration assessment for Cloudera and Apache Hadoop

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery makes migration assessment available for workflows using Cloudera and Apache Hadoop.

## Extended Definition

BigQuery migration assessment is a BigQuery capability that evaluates migration workflows for moving workloads into BigQuery, and it is officially documented as available for workflows that use Cloudera and Apache Hadoop (announced June 16, 2025). The same release notes context also indicates BigQuery’s migration tooling includes Impala SQL translation options (interactive translator, translation API, and batch translator) that can be used to migrate Cloudera/Apache Hadoop SQL workloads using Impala to GoogleSQL.

## Evidence Summary

The release notes provide direct feature availability evidence for Cloudera/Apache Hadoop migration assessment, while the IAM page confirms BigQuery Migration Service has its own documented permissions model.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- June 16, 2025 Feature The BigQuery migration assessment is now available for workflows that use Cloudera and Apache Hadoop .
- Feature You can now use the interactive SQL translator , the translation API , and the batch SQL translator to translate the following SQL dialects into GoogleSQL: Apache Impala SQL GoogleSQL (BigQuery) Impala SQL translation can be used to migrate Cloudera and Apache Hadoop SQL workloads that use Impala as a query engine.
- January 16, 2025 Feature The BigQuery migration assessment for Oracle now includes a total cost of ownership (TCO) calculator that provides an estimation of compute and storage costs for migrating your Oracle data warehouse to BigQuery.
- Feature Use the BigQuery migration assessment for Informatica to assess the complexity of migrating data from your Informatica platform to BigQuery.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Permission Included in roles managedflink. deployments. create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink. deployments. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.deployments.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.deployments.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink. deployments. update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.jobs.create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.jobs.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.jobs.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.jobs.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.jobs.update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.locations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.locations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.operations.cancel Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.operations.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) managedflink.operations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.operations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.create Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.sessions.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) managedflink.sessions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) Managed Flink Viewer ( roles/ managedflink.viewer ) managedflink.sessions.update Owner ( roles/ owner ) Editor ( roles/ editor ) Managed Flink Admin ( roles/ managedflink.admin ) Managed Flink Developer ( roles/ managedflink.developer ) BigQuery Migration Service permissions This table lists the IAM permissions for BigQuery Migration Service and the roles that include them.
- Warning: Do not grant service agent roles to any principals except service agents . compute. networkAttachments. create compute. networkAttachments. delete compute.networkAttachments.get compute. networkAttachments. list compute. networkAttachments. update compute.networks.get compute.networks.list compute.regionOperations.get compute.subnetworks.get compute.subnetworks.list compute.subnetworks.use dns. networks. targetWithPeeringZone managedkafka.clusters.get managedkafka.clusters.list managedkafka.clusters.update monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create serviceusage.services.use storage.objects.get Managed Flink Viewer Beta ( roles/ managedflink.viewer ) Readonly access to Managed Flink resources. managedflink.deployments.get managedflink.deployments.list managedflink.jobs.get managedflink.jobs.list managedflink.locations. managedflink.locations.get managedflink.locations.list managedflink.operations.get managedflink.operations.list managedflink.sessions.get managedflink.sessions.list resourcemanager.projects.get resourcemanager.projects.list BigQuery Migration Service roles This table lists the predefined IAM roles and permissions for BigQuery Migration Service.
- BigQuery Migration Service API: Roles and permissions that apply to BigQuery Migration Service resources.

### BigQuery Migration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/migration/rest](https://docs.cloud.google.com/bigquery/docs/reference/migration/rest)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Migration API Stay organized with collections Save and categorize content based on your preferences.

