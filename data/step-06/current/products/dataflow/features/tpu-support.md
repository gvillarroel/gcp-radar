---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.757Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "TPU support"
feature_slug: "tpu-support"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml"
keywords:
  - "tpu"
  - "dataflow"
  - "supports"
  - "tpus"
  - "accelerate"
  - "inference"
  - "workloads"
  - "frameworks"
---

# TPU support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports TPUs to accelerate inference workloads on frameworks such as PyTorch, JAX, and TensorFlow.

## Extended Definition

Dataflow supports TPUs to accelerate inference workloads on frameworks such as PyTorch, JAX, and TensorFlow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes](https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes)
- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Supporting Pages

### Input and output error codes \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes](https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes)
- Source ID: `site-docs-reference-required-3`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Input and output error codes Stay organized with collections Save and categorize content based on your preferences.
- Check that the Dataflow service account has Identity and Access Management (IAM) permissions to the specific service and relevant APIs are enabled for the project.
- This can occur when a Dataflow worker is shut down or source or sink logic intentionally decides to cancel attempts to read or write data.
- Check that the Dataflow service account has IAM permissions to the specific service and relevant APIs are enabled for the project.

### "Migrate from App Engine MapReduce to Apache Beam and Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- Source ID: `site-docs-reference-required-3`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Getting started with Dataflow and Apache Beam To get started, follow the quickstart of your choice: Using Java and Apache Maven Using Python Using Go Creating and running a pipeline When using App Engine MapReduce, you create data processing classes, add the MapReduce library, and once the job's specification and settings are defined, you create and start the job in one step using the static start() method on the appropriate job class.
- Migration cases The following are some example cases where you could benefit from migrating from App Engine MapReduce to Apache Beam and Dataflow: Store your Datastore database application data in a BigQuery data warehouse for analytical processing using SQL.
- Write ( s , "wordcounts.txt" , formatted ) Additional Apache Beam and Dataflow benefits If you choose to migrate your App Engine MapReduce jobs to Apache Beam pipelines, you will benefit from several features that Apache Beam and Dataflow have to offer.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Migrate from App Engine MapReduce to Apache Beam and Dataflow Stay organized with collections Save and categorize content based on your preferences.

### "Save and load YAML job definitions with the job builder \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)
- Source ID: `site-docs-reference-required-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Save and load YAML job definitions with the job builder Stay organized with collections Save and categorize content based on your preferences.

