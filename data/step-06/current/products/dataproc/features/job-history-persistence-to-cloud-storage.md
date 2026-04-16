---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.649Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job history persistence to Cloud Storage"
feature_slug: "job-history-persistence-to-cloud-storage"
latest_feature_date: "2020-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob"
keywords:
  - "job"
  - "history"
  - "persistence"
  - "storage"
  - "dataproc"
  - "supports"
  - "persisting"
  - "mapreduce"
---

# Job history persistence to Cloud Storage

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports persisting MapReduce and Spark history files to the Dataproc temp bucket through a cluster property.

## Extended Definition

Dataproc supports persisting MapReduce and Spark history files to the Dataproc temp bucket through a cluster property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)

## Supporting Pages

### "Quickstart: Submit a Spark job by using a template \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache PySpark applications on YARN.
- Properties that conflict with values set by the Dataproc API might be overwritten.

### SparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Properties that conflict with values set by the Dataproc API might be overwritten.
- JSON representation A Dataproc job for running Apache Spark applications on YARN.

