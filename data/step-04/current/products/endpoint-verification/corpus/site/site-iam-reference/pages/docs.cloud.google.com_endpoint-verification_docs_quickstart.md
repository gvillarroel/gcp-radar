---
title: "Set up Endpoint Verification on your devices \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/quickstart
  title: "Set up Endpoint Verification on your devices \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Set up Endpoint Verification on your devices
This quickstart document guides you how to set up Endpoint Verification on your
devices to understand the security posture of your devices.
Before you begin
You must have a Google Workspace administrator account with the
Service Settings privilege.
Log in to the Google Admin console by using your Google Workspace
administrator account.
Log in to Google Admin console
You must have an organization unit with at least one device running one of the following operating systems:
ChromeOS
Apple® Mac® OS X® El Capitan (10.11) or later
Microsoft® Windows® 10 and 11
Linux® Debian® and Ubuntu®
You must use Chrome 110 or later. While you can install Endpoint Verification on any Chromium-based browser, it's supported only on Chrome browser.
Turn on Endpoint Verification
To collect information about the devices accessing the resources of your organization,
Endpoint Verification must be turned on for your organizational unit. By default, Endpoint Verification
is turned on.
To confirm that Endpoint Verification is turned on, do the following:
In the Google Workspace Admin console, go to the Devices page.
Go to Devices
In the navigation menu, click Mobile & endpoints > Settings > Universal .
In the Universal settings pane, click Data access .
In the Data access pane, click Device signals .
Ensure that the Collect device signals using endpoint verification checkbox
is selected.
To save the settings, click Save , otherwise, click Cancel .
Install Endpoint Verification on your devices
In the Google Workspace Admin console, go to the Devices page.
Go to Devices
In the navigation menu, click Chrome > Apps & extensions > Users & browsers .
From the Organizational Units pane, select your organization unit for
which you want to install the Endpoint Verification extension.
Hold the pointer over Add , and click Add from Chrome Web Store .
In the Search the store field, enter Endpoint Verification .
Click Endpoint Verification and then click Select .
In the Endpoint Verification dialog, ensure that Allow access to keys
and Allow enterprise challenge are enabled.
Allow access to keys : allows the Endpoint Verification extension to access
client certificates and keys on ChromeOS.
Allow enterprise challenge : allows the Endpoint Verification extension to use the
Verified Access feature on ChromeOS. For more information, see Chrome Verified Access Overview .
Click the Installation policy drop-down for Endpoint Verification, and select
Force install .
Click Save .
View your devices information
In the Admin console, go to the Devices page.
Go to Devices
Click Endpoints .
The list of devices in your organization is displayed.
To get more information about a specific device, click the device.
The device information is displayed for that specific device.
The device details show that the device is managed by Endpoint Verification.
Clean up
If you don't want Endpoint Verification to manage your devices,
do the following:
In the Google Workspace Admin console, go to the Devices page.
Go to Devices
In the navigation menu, click Mobile & endpoints > Settings > Universal .
In the Universal settings pane, click Data access .
In the Data access pane, click Device signals .
Clear the Monitor which devices access organization data checkbox.
Click Save .
What's next
Endpoint Verification overview
Device attributes collected by Endpoint Verification
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
