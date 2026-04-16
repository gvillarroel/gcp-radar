---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.527Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Connectors"
feature_slug: "connectors"
latest_feature_date: "2021-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/connectors"
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
keywords:
  - "integrations"
  - "connectors"
  - "provide"
  - "built"
  - "call"
---

# Connectors

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Connectors provide built-in integrations that let workflows call supported Google Cloud services.

## Extended Definition

Connectors provide built-in integrations that let workflows call supported Google Cloud services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/connectors](https://docs.cloud.google.com/workflows/docs/connectors)
- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Supporting Pages

### Understand connectors \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/connectors](https://docs.cloud.google.com/workflows/docs/connectors)
- Source ID: `site-api-reference-required-3`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: API operations that are facilitated by Workflows connectors should not be confused with calling or invoking a Google Cloud service—such as Cloud Run functions or Cloud Run—which is done through an HTTP request .
- Connectors simplify calling services because they handle the formatting of requests for you, providing methods and arguments so that you don't need to know the details of a Google Cloud API.
- Authentication Connectors use built-in Identity and Access Management authentication to interact with other Google Cloud products.
- Connectors have built-in behavior for handling retries and long-running operations .

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that when a workflow is deployed to a particular region , it is executed in that region only; however, if the workflow makes any HTTP requests or uses connectors , the HTTP call might not originate from the same region.
- They simplify calling services because they handle the formatting of requests for you, and provide methods and arguments so that you don't need to know the details of a Google Cloud API.
- Error handling You can make your workflows resilient and customize their behavior when a failure occurs by using Workflows' exception handling, including automated HTTP call retries with exponential back-offs, custom error handlers, and other advanced features.
- For example: Send newly uploaded files to Cloud Vision AI, then write tags into Firestore Call a Cloud Run function and send the results to a Cloud Run service Batch jobs Operate on multiple items —Perform operations on a set of items or batch data.

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Deploy . gcloud Create a source code file for your workflow: touch workflows-awaits-callback-sheets.yaml In a text editor, copy the following workflow to your source code file: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- In the workflow editor, enter the following definition for your workflow: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- Replace any code in the script editor with the following code which reads the data in your spreadsheet and passes it along as input to a workflow execution: function handleEdit ( e ) { var range = e . range . getA1Notation (); var sheet = e . source ; if ( range . length > 1 && range [ 0 ] === ' G ' ) { if ( e . value == "TRUE" ) { Logger . log ( "Approved: TRUE" ); var row = range . slice ( 1 ); var url = sheet . getRange ( ' E ' + row ). getCell ( 1 , 1 ). getValue (); var approver = sheet . getRange ( ' F ' + row ). getCell ( 1 , 1 ). getValue (); callback ( url , approver ); } else { Logger . log ( "Approved: FALSE" ); } } } function callback ( url , approver ) { const headers = { "Authorization" : "Bearer " + ScriptApp . getOAuthToken () }; var payload = { ' approver ' : approver }; const params = { "method" : ' POST ' , "contentType" : ' application / json ' , "headers" : headers , "payload" : JSON . stringify ( payload ) }; Logger . log ( "Workflow callback request to " + url ); var response = UrlFetchApp . fetch ( url , params ); Logger . log ( response ); } Click Save save .
- Deploy the workflow by entering the following command: gcloud workflows deploy workflows-awaits-callback-sheets \ --source = workflows-awaits-callback-sheets.yaml \ --location = us-central1 \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com Replace PROJECT NUMBER with your Google Cloud project number.

