---
title: "HostApp \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp
  title: "HostApp \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
HostApp
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The HostApp enum indicates the Google Workspace application from which a Google Workspace Add-on or Google Chat app launches.
For add-ons, the HostApp specifies the originating application like Gmail, Calendar, or Drive, while for Chat apps, it's always CHAT .
UNSPECIFIED_HOST_APP is used when Google cannot identify the host app, and DEMO is not utilized.
The Google Workspace application for a Google Workspace add-on or Google Chat app.
For add-ons, the Workspace application from which a Google Workspace add-on launches. For Chat apps, the host app is always CHAT .
Enums
UNSPECIFIED_HOST_APP
Google can't identify a host app.
GMAIL
The add-on launches from Gmail.
CALENDAR
The add-on launches from Google Calendar.
DRIVE
The add-on launches from Google Drive.
DEMO
Not used.
DOCS
The add-on launches from Google Docs.
MEET
The add-on launches from Google Meet.
SHEETS
The add-on launches from Google Sheets.
SLIDES
The add-on launches from Google Slides.
DRAWINGS
The add-on launches from Google Drawings.
CHAT
A Google Chat app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-10 UTC."],[],["The content defines the host applications for Google Workspace add-ons and Google Chat apps. For add-ons, host apps include Gmail, Calendar, Drive, Docs, Meet, Sheets, Slides, and Drawings. Each of these indicates where the add-on is launched from. For Chat apps, the host app is always `CHAT`. An `UNSPECIFIED_HOST_APP` means Google can't identify the host. `DEMO` is listed but not used for either add-ons or Chat apps.\n"]]
