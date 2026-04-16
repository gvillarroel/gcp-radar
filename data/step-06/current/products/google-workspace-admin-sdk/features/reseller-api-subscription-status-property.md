---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.725Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API subscription status property"
feature_slug: "reseller-api-subscription-status-property"
latest_feature_date: "2013-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel"
keywords:
  - "reseller"
  - "subscription"
  - "status"
  - "property"
  - "resource"
  - "includes"
  - "active"
  - "cancelled"
---

# Reseller API subscription status property

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The subscription resource includes a status property with ACTIVE, CANCELLED, PENDING, or SUSPENDED values.

## Extended Definition

The subscription resource includes a status property with ACTIVE, CANCELLED, PENDING, or SUSPENDED values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel](https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel)

## Supporting Pages

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is only present if the user type is USER TYPE MANAGED . activeTimeRanges[] object A list of active time ranges (Read-only). activeTimeRanges[].activeTime integer Duration of usage in milliseconds. activeTimeRanges[].date string Date of usage. ethernetMacAddress string The device's MAC address on the ethernet network interface. annotatedAssetId string The asset identifier as noted by an administrator or specified during enrollment. etag string ETag of the resource. diskVolumeReports[] object Reports of disk space and other info about mounted/connected volumes. diskVolumeReports[].volumeInfo[] object Disk volumes diskVolumeReports[].volumeInfo[].volumeId string Volume id diskVolumeReports[].volumeInfo[].storageTotal string ( int64 format) Total disk space [in bytes] diskVolumeReports[].volumeInfo[].storageFree string ( int64 format) Free disk space [in bytes] systemRamTotal string ( int64 format) Total RAM on the device in bytes cpuStatusReports[] object Reports of CPU utilization and temperature (Read-only) cpuStatusReports[].reportTime string Date and time the report was received. cpuStatusReports[].cpuUtilizationPercentageInfo[] integer cpuStatusReports[].cpuTemperatureInfo[] object A list of CPU temperature samples. cpuStatusReports[].cpuTemperatureInfo[].temperature integer Temperature in Celsius degrees. cpuStatusReports[].cpuTemperatureInfo[].label string CPU label cpuInfo[] object Information regarding CPU specs in the device. cpuInfo[].model string The CPU model name. cpuInfo[].architecture string The CPU architecture. cpuInfo[].maxClockSpeedKhz integer The max CPU clock speed in kHz. cpuInfo[].logicalCpus[] object Information for the Logical CPUs cpuInfo[].logicalCpus[].maxScalingFrequencyKhz integer Maximum frequency the CPU is allowed to run at, by policy. cpuInfo[].logicalCpus[].currentScalingFrequencyKhz integer Current frequency the CPU is running at. cpuInfo[].logicalCpus[].idleDuration string ( Duration format) Idle time since last boot.
- JSON representation { "deviceId" : string , "serialNumber" : string , "status" : string , "lastSync" : string , "supportEndDate" : string , "annotatedUser" : string , "annotatedLocation" : string , "notes" : string , "model" : string , "meid" : string , "orderNumber" : string , "willAutoRenew" : boolean , "osVersion" : string , "platformVersion" : string , "firmwareVersion" : string , "macAddress" : string , "bootMode" : string , "lastEnrollmentTime" : string , "kind" : string , "recentUsers" : [ { "type" : string , "email" : string } ] , "activeTimeRanges" : [ { "activeTime" : integer , "date" : string } ] , "ethernetMacAddress" : string , "annotatedAssetId" : string , "etag" : string , "diskVolumeReports" : [ { "volumeInfo" : [ { "volumeId" : string , "storageTotal" : string , "storageFree" : string } ] } ] , "systemRamTotal" : string , "cpuStatusReports" : [ { "reportTime" : string , "cpuUtilizationPercentageInfo" : [ integer ] , "cpuTemperatureInfo" : [ { "temperature" : integer , "label" : string } ] } ] , "cpuInfo" : [ { "model" : string , "architecture" : string , "maxClockSpeedKhz" : integer , "logicalCpus" : [ { "maxScalingFrequencyKhz" : integer , "currentScalingFrequencyKhz" : integer , "idleDuration" : string , "cStates" : [ { "displayName" : string , "sessionDuration" : string } ] } ] } ] , "deviceFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "systemRamFreeReports" : [ { "reportTime" : string , "systemRamFreeInfo" : [ string ] } ] , "lastKnownNetwork" : [ { "ipAddress" : string , "wanIpAddress" : string } ] , "autoUpdateExpiration" : string , "ethernetMacAddress0" : string , "dockMacAddress" : string , "manufactureDate" : string , "orgUnitPath" : string , "tpmVersionInfo" : { "family" : string , "specLevel" : string , "manufacturer" : string , "tpmModel" : string , "firmwareVersion" : string , "vendorSpecific" : string } , "screenshotFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "orgUnitId" : string , "osUpdateStatus" : { object ( OsUpdateStatus ) } , "firstEnrollmentTime" : string , "lastDeprovisionTimestamp" : string , "deprovisionReason" : enum ( DeprovisionReason ) , "deviceLicenseType" : enum ( DeviceLicenseType ) , "backlightInfo" : [ { object ( BacklightInfo ) } ] , "autoUpdateThrough" : string , "extendedSupportEligible" : boolean , "extendedSupportStart" : string , "extendedSupportEnabled" : boolean , "fanInfo" : [ { object ( FanInfo ) } ] , "chromeOsType" : enum ( ChromeOsType ) , "diskSpaceUsage" : { object ( ByteUsage ) } , "osVersionCompliance" : enum ( Compliance ) , "bluetoothAdapterInfo" : [ { object ( BluetoothAdapterInfo ) } ] } Fields deviceId string The unique ID of the Chrome device. serialNumber string The Chrome device serial number entered when the device was enabled.
- Methods action (deprecated) Use BatchChangeChromeOsDeviceStatus instead. get Retrieves a Chrome OS device's properties. list Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- For more information about how to create an organizational structure for your device, see the administration help center . osUpdateStatus object ( OsUpdateStatus ) The status of the OS updates for the device. firstEnrollmentTime string Date and time for the first time the device was enrolled. lastDeprovisionTimestamp string (Read-only) Date and time for the last deprovision of the device. deprovisionReason enum ( DeprovisionReason ) (Read-only) Deprovision reason. deviceLicenseType enum ( DeviceLicenseType ) Output only.

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Notification messages for Activity resource events have the general form: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 0 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 398348u3tu83ut8uu38 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret08u3rv24htgh289g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName X-Goog-Resource-State: eventName X-Goog-Message-Number: 10 { "kind": "admin#reports#activity", "id": { "time": datetime , "uniqueQualifier": long , "applicationName": string , "customerId": string }, "actor": { "callerType": string , "email": string , "profileId": long }, "ownerDomain": string , "ipAddress": string , "events": [ { "type": string , "name": string , "parameters": [ { "name": string , "value": string , "intValue": long , "boolValue": boolean } ] } ] } An example of an admin activity event: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 596 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 245t1234tt83trrt333 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret987df98743md8g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin?alt=json X-Goog-Resource-State: CREATE USER X-Goog-Message-Number: 23 { "kind": "admin#reports#activity", "id": { "time": "2013-09-10T18:23:35.808Z", "uniqueQualifier": "-0987654321", "applicationName": "admin", "customerId": "ABCD012345" }, "actor": { "callerType": "USER", "email": "admin@example.com", "profileId": "0123456789987654321" }, "ownerDomain": "apps-reporting.example.com", "ipAddress": "192.0.2.0", "events": [ { "type": "USER SETTINGS", "name": "CREATE USER", "parameters": [ { "name": "USER EMAIL", "value": "liz@example.com" } ] } ] } Respond to notifications To indicate success, you can return any of the following status codes: 200 , 201 , 202 , 204 , or 102 .
- The message body of the watch response provides information about the notification channel you just created, as shown in the example below. { "kind": "api#channel", "id": "reportsApiId", "resourceId": "o3hgv1538sdjfh", "resourceUri": "https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName ", "token": "target=myApp-myFilesChannelDest", "expiration": 3600 } In addition to the properties you sent as part of your request, the returned information also includes the resourceId and resourceUri to identify the resource being watched on this notification channel.
- Notification messages for Activities contain the following information in the request body: Property Description kind Identifies this as an Activity resource.
- The resourceUri property is the canonical URI of the watched resource in the context of the current API version, so it's version-specific.

### SubscriptionChannel \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel](https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "id" : string , "token" : string , "expiration" : string , "type" : string , "address" : string , "payload" : boolean , "params" : { string : string , ... } , "resourceId" : string , "resourceUri" : string , "kind" : string } Fields id string A UUID or similar unique string that identifies this channel. token string An arbitrary string delivered to the target address with each notification delivered over this channel.
- Stable across different API versions. resourceUri string A version-specific identifier for the watched resource. kind string Identifies this as a notification channel used to watch for changes to a resource, which is api#channel .
- Home Google Workspace Admin console Reference Send feedback SubscriptionChannel Stay organized with collections Save and categorize content based on your preferences.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . resourceId string An opaque ID that identifies the resource being watched on this channel.

