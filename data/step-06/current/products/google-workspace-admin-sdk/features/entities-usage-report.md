---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.699Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Entities Usage Report"
feature_slug: "entities-usage-report"
latest_feature_date: "2017-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
keywords:
  - "entities"
  - "usage"
  - "report"
  - "generates"
  - "reports"
  - "used"
  - "account"
  - "users"
---

# Entities Usage Report

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Entities Usage Report generates reports on entities used by account users, starting with Google+ communities.

## Extended Definition

The Entities Usage Report generates reports on entities used by account users, starting with Google+ communities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)

## Supporting Pages

### "Reports API: Entities Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities)
- Source ID: `site-docs-reference-required-2`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The entities usage report returns Google Workspace service activities related to entities used by your account's users.
- Example JSON response for entities report { "kind" : "reports#usageReports" , "nextPageToken" : "NjQ1OTgwODk0MzkxNDAwNjQ0OA" , "usageReports" : [ { "kind" : "admin#reports#usageReport" , "date" : "2017-12-11" , "entity" : { "type" : "OBJECT" , "customerId" : "C03az79cb" , "objectType" : "GPLUS COMMUNITY" , "objectId" : "1234" , }, "parameters" : [ { "name" : "gplus:community name" , "stringValue" : "My Community" }, { "name" : "gplus:num total members" , "intValue" : 37 }, { "name" : "gplus:num 7day active members" , "intValue" : 12 }, { "name" : "gplus:num 30day active members" , "intValue" : 17 }, ] } ] } Example JSON response for entities report with warnings One or more warnings may be returned in the response if the request cannot be fulfilled.
- GET https://admin.googleapis.com/admin/reports/v1/usage/gplus communities/all /dates/2017-12-11 The following example gets a report containing the community name parameter for all gplus communities entities.
- Home Google Workspace Admin console Guides Send feedback Reports API: Entities Usage Report Stay organized with collections Save and categorize content based on your preferences.

### Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last login time,accounts:is disabled" Retrieve a specific user's usage activities To retrieve a report of a specific user's activities in your account use the following GET HTTP request and include the authorization token described in the authorization documentation .
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last login time&filters=accounts:last login time 2010-10-28T10:26:35.000Z" The following example gets a report on the last login timestamps and suspended status of the users in the account.
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last login time&maxResults=2 The following example gets a report on the last login timestamps of the users in the account, filtered by users who logged in after a specific time.
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all /dates/2013-03-03?customerId=C03az79cb The following example gets a report on the last login timestamps of the users in the account.

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- Retrieve a customer usage report To retrieve report of your account activities use the following GET HTTP request and include the authorization token described in the authorization documentation .
- Home Google Workspace Admin console Guides Send feedback Reports API: Customers Usage Report Stay organized with collections Save and categorize content based on your preferences.

