---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.508Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Execution step history"
feature_slug: "execution-step-history"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/get"
keywords:
  - "history"
  - "display"
  - "entries"
  - "step"
  - "execution"
  - "list"
---

# Execution step history

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Workflows can display the history of an execution as a list of step entries.

## Extended Definition

Workflows can display the history of an execution as a list of step entries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/get](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/get)

## Supporting Pages

### "Method: projects.locations.workflows.executions.stepEntries.list \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list)
- Source ID: `site-api-reference`
- Final score: 233
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Response body Response message for ExecutionHistory.ListStepEntries.
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} Authorization requires the following IAM permission on the specified resource parent : workflows.stepEntries.list Query parameters Parameters pageSize integer Optional.
- Home Documentation Application development Workflows Reference Send feedback Method: projects.locations.workflows.executions.stepEntries.list Stay organized with collections Save and categorize content based on your preferences.
- Returns a list of step entries for a workflow execution.

### "REST Resource: projects.locations.workflows.executions.stepEntries \_|\_\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods get Returns a step entry for a workflow execution. list Returns a list of step entries for a workflow execution.
- Home Documentation Application development Workflows Reference Send feedback REST Resource: projects.locations.workflows.executions.stepEntries Stay organized with collections Save and categorize content based on your preferences.
- Step entry names have the format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step entry} . createTime string ( Timestamp format) Output only.
- JSON representation { "children" : [ string ] , "parent" : string , "next" : string , "previous" : string } Fields children[] string ( int64 format) Indices of child step entries (for example, a for loop has one child step entry for each iteration). parent string ( int64 format) Index of the parent step entry, if any. next string ( int64 format) Index of the next step entry, if any. previous string ( int64 format) Index of the previous step entry, if any.

### "Method: projects.locations.workflows.executions.stepEntries.get \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/get](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/get)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step entry} Authorization requires the following IAM permission on the specified resource name : workflows.stepEntries.get Request body The request body must be empty.
- Home Documentation Application development Workflows Reference Send feedback Method: projects.locations.workflows.executions.stepEntries.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://workflowexecutions.googleapis.com/v1/{name=projects/ /locations/ /workflows/ /executions/ /stepEntries/ } The URL uses gRPC Transcoding syntax.
- Returns a step entry for a workflow execution.

