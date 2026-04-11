---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.768Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion metrics observability in Cloud Monitoring"
feature_slug: "cloud-data-fusion-metrics-observability-in-cloud-monitoring"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs"
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
keywords:
  - "fusion"
  - "metrics"
  - "observability"
  - "in"
  - "monitoring"
  - "added"
  - "for"
  - "viewing"
---

# Cloud Data Fusion metrics observability in Cloud Monitoring

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Cloud Data Fusion added support for viewing instance and pipeline metrics in Cloud Monitoring and the Cloud Data Fusion dashboard.

## Extended Definition

Cloud Data Fusion added support for viewing instance and pipeline metrics in Cloud Monitoring and the Cloud Data Fusion dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)
- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)

## Supporting Pages

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
- The dashboard contains the following charts: All pipelines Completed pipelines Failed pipelines All pipeline runs Completed pipeline runs Failed pipeline runs Dataproc clusters for runs After a metric is created, it might take up to 24 hours to start displaying the time series data.
- Create a Cloud Data Fusion instance with Cloud Logging enabled To use Cloud Logging with your Cloud Data Fusion pipeline, create a Cloud Data Fusion instance with Cloud Logging enabled: Go to the Cloud Data Fusion Instances page and click Create instance .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.

### "View advanced pipeline logs in Cloud Logging \_|\_ Cloud Data Fusion \_\

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page describes how to enable Cloud Logging for your Cloud Data Fusion Dataproc clusters and access advanced pipeline logs.
- In the Advanced monitoring and logging section, for Dataproc Cloud Logging , click edit Edit .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback View advanced pipeline logs in Cloud Logging Stay organized with collections Save and categorize content based on your preferences.

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Change To support the Private Service Connect integration, the following permissions are added to the Cloud Data Fusion API Service Agent role: compute.networkAttachments.get compute.networkAttachments.update compute.networkAttachments.list Fixed Fixed in Cloud Data Fusion 6.10.0: Fixed an issue in the Postgres DB plugin causing macros to be unsupported for database configuration ( PLUGIN-1681 ).
- March 20, 2023 Change Salesforce plugins version 1.4.4 is available in all supported Cloud Data Fusion versions with the following changes: In the Salesforce Sink , added the Concurrency Mode property to let you configure the plugin for parallel or serial concurrency.
- This release includes the following feature: InstanceV3 monitored-resource: Introduced datafusion.googleapis.com/InstanceV3 as the default monitored resource for instance-level metrics and system service logs.
- Fixed Fixed in Cloud Data Fusion 6.9.2: Added a retry for Pub/Sub snapshot creation and deletion in a real-time pipeline with a Pub/Sub source when a retryable internal error is thrown ( PLUGIN-1660 ).

