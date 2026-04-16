---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.717Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Login audit events"
feature_slug: "login-audit-events"
latest_feature_date: "2014-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin"
keywords:
  - "login"
  - "audit"
  - "events"
  - "record"
  - "failures"
  - "including"
  - "disabled"
  - "account"
---

# Login audit events

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

Audit events that record login failures, including disabled-account and unknown-failure cases.

## Extended Definition

Audit events that record login failures, including disabled-account and unknown-failure cases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)

## Supporting Pages

### "Reports API: Login Activity Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login)
- Source ID: `site-docs-reference-required-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For readability purposes, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ login ?endTime= end date &startTime= start date &maxResults= maximum number of events returned on a response page The following example gets a report on all of your account's login events for the past 180 days.
- To do this, use a GET HTTP request of the following form: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ login ?maxResults= maximum number of events returned on a response page &eventName= name of the login event &filters= event parameter relational operator parameter value The following example shows how to retrieve all suspicious successful logins for a domain: GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?eventName=login success&filters=is suspicious==true&maxResults=25 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?customerId=C03az79cb Retrieve Google Workspace login events by event name In some instances, you may want to retrieve specific events , such as suspicious successful logins.
- Retrieve Google Workspace login events for a domain To retrieve all logins for all of your domain's services, use the following GET HTTP request and include the authorization token described in the authorization documentation .

### "Reports API: Device Audit Activity Report \_|\_ Admin console \_|\_ Google\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- Source ID: `site-docs-reference-required-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- For readability purposes, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ mobile ?endTime= end date &startTime= start date &maxResults= maximum number of events returned on a response page The following example gets a report on all of your account's device audit events for the past 180 days.
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?customerId=C03az79cb Retrieve device audit events by event name In some instances, you may want to retrieve specific events , such as suspicious activity events.
- Retrieve device audit events for a domain To retrieve all device audit events for all users within your domain, use the following GET HTTP request and include the authorization token described in the authorization documentation .
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?maxResults=25 The following example gets a report on all device audit events for the past 180 days.

### Admin Activity Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)
- Source ID: `site-docs-reference-required-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the request's URL query strings and the response properties, see the API Reference . { "kind" : "reports#auditActivities" , "nextPageToken" : " the next page's token " , "items" : [ { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " report's unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in OAuth 2LO requests " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CHANGE GROUP SETTING" , "parameters" : [ { "name" : "SETTING NAME" , "value" : "WHO CAN JOIN" , "intValue" : " integer value of parameter " , "boolValue" : " boolean value of parameter " } ] } ] }, { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " reports unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in an OAuth 2LO request " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CREATE GROUP" , "parameters" : [ { "name" : "GROUP EMAIL" , "value" : "helpdesk@example.com" , "intValue" : "" , "boolValue" : "" } ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ admin ?endTime= a date &startTime= a date &maxResults= number of events listed on each page of the report The following example gets a report on all of your account's administrative activities for the past 180 days which is the maximum time period for a report.
- For each activity, the response includes all of the activity's events including the event specified in the API request.
- For each activity, the response includes all of the activity's events including the event specified in the API request.

