---
title: "Deploy Endpoint Verification \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/deploying-with-admin-console
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/deploying-with-admin-console
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/deploying-with-admin-console
  title: "Deploy Endpoint Verification \_|\_ Google Cloud Documentation"
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
Deploy Endpoint Verification
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can deploy Endpoint Verification to their
organization to assess and monitor the security posture of the devices in
their organization. As an administrator, you deploy Endpoint Verification from the
Google Admin console.
For more information about Endpoint Verification, see
Endpoint Verification overview .
To deploy Endpoint Verification, you complete the following process:
Turn on Endpoint Verification.
Install Endpoint Verification on your devices.
If required for your device type, install the Endpoint Verification helper app.
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
Install the Endpoint Verification helper app
If you want to do any of the following tasks, install the Endpoint Verification
helper app on your organizational unit:
Set up Chrome Enterprise Premium and CrowdStrike Falcon Zero Trust Assessment (Falcon ZTA) integration .
Set up certificate-based access for Google Cloud resources .
Collect device attributes from the devices that are using Chrome version
M92 or earlier.
Deploy the helper app package
Use the device management tool of your choice to deploy the following packages:
macOS: helper.dmg
Windows: EndpointVerification.msi
You can use Jamf on Apple Mac devices and Active Directory on
Microsoft Windows devices as shown in the following examples.
Jamf
Download the helper.dmg
file.
Mount the helper.dmg file and extract EndpointVerification.pkg .
To deploy EndpointVerification.pkg , follow the instructions in Deploying Mac Packages .
After the app appears in the Apps page, it's ready for deployment with
Blueprint.
To deploy the app to all devices, follow the instructions in Deploying an App to All Devices in a Blueprint .
Active Directory
Download the EndpointVerification.msi
file and use this file when creating a distribution point.
Follow the instructions
in Use Group Policy to remotely install software .
What's next
Monitor device inventory
Create device-based access levels
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
