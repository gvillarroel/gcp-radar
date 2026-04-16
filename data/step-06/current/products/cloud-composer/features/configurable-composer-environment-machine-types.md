---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.225Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Configurable Composer environment machine types"
feature_slug: "configurable-composer-environment-machine-types"
latest_feature_date: "2020-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "configurable"
  - "composer"
  - "environment"
  - "machine"
  - "types"
  - "you"
  - "can"
  - "set"
---

# Configurable Composer environment machine types

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

You can set or update machine types for the Airflow web server and Cloud SQL instance on Composer environments running version 1.7.2 or later.

## Extended Definition

You can set or update machine types for the Airflow web server and Cloud SQL instance on Composer environments running version 1.7.2 or later.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeCount" : 6 , "nodeConfig" : { "machineType" : "projects/example-project/zones/us-central1-a/machineTypes/n1-standard-2" , "diskSizeGb" : 50 , "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "schedulerCount" : 1 }, "databaseConfig" : { "machineType" : "db-n1-standard-2" }, "webServerConfig" : { "machineType" : "composer-n1-webserver-2" } } } Terraform When you create an environment, following fields control environment scale and performance parameters: node count in the node config block specifies the number of nodes in your environment.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "office net 1" }, allowed ip range { value = "192.0.4.0/24" description = "office net 3" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } Step 7. (Optional) Specify Airflow configuration overrides and environment variables You can set up Airflow configuration overrides and environment variables when you create an environment.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 3. (Optional) Configure environment scale and performance parameters To specify the scale and performance configuration for your environment, provide the number of nodes in your environment's GKE cluster and select machine types for environment components.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: :: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the updateMask will be unaffected.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.
- Returns Type Description google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator. user workloads config map path user workloads config map path ( project : str , location : str , environment : str , user workloads config map : str ) - > str Returns a fully-qualified user workloads config map string. user workloads secret path user workloads secret path ( project : str , location : str , environment : str , user workloads secret : str ) - > str Returns a fully-qualified user workloads secret string.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: :: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the updateMask will be unaffected.
- Update an environment. name str The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. environment google.cloud.orchestration.airflow.service v1.types.Environment A patch environment.
- The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. user workloads config map google.cloud.orchestration.airflow.service v1.types.UserWorkloadsConfigMap Required.
- The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. user workloads secret google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret Required.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- You cannot set networking connection type in public IP environment.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments Stay organized with collections Save and categorize content based on your preferences.
- If this field is set to true, IPAllocationPolicy.use ip aliases must be set to true for Cloud Composer environments in versions composer-1. . -airflow- . . .
- This field is supported for Cloud Composer environments in versions composer-1. . -airflow- . . . machineType string Optional.

