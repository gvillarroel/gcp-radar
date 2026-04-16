---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.494Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Test without publishing"
feature_slug: "test-without-publishing"
latest_feature_date: "2022-12-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "validating"
  - "without"
  - "before"
  - "running"
  - "test"
  - "publishing"
  - "allows"
---

# Test without publishing

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Test without publishing allows running and validating an integration before publishing by testing input variables and behavior.

## Extended Definition

Test without publishing allows running and validating an integration before publishing by testing input variables and behavior.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Salesforce trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prerequisite steps to use Platform events Before configuring your Application Integration trigger to use Platform events, complete the following steps in Salesforce: Create a Platform Event Update permissions for the Platform Event Create a Platform event To create a Platform event, perform the following steps: Log in to your Salesforce instance with your sysadmin credentials.
- The following steps must be completed before configuring any Salesforce-related task or trigger in Application Integration: Set up an integration user Configure a permission set Set up a security token Create a connected app Note : To complete these steps, system administration access to your Salesforce instance is required.
- Before you begin This section outlines the steps required to connect and configure a Salesforce instance to use Change Data Capture (CDC) or Platform events to stream changes to your Application Integration in a pub/sub manner.
- Prerequisite steps to use CDC events Before configuring your Application Integration trigger to use CDC events, make sure to add a configured object to CDC in Salesforce: Log in to Salesforce as a sysadmin .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Verify and validate the integration (including the variables) before running it.
- The following diagram shows the Create an integration with Gemini pane with the suggestions provided by Gemini: Use the navigate before Previous and navigate next Next buttons to view the suggestions provided.
- You can leverage these recommendations to directly replace your existing tasks or modify them without the need of going through any manual configuration process.
- You can leverage these recommendations to directly replace your existing tasks or modify them without the need of going through any manual configuration process.

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Test your Apps Script Before publishing your integration, you can test your script using the testRun function available in the Test.gs file.
- The following sample shows the usage of AppsScriptTaskTest library functions. function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'myCustomTest' ); // Add a task parameter that references an integration variable with the value 5 AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , 'input' , '$input$' , 5 ); // Add a task parameter that references an integration variable AppsScriptTaskTest . createReference ( req , 'output' , '$output$' ); // Run the task ( assuming the task increments the input by 1 ) and get the response let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariable ( res , 'output' , true ); AppsScriptTaskTest . containsIntegrationVariable ( res , 'someOtherIntegrtionVariable' , false ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , 'output' , 6 ); } The following sample shows you how to access JSON and array variables in the testRun method: function testRun (){ // Create a new request let req = AppsScriptTaskTest . createNewTestRequest ( 'json-test' ); // Add a task parameter that references a JSON integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "emp" , "employee" , { name : "snape" , age : 35 }); // Add a task parameter that references an array integration variable AppsScriptTaskTest . setIntegrationVariableAndCreateReference ( req , "arr" , "array" , [ "A" , "B" , "C" ]); // Run the task and get the response // Assume that the run method increases the age of the employee by 5 and appends a new element in the array let res = AppsScriptTaskTest . runTest ( req , executeScript ); // Check the response for the expected integration variable and its corresponding values AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "employee" , { name : "snape" , age : 40 }); AppsScriptTaskTest . containsIntegrationVariable ( res , "array" , true ); AppsScriptTaskTest . containsIntegrationVariableWithValue ( res , "array" , [ "A" , "B" , "C" , "D" ]); } After running the test cases, you can view the assertions in the Execution log .
- Before you begin Before using the Apps Script task, make sure you complete the following steps: Enable AppsScript API Create OAuth 2.0 Client ID Set up an authentication profile Ensure that VPC Service Controls is NOT setup for Application Integration in your Google Cloud project.
- To view all the functions available in the AppsScriptTaskTest library, hover over the AppsScriptTaskTest menu item in your Apps Script editor, click More more vert > Open in a new tab .

