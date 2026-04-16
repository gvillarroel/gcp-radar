---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.670Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow Templates"
feature_slug: "workflow-templates"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse"
keywords:
  - "workflow"
  - "templates"
  - "let"
  - "users"
  - "define"
  - "run"
  - "reusable"
  - "dataproc"
---

# Workflow Templates

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Workflow Templates let users define and run reusable Dataproc workflow definitions; Workflow Templates let users define job graphs that can create clusters, run jobs, and delete clusters automatically.

## Extended Definition

Workflow Templates let users define and run reusable Dataproc workflow definitions; Workflow Templates let users define job graphs that can create clusters, run jobs, and delete clusters automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)

## Supporting Pages

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workflow Templates replace the steps involved in a typical flow, which include: creating the cluster submitting jobs polling deleting the cluster Workflow Templates use a single token to track progress from cluster creation to deletion, and automate error handling and recovery.
- Parameterized If you will run a workflow template multiple times with different values, use parameters to avoid editing the workflow template for each run: define parameters in the template, then pass different values for the parameters for each run.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Overview of Managed Service for Apache Spark Workflow Templates Stay organized with collections Save and categorize content based on your preferences.
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).

### "ListWorkflowTemplatesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListWorkflowTemplatesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "templates" : [ { object ( WorkflowTemplate ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields templates[] object ( WorkflowTemplate ) Output only.
- To fetch additional results, provide this value as the pageToken in a subsequent ListWorkflowTemplatesRequest . unreachable[] string Output only.
- JSON representation A response to a request to list workflow templates in a project.

### "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Workflow Templates Managed Service for Apache Spark Workflow templates provide a flexible and easy-to-use mechanism for managing and executing workflows.
- Advantages: Enables time-based instantiation of workflow templates based on familiar cron expressions No code to write Tutorial: Workflow using Cloud Scheduler Cloud Functions Cloud Run functions is a lightweight compute solution you can use to create single-purpose, stand-alone functions that respond to Cloud events without the need to manage a server or runtime environment.
- A Workflow Template is a reusable workflow configuration.
- Advantages: Supports time- and event-based scheduling Simplified calls to Managed Service for Apache Spark using Operators Dynamically generate workflows and workflow parameters Build data flows that span multiple Google Cloud products Tutorial: Workflow using Cloud Composer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

