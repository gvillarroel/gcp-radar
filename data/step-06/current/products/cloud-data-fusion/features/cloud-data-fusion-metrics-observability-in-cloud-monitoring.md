---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.379Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion metrics observability in Cloud Monitoring"
feature_slug: "cloud-data-fusion-metrics-observability-in-cloud-monitoring"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview"
  - "https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline"
keywords:
  - "fusion"
  - "metrics"
  - "observability"
  - "monitoring"
  - "added"
  - "viewing"
  - "instance"
  - "pipeline"
---

# Cloud Data Fusion metrics observability in Cloud Monitoring

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion added support for viewing instance and pipeline metrics in Cloud Monitoring and the Cloud Data Fusion dashboard.

## Extended Definition

Cloud Data Fusion added support for viewing instance and pipeline metrics in Cloud Monitoring and the Cloud Data Fusion dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- [https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview](https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview)
- [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)

## Supporting Pages

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Cloud Data Fusion instance with Cloud Logging enabled To use Cloud Logging with your Cloud Data Fusion pipeline, create a Cloud Data Fusion instance with Cloud Logging enabled: Go to the Cloud Data Fusion Instances page and click Create instance .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.
- Create a pipeline monitoring dashboard using Cloud Monitoring Learn how to use Cloud Monitoring to create a dashboard to monitor pipelines.
- Delete the Cloud Data Fusion instance Follow these instructions to delete your Cloud Data Fusion instance .

### Introduction to Cloud Data Fusion: Console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview](https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview)
- Source ID: `site-iam-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Choose the edition based on the following criteria: Cost Concurrency limits for pipeline execution Role-based access control (RBAC) availability The editions are intended for the following use cases: Cloud Data Fusion edition Use case Developer edition For development, testing, or small-scale integrations Basic edition For production with moderate needs Enterprise edition For large-scale, mission-critical data pipelines with RBAC Public or private instance Depending on your requirements, decide if you need a public or a private instance.
- Each instance is a unique, independent Cloud Data Fusion deployment, which contains a set of services that handle pipeline lifecycle management, orchestration, coordination, and metadata management.
- Logging and monitoring Cloud Logging and Cloud Monitoring are crucial for gaining insights into the health and performance of your Cloud Data Fusion pipelines.
- Enabling Logging and Monitoring lets you view Cloud Data Fusion pipeline logs in the Google Cloud console on the Logging viewer page.

### Create a data pipeline by using Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Required roles To get the permissions that you need to create a Cloud Data Fusion instance and manage pipelines, ask your administrator to grant you the Cloud Data Fusion Admin ( roles/datafusion.admin ) IAM role on the project.
- Create a data pipeline This quickstart shows you how to do the following: Create a Cloud Data Fusion instance.
- Deploy a sample pipeline that's provided with your Cloud Data Fusion instance.
- In the Google Cloud console, you can do the following: Create a Google Cloud console project Create and delete Cloud Data Fusion instances View the Cloud Data Fusion instance details In the Cloud Data Fusion web interface, you can use various pages, such as Studio or Wrangler , to use Cloud Data Fusion functionality.

