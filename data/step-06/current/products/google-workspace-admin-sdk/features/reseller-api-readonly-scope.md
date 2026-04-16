---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.713Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API readonly scope"
feature_slug: "reseller-api-readonly-scope"
latest_feature_date: "2014-08-04"
deprecation_date: "2014-08-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get"
keywords:
  - "reseller"
  - "readonly"
  - "scope"
  - "read"
  - "only"
  - "oauth"
  - "deprecated"
  - "2014"
---

# Reseller API readonly scope

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

A read-only OAuth scope for the Reseller API; deprecated on 2014-08-04.

## Extended Definition

A read-only OAuth scope for the Reseller API; deprecated on 2014-08-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get)

## Supporting Pages

### "Configure the OAuth consent screen and choose scopes \_|\_ Google Workspace\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html)
- Source ID: `site-docs-reference-required-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All apps require an OAuth consent screen, but explicitly listing scopes is necessary only for apps used outside your organization, and certain scope categories necessitate additional reviews by Google.
- All apps using OAuth 2.0 require a consent screen configuration, but you only need to list scopes for apps used by people outside your Google Workspace organization.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["OAuth 2.0 requires configuring a consent screen, defining the app's project details, policies, and authorization scopes.
- Consider the following types of scopes: Basic app verification required Additional app verification required Security assessment required Non-sensitive scopes (recommended) Grant access only to limited data that's immediately relevant to a specific action. check — — Sensitive scopes Grant access to personal user data, resources, or actions. check check — Restricted scopes Grant access to highly-sensitive or extensive user data or actions. check check check Next step Create access credentials for your app.

### REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Example: "3.5s" . deviceFiles[] object A list of device files to download (Read-only) deviceFiles[].name string File name deviceFiles[].type string File type deviceFiles[].downloadUrl string File download URL deviceFiles[].createTime string Date and time the file was created systemRamFreeReports[] object Reports of amounts of available RAM memory (Read-only) systemRamFreeReports[].reportTime string Date and time the report was received. systemRamFreeReports[].systemRamFreeInfo[] string ( int64 format) lastKnownNetwork[] object Contains last known network (Read-only) lastKnownNetwork[].ipAddress string The IP address. lastKnownNetwork[].wanIpAddress string The WAN IP address. autoUpdateExpiration (deprecated) string ( int64 format) This item is deprecated! (Read-only) The timestamp after which the device will stop receiving Chrome updates or support.
- This is only present if the user type is USER TYPE MANAGED . activeTimeRanges[] object A list of active time ranges (Read-only). activeTimeRanges[].activeTime integer Duration of usage in milliseconds. activeTimeRanges[].date string Date of usage. ethernetMacAddress string The device's MAC address on the ethernet network interface. annotatedAssetId string The asset identifier as noted by an administrator or specified during enrollment. etag string ETag of the resource. diskVolumeReports[] object Reports of disk space and other info about mounted/connected volumes. diskVolumeReports[].volumeInfo[] object Disk volumes diskVolumeReports[].volumeInfo[].volumeId string Volume id diskVolumeReports[].volumeInfo[].storageTotal string ( int64 format) Total disk space [in bytes] diskVolumeReports[].volumeInfo[].storageFree string ( int64 format) Free disk space [in bytes] systemRamTotal string ( int64 format) Total RAM on the device in bytes cpuStatusReports[] object Reports of CPU utilization and temperature (Read-only) cpuStatusReports[].reportTime string Date and time the report was received. cpuStatusReports[].cpuUtilizationPercentageInfo[] integer cpuStatusReports[].cpuTemperatureInfo[] object A list of CPU temperature samples. cpuStatusReports[].cpuTemperatureInfo[].temperature integer Temperature in Celsius degrees. cpuStatusReports[].cpuTemperatureInfo[].label string CPU label cpuInfo[] object Information regarding CPU specs in the device. cpuInfo[].model string The CPU model name. cpuInfo[].architecture string The CPU architecture. cpuInfo[].maxClockSpeedKhz integer The max CPU clock speed in kHz. cpuInfo[].logicalCpus[] object Information for the Logical CPUs cpuInfo[].logicalCpus[].maxScalingFrequencyKhz integer Maximum frequency the CPU is allowed to run at, by policy. cpuInfo[].logicalCpus[].currentScalingFrequencyKhz integer Current frequency the CPU is running at. cpuInfo[].logicalCpus[].idleDuration string ( Duration format) Idle time since last boot.
- For more information about how to create an organizational structure for your device, see the administration help center . osUpdateStatus object ( OsUpdateStatus ) The status of the OS updates for the device. firstEnrollmentTime string Date and time for the first time the device was enrolled. lastDeprovisionTimestamp string (Read-only) Date and time for the last deprovision of the device. deprovisionReason enum ( DeprovisionReason ) (Read-only) Deprovision reason. deviceLicenseType enum ( DeviceLicenseType ) Output only.
- Type is always "SCREENSHOT FILE". (Read-only) screenshotFiles[].name string File name screenshotFiles[].type string File type screenshotFiles[].downloadUrl string File download URL screenshotFiles[].createTime string Date and time the file was created orgUnitId string The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId.

### Method: chromeosdevices.get \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly For more information, see the Authorization guide .
- Enums BASIC Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user) FULL Includes all metadata fields Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Query parameters Parameters projection enum ( Projection ) Determines whether the response contains the full list of properties or only a subset.

