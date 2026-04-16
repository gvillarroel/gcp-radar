---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.522Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Execution status field"
feature_slug: "execution-status-field"
latest_feature_date: "2022-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.Builder"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1beta/projects.locations.workflows.executions"
keywords:
  - "progress"
  - "status"
  - "tracks"
  - "field"
  - "current"
  - "steps"
  - "execution"
  - "workflow"
---

# Execution status field

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

A status field tracks the current steps and progress of a workflow execution.

## Extended Definition

A status field tracks the current steps and progress of a workflow execution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.Builder)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1beta/projects.locations.workflows.executions](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1beta/projects.locations.workflows.executions)

## Supporting Pages

### "Class Execution.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.Builder)
- Source ID: `site-java-reference`
- Final score: 273
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Status tracks the current steps and progress data of this execution. .google.cloud.workflows.executions.v1.Execution.Status status = 10 [(.google.api.field behavior) = OUTPUT ONLY]; Parameter Name Description builderForValue Execution.Status.Builder Returns Type Description Execution.Builder setWorkflowRevisionId(String value) public Execution .
- Status tracks the current steps and progress data of this execution. .google.cloud.workflows.executions.v1.Execution.Status status = 10 [(.google.api.field behavior) = OUTPUT ONLY]; Parameter Name Description value Execution.Status Returns Type Description Execution.Builder setStatus(Execution.Status.Builder builderForValue) public Execution .
- Status tracks the current steps and progress data of this execution. .google.cloud.workflows.executions.v1.Execution.Status status = 10 [(.google.api.field behavior) = OUTPUT ONLY]; Parameter Name Description value Execution.Status Returns Type Description Execution.Builder putAllLabels(Map<String,String> values) public Execution .
- Status tracks the current steps and progress data of this execution. .google.cloud.workflows.executions.v1.Execution.Status status = 10 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description Execution.StatusOrBuilder getWorkflowRevisionId() public String getWorkflowRevisionId () Output only.

### "REST Resource: projects.locations.workflows.executions \_|\_ Workflows \_\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions)
- Source ID: `site-api-reference`
- Final score: 269
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Status tracks the current steps and progress data of this execution. labels map (key: string, value: string) Labels associated with this execution.
- JSON representation { "currentSteps" : [ { object ( Step ) } ] } Fields currentSteps[] object ( Step ) A list of currently executing or last executed step names for the workflow execution currently running.
- JSON representation { "name" : string , "createTime" : string , "startTime" : string , "endTime" : string , "duration" : string , "state" : enum ( State ) , "argument" : string , "result" : string , "error" : { object ( Error ) } , "workflowRevisionId" : string , "callLogLevel" : enum ( CallLogLevel ) , "status" : { object ( Status ) } , "labels" : { string : string , ... } , "stateError" : { object ( StateError ) } } Fields name string Output only.
- Resource: Execution JSON representation State Error JSON representation StackTrace JSON representation StackTraceElement JSON representation Position JSON representation CallLogLevel Status JSON representation Step JSON representation StateError JSON representation Type ExecutionHistoryLevel Methods Resource: Execution A running instance of a Workflow .

### "REST Resource: projects.locations.workflows.executions \_|\_ Workflows \_\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1beta/projects.locations.workflows.executions](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1beta/projects.locations.workflows.executions)
- Source ID: `site-api-reference`
- Final score: 265
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Status tracks the current steps and progress data of this execution.
- JSON representation { "currentSteps" : [ { object ( Step ) } ] } Fields currentSteps[] object ( Step ) A list of currently executing or last executed step names for the workflow execution currently running.
- JSON representation { "name" : string , "startTime" : string , "endTime" : string , "state" : enum ( State ) , "argument" : string , "result" : string , "error" : { object ( Error ) } , "workflowRevisionId" : string , "callLogLevel" : enum ( CallLogLevel ) , "status" : { object ( Status ) } } Fields name string Output only.
- Resource: Execution JSON representation State Error JSON representation StackTrace JSON representation StackTraceElement JSON representation Position JSON representation CallLogLevel Status JSON representation Step JSON representation Methods Resource: Execution A running instance of a Workflow .

