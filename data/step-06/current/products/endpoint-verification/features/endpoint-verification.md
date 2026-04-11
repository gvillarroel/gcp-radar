---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:47.690Z"
product_name: "Endpoint Verification"
product_slug: "endpoint-verification"
feature_name: "Endpoint Verification"
feature_slug: "endpoint-verification"
latest_feature_date: "2018-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user"
  - "https://docs.cloud.google.com/endpoint-verification/docs/device-information"
  - "https://docs.cloud.google.com/endpoint-verification/docs/quickstart"
keywords:
  - "endpoint"
  - "verification"
  - "is"
  - "tool"
  - "for"
  - "verifying"
  - "devices"
  - "and"
---

# Endpoint Verification

Product: Endpoint Verification
Coverage: LOW

## Step 02 Summary

Endpoint Verification is a Google tool for verifying endpoint devices and collecting device information for access decisions.

## Extended Definition

Endpoint Verification is a Google tool for verifying endpoint devices and collecting device information for access decisions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user](https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user)
- [https://docs.cloud.google.com/endpoint-verification/docs/device-information](https://docs.cloud.google.com/endpoint-verification/docs/device-information)
- [https://docs.cloud.google.com/endpoint-verification/docs/quickstart](https://docs.cloud.google.com/endpoint-verification/docs/quickstart)

## Supporting Pages

### "Troubleshoot sync issues with the Endpoint Verification extension \_|\_\

- URL: [https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user](https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Endpoint Verification Guides Send feedback Troubleshoot sync issues with the Endpoint Verification extension Stay organized with collections Save and categorize content based on your preferences.
- To do so, Endpoint Verification uses the Windows API and that API needs the device to be trusted for delegation, and the current user account must be configured to allow delegation.
- If the sync is unsuccessful, do the following: In the list of passwords, right-click Endpoint Verification Safe Storage and then click Delete "Endpoint Verification Safe Storage" .
- To help them diagnose your issue, download the Endpoint Verification logs and share them with your administrator: On your device, open the Chrome browser.

### "Device attributes collected by Endpoint Verification \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/endpoint-verification/docs/device-information](https://docs.cloud.google.com/endpoint-verification/docs/device-information)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Attribute name Description Supported OS Serial number The serial number of the device. macOS ChromeOS (only for enterprise-enrolled devices) Windows Linux Hostname The hostname of the device. macOS Windows Linux Device ID The unique identification number associated with the device. macOS Windows Linux Wifi MAC Address The MAC address of the device. macOS ChromeOS Windows Linux Configurable device attributes Endpoint Verification provides an option to collect granular device attributes called configurable device attributes , such as metadata attributes of files, folders, and binaries; registry entries; and properties in a plist.
- Windows device.chrome.is third party blocking enabled == true What's next Set up Endpoint Verification on your devices Deploy Endpoint Verification Enable collection of configurable device attributes Create device-based access levels Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: String comparisons are case-sensitive. macOS Windows device.clients["bce"].data["registry config"]["config name"]["value"] == device.clients["bce"].data["plist config"]["config name"]["value"] == Chrome browser attributes The following table describes the Google Chrome browser attributes that are collected by Endpoint Verification that you can use to create access levels: Attribute name Description Supported OS Example of using the attribute in the CEL expressions versionAtLeast(min version) The minimum version of the Chrome browser. macOS ChromeOS Windows Linux device.chrome.versionAtLeast("88.0.4321.44") management state The management state of the browser for a device.
- Windows device.clients["bce"].data["hotfixes"].exists(x, x == "KB0001") == true Device identity attributes The following table describes the attributes that are collected by Endpoint Verification that you can use to identify devices.

### Set up Endpoint Verification on your devices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/endpoint-verification/docs/quickstart](https://docs.cloud.google.com/endpoint-verification/docs/quickstart)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Set up Endpoint Verification on your devices This quickstart document guides you how to set up Endpoint Verification on your devices to understand the security posture of your devices.
- What's next Endpoint Verification overview Device attributes collected by Endpoint Verification Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Turn on Endpoint Verification To collect information about the devices accessing the resources of your organization, Endpoint Verification must be turned on for your organizational unit.
- To confirm that Endpoint Verification is turned on, do the following: In the Google Workspace Admin console, go to the Devices page.

