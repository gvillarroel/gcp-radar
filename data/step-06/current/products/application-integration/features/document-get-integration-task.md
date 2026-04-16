---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.485Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Document - Get integration task"
feature_slug: "document-get-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
keywords:
  - "document"
  - "preview"
  - "added"
  - "task"
---

# Document - Get integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Document Get integration task in preview.

## Extended Definition

Application Integration added a Document Get integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the JSON snippet of a row data to be added in a table: { "employee first name": "John", "employee emailID": "test-05@test.com" } In this example, employee first name and employee emailID are the column names with the corresponding values John and test-05@test.com . filterClause String Restricts the result of the operations based on a condition.
- To configure the Task Input or Task Output variables, click the respective variable to open the Configure Variable pane and perform the following steps: Enter the variable value in the Default Value field. (Optional) Select Use as an input to integration or Use as an output to integration .
- The dynamic authentication header should be in the following JSON format: { "task1" :{ "oauth2 auth code flow.access token" : "token value" }, "task2" :{ "oauth2 auth code flow.userename" : "username value" }} In this format, taskN corresponds to the Task ID in integrationVersion .
- Configure task input and output variables The Connectors task configuration pane displays Task Input and Task Output variables that are automatically generated based on the Entity and Operation or Action selected in the Configure connector task dialog.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.
- Configure the Data Transformer task To add a Data Transformer task to your integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note : To use an integration variable in your AppsScript, the variable must be added as a task parameter to the Apps Script task.
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .
- Considerations When including the Apps Script task in your integration design, consider the following system limitations: Maximum active deployments for an AppsScript: 50 Queries per second (QPS) for API executables: 5000/min Queries per second (QPS) for Webapp deployments: 5000/min Latency for API executables: 1.5s Latency for Webapp: 2.5s Maximum cumulative size of all the integration variables in an AppsScript: 15 MB Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Syntax: getTaskParameter(value) Example: // Read an integration variable AppsScriptTask . getTaskParameter ( ' EmployeeIDKey ' ); To view all the functions available in the AppsScriptTask library, hover over the AppsScriptTask menu item in your Apps Script editor, click More more vert > Open in a new tab .

