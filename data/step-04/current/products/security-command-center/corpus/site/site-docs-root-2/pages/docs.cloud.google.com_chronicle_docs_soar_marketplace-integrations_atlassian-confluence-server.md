---
title: "Integrate Atlassian Confluence Server with Google SecOps \_|\_ Google Security\
  \ Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server
  title: "Integrate Atlassian Confluence Server with Google SecOps \_|\_ Google Security\
    \ Operations \_|\_ Google Cloud Documentation"
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
Integrate Atlassian Confluence Server with
Google SecOps
This document describes how to integrate Atlassian Confluence Server with
Google Security Operations (Google SecOps).
Prerequisites
To authenticate to the Confluence Server, choose any of the following options:
The username and password for a dedicated account.
The personal access token (PAT).
If both authentication options are provided for the integration, PAT takes
priority over the username and password.
Note: Personal access token is supported by the Confluence Server version 7.9
and later.
Authentication based on username and password requires creating a dedicated
account that will be used for the integration.
Authentication based on the access token requires configuring account
permissions. When created, the new PAT will correspond to the current permission
level of the account.
To create a token, follow these steps:
In Confluence, go to Account > Account settings > Personal access tokens .
Select Create token .
Name the token you're creating.
(Optional) For additional security, you can configure your token to automatically
expire after a set number of days.
Click Create .
Integration parameters
The integration requires the following parameters:
Parameter name
Type
Default Value
Is mandatory
Description
Api Root
String
https://ip_address
True
Specify Confluence Server Api Root to connect to.
Username
String
N/A
False
Specify a username to use for the connection. Integration supports authentication on either username + password or a personal access token.
Password
Password
N/A
False
Specify a password to use for the connection. Integration supports authentication on either username + password or a personal access token.
Personal Access Token
Password
N/A
False
Specify a token to use for the connection. Integration supports authentication on either username + password or a personal access token.
Verify SSL
Checkbox
Checkbox Checked
False
If enabled, the certificate configured for the API root is validated.
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
Ping
Test the connectivity.
Parameters
N/A
Run on
The action is not running on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success:False
If the action is successful (there is a json in the response and the server response is
200), is_success should be set to True . Otherwise, False .
Case wall
Result type
Value/Description
Type (Entity/General)
Output message*
The action should not fail nor stop a playbook execution:
If successful: print "Successfully connected to the Atlassian Confluence Server instance with the provided connection parameters!"
If both username and password, and PAT are provided: "Both username and password, and personal access token are provided for the integration, personal access token will be taken to connect with"
The action should fail and stop a playbook execution:
If both (username+password) and PAT are not provided:
print "Failed to connect to Atlassian Confluence Server, expecting either username and password, or personal access token to connect with!"
If critical error, like wrong credentials or lost connectivity :
print "Failed to connect to the Atlassian Confluence Server instance! Error is {0}".format(exception.stacktrace)
General
List pages
List pages available in the Atlassian Confluence Server instance based on the criteria provided.
Note: This action does not run on Google SecOps entities.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Filter Key
DDL
Select One
DDL possible values:
Title
Space Name
Status
False
Specify the key that needs to be used to filter pages.
Filter Logic
DDL
Not Specified
DDL possible values:
Not Specified
Equal
Contains
False
Specify what filter logic should be applied. Filtering logic is working based on the value provided in the Filter Key parameter.
Filter Value
String
N/A
False
Specify what value should be used in the filter.
If Equal is selected, the action attempts to find the exact match among results.
If Contains is selected, the action attempts to find results that contain that substring.
If nothing is provided in this parameter, the filter will not be applied.
Filtering logic works based on the value provided in the Filter Key parameter.
Max Records To Return
Int
50
False
Specify how many records to return.
If nothing is provided, the action returns 50 records.
Run on
The action is not running on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success:False
If the action runs successfully (no errors returned, server response is 200
OK ), is_success should be set to True .
JSON result
{
"results" : [
{
"id" : " PAGE_ID " ,
"type" : "page" ,
"status" : "current" ,
"title" : "Tell people what you think in a comment (step 8 of 9)" ,
"space" : {
"id" : 131073 ,
"key" : "ds" ,
"name" : "Demonstration Space" ,
"type" : "global" ,
"_links" : {
"webui" : "/display/ds" ,
"self" : "http://192.0.2.45:8090/rest/api/space/ds"
},
"_expandable" : {
"metadata" : "" ,
"icon" : "" ,
"description" : "" ,
"retentionPolicy" : "" ,
"homepage" : "/rest/api/content/ PAGE_ID "
}
},
"extensions" : {
"position" : 7
},
"_links" : {
"webui" : "/pages/viewpage.action?pageId= PAGE_ID " ,
"edit" : "/pages/resumedraft.action?draftId= DRAFT_ID " ,
"tinyui" : "/x/AYAB" ,
"self" : "http://192.0.2.45:8090/rest/api/content/ PAGE_ID "
},
"_expandable" : {
"container" : "/rest/api/space/ds" ,
"metadata" : "" ,
"operations" : "" ,
"children" : "/rest/api/content/ PAGE_ID /child" ,
"restrictions" : "/rest/api/content/ PAGE_ID /restriction/byOperation" ,
"history" : "/rest/api/content/ PAGE_ID /history" ,
"ancestors" : "" ,
"body" : "" ,
"version" : "" ,
"descendants" : "/rest/api/content/ PAGE_ID /descendant"
}
},
...
],
"start" : 0 ,
"limit" : 5 ,
"size" : 5 ,
"_links" : {
"self" : "http://192.0.2.45:8090/rest/api/content?expand=space" ,
"next" : "/rest/api/content?expand=space&limit=5&start=5" ,
"base" : "http://192.0.2.45:8090" ,
"context" : ""
}
}
Case wall
Result type
Value/Description
Type (Entity/General)
Output message*
The action should not fail nor stop a playbook execution:
If data is available(is_success = true):
print "Successfully found pages for the provided criteria in Atlassian Confluence Server".
If data is not available (is_success=false)
print "No pages were found for the provided criteria in Atlassian Confluence Server"
If "Filter Value" is empty (is_success=true):
The filter was not applied, because parameter "Filter Value" has an empty value.
The action should fail and stop a playbook execution:
If Filter Key == "Select One" and Filter Logic "Equal" or "Contains":
Error executing action "{action name}". Reason: you need to select a field from the Filter Key parameter.
If invalid value is provided for Max Records to Return:
Error executing action "{action name}". Reason: "Invalid value was provided for "Max Records to Return": <provided value>. Positive number should be provided".
If fatal error, like wrong credentials, no connection to server, other:
"Error executing action "{action name}". Reason: {0}''.format(error.Stacktrace)
If both username+password and PAT are not provided:
print "Failed to connect to Atlassian Confluence Server, expecting either username and password, or personal access token to connect with!"
General
Case Wall Table
Name: Available Confluence Pages
Columns:
ID
Title
Space
Status
Created
General
Get page by ID
Get Atlassian Confluence Server page by ID.
Note: This action does not run on Google SecOps entities.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Page ID
String
N/A
True
Specify the page ID to return.
Expand
CSV
body.storage
False
Specify the expand parameter to return additional information about the page. Parameter accepts multiple values as a comma-separated list.
By default, the content of the page is fetched with body.storage .
Run on
The action is not running on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success:False
If the action runs successfully (page is returned, server response is 200
OK ), is_success should be set to True .
JSON result
{
"id" : " PAGE_ID " ,
"type" : "page" ,
"status" : "current" ,
"title" : "title" ,
"body" : {
"storage" : {
"value" : "<p>test page</p><p>11</p><p>aa</p><p>aa</p><p>aa</p><p><br /></p><p><br /></p>" ,
"representation" : "storage" ,
"_expandable" : {
"content" : "/rest/api/content/ PAGE_ID "
}
},
"_expandable" : {
"editor" : "" ,
"view" : "" ,
"export_view" : "" ,
"styled_view" : "" ,
"anonymous_export_view" : ""
}
},
"extensions" : {
"position" : "none"
},
"_links" : {
"webui" : "/display/SIEM/111" ,
"edit" : "/pages/resumedraft.action?draftId= PAGE_ID &draftShareId=cf8b3a21-8e36-4a83-a696-51fcb4428d1c" ,
"tinyui" : "/x/TIAB" ,
"collection" : "/rest/api/content" ,
"base" : "http://192.0.2.45:8090" ,
"context" : "" ,
"self" : "http://192.0.2.45:8090/rest/api/content/ PAGE_ID "
},
"_expandable" : {
"container" : "/rest/api/space/SIEM" ,
"metadata" : "" ,
"operations" : "" ,
"children" : "/rest/api/content/ PAGE_ID /child" ,
"restrictions" : "/rest/api/content/ PAGE_ID /restriction/byOperation" ,
"history" : "/rest/api/content/ PAGE_ID /history" ,
"ancestors" : "" ,
"version" : "" ,
"descendants" : "/rest/api/content/ PAGE_ID /descendant" ,
"space" : "/rest/api/space/SIEM"
}
}
Case wall
Result type
Value/Description
Type (Entity/General)
Output message*
The action should not fail nor stop a playbook execution:
If page is found (is_success = true):
print "Successfully fetched page information with id: <id>"
If data is not available (is_success=false):
print "The following page id was not found in the Atlassian Confluence Server: <page id>"
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to server, other:
"Error executing action "<Action name>". Reason: {0}''.format(error.Stacktrace)
If both username + password and PAT are not provided:
print "Failed to connect to Atlassian Confluence Server, expecting either username and password, or personal access token to connect with!"
General
Get child pages
Get child pages for the Atlassian Confluence Server page.
Note: This action doesn't run on Google SecOps entities.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Page ID
String
N/A
True
Specify the page ID to return.
Max records to return
Int
10
True
Specify the limit of child pages to return.
Run on
The action is not running on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success:False
If the action runs successfully (page is returned, server response is 200
OK ), is_success should be set to True .
JSON result
{
"results" : [
{
"id" : " PAGE_ID " ,
"type" : "page" ,
"status" : "current" ,
"title" : "test child page!" ,
"extensions" : {
"position" : "none"
},
"_links" : {
"webui" : "/pages/viewpage.action?pageId= PAGE_ID " ,
"edit" : "/pages/resumedraft.action?draftId= PAGE_ID &draftShareId=799fd068-5053-4889-9120-c1a3c970fdbd" ,
"tinyui" : "/x/T4AB" ,
"self" : "http://192.0.2.45:8090/rest/api/content/ PAGE_ID "
},
"_expandable" : {
"container" : "/rest/api/space/SIEM" ,
"metadata" : "" ,
"operations" : "" ,
"children" : "/rest/api/content/ PAGE_ID /child" ,
"restrictions" : "/rest/api/content/ PAGE_ID /restriction/byOperation" ,
"history" : "/rest/api/content/ PAGE_ID /history" ,
"ancestors" : "" ,
"body" : "" ,
"version" : "" ,
"descendants" : "/rest/api/content/ PAGE_ID /descendant" ,
"space" : "/rest/api/space/SIEM"
}
}
],
"start" : 0 ,
"limit" : 1 ,
"size" : 1 ,
"_links" : {
"self" : "http://192.0.2.45:8090/rest/api/content/ PAGE_ID /child/page" ,
"base" : "http://192.0.2.45:8090" ,
"context" : ""
}
}
Case wall
Result type
Value/Description
Type (Entity/General)
Output message*
The action should not fail nor stop a playbook execution:
if data is available (is_success = true):
print "Successfully found child pages for the provided Atlassian Confluence Server page id: <page_id>".
If data is not available (is_success=false)
print "No child pages were found for the provided Atlassian Confluence Server page id <page_id>"
The action should fail and stop a playbook execution:
If invalid value is provided for Max Records to Return:
Error executing action "{action name}". Reason: "Invalid value was provided for "Max Records to Return": <provided value>. Positive number should be provided".
If fatal error, like wrong credentials, no connection to server, other:
"Error executing action "{action name}". Reason: {0}''.format(error.Stacktrace)
If both username + password and PAT are not provided:
print "Failed to connect to Atlassian Confluence Server, expecting either username and password, or personal access token to connect with! "
General
Get page comments
Get comments for the Atlassian Confluence Server page.
Note: This action doesn't run on Google SecOps entities.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Page ID
String
N/A
True
Specify the page ID to return.
Expand
CSV
body.storage
False
Specify the expand parameter to return additional information about the page. Parameter accepts multiple values as a comma-separated list.
By default, the content of the page is fetched with body.storage .
Max records to return
Int
10
True
Specify the limit of child pages to return.
Run on
The action is not running on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True/False
is_success:False
If the action runs successfully (comments are returned, server response is 200
OK ), is_success should be set to True .
JSON result
{
"results" : [
{
"id" : " ID " ,
"type" : "comment" ,
"status" : "current" ,
"title" : "Re: 111" ,
"body" : {
"storage" : {
"value" : "<p>comment1</p>" ,
"representation" : "storage" ,
"_expandable" : {
"content" : "/rest/api/content/ ID "
}
},
"_expandable" : {
"editor" : "" ,
"view" : "" ,
"export_view" : "" ,
"styled_view" : "" ,
"anonymous_export_view" : ""
}
},
"extensions" : {
"location" : "footer" ,
"_expandable" : {
"resolution" : ""
}
},
"_links" : {
"webui" : "/display/SIEM/111?focusedCommentId=98387#comment- ID " ,
"self" : "http://203.0.113.1:8090/rest/api/content/ ID "
},
"_expandable" : {
"container" : "/rest/api/content/ ID " ,
"metadata" : "" ,
"operations" : "" ,
"children" : "/rest/api/content/ ID /child" ,
"restrictions" : "/rest/api/content/ ID /restriction/byOperation" ,
"history" : "/rest/api/content/ ID /history" ,
"ancestors" : "" ,
"version" : "" ,
"descendants" : "/rest/api/content/ ID /descendant" ,
"space" : "/rest/api/space/SIEM"
}
},
...
],
"start" : 0 ,
"limit" : 10 ,
"size" : 2 ,
"_links" : {
"self" : "http://203.0.113.1:8090/rest/api/content/ ID /child/comment?expand=body.storage" ,
"base" : "http://203.0.113.1:8090" ,
"context" : ""
}
}
Case wall
Result type
Value/Description
Type (Entity/General)
Output message*
The action should not fail nor stop a playbook execution:
If data is available(is_success = true):
print "Successfully fetched page comments for the provided Atlassian Confluence Server page id: <page_id>".
If data is not available (is_success=false)
print "No page comments were found for the provided Atlassian Confluence Server page id <page_id>"
The action should fail and stop a playbook execution:
If invalid value is provided for Max Records to Return:
Error executing action "{action name}". Reason: "Invalid value was provided for "Max Records to Return": <provided value>. Positive number should be provided".
If fatal error, like wrong credentials, no connection to server, other:
"Error executing action "{action name}". Reason: {0}''.format(error.Stacktrace)
If both username + password and PAT are not provided:
print "Failed to connect to Atlassian Confluence Server, expecting either username and password, or personal access token to connect with!"
General
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
