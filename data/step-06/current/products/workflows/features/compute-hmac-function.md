---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.504Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "compute_hmac function"
feature_slug: "compute-hmac-function"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
  - "https://docs.cloud.google.com/workflows/docs/best-practice"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
keywords:
  - "hmac"
  - "computes"
  - "hashing"
  - "values"
  - "common"
  - "compute"
  - "standard"
  - "library"
---

# compute_hmac function

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

This standard library function computes HMAC values using common hashing algorithms.

## Extended Definition

This standard library function computes HMAC values using common hashing algorithms.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Supporting Pages

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Functions compute checksum Computes checksum using a given hashing algorithm. compute hmac Computes the hash-based message authentication code (HMAC) for data given a secret key and hashing algorithm.
- Functions in() Checks whether a given key is present in a list or map. keys() Accepts an attribute of type map and returns a list of key elements in the map. len() Computes the length of value according to its type.
- Home Documentation Application development Workflows Reference Send feedback Standard library overview Stay organized with collections Save and categorize content based on your preferences.
- The Workflows standard library modules allow you to easily construct arguments for services and process responses.

### Best practices for Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- Source ID: `site-api-reference-required-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following counts as one step: - type check : return : if(get type((int("6"))) == integer, 1, 2) Key operations that count and don't count toward the maximum steps limit are categorized in the following table: Category Operation Counts as a step Data operations: Assigning, returning values Controlling flow: Jumps ( next ), switches, starting a for loop, and each iteration of a for loop Calls: Invoking sys.get env or other standard library function, another workflow, or a connector Concurrency: Spawning threads and parallel execution Error handling: Each raise , try , retry , and except block counts as a separate step, even if other operations are part of the same larger step.
- However, you should create services to do any work that is too complex for Workflows; for example, implementing reusable business logic, complex computations, or transformations that are not supported by Workflows expressions and its standard library .
- General tips Avoid hardcoding URLs Use nested steps Wrap expressions Use declarative calls Store only what you need Use subworkflows and external workflows Best practices Use Workflows connectors Run workflow steps in parallel Apply retries and the saga pattern Use callbacks to wait Orchestrate long-running jobs Containerize long-running tasks Run command-line tools from Workflows Use Terraform to create your workflow Deploy a workflow from a Git repository Optimize usage What's next Security best practices Debugging overview Troubleshoot issues Known issues for Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example variable "project id" { type = string } variable "url1" { type = string } variable "url2" { type = string } locals { env = [ "staging", "prod" ] } Define and deploy staging and production workflows resource "google workflows workflow" "multi-env-workflows" { for each = toset ( local.env ) name = "multi-env-${each.key}" project = var.project id region = "us-central1" source contents = templatefile ( "${path.module}/workflow.yaml", { url1 : "${var.url1}-${each.key}", url2 : "${var.url2}-${each.key}" }) } When variables are declared in the root module of your configuration, they can be assigned values in a number of ways.

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Deploy . gcloud Create a source code file for your workflow: touch workflows-awaits-callback-sheets.yaml In a text editor, copy the following workflow to your source code file: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- In the workflow editor, enter the following definition for your workflow: main : steps : - init : assign : Replace with your sheetId and make sure the service account for the workflow has write permissions to the sheet - sheetId : "10hieAH6b-oMeIVT AerSLNxQck14IGhgi8ign-x2x8g" - before sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here before waiting for callback from sheets"} - wait for sheets callback : call : await callback sheets args : sheetId : ${sheetId} result : await callback result - after sheets callback : call : sys.log args : severity : INFO data : ${"Execute steps here after receiving callback from sheets"} - returnResult : return : ${await callback result} await callback sheets : params : [ sheetId ] steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow id : ${sys.get env("GOOGLE CLOUD WORKFLOW ID")} - execution id : ${sys.get env("GOOGLE CLOUD WORKFLOW EXECUTION ID")} - create callback : call : events.create callback endpoint args : http callback method : POST result : callback details - save callback to sheets : call : googleapis.sheets.v4.spreadsheets.values.append args : range : ${"Sheet1!A1:G1"} spreadsheetId : ${sheetId} valueInputOption : RAW body : majorDimension : "ROWS" values : - [ "${project id}" , "${location}" , "${workflow id}" , "${execution id}" , "${callback details.url}" , "" , "FALSE" ] - log and await callback : try : steps : - log await start : call : sys.log args : severity : INFO data : ${"Started waiting for callback from sheet " + sheetId} - await callback : call : events.await callback args : callback : ${callback details} timeout : 3600 result : callback request - log await stop : call : sys.log args : severity : INFO data : ${"Stopped waiting for callback from sheet " + sheetId} except : as : e steps : - log error : call : sys.log args : severity : "ERROR" text : ${"Received error " + e.message} - check null await result : switch : - condition : ${callback request == null} return : null - log await result : call : sys.log args : severity : INFO data : ${"Approved by " + callback request.http request.body.approver} - return await result : return : ${callback request.http request.body} Make sure to replace the placeholder sheetId value with your spreadsheetId .
- New projects that have enabled the Compute Engine API have this service account created with the IAM basic Editor role, and with the following email format: PROJECT NUMBER -compute@developer.gserviceaccount.com You can retrieve your project number: gcloud projects describe PROJECT ID For production environments, we strongly recommend creating a new service account and granting it one or more IAM roles that contain the minimum permissions required and follow the principle of least privilege .
- Deploy the workflow by entering the following command: gcloud workflows deploy workflows-awaits-callback-sheets \ --source = workflows-awaits-callback-sheets.yaml \ --location = us-central1 \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com Replace PROJECT NUMBER with your Google Cloud project number.

