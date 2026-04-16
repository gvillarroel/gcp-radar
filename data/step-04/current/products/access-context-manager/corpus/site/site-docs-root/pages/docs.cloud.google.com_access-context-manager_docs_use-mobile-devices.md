---
title: "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices
  title: "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Use mobile devices with access levels
Stay organized with collections
Save and categorize content based on your preferences.
This page provides information about using mobile devices with access levels.
Overview
Limitations
Getting started
Troubleshooting
Overview
Access Context Manager supports using Google basic mobile management and
advanced mobile management to create access levels that check for certain
characteristics of mobile devices.
For iOS and Android devices, requests can be accepted or rejected based on:
Whether screen lock is enabled.
Whether storage on the device is encrypted.
Note: For iOS devices, encryption is enabled only if screen lock is
also enabled.
Whether the device is owned by your enterprise.
Whether the device has been approved by an administrator.
The OS version running on the device.
Because Access Context Manager relies on MDM, the
minimum device requirements for basic and advanced management apply.
Limitations
This section describes the limitations of mobile device support in
Access Context Manager.
Request origin
Currently, access levels checking mobile device attributes will permit access
only if:
The request is made from Safari or Google Chrome.
The request is made by a user account in your Organization.
If a request from a mobile device doesn't meet the previous criteria, that
request will be denied, even if the request otherwise meets the requirements of
the access level.
Enforcement delays
When you change settings for your managed mobile devices, it can take time for
those changes to propagate . For example, if you modify your basic management
settings to require use of a screen lock, it can take up to 24 hours to
propagate that change.
While changes to access levels usually come into effect within a few minutes,
enforcement of mobile device attributes can be delayed while changes to your
managed mobile device settings are propagated.
Getting started
To start using access levels to check mobile device attributes, do the
following:
Set up basic mobile management or advanced mobile management for
your organization.
This step requires access to the Google Admin console . To limit access
to the console, Administrator privilege can be granted specifically for
mobile device management .
On your devices,
sign in to Chrome using a corporate account .
For devices that should be permitted access to protected services, ensure
requests are coming from Safari or Google Chrome.
Create an access level that includes device policy attributes for
your organization's mobile devices.
Troubleshooting
If an access level denies a user request but the access level appears to be
configured correctly, the user may need to force the server-side device state
to refresh.
Force refresh an Android device
To force a refresh of the server-side state of an Android device:
If you are signed in to accounts.google.com on your device's
browser, sign out of the account.
Open your phone's Settings app.
Open the Accounts section of the app.
Remove the corporate account from the device.
Add the corporate account back to the device.
When the account is added back to the device, requests for access should be
permitted as expected.
Force refresh an iOS device
To force a refresh of the server-side state of an iOS device:
If you are signed in to accounts.google.com on your device's
browser, sign out of the account.
Go to a Google app on the device, such as Gmail.
Remove the corporate account from the device.
Add the corporate account back to the device.
When the account is added back to the device, requests for access should be
permitted as expected.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
