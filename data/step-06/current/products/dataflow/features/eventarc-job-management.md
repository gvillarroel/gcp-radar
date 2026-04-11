---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.814Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Eventarc job management"
feature_slug: "eventarc-job-management"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3Client"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
keywords:
  - "eventarc"
  - "job"
  - "management"
  - "lets"
  - "you"
  - "manage"
  - "dataflow"
  - "jobs"
---

# Eventarc job management

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Eventarc job management lets you manage Dataflow jobs by using Eventarc.

## Extended Definition

Eventarc job management lets you manage Dataflow jobs by using Eventarc.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3Client](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3Client)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)

## Supporting Pages

### Use Eventarc to manage Dataflow jobs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Eventarc to manage Dataflow jobs Stay organized with collections Save and categorize content based on your preferences.
- Dataflow integration with Eventarc lets you trigger an action when a job changes state.
- Create a trigger To create an Eventarc trigger for Dataflow job state changes, refer to one of the following documents: Route Dataflow events to Cloud Run Route Dataflow events to Google Kubernetes Engine Route Dataflow events to Workflows Create a trigger for Cloud Run functions Optionally, you can filter events by Dataflow job ID.
- This document describes how to create event-driven workflows triggered by state changes in your Dataflow jobs.

### "Class JobsV1Beta3Client (0.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3Client](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3Client)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.dataflow v1beta3.types.CheckActiveJobsResponse Response for CheckActiveJobsRequest. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create job create job ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample aggregated list jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample check active jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample list jobs(): Create a client client = dataflow v1beta3 .

### "Class JobsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.dataflow v1beta3.types.CheckActiveJobsResponse Response for CheckActiveJobsRequest. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create job create job ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample aggregated list jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample check active jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample list jobs(): Create a client client = dataflow v1beta3 .

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- April 19, 2023 Feature You can now manage Dataflow jobs by using Eventarc.
- Cloud Dataflow SQL lets you use SQL queries to develop and run Cloud Dataflow jobs from the BigQuery web UI.
- For more information, see Use Eventarc to manage Dataflow jobs .
- Feature Added new autoscaling metrics : Autoscaling rationale chart : explains the factors driving autoscaling decisions Worker CPU utilization chart : shows current user worker CPU utilization and customer autoscaling hint value Timer backlog per stage : shows an estimate of time needed to materialize the output for windows whose timer has expired Parallel processing : the number of keys available for parallel processing March 11, 2024 Feature You can now use committed use discounts (CUDs) with Dataflow streaming jobs.

