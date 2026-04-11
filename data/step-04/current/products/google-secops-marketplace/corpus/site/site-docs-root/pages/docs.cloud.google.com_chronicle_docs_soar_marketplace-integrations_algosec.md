---
title: "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec
  title: "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_\
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
Integrate AlgoSec with Google SecOps
This document describes how to integrate AlgoSec with
Google Security Operations (Google SecOps).
Use cases
Perform enrichment of entities.
Integration parameters
Use the following parameters to configure the integration:
Parameter name
Type
Default value
Is mandatory
Description
API Root
String
https:/{{ip address}}
Yes
API root of the AlgoSec instance.
Username
String
N/A
Yes
Username of the AlgoSec instance.
Password
String
N/A
Yes
Password of the AlgoSec instance.
Verify SSL
Checkbox
Checked
Yes
If selected, the integration validates the SSL certificate when connecting to
the AlgoSec server.
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
Allow IP
Allow IPs in AlgoSec.
Note: IP address entities are treated as destinations in the change request.
This action creates a traffic change request to allow traffic to IP entities.
How to work with the Custom Fields parameter
The Custom Fields parameter requires the following structure:
[
{
"name" : "name of the field" ,
"values" : [
"value"
]
},
{
"name" : "name of the field" ,
"values" : [
"value"
]
},
]
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Template
String
Standard
Yes
Specify the template for the change request.
Source
CSV
all
Yes
Specify a comma-separated list of sources for the allow rule.
It can be an IP address, IP Set or special keyword like (all).
Service
CSV
ALL
Yes
Specify a comma-separated list of services that needs to be allowed.
Values can have a look of {TCP/IP}/{port} (tcp/80) or special reserved keyword (all).
Subject
String
N/A
No
Specify the subject for the change request.
If nothing is provided, the action puts "Siemplify Block IP request" in the subject.
Owner
String
N/A
No
Specify who should be the owner of the change request.
If nothing is provided, the user that created the ticket is the owner.
Due Date
String
N/A
No
Specify the due date for the change request.
Format: ISO 8601
Example: 2021-08-13T08:16:10Z
Expiration Date
String
N/A
No
Specify the expiration date for the change request.
Format: ISO 8601
Example: 2021-08-13T08:16:10Z
Custom Fields
JSON object
N/A
No
Specify a JSON object containing information about all of the fields that need to be added to the change request.
Note: When this parameter is provided, the Subject, Owner, Due Date, and Expiration Date parameters are ignored. Make sure to have them as a part of the JSON object, if needed.
Example of the JSON object: {"owner": "siemplify"}
Run on
This action runs on the IP Address entity.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
Option 1
{
"status" : "Success" ,
"messages" : [],
"data" : {
"id" : 10 ,
"fields" : [
{
"name" : "Owner" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "Creator" ,
"values" : [
"admin<user@siemplify.co>"
]
},
{
"name" : "Due" ,
"values" : [
"2021-08-31 00:00:00"
]
},
{
"name" : "LastUpdated" ,
"values" : [
"2021-08-13 12:31:23"
]
},
{
"name" : "Requestor" ,
"values" : [
"admin@example.com>"
]
}
],
"originalTraffic" : [
{
"source" : {
"items" : [
{
"value" : "all"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.3"
}
]
},
"service" : {
"items" : [
{
"value" : "ALL"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Allow"
}
],
"plannedTraffic" : [
{
"source" : {
"items" : [
{
"value" : "0.0.0.0-255.255.255.255"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.3"
}
]
},
"service" : {
"items" : [
{
"value" : "tcp/*"
},
{
"value" : "udp/*"
},
{
"value" : "ospf"
},
{
"value" : "icmp/*"
},
{
"value" : "gre"
},
{
"value" : "ipsec_50"
},
{
"value" : "ipsec_51"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Allow"
}
]
}
}
Option 2
{
"status" : "Success" ,
"messages" : [],
"data" : {
"changeRequestId" : 37 ,
"redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37"
}
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If the 200 status code is reported and if for second request the 404 status code is reported (is_success=true): "Successfully created a traffic change request to allow traffic to the provided entities in AlgoSec.".
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP". Reason: {0}''.format(error.Stacktrace)
If the 400 status code is reported:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP". Reason: {0}''.format(csv of messages/message from the response)
General
Case Wall Link
Title: Change Request Link
General
Block IP
Description
Block IPs in AlgoSec.
Note: IP address entities are treated as destinations in the change request.
This action creates a traffic change request to block traffic to IP entities.
How to work with the Custom Fields parameter
The Custom Fields parameter requires the following structure:
[
{
"name" : "name of the field" ,
"values" : [
"value"
]
},
{
"name" : "name of the field" ,
"values" : [
"value"
]
},
]
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Template
String
Standard
Yes
Specify the template for the change request.
Source
CSV
all
Yes
Specify a comma-separated list of sources for the block rule.
It can be an IP address, IP set or special keyword like (all).
Service
CSV
ALL
Yes
Specify a comma-separated list of services that needs to be blocked.
Values can have a look of {TCP/UDP}/{port} (tcp/80) or special reserved keyword (all).
Subject
String
N/A
No
Specify the subject for the change request.
If nothing is provided, the action puts "Siemplify Block IP request" in the subject.
Owner
String
N/A
No
Specify who should be the owner of the change request.
If nothing is provided, the user that created the ticket is the owner.
Due Date
String
N/A
No
Specify the due date for the change request.
Format: ISO 8601
Example: 2021-08-13T08:16:10Z
Expiration Date
String
N/A
No
Specify the expiration date for the change request.
Format: ISO 8601
Example: 2021-08-13T08:16:10Z
Custom Fields
JSON object
N/A
No
Specify a JSON object containing information about all of the fields that need to be added to the change request.
Note: When this parameter is provided, the Subject, Owner, Due Date, and Expiration Date parameters are ignored. Make sure to have them as a part of the JSON object, if needed.
Example of the JSON object: {"owner": "siemplify"}
Run on
This action runs on the IP Address entity.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
Option 1
{
"status" : "Success" ,
"messages" : [],
"data" : {
"id" : 10 ,
"fields" : [
{
"name" : "Owner" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "Creator" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "Due" ,
"values" : [
"2021-08-31 00:00:00"
]
},
{
"name" : "LastUpdated" ,
"values" : [
"2021-08-13 12:31:23"
]
},
{
"name" : "Requestor" ,
"values" : [
"admin@example.com>"
]
}
],
"originalTraffic" : [
{
"source" : {
"items" : [
{
"value" : "all"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.3"
}
]
},
"service" : {
"items" : [
{
"value" : "ALL"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Allow"
}
],
"plannedTraffic" : [
{
"source" : {
"items" : [
{
"value" : "0.0.0.0-255.255.255.255"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.3"
}
]
},
"service" : {
"items" : [
{
"value" : "tcp/*"
},
{
"value" : "udp/*"
},
{
"value" : "ospf"
},
{
"value" : "icmp/*"
},
{
"value" : "gre"
},
{
"value" : "ipsec_50"
},
{
"value" : "ipsec_51"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Block"
}
]
}
}
Option 2
{
"status" : "Success" ,
"messages" : [],
"data" : {
"changeRequestId" : 37 ,
"redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37"
}
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If the 200 status code is reported even if for second request the 404 status code is reported (is_success=true): "Successfully created a traffic change request to block traffic to the provided entities in AlgoSec.".
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP". Reason: {0}''.format(error.Stacktrace)
If the 400 status code is reported:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP". Reason: {0}''.format(csv of messages/message from the response)
General
Case Wall Link
Title: Change Request Link
General
List Templates
List available templates in AlgoSec.
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
Specify the filter logic that should be applied.
Filter Value
String
N/A
No
Specify the value should be used in the filter.
If Equal is selected, the action tries to find the exact match among items.
If Contains is selected, the action tries to find items that contain that substring.
If nothing is provided in this parameter, the filter is not applied.
Max Template To Return
Integer
50
No
Specify the number of packages to return.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
[
{
"id" : 142 ,
"name" : "110: Multi-Approval Request" ,
"description" : "Create a traffic change request which requires multiple approvals" ,
"type" : "Traffic Change" ,
"enabled" : true
},
{
"id" : 597 ,
"name" : "190: Verbatim Rule Addition" ,
"description" : "Create a traffic change request for bulk rules addition exactly as specified" ,
"type" : "Traffic Change" ,
"enabled" : true
},
{
"id" : 550 ,
"name" : "Basic Change Traffic Request" ,
"description" : "Create a basic change traffic request" ,
"type" : "Traffic Change" ,
"enabled" : true
}
]
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If found results (is_success=true): "Successfully found templates for the provided criteria in AlgoSec.
If not found results (is_success=true): "No templates were found for the provided criteria in AlgoSec.
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "List Templates". Reason: {0}''.format(error.Stacktrace)
General
Case Wall Table
Table Name: Available Templates
Table Columns:
Name
Description
Type
General
Ping
Test the connectivity to AlgoSec.
Parameters
N/A
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result Type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successful: "Successfully connected to the AlgoSec server with the provided connection parameters!"
The action should fail and stop a playbook execution:
If not successful: "Failed to connect to the AlgoSec server! Error is {0}".format(exception.stacktrace)
General
Wait for Change Request Status Update
Wait for a change request status update in AlgoSec.
This action is asynchronous. Adjust the script timeout value in the
Google SecOps IDE as needed. Only traffic change requests are
supported.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Request ID
String
N/A
Yes
Specify the ID of the request ID for which the action needs to check the status.
Status
CSV
resolved
Yes
Specify a comma-separated list of change request statuses for which action should wait.
Possible values: resolved, reconcile, open, check, implementation plan, implement, validate
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"status" : "Success" ,
"messages" : [],
"data" : {
"id" : 6 ,
"subChangeRequests" : [
12
],
"fields" : [
{
"name" : "Risk Level" ,
"values" : [
"No Risk"
]
},
{
"name" : "Owner" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "Creator" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "LastUpdated" ,
"values" : [
"2021-08-13 13:50:58"
]
},
{
"name" : "Requestor" ,
"values" : [
"admin@example.com>"
]
},
{
"name" : "Form Type" ,
"values" : [
"Traffic Change"
]
},
{
"name" : "Risks Number" ,
"values" : [
"0"
]
},
{
"name" : "Initial Plan status" ,
"values" : [
"Result OK"
]
},
{
"name" : "Workflow" ,
"values" : [
"Basic"
]
},
{
"name" : "Subject" ,
"values" : [
"1"
]
},
{
"name" : "status" ,
"values" : [
"open"
]
}
],
"originalTraffic" : [
{
"source" : {
"items" : [
{
"value" : "all"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.2"
}
]
},
"service" : {
"items" : [
{
"value" : "tcp/80"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Allow"
}
],
"plannedTraffic" : [
{
"source" : {
"items" : [
{
"value" : "0.0.0.0-255.255.255.255"
}
]
},
"destination" : {
"items" : [
{
"value" : "192.0.2.2"
}
]
},
"service" : {
"items" : [
{
"value" : "tcp/80"
}
]
},
"application" : {
"items" : [
{
"value" : "any"
}
]
},
"user" : {
"items" : [
{
"value" : "any"
}
]
},
"action" : "Allow"
}
]
}
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If found results (is_success=true): "Status of the change request with ID {id} was updated to status: {status}.
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Wait for Change Request Status Update". Reason: {0}''.format(error.Stacktrace)
If ran into a timeout: "Error executing action "Wait for Change Request Status Update". Reason: action ran into a timeout during execution. Current status of the change request: {status}. Please increase the timeout for the action in the IDE.''
General
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
