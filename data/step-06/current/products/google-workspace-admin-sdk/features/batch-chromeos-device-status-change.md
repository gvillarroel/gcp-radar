---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.696Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Batch ChromeOS device status change"
feature_slug: "batch-chromeos-device-status-change"
latest_feature_date: "2023-12-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands"
  - "https://developers.google.com/workspace/admin/directory/reference/rest"
keywords:
  - "batch"
  - "chromeos"
  - "device"
  - "status"
  - "change"
  - "directory"
  - "can"
  - "devices"
---

# Batch ChromeOS device status change

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The Directory API can change the status of ChromeOS devices in batch through the customer.devices.chromeos resource.

## Extended Definition

The Directory API can change the status of ChromeOS devices in batch through the customer.devices.chromeos resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)

## Supporting Pages

### "REST Resource: customer.devices.chromeos \_|\_ Admin console \_|\_ Google\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos)
- Source ID: `site-api-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback REST Resource: customer.devices.chromeos Stay organized with collections Save and categorize content based on your preferences.
- Methods batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand Issues a command for the device to execute.

### "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback REST Resource: customer.devices.chromeos.commands Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "commandId" : string , "type" : enum ( CommandType ) , "issueTime" : string , "state" : enum ( State ) , "commandExpireTime" : string , "commandResult" : { object ( DirectoryChromeosdevicesCommandResult ) } , "payload" : string } Fields commandId string ( int64 format) Unique ID of a device command. type enum ( CommandType ) The type of the command. issueTime string ( Timestamp format) The timestamp when the command was issued by the admin.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . commandResult object ( DirectoryChromeosdevicesCommandResult ) The result of the command execution. payload string The payload that the command specified, if any.
- Resource: DirectoryChromeosdevicesCommand Information regarding a command that was issued to a device.

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest](https://developers.google.com/workspace/admin/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.
- REST Resource: customer.devices.chromeos.commands Methods get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId} Gets command data a specific command issued to the device.
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.

