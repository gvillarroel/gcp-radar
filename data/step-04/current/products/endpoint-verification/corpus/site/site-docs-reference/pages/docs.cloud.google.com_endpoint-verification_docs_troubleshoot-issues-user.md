---
title: "Troubleshoot sync issues with the Endpoint Verification extension \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/deploying-with-admin-console
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
  title: "Troubleshoot sync issues with the Endpoint Verification extension \_|\_\
    \ Google Cloud Documentation"
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
Troubleshoot sync issues with the Endpoint Verification extension
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how users of an organization can resolve the
Endpoint Verification synchronization issues on their devices.
If your issue is not listed in this document, contact your administrator. To
help them diagnose your issue, download the Endpoint Verification logs and share
them with your administrator:
On your device, open the Chrome browser.
In the Chrome browser toolbar, right-click Endpoint Verification
and then click Options > Download Log .
Sync issues to due Chrome browser
If the version of your Chrome browser is earlier than 110, you might encounter
sync issues because Endpoint Verification is no longer supported on Chrome versions
earlier than 110.
Error message: Failed to sync. A sync will be retried shortly.
To resolve this issue, update your Chrome browser to version 110 or later.
Sync issues on macOS
This section lists sync issues that you might encounter on macOS and provides
suggestions for how to fix them.
Can't sync because of a Keychain authorization error
In the Chrome browser, you might get an error that Endpoint Verification can't sync
because of a Keychain authorization error.
To resolve this issue, sign out of your computer and then sign in again.
If the issue persists, complete the following steps:
On your Mac, open the Keychain Access app.
In the Default keychains pane, click login .
If the icon is locked, right-click login and then click
Unlock Keychain "login" .
Note: If you can't unlock the login keychain or get into Access Control, see
Keychain Access User Guide .
Click the Passwords tab.
In the list of passwords, double-click Endpoint Verification Safe Storage
and click Access Control .
Select Allow all applications to access this item and click
Save changes .
In the Chrome browser toolbar, click
Endpoint Verification > Sync now .
If the sync is unsuccessful, do the following:
In the list of passwords, right-click Endpoint Verification Safe Storage
and then click Delete "Endpoint Verification Safe Storage" .
In the Chrome browser toolbar, click
Endpoint Verification > Sync now .
Sync issues on Windows
This section lists sync issues that you might encounter on Windows OS and
provides suggestions for how to fix them.
Can't sync because of a Data Protection API error
In the Chrome browser, you might get an error that Endpoint Verification can't sync
because of a Data Protection API error.
Endpoint Verification stores an encryption key in the Windows Registry during initial
device enrollment. Subsequent syncs rely on Windows Data Protection API to
access this key. Sync failures can occur if Endpoint Verification encounters errors
when decrypting the key, often due to encryption by a different user.
This issue might arise from S4U scheduled tasks, outdated Chrome versions,
Windows configuration issues, or improper machine or user resets.
To resolve this issue, complete the following steps:
Determine if an S4U task is configured:
Lock the device screen.
Within 15 seconds, unlock the device screen.
Within 15 seconds, in the Chrome browser toolbar,
click Endpoint Verification > Sync now .
If the sync is successful, the error is likely caused by an S4U task.
Identify the S4U tasks:
Open PowerShell and run the following script:
Get-ScheduledTask | foreach { If (([xml](Export-ScheduledTask -TaskName $_.TaskName -TaskPath $_.TaskPath)).GetElementsByTagName("LogonType").'#text' -eq "S4U") { $_.TaskName } }
If the output includes one or more lines containing a task name,
fix the problem:
On your Windows device, open Task Scheduler .
Scroll to Active Tasks .
Find the tasks from the output and do the following for each task:
Double-click the task.
Click Properties .
Clear the Do not store password checkbox and click Ok .
Lock the device screen and then unlock it.
Within 15 seconds, in the Chrome browser toolbar, click
Endpoint Verification > Sync now .
If the issue persists, do the following:
Warning: You can make your computer inoperable if you incorrectly configure
registry keys. Use this approach only if you're comfortable editing registry
keys. Your administrator might contact you because this approach creates
duplicate entries for your device in their managed device list.
In the Windows Start menu, click Run .
In the Run box, enter regedit .
In Registry Editor , find
HKEY_CURRENT_USER\Software\Google\Endpoint Verification\Safe Storage and
delete it.
In the Chrome browser toolbar, click Endpoint Verification >
Sync now .
If the issue persists, investigate device account administration and
contact Windows support for further assistance.
Can't sync because can't recover data protection key
In the Chrome browser, you might get an error that Endpoint Verification can't
recover the data protection key and can't sync. This error can occur when
S4U scheduled tasks run on your device and you have an earlier version of
the Chrome browser on your device.
On Windows, Endpoint Verification should be able to read information on the device.
To do so, Endpoint Verification uses the Windows API and that API needs the device to
be trusted for delegation, and the current user account must be configured to
allow delegation. The SEC_E_DELEGATION_REQUIRED
issue can occur in Windows, leading to API operation failures.
To resolve the problem, complete the following steps:
Identify and edit S4U tasks:
On your Windows device, open PowerShell and run the following script:
Get-ScheduledTask | foreach { If (([xml](Export-ScheduledTask -TaskName $_.TaskName -TaskPath $_.TaskPath)).GetElementsByTagName("LogonType").'#text' -eq "S4U") { $_.TaskName } }
If the output includes one or more lines containing a task name, then edit
these tasks:
Open Task Scheduler .
Scroll to Active Tasks .
Find the tasks from the output and do the following for each task:
Double-click the task.
Click Properties .
Clear the Do not store password checkbox and click Ok .
Remove the registry key and start a new session
Warning: You can make your computer inoperable if you incorrectly configure
registry keys. Use this approach only if you're comfortable editing registry
keys. Your administrator might contact you because this approach creates
duplicate entries for your device in their managed device list.
In the Windows Start menu, click Run .
In the Run box, enter regedit .
In Registry Editor , find
HKEY_CURRENT_USER\Software\Google\Endpoint Verification\Safe Storage and
delete it.
In the Chrome browser toolbar, click Endpoint Verification >
Sync now .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
