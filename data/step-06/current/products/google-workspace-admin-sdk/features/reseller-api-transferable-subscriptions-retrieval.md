---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.724Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API transferable subscriptions retrieval"
feature_slug: "reseller-api-transferable-subscriptions-retrieval"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
  - "https://developers.google.com/workspace/admin/directory/reference/rest"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html"
keywords:
  - "reseller"
  - "transferable"
  - "subscriptions"
  - "retrieval"
  - "can"
  - "retrieve"
  - "all"
  - "customer"
---

# Reseller API transferable subscriptions retrieval

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Reseller API can retrieve all transferable subscriptions for a customer using the customerId and customerAuthToken parameters.

## Extended Definition

The Reseller API can retrieve all transferable subscriptions for a customer using the customerId and customerAuthToken parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- [https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html)

## Supporting Pages

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Retrieve a customer usage report To retrieve report of your account activities use the following GET HTTP request and include the authorization token described in the authorization documentation .
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- Home Google Workspace Admin console Guides Send feedback Reports API: Customers Usage Report Stay organized with collections Save and categorize content based on your preferences.

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: resources.features Methods delete DELETE /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Deletes a feature. get GET /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Retrieves a feature. insert POST /admin/directory/v1/customer/{customer}/resources/features Inserts a feature. list GET /admin/directory/v1/customer/{customer}/resources/features Retrieves a list of features for an account. patch PATCH /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Patches a feature. rename POST /admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename Renames a feature. update PUT /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Updates a feature.
- REST Resource: resources.calendars Methods delete DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Deletes a calendar resource. get GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Retrieves a calendar resource. insert POST /admin/directory/v1/customer/{customer}/resources/calendars Inserts a calendar resource. list GET /admin/directory/v1/customer/{customer}/resources/calendars Retrieves a list of calendar resources for an account. patch PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Patches a calendar resource. update PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Updates a calendar resource.
- REST Resource: orgunits Methods delete DELETE /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Removes an organizational unit. get GET /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Retrieves an organizational unit. insert POST /admin/directory/v1/customer/{customerId}/orgunits Adds an organizational unit. list GET /admin/directory/v1/customer/{customerId}/orgunits Retrieves a list of all organizational units for an account. patch PATCH /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Updates an organizational unit. update PUT /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath= } Updates an organizational unit.

### "Configure the OAuth consent screen and choose scopes \_|\_ Google Workspace\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html)
- Source ID: `site-docs-reference-required-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

