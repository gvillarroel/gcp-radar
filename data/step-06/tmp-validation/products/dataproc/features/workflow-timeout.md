---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.154Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow timeout"
feature_slug: "workflow-timeout"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions"
keywords:
  - "timeouts"
  - "cancel"
  - "configurable"
  - "workflows"
  - "automatically"
  - "timeout"
  - "workflow"
---

# Workflow timeout

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc workflows support configurable timeouts that automatically cancel a job graph after a specified period.

## Extended Definition

Dataproc workflows support configurable timeouts that automatically cancel a job graph after a specified period.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)

## Supporting Pages

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- The Managed Service for Apache Spark WorkflowTemplates API provides a flexible and easy-to-use mechanism for managing and executing workflows.
- A workflow can select a specific cluster by matching the goog-dataproc-cluster-name label (see Using Automatically Applied Labels ).
- Workflows encapsulate frequently used cluster configurations and jobs.

### "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advantages: Supports time- and event-based scheduling Simplified calls to Managed Service for Apache Spark using Operators Dynamically generate workflows and workflow parameters Build data flows that span multiple Google Cloud products Tutorial: Workflow using Cloud Composer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Minimal coding required using Managed Service for Apache Spark Go , Node.js , or Python client libraries Dynamically generate workflows and workflow parameters Tutorial: Workflow using Cloud Run functions Cloud Composer Cloud Composer is a managed Apache Airflow service you can use to create, schedule, monitor, and manage workflows.
- Dataproc Workflow Templates Managed Service for Apache Spark Workflow templates provide a flexible and easy-to-use mechanism for managing and executing workflows.
- You can use Cloud Run functions with Cloud Scheduler for workflows that require the calculation of time-based parameters.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Project Location Workflow Template Builder Builder for projects/{project}/locations/{location}/workflowTemplates/{workflow template}. com. google. cloud. dataproc. v1.
- Node Initialization Action Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.

