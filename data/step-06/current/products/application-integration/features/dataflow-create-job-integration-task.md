---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.484Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Dataflow - Create Job integration task"
feature_slug: "dataflow-create-job-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
keywords:
  - "dataflow"
  - "create"
  - "preview"
  - "added"
  - "task"
---

# Dataflow - Create Job integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Dataflow Create Job integration task in preview.

## Extended Definition

Application Integration added a Dataflow Create Job integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unlike variables, constants are not accessible to other tasks or triggers in your integration and are only limited to be used in the Data Transformation task where these are created.
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Add a Connector task Create new connection To create a new connection from Application Integration, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- If you want to use an integration variable, you must first configure a Data Mapping task to create a mapping between the integration variable and the filter clause.
- Action: Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .
- Inline connection creation You can use the Connectors task to directly create a new connection in Integration Connectors .

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .
- Before you begin Before using the Apps Script task, make sure you complete the following steps: Enable AppsScript API Create OAuth 2.0 Client ID Set up an authentication profile Ensure that VPC Service Controls is NOT setup for Application Integration in your Google Cloud project.
- Note : To use an integration variable in your AppsScript, the variable must be added as a task parameter to the Apps Script task.
- Create an authentication profile Click the Apps Script element on the designer to view the Apps Script task configuration pane.

