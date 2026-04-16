---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.721Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reports API Activities push notifications"
feature_slug: "reports-api-activities-push-notifications"
latest_feature_date: "2014-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users"
keywords:
  - "reports"
  - "activities"
  - "push"
  - "notifications"
  - "can"
  - "send"
  - "changes"
  - "resource"
---

# Reports API Activities push notifications

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Reports API can send push notifications for changes to the Activities resource.

## Extended Definition

The Reports API can send push notifications for changes to the Activities resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)

## Supporting Pages

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples All watch requests for the Activities resource have the general form: POST https://admin.googleapis.com/admin/reports/v1/activity/users/ userKey or all /applications/ applicationName /watch Authorization: Bearer auth token for current user Content-Type: application/json { "id": "01234567-89ab-cdef-0123456789ab", "type": "web hook", "address": "https://mydomain.com/notifications", ... "token": "target=myApp-myFilesChannelDest", "payload": true, "expiration": 3600 } The request body has the following properties: id : A UUID or similar unique string that identifies this channel. type : The type of delivery mechanism.
- The following code sample shows how to stop receiving notifications: POST https://www.googleapis.com/admin/reports v1/channels/stop Authorization: Bearer CURRENT USER AUTH TOKEN Content-Type: application/json { "id": "4ba78bf0-6a47-11e2-bcfd-0800200c9a66", "resourceId": "ret08u3rv24htgh289g" } Special Considerations When working with push notifications, keep the following in mind: Notifications are not 100% reliable.
- This document describes how to use push notifications that inform your application when a resource changes.
- Overview The Admin SDK API provides push notifications that let you monitor changes in resources.

### "Reports API: Drive Activity Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive)
- Source ID: `site-docs-reference-required-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the request's query strings and the response properties, see the API Reference . { "kind": "reports#auditActivities", "nextPageToken": " next page's token ", "items": [ { "kind": "audit#activity", "id": { "time": "2014-03-17T15:39:18.460Z", "uniqQualifier": " report's unique ID ", "applicationName": "drive", "customerId": "ABC123xyz" }, "actor": { "callerType": "USER", "email": "kim@example.com", "profileId": " user's unique Google Workspace profile ID ", "key": " consumer key of requester in an OAuth 2LO request " }, "ownerDomain": " domain of the source owner ", "ipAddress": " user's IP address ", "events": [ { "type": "access", "name": "edit", "parameters": [ { "name": "primary event", "boolValue": true }, { "name": "owner is shared drive", "boolValue": false }, { "name": "doc id", "value": "1DWuYM3ot sAyEQqOz0xWJ9bVMSYzOmRNeBqbgtSwuK8" }, { "name": "doc title", "value": "Meeting notes" }, { "name": "doc type", "value": "document" }, { "name": "owner", "value": "mary@example.com" } ] } ] }, ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- GET https : // admin . googleapis . com / admin / reports / v1 / activity / users / kim @example . com / applications / drive Retrieve Google Drive events for shared drives You can retrieve a report of Google Drive activities for a specific shared drive using an HTTP GET request with the authorization token described in the authorization guide .
- The following example retrieves events that affect all shared drives: GET https : //admin.googleapis.com/admin/reports/v1/activity/users/all / applications / drive ? filters = doc type = shared drive To retrieve events for membership changes, specify the shared drive membership change event.
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all /applications/drive Retrieve Google Drive events by user To retrieve a report of Google Drive activities of a particular user, use an HTTP GET request with the authorization token described in the authorization guide .

### Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- JSON response for user report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "USER" , "customerId" : "C03az79cb" , "userEmail" : "liz@example.com" , "profileId" : " user's unique Google Workspace ID " }, "parameters" : [ { "name" : "accounts:is disabled" , "boolValue" : false }, { "name" : "accounts:disabled reason" , "stringValue" : " reason description " }, { "name" : "accounts:first name" , "stringValue" : "Liz" }, { "name" : "accounts:is 2sv enforced" , "boolValue" : false }, { "name" : "accounts:is 2sv enrolled" , "boolValue" : false }, { "name" : "accounts:last name" , "stringValue" : "Smith" }, { "name" : "accounts:creation time" , "datetimeValue" : "2010-10-28T10:26:35.000Z" }, { "name" : "accounts:last login time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" }, { "name" : "accounts:last sso time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last login time,accounts:is disabled" Retrieve a specific user's usage activities To retrieve a report of a specific user's activities in your account use the following GET HTTP request and include the authorization token described in the authorization documentation .
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/all /dates/2013-03-03?maxResults=2 The following example gets a report on all user activities for a specific customer account.
- Home Google Workspace Admin console Guides Send feedback Reports API: Users Usage Report Stay organized with collections Save and categorize content based on your preferences.

