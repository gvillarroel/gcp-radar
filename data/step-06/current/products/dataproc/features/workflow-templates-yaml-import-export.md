---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.108Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow Templates YAML import/export"
feature_slug: "workflow-templates-yaml-import-export"
latest_feature_date: "2018-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
keywords:
  - "workflow"
  - "templates"
  - "yaml"
  - "import"
  - "export"
  - "and"
  - "lets"
  - "users"
---

# Workflow Templates YAML import/export

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Workflow Templates YAML import and export lets users import and export Dataproc workflow templates directly from YAML files with the gcloud CLI.

## Extended Definition

Workflow Templates YAML import and export lets users import and export Dataproc workflow templates directly from YAML files with the gcloud CLI.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- As part of this feature launch, users can import and export workflow templates directly from YAML files using the gcloud command-line tool.
- July 10, 2020 Feature Added --temp-bucket flag to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster to allow users to configure a Cloud Storage bucket that stores ephemeral cluster and jobs data, such as Spark and MapReduce history files.
- This feature allows you to use the gcloud command-line tool to export the configuration of an existing Cloud Dataproc cluster into a YAML file, then create a new cluster by importing the YAML file configuration.
- March 10, 2020 Change Added the following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands: --num-secondary-workers --num-secondary-worker-local-ssds --secondary-worker-boot-disk-size --secondary-worker-boot-disk-type --secondary-worker-accelerator Deprecated The following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands have been deprecated: --num-preemptible-workers --num-preemptible-worker-local-ssds --preemptible-worker-boot-disk-size --preemptible-worker-boot-disk-type --preemptible-worker-accelerator See the related change, above, for the new flags to use in place of these deprecated flags.

### "ListWorkflowTemplatesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListWorkflowTemplatesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "templates" : [ { object ( WorkflowTemplate ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields templates[] object ( WorkflowTemplate ) Output only.
- To fetch additional results, provide this value as the pageToken in a subsequent ListWorkflowTemplatesRequest . unreachable[] string Output only.
- JSON representation A response to a request to list workflow templates in a project.

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workflow Templates replace the steps involved in a typical flow, which include: creating the cluster submitting jobs polling deleting the cluster Workflow Templates use a single token to track progress from cluster creation to deletion, and automate error handling and recovery.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Overview of Managed Service for Apache Spark Workflow Templates Stay organized with collections Save and categorize content based on your preferences.
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- The Managed Service for Apache Spark WorkflowTemplates API provides a flexible and easy-to-use mechanism for managing and executing workflows.

