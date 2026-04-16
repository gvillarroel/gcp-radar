---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.791Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "BigQueryCheckOperator location argument"
feature_slug: "bigquerycheckoperator-location-argument"
latest_feature_date: "2020-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "bigquerycheckoperator"
  - "location"
  - "argument"
  - "can"
  - "created"
  - "so"
  - "run"
  - "against"
---

# BigQueryCheckOperator location argument

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

BigQueryCheckOperator can be created with a location argument so it can run against a region different from the Composer environment.

## Extended Definition

BigQueryCheckOperator can be created with a location argument so it can run against a region different from the Composer environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How location restrictions work Location restrictions for Cloud Composer are determined based on the organizational policy that is applied to the project where the Cloud Composer environment is created.
- They are always sent to the default storage. gcloud logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = \ "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Create a new log sink. gcloud logging sinks create \ composer-log-sink- ENVIRONMENT NAME \ storage.googleapis.com/ BUCKET NAME \ --log-filter "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Caution: To get support from Cloud Customer Care, you might need to grant Google support engineers access to the Cloud Composer logs stored in Cloud Storage. gcloud Create a new Cloud Storage bucket. gcloud storage buckets create gs:// BUCKET NAME --location = LOCATION Replace: LOCATION with the region where the environment is located.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Storage location for storing automatically created snapshots. snapshotCreationSchedule string Optional.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "useIpAliases" : boolean , // Union field cluster ip allocation can be only one of the following: "clusterSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string // End of list of possible types for union field cluster ip allocation . // Union field services ip allocation can be only one of the following: "servicesSecondaryRangeName" : string , "servicesIpv4CidrBlock" : string // End of list of possible types for union field services ip allocation . } Fields useIpAliases boolean Optional.
- JSON representation { "location" : string , "machineType" : string , "network" : string , "subnetwork" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "tags" : [ string ] , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "enableIpMasqAgent" : boolean , "composerNetworkAttachment" : string , "composerInternalIpv4CidrBlock" : string } Fields location string Optional.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : 2.5 , "memoryGb" : 2.5 , "storageGb" : 2 , "count" : 1 }, "triggerer" : { "cpu" : 0.5 , "memoryGb" : 0.5 , "count" : 1 }, "dagProcessor" : { "count" : 1 , "cpu" : 0.5 , "memoryGb" : 2 , "storageGb" : 1 }, "webServer" : { "cpu" : 1 , "memoryGb" : 2.5 , "storageGb" : 2 }, "worker" : { "cpu" : 1 , "memoryGb" : 2 , "storageGb" : 2 , "minCount" : 2 , "maxCount" : 4 } }, "environmentSize" : "ENVIRONMENT SIZE SMALL" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following arguments control the scale and performance parameters of your environment.
- For example, a period of 4 hours every Monday, Wednesday, and Friday provides the required amount of time. gcloud The following arguments define maintenance windows parameters: --maintenance-window-start sets the start time of a maintenance window. --maintenance-window-end sets the end time of a maintenance window. --maintenance-window-recurrence sets the maintenance window recurrence . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --maintenance-window-start ' DATETIME START ' \ --maintenance-window-end ' DATETIME END ' \ --maintenance-window-recurrence ' MAINTENANCE RECURRENCE ' Replace: ENVIRONMENT NAME with the name of the environment.
- In the Dataplex data lineage integration section, select Disable integration with Dataplex data lineage . gcloud When you create an environment, the --disable-cloud-data-lineage-integration argument disables the data lineage integration. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --disable-cloud-data-lineage-integration Replace: ENVIRONMENT NAME with the name of the environment.
- In Key and Value fields, specify key and value pairs for the environment labels. gcloud When you create an environment, the --labels argument specifies a comma-separated list of keys and values with environment labels. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --labels LABELS Replace: LABELS with a list of comma-separated KEY=VALUE pairs for environment labels.

