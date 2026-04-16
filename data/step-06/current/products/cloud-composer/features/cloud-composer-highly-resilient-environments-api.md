---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.513Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer highly resilient environments API"
feature_slug: "cloud-composer-highly-resilient-environments-api"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
keywords:
  - "composer"
  - "highly"
  - "resilient"
  - "environments"
  - "api"
  - "introduced"
  - "the"
  - "for"
---

# Cloud Composer highly resilient environments API

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer introduced the API for highly resilient environments, with console and gcloud rollout announced after initial availability.

## Extended Definition

Cloud Composer introduced the API for highly resilient environments, with console and gcloud rollout announced after initial availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .
- For example, you can create and configure Cloud Composer environments in Google Cloud console, Google Cloud CLI, Cloud Composer API , or Terraform.
- Highly resilient (Highly Available) Cloud Composer environments have a multi-zonal Airflow database and a multi-zonal Airflow execution layer.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .
- For example, you can create and configure Cloud Composer environments in Google Cloud console, Google Cloud CLI, Cloud Composer API , or Terraform.
- Highly resilient (Highly Available) Cloud Composer environments have a multi-zonal Airflow database and a multi-zonal Airflow execution layer.

