---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.034Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Separate DAG processor and scheduler components"
feature_slug: "separate-dag-processor-and-scheduler-components"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "runs"
  - "processors"
  - "processor"
  - "components"
  - "separate"
  - "scheduler"
---

# Separate DAG processor and scheduler components

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 3 runs DAG processors and schedulers as separate components for more reliable DAG parsing and scheduling.

## Extended Definition

Cloud Composer 3 runs DAG processors and schedulers as separate components for more reliable DAG parsing and scheduling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The following components run in separate zones: Exactly two Airflow schedulers At least two triggerers ( if the number of triggerers isn't set to 0 ) At least two DAG processors Two web servers The minimum number of workers is set to two, and your environment's cluster distributes worker instances between zones.
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .
- In Cloud Composer 3, this part of the scheduler runs as a separate environment component.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- Metrics displayed on a monitoring dashboard for a particular environment only track the DAG runs, Airflow components, and environment details for this environment only.
- For each component, the following information is available: Field Description Component Category of Airflow components, such as Airflow workers or schedulers.
- Parsing a DAG and scheduling tasks from a DAG for execution are two separate operations performed by the Airflow scheduler.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeCount" : 6 , "nodeConfig" : { "machineType" : "projects/example-project/zones/us-central1-a/machineTypes/n1-standard-2" , "diskSizeGb" : 50 , "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "schedulerCount" : 1 }, "databaseConfig" : { "machineType" : "db-n1-standard-2" }, "webServerConfig" : { "machineType" : "composer-n1-webserver-2" } } } Terraform When you create an environment, following fields control environment scale and performance parameters: node count in the node config block specifies the number of nodes in your environment.

