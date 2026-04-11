---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.740Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment snapshots for Airflow 3"
feature_slug: "environment-snapshots-for-airflow-3"
latest_feature_date: "2026-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "environment"
  - "snapshots"
  - "for"
  - "airflow"
  - "are"
  - "now"
  - "available"
  - "preview"
---

# Environment snapshots for Airflow 3

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Environment snapshots are now available for Airflow 3 (Preview) environments across all supported Cloud Composer 3 regions.

## Extended Definition

Environment snapshots are now available for Airflow 3 (Preview) environments across all supported Cloud Composer 3 regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 1.20.2 and 2.1.2 images are available: composer-1.20.2-airflow-1.10.15 (default) composer-1.20.2-airflow-2.2.5 composer-1.20.2-airflow-2.3.4 composer-2.1.2-airflow-2.2.5 composer-2.1.2-airflow-2.3.4 (default) December 06, 2022 Feature (Cloud Composer 2) Environment snapshots and Scheduled snapshots are now generally available (GA) for Cloud Composer 2 versions 2.1.1 and later.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change Cloud Composer 1.17.7 and 2.0.0-preview.7 images are available: composer-1.17.7-airflow-1.10.15 (default) composer-1.17.7-airflow-2.0.2 composer-1.17.7-airflow-2.1.4 composer-2.0.0-preview.7-airflow-2.0.2 composer-2.0.0-preview.7-airflow-2.1.4 December 01, 2021 Change (Available without upgrading) Web server network access control settings can now be configured in Cloud Composer 2 environments.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.1-build.3 composer-3-airflow-2.7.3-build.12 Change Cloud Composer 2.9.0 images are available: composer-2.9.0-airflow-2.9.1 (default) composer-2.9.0-airflow-2.7.3 August 01, 2024 Announcement (Cloud Composer 3 only) The July 24th issue with Airflow upgrade operations for Cloud Composer 3 environments is now fixed.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- Such entities are eventually removed from local storages of Airflow schedulers and workers when these components are restarted (for example, as a result of scaling down or maintenance operations in your environment's cluster).
- Airflow tasks logs are unavailable in the Airflow web server after upgrading from Airflow 1.9.0 to Airflow 1.10.x Airflow 1.10.x introduced backwards-incompatible changes to the naming convention for log files.
- If Airflow UI is permanently unavailable, and timeout or 504 errors are generated, make sure that your environment can access .composer.googleusercontent.com . (Cloud Composer 2 only) Connectivity issue.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow- . . and newer. dataRetentionConfig object ( DataRetentionConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-1. . -airflow- . . . softwareConfig object ( SoftwareConfig ) Optional.

