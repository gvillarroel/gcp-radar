---
title: "Enable collection of configurable device attributes \_|\_ Endpoint Verification\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/collect-config-attributes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/collect-config-attributes
  title: "Enable collection of configurable device attributes \_|\_ Endpoint Verification\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Endpoint Verification
Guides
Send feedback
Enable collection of configurable device attributes
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can enable Endpoint Verification to collect
granular device attributes called configurable device attributes , such as
metadata attributes of files, folders, and binaries; registry entries; and
properties in a plist.
Administrators can use these configurable device attributes to create access
levels.
Before you begin
Deploy Endpoint Verification .
Install the Endpoint Verification helper app (version 2.11 or later) .
Configure the Endpoint Verification settings
To enable Endpoint Verification to collect the device configuration attributes , do
the following:
Log in to the Google Admin console by using your Google Workspace
administrator account.
Log in to Google Admin console
In the navigation menu, click Devices > Mobile & endpoints > Settings > Universal .
Expand the Endpoint Verification configuration tab.
From the Organizational Units pane, select your organization unit.
Note: If the organization unit that you selected is a child of a top-level
organizational unit, then the settings that you configure will override the
settings that were inherited from the top-level organizational unit.
Depending on the type of configurable device attributes you want Endpoint Verification
to collect, configure the settings:
To collect metadata attributes of a file, folder, or binary, do the following:
In the File or folder configuration section, click Add configuration .
In the Add configuration dialog, enter the following details:
Name for the configuration.
Operating system of the devices.
Path to the file, folder, or binary.
Note: The size of a file or a binary must be less than or equal to 1 GB.
If you entered the path for a binary, then select
Is executable .
Click Add configuration .
To collect registry or plist configuration attributes, do the following:
In the Registry or plist configurations section, click Add configuration .
In the Add configuration dialog, enter the following details:
Name for the configuration.
Operating system of the devices.
Path to the registry or plist file.
Note: The size of a plist file must be less than or equal to 512 MB.
Key (optional for Windows):
Windows: a subkey of the registry, for example: IsClipboardSignalProducingFeatureAvailable .
If you don't enter a value, then the default value is taken.
macOS: keys in the plist file, which can be a number, string, or a boolean value.
You can also provide nested keys by using . as the delimiter.
For example, if there is a dictionary B inside dictionary A and dictionary B contains a string or number with key key1 , the final key would be A.B.key1 .
Arrays are supported in the following manner: A.B.key[0] or A.B.key[1].C . Only hard-coded indexes are supported.
Click Add configuration .
What's next
Learn more about the configurable device attributes .
Create device-based access levels .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
