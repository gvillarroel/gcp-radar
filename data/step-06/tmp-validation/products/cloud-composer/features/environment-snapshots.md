---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:01.602Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment snapshots"
feature_slug: "environment-snapshots"
latest_feature_date: "2026-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
keywords:
  - "save"
  - "snapshots"
  - "snapshot"
  - "environments"
  - "environment"
---

# Environment snapshots

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Environment snapshots let Cloud Composer environments save and use snapshot state for recovery and migration scenarios; Environment snapshots let Cloud Composer environments save and use snapshot state for recovery and migration scenarios.

## Extended Definition

Environment snapshots let Cloud Composer environments save and use snapshot state for recovery and migration scenarios; Environment snapshots let Cloud Composer environments save and use snapshot state for recovery and migration scenarios.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)

## Supporting Pages

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:loadSnapshot { "snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project us-central1 example-environment 2022-01-05T18-59-00" , "skipPypiPackagesInstallation" : "False" } Terraform It is not possible to save and load environment snapshots using Terraform.
- The following example uses the default location: gcloud composer environments snapshots save \ example-environment \ --location us-central1 The following example saves to a custom folder: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" API Construct an environments.saveSnapshot API request.
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:saveSnapshot { "snapshotLocation" : "gs://us-central1-example-916807e1-bucket/snapshots" } Terraform It is not possible to save and load environment snapshots from Terraform.
- To save a snapshot of your environment, run: gcloud composer environments snapshots save \ ENVIRONMENT NAME \ --location LOCATION \ --snapshot-location " SNAPSHOTS FOLDER " Replace: ENVIRONMENT NAME with the name of the environment.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class EnvironmentsAsyncClient (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
- AsyncOperation Creates a snapshots of a Cloud Composer environment.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class EnvironmentsClient (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
- Operation Creates a snapshots of a Cloud Composer environment.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

