---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.401Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer environment deletion robustness"
feature_slug: "cloud-composer-environment-deletion-robustness"
latest_feature_date: "2018-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "composer"
  - "environment"
  - "deletion"
  - "robustness"
  - "fixed"
  - "permanent"
  - "failures"
  - "when"
---

# Cloud Composer environment deletion robustness

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Fixed permanent failures when deleting environments if the GKE cluster had been deleted or the environment was in an error state.

## Extended Definition

Fixed permanent failures when deleting environments if the GKE cluster had been deleted or the environment was in an error state.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true. servicesIpv4CidrBlock string Optional.
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true. clusterIpv4CidrBlock string Optional.
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true.
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

