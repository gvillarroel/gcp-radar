---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.376Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion failed pipeline error diagnostics"
feature_slug: "cloud-data-fusion-failed-pipeline-error-diagnostics"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline"
  - "https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
keywords:
  - "fusion"
  - "failed"
  - "pipeline"
  - "error"
  - "diagnostics"
  - "web"
  - "interface"
  - "now"
---

# Cloud Data Fusion failed pipeline error diagnostics

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

The Cloud Data Fusion web interface now provides detailed error information for failed pipeline runs with classification by category, reason, and message.

## Extended Definition

The Cloud Data Fusion web interface now provides detailed error information for failed pipeline runs with classification by category, reason, and message.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline)
- [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)

## Supporting Pages

### "Design and create a reusable pipeline \_|\_ Cloud Data Fusion \_|\_ Google\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- In the Cloud Data Fusion web interface, you can use the various pages, such as Pipeline Studio or Wrangler , to use Cloud Data Fusion features.
- Set the macro arguments In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.
- Write to Cloud Storage In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.
- Transform your data In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.

### Create a data pipeline by using Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Google Cloud console, you can do the following: Create a Google Cloud console project Create and delete Cloud Data Fusion instances View the Cloud Data Fusion instance details In the Cloud Data Fusion web interface, you can use various pages, such as Studio or Wrangler , to use Cloud Data Fusion functionality.
- When executing a pipeline, Cloud Data Fusion does the following: Provisions an ephemeral Dataproc cluster Executes the pipeline on the cluster using Apache Spark Deletes the cluster Note: When the pipeline transitions to the Running state, you can monitor the Dataproc cluster creation and deletion .
- Enable the API Required roles To get the permissions that you need to create a Cloud Data Fusion instance and manage pipelines, ask your administrator to grant you the Cloud Data Fusion Admin ( roles/datafusion.admin ) IAM role on the project.
- For Cloud Data Fusion versions 6.2.3 and later, in the Authorization field, choose the Dataproc service account to use for running your Cloud Data Fusion pipeline in Dataproc.

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dashboard contains the following charts: All pipelines Completed pipelines Failed pipelines All pipeline runs Completed pipeline runs Failed pipeline runs Dataproc clusters for runs After a metric is created, it might take up to 24 hours to start displaying the time series data.
- Create a Cloud Data Fusion instance with Cloud Logging enabled To use Cloud Logging with your Cloud Data Fusion pipeline, create a Cloud Data Fusion instance with Cloud Logging enabled: Go to the Cloud Data Fusion Instances page and click Create instance .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.
- The Cloud Data Fusion pipelines run after the metric was created, appear in the dashboard.

