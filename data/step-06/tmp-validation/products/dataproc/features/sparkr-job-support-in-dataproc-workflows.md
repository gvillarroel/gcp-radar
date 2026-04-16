---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.167Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "SparkR job support in Dataproc Workflows"
feature_slug: "sparkr-job-support-in-dataproc-workflows"
latest_feature_date: "2020-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions"
keywords:
  - "sparkr"
  - "workflows"
  - "workflow"
  - "type"
  - "jobs"
---

# SparkR job support in Dataproc Workflows

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Workflows support SparkR jobs as a workflow job type.

## Extended Definition

Dataproc Workflows support SparkR jobs as a workflow job type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Project Location Workflow Template Builder Builder for projects/{project}/locations/{location}/workflowTemplates/{workflow template}. com. google. cloud. dataproc. v1.
- Instance Selection Result Defines a mapping from machine types to the number of VMs that are created with each machine type. com. google. cloud. dataproc. v1.

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workflows encapsulate frequently used cluster configurations and jobs.
- Workflow Templates replace the steps involved in a typical flow, which include: creating the cluster submitting jobs polling deleting the cluster Workflow Templates use a single token to track progress from cluster creation to deletion, and automate error handling and recovery.
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- Cluster selector A workflow template can specify an existing cluster on which to run workflow jobs by specifying one or more user labels previously attached to the cluster.

### "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advantages: Supports time- and event-based scheduling Simplified calls to Managed Service for Apache Spark using Operators Dynamically generate workflows and workflow parameters Build data flows that span multiple Google Cloud products Tutorial: Workflow using Cloud Composer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Minimal coding required using Managed Service for Apache Spark Go , Node.js , or Python client libraries Dynamically generate workflows and workflow parameters Tutorial: Workflow using Cloud Run functions Cloud Composer Cloud Composer is a managed Apache Airflow service you can use to create, schedule, monitor, and manage workflows.
- Dataproc Workflow Templates Managed Service for Apache Spark Workflow templates provide a flexible and easy-to-use mechanism for managing and executing workflows.
- You can use Cloud Run functions with Cloud Scheduler for workflows that require the calculation of time-based parameters.

