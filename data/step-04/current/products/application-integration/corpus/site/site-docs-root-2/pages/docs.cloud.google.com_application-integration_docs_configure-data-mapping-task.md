---
title: "Data Mapping task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task
  title: "Data Mapping task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Data Mapping task
The Data Mapping task lets you perform variable assignments in your integration,
get and set properties of json objects, and apply nested transform functions to values.
The variables can be integration variables or
task variables.
For example, you can assign values from an integration variable X
to a task variable Y or from a task variable Y to an integration
variable X . For more information about variables in Application Integration,
see Using variables
in Application Integration .
Configure the Data Mapping task
To configure a Data Mapping task, perform the following steps:
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
Click and place the Data Mapping element in the integration editor.
Click the Data Mapping element on the designer to view the Data Mapping task
configuration pane.
Click Open Data Mapping Editor to view the default values of the task and to add a new mapping.
For detailed steps about adding a mapping, see Add a mapping .
For more information about the data mapping editor layout, see
Data mapping overview .
Add a mapping
To add a mapping, perform the following steps:
In the Data Mapping task configuration pane, click Open Data Mapping Editor .
Configure the mapping Input :
Input : Source of the data mapping input. Source can be a literal value, a base function, or an input variable, with mapping functions.
Drag a variable or its subfield from the Variables list into the Input row. To view the available subfields of a variable, click
expand_more
(Expand) next to that variable in the Variables list.
Alternatively, In the Input row, click Variable or Value and do the following:
Select Variable to search and use an existing variable.
To create a new variable, click + Add new variable , and enter
the name and data type of the new variable.
Select Value to enter a literal value of type string , integer , double ,
or Boolean ).
Select Function to search and use a base function.
A base function is used to retrieve or generate values during the execution of an integration. For example, generating a random UUID or retrieving the current integration region. For information about the supported base functions, see Supported base functions .
Click Save .
Click + (Add a function) on any input variable, value, or base function in the Input row to add a mapping function from the list of available mapping functions. A mapping function can have one or more parameters. Each parameter can further have a value, a variable, or a base function followed by a chain of mapping functions.
To add a nested function, click + (Add a function) next to the parameter of the function. Similarly, to remove or delete the most recently added function, click - (Delete previous function) .
To add, remove, or change a function in-between a mapping expression, click on a function and select Add Function , Remove Function , or Change Function respectively from the drop-down menu.
To know more about mapping functions, see mapping functions .
For information about the supported mapping functions, see Supported data types and mapping functions .
To remove a variable inside a mapping expression, click
cancel
(Remove) next to the variable row.
To remove the entire Input row, click
clear (Clear) on the row.
Configure the mapping Output :
Output : Target variable for the data mapping output. Target variables can be used for mapping in subsequent input rows.
Drag a variable from the Variables list into the Output row. If the variable is not
available, then click create a new one to configure the name and data type of the new variable. Optionally,
you can click the output variable and select whether to use that variable as an output of the integration, or as an input to another integration.
To remove the output variable, click
clear (Clear) .
(Optional) To delete a mapping row, click delete (Delete this mapping) .
Close the Data Mapping Editor once your mapping is complete. Any changes will be autosaved.
The completed data mapping is available to view from the Data Mapping task configuration pane, as shown in the following image:
Supported data types and mapping functions
Application Integration supports the following data types for variables in the Data Mapping task:
String and String array
Integer and Integer array
Double and Double array
Boolean and Boolean array
JSON
The following table lists the data mapping functions available for each of the data types.
Data type
Supported mapping functions
Boolean
AND ,
EQUALS ,
NAND ,
NOR ,
NOT ,
OR ,
TO_JSON ,
TO_STRING ,
XNOR ,
XOR
Boolean array
APPEND ,
APPEND_ALL ,
CONTAINS ,
FILTER ,
FOR_EACH ,
GET ,
REMOVE ,
REMOVE_AT ,
SET ,
SIZE ,
TO_JSON ,
TO_SET
Double
ADD ,
DIVIDE ,
CEIL ,
EQUALS ,
EXPONENT ,
GREATER_THAN ,
GREATER_THAN_EQUAL_TO ,
FLOOR ,
LESS_THAN ,
LESS_THAN_EQUAL_TO ,
MOD ,
MULTIPLY ,
ROUND ,
SUBTRACT ,
TO_JSON ,
TO_STRING
Double array
APPEND ,
APPEND_ALL ,
AVG ,
CONTAINS ,
FILTER ,
FOR_EACH ,
GET ,
MAX ,
MIN ,
REMOVE ,
REMOVE_AT ,
SET ,
SIZE ,
SUM ,
TO_JSON ,
TO_SET
Integer
ADD ,
DIVIDE ,
EPOCH_TO_HUMAN_READABLE_TIME ,
EQUALS ,
EXPONENT ,
GREATER_THAN ,
GREATER_THAN_EQUAL_TO ,
LESS_THAN ,
LESS_THAN_EQUAL_TO ,
MOD ,
MULTIPLY ,
SUBTRACT ,
TO_DOUBLE ,
TO_JSON ,
TO_STRING
Integer array
APPEND ,
APPEND_ALL ,
AVG ,
CONTAINS ,
FILTER ,
FOR_EACH ,
GET ,
MAX ,
MIN ,
REMOVE ,
REMOVE_AT ,
SET ,
SIZE ,
SUM ,
TO_JSON ,
TO_SET
JSON
APPEND_ELEMENT ,
FLATTEN ,
FILTER ,
FOR_EACH ,
GET_ELEMENT ,
GET_PROPERTY ,
MERGE ,
REMOVE_PROPERTY ,
RESOLVE_TEMPLATE ,
SET_PROPERTY,
SIZE ,
TO_BOOLEAN ,
TO_BOOLEAN_ARRAY ,
TO_DOUBLE ,
TO_DOUBLE_ARRAY ,
TO_INT ,
TO_INT_ARRAY ,
TO_STRING ,
TO_STRING_ARRAY
String
CONCAT ,
CONTAINS ,
DECODE_BASE64_STRING ,
EQUALS ,
EQUALS_IGNORE_CASE ,
LENGTH ,
REPLACE_ALL ,
RESOLVE_TEMPLATE ,
SPLIT ,
SUBSTRING ,
TO_BASE_64 ,
TO_BOOLEAN ,
TO_DOUBLE ,
TO_INT ,
TO_JSON ,
TO_LOWERCASE ,
TO_UPPERCASE
String array
APPEND ,
APPEND_ALL ,
CONTAINS ,
FILTER ,
FOR_EACH ,
GET ,
REMOVE ,
REMOVE_AT ,
SET ,
SIZE ,
TO_JSON ,
TO_SET
For more information about each of the data mapping functions, see
Data Mapping Functions Reference .
Supported base functions
The following table lists the data mapping base functions available:
Data type
Supported base functions
Integer
NOW_IN_MILLIS
Integer array
INT_LIST
String
GENERATE_UUID ,
GET_EXECUTION_ID ,
GET_INTEGRATION_NAME ,
GET_INTEGRATION_REGION ,
GET_PROJECT_ID
For more information about each of the data mapping base functions, see
Data Mapping Functions Reference .
Best practices
Using the Data Mapping task can be a powerful way to transform and pass
key variables to various tasks in your integration. Here are a few tips to keep in mind as you build your
integration:
Mappings are run in sequence from top to bottom. That is, if input variable
A is mapped to an output variable B in the first row, the variable
B is available for mapping in the subsequent rows.
In each row, the data type of the Input row must match the data type of the Output row.
To cast between types, use transformation functions such as TO_STRING and TO_INT .
There are no limitations on the length of transformation chaining. However, debugging large chained transformations
can be difficult. We recommend keeping input transformations readable and splitting complex transformations into multiple mappings.
If a mapping requires a fallback value, set a fallback value for the mapping. If you do not provide a fallback value, the
mapping returns an error when the input value or transformation returns null .
When deleting a variable, make sure to delete any mapping that contains it.
For information about the usage limits that apply to the Data Mapping task, see Usage limits .
Considerations
For JSON variables, based on a JSON schema, Application Integration interprets the child property of the variable as a JSON type in the following cases:
If the child property's type specifies null. For example:
{
"properties" : {
"PersonID" : {
"type" : [
"double" ,
"null"
],
"readOnly" : false
}
}
}
If the child property's type specifies multiple data types. For example:
{
"properties" : {
"PersonID" : {
"type" : [
"integer" ,
"string" ,
"number"
],
"readOnly" : false
}
}
}
In these cases, using the data mapping functions, you must explicitly convert the child variables to the desired type.
The following examples illustrate the various types of property declarations and show how to use the data mapping functions to get the desired type:
Example 1
{
"type" : "object" ,
"properties" : {
"dbIntegers" : {
"type" : "array" ,
"items" : {
"type" : [
"integer" ,
"null"
]
}
},
"dbBooleans" : {
"type" : [
"array"
],
"items" : {
"type" : "boolean"
}
}
}
}
Application Integration interprets dbIntegers as a JSON type, and dbBooleans as a BOOLEAN_ARRAY type.
To convert dbIntegers use:
dbIntegers. TO_INT_ARRAY()
Example 2
{
"type" : "object" ,
"properties" : {
"dbId" : {
"type" : [
"number" ,
"null"
],
"readOnly" : false
},
"dbStatus" : {
"type" : [
"boolean" ,
"null"
],
"readOnly" : false
}
}
}
Application Integration recognises both dbId and dbStatus as JSON types, but dbId is a parameter that can take a single double value or a null value, and dbStatus is a parameter that can take a single boolean value or a null value.
To convert dbId and dbStatus use:
dbId. TO_DOUBLE()
dbStatus. TO_BOOLEAN()
Example 3
{
"type" : "object" ,
"properties" : {
"dbString" : {
"type" : [
"string"
],
"readOnly" : false
}
}
}
Application Integration recognises dbString as a string type.
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about all tasks and triggers .
Learn about Data Mapping task functions
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
