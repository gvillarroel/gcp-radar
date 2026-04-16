---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.706Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Google Calendar audit report"
feature_slug: "google-calendar-audit-report"
latest_feature_date: "2014-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin"
keywords:
  - "calendar"
  - "audit"
  - "report"
  - "shows"
  - "changes"
  - "calendars"
  - "events"
  - "users"
---

# Google Calendar audit report

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Google Calendar audit report shows changes to calendars and calendar events for users in a domain.

## Extended Definition

The Google Calendar audit report shows changes to calendars and calendar events for users in a domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)

## Supporting Pages

### "Reports API: Device Audit Activity Report \_|\_ Admin console \_|\_ Google\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile)
- Source ID: `site-docs-reference-required-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do this, use a GET HTTP request in the following form: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ mobile ?maxResults= maximum number of events returned on a response page &eventName= name of the event &filters= event parameter relational operator parameter value The following example shows how to retrieve all suspicious activity events for Android users within the domain: GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?eventName=SUSPICIOUS ACTIVITY EVENT&filters=DEVICE TYPE==ANDROID&maxResults=25 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability purposes, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ mobile ?endTime= end date &startTime= start date &maxResults= maximum number of events returned on a response page The following example gets a report on all of your account's device audit events for the past 180 days.
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?customerId=C03az79cb Retrieve device audit events by event name In some instances, you may want to retrieve specific events , such as suspicious activity events.
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?maxResults=25 The following example gets a report on all device audit events for the past 180 days.

### "Reports API: Drive Activity Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive)
- Source ID: `site-docs-reference-required-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example retrieves events that affect all shared drives: GET https : //admin.googleapis.com/admin/reports/v1/activity/users/all / applications / drive ? filters = doc type = shared drive To retrieve events for membership changes, specify the shared drive membership change event.
- For more information about the request's query strings and the response properties, see the API Reference . { "kind": "reports#auditActivities", "nextPageToken": " next page's token ", "items": [ { "kind": "audit#activity", "id": { "time": "2014-03-17T15:39:18.460Z", "uniqQualifier": " report's unique ID ", "applicationName": "drive", "customerId": "ABC123xyz" }, "actor": { "callerType": "USER", "email": "kim@example.com", "profileId": " user's unique Google Workspace profile ID ", "key": " consumer key of requester in an OAuth 2LO request " }, "ownerDomain": " domain of the source owner ", "ipAddress": " user's IP address ", "events": [ { "type": "access", "name": "edit", "parameters": [ { "name": "primary event", "boolValue": true }, { "name": "owner is shared drive", "boolValue": false }, { "name": "doc id", "value": "1DWuYM3ot sAyEQqOz0xWJ9bVMSYzOmRNeBqbgtSwuK8" }, { "name": "doc title", "value": "Meeting notes" }, { "name": "doc type", "value": "document" }, { "name": "owner", "value": "mary@example.com" } ] } ] }, ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example retrieves all member additions to shared drives: GET https : //admin.googleapis.com/admin/reports/v1/activity/users/all / applications / drive ? eventName = shared drive membership change & filters = membership change type == add to shared drive Retrieve Google Drive events by event type To retrieve a report of all instances of a specific event type, such as creating or editing a document, use an HTTP GET request with the authorization token described in the authorization guide .
- GET https : // admin . googleapis . com / admin / reports / v1 / activity / users / kim @example . com / applications / drive Retrieve Google Drive events for shared drives You can retrieve a report of Google Drive activities for a specific shared drive using an HTTP GET request with the authorization token described in the authorization guide .

### Admin Activity Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)
- Source ID: `site-docs-reference-required-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ userKey /applications/ admin ?endTime= a date &startTime= a date &maxResults= number of events listed on each page of the report &filters= event name parameter relational operator parameter value The following example gets a report on all changes to the Admin console application done by john@example.com , and the response is filtered to return any activities which have an OLD VALUE equal to ALLOW CAMERA .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ userKey /applications/ admin ?endTime= a date &startTime= a date &maxResults= maximum number of events returned on a response page &eventName= name of the administrative event The following example retrieves a report for all Admin console changes to a specific user's last name that were done by john@example.com .
- For more information about the request's URL query strings and the response properties, see the API Reference . { "kind" : "reports#auditActivities" , "nextPageToken" : " the next page's token " , "items" : [ { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " report's unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in OAuth 2LO requests " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CHANGE GROUP SETTING" , "parameters" : [ { "name" : "SETTING NAME" , "value" : "WHO CAN JOIN" , "intValue" : " integer value of parameter " , "boolValue" : " boolean value of parameter " } ] } ] }, { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " reports unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in an OAuth 2LO request " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CREATE GROUP" , "parameters" : [ { "name" : "GROUP EMAIL" , "value" : "helpdesk@example.com" , "intValue" : "" , "boolValue" : "" } ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all /applications/ admin ?endTime= a date &startTime= a date &maxResults= number of events listed on each page of the report The following example gets a report on all of your account's administrative activities for the past 180 days which is the maximum time period for a report.

