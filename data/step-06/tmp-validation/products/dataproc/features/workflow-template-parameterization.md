---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.191Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow Template Parameterization"
feature_slug: "workflow-template-parameterization"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.workflow_template_service"
keywords:
  - "parameterization"
  - "reused"
  - "different"
  - "template"
  - "templates"
  - "workflow"
  - "lets"
---

# Workflow Template Parameterization

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters; Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters.

## Extended Definition

Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters; Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.workflow_template_service](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.workflow_template_service)

## Supporting Pages

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Parameterization of Workflow Templates for more information.
- Workflow Templates replace the steps involved in a typical flow, which include: creating the cluster submitting jobs polling deleting the cluster Workflow Templates use a single token to track progress from cluster creation to deletion, and automate error handling and recovery.
- Parameterized If you will run a workflow template multiple times with different values, use parameters to avoid editing the workflow template for each run: define parameters in the template, then pass different values for the parameters for each run.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Overview of Managed Service for Apache Spark Workflow Templates Stay organized with collections Save and categorize content based on your preferences.

### "ListWorkflowTemplatesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListWorkflowTemplatesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "templates" : [ { object ( WorkflowTemplate ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields templates[] object ( WorkflowTemplate ) Output only.
- To fetch additional results, provide this value as the pageToken in a subsequent ListWorkflowTemplatesRequest . unreachable[] string Output only.
- JSON representation A response to a request to list workflow templates in a project.

### "Package workflow_template_service (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.workflow_template_service](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.workflow_template_service)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Classes WorkflowTemplateServiceAsyncClient The API interface for managing Workflow Templates in the Dataproc API.
- WorkflowTemplateServiceClient The API interface for managing Workflow Templates in the Dataproc API.
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 API documentation for dataproc v1.services.workflow template service package.
- Home Documentation Developer tools Python Client libraries Send feedback Package workflow template service (5.26.0) Stay organized with collections Save and categorize content based on your preferences.

