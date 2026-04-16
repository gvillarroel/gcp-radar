---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.709Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "ChromeOS devices customer usage report"
feature_slug: "chromeos-devices-customer-usage-report"
latest_feature_date: "2014-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands"
keywords:
  - "chromeos"
  - "devices"
  - "customer"
  - "usage"
  - "report"
  - "shows"
  - "device"
  - "across"
---

# ChromeOS devices customer usage report

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

A report that shows ChromeOS device usage across a domain.

## Extended Definition

A report that shows ChromeOS device usage across a domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)

## Supporting Pages

### "Method: chromeosdevices.moveDevicesToOu \_|\_ Admin console \_|\_ Google\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu The URL uses gRPC Transcoding syntax.
- ChromeOsMoveDevicesToOu JSON representation { "deviceIds" : [ string ] } Fields deviceIds[] string Chrome OS devices to be moved to OU Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ID of the Google Workspace account Query parameters Parameters orgUnitPath string Full path of the target organizational unit or its ID Request body The request body contains an instance of ChromeOsMoveDevicesToOu .
- Home Google Workspace Admin console Reference Send feedback Method: chromeosdevices.moveDevicesToOu Stay organized with collections Save and categorize content based on your preferences.

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "deviceId" : string , "serialNumber" : string , "status" : string , "lastSync" : string , "supportEndDate" : string , "annotatedUser" : string , "annotatedLocation" : string , "notes" : string , "model" : string , "meid" : string , "orderNumber" : string , "willAutoRenew" : boolean , "osVersion" : string , "platformVersion" : string , "firmwareVersion" : string , "macAddress" : string , "bootMode" : string , "lastEnrollmentTime" : string , "kind" : string , "recentUsers" : [ { "type" : string , "email" : string } ] , "activeTimeRanges" : [ { "activeTime" : integer , "date" : string } ] , "ethernetMacAddress" : string , "annotatedAssetId" : string , "etag" : string , "diskVolumeReports" : [ { "volumeInfo" : [ { "volumeId" : string , "storageTotal" : string , "storageFree" : string } ] } ] , "systemRamTotal" : string , "cpuStatusReports" : [ { "reportTime" : string , "cpuUtilizationPercentageInfo" : [ integer ] , "cpuTemperatureInfo" : [ { "temperature" : integer , "label" : string } ] } ] , "cpuInfo" : [ { "model" : string , "architecture" : string , "maxClockSpeedKhz" : integer , "logicalCpus" : [ { "maxScalingFrequencyKhz" : integer , "currentScalingFrequencyKhz" : integer , "idleDuration" : string , "cStates" : [ { "displayName" : string , "sessionDuration" : string } ] } ] } ] , "deviceFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "systemRamFreeReports" : [ { "reportTime" : string , "systemRamFreeInfo" : [ string ] } ] , "lastKnownNetwork" : [ { "ipAddress" : string , "wanIpAddress" : string } ] , "autoUpdateExpiration" : string , "ethernetMacAddress0" : string , "dockMacAddress" : string , "manufactureDate" : string , "orgUnitPath" : string , "tpmVersionInfo" : { "family" : string , "specLevel" : string , "manufacturer" : string , "tpmModel" : string , "firmwareVersion" : string , "vendorSpecific" : string } , "screenshotFiles" : [ { "name" : string , "type" : string , "downloadUrl" : string , "createTime" : string } ] , "orgUnitId" : string , "osUpdateStatus" : { object ( OsUpdateStatus ) } , "firstEnrollmentTime" : string , "lastDeprovisionTimestamp" : string , "deprovisionReason" : enum ( DeprovisionReason ) , "deviceLicenseType" : enum ( DeviceLicenseType ) , "backlightInfo" : [ { object ( BacklightInfo ) } ] , "autoUpdateThrough" : string , "extendedSupportEligible" : boolean , "extendedSupportStart" : string , "extendedSupportEnabled" : boolean , "fanInfo" : [ { object ( FanInfo ) } ] , "chromeOsType" : enum ( ChromeOsType ) , "diskSpaceUsage" : { object ( ByteUsage ) } , "osVersionCompliance" : enum ( Compliance ) , "bluetoothAdapterInfo" : [ { object ( BluetoothAdapterInfo ) } ] } Fields deviceId string The unique ID of the Chrome device. serialNumber string The Chrome device serial number entered when the device was enabled.
- This is only present if the user type is USER TYPE MANAGED . activeTimeRanges[] object A list of active time ranges (Read-only). activeTimeRanges[].activeTime integer Duration of usage in milliseconds. activeTimeRanges[].date string Date of usage. ethernetMacAddress string The device's MAC address on the ethernet network interface. annotatedAssetId string The asset identifier as noted by an administrator or specified during enrollment. etag string ETag of the resource. diskVolumeReports[] object Reports of disk space and other info about mounted/connected volumes. diskVolumeReports[].volumeInfo[] object Disk volumes diskVolumeReports[].volumeInfo[].volumeId string Volume id diskVolumeReports[].volumeInfo[].storageTotal string ( int64 format) Total disk space [in bytes] diskVolumeReports[].volumeInfo[].storageFree string ( int64 format) Free disk space [in bytes] systemRamTotal string ( int64 format) Total RAM on the device in bytes cpuStatusReports[] object Reports of CPU utilization and temperature (Read-only) cpuStatusReports[].reportTime string Date and time the report was received. cpuStatusReports[].cpuUtilizationPercentageInfo[] integer cpuStatusReports[].cpuTemperatureInfo[] object A list of CPU temperature samples. cpuStatusReports[].cpuTemperatureInfo[].temperature integer Temperature in Celsius degrees. cpuStatusReports[].cpuTemperatureInfo[].label string CPU label cpuInfo[] object Information regarding CPU specs in the device. cpuInfo[].model string The CPU model name. cpuInfo[].architecture string The CPU architecture. cpuInfo[].maxClockSpeedKhz integer The max CPU clock speed in kHz. cpuInfo[].logicalCpus[] object Information for the Logical CPUs cpuInfo[].logicalCpus[].maxScalingFrequencyKhz integer Maximum frequency the CPU is allowed to run at, by policy. cpuInfo[].logicalCpus[].currentScalingFrequencyKhz integer Current frequency the CPU is running at. cpuInfo[].logicalCpus[].idleDuration string ( Duration format) Idle time since last boot.
- Methods action (deprecated) Use BatchChangeChromeOsDeviceStatus instead. get Retrieves a Chrome OS device's properties. list Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- For the Chromeosdevices resource, the value is admin#directory#chromeosdevice . recentUsers[] object A list of recent device users, in descending order, by last login time. recentUsers[].type string The type of the user.

### "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback REST Resource: customer.devices.chromeos.commands Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "commandId" : string , "type" : enum ( CommandType ) , "issueTime" : string , "state" : enum ( State ) , "commandExpireTime" : string , "commandResult" : { object ( DirectoryChromeosdevicesCommandResult ) } , "payload" : string } Fields commandId string ( int64 format) Unique ID of a device command. type enum ( CommandType ) The type of the command. issueTime string ( Timestamp format) The timestamp when the command was issued by the admin.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . commandResult object ( DirectoryChromeosdevicesCommandResult ) The result of the command execution. payload string The payload that the command specified, if any.
- The logs can be downloaded from the downloadUrl link present in deviceFiles field of chromeosdevices FETCH CRD AVAILABILITY INFO Fetches available type(s) of Chrome Remote Desktop sessions (private or shared) that can be used to remotely connect to the device.

