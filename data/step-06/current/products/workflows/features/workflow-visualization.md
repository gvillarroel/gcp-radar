---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.531Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Workflow visualization"
feature_slug: "workflow-visualization"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/create-workflow-console"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
keywords:
  - "displays"
  - "visualization"
  - "during"
  - "editing"
  - "console"
  - "workflow"
---

# Workflow visualization

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console displays a visualization of a workflow during editing.

## Extended Definition

The Google Cloud Console displays a visualization of a workflow during editing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/create-workflow-console](https://docs.cloud.google.com/workflows/docs/create-workflow-console)
- [https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow](https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Supporting Pages

### "Quickstart: Create a workflow by using the Google Cloud console \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/create-workflow-console](https://docs.cloud.google.com/workflows/docs/create-workflow-console)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a workflow by using the Google Cloud console This quickstart shows you how to create, deploy, and execute your first workflow using the Google Cloud console.
- In the Google Cloud console, go to the Workflows page: Go to Workflows From the list of workflows, click a workflow to go to its Workflow details page.
- Create and deploy a workflow In the Google Cloud console, go to the Workflows page: Go to Workflows On the Workflows page, click add Create .
- In the workflow editor, copy and paste the following workflow: YAML main : params : [ input ] steps : - checkSearchTermInInput : switch : - condition : '${"searchTerm" in input}' assign : - searchTerm : '${input.searchTerm}' next : readWikipedia - getLocation : call : sys.get env args : name : GOOGLE CLOUD LOCATION result : location - setFromCallResult : assign : - searchTerm : '${text.split(location, "-")[0]}' - readWikipedia : call : http.get args : url : 'https://en.wikipedia.org/w/api.php' query : action : opensearch search : '${searchTerm}' result : wikiResult - returnOutput : return : '${wikiResult.body[1]}' JSON { "main" : { "params" : [ "input" ], "steps" : [ { "checkSearchTermInInput" : { "switch" : [ { "condition" : "${\"searchTerm\" in input}" , "assign" : [ { "searchTerm" : "${input.searchTerm}" } ], "next" : "readWikipedia" } ] } }, { "getLocation" : { "call" : "sys.get env" , "args" : { "name" : "GOOGLE CLOUD LOCATION" }, "result" : "location" } }, { "setFromCallResult" : { "assign" : [ { "searchTerm" : "${text.split(location, \"-\")[0]}" } ] } }, { "readWikipedia" : { "call" : "http.get" , "args" : { "url" : "https://en.wikipedia.org/w/api.php" , "query" : { "action" : "opensearch" , "search" : "${searchTerm}" } }, "result" : "wikiResult" } }, { "returnOutput" : { "return" : "${wikiResult.body[1]}" } } ] } } Unless you input your own search term, this workflow uses your Google Cloud location to construct a search term, which it passes to the Wikipedia API .

### "Run a workflow that executes other workflows in parallel \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow](https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The child workflow demonstrates this by doing the following: Receives an integer as an argument Sleeps for 10 seconds to simulate some processing Returns an indicator (based on whether the integer is an odd or even number) to simulate success or failure of the workflow execution Console In the Google Cloud console, go to the Workflows page.
- For more information, see Complete the execution of a workflow . - return execution results : return : ${execution results} Deploy the workflow: Console In the Google Cloud console, go to the Workflows page: Go to Workflows Click add Create .
- Console In the Google Cloud console, go to the Workflows page: Go to Workflows On the Workflows page, click the workflow-parent workflow to go to its details page.
- In the workflow editor, enter the following definition for your workflow: main : params : [ args ] steps : - init : assign : - iteration : ${args.iteration} - wait : call : sys.sleep args : seconds : 10 - check iteration even or odd : switch : - condition : ${iteration % 2 == 0} next : raise error - return message : return : ${"Hello world"+iteration} - raise error : raise : ${"Error with iteration "+iteration} Click Deploy . gcloud Create a source code file for your workflow: touch workflow-child.yaml Open your source code file in a text editor and copy the following workflow to the file. main : params : [ args ] steps : - init : assign : - iteration : ${args.iteration} - wait : call : sys.sleep args : seconds : 10 - check iteration even or odd : switch : - condition : ${iteration % 2 == 0} next : raise error - return message : return : ${"Hello world"+iteration} - raise error : raise : ${"Error with iteration "+iteration} Deploy the workflow: gcloud workflows deploy workflow-child \ --source = workflow-child.yaml \ --location = us-central1 \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace SERVICE ACCOUNT NAME with the name of the service account you previously created.

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Console In the Google Cloud console, go to the Workflows page: Go to Workflows On the Workflows page, select the workflows-awaits-callback-sheets workflow to go to its details page.
- Activate Cloud Shell At the bottom of the Google Cloud console, a Cloud Shell session starts and displays a command-line prompt.
- Console In the Google Cloud console, go to the Workflows page: Go to Workflows Click add Create .
- Click Deploy . gcloud Create a source code file for your workflow: touch workflows-awaits-callback-sheets.yaml In a text editor, copy the following workflow to your source code file: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .

