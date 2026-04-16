---
title: "Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task
  title: "Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Data Transformer task
Preview
— BigQuery Connector
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Data Transformer task provides two modes– Diagram and Script –to transform your data. In the Diagram mode, you use a visual mapping canvas, called the Data Transformer editor, to perform data assignments and mappings in your integration. In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration. In the Script mode, you can write, edit, and evaluate custom Jsonnet templates to perform data mapping in your integration.
For information about data mapping in Application Integration, see Data mapping overview .
Configure the Data Transformer task
To add a Data Transformer task to your integration, perform the following steps:
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
Click and place the Data Transformer element in the integration editor.
Click the Data Transformer element to view the task configuration pane.
Click Open Data Transformer editor . In the Data Transformer (preview) Task Editor page, select one of the following options:
By default, the Diagram mode opens. The Diagram mode
provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor.
In the Diagram mode, you can visually perform data mapping between input and output variables.
To perform data transformations in your integration by writing, editing, and evaluating custom Jsonnet templates, go to the script mode by clicking Script . You can use the Script mode if you have complex data transformation requirements and if you want to leverage Jsonnet functions.
The Data Transformer editor appears displaying a default commented Jsonnet template example. Write your Jsonnet code and close the editor once complete. Any changes will be autosaved.
For detailed steps about adding a mapping, see Add a mapping .
Add a mapping
To add a mapping, you can either use the Diagram mode or the Script mode.
Use the Diagram mode
The Diagram mode provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor. To add mapping using the Diagram mode, follow these steps:
In the Data Transformer task configuration pane, click Open Data Transformer Editor .
By default, the Diagram mode is open.
To add the input variable for mapping, click + Add input . The Choose Input Variable or Value dialog appears. The Variable tab is selected by default.
Input : Source of the data transformation input. Source can be a literal value, a base function, or an input variable, with mapping functions.
Then, do the following:
From the Select Variable(s) list, select the input variable(s). If you want to create a new variable , click + Add New Variable .
Click Submit .
Optionally, if you want to add a constant, click the Constant tab.
Unlike variables, constants are not accessible to other tasks or triggers in your integration and are only limited to be used in the Data Transformation task where these are created. For example, you can use constants to add delimiters or to map a constant value to a variable.
Then, do the following:
In the Constant identifier field, enter the name of the constant.
From the Data Type list, select from one of the following data types:
String
Boolean
Number
In the Enter the constant value field, enter the value.
Click Submit .
To add the output variable for mapping, click + Add Output and select the output variable or create a new variable .
Configure the mapping:
Add a mapping from a variable or its subfield from the Variables list in the Input section to the variable or its subfield from the Variables list in the Output section.
To add a transformation function, hover over the mapping line and click settings to add the data transformation function. The Transformation button appears on the canvas.
Alternatively, you can click settings Add transformation to add the transformation function.
Then, do the following:
To add the transformation, click the Transformation button. The Transformation panel appears.
Then, do the following:
Click + Add Operation . The Add Operation dialog appears.
In the Search operations field, enter the operation that you want to add. Alternatively, you can select the operation from the list of operations.
If you want to add a custom operation, select Function expression and enter the function expression. To copy the variables, click content_copy from the Variables list and paste it in the expression editor.
Click Done .
Based on the operation, fill the required details. Optionally, you can add multiple operations in a transformation. If you want to choose the result of the previous operation in the succeeding operation, select the Previous Operation Result variable as shown in the following image:
To remove the operation, click
delete
Delete next to the operation.
Optionally, you can add mapping from multiple input variables to a transformation function. However, only one mapping can be added for each output variable from a transformation function.
To remove the input and output variables, click
more_vert > Delete .
Optionally, to delete a mapping row or a transformation, select the mapping and press Delete .
Close the Data Mapping Editor once your mapping is complete. Any changes will be autosaved.
Example: Mapping an old bug ticketing system to a new ticket system
Suppose you have a legacy bug ticketing system that you want to migrate to a new ticket system. You can use the Diagram option to map the fields from the old to the new system as shown in the following image:
To add a constant value for one of the fields, click Add input and add a new constant. You can map the newly added constant from the Input section to the field in the Output section.
To add the transformation for fields that cannot be mapped directly, click settings Transformation and add the transformation operation by clicking + Add operation :
After the transformation is complete, you can execute the integration to map the old ticketing system to the new system.
Use the Script mode
You can use the Data Transformer Script editor to access the integration variables, perform variable assignments, and add or modify variables in your integration. The Data Transformer Script editor provides the following features to enrich your scripting experience:
Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.
A minimap that displays a high-level overview of the script code and helps with quick navigation.
Click-to-copy option to copy the script code to the clipboard.
To open the editor, go to the Data Transformer Script task configuration pane and click Open Data Transformer Script Editor .
The Data Transformer Script editor by default imports functions , a predefined custom library containing a set of Jsonnet functions for data mapping in Application Integration. For details of the available custom functions, see Data Transformer functions .
The following image shows the sample layout of the Data Transformer Script editor :
Access integration variables
To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.
Caution: Jsonnet doesn't allow using hyphens (-) as part of an identifier name. For example, a variable name or a function name. If you want to use a hyphen (-) as part of a variable name, the variable must be declared within double quotes as shown in the following example.
Example: Read and update existing integration variables using the Data Transformer Script editor.
Jsonnet script
local f = impor t "functions" ; // Import predefined Data Transformer function library
local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello"
local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World"
{
Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar"
"output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var"
}
Output
Jsonnet usage reference
Jsonnet is a purely functional language and its programs are composed of expressions. For information about how to form these expressions, see Jsonnet Expressions .
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
Quotas and limits
For information about the usage limits that apply to the Data Transformer task, see Usage limits .
What's next
Learn about the following:
All tasks and triggers .
Data Transformer functions ( Preview )
Testing and publishing integrations .
Error handling .
Integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
