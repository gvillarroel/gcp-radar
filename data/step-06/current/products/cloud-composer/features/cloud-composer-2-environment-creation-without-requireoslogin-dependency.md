---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.427Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 environment creation without requireOsLogin dependency"
feature_slug: "cloud-composer-2-environment-creation-without-requireoslogin-dependency"
latest_feature_date: "2022-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
keywords:
  - "composer"
  - "environment"
  - "creation"
  - "without"
  - "requireoslogin"
  - "dependency"
  - "creating"
  - "environments"
---

# Cloud Composer 2 environment creation without requireOsLogin dependency

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Creating new Cloud Composer 2 environments no longer depends on the constraints/compute.requireOsLogin organization policy setting.

## Extended Definition

Creating new Cloud Composer 2 environments no longer depends on the constraints/compute.requireOsLogin organization policy setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.
- What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" labels = { owner = "engineering-team" env = "production" } } What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list environments(): Create a client client = service v1.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.

