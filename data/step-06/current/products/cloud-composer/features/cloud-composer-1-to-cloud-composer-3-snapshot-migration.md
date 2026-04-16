---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.018Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 1 to Cloud Composer 3 snapshot migration"
feature_slug: "cloud-composer-1-to-cloud-composer-3-snapshot-migration"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot"
  - "https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots"
keywords:
  - "composer"
  - "snapshot"
  - "migration"
  - "supports"
  - "migrating"
  - "environments"
  - "snapshots"
---

# Cloud Composer 1 to Cloud Composer 3 snapshot migration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports migrating environments from Cloud Composer 1 to Cloud Composer 3 by using snapshots.

## Extended Definition

Cloud Composer supports migrating environments from Cloud Composer 1 to Cloud Composer 3 by using snapshots.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots](https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot)
- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)

## Supporting Pages

### "Method: projects.locations.environments.loadSnapshot \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Path parameters Parameters environment string The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "snapshotPath" : string , "skipPypiPackagesInstallation" : boolean , "skipEnvironmentVariablesSetting" : boolean , "skipAirflowOverridesSetting" : boolean , "skipGcsDataCopying" : boolean } Fields snapshotPath string A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project location environment timestamp". skipPypiPackagesInstallation boolean Whether or not to skip installing Pypi packages when loading the environment's state. skipEnvironmentVariablesSetting boolean Whether or not to skip setting environment variables when loading the environment's state. skipAirflowOverridesSetting boolean Whether or not to skip setting Airflow overrides when loading the environment's state. skipGcsDataCopying boolean Whether or not to skip copying Cloud Storage data when loading the environment's state.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.loadSnapshot Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:loadSnapshot The URL uses gRPC Transcoding syntax.
- We recommend planning migration to Cloud Composer 3 .

### Configure scheduled snapshots \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots](https://docs.cloud.google.com/composer/docs/composer-1/configure-scheduled-snapshots)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure scheduled snapshots Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 In Cloud Composer 1, you can only save snapshots of your environment.
- You can do so to migrate your environments to Cloud Composer 2.
- We recommend planning migration to Cloud Composer 3 .

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:loadSnapshot { "snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project us-central1 example-environment 2022-01-05T18-59-00" , "skipPypiPackagesInstallation" : "False" } Terraform It is not possible to save and load environment snapshots using Terraform.
- The following example uses the default location: gcloud composer environments snapshots save \ example-environment \ --location us-central1 The following example saves to a custom folder: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" API Construct an environments.saveSnapshot API request.
- If you load a snapshot of an environment with installed custom PyPI packages , then Cloud Composer does not install these custom packages. gcloud composer environments snapshots load \ DESTINATION ENVIRONMENT NAME \ --location LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: DESTINATION ENVIRONMENT NAME with the name of the environment where you want to load the snapshot.
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:saveSnapshot { "snapshotLocation" : "gs://us-central1-example-916807e1-bucket/snapshots" } Terraform It is not possible to save and load environment snapshots from Terraform.

