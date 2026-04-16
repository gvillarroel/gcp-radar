---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.723Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API customer subscriptions retrieval"
feature_slug: "reseller-api-customer-subscriptions-retrieval"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin"
keywords:
  - "reseller"
  - "customer"
  - "subscriptions"
  - "retrieval"
  - "can"
  - "retrieve"
  - "all"
  - "customerid"
---

# Reseller API customer subscriptions retrieval

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Reseller API can retrieve all of a customer's subscriptions using the customerId parameter.

## Extended Definition

The Reseller API can retrieve all of a customer's subscriptions using the customerId parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)

## Supporting Pages

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: orgunits Methods delete DELETE /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Removes an organizational unit. get GET /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Retrieves an organizational unit. insert POST /admin/directory/v1/customer/{customerId}/orgunits Adds an organizational unit. list GET /admin/directory/v1/customer/{customerId}/orgunits Retrieves a list of all organizational units for an account. patch PATCH /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Updates an organizational unit. update PUT /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Updates an organizational unit.
- REST Resource: schemas Methods delete DELETE /admin/directory/v1/customer/{customerId}/schemas/{schemaKey} Deletes a schema. get GET /admin/directory/v1/customer/{customerId}/schemas/{schemaKey} Retrieves a schema. insert POST /admin/directory/v1/customer/{customerId}/schemas Creates a schema. list GET /admin/directory/v1/customer/{customerId}/schemas Retrieves all schemas for a customer. patch PATCH /admin/directory/v1/customer/{customerId}/schemas/{schemaKey} Patches a schema. update PUT /admin/directory/v1/customer/{customerId}/schemas/{schemaKey} Updates a schema.
- REST Resource: mobiledevices Methods action POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action Takes an action that affects a mobile device. delete DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Removes a mobile device. get GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Retrieves a mobile device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/mobile Retrieves a paginated list of all user-owned mobile devices for an account.

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- Retrieve a customer usage report To retrieve report of your account activities use the following GET HTTP request and include the authorization token described in the authorization documentation .
- Home Google Workspace Admin console Guides Send feedback Reports API: Customers Usage Report Stay organized with collections Save and categorize content based on your preferences.

### Admin Activity Report \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin)
- Source ID: `site-docs-reference-required-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- GET https://admin.googleapis.com/admin/reports/v1/activity/users/all /applications/admin?customerId=C03az79cb Retrieve all activities by administrator To retrieve a report of all Admin console activities done by a specific administrator, use the following GET HTTP request and include the authorization token described in the authorization documentation .
- The customerId specifies which customer the report is to be retrieved for.
- For more information about the request's URL query strings and the response properties, see the API Reference . { "kind" : "reports#auditActivities" , "nextPageToken" : " the next page's token " , "items" : [ { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " report's unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in OAuth 2LO requests " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CHANGE GROUP SETTING" , "parameters" : [ { "name" : "SETTING NAME" , "value" : "WHO CAN JOIN" , "intValue" : " integer value of parameter " , "boolValue" : " boolean value of parameter " } ] } ] }, { "kind" : "audit#activity" , "id" : { "time" : "2011-06-17T15:39:18.460Z" , "uniqueQualifier" : " reports unique ID " , "applicationName" : "admin" , "customerId" : "C03az79cb" }, "actor" : { "callerType" : "USER" , "email" : "liz@example.com" , "profileId" : " user's unique Google Workspace profile ID " , "key" : " consumer key of requester in an OAuth 2LO request " }, "ownerDomain" : "example.com" , "ipAddress" : " user's IP address " , "events" : [ { "type" : "GROUP SETTINGS" , "name" : "CREATE GROUP" , "parameters" : [ { "name" : "GROUP EMAIL" , "value" : "helpdesk@example.com" , "intValue" : "" , "boolValue" : "" } ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/activity/users/ userKey /applications/ admin ?endTime= a date &startTime= a date &maxResults= maximum number of events returned on a response page &eventName= name of the administrative event The following example retrieves a report for all Admin console changes to a specific user's last name that were done by john@example.com .

