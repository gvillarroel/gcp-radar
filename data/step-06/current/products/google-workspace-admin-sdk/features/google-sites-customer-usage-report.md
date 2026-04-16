---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.707Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Google Sites customer usage report"
feature_slug: "google-sites-customer-usage-report"
latest_feature_date: "2014-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities"
keywords:
  - "sites"
  - "customer"
  - "usage"
  - "report"
  - "provides"
  - "information"
  - "about"
  - "domain"
---

# Google Sites customer usage report

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Google Sites customer usage report provides information about Google Sites usage in a domain.

## Extended Definition

The Google Sites customer usage report provides information about Google Sites usage in a domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities)

## Supporting Pages

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the request's query strings and response properties, see the API Reference and the customer usage report parameters reference .
- The Customers usage report aggregates Google Workspace service usage information, for all users, across an entire domain.
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.

### Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON response for user report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "USER" , "customerId" : "C03az79cb" , "userEmail" : "liz@example.com" , "profileId" : " user's unique Google Workspace ID " }, "parameters" : [ { "name" : "accounts:is disabled" , "boolValue" : false }, { "name" : "accounts:disabled reason" , "stringValue" : " reason description " }, { "name" : "accounts:first name" , "stringValue" : "Liz" }, { "name" : "accounts:is 2sv enforced" , "boolValue" : false }, { "name" : "accounts:is 2sv enrolled" , "boolValue" : false }, { "name" : "accounts:last name" , "stringValue" : "Smith" }, { "name" : "accounts:creation time" , "datetimeValue" : "2010-10-28T10:26:35.000Z" }, { "name" : "accounts:last login time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" }, { "name" : "accounts:last sso time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The user usage report returns Google Workspace service usage information for a particular user in your domain.
- For information about the user usage report parameters, see the User Usage Parameters reference .
- For information about the user usage report parameters, see the User Usage Parameters reference .

### "Reports API: Entities Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities)
- Source ID: `site-docs-reference-required-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the entities usage report parameters, see the Entities Usage Parameters reference . applicationParameters is a comma-separated list of parameters you want to retrieve.
- For information about the entities usage report parameters, see the Entities Usage Parameters reference .
- In this example, the report is not available at the time the request is made. { "kind": "reports#usageReports", "warnings": [ { "code": "PARTIAL DATA AVAILABLE" "message": "Data for date 2017-12-11 for application gplus is not available right now, please try again after a few hours." "data": [ { "key": "date" "value": "2017-12-11" } ] } ], "usageReports": [], } Each entry in the warnings array has the following parameters: code : machine-readable warning code message : human-readable warning message data : list of key-value pairs which give detailed warning information Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example JSON response for entities report { "kind" : "reports#usageReports" , "nextPageToken" : "NjQ1OTgwODk0MzkxNDAwNjQ0OA" , "usageReports" : [ { "kind" : "admin#reports#usageReport" , "date" : "2017-12-11" , "entity" : { "type" : "OBJECT" , "customerId" : "C03az79cb" , "objectType" : "GPLUS COMMUNITY" , "objectId" : "1234" , }, "parameters" : [ { "name" : "gplus:community name" , "stringValue" : "My Community" }, { "name" : "gplus:num total members" , "intValue" : 37 }, { "name" : "gplus:num 7day active members" , "intValue" : 12 }, { "name" : "gplus:num 30day active members" , "intValue" : 17 }, ] } ] } Example JSON response for entities report with warnings One or more warnings may be returned in the response if the request cannot be fulfilled.

