---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.475Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Application Integration config variables"
feature_slug: "application-integration-config-variables"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-javascript-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
keywords:
  - "externalized"
  - "enabling"
  - "config"
  - "variables"
  - "supports"
---

# Application Integration config variables

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now supports config variables, enabling externalized integration configuration.

## Extended Definition

Application Integration now supports config variables, enabling externalized integration configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)

## Supporting Pages

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters: Key : EmployeeKey Value : EmployeeName The following sample script shows the usage of set and get functions to access the defined integration variables. def run ( event ): Read the integration variable EmployeeName using the reference variable EmployeeKey value = event . get ( ' EmployeeKey ' ); Change the integration variable EmployeeName value using the reference variable EmployeeKey event . set ( ' EmployeeKey ' , ' XYZ ' ); The new value of the integration variable is retained throughout the Cloud Function task. return Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Python When configuring the Cloud Function using an existing Cloud Run functions, make sure that the function's main.py , task.py , and requirements.txt source files are in the following format: task.py Sample Code: print(event.get('task string key')) event.set('task int array key', [456, 789]); event.log('some logging') def run ( event ): """Actual cloud function custom logic.
- The Cloud Function task supports the following versions of Cloud Run functions: Cloud Functions (1st gen) Cloud Run functions created using the Cloud Functions v2 API For detailed information about the differences between Cloud Run functions versions, see the Cloud Functions comparison guide.
- If neither OIDC ID profile nor user-managed service account is configured, then the default service account ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used to call the Cloud Function task.

### JavaScript task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- In the parameters field, locate the parameter named script . "taskConfigs": [{ "task": "JavaScriptTask", "taskId": 1, "parameters": { "script": { "key": "script", "value": { "stringValue": "function that is called during the JavaScriptTask execution" } }" }] In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template: "ParamName": { "key": "ParamName", "value": { "stringValue": "$ParamName$" } } To upload the integration version, make a call to the projects.locations.integrations.versions.upload method with the updated integration version file.
- In the parameters field, locate the parameter named script . "taskConfigs": [{ "task": "JavaScriptTask", "taskId": 1, "parameters": { "script": { "key": "script", "value": { "stringValue": "function that is called during the JavaScriptTask execution" } }" }] In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template: "ParamName": { "key": "ParamName", "value": { "stringValue": "$ParamName$" } } Save the changes that you made to the integration version file.
- What's next Learn about the following: Configuring JavaScript tasks with Gemini assistance All tasks and triggers Testing and publishing integrations Error handling Integration execution logs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following image shows a sample layout of the JavaScript Editor : Use the JavaScript Editor To view and edit the JavaScript Editor , go to the JavaScript task configuration pane and click Open script editor .

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .
- Considerations When including the Apps Script task in your integration design, consider the following system limitations: Maximum active deployments for an AppsScript: 50 Queries per second (QPS) for API executables: 5000/min Queries per second (QPS) for Webapp deployments: 5000/min Latency for API executables: 1.5s Latency for Webapp: 2.5s Maximum cumulative size of all the integration variables in an AppsScript: 15 MB Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- The AppsScriptTask library provides the following methods to access integration variables: setIntegrationVariable getTaskParameter Function name Description Usage setIntegrationVariable Sets the provided value to the variable.
- Configure the Apps Script task To configure an Apps Script project in the Apps Script task, perform the following steps: In the task configuration pane, click Configure Apps Script Project.

