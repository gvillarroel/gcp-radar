---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.712Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Mobiledevices resource"
feature_slug: "mobiledevices-resource"
latest_feature_date: "2014-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/directory/reference/rest"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands"
keywords:
  - "mobiledevices"
  - "resource"
  - "directory"
  - "exposes"
  - "mobile"
  - "device"
  - "details"
  - "such"
---

# Mobiledevices resource

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

A Directory API resource that exposes mobile device details such as identifiers, language, and security state.

## Extended Definition

A Directory API resource that exposes mobile device details such as identifiers, language, and security state.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)

## Supporting Pages

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the Chromeosdevices resource, the value is admin#directory#chromeosdevice . recentUsers[] object A list of recent device users, in descending order, by last login time. recentUsers[].type string The type of the user.
- This is only present if the user type is USER TYPE MANAGED . activeTimeRanges[] object A list of active time ranges (Read-only). activeTimeRanges[].activeTime integer Duration of usage in milliseconds. activeTimeRanges[].date string Date of usage. ethernetMacAddress string The device's MAC address on the ethernet network interface. annotatedAssetId string The asset identifier as noted by an administrator or specified during enrollment. etag string ETag of the resource. diskVolumeReports[] object Reports of disk space and other info about mounted/connected volumes. diskVolumeReports[].volumeInfo[] object Disk volumes diskVolumeReports[].volumeInfo[].volumeId string Volume id diskVolumeReports[].volumeInfo[].storageTotal string ( int64 format) Total disk space [in bytes] diskVolumeReports[].volumeInfo[].storageFree string ( int64 format) Free disk space [in bytes] systemRamTotal string ( int64 format) Total RAM on the device in bytes cpuStatusReports[] object Reports of CPU utilization and temperature (Read-only) cpuStatusReports[].reportTime string Date and time the report was received. cpuStatusReports[].cpuUtilizationPercentageInfo[] integer cpuStatusReports[].cpuTemperatureInfo[] object A list of CPU temperature samples. cpuStatusReports[].cpuTemperatureInfo[].temperature integer Temperature in Celsius degrees. cpuStatusReports[].cpuTemperatureInfo[].label string CPU label cpuInfo[] object Information regarding CPU specs in the device. cpuInfo[].model string The CPU model name. cpuInfo[].architecture string The CPU architecture. cpuInfo[].maxClockSpeedKhz integer The max CPU clock speed in kHz. cpuInfo[].logicalCpus[] object Information for the Logical CPUs cpuInfo[].logicalCpus[].maxScalingFrequencyKhz integer Maximum frequency the CPU is allowed to run at, by policy. cpuInfo[].logicalCpus[].currentScalingFrequencyKhz integer Current frequency the CPU is running at. cpuInfo[].logicalCpus[].idleDuration string ( Duration format) Idle time since last boot.
- Methods action (deprecated) Use BatchChangeChromeOsDeviceStatus instead. get Retrieves a Chrome OS device's properties. list Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- If the device does not have this information, this property is not included in the response. meid string The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device.

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: mobiledevices Methods action POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action Takes an action that affects a mobile device. delete DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Removes a mobile device. get GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Retrieves a mobile device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/mobile Retrieves a paginated list of all user-owned mobile devices for an account.
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.

### "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DirectoryChromeosdevicesCommand Information regarding a command that was issued to a device.
- JSON representation { "commandId" : string , "type" : enum ( CommandType ) , "issueTime" : string , "state" : enum ( State ) , "commandExpireTime" : string , "commandResult" : { object ( DirectoryChromeosdevicesCommandResult ) } , "payload" : string } Fields commandId string ( int64 format) Unique ID of a device command. type enum ( CommandType ) The type of the command. issueTime string ( Timestamp format) The timestamp when the command was issued by the admin.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . commandResult object ( DirectoryChromeosdevicesCommandResult ) The result of the command execution. payload string The payload that the command specified, if any.
- Home Google Workspace Admin console Reference Send feedback REST Resource: customer.devices.chromeos.commands Stay organized with collections Save and categorize content based on your preferences.

