---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.882Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Insights latest snapshot views"
feature_slug: "storage-insights-latest-snapshot-views"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist"
  - "https://docs.cloud.google.com/storage/docs/insights/v1"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
keywords:
  - "storage"
  - "insights"
  - "latest"
  - "snapshot"
  - "views"
  - "datasets"
  - "provide"
  - "for"
---

# Storage Insights latest snapshot views

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage Insights datasets provide latest snapshot views for bucket and object metadata.

## Extended Definition

Storage Insights datasets provide latest snapshot views for bucket and object metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- [https://docs.cloud.google.com/storage/docs/insights/v1](https://docs.cloud.google.com/storage/docs/insights/v1)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)

## Supporting Pages

### "Analyze your stored data with Gemini Cloud Assist \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The generated SQL query is similar to the following: SELECT oa.contentType, ROUND(sum(oa.size) / (1024 1024 1024), 2) AS total size gb FROM object attributes latest AS oa GROUP BY oa.contentType ORDER BY sum(oa.size) DESC; Data processing quotas When you run a prompt using Gemini Cloud Assist to get information about your data in Cloud Storage, Gemini Cloud Assist processes your datasets to provide answers to your prompts.
- To get the permissions that you need to get insights on bucket and object metadata, ask your administrator to grant you the following IAM roles on the project, folder, or organization that contains the datasets you want to analyze: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Storage Insights Viewer ( roles/storageinsights.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following data is not available in Storage Insights datasets, meaning that Gemini Cloud Assist lacks the proper context to respond to prompts relating to that data: Specific cost data, for example: "how much does my bucket cost per month".
- The service agent follows the naming format service- PROJECT NUMBER @gcp-sa-storageinsights.iam.gserviceaccount.com and appears on the IAM page of the Google Cloud console when you select the Include Google-provided role grants checkbox.

### Storage Insights API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/insights/v1](https://docs.cloud.google.com/storage/docs/insights/v1)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://storageinsights.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.
- Provides insights capability on Google Cloud Storage Service: storageinsights.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Storage Cloud Storage Reference Send feedback Storage Insights API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1.projects.locations.datasetConfigs Methods create POST /v1/{parent=projects/ /locations/ }/datasetConfigs Creates a dataset configuration in a given project for a given location. delete DELETE /v1/{name=projects/ /locations/ /datasetConfigs/ } Deletes a dataset configuration in a given project for a given location. get GET /v1/{name=projects/ /locations/ /datasetConfigs/ } Gets the dataset configuration in a given project for a given location. linkDataset POST /v1/{name=projects/ /locations/ /datasetConfigs/ }:linkDataset Links a dataset to BigQuery in a given project for a given location. list GET /v1/{parent=projects/ /locations/ }/datasetConfigs Lists the dataset configurations in a given project for a given location. patch PATCH /v1/{datasetConfig.name=projects/ /locations/ /datasetConfigs/ } Updates a dataset configuration in a given project for a given location. unlinkDataset POST /v1/{name=projects/ /locations/ /datasetConfigs/ }:unlinkDataset Unlinks a dataset from BigQuery in a given project for a given location.

### "Python Client for Google Cloud Storage \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 Google Cloud Storage is a managed service for storing unstructured data.
- To enable OpenTelemetry tracing in the Cloud Storage client, first install OpenTelemetry: pip install google-cloud-storage[tracing] Set the ENABLE GCS PYTHON CLIENT OTEL TRACES environment variable to selectively opt-in tracing for the Cloud Storage client: export ENABLE GCS PYTHON CLIENT OTEL TRACES=True You will also need to tell OpenTelemetry which exporter to use.
- Client () The name for the new bucket bucket name = "my-new-bucket" Creates the new bucket bucket = storage client. create bucket (bucket name) print(f"Bucket {bucket.name} created.") Tracing With OpenTelemetry This is a PREVIEW FEATURE: Coverage and functionality are still in development and subject to change.
- Checksum Defaults In Python Storage 3.0, uploads and downloads now have a default of “auto” where applicable. “Auto” will use crc32c checksums, except for unusual cases where the fast (C extension) crc32c implementation is not available, in which case it will use md5 instead.

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- In both the shim and unshimmed cases, the old key is maintained. rm $folder$ delete markers are not supported. rpo Works as expected. setmeta Does not throw an error if no headers are changed. stat Includes a field "Storage class update time:" which may throw off tabbing. ubla Works as expected. versioning Works as expected. web The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found.
- To Enable Set use gcloud storage=True in the .boto config file under the [GSUtil] section: [GSUtil] use gcloud storage=True You can also set the flag for individual commands using the top-level -o flag: gsutil -o "GSUtil:use gcloud storage=True" -m cp -p file gs://bucket/obj Available Commands The gcloud storage CLI only supports a subset of gsutil commands.
- The all-version flag ( -A ) silently enables sequential execution rather than raising an error. defacl The ch subcommand is not supported. defstorageclass Works as expected. hash In gsutil, the -m and -c flags that affect which hashes are displayed are ignored for cloud objects.

