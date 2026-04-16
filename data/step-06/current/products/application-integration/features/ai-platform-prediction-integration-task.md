---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.484Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "AI Platform - Prediction integration task"
feature_slug: "ai-platform-prediction-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
keywords:
  - "prediction"
  - "platform"
  - "predict"
  - "added"
  - "task"
---

# AI Platform - Prediction integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

A new AI Platform Predict integration task was added in preview for invoking prediction operations.

## Extended Definition

A new AI Platform Predict integration task was added in preview for invoking prediction operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)

## Supporting Pages

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Note : To use an integration variable in your AppsScript, the variable must be added as a task parameter to the Apps Script task.
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .
- Considerations When including the Apps Script task in your integration design, consider the following system limitations: Maximum active deployments for an AppsScript: 50 Queries per second (QPS) for API executables: 5000/min Queries per second (QPS) for Webapp deployments: 5000/min Latency for API executables: 1.5s Latency for Webapp: 2.5s Maximum cumulative size of all the integration variables in an AppsScript: 15 MB Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Syntax: getTaskParameter(value) Example: // Read an integration variable AppsScriptTask . getTaskParameter ( ' EmployeeIDKey ' ); To view all the functions available in the AppsScriptTask library, hover over the AppsScriptTask menu item in your Apps Script editor, click More more vert > Open in a new tab .

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Args: event : event object in main.py that contains all parameters. """ return main.py """Un-editable platform wrapper which invokes user code.""" import traceback from flask import json from flask import jsonify from task import run VALUE NAME = [ 'stringValue' , 'intValue' , 'doubleValue' , 'booleanValue' , 'protoValue' ] ARRAY VALUE NAME = { 'stringArray' : 'stringValues' , 'intArray' : 'intValues' , 'doubleArray' : 'doubleValues' , 'booleanArray' : 'booleanValues' , 'protoArray' : 'protoValues' } VALUE TYPE URL = 'type.googleapis.com/google.protobuf.Value' CLOUD FUNCTION EXCEPTION KEY = 'CloudFunctionException' CLOUD FUNCTION LOGGING KEY = 'CloudFunctionLogging' class Event ( object ): """Event object.""" def init ( self , json payload ): self . event params = json payload . get ( 'eventParameters' , dict ()) self . task params = json payload . get ( 'taskParameters' , dict ()) self . log = [] print ( 'Event param is ' + str ( self . event params )) print ( 'Task param is ' + str ( self . task params )) def set ( self , key , value ): """Set the event parameters key-value.
- For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters: Key : EmployeeKey Value : EmployeeName The following sample script shows the usage of set and get functions to access the defined integration variables. def run ( event ): Read the integration variable EmployeeName using the reference variable EmployeeKey value = event . get ( ' EmployeeKey ' ); Change the integration variable EmployeeName value using the reference variable EmployeeKey event . set ( ' EmployeeKey ' , ' XYZ ' ); The new value of the integration variable is retained throughout the Cloud Function task. return Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Returns: Parameter. """ param = self . get param by key from params ( key , self . task params ) if param is None : return self . get param by key from params ( key , self . event params ) value = self . get param value ( param ) if isinstance ( value , str ) and len ( value ) > 2 and value . startswith ( '$' ) and value . endswith ( '$' ): return self . get param by key from params ( value [ 1 : - 1 ], self . event params ) return param def get param by key from params ( self , key , params ): """Get the parameter for specified key from event parameters.
- Python When configuring the Cloud Function using an existing Cloud Run functions, make sure that the function's main.py , task.py , and requirements.txt source files are in the following format: task.py Sample Code: print(event.get('task string key')) event.set('task int array key', [456, 789]); event.log('some logging') def run ( event ): """Actual cloud function custom logic.

