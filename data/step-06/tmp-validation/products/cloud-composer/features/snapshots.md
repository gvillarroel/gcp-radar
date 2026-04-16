---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.603Z"
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
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
keywords:
  - "capture"
  - "state"
  - "recovery"
  - "snapshots"
  - "environment"
---

# Snapshots

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer snapshots let you capture environment state for recovery or reuse.

## Extended Definition

Cloud Composer snapshots let you capture environment state for recovery or reuse.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "name" : string , "config" : { object ( EnvironmentConfig ) } , "uuid" : string , "state" : enum ( State ) , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "storageConfig" : { object ( StorageConfig ) } } Fields name string Identifier.

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How snapshots are stored An environment snapshot is a set of files that describe the state of your environment and store the backup of the environment data.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to save and load the state of your environment using environment snapshots.
- About environment snapshots Environment snapshots store the state of your environment.
- You can use snapshots to: Restore your environment to an earlier state.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
- AsyncOperation Creates a snapshots of a Cloud Composer environment.
- The result type for the operation will be CheckUpgradeResponse Message containing information about the result of an upgrade check operation. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create environment create environment ( request : typing .
- Returns Type Description google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator. user workloads config map path user workloads config map path ( project : str , location : str , environment : str , user workloads config map : str ) - > str Returns a fully-qualified user workloads config map string. user workloads secret path user workloads secret path ( project : str , location : str , environment : str , user workloads secret : str ) - > str Returns a fully-qualified user workloads secret string.

