---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.896Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Upgrade checks"
feature_slug: "upgrade-checks"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
keywords:
  - "upgrade"
  - "checks"
  - "evaluate"
  - "composer"
  - "environments"
  - "before"
  - "version"
  - "upgrades"
---

# Upgrade checks

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Upgrade checks evaluate Cloud Composer environments before version upgrades.

## Extended Definition

Upgrade checks evaluate Cloud Composer environments before version upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)

## Supporting Pages

### "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "imageVersion" : string } Fields imageVersion string Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.checkUpgrade Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:checkUpgrade The URL uses gRPC Transcoding syntax.
- When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.
- This method is supported for Cloud Composer environments in versions composer-3-airflow- . .\ -build. and newer.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.
- This method is supported for Cloud Composer environments in versions composer-3-airflow- . .\ -build. and newer.

