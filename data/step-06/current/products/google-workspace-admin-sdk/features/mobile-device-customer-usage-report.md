---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.704Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Mobile Device customer usage report"
feature_slug: "mobile-device-customer-usage-report"
latest_feature_date: "2015-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users"
keywords:
  - "mobile"
  - "device"
  - "customer"
  - "usage"
  - "report"
  - "provides"
  - "information"
  - "about"
---

# Mobile Device customer usage report

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Mobile Device customer usage report provides information about mobile device usage in a domain.

## Extended Definition

The Mobile Device customer usage report provides information about mobile device usage in a domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)

## Supporting Pages

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the request's query strings and response properties, see the API Reference and the customer usage report parameters reference .
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Customers usage report aggregates Google Workspace service usage information, for all users, across an entire domain.
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.

### "Reports API: Device Audit Activity Report \_|\_ Admin console \_|\_ Google\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- Source ID: `site-docs-reference-required-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?customerId=C03az79cb Retrieve device audit events by event name In some instances, you may want to retrieve specific events , such as suspicious activity events.
- To do this, use a GET HTTP request in the following form: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ mobile ?maxResults= maximum number of events returned on a response page &eventName= name of the event &filters= event parameter relational operator parameter value The following example shows how to retrieve all suspicious activity events for Android users within the domain: GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?eventName=SUSPICIOUS ACTIVITY EVENT&filters=DEVICE TYPE==ANDROID&maxResults=25 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability purposes, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ mobile ?endTime= end date &startTime= start date &maxResults= maximum number of events returned on a response page The following example gets a report on all of your account's device audit events for the past 180 days.
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?maxResults=25 The following example gets a report on all device audit events for the past 180 days.

### Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON response for user report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "USER" , "customerId" : "C03az79cb" , "userEmail" : "liz@example.com" , "profileId" : " user's unique Google Workspace ID " }, "parameters" : [ { "name" : "accounts:is disabled" , "boolValue" : false }, { "name" : "accounts:disabled reason" , "stringValue" : " reason description " }, { "name" : "accounts:first name" , "stringValue" : "Liz" }, { "name" : "accounts:is 2sv enforced" , "boolValue" : false }, { "name" : "accounts:is 2sv enrolled" , "boolValue" : false }, { "name" : "accounts:last name" , "stringValue" : "Smith" }, { "name" : "accounts:creation time" , "datetimeValue" : "2010-10-28T10:26:35.000Z" }, { "name" : "accounts:last login time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" }, { "name" : "accounts:last sso time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For information about the user usage report parameters, see the User Usage Parameters reference .
- For information about the user usage report parameters, see the User Usage Parameters reference .
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all /dates/2013-03-03?customerId=C03az79cb The following example gets a report on the last login timestamps of the users in the account.

