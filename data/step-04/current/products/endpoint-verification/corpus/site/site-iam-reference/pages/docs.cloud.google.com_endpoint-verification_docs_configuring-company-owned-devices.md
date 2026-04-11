---
title: "Add company-owned devices \_|\_ Endpoint Verification \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/configuring-company-owned-devices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/configuring-company-owned-devices
  title: "Add company-owned devices \_|\_ Endpoint Verification \_|\_ Google Cloud\
    \ Documentation"
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
Add company-owned devices
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can add devices to their organization's
inventory to track details, such as device type and who it's assigned to.
As an administrator, you can add devices in the
Google Admin console to keep an inventory of the devices in your organization.
Before you begin
Ensure that the devices you want to add to your organization's inventory are
running one of the following operating systems:
ChromeOS
Apple® Mac® OS X® El Capitan (10.11) or later
Microsoft® Windows® 10 and 11
Linux® Debian® and Ubuntu®
Log in to the Google Admin console by using your Google Workspace
administrator account.
Log in to Google Admin console
Add devices to your inventory
To register devices as company-owned, you can import the serial numbers of
devices in the Admin console.
In the Google Workspace Admin console, go to the Devices page.
Go to Devices
In the navigation menu, click Mobile & endpoints >
Company owned inventory .
To add the required devices, click add .
In the Import company owned devices dialog, select the type of device you
want to import and click Download import template .
The import template downloads to your computer.
Open the import template and do the following:
Enter the serial number of the device. The string you enter must match the
serial number of the device. If it doesn't, you can upload the device to
the Admin console, but you can't assign it to a user.
Optional: To track the device, enter an asset tag.
If you didn't include asset tags, do one of the following steps:
In the file header, remove ,Asset Tag .
Include a comma after each serial number.
Each piece of data in a row must now be separated with a comma.
Individual rows must be separated by a new line.
Save the file.
In the Import company owned devices dialog, click Upload file .
Select the import file that you saved and click Import .
Note: If you experience issues when importing the devices, see
Troubleshoot device import issues .
After the import process is completed, you receive an email that indicates the
number of devices that were successfully imported.
What's next
View company-owned inventory
Create device-based access levels
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
