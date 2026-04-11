---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.068Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow timeout"
feature_slug: "workflow-timeout"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
keywords:
  - "workflow"
  - "timeout"
  - "dataproc"
  - "workflows"
  - "configurable"
  - "timeouts"
  - "that"
  - "automatically"
---

# Workflow timeout

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc workflows support configurable timeouts that automatically cancel a job graph after a specified period.

## Extended Definition

Dataproc workflows support configurable timeouts that automatically cancel a job graph after a specified period.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Announcement Announcing the General Availability (GA) release of the Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.
- August 28, 2020 Feature Launched Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.
- July 10, 2020 Feature Added --temp-bucket flag to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster to allow users to configure a Cloud Storage bucket that stores ephemeral cluster and jobs data, such as Spark and MapReduce history files.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Managed Cluster Cluster that is managed by the workflow. com. google. cloud. dataproc. v1.
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Currently started workflows will remain running. com. google. cloud. dataproc. v1.
- Builder Cluster that is managed by the workflow. com. google. cloud. dataproc. v1.

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- A workflow can select a specific cluster by matching the goog-dataproc-cluster-name label (see Using Automatically Applied Labels ).
- The Managed Service for Apache Spark WorkflowTemplates API provides a flexible and easy-to-use mechanism for managing and executing workflows.
- A Workflow is an operation that runs a Directed Acyclic Graph (DAG) of jobs on a cluster.

