---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.528Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Platform logs in Cloud Logging"
feature_slug: "platform-logs-in-cloud-logging"
latest_feature_date: "2021-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/log-workflow"
  - "https://docs.cloud.google.com/workflows/docs/audit-logging"
  - "https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions"
keywords:
  - "logs"
  - "platform"
  - "logging"
---

# Platform logs in Cloud Logging

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Platform logs for Workflows are supported in Cloud Logging.

## Extended Definition

Platform logs for Workflows are supported in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/log-workflow](https://docs.cloud.google.com/workflows/docs/log-workflow)
- [https://docs.cloud.google.com/workflows/docs/audit-logging](https://docs.cloud.google.com/workflows/docs/audit-logging)
- [https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions](https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions)

## Supporting Pages

### "Send execution logs to Cloud Logging \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/log-workflow](https://docs.cloud.google.com/workflows/docs/log-workflow)
- Source ID: `site-docs-reference-required-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the Workflows platform logs that are available in Logging, see Google Cloud platform logs .
- Custom logs To create a log entry in Logging during a workflow execution, define a step in the workflow that makes a call to the standard library sys.log function: YAML - step1 : assign : - varA : "Hello" - varB : "World" - logStep : call : sys.log args : text : TEXT severity : SEVERITY - step2 : return : ${varA + " " + varB} JSON [ { "step1" : { "assign" : [ { "varA" : "Hello" }, { "varB" : "World" } ] } }, { "logStep" : { "call" : "sys.log" , "args" : { "text" : " TEXT " , "severity" : " SEVERITY " } } }, { "step2" : { "return" : "${varA + " " + varB}" } } ] When creating a log entry, define the following: TEXT : required.
- The Logs tab on a workflow's Details page displays the following types of logs: Logs sent to Logging Audit logs of any operations performed on the workflow, such as updates to the workflow's definition View logs in Logging To view logs in Logging, do the following: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer In the Query builder , click Resource and enter workflow .
- Required permissions To apply call logging or send custom logs to Logging, a workflow must be associated with a service account that includes the logging.logEntries.create permission (for example, the roles/logging.logWriter role).

### Audit logging for workflows \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/audit-logging](https://docs.cloud.google.com/workflows/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Workflows audit logs use the service name workflows.googleapis.com .
- Permission type Methods ADMIN READ google.cloud.workflows.v1.Workflows.GetWorkflow google.cloud.workflows.v1.Workflows.ListWorkflowRevisions google.cloud.workflows.v1.Workflows.ListWorkflows google.cloud.workflows.v1alpha1.Workflows.GetWorkflow google.cloud.workflows.v1alpha1.Workflows.ListWorkflows google.cloud.workflows.v1beta.Workflows.GetWorkflow google.cloud.workflows.v1beta.Workflows.ListWorkflows google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.workflows.v1.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1.Workflows.UpdateWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.UpdateWorkflow (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Workflows. google.cloud.workflows.v1.Workflows The following audit logs are associated with methods belonging to google.cloud.workflows.v1.Workflows .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.ListWorkflows" UpdateWorkflow Method : google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow Audit log type : Admin activity Permissions : workflows.workflows.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow" google.cloud.workflows.v1beta.Workflows The following audit logs are associated with methods belonging to google.cloud.workflows.v1beta.Workflows .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.v1.Workflows.ListWorkflows" UpdateWorkflow Method : google.cloud.workflows.v1.Workflows.UpdateWorkflow Audit log type : Admin activity Permissions : workflows.workflows.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.workflows.v1.Workflows.UpdateWorkflow" google.cloud.workflows.v1alpha1.Workflows The following audit logs are associated with methods belonging to google.cloud.workflows.v1alpha1.Workflows .

### "Audit logging for workflow executions \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions](https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Workflows audit logs use the service name workflowexecutions.googleapis.com .
- Permission type Methods DATA READ google.cloud.workflows.executions.v1.Events.ListCallbacks google.cloud.workflows.executions.v1.ExecutionHistory.GetStepEntry google.cloud.workflows.executions.v1.ExecutionHistory.ListStepEntries google.cloud.workflows.executions.v1.Executions.ExportData google.cloud.workflows.executions.v1.Executions.GetExecution google.cloud.workflows.executions.v1.Executions.ListExecutions google.cloud.workflows.executions.v1alpha1.Executions.GetExecution google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions google.cloud.workflows.executions.v1beta.Executions.GetExecution google.cloud.workflows.executions.v1beta.Executions.ListExecutions DATA WRITE google.cloud.workflows.executions.v1.Events.SendHttpCallback google.cloud.workflows.executions.v1.Executions.CancelExecution google.cloud.workflows.executions.v1.Executions.CreateExecution google.cloud.workflows.executions.v1.Executions.DeleteExecutionHistory google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution google.cloud.workflows.executions.v1alpha1.Executions.CancelExecution google.cloud.workflows.executions.v1alpha1.Executions.CreateExecution google.cloud.workflows.executions.v1beta.Executions.CancelExecution google.cloud.workflows.executions.v1beta.Executions.CreateExecution API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Workflows. google.cloud.workflows.executions.v1.Events The following audit logs are associated with methods belonging to google.cloud.workflows.executions.v1.Events .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution" google.cloud.workflows.executions.v1alpha1.Executions The following audit logs are associated with methods belonging to google.cloud.workflows.executions.v1alpha1.Executions .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions" google.cloud.workflows.executions.v1beta.Executions The following audit logs are associated with methods belonging to google.cloud.workflows.executions.v1beta.Executions .

