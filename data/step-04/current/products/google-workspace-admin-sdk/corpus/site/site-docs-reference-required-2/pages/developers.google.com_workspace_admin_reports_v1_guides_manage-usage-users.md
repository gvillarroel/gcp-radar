---
title: "Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
source_metadata:
  url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users
  title: "Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Guides
Send feedback
Reports API: Users Usage Report
Stay organized with collections
Save and categorize content based on your preferences.
The user usage report returns Google Workspace service usage information for a particular user in your domain.
These reports can be customized and filtered for specific usage information.
The default and maximum time period for each report is the last 450 days.
These user usage report may be used only for lawful purposes in accordance with your Customer Agreement. And, these reports apply to Google Workspace and Education.
Retrieve all user usage activities
To retrieve a report of all user activities in your account use the following GET HTTP request and include the authorization token described in the authorization documentation . For readability, the following example is formatted with line returns:
GET https://admin.googleapis.com/admin/reports/v1/usage/users/ all /dates/ yyyy-mm-dd date
?parameters= application: user usage parameter ,...
&filters= application: user usage parameter relational operator usage parameter's value ,...
&maxResults= number of events listed on each page of the report
The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd. For more information about the query string parameters and response properties, see the API Reference . For information about the user usage report parameters, see the User Usage Parameters reference .
The following example gets a report on all user activities for the account.
GET https://admin.googleapis.com/admin/reports/v1/usage/users/all
/dates/2013-03-03?maxResults=2
The following example gets a report on all user activities for a specific customer account.
GET https://admin.googleapis.com/admin/reports/v1/usage/users/all
/dates/2013-03-03?customerId=C03az79cb
The following example gets a report on the last login timestamps of the users in the account. For an example of an API response, see the JSON response example .
GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03
?parameters=accounts:last_login_time&maxResults=2
The following example gets a report on the last login timestamps of the users in the account, filtered by users who logged in after a specific time. For an example of an API response, see the JSON response example .
GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03
?parameters=accounts:last_login_time&filters=accounts:last_login_time
>2010-10-28T10:26:35.000Z"
The following example gets a report on the last login timestamps and suspended status of the users in the account. For an example of an API response, see the JSON response example .
GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03
?parameters=accounts:last_login_time,accounts:is_disabled"
Retrieve a specific user's usage activities
To retrieve a report of a specific user's activities in your account use the following GET HTTP request and include the authorization token described in the authorization documentation . For readability, the following example is formatted with line returns.
GET https://admin.googleapis.com/admin/reports/v1/usage/users/ userKey /dates/ yyyy-mm-dd date
?parameters= application: user usage parameter ,...
&filters= application: user usage parameter relational operator usage parameter's value ,...
&maxResults= number of events listed on each page of the report
The userKey can be either the primary email address of the user in the report or the user's unique Google Workspace profileId . The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd. For more information about the query string parameters and response properties, see the API Reference . For information about the user usage report parameters, see the User Usage Parameters reference .
The following example gets the usage report for john@example.com.
https://admin.googleapis.com/admin/reports/v1/usage/users/john@example.com/dates/2013-03-03
Usage report example JSON response
A successful response returns an HTTP 200 status code . Along with the status code, the response returns a report.
JSON response for user report
{
"kind" : "reports#usageReports" ,
"warnings" : [
{
"code" : warning machine - readable code ,
"message" : warning human - readable message ,
"data" : [
{
"key" : key for key - value pair that gives detailed warning information ,
"value" : value for key - value pair giving detailed warning information
}
]
}
],
"nextPageToken" : "N:NNN:NNN:N:C03az79cb" ,
"usageReports" : [
{
"kind" : "usageReport" ,
"date" : "2013-03-03" ,
"entity" : {
"type" : "USER" ,
"customerId" : "C03az79cb" ,
"userEmail" : "liz@example.com" ,
"profileId" : " user's unique Google Workspace ID "
},
"parameters" : [
{
"name" : "accounts:is_disabled" ,
"boolValue" : false
},
{
"name" : "accounts:disabled_reason" ,
"stringValue" : " reason description "
},
{
"name" : "accounts:first_name" ,
"stringValue" : "Liz"
},
{
"name" : "accounts:is_2sv_enforced" ,
"boolValue" : false
},
{
"name" : "accounts:is_2sv_enrolled" ,
"boolValue" : false
},
{
"name" : "accounts:last_name" ,
"stringValue" : "Smith"
},
{
"name" : "accounts:creation_time" ,
"datetimeValue" : "2010-10-28T10:26:35.000Z"
},
{
"name" : "accounts:last_login_time" ,
"datetimeValue" : "1970-01-01T00:00:00.000Z"
},
{
"name" : "accounts:last_sso_time" ,
"datetimeValue" : "1970-01-01T00:00:00.000Z"
}
]
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
