---
title: "JavaScript task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-javascript-task
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-javascript-task
  title: "JavaScript task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
JavaScript task
Deprecated: Effective January 24, 2025, Application Integration will no longer support Rhino as the JavaScript execution engine. All existing published JavaScript tasks will continue to use Rhino and can be migrated to V8 manually . Newly created JavaScript tasks will exclusively use V8. See JavaScript execution engine for more information.
The JavaScript task lets you write custom JavaScript code snippets for your integration.
Using the JavaScript Editor , you can code complex data mapping logic for your integration, perform variable assignments, and add or modify integration variables.
The JavaScript Editor supports the following features:
A minimap that displays a high-level overview of the script code and helps with quick navigation.
Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.
Error highlighting to find and track errors in code.
Folding to expand and collapse regions of the script code.
Click-to-copy option to copy the script code to the clipboard.
Configure the JavaScript task
To add a JavaScript task to your integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create . The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
Click and place the JavaScript element in the integration editor.
Click the JavaScript element on the designer to view the JavaScript task configuration pane.
Click Open script editor to view and edit the JavaScript Editor . You can also use Gemini to generate JavaScript code by click Script with Gemini . For information about using Gemini to generate JavaScript code, see Configure JavaScript tasks with Gemini assistance .
Write your JavaScript code inside the executesScript(event) function that is automatically created in the JavaScript Editor . Close the editor once complete, any changes will be autosaved.
Warning: Don't delete the executesScript(event) function. This function is called when the JavaScript task executes.
For information about accessing integration variables and the supported functions, see Using the JavaScript Editor .
For information about viewing the generated execution logs, see Execution logs .
The following image shows a sample layout of the JavaScript Editor :
Use the JavaScript Editor
To view and edit the JavaScript Editor , go to the JavaScript task configuration pane and click Open script editor . The JavaScript Editor by default contains a function named executesScript( event ) , where:
executesScript() : the function that is called when Application Integration executes the JavaScript task during an integration's run.
event : the in-memory object of Application Integration.
For information about the supported methods of the event object, see Access integration variables .
Warning: Don't delete the executesScript(event) function. This function is called when the JavaScript task executes.
JavaScript execution engine
Deprecated: Effective January 24, 2025, Application Integration will no longer support Rhino as the JavaScript execution engine. All existing published JavaScript tasks will continue to use Rhino and can be migrated to V8 manually . Newly created JavaScript tasks will exclusively use V8.
Application Integration previously supported Rhino as the JavaScript execution engine for running JavaScript tasks . To leverage the performance and security benefits of Google's open-source high-performance JavaScript engine, Rhino will be deprecated and all JavaScript executions will now utilize V8, Google's open-source high-performance JavaScript engine.
Benefits of V8
The V8 JavaScript engine offers the following benefits:
Performance: V8 is significantly faster than Rhino, leading to improved execution speeds for your JavaScript tasks . Scripts with large sized variables and complex computations can be executed faster.
Standards Compliance: V8 supports ECMAScript 2024, ensuring better compatibility and maintainability.
Security: V8 benefits from ongoing security updates and improvements, providing a more secure environment for your integrations.
Modern Features: V8 supports the latest JavaScript features, allowing you to leverage modern language constructs and libraries.
Migrate existing JavaScript tasks to V8
To migrate your existing JavaScript tasks running on Rhino to V8, do the following:
Identify the published integrations that contain JavaScript tasks and unpublish them.
For each JavaScript , click Open script editor from the task configuration pane.
Application Integration automatically updates the existing script to use V8.
Review and test the JavaScript code.
Publish the integrations.
Access integration variables
Variables defined in your integration can be accessed from the JavaScript Editor using the Application Integration in-memory event object.
The following methods are supported to access integration variables from your JavaScript Editor :
Function name
Description
Usage
getEventExecutionInfoId
Returns the integration's run execution ID.
Return type: String
Syntax: event.getEventExecutionInfoId()
Example:
function executeScript ( event ) {
event . getEventExecutionInfoId ();
}
getGoogleCloudProjectId
Returns the Google Cloud project ID.
Return type: String
Syntax:
event.getGoogleCloudProjectId()
Example:
function executeScript ( event ) {
event . getGcpProjectId ();
}
getIntegrationName
Returns the current name of the integration.
Return type: String
Syntax:
event.getIntegrationName
Example:
function executeScript ( event ) {
event . getIntegrationName ();
}
getParameter
Returns the value of the provided integration variable.
Return type: Data type of the integration variable
Syntax:
event.getParameter("variable_name")
Input parameter: Integration variable name. If the variable_name is an auto-generated variable, then enclose the variable in backticks ( `` ). For example, `responseBody` .
Example:
function executeScript ( event ) {
event . getParameter ( "var1" );
}
getRegion
Returns the name of the integration region.
Return type: String
Syntax:
event.getRegion()
Example:
function executeScript ( event ) {
event . getRegion ();
}
log
Writes the specified value to the execution logs.
For information about viewing the generated execution logs, see Execution logs .
Syntax:
event.log(value)
Input parameter: Any variable or function that is used in the script.
Example 1:
function executeScript ( event ) {
event . log ( event . getParameter ( "var1" ));
}
Example 2:
function executeScript ( event ) {
event . log ( "Lorem ipsum" );
}
setParameter
Sets or updates the value of an integration variable.
Syntax:
event.setParameter("variable_name", "variable_value")
Input parameter: This function takes the following arguments:
First argument: Variable name. If the variable_name is an auto-generated variable, then enclose the variable in backticks ( `` ). For example, `responseBody` .
Second argument: Value.
Example:
function executeScript ( event ) {
event . setParameter ( "`responseBody`" , "NewStringValue" );
}
Set task parameters
If your integration has multiple large sized parameters that are not used by the JavaScript task, you can set the TaskParameter field for the JavaScript task to improve performance.
To set the TaskParameter field for the JavaScript task, select one of the following options:
Console
Go to the Application Integration page.
Go to Application Integration
Select an integration. The integration editor opens.
Click more_vert Action > Download Integration > Integration Version . The integration version is downloaded as a JSON file.
Open the integration version file in an editor, and then do the following:
Locate the taskConfigs field with the task as JavaScriptTask . In the parameters field, locate the parameter named script .
"taskConfigs": [{
"task": "JavaScriptTask",
"taskId": 1,
"parameters": {
"script": {
"key": "script",
"value": {
"stringValue": "function that is called during the JavaScriptTask execution"
}
}"
}]
In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template:
"ParamName": {
"key": "ParamName",
"value": {
"stringValue": "$ParamName$"
}
}
Save the changes that you made to the integration version file.
Upload the integration version file to the integration.
API
To download the integration version, make a call to the projects.locations.integrations.versions.download method with the filFormat set to JSON .
Open the integration version file in an editor, and then do the following:
Locate the taskConfigs field with the task as JavaScriptTask . In the parameters field, locate the parameter named script .
"taskConfigs": [{
"task": "JavaScriptTask",
"taskId": 1,
"parameters": {
"script": {
"key": "script",
"value": {
"stringValue": "function that is called during the JavaScriptTask execution"
}
}"
}]
In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template:
"ParamName": {
"key": "ParamName",
"value": {
"stringValue": "$ParamName$"
}
}
To upload the integration version, make a call to the projects.locations.integrations.versions.upload method with the updated integration version file.
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about the following:
Configuring JavaScript tasks with Gemini assistance
All tasks and triggers
Testing and publishing integrations
Error handling
Integration execution logs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
