---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.780Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Eventarc job management"
feature_slug: "eventarc-job-management"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc"
  - "https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
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
Coverage: MEDIUM

## Step 02 Summary

Eventarc job management lets you manage Dataflow jobs by using Eventarc.

## Extended Definition

Eventarc job management lets you manage Dataflow jobs by using Eventarc.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- [https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies](https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)

## Supporting Pages

### Use Eventarc to manage Dataflow jobs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Eventarc to manage Dataflow jobs Stay organized with collections Save and categorize content based on your preferences.
- Dataflow integration with Eventarc lets you trigger an action when a job changes state.
- The following shows an example payload: { "id" : "2023-04-13 16 28 37-12345678" , "projectId" : "my-project" , "name" : "job1" , "currentState" : "JOB STATE QUEUED" , "currentStateTime" : "2023-04-13T23:28:37.437622Z" , "createTime" : "2023-04-13T23:28:37.437622Z" , "location" : "us-central1" , "startTime" : "2023-04-13T23:28:37.437622Z" } For more information about job states, see the following topics: JobState Life of a Dataflow job What's next Design Dataflow pipeline workflows .
- Create a trigger To create an Eventarc trigger for Dataflow job state changes, refer to one of the following documents: Route Dataflow events to Cloud Run Route Dataflow events to Google Kubernetes Engine Route Dataflow events to Workflows Create a trigger for Cloud Run functions Optionally, you can filter events by Dataflow job ID.

### Manage pipeline dependencies in Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies](https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python When you run Dataflow jobs by using the Apache Beam Python SDK, dependency management is useful in the following scenarios: Your pipeline uses public packages from the Python Package Index (PiPy), and you want to make these packages available remotely.
- Go When you run Dataflow jobs by using the Apache Beam Go SDK, Go Modules are used to manage dependencies.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Manage pipeline dependencies in Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Dependency management To simplify dependency management for Java pipelines, Apache Beam uses Bill of Materials (BOM) artifacts.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For Encryption type: "Google-Managed key" For Encryption type: "Customer-Managed key" CLI Run the describe command using the gcloud CLI: gcloud dataflow jobs describe JOB ID Search for the line that contains serviceKmsKeyName .
- Encryption of pipeline state artifacts Data that a Dataflow pipeline reads from user-specified data sources is encrypted, except for the data keys that you specify for key-based transforms in streaming jobs.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- Service agents that use the keys for encrypt and decrypt operations are created if they don't already exist and are granted the required Identity and Access Management (IAM) roles.

