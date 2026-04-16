---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.524Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Call logging"
feature_slug: "call-logging"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/log-workflow"
  - "https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
keywords:
  - "troubleshooting"
  - "observability"
  - "activity"
  - "records"
  - "logging"
  - "call"
  - "workflow"
---

# Call logging

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Call logging records workflow call activity for observability and troubleshooting.

## Extended Definition

Call logging records workflow call activity for observability and troubleshooting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/log-workflow](https://docs.cloud.google.com/workflows/docs/log-workflow)
- [https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions](https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Supporting Pages

### "Send execution logs to Cloud Logging \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/log-workflow](https://docs.cloud.google.com/workflows/docs/log-workflow)
- Source ID: `site-docs-reference-required-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom logs To create a log entry in Logging during a workflow execution, define a step in the workflow that makes a call to the standard library sys.log function: YAML - step1 : assign : - varA : "Hello" - varB : "World" - logStep : call : sys.log args : text : TEXT severity : SEVERITY - step2 : return : ${varA + " " + varB} JSON [ { "step1" : { "assign" : [ { "varA" : "Hello" }, { "varB" : "World" } ] } }, { "logStep" : { "call" : "sys.log" , "args" : { "text" : " TEXT " , "severity" : " SEVERITY " } } }, { "step2" : { "return" : "${varA + " " + varB}" } } ] When creating a log entry, define the following: TEXT : required.
- Required permissions To apply call logging or send custom logs to Logging, a workflow must be associated with a service account that includes the logging.logEntries.create permission (for example, the roles/logging.logWriter role).
- Call logging You can set a flag so that each call step during the execution of your workflow is logged, and step names, function names, function arguments, and call responses are returned.
- Call logging and custom logs let you control when logs are sent to Logging during a workflow execution and can be particularly helpful when debugging your workflow.

### "Audit logging for workflow executions \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions](https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods DATA READ google.cloud.workflows.executions.v1.Events.ListCallbacks google.cloud.workflows.executions.v1.ExecutionHistory.GetStepEntry google.cloud.workflows.executions.v1.ExecutionHistory.ListStepEntries google.cloud.workflows.executions.v1.Executions.ExportData google.cloud.workflows.executions.v1.Executions.GetExecution google.cloud.workflows.executions.v1.Executions.ListExecutions google.cloud.workflows.executions.v1alpha1.Executions.GetExecution google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions google.cloud.workflows.executions.v1beta.Executions.GetExecution google.cloud.workflows.executions.v1beta.Executions.ListExecutions DATA WRITE google.cloud.workflows.executions.v1.Events.SendHttpCallback google.cloud.workflows.executions.v1.Executions.CancelExecution google.cloud.workflows.executions.v1.Executions.CreateExecution google.cloud.workflows.executions.v1.Executions.DeleteExecutionHistory google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution google.cloud.workflows.executions.v1alpha1.Executions.CancelExecution google.cloud.workflows.executions.v1alpha1.Executions.CreateExecution google.cloud.workflows.executions.v1beta.Executions.CancelExecution google.cloud.workflows.executions.v1beta.Executions.CreateExecution API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Workflows. google.cloud.workflows.executions.v1.Events The following audit logs are associated with methods belonging to google.cloud.workflows.executions.v1.Events .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.executions.v1.Events.ListCallbacks" SendHttpCallback Method : google.cloud.workflows.executions.v1.Events.SendHttpCallback Audit log type : Data access Permissions : workflows.callbacks.send - DATA WRITE Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Workflows audit logs use the service name workflowexecutions.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.workflows.executions.v1.Events.SendHttpCallback" google.cloud.workflows.executions.v1.ExecutionHistory The following audit logs are associated with methods belonging to google.cloud.workflows.executions.v1.ExecutionHistory .

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Deploy . gcloud Create a source code file for your workflow: touch workflows-awaits-callback-sheets.yaml In a text editor, copy the following workflow to your source code file: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- In the workflow editor, enter the following definition for your workflow: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- Replace any code in the script editor with the following code which reads the data in your spreadsheet and passes it along as input to a workflow execution: function handleEdit ( e ) { var range = e . range . getA1Notation (); var sheet = e . source ; if ( range . length > 1 && range [ 0 ] === ' G ' ) { if ( e . value == "TRUE" ) { Logger . log ( "Approved: TRUE" ); var row = range . slice ( 1 ); var url = sheet . getRange ( ' E ' + row ). getCell ( 1 , 1 ). getValue (); var approver = sheet . getRange ( ' F ' + row ). getCell ( 1 , 1 ). getValue (); callback ( url , approver ); } else { Logger . log ( "Approved: FALSE" ); } } } function callback ( url , approver ) { const headers = { "Authorization" : "Bearer " + ScriptApp . getOAuthToken () }; var payload = { ' approver ' : approver }; const params = { "method" : ' POST ' , "contentType" : ' application / json ' , "headers" : headers , "payload" : JSON . stringify ( payload ) }; Logger . log ( "Workflow callback request to " + url ); var response = UrlFetchApp . fetch ( url , params ); Logger . log ( response ); } Click Save save .
- Deploy the workflow by entering the following command: gcloud workflows deploy workflows-awaits-callback-sheets \ --source = workflows-awaits-callback-sheets.yaml \ --location = us-central1 \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com Replace PROJECT NUMBER with your Google Cloud project number.

