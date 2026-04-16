---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.515Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Independent source and details editing in Cloud Console"
feature_slug: "independent-source-and-details-editing-in-cloud-console"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets"
keywords:
  - "independent"
  - "details"
  - "source"
  - "users"
  - "update"
  - "editing"
  - "lets"
  - "console"
---

# Independent source and details editing in Cloud Console

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The Cloud Console lets users update a workflow's source and details independently using separate Source and Details tabs.

## Extended Definition

The Cloud Console lets users update a workflow's source and details independently using separate Source and Details tabs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets)

## Supporting Pages

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Deploy . gcloud Create a source code file for your workflow: touch workflows-awaits-callback-sheets.yaml In a text editor, copy the following workflow to your source code file: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- Use Google Apps Script , a cloud-based JavaScript platform that lets you programmatically create, read, and edit Google Workspace products, to trigger the resumption of a paused workflow whenever a request is approved through an update to the spreadsheet.
- Console In the Google Cloud console, go to the Workflows page: Go to Workflows On the Workflows page, select the workflows-awaits-callback-sheets workflow to go to its details page.
- In the Google Cloud console, go to the Manage resources page.

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Visualization support while editing the Workflows syntax is also available through the Google Cloud console.
- Learn how to create and update a workflow in the Google Cloud console or by using the Google Cloud CLI.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For example: Provision new tenant projects or infrastructure Turn down resources on a schedule or through event triggers Core concepts A workflow consists of a series of steps described using the Workflows syntax, and can be written in either YAML or JSON.

### "Trigger a workflow from Google Sheets \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use Google Apps Script , a cloud-based JavaScript platform that lets you programmatically create, read, and edit Google Workspace products, to trigger a workflow whenever a request is approved through an update to the spreadsheet.
- In the Google Cloud console, go to the Manage resources page.
- In the workflow editor, enter the following definition for your workflow: main : params : [ input ] steps : - init : assign : - projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - zone : ${input.zone} - machineType : ${input.machineType} - diskSize : ${input.diskSize} - imageProject : ${input.imageProject} - imageFamily : ${input.imageFamily} - vmName : ${input.vmName} - email : ${input.email} - createResource : call : googleapis.compute.v1.instances.insert args : project : ${projectId} zone : ${zone} body : name : ${vmName} machineType : ${"projects/" + projectId + "/zones/" + zone + "/machineTypes/" + machineType} disks : - initializeParams : diskSizeGb : ${diskSize} sourceImage : ${"projects/" + imageProject + "/global/images/family/" + imageFamily} type : PERSISTENT boot : true autoDelete : true networkInterfaces : - network : "global/networks/default" result : insertResult - retStep : return : ${insertResult} Click Deploy . gcloud Create a source code file for your workflow: touch create-vm-from-form.yaml In a text editor, copy the following workflow to your source code file: main : params : [ input ] steps : - init : assign : - projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - zone : ${input.zone} - machineType : ${input.machineType} - diskSize : ${input.diskSize} - imageProject : ${input.imageProject} - imageFamily : ${input.imageFamily} - vmName : ${input.vmName} - email : ${input.email} - createResource : call : googleapis.compute.v1.instances.insert args : project : ${projectId} zone : ${zone} body : name : ${vmName} machineType : ${"projects/" + projectId + "/zones/" + zone + "/machineTypes/" + machineType} disks : - initializeParams : diskSizeGb : ${diskSize} sourceImage : ${"projects/" + imageProject + "/global/images/family/" + imageFamily} type : PERSISTENT boot : true autoDelete : true networkInterfaces : - network : "global/networks/default" result : insertResult - retStep : return : ${insertResult} Deploy the workflow by entering the following command: gcloud workflows deploy create-vm-from-form \ --source = create-vm-from-form.yaml \ --location = us-central1 \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com Replace PROJECT NUMBER with your Google Cloud project number.
- Replace any code in the script editor with the following code which reads the data in your spreadsheet and passes it along as input to a workflow execution: const PROJECT ID = "your-project-id" ; const REGION = "us-central1" ; const WORKFLOW = "create-vm-from-form" ; function handleEdit ( e ) { var range = e . range . getA1Notation (); var sheet = e . source ; if ( range . length > 1 && range [ 0 ] === ' H ' ) { if ( e . value == "TRUE" ) { Logger . log ( "Approved checkbox: true" ); var row = range . slice ( 1 ) var email = sheet . getRange ( ' B ' + row ). getCell ( 1 , 1 ). getValue () var vmName = sheet . getRange ( ' c ' + row ). getCell ( 1 , 1 ). getValue () var zone = sheet . getRange ( ' D ' + row ). getCell ( 1 , 1 ). getValue () var machineType = sheet . getRange ( ' E ' + row ). getCell ( 1 , 1 ). getValue () var diskSize = sheet . getRange ( ' F ' + row ). getCell ( 1 , 1 ). getValue () var imageFamily = sheet . getRange ( ' G ' + row ). getCell ( 1 , 1 ). getValue () var imageProject = imageFamily . substring ( 0 , imageFamily . indexOf ( ' - ' )) + "-cloud" const executionPayload = { "argument" : "{\" diskSize \ ": \"" + diskSize + " \ ", \" email \ ": \"" + email + " \ ", \" imageFamily \ ": \"" + imageFamily + " \ ", \" imageProject \ ": \"" + imageProject + " \ ", \" machineType \ ": \"" + machineType + " \ ", \" vmName \ ": \"" + vmName + " \ ", \" zone \ ": \"" + zone + " \ "}" }; approve ( executionPayload ); } else { Logger . log ( "Approved checkbox: false" ); } } } function approve ( executionPayload ) { const headers = { "Authorization" : "Bearer " + ScriptApp . getOAuthToken () }; const params = { "method" : ' post ' , "contentType" : ' application / json ' , "headers" : headers , "payload" : JSON . stringify ( executionPayload ) }; const url = "https://workflowexecutions.googleapis.com/v1/projects/" + PROJECT ID + "/locations/" + REGION + "/workflows/" + WORKFLOW + "/executions" ; Logger . log ( "Workflow execution request to " + url ); var response = UrlFetchApp . fetch ( url , params ); Logger . log ( response ); } Replace your-project-id with your Google Cloud project ID.

