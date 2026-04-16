---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.144Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer maintenance windows"
feature_slug: "cloud-composer-maintenance-windows"
latest_feature_date: "2021-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "composer"
  - "maintenance"
  - "windows"
  - "now"
  - "supports"
  - "specifying"
  - "so"
  - "gke"
---

# Cloud Composer maintenance windows

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer now supports specifying maintenance windows so GKE cluster and SQL database updates occur only in scheduled periods.

## Extended Definition

Cloud Composer now supports specifying maintenance windows so GKE cluster and SQL database updates occur only in scheduled periods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.
- For example, a period of 4 hours every Monday, Wednesday, and Friday provides the required amount of time. gcloud The following arguments define maintenance windows parameters: --maintenance-window-start sets the start time of a maintenance window. --maintenance-window-end sets the end time of a maintenance window. --maintenance-window-recurrence sets the maintenance window recurrence . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --maintenance-window-start ' DATETIME START ' \ --maintenance-window-end ' DATETIME END ' \ --maintenance-window-recurrence ' MAINTENANCE RECURRENCE ' Replace: ENVIRONMENT NAME with the name of the environment.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Warnings about Pod Disruption Budget for environment clusters You can see the following warnings in the GKE UI for Cloud Composer environment clusters: GKE can't perform maintenance because the Pod Disruption Budget allows for 0 Pod evictions.
- If you delete your environment's GKE cluster before the environment itself, then attempts to delete your environment result in the following error: Got error "" during CP DEPLOYMENT DELETING [Rerunning Task. ] To delete an environment when its cluster is already deleted: In the Google Cloud console, go to the Deployment Manager page.
- If you use Private Google Access and send traffic over private.googleapis.com Virtual IPs, or VPC Service Controls and send traffic over restricted.googleapis.com Virtual IPs, make sure that your Cloud DNS is configured also for .composer.cloud.google.com domain names.
- If you experience this issue then in the Airflow tasks logs you will see the following error message: "Can't connect to MySQL server on 'airflow-sqlproxy-service.default.svc.cluster.local' (104)" Cloud Composer team works on resolving this problem.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- WorkloadsConfig The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment.
- The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 10. (Optional) Specify maintenance windows Default maintenance windows in Cloud Composer 3 are defined in the following way: All times are in the local time zone of the region where your environment is located, but with daylight saving time ignored.
- For example, a period of 4 hours every Monday, Wednesday, and Friday provides the required amount of time. gcloud The following arguments define maintenance windows parameters: --maintenance-window-start sets the start time of a maintenance window. --maintenance-window-end sets the end time of a maintenance window. --maintenance-window-recurrence sets the maintenance window recurrence . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --maintenance-window-start ' DATETIME START ' \ --maintenance-window-end ' DATETIME END ' \ --maintenance-window-recurrence ' MAINTENANCE RECURRENCE ' Replace: ENVIRONMENT NAME with the name of the environment.

