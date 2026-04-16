---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.593Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Snapshots"
feature_slug: "snapshots"
latest_feature_date: "2022-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot"
keywords:
  - "snapshots"
  - "composer"
  - "let"
  - "you"
  - "capture"
  - "environment"
  - "state"
  - "recovery"
---

# Snapshots

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer snapshots let you capture environment state for recovery or reuse.

## Extended Definition

Cloud Composer snapshots let you capture environment state for recovery or reuse.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot)

## Supporting Pages

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to save and load the state of your environment using environment snapshots.
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:loadSnapshot { "snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project us-central1 example-environment 2022-01-05T18-59-00" , "skipPypiPackagesInstallation" : "False" } Terraform It is not possible to save and load environment snapshots using Terraform.
- The following example uses the default location: gcloud composer environments snapshots save \ example-environment \ --location us-central1 The following example saves to a custom folder: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" API Construct an environments.saveSnapshot API request.
- If you load a snapshot of an environment with installed custom PyPI packages , then Cloud Composer does not install these custom packages. gcloud composer environments snapshots load \ DESTINATION ENVIRONMENT NAME \ --location LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: DESTINATION ENVIRONMENT NAME with the name of the environment where you want to load the snapshot.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.

### "Method: projects.locations.environments.loadSnapshot \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Path parameters Parameters environment string The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "snapshotPath" : string , "skipPypiPackagesInstallation" : boolean , "skipEnvironmentVariablesSetting" : boolean , "skipAirflowOverridesSetting" : boolean , "skipGcsDataCopying" : boolean } Fields snapshotPath string A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project location environment timestamp". skipPypiPackagesInstallation boolean Whether or not to skip installing Pypi packages when loading the environment's state. skipEnvironmentVariablesSetting boolean Whether or not to skip setting environment variables when loading the environment's state. skipAirflowOverridesSetting boolean Whether or not to skip setting Airflow overrides when loading the environment's state. skipGcsDataCopying boolean Whether or not to skip copying Cloud Storage data when loading the environment's state.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.loadSnapshot Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:loadSnapshot The URL uses gRPC Transcoding syntax.
- Loads a snapshot of a Cloud Composer environment.

