---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:01.963Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Scheduled snapshots"
feature_slug: "scheduled-snapshots"
latest_feature_date: "2024-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots"
keywords:
  - "scheduled"
  - "automate"
  - "snapshots"
  - "snapshot"
  - "environments"
  - "creation"
  - "supports"
---

# Scheduled snapshots

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 3 supports scheduled snapshots for environments; Cloud Composer 2 supports scheduled snapshots to automate snapshot creation for disaster recovery scenarios.

## Extended Definition

Cloud Composer 3 supports scheduled snapshots for environments; Cloud Composer 2 supports scheduled snapshots to automate snapshot creation for disaster recovery scenarios.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots](https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots)

## Supporting Pages

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Configure scheduled snapshots Create environments Access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:loadSnapshot { "snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project us-central1 example-environment 2022-01-05T18-59-00" , "skipPypiPackagesInstallation" : "False" } Terraform It is not possible to save and load environment snapshots using Terraform.
- The following example uses the default location: gcloud composer environments snapshots save \ example-environment \ --location us-central1 The following example saves to a custom folder: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" API Construct an environments.saveSnapshot API request.
- If you load a snapshot of an environment with installed custom PyPI packages , then Cloud Composer does not install these custom packages. gcloud composer environments snapshots load \ DESTINATION ENVIRONMENT NAME \ --location LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: DESTINATION ENVIRONMENT NAME with the name of the environment where you want to load the snapshot.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- ScheduledSnapshotsConfig The configuration for scheduled snapshot creation mechanism.
- Whether scheduled snapshots creation is enabled. snapshotLocation string Optional.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.

### Configure scheduled snapshots \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots](https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure scheduled snapshots Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 In Cloud Composer 1, you can only save snapshots of your environment.
- You can do so to migrate your environments to Cloud Composer 2.
- You will not be able to use environments with these versions.

