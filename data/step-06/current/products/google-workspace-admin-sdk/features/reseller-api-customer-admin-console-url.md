---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.723Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API customer Admin console URL"
feature_slug: "reseller-api-customer-admin-console-url"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
keywords:
  - "reseller"
  - "customer"
  - "admin"
  - "console"
  - "url"
  - "resource"
  - "exposes"
  - "read"
---

# Reseller API customer Admin console URL

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The customer resource exposes a read-only resourceUiUrl that links to the customer's Admin console dashboard.

## Extended Definition

The customer resource exposes a read-only resourceUiUrl that links to the customer's Admin console dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)

## Supporting Pages

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is only present if the user type is USER TYPE MANAGED . activeTimeRanges[] object A list of active time ranges (Read-only). activeTimeRanges[].activeTime integer Duration of usage in milliseconds. activeTimeRanges[].date string Date of usage. ethernetMacAddress string The device's MAC address on the ethernet network interface. annotatedAssetId string The asset identifier as noted by an administrator or specified during enrollment. etag string ETag of the resource. diskVolumeReports[] object Reports of disk space and other info about mounted/connected volumes. diskVolumeReports[].volumeInfo[] object Disk volumes diskVolumeReports[].volumeInfo[].volumeId string Volume id diskVolumeReports[].volumeInfo[].storageTotal string ( int64 format) Total disk space [in bytes] diskVolumeReports[].volumeInfo[].storageFree string ( int64 format) Free disk space [in bytes] systemRamTotal string ( int64 format) Total RAM on the device in bytes cpuStatusReports[] object Reports of CPU utilization and temperature (Read-only) cpuStatusReports[].reportTime string Date and time the report was received. cpuStatusReports[].cpuUtilizationPercentageInfo[] integer cpuStatusReports[].cpuTemperatureInfo[] object A list of CPU temperature samples. cpuStatusReports[].cpuTemperatureInfo[].temperature integer Temperature in Celsius degrees. cpuStatusReports[].cpuTemperatureInfo[].label string CPU label cpuInfo[] object Information regarding CPU specs in the device. cpuInfo[].model string The CPU model name. cpuInfo[].architecture string The CPU architecture. cpuInfo[].maxClockSpeedKhz integer The max CPU clock speed in kHz. cpuInfo[].logicalCpus[] object Information for the Logical CPUs cpuInfo[].logicalCpus[].maxScalingFrequencyKhz integer Maximum frequency the CPU is allowed to run at, by policy. cpuInfo[].logicalCpus[].currentScalingFrequencyKhz integer Current frequency the CPU is running at. cpuInfo[].logicalCpus[].idleDuration string ( Duration format) Idle time since last boot.
- Home Google Workspace Admin console Reference Send feedback REST Resource: chromeosdevices Stay organized with collections Save and categorize content based on your preferences.
- For more information about how to create an organizational structure for your device, see the administration help center . osUpdateStatus object ( OsUpdateStatus ) The status of the OS updates for the device. firstEnrollmentTime string Date and time for the first time the device was enrolled. lastDeprovisionTimestamp string (Read-only) Date and time for the last deprovision of the device. deprovisionReason enum ( DeprovisionReason ) (Read-only) Deprovision reason. deviceLicenseType enum ( DeviceLicenseType ) Output only.
- SHIPPED : The device is shipped from Google inventory. (Deprecated) UNKNOWN : The status of the device cannot be determined. lastSync string The date and time the device was last synchronized with the policy settings in the Admin console.

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Notification messages for Activity resource events have the general form: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 0 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 398348u3tu83ut8uu38 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret08u3rv24htgh289g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName X-Goog-Resource-State: eventName X-Goog-Message-Number: 10 { "kind": "admin#reports#activity", "id": { "time": datetime , "uniqueQualifier": long , "applicationName": string , "customerId": string }, "actor": { "callerType": string , "email": string , "profileId": long }, "ownerDomain": string , "ipAddress": string , "events": [ { "type": string , "name": string , "parameters": [ { "name": string , "value": string , "intValue": long , "boolValue": boolean } ] } ] } An example of an admin activity event: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 596 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 245t1234tt83trrt333 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret987df98743md8g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin?alt=json X-Goog-Resource-State: CREATE USER X-Goog-Message-Number: 23 { "kind": "admin#reports#activity", "id": { "time": "2013-09-10T18:23:35.808Z", "uniqueQualifier": "-0987654321", "applicationName": "admin", "customerId": "ABCD012345" }, "actor": { "callerType": "USER", "email": "admin@example.com", "profileId": "0123456789987654321" }, "ownerDomain": "apps-reporting.example.com", "ipAddress": "192.0.2.0", "events": [ { "type": "USER SETTINGS", "name": "CREATE USER", "parameters": [ { "name": "USER EMAIL", "value": "liz@example.com" } ] } ] } Respond to notifications To indicate success, you can return any of the following status codes: 200 , 201 , 202 , 204 , or 102 .
- Examples All watch requests for the Activities resource have the general form: POST https://admin.googleapis.com/admin/reports/v1/activity/users/ userKey or all /applications/ applicationName /watch Authorization: Bearer auth token for current user Content-Type: application/json { "id": "01234567-89ab-cdef-0123456789ab", "type": "web hook", "address": "https://mydomain.com/notifications", ... "token": "target=myApp-myFilesChannelDest", "payload": true, "expiration": 3600 } The request body has the following properties: id : A UUID or similar unique string that identifies this channel. type : The type of delivery mechanism.
- The message body of the watch response provides information about the notification channel you just created, as shown in the example below. { "kind": "api#channel", "id": "reportsApiId", "resourceId": "o3hgv1538sdjfh", "resourceUri": "https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName ", "token": "target=myApp-myFilesChannelDest", "expiration": 3600 } In addition to the properties you sent as part of your request, the returned information also includes the resourceId and resourceUri to identify the resource being watched on this notification channel.
- The following code sample shows how to stop receiving notifications: POST https://www.googleapis.com/admin/reports v1/channels/stop Authorization: Bearer CURRENT USER AUTH TOKEN Content-Type: application/json { "id": "4ba78bf0-6a47-11e2-bcfd-0800200c9a66", "resourceId": "ret08u3rv24htgh289g" } Special Considerations When working with push notifications, keep the following in mind: Notifications are not 100% reliable.

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- Home Google Workspace Admin console Guides Send feedback Reports API: Customers Usage Report Stay organized with collections Save and categorize content based on your preferences.
- Retrieve a customer usage report To retrieve report of your account activities use the following GET HTTP request and include the authorization token described in the authorization documentation .

