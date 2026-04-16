---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.711Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Chromeosdevices resource"
feature_slug: "chromeosdevices-resource"
latest_feature_date: "2014-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands"
keywords:
  - "chromeosdevices"
  - "resource"
  - "directory"
  - "exposes"
  - "chromeos"
  - "device"
  - "details"
  - "including"
---

# Chromeosdevices resource

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

A Directory API resource that exposes ChromeOS device details including recent users and Ethernet MAC address.

## Extended Definition

A Directory API resource that exposes ChromeOS device details including recent users and Ethernet MAC address.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)

## Supporting Pages

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the Chromeosdevices resource, the value is admin#directory#chromeosdevice . recentUsers[] object A list of recent device users, in descending order, by last login time. recentUsers[].type string The type of the user.
- Home Google Workspace Admin console Reference Send feedback REST Resource: chromeosdevices Stay organized with collections Save and categorize content based on your preferences.
- Methods action (deprecated) Use BatchChangeChromeOsDeviceStatus instead. get Retrieves a Chrome OS device's properties. list Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- Resource: ChromeOsDevice Google Chrome devices run on the Chrome OS .

### Method: chromeosdevices.list \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response body If successful, the response body contains data with the following structure: JSON representation { "kind" : string , "etag" : string , "chromeosdevices" : [ { object ( ChromeOsDevice ) } ] , "nextPageToken" : string } Fields kind string Kind of resource this is. etag string ETag of the resource. chromeosdevices[] object ( ChromeOsDevice ) A list of Chrome OS Device objects. nextPageToken string Token used to access the next page of this result.
- The follow-on request's pageToken query parameter is the nextPageToken from your previous response. projection enum ( Projection ) Determines whether the response contains the full list of properties or only a subset. query string Search string in the format given at chromeosdevices.list query operators . sortOrder enum ( SortOrder ) Whether to return results in ascending or descending order.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly For more information, see the Authorization guide .
- Home Google Workspace Admin console Reference Send feedback Method: chromeosdevices.list Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DirectoryChromeosdevicesCommand Information regarding a command that was issued to a device.
- JSON representation { "commandId" : string , "type" : enum ( CommandType ) , "issueTime" : string , "state" : enum ( State ) , "commandExpireTime" : string , "commandResult" : { object ( DirectoryChromeosdevicesCommandResult ) } , "payload" : string } Fields commandId string ( int64 format) Unique ID of a device command. type enum ( CommandType ) The type of the command. issueTime string ( Timestamp format) The timestamp when the command was issued by the admin.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . commandResult object ( DirectoryChromeosdevicesCommandResult ) The result of the command execution. payload string The payload that the command specified, if any.
- DirectoryChromeosdevicesCommandResult The result of executing a command.

