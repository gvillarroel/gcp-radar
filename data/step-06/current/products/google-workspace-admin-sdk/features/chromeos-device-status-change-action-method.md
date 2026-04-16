---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.697Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "ChromeOS device status change action method"
feature_slug: "chromeos-device-status-change-action-method"
latest_feature_date: "2023-12-27"
deprecation_date: "2023-12-27"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list"
keywords:
  - "chromeos"
  - "device"
  - "status"
  - "change"
  - "action"
  - "method"
  - "directory"
  - "chromeosdevices"
---

# ChromeOS device status change action method

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Directory API chromeosdevices action method changes ChromeOS device status; deprecated on 2023-12-27.

## Extended Definition

The Directory API chromeosdevices action method changes ChromeOS device status; deprecated on 2023-12-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)

## Supporting Pages

### Method: chromeosdevices.action \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action)
- Source ID: `site-api-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback Method: chromeosdevices.action Stay organized with collections Save and categorize content based on your preferences.
- Use BatchChangeChromeOsDeviceStatus instead.
- HTTP request POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action The URL uses gRPC Transcoding syntax.
- JSON representation { "action" : string , "deprovisionReason" : string } Fields action string chromeosdevices.action to be taken on the Chrome OS device.

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods action (deprecated) Use BatchChangeChromeOsDeviceStatus instead. get Retrieves a Chrome OS device's properties. list Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- For the Chromeosdevices resource, the value is admin#directory#chromeosdevice . recentUsers[] object A list of recent device users, in descending order, by last login time. recentUsers[].type string The type of the user.
- JSON representation { "deviceId" : string , "serialNumber" : string , "status" : string , "lastSync" : string , "supportEndDate" : string , "annotatedUser" : string , "annotatedLocation" : string , "notes" : string , "model" : string , "meid" : string , "orderNumber" : string , "willAutoRenew" : boolean , "osVersion" : string , "platformVersion" : string , "firmwareVersion" : string , "macAddress" : string , "bootMode" : string , "lastEnrollmentTime" : string , "kind" : string , "recentUsers" : [ { "type" : string , "email" : string } ] , "activeTimeRanges" : [ { "activeTime" : integer , "date" : string } ] , "ethernetMacAddress" : string , "annotatedAssetId" : string , "etag" : string , "diskVolumeReports" : [ { "volumeInfo" : [ { "volumeId" : string , "storageTotal" : string , "storageFree" : string } ] } ] , "systemRamTotal" : string , "cpuStatusReports" : [ { "reportTime" : string , "cpuUtilizationPercentageInfo" : [ integer ] , "cpuTemperatureInfo" : [ { "temperature" : integer , "label" : string } ] } ] , "cpuInfo" : [ { "model" : string , "architecture" : string , "maxClockSpeedKhz" : integer , "logicalCpus" : [ { "maxScalingFrequencyKhz" : integer , "currentScalingFrequencyKhz" : integer , "idleDuration" : string , "cStates" : [ { "displayName" : string , "sessionDuration" : string } ] } ] } ] , "deviceFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "systemRamFreeReports" : [ { "reportTime" : string , "systemRamFreeInfo" : [ string ] } ] , "lastKnownNetwork" : [ { "ipAddress" : string , "wanIpAddress" : string } ] , "autoUpdateExpiration" : string , "ethernetMacAddress0" : string , "dockMacAddress" : string , "manufactureDate" : string , "orgUnitPath" : string , "tpmVersionInfo" : { "family" : string , "specLevel" : string , "manufacturer" : string , "tpmModel" : string , "firmwareVersion" : string , "vendorSpecific" : string } , "screenshotFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "orgUnitId" : string , "osUpdateStatus" : { object ( OsUpdateStatus ) } , "firstEnrollmentTime" : string , "lastDeprovisionTimestamp" : string , "deprovisionReason" : enum ( DeprovisionReason ) , "deviceLicenseType" : enum ( DeviceLicenseType ) , "backlightInfo" : [ { object ( BacklightInfo ) } ] , "autoUpdateThrough" : string , "extendedSupportEligible" : boolean , "extendedSupportStart" : string , "extendedSupportEnabled" : boolean , "fanInfo" : [ { object ( FanInfo ) } ] , "chromeOsType" : enum ( ChromeOsType ) , "diskSpaceUsage" : { object ( ByteUsage ) } , "osVersionCompliance" : enum ( Compliance ) , "bluetoothAdapterInfo" : [ { object ( BluetoothAdapterInfo ) } ] } Fields deviceId string The unique ID of the Chrome device. serialNumber string The Chrome device serial number entered when the device was enabled.
- Home Google Workspace Admin console Reference Send feedback REST Resource: chromeosdevices Stay organized with collections Save and categorize content based on your preferences.

### Method: chromeosdevices.list \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback Method: chromeosdevices.list Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: JSON representation { "kind" : string , "etag" : string , "chromeosdevices" : [ { object ( ChromeOsDevice ) } ] , "nextPageToken" : string } Fields kind string Kind of resource this is. etag string ETag of the resource. chromeosdevices[] object ( ChromeOsDevice ) A list of Chrome OS Device objects. nextPageToken string Token used to access the next page of this result.
- The follow-on request's pageToken query parameter is the nextPageToken from your previous response. projection enum ( Projection ) Determines whether the response contains the full list of properties or only a subset. query string Search string in the format given at chromeosdevices.list query operators . sortOrder enum ( SortOrder ) Whether to return results in ascending or descending order.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly For more information, see the Authorization guide .

