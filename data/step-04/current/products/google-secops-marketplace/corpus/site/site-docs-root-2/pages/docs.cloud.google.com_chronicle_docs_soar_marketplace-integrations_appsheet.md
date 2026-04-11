---
title: "Integrate AppSheet with Google SecOps \_|\_ Google Security Operations \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/appsheet
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/appsheet
  title: "Integrate AppSheet with Google SecOps \_|\_ Google Security Operations \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Integrate AppSheet with
Google SecOps
This document explains how to integrate AppSheet with
Google Security Operations (Google SecOps).
Use Cases
Perform CRUD actions.
Integration parameters
Use the following parameters to configure the integration:
Parameter name
Type
Default value
Is mandatory
Description
API Root
String
https://api.appsheet.com
Yes
API root of the AppSheet instance.
App ID
String
N/A
Yes
ID of the AppSheet application.
Access Token
Password
N/A
Yes
Access Token of the AppSheet application.
Verify SSL
Checkbox
Checked
Yes
If selected, the integration validates the SSL certificate when connecting to
the AppSheet server.
For instructions about how to configure an integration in
Google SecOps, see Configure
integrations .
You can make changes at a later stage, if needed. After you configure an
integration instance, you can use it in playbooks. For more information about
how to configure and support multiple instances, see Supporting
multiple instances .
Actions
For more information about actions, see
Respond to pending actions from Your Workdesk and Perform a
manual action .
Add Record
Add a record to a table in AppSheet.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Table Name
String
N/A
Yes
Specify the name of the table to which you want to add a new record.
Record JSON Object
JSON
Yes
Specify the JSON object of the record that needs to be added.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If data is available (is_success = true): "Successfully added new record in table "{table}" in AppSheet.
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Add Record". Reason: {0}''.format(error.Stacktrace)
If no data in response: "Error executing action "Add Record". Reason: Invalid payload was provided. Please check the spelling of Table Name and structure of the JSON object of the record.'
If "Message" in the response: "Error executing action "Add Record". Reason: {0}''.format(Message)
Invalid JSON object: Error executing action "Add Record". Reason: Invalid JSON object provided. Please check the structure.
General
Delete Record
Delete a record in a table in AppSheet.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Table Name
String
N/A
Yes
Specify the name of the table in which you want to delete a record.
Record JSON Object
JSON
Yes
Specify the JSON object of the record that needs to be deleted. You only need to provide the unique identifier key of the record.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If data is available (is_success = true): "Successfully deleted record in table "{table}" in AppSheet.
If status code 200, but rowNumber is null (is_success=true): Provided record didn't exist in table "{table}" in AppSheet.
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Delete Record". Reason: {0}''.format(error.Stacktrace)
If no data in response: "Error executing action "Delete Record". Reason: Invalid payload was provided. Please check the spelling of Table Name and structure of the JSON object of the record.'
If "Message" in the response: "Error executing action "Delete Record". Reason: {0}''.format(Message)
Error executing action "Delete Record". Reason: Invalid JSON object provided. Please check the structure.
General
List Tables
List available tables in an app in AppSheet.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Filter Logic
DDL
Equal
Possible values:
Equal
Contains
No
Specify what filter logic should be applied.
Filter Value
String
N/A
No
Specify what value should be used in the filter. If "Equal" is selected, action will try to find the exact match among items and if "Contains" is selected, action will try to find items that contain that substring. If nothing is provided in this parameter, the filter will not be applied.
Max Tables To Return
Integer
50
No
Specify how many tables to return. Default: 50.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
JSON result
{
"Tables" : [
{
"name" : "Hash identificiation" ,
"id" : "Hash identificiation"
}
]
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If found results (is_success = true): "Successfully found tables for the provided criteria in AppSheet.
If not found results (is_success = true): "No tables were found for the provided criteria in AppSheet.
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Tables". Reason: {0}''.format(error.Stacktrace)
General
Case Wall Table
Name: Available Tables
Columns:
ID
Name
General
Ping
Test the connectivity to AppSheet.
Parameters
None.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successful: "Successfully connected to the AppSheet server with the provided connection parameters!"
The action should fail and stop a playbook execution:
If not successful: "Failed to connect to the AppSheet server! Error is {0}".format(exception.stacktrace)
General
Search Records
Search records in a table in AppSheet.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Table Name
String
N/A
Yes
Specify the name of the table for which you want to retrieve details.
Selector Query
String
N/A
No
Specify the selector query, which will be used to limit results. If nothing is provided, action will return all records.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If data is available (is_success = true): "Successfully retrieved records based on the provided criteria from table "{table}" in AppSheet.
If no data is available (is_success=false): No records were found based on the provided criteria in table "{table}" in AppSheet.
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Search Records". Reason: {0}''.format(error.Stacktrace)
If "Message" in the response: "Error executing action "Search Records". Reason: {0}''.format(Message)
General
Case Wall Table
Name: Records
General
Update Record
Update a record in a table in AppSheet.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Table Name
String
N/A
Yes
Specify the name of the table in which you want to update a record.
Record JSON Object
JSON
Yes
Specify the JSON object of the record that needs to be updated. You need to provide the unique identifier key and fields that you want to update.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If data is available (is_success = true): "Successfully updated record in table "{table}" in AppSheet.
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to server, other: "Error executing action "Update Record". Reason: {0}''.format(error.Stacktrace)
If no data in response: "Error executing action "Update Record". Reason: Invalid payload was provided. Please check the spelling of Table Name and structure of the JSON object of the record.'
If "Message" in the response: "Error executing action "Update Record". Reason: {0}''.format(Message)
Error executing action "Update Record". Reason: Invalid JSON object provided. Please check the structure.
General
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
