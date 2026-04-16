---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.315Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 regional availability in us-east5"
feature_slug: "cloud-composer-2-regional-availability-in-us-east5"
latest_feature_date: "2023-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "us"
  - "east5"
  - "environments"
  - "can"
  - "deployed"
---

# Cloud Composer 2 regional availability in us-east5

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 environments can be deployed in the us-east5 region.

## Extended Definition

Cloud Composer 2 environments can be deployed in the us-east5 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties)

## Supporting Pages

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list environments(): Create a client client = service v1.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list environments(): Create a client client = service v1.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.

### "Method: projects.locations.environments.fetchDatabaseProperties \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "primaryGceZone" : string , "secondaryGceZone" : string , "isFailoverReplicaAvailable" : boolean } Fields primaryGceZone string The Compute Engine zone that the instance is currently serving from. secondaryGceZone string The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance. isFailoverReplicaAvailable boolean The availability status of the failover replica.
- The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.get Request body The request body must be empty.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.fetchDatabaseProperties Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:fetchDatabaseProperties The URL uses gRPC Transcoding syntax.

