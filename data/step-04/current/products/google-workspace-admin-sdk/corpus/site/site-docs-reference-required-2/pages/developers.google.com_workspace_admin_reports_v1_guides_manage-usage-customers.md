---
title: "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
source_metadata:
  url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers
  title: "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\
    \ Developers"
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
Reports API: Customers Usage Report
Stay organized with collections
Save and categorize content based on your preferences.
The Customers usage report
aggregates Google Workspace service usage information, for all users, across an entire domain.
The user usage report returns Google Workspace service usage information across your account.
This usage information is organized by application type which is composed of parameters specific to that application.
The default and maximum time period for each report is the last 450 days.
These usage report may be used only for lawful purposes in accordance with your Customer Agreement. Also, these
reports apply to Google Workspace and Education.
Retrieve a customer usage report
To retrieve report of your account activities use the following GET HTTP request and include the authorization token
described in the authorization documentation . For readability,
the following example is formatted with line returns:
GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date
?parameters= app name: usage parameter ,...
&customerId= the customer's ID
&maxResults= number of events listed on each page of the report
The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd. We recommend you use your account's time zone for this. For more information about the request's query strings and response properties, see the API Reference and the customer usage report parameters reference .
The following example gets a report with the total of all successful logins to your account in the past 30 days and a list
of authorized applications, with the number of user authorizations per application, starting 2013-03-03. The maxResults
query string shows this report returns two events per report page:
GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03
?parameters=accounts:num_30day_logins%2Caccounts:authorized_apps&maxResults=2
JSON response for customer usage report
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
"type" : "CUSTOMER" ,
"customerId" : "C03az79cb"
},
"parameters" : [
{
"name" : "accounts:num_1day_logins" ,
"intValue" : "1"
},
{
"name" : "accounts:num_30day_logins" ,
"intValue" : "1"
},
{
"name" : "accounts:num_7day_logins" ,
"intValue" : "1"
},
{
"name" : "accounts:num_disabled_accounts" ,
"intValue" : "5"
},
{
"name" : "accounts:authorized_apps" ,
"msgValue" : [
{
"client_id" : "1234.apps.googleusercontent.com" ,
"client_name" : "www.example.com" ,
"num_users" : 2
},
{
"client_id" : "4567.apps.googleusercontent.com" ,
"client_name" : "Example" ,
"num_users" : 1
},
...
]
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
