---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.486Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Drive - List integration task"
feature_slug: "drive-list-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
keywords:
  - "listing"
  - "drive"
  - "list"
  - "preview"
  - "added"
  - "task"
---

# Drive - List integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Drive List integration task in preview for listing Drive resources.

## Extended Definition

Application Integration added a Drive List integration task in preview for listing Drive resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
- The Integrations page appears listing all the integrations available in the Google Cloud project.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure JavaScript tasks Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The Integrations page appears listing all the integrations available in the Google Cloud project.
- The Integrations page appears listing all the integrations available in the Google Cloud project.

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note : To use an integration variable in your AppsScript, the variable must be added as a task parameter to the Apps Script task.
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
- The Integrations page appears listing all the integrations available in the Google Cloud project.
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .

