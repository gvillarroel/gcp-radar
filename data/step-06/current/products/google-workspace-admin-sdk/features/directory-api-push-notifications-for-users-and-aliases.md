---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.719Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Directory API push notifications for users and aliases"
feature_slug: "directory-api-push-notifications-for-users-and-aliases"
latest_feature_date: "2014-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/directory/reference/rest"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users"
keywords:
  - "directory"
  - "push"
  - "notifications"
  - "users"
  - "aliases"
  - "can"
  - "send"
  - "changes"
---

# Directory API push notifications for users and aliases

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Directory API can send push notifications for changes to users and aliases.

## Extended Definition

The Directory API can send push notifications for changes to users and aliases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)

## Supporting Pages

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Guides Send feedback Push notifications Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to use push notifications that inform your application when a resource changes.
- Overview The Admin SDK API provides push notifications that let you monitor changes in resources.
- Examples Notification messages for Activity resource events have the general form: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 0 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 398348u3tu83ut8uu38 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret08u3rv24htgh289g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName X-Goog-Resource-State: eventName X-Goog-Message-Number: 10 { "kind": "admin#reports#activity", "id": { "time": datetime , "uniqueQualifier": long , "applicationName": string , "customerId": string }, "actor": { "callerType": string , "email": string , "profileId": long }, "ownerDomain": string , "ipAddress": string , "events": [ { "type": string , "name": string , "parameters": [ { "name": string , "value": string , "intValue": long , "boolValue": boolean } ] } ] } An example of an admin activity event: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 596 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 245t1234tt83trrt333 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret987df98743md8g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin?alt=json X-Goog-Resource-State: CREATE USER X-Goog-Message-Number: 23 { "kind": "admin#reports#activity", "id": { "time": "2013-09-10T18:23:35.808Z", "uniqueQualifier": "-0987654321", "applicationName": "admin", "customerId": "ABCD012345" }, "actor": { "callerType": "USER", "email": "admin@example.com", "profileId": "0123456789987654321" }, "ownerDomain": "apps-reporting.example.com", "ipAddress": "192.0.2.0", "events": [ { "type": "USER SETTINGS", "name": "CREATE USER", "parameters": [ { "name": "USER EMAIL", "value": "liz@example.com" } ] } ] } Respond to notifications To indicate success, you can return any of the following status codes: 200 , 201 , 202 , 204 , or 102 .

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: users.aliases Methods delete DELETE /admin/directory/v1/users/{userKey}/aliases/{alias} Removes an alias. insert POST /admin/directory/v1/users/{userKey}/aliases Adds an alias. list GET /admin/directory/v1/users/{userKey}/aliases Lists all aliases for a user. watch POST /admin/directory/v1/users/{userKey}/aliases/watch Watches for changes in users list.
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.
- REST Resource: domainAliases Methods delete DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Deletes a domain Alias of the customer. get GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Retrieves a domain alias of the customer. insert POST /admin/directory/v1/customer/{customer}/domainaliases Inserts a domain alias of the customer. list GET /admin/directory/v1/customer/{customer}/domainaliases Lists the domain aliases of the customer.

### Reports API: Users Usage Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Admin console Guides Send feedback Reports API: Users Usage Report Stay organized with collections Save and categorize content based on your preferences.
- JSON response for user report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "USER" , "customerId" : "C03az79cb" , "userEmail" : "liz@example.com" , "profileId" : " user's unique Google Workspace ID " }, "parameters" : [ { "name" : "accounts:is disabled" , "boolValue" : false }, { "name" : "accounts:disabled reason" , "stringValue" : " reason description " }, { "name" : "accounts:first name" , "stringValue" : "Liz" }, { "name" : "accounts:is 2sv enforced" , "boolValue" : false }, { "name" : "accounts:is 2sv enrolled" , "boolValue" : false }, { "name" : "accounts:last name" , "stringValue" : "Smith" }, { "name" : "accounts:creation time" , "datetimeValue" : "2010-10-28T10:26:35.000Z" }, { "name" : "accounts:last login time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" }, { "name" : "accounts:last sso time" , "datetimeValue" : "1970-01-01T00:00:00.000Z" } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/users/ all /dates/ yyyy-mm-dd date ?parameters= application: user usage parameter ,... &filters= application: user usage parameter relational operator usage parameter's value ,... &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- GET https://admin.googleapis.com/admin/reports/v1/usage/users/ userKey /dates/ yyyy-mm-dd date ?parameters= application: user usage parameter ,... &filters= application: user usage parameter relational operator usage parameter's value ,... &maxResults= number of events listed on each page of the report The userKey can be either the primary email address of the user in the report or the user's unique Google Workspace profileId .

