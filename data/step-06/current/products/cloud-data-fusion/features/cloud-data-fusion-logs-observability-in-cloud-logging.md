---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.378Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion logs observability in Cloud Logging"
feature_slug: "cloud-data-fusion-logs-observability-in-cloud-logging"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance"
keywords:
  - "fusion"
  - "logs"
  - "observability"
  - "logging"
  - "added"
  - "viewing"
  - "instance"
  - "pipeline"
---

# Cloud Data Fusion logs observability in Cloud Logging

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion added support for viewing instance and pipeline logs in Cloud Logging and the Cloud Data Fusion dashboard.

## Extended Definition

Cloud Data Fusion added support for viewing instance and pipeline logs in Cloud Logging and the Cloud Data Fusion dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)

## Supporting Pages

### "View advanced pipeline logs in Cloud Logging \_|\_ Cloud Data Fusion \_\

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Dataproc Cloud Logging To view pipeline and cluster issues in Cloud Logging, enable advanced logs in new or existing Cloud Data Fusion instances.
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback View advanced pipeline logs in Cloud Logging Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to enable Cloud Logging for your Cloud Data Fusion Dataproc clusters and access advanced pipeline logs.
- View the logs in Logs Explorer In the Google Cloud console, go to the Cloud Logging > Logs Explorer page: Go Logs Explorer In the All resources drop-down, select Cloud Dataproc Cluster > cdap- PIPELINE NAME - YOUR RUNID .

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Cloud Data Fusion instance with Cloud Logging enabled To use Cloud Logging with your Cloud Data Fusion pipeline, create a Cloud Data Fusion instance with Cloud Logging enabled: Go to the Cloud Data Fusion Instances page and click Create instance .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.
- Delete the Cloud Data Fusion instance Follow these instructions to delete your Cloud Data Fusion instance .
- The Cloud Data Fusion pipelines run after the metric was created, appear in the dashboard.

### Create a public instance \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled Advanced monitoring and logging Enable Dataproc Cloud Logging Enable Dataproc Cloud Monitoring View advanced pipeline logs in Cloud Logging .
- API Create an instance: To create a Cloud Data Fusion instance with the Cloud Data Fusion REST API , construct an instances.create API request, filling in the Instance resource with your configuration information.
- If you don't specify anything, the following defaults are used: Category Setting Description Default Private IP Enable internal IP addresses Create the Cloud Data Fusion instance with an internal IP address.
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback Create a public instance Stay organized with collections Save and categorize content based on your preferences.

