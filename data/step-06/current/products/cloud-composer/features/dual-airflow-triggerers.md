---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.329Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Dual Airflow triggerers"
feature_slug: "dual-airflow-triggerers"
latest_feature_date: "2023-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
keywords:
  - "dual"
  - "airflow"
  - "triggerers"
  - "composer"
  - "environment"
  - "can"
  - "run"
  - "two"
---

# Dual Airflow triggerers

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

A Cloud Composer environment can run two Airflow triggerers.

## Extended Definition

A Cloud Composer environment can run two Airflow triggerers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you omit an argument, Cloud Composer uses the default value. --environment-size specifies the environment size. --scheduler-count specifies the number of schedulers. --scheduler-cpu specifies the number of CPUs for an Airflow scheduler. --scheduler-memory specifies the amount of memory for an Airflow scheduler. --scheduler-storage specifies the amount of disk space for an Airflow scheduler. --triggerer-count specifies the number of Airflow triggerers in your environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.
- This method is supported for Cloud Composer environments in versions composer-3-airflow- . .\ -build. and newer.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.
- This method is supported for Cloud Composer environments in versions composer-3-airflow- . .\ -build. and newer.

