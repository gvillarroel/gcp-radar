---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.841Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Bucket Policy Only support"
feature_slug: "bucket-policy-only-support"
latest_feature_date: "2019-10-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
keywords:
  - "bucket"
  - "during"
  - "policy"
  - "creation"
  - "only"
  - "environment"
  - "supports"
---

# Bucket Policy Only support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports Bucket Policy Only during environment creation without requiring it to be disabled.

## Extended Definition

Cloud Composer supports Bucket Policy Only during environment creation without requiring it to be disabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- This policy does not affect the creation of environments. gcloud The --kms-key argument specifies a customer-managed enryption key for your environment.
- This policy does not affect the creation of environments.
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .
- Example: gcloud projects add-iam-policy-binding \ example-project \ --member = "serviceAccount:example-sa@gcp-sa-logging.iam.gserviceaccount.com" \ --role = "roles/storage.objectCreator" \ --condition = None Exclude the logs for your new environment from Monitoring. gcloud beta logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name= ENVIRONMENT NAME AND resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- The service account for web server is auto-generated during the environment creation and is derived from the web server domain.
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- Because of the streaming nature of Cloud Logging, you can view logs emitted by Airflow components immediately instead of waiting for Airflow logs to appear in the Cloud Storage bucket of your environment.
- When you upload your DAG files to the /dags folder in your environment's bucket, Cloud Composer synchronizes the DAGs to Airflow components of your environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- The zone can only be set during environment creation.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.

