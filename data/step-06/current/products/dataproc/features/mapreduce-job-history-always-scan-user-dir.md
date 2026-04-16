---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.649Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "MapReduce job history always-scan-user-dir"
feature_slug: "mapreduce-job-history-always-scan-user-dir"
latest_feature_date: "2020-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster"
keywords:
  - "mapreduce"
  - "job"
  - "history"
  - "always"
  - "scan"
  - "user"
  - "dir"
  - "dataproc"
---

# MapReduce job history always-scan-user-dir

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports a cluster property that makes the MapReduce job history server always scan the user directory for history files.

## Extended Definition

Dataproc supports a cluster property that makes the MapReduce job history server always scan the user directory for history files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)

## Supporting Pages

### SparkSqlJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Properties that conflict with values set by the Dataproc API might be overwritten.
- JSON representation A Dataproc job for running Apache Spark SQL queries.

### PrestoJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- IMPORTANT : The Dataproc Presto Optional Component must be enabled when the cluster is created to submit a Presto job to the cluster.
- JSON representation A Dataproc job for running Presto queries.

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.
- Diagnose archive file The following tables list metrics and other information included in the dataproc clusters diagnose command archive file.

