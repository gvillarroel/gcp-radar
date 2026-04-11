---
title: "Delete devices \_|\_ Endpoint Verification \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/delete-device
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/deploying-with-admin-console
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/delete-device
  title: "Delete devices \_|\_ Endpoint Verification \_|\_ Google Cloud Documentation"
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
Delete devices
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can delete devices from the device
inventory when they must temporarily stop syncing user-account data,
such as installed extensions, bookmarks, and history to a device.
As an administrator, when you delete a device, the device no longer syncs
user-account data, but no information is removed from it. The device is
added back to the list after the next sync unless an access level blocks access.
In this case, the device might require the administrator approval to sync data
again.
Note: Deleting a device from the device inventory generally doesn't delete
user-account data. To delete all data from a device, you can
wipe the account from the device or wipe the entire device .
To delete a device, do the following:
In the Google Workspace Admin console, go to the Devices page.
Go to Devices
Click Endpoints .
For the device you want to delete, click
More
more_vert and select Delete device .
Optional: If you want to delete multiple devices, select all of the required
devices, click More
more_vert , and select Delete devices .
What's next
Approve devices
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
